import test, { expect } from '@playwright/test';
import * as metamask from '@synthetixio/synpress/commands/metamask';
import * as tenderly from './tenderly';

export const confirmAndVerifySuccess = async ({
	metamaskAction,
	forkId,
}: {
	metamaskAction: 'confirmAddToken' | 'confirmPermissionToSpend';
	forkId: string;
}) => {
	const txCountBefore = await tenderly.getTxCount(forkId);
	await test.step(`Metamask: ${metamaskAction}`, async () => {
		await metamask[metamaskAction]();
	});

	// Wait for tx count to increase
	await expect(async () => {
		const txCountAfter = await tenderly.getTxCount(forkId);
		expect(txCountAfter).toBeGreaterThan(txCountBefore);
	}).toPass();

	// Verify last tx success
	await tenderly.verifyTxReceiptStatusSuccess(forkId);
};
