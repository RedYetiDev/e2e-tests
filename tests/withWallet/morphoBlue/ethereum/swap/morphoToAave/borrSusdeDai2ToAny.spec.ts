import { BrowserContext, expect, test } from '@playwright/test';
import { resetState } from '@synthetixio/synpress/commands/synpress';
import { metamaskSetUp } from 'utils/setup';
import * as tenderly from 'utils/tenderly';
import { setup } from 'utils/setup';
import { extremelyLongTestTimeout, veryLongTestTimeout } from 'utils/config';
import { App } from 'src/app';
import { openPosition, swapPosition } from 'tests/sharedTestSteps/positionManagement';

let context: BrowserContext;
let app: App;
let forkId: string;
let walletAddress: string;

test.describe.configure({ mode: 'serial' });

// BUG 'Any' TO 'Aave'
test.describe.skip('Morpho Blue Borrow - Swap to Aave V3', async () => {
	test.afterAll(async () => {
		await tenderly.deleteFork(forkId);

		await app.page.close();

		await context.close();

		await resetState();
	});

	test.use({
		viewport: { width: 1400, height: 720 },
	});

	// Create a Morpho Blue position as part of the Swap tests setup
	test('It should open a Morpho Blue Borrow position - SUSDE/DAI-2', async () => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		test.setTimeout(extremelyLongTestTimeout);

		await test.step('Test setup', async () => {
			({ context } = await metamaskSetUp({ network: 'mainnet' }));
			let page = await context.newPage();
			app = new App(page);

			({ forkId, walletAddress } = await setup({
				app,
				network: 'mainnet',
				extraFeaturesFlags: 'EnableRefinance:true',
			}));

			await tenderly.setTokenBalance({
				forkId,
				walletAddress,
				network: 'mainnet',
				token: 'SUSDE',
				balance: '10000',
			});
		});

		await app.page.goto('/ethereum/morphoblue/borrow/SUSDE-DAI-2#setup');

		// Depositing collateral too quickly after loading page returns wrong simulation results
		await app.position.overview.waitForComponentToBeStable();

		await openPosition({
			app,
			forkId,
			deposit: { token: 'SUSDE', amount: '5000' },
			borrow: { token: 'DAI', amount: '1000' },
		});

		await app.page.waitForTimeout(3000);

		await swapPosition({
			app,
			forkId,
			reason: 'Switch to higher max Loan To Value',
			originalProtocol: 'Morpho',
			targetProtocol: 'Aave V3',
			targetPool: { colToken: 'ETH', debtToken: 'DAI' },
			upToStep5: true,
		});
	});

	(
		[
			{ colToken: 'ETH', debtToken: 'DAI' },
			{ colToken: 'ETH', debtToken: 'USDC' },
			{ colToken: 'ETH', debtToken: 'WBTC' },
			{ colToken: 'ETH', debtToken: 'USDT' },
			{ colToken: 'LDO', debtToken: 'USDT' }, // BUG - 15943 - NOT working
		] as const
	).forEach((targetPool) =>
		test(`It should swap a Morpho Borrow position (WSTETH/USDC) to Aave V3 Multiply (${targetPool.colToken}/${targetPool.debtToken})`, async () => {
			test.info().annotations.push({
				type: 'Test case',
				description: 'xxx',
			});

			test.setTimeout(veryLongTestTimeout);

			await expect(async () => {
				// Wait an reload to avoid flakiness
				await app.page.waitForTimeout(1000);
				await app.page.reload();

				await swapPosition({
					app,
					forkId,
					reason: 'Switch to higher max Loan To Value',
					originalProtocol: 'Morpho',
					targetProtocol: 'Aave V3',
					targetPool: { colToken: targetPool.colToken, debtToken: targetPool.debtToken },
					existingDpmAndApproval: true,
					rejectSwap: true,
				});
			}).toPass();
		})
	);
});
