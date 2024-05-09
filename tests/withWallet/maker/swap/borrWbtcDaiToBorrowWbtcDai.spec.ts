import { BrowserContext, test } from '@playwright/test';
import { resetState } from '@synthetixio/synpress/commands/synpress';
import { metamaskSetUp } from 'utils/setup';
import * as tenderly from 'utils/tenderly';
import { setup } from 'utils/setup';
import { extremelyLongTestTimeout } from 'utils/config';
import { App } from 'src/app';
import { openMakerPosition, swapMakerToSpark } from 'tests/sharedTestSteps/positionManagement';

let context: BrowserContext;
let app: App;
let forkId: string;
let walletAddress: string;

test.describe.configure({ mode: 'serial' });

test.describe('Maker Borrow - Swap', async () => {
	test.afterAll(async () => {
		await tenderly.deleteFork(forkId);

		await app.page.close();

		await context.close();

		await resetState();
	});

	test.use({
		viewport: { width: 1500, height: 720 },
	});

	// Create a Maker position as part of the Swap tests setup
	test('It should open a Maker Borrow position @regression @swap', async () => {
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
				extraFeaturesFlags: 'MakerTenderly:true EnableRefinance:true',
			}));

			await tenderly.setTokenBalance({
				forkId,
				walletAddress,
				network: 'mainnet',
				token: 'WBTC',
				balance: '20',
			});
		});

		await app.page.goto('vaults/open/WBTC-C');

		// Depositing collateral too quickly after loading page returns wrong simulation results
		await app.position.overview.waitForComponentToBeStable({ positionType: 'Maker' });

		await openMakerPosition({
			app,
			forkId,
			deposit: { token: 'WBTC', amount: '1' },
			generate: { token: 'DAI', amount: '30000' },
		});
	});

	test('It should swap a Maker Borrow position (WBTC/DAI) to Spark Borrow (WBTC/DAI) @regression @swap', async () => {
		test.info().annotations.push({
			type: 'Test case',
			description: '11788, 11790',
		});

		test.setTimeout(extremelyLongTestTimeout);

		// Wait an reload to avoid flakiness
		await app.page.waitForTimeout(1000);
		await app.page.reload();

		await swapMakerToSpark({
			app,
			forkId,
			reason: 'Switch to higher max Loan To Value',
			targetPool: 'WBTC/DAI',
			expectedTargetExposure: { amount: '1.0000', token: 'WBTC' },
			expectedTargetDebt: { amount: '30,000.00', token: 'DAI' },
			originalPosition: { type: 'Borrow', collateralToken: 'WBTC', debtToken: 'DAI' },
		});
	});
});
