import { test } from '#noWalletFixtures';
import { testTimeout } from 'utils/config';

test.describe('Borrow', async () => {
	test('It should list only Borrow positions', async ({ app }) => {
		await app.borrow.open();
		await app.borrow.productHub.header.position.shouldBe('Borrow');
		await app.borrow.productHub.list.allPoolsShouldBe('Borrow');
	});

	// !!! Test skipped until Ajna products are enabled back
	test.skip('It should open Borrow pool finder', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: '11557',
		});

		await app.borrow.open();
		await app.borrow.productHub.list.openPoolFinder();

		await app.poolFinder.shouldHaveHeader('Borrow');
	});

	(
		[
			{ network: 'Ethereum', protocol: 'Aave V3' },
			{ network: 'Arbitrum', protocol: 'Aave V3' },
			{ network: 'Optimism', protocol: 'Aave V3' },
			{ network: 'Ethereum', protocol: 'Spark' },
		] as const
	).forEach(({ network, protocol }) =>
		test(`It should open Borrow position page for all available pairs - ${network} - ${protocol}`, async ({
			app,
		}) => {
			test.setTimeout(testTimeout);

			await app.borrow.open();

			await app.borrow.productHub.filters.networks.select({
				currentFilter: 'All networks',
				networks: [network],
			});
			await app.borrow.productHub.filters.protocols.select({
				currentFilter: 'All protocols',
				protocols: [protocol],
			});

			const allPairs = await app.borrow.productHub.list.getAllPairs();

			for (const pair of allPairs) {
				await test.step(`pair - ${pair}`, async () => {
					await app.borrow.open();
					await app.borrow.productHub.filters.networks.select({
						currentFilter: 'All networks',
						networks: [network],
					});
					await app.borrow.productHub.filters.protocols.select({
						currentFilter: 'All protocols',
						protocols: [protocol],
					});
					// Wait for element to be visible
					await app.borrow.productHub.list.byPairPool(pair).shouldBevisible();
					await app.borrow.productHub.list.byPairPool(pair).open();

					await app.position.shouldHaveHeader(`Open ${pair}`);
					await app.position.overview.shouldBeVisible();
				});
			}
		})
	);
});
