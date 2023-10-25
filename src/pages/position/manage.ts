import { expect, Page } from '@playwright/test';
import { positionTimeout } from 'utils/config';
import { Base } from './base';
import { step } from '#noWalletFixtures';

export class Manage {
	readonly page: Page;

	readonly base: Base;

	constructor(page: Page) {
		this.page = page;
		this.base = new Base(page);
	}

	@step
	async shouldBeVisible(header: string) {
		await expect(this.page.getByText(header).first(), `${header} should be visible`).toBeVisible({
			timeout: positionTimeout,
		});
	}

	@step
	async getLiquidationPrice(): Promise<number> {
		return await this.base.getLiquidationPrice();
	}

	@step
	async getLoanToValue(): Promise<number> {
		return await this.base.getLoanToValue();
	}

	@step
	async getLendingPrice(): Promise<number> {
		return await this.base.getLendingPrice();
	}

	@step
	async getMaxLTV(): Promise<number> {
		return await this.base.getMaxLTV();
	}

	@step
	async shouldHaveCollateralRatio(ratio: string) {
		const regExp = new RegExp(`${ratio}%`);

		await expect(this.page.locator('p > span:has-text("Collateral Ratio") + span')).toContainText(
			regExp
		);
	}

	@step
	async waitForSliderToBeEditable() {
		await this.base.waitForSliderToBeEditable();
	}

	/**
	 *
	 * @param value should be between '0' and '1' both included | 0: far left | 1: far right
	 */
	@step
	async moveSlider({
		protocol,
		value,
	}: {
		protocol: 'Aave V2' | 'Aave V3' | 'Ajna' | 'Maker' | 'Spark';
		value: number;
	}) {
		if (protocol === 'Ajna') {
			await this.base.moveSlider({ value });
		} else {
			await this.base.moveSlider({ process: 'manage', value });
		}
	}

	@step
	async adjustRisk() {
		await this.page.getByRole('button', { name: 'Adjust Risk' }).click();
	}

	@step
	async confirm() {
		await this.base.confirm();
	}

	@step
	async shouldShowSuccessScreen() {
		await expect(this.page.getByText('Success!'), '"Success!" should be visible').toBeVisible({
			timeout: positionTimeout,
		});
	}

	@step
	async ok() {
		await this.page.getByRole('button', { name: 'OK', exact: true }).click();
	}

	@step
	async openManageOptions({ currentLabel }: { currentLabel: string }) {
		await this.page.getByRole('button', { name: currentLabel, exact: true }).click();
	}

	@step
	async select(option: string) {
		await this.page.locator(`li:has-text("${option}")`).click();
	}

	@step
	async closeTo(token: string) {
		await this.page.getByRole('button', { name: `Close to ${token}` }).click();
	}

	@step
	async shouldHaveTokenAmountAfterClosing({ token, amount }: { token: string; amount: string }) {
		const regExp = new RegExp(`${amount} ${token}`);

		await expect(
			this.page
				.getByText(`${token} after closing`)
				.locator('..')
				.locator('xpath=//following-sibling::span[1]')
				.filter({ hasText: regExp }),
			`Token amount (${token} - ${amount}) should be visible`
		).toBeVisible({ timeout: positionTimeout });
	}
}
