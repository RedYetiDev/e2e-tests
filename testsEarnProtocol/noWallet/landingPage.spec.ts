import { expect, test } from '#earnProtocolFixtures';
import { expectDefaultTimeout } from 'utils/config';

test.describe('Landin page', async () => {
	test('It should show vault card', async ({ app }) => {
		await app.landingPage.open();
		await app.landingPage.shouldShowVaultCard();
	});

	(['Right', 'Left'] as const).forEach((direction) => {
		test(`It should show vault card to the ${direction}`, async ({ app }) => {
			await app.landingPage.open();

			// To avoid flakiness
			await app.page.waitForTimeout(2_000);

			// Get vault info for current active vault in carousel
			const originalVaultCard =
				await app.landingPage.vaultsCarousel.activeSlide.vaultCard.header.getDetails();

			// Move to vault to the right/left
			await app.landingPage.vaultsCarousel.moveToNextVault(direction, {
				timeout: expectDefaultTimeout * 2,
			});

			// Get vault info for current active vault in carousel
			const newVaultCard =
				await app.landingPage.vaultsCarousel.activeSlide.vaultCard.header.getDetails();

			// Logging vaults data for debugging purposes
			console.log('originalVaultCard: ', originalVaultCard);
			console.log('newVaultCard: ', newVaultCard);

			expect(
				originalVaultCard.token == newVaultCard.token &&
					originalVaultCard.network == newVaultCard.network &&
					originalVaultCard.risk == newVaultCard.risk,
				'Vault details should not be equal'
			).not.toBeTruthy();
		});
	});
});
