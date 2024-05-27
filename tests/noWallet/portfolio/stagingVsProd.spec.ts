import { expect, test } from '#noWalletFixtures';
import { longTestTimeout } from 'utils/config';
import { comparePositionsData, shortenAddress } from 'utils/general';
import { PortfolioData } from 'src/pages/portfolio';

test.describe('Staging vs Production - Wallet not connected', async () => {
	/* 
		Overview values -- DONE
		Number of positions -- DONE
		Position types and pools -- DONE
		Assets -- TO BE DONE
	*/

	[
		'0x9C3c6cF9D29Ab9E9e14503dbfC9aD8bB2A0E37EF',
		'0x000009818d53763C701bA86586152c667Ac3AcdB',
		'0xae362a72935dac355be989bf490a7d929f88c295',
		'0x280dEd1b7e430BeD0Cbb0Aace452Fd2ADEf2b581',
		'0x83664B8a83b9845Ac7b177DF86d0F5BF3b7739AD',
		'0x39Cc77F88C7CFE2139066a7e987746e2Cd3bAd38',
	].forEach((walletAddress) =>
		test(`It should show same info in Portfolio - Staging vs Production - ${shortenAddress(
			walletAddress
		)} @regression`, async ({ app }) => {
			test.info().annotations.push({
				type: 'Test case',
				description: '14090',
			});

			test.setTimeout(longTestTimeout);

			let stagingData: PortfolioData;
			let productionData: PortfolioData;

			// STAGING
			await app.portfolio.loadPortfolioPageAndPositions({ environment: 'staging', walletAddress });
			await app.portfolio.positionsHub.showEmptyPositions();
			await app.portfolio.shouldHaveViewingWalletBanner(shortenAddress(walletAddress));
			stagingData = await app.portfolio.getPortfolioData();

			// PRODUCTION
			await app.portfolio.loadPortfolioPageAndPositions({
				environment: 'production',
				walletAddress,
			});
			await app.portfolio.positionsHub.showEmptyPositions();
			await app.portfolio.shouldHaveViewingWalletBanner(shortenAddress(walletAddress));
			productionData = await app.portfolio.getPortfolioData();

			for (const property in productionData) {
				if (property === 'positionsListedData') {
					expect(
						comparePositionsData(
							stagingData.positionsListedData,
							productionData.positionsListedData
						)
					).toBeTruthy();
				} else {
					if (stagingData[property] !== 0 && stagingData[property] !== 0) {
						const diff =
							((stagingData[property] - productionData[property]) / stagingData[property]) * 100;
						expect(Math.abs(diff)).toBeLessThan(0.1);
					}
				}
			}
		})
	);
});
