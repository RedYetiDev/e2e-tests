import { expect } from '#noWalletFixtures';

export const sparkTrailingStopLossResponse = {
	triggers: {
		sparkTrailingStopLossDMA: {
			triggerTypeName: 'DmaSparkTrailingStopLoss',
			triggerType: '10007',
			triggerId: '10000000673',
			triggerData:
				'0x000000000000000000000000ff467bc814985c6bcabef2b0a3b3c237cd9be25f000000000000000000000000000000000000000000000000000000000000271700000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2537061726b436c6f7365506f736974696f6e5f340000000000000000000000000000000000000000000000005f4ec3df9cbd43714fe2740f5e3616155c5b84190000000000000000000000000000000000000000000000060000000000005a13000000000000000000000000aed0c38402a5d19df6e4c03f4e2dced6e29c1ee900000000000000000000000000000000000000000000000600000000000031400000000000000000000000000000000000000000000000000000001bf08eb0000000000000000000000000000000000000000000000000000000000000000000',
			decodedParams: {
				triggerType: '10007',
				positionAddress: '0xff467bc814985c6bcabef2b0a3b3c237cd9be25f',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
				operationName: '0x537061726b436c6f7365506f736974696f6e5f34000000000000000000000000',
				collateralOracle: '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
				collateralAddedRoundId: '110680464442257332755',
				debtOracle: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
				debtAddedRoundId: '110680464442257322304',
				trailingDistance: '120000000000',
				closeToCollateral: 'false',
			},
			dynamicParams: {
				executionPrice: expect.any(String),
				originalExecutionPrice: expect.any(String),
			},
		},
		aave3: {},
		spark: {
			trailingStopLossDMA: {
				triggerTypeName: 'DmaSparkTrailingStopLoss',
				triggerType: '10007',
				triggerId: '10000000673',
				triggerData:
					'0x000000000000000000000000ff467bc814985c6bcabef2b0a3b3c237cd9be25f000000000000000000000000000000000000000000000000000000000000271700000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2537061726b436c6f7365506f736974696f6e5f340000000000000000000000000000000000000000000000005f4ec3df9cbd43714fe2740f5e3616155c5b84190000000000000000000000000000000000000000000000060000000000005a13000000000000000000000000aed0c38402a5d19df6e4c03f4e2dced6e29c1ee900000000000000000000000000000000000000000000000600000000000031400000000000000000000000000000000000000000000000000000001bf08eb0000000000000000000000000000000000000000000000000000000000000000000',
				decodedParams: {
					triggerType: '10007',
					positionAddress: '0xff467bc814985c6bcabef2b0a3b3c237cd9be25f',
					maxCoverage: '1500000000000000000000',
					debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
					collateralToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
					operationName: '0x537061726b436c6f7365506f736974696f6e5f34000000000000000000000000',
					collateralOracle: '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
					collateralAddedRoundId: '110680464442257332755',
					debtOracle: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
					debtAddedRoundId: '110680464442257322304',
					trailingDistance: '120000000000',
					closeToCollateral: 'false',
				},
				dynamicParams: {
					executionPrice: expect.any(String),
					originalExecutionPrice: expect.any(String),
				},
			},
		},
	},
	flags: {
		aave3: {
			isStopLossEnabled: false,
			isBasicBuyEnabled: false,
			isBasicSellEnabled: false,
			isPartialTakeProfitEnabled: false,
			isTrailingStopLossEnabled: false,
		},
		spark: {
			isStopLossEnabled: false,
			isBasicBuyEnabled: false,
			isBasicSellEnabled: false,
			isPartialTakeProfitEnabled: false,
			isTrailingStopLossEnabled: true,
		},
		isAaveStopLossEnabled: false,
		isAaveBasicBuyEnabled: false,
		isAaveBasicSellEnabled: false,
		isAavePartialTakeProfitEnabled: false,
		isSparkStopLossEnabled: true,
		isSparkBasicBuyEnabled: false,
		isSparkBasicSellEnabled: false,
		isSparkPartialTakeProfitEnabled: false,
	},
	triggersCount: 1,
	triggerGroup: {
		sparkStopLoss: {
			triggerType: '10007',
			triggerId: '10000000673',
			triggerData:
				'0x000000000000000000000000ff467bc814985c6bcabef2b0a3b3c237cd9be25f000000000000000000000000000000000000000000000000000000000000271700000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2537061726b436c6f7365506f736974696f6e5f340000000000000000000000000000000000000000000000005f4ec3df9cbd43714fe2740f5e3616155c5b84190000000000000000000000000000000000000000000000060000000000005a13000000000000000000000000aed0c38402a5d19df6e4c03f4e2dced6e29c1ee900000000000000000000000000000000000000000000000600000000000031400000000000000000000000000000000000000000000000000000001bf08eb0000000000000000000000000000000000000000000000000000000000000000000',
			decodedParams: {
				triggerType: '10007',
				positionAddress: '0xff467bc814985c6bcabef2b0a3b3c237cd9be25f',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
				operationName: '0x537061726b436c6f7365506f736974696f6e5f34000000000000000000000000',
				collateralOracle: '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
				collateralAddedRoundId: '110680464442257332755',
				debtOracle: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
				debtAddedRoundId: '110680464442257322304',
				trailingDistance: '120000000000',
				closeToCollateral: 'false',
			},
			dynamicParams: {
				executionPrice: expect.any(String),
				originalExecutionPrice: expect.any(String),
			},
		},
	},
	additionalData: {
		params: {
			account: '0xFF467BC814985C6bcaBeF2B0A3b3c237cD9Be25f',
			chainId: 1,
			protocol: 'sparkv3',
			getDetails: true,
		},
	},
};
