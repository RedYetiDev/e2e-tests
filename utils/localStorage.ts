import { expect } from '@playwright/test';
import { App } from 'src/app';

export const updateFlags = async ({ app, flags }: { app: App; flags: string[] }) => {
	// 'ob-config-overrides' takes some time to be loaded to Local Storage
	let localStorage: any;
	await expect(async () => {
		localStorage = await app.page.evaluate(() => window.localStorage);
		expect(localStorage).toMatchObject({
			'ob-config-overrides': expect.any(String),
		});
	}).toPass();

	const obConfigOverrides = JSON.parse(localStorage['ob-config-overrides']);

	flags.forEach((flag) => {
		const flagValues: string[] = flag.split(':');
		obConfigOverrides.features[flagValues[0]] = flagValues[1] === 'true';
	});

	await app.page.evaluate(
		(obConfigOverrides) =>
			localStorage.setItem('ob-config-overrides', JSON.stringify(obConfigOverrides)),
		obConfigOverrides
	);

	await app.page.reload();
};

export const rejectCookies = async (app: App) => {
	await app.page.evaluate(() =>
		window.localStorage.setItem(
			'cookieSettings',
			'{"accepted":false,"enabledCookies":{"marketing":false,"analytics":false},"version":"ver-26.06.2023"}'
		)
	);
};
