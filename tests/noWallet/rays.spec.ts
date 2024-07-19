import { test } from '#noWalletFixtures';

test.describe('No-wallet connected - Rays', async () => {
	test('It should link to Rays blog and open in new tab  @regression', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.rays.openPage();
		await app.rays.shouldLinkToRaysBlogInNewTab();
	});

	test('It should open connect-wallet popup  - Rays page header @regression', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.rays.openPage();

		await app.rays.header.connectWallet();
		await app.modals.connectWallet.shouldBeVisible();
	});

	test('It should open connect-wallet popup - Claim Rays block @regression', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.rays.openPage();

		await app.rays.connectWallet();
		await app.modals.connectWallet.shouldBeVisible();
	});

	test('It should calculate rays to be earned with migration', async ({ app }) => {
		await app.rays.openPage();
		await app.rays.openCalculator();
		await app.rays.calculator.shouldEstimateRays({
			perYear: 0,
			migration: 0,
			afterOneYear: 0,
		});

		await app.rays.calculator.typeAmount('10000');
		await app.rays.calculator.calculateRays();
		await app.rays.calculator.shouldEstimateRays({
			perYear: 670,
			migration: 130,
			afterOneYear: 800,
		});
	});

	test('It should calculate rays to be earned without migration', async ({ app }) => {
		await app.rays.openPage();
		await app.rays.openCalculator();
		await app.rays.calculator.shouldEstimateRays({
			perYear: 0,
			migration: 0,
			afterOneYear: 0,
		});

		await app.rays.calculator.typeAmount('20000');
		await app.rays.calculator.selectMigration('No');
		await app.rays.calculator.calculateRays();
		await app.rays.calculator.shouldEstimateRays({
			perYear: 1400,
			migration: 0,
			afterOneYear: 1400,
		});
	});

	test('It should have 5x Leaderboard results by default @regression', async ({ app }) => {
		await app.rays.openPage();
		await app.rays.leaderboard.shouldHaveResults(5);
	});

	test('It should search for wallet address in Leaderboard @regression', async ({ app }) => {
		await app.rays.openPage();

		// Wait for leaderboard to fully load before using search tool
		await app.rays.leaderboard.shouldHaveResults(5);
		await app.page.waitForTimeout(1_000);

		await app.rays.leaderboard.search('0xbEf4befb4F230F43905313077e3824d7386E09F8');
		await app.rays.leaderboard.shouldDisplaySearchedAddressInTopRow(
			'0xbEf4befb4F230F43905313077e3824d7386E09F8'
		);
	});

	test('It should show Rays detailed info from leaderboard result @regression', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.rays.openPage();
		const walletAddress = await app.rays.leaderboard.viewRaysDetailedInfo({ leaderboardResult: 1 });
		await app.rays.shouldShowRaysDetailedInfo(walletAddress);
	});

	test('It should redirect to Leaderboard page', async ({ app }) => {
		await app.rays.openPage();
		await app.rays.leaderboard.shouldNotHaveNextPage();

		await app.rays.leaderboard.viewFullLeaderboard();
		await app.rays.leaderboard.shouldHaveNextPage();
	});

	test('It should show 100x Leaderboard results per page', async ({ app }) => {
		await app.rays.leaderboard.openPage();
		await app.rays.leaderboard.shouldHaveResults(100);
	});

	test('It should have links to Rays blog in Leaderboard, and open in new tab  @regression', async ({
		app,
	}) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.rays.openPage();
		await app.rays.leaderboard.shouldLinkToRaysBlogInNewTab();
	});

	test('It should show position Rays - Overview & Manage - Without any automations set up @regression', async ({
		app,
	}) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.position.openPage('/ethereum/morphoblue/multiply/WSTETH-ETH-1/1467#overview');
		await app.position.overview.shouldHaveRays('0.000[0-9]');
		await app.position.manage.shouldHaveAutomationBoostRays({
			raysCount: '0.000[0-9]',
			automations: ['Stop Loss', 'Auto Sell', 'Auto Buy', 'Take Profit'],
		});
	});

	test('It should show position Rays - Overview & Manage - With Optimization set up', async ({
		app,
	}) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.position.openPage('/ethereum/aave/v3/multiply/ETH-DAI/1670#overview');
		await app.position.overview.shouldHaveRays('0.04[0-9]{2}');
		await app.position.manage.shouldHaveAutomationBoostRays({
			raysCount: '0.00[0-9]{2}',
			automations: ['Stop Loss', 'Auto Sell'],
		});
	});

	test('It should show position Rays - Overview & Manage - With Protection set up', async ({
		app,
	}) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.position.openPage('/ethereum/aave/v3/multiply/RETH-DAI/1276#overview');
		await app.position.overview.shouldHaveRays('0.0[2-6][0-9]{2}');
		await app.position.manage.shouldHaveAutomationBoostRays({
			raysCount: '0.0[1-4][0-9]{2}',
			automations: ['Auto Buy', 'Take Profit'],
		});
	});

	test('It should show Automation Boost Rays - With an automation set up', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.position.openPage('/ethereum/aave/v3/multiply/RETH-DAI/1276#protection');

		// Stop-Loss
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Trailing Stop-Loss
		await app.position.protection.setup('Trailing Stop-Loss');
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Auto-Sell
		await app.position.protection.setup('Auto-Sell');
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		await app.position.openTab('Optimization');

		// Auto-Buy
		await app.position.optimization.setupOptimization('Auto-Buy');
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Auto Take Profit
		await app.position.optimization.setupOptimization('Auto Take Profit');
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();
	});

	test('It should show Automation Boost Rays - Without any automations set up', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.position.openPage('/ethereum/aave/v3/multiply/ETH-USDC/1218#protection');

		// Stop-Loss
		await app.position.protection.setup('Stop-Loss');
		await app.position.manage.shouldHaveAutomationBoostRays({ raysCount: '0.[0-9]{4}' });
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Trailing Stop-Loss
		await app.position.protection.setup('Trailing Stop-Loss');
		await app.position.manage.shouldHaveAutomationBoostRays({ raysCount: '0.[0-9]{4}' });
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Auto-Sell
		await app.position.protection.setup('Auto-Sell');
		await app.position.manage.shouldHaveAutomationBoostRays({ raysCount: '0.[0-9]{4}' });
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		await app.position.openTab('Optimization');

		// Auto-Buy
		await app.position.optimization.setupOptimization('Auto-Buy');
		await app.position.manage.shouldHaveAutomationBoostRays({ raysCount: '0.[0-9]{4}' });
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();

		// Auto Take Profit
		await app.position.optimization.setupOptimization('Auto Take Profit');
		await app.position.manage.shouldHaveAutomationBoostRays({ raysCount: '0.[0-9]{4}' });
		await app.position.manage.shouldHaveAutomationTriggerEarnRays();
	});

	test('It should show Position Rays - Portfolio position card', async ({ app }) => {
		test.info().annotations.push({
			type: 'Test case',
			description: 'xxx',
		});

		await app.portfolio.open('0x10649c79428d718621821Cf6299e91920284743F', { withPositions: true });
		await app.portfolio.positionsHub.positions.first.shouldHave({ rays: '0.0[0-9]{3}' });
	});
});

// TEST - TO BE DONE
// Should NOT get points - DeFi Saver position:
// /portfolio/0x7d6149ad9a573a6e2ca6ebf7d4897c1b766841b4#positions
