import { test } from '#noWalletFixtures';
import { extremelyLongTestTimeout, veryLongTestTimeout } from 'utils/config';

const numberOfPools = Array.from({ length: 20 }, (_, index) => 0 + index);
const numberOfPoolsPage9 = Array.from({ length: 16 }, (_, index) => 0 + index);

test.describe('Borrow page', async () => {
	test('It should open Borrow pool finder', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: '11557',
		});

		await app.borrow.open();
		await app.borrow.productHub.list.openPoolFinder();

		await app.poolFinder.shouldHaveHeader('Borrow');
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 1 - ${poolIndex} @regression`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 2 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 3 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 4 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 5 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 5 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 6 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 5 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 6 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 7 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 5 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 6 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 7 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPools.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 8 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 5 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 6 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 7 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 8 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	numberOfPoolsPage9.forEach((poolIndex) => {
		test(`It should open position page for all available BORROW pools - Page 9 - ${poolIndex}`, async ({
			app,
		}) => {
			await app.borrow.open();

			// Set Min Liquidity to '0' so that all pools are listed
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0.5 });
			await app.borrow.productHub.filters.setMinLiquidity({ value: 0 });

			// Move to page 2 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 3 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 4 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 5 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 6 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 7 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 8 inproduct hub
			await app.borrow.productHub.list.nextPage();
			// Move to page 9 inproduct hub
			await app.borrow.productHub.list.nextPage();

			// Logging pool info for debugging purposes
			const pool = await app.homepage.productHub.list.nthPool(poolIndex).getPool();
			const strategy = await app.homepage.productHub.list.nthPool(poolIndex).getStrategy();
			const protocol = await app.homepage.productHub.list.nthPool(poolIndex).getProtocol();
			const network = await app.homepage.productHub.list.nthPool(poolIndex).getNetwork();
			console.log('++++ Pool Index: ', poolIndex);
			console.log('++++ Pool: ', pool);
			console.log('++++ Strategy: ', strategy);
			console.log('++++ Protocol: ', protocol);
			console.log('++++ Network: ', network);

			await app.homepage.productHub.list.nthPool(poolIndex).shouldBevisible();
			await app.homepage.productHub.list.nthPool(poolIndex).open();

			await app.position.overview.shouldBeVisible();
		});
	});

	(
		[
			{ network: 'Ethereum', protocol: 'Aave V3' },
			{ network: 'Arbitrum', protocol: 'Aave V3' },
			{ network: 'Optimism', protocol: 'Aave V3' },
			{ network: 'Ethereum', protocol: 'Spark' },
		] as const
	).forEach(({ network, protocol }) =>
		test.skip(`It should open Borrow position page for all available pairs - ${network} - ${protocol}`, async ({
			app,
		}) => {
			test.setTimeout(
				network === 'Ethereum' && protocol === 'Aave V3'
					? extremelyLongTestTimeout
					: veryLongTestTimeout
			);

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
