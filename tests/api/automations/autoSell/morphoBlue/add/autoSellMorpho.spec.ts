import { expect, test } from '@playwright/test';
import { validPayloadsMorpho, responses } from 'utils/testData_APIs';

const autoSellEndpoint = '/api/triggers/1/morphoblue/auto-sell';

test.describe('API tests - Auto-Sell - Morpho Blue - Ethereum', async () => {
	// Old test wallet: 0xbEf4befb4F230F43905313077e3824d7386E09F8
	// Position link: https://staging.summer.fi/ethereum/morphoblue/multiply/WSTETH-ETH-1/1467

	test('Add automation - Without Min Sell Price - Valid payload data', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: validPayloadsMorpho.autoSell.addWithoutMinSellPrice,
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.autoSellWithoutMinSellPriceMorpho);
	});

	test('Add automation - With Min Sell Price - Valid payload data', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: validPayloadsMorpho.autoSell.addWithMinSellPrice,
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject({
			...responses.autoSellWithoutMinSellPriceMorpho,
			warnings: [],
		});
	});

	test('Add automation - Without "dpm"', async ({ request }) => {
		const { dpm, ...payloadWithoutDpm } = validPayloadsMorpho.autoSell.addWithoutMinSellPrice;

		const response = await request.post(autoSellEndpoint, {
			data: payloadWithoutDpm,
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDpm);
	});

	test('Add automation - Wrong data type - "dpm"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, dpm: 1 },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDpm);
	});

	test('Add automation - Wrong value - "dpm"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, dpm: '0xwrong' },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDpm);
	});

	test('Add automation - Without "position"', async ({ request }) => {
		const { position, ...payloadWithoutPosition } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;

		const response = await request.post(autoSellEndpoint, {
			data: payloadWithoutPosition,
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.missingPosition);
	});

	test('Add automation - Wrong data type - "position" - string', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, position: 'string' },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongPosition_string);
	});

	test('Add automation - Wrong data type - "position" - number', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, position: 1 },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongPosition_number);
	});

	test('Add automation - Wrong data type - "position" - array', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, position: [] },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongPosition_array);
	});

	test('Add automation - Wrong data type - "position" - null', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, position: null },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongPosition_null);
	});

	test('Add automation - Without "collateral (position)"', async ({ request }) => {
		const { position, ...payloadWithoutPosition } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { collateral, ...positionWithoutCollateral } = position;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutPosition, position: positionWithoutCollateral },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongCollateral);
	});

	test('Add automation - Wrong data type - "collateral (position)"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: {
				...validPayloadsMorpho.autoSell.addWithoutMinSellPrice,
				position: {
					...validPayloadsMorpho.autoSell.addWithoutMinSellPrice.position,
					collateral: 11,
				},
			},
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongCollateral);
	});

	test('Add automation - Wrong value - "collateral (position)"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: {
				...validPayloadsMorpho.autoSell.addWithoutMinSellPrice,
				position: {
					...validPayloadsMorpho.autoSell.addWithoutMinSellPrice.position,
					collateral: '0xwrong',
				},
			},
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongCollateral);
	});

	test('Add automation - Without "debt (position)"', async ({ request }) => {
		const { position, ...payloadWithoutPosition } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { debt, ...positionWithoutDebt } = position;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutPosition, position: positionWithoutDebt },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDebt);
	});

	test('Add automation - Wrong data type - "debt (position)"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: {
				...validPayloadsMorpho.autoSell.addWithoutMinSellPrice,
				position: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice.position, debt: 11 },
			},
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDebt);
	});

	test('Add automation - Wrong value - "debt (position)"', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: {
				...validPayloadsMorpho.autoSell.addWithoutMinSellPrice,
				position: {
					...validPayloadsMorpho.autoSell.addWithoutMinSellPrice.position,
					debt: '0xwrong',
				},
			},
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongDebt);
	});

	test('Add automation - Without "triggerData"', async ({ request }) => {
		const { triggerData, ...payloadWithoutTriggerData } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;

		const response = await request.post(autoSellEndpoint, {
			data: payloadWithoutTriggerData,
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.missingTriggerData);
	});

	test('Add automation - Wrong data type - "triggerData" - string', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, triggerData: 'string' },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongTriggerData_string);
	});

	test('Add automation - Wrong data type - "triggerData" - number', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, triggerData: 1 },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongTriggerData_number);
	});

	test('Add automation - Wrong data type - "triggerData" - array', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, triggerData: [] },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongTriggerData_array);
	});

	test('Add automation - Wrong data type - "triggerData" - null', async ({ request }) => {
		const response = await request.post(autoSellEndpoint, {
			data: { ...validPayloadsMorpho.autoSell.addWithoutMinSellPrice, triggerData: null },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongTriggerData_null);
	});

	test('Add automation - Without "executionLTV (triggerData)"', async ({ request }) => {
		const { triggerData, ...payloadWithoutTriggerData } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { executionLTV, ...triggerDataWithoutExecutionLTV } = triggerData;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutTriggerData, triggerData: triggerDataWithoutExecutionLTV },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongExecutionLTV);
	});

	test('Add automation - Without "maxBaseFee (triggerData)"', async ({ request }) => {
		const { triggerData, ...payloadWithoutTriggerData } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { maxBaseFee, ...triggerDataWithoutMaxBaseFee } = triggerData;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutTriggerData, triggerData: triggerDataWithoutMaxBaseFee },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongMaxBaseFee);
	});

	test('Add automation - Without "targetLTV (triggerData)"', async ({ request }) => {
		const { triggerData, ...payloadWithoutTriggerData } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { targetLTV, ...triggerDataWithoutTargetLTV } = triggerData;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutTriggerData, triggerData: triggerDataWithoutTargetLTV },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongTargetLTV);
	});

	test('Add automation - Without "useMinSellPrice (triggerData)"', async ({ request }) => {
		const { triggerData, ...payloadWithoutTriggerData } =
			validPayloadsMorpho.autoSell.addWithoutMinSellPrice;
		const { useMinSellPrice, ...triggerDataWithoutUseMinSellPrice } = triggerData;

		const response = await request.post(autoSellEndpoint, {
			data: { ...payloadWithoutTriggerData, triggerData: triggerDataWithoutUseMinSellPrice },
		});

		const respJSON = await response.json();

		expect(respJSON).toMatchObject(responses.wrongUseMinSellPrice);
	});
});
