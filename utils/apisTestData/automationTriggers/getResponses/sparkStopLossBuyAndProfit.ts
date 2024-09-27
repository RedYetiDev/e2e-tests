import { expect } from '#noWalletFixtures';

export const sparkStopLossBuyAndProfitResponse = {
	triggers: {
		aaveStopLossToCollateralDMA: {
			triggerTypeName: 'DmaAaveStopLossToCollateralV2',
			triggerType: '127',
			triggerId: '10000000304',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000059681628000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c599436c6f7365416e6452656d61696e414156455633506f736974696f6e0000000000000000000000000000000000000000000000000000000000000000000010ca',
			decodedParams: {
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '127',
				maxCoverage: '1499993640',
				executionLtv: '4298',
				debtToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				collateralToken: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
				operationName: '0x436c6f7365416e6452656d61696e414156455633506f736974696f6e00000000',
			},
		},
		sparkBasicBuy: {
			triggerTypeName: 'DmaSparkBasicBuyV2',
			triggerType: '131',
			triggerId: '10000000627',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008300000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b41646a7573745269736b55705f4175746f5f34000000000000000000000000000000000000000000000000000000000000000000000000000006a400000000000000000000000000000000000000000000000000000000000008fc0000000000000000000000000000000000000000000000000000008bb2c970000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				maxBuyPrice: '600000000000',
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '131',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x537061726b41646a7573745269736b55705f4175746f5f340000000000000000',
				executionLtv: '1700',
				targetLtv: '2300',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
		sparkPartialTakeProfit: {
			triggerTypeName: 'DmaAavePartialTakeProfit',
			triggerType: '134',
			triggerId: '10000000662',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008600000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b5769746864726177546f446562745f6175746f000000000000000000000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000009c4000000000000000000000000000000000000000000000000000000975704e40000000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000001',
			decodedParams: {
				triggerType: '134',
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x537061726b5769746864726177546f446562745f6175746f0000000000000000',
				withdrawToDebt: 'true',
				executionLtv: '2000',
				targetLtv: '2500',
				deviation: '100',
				executionPrice: '650000000000',
			},
			dynamicParams: {
				nextProfit: {
					triggerPrice: '650000000000',
					realizedProfitInCollateral: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					realizedProfitInDebt: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'DAI',
							address: '0x6b175474e89094c44da98b954eedeac495271d0f',
						},
					},
					totalProfitInCollateral: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					totalProfitInDebt: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'DAI',
							address: '0x6b175474e89094c44da98b954eedeac495271d0f',
						},
					},
					stopLossDynamicPrice: expect.any(String),
					fee: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					totalFee: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
				},
			},
		},
		sparkStopLossToCollateralDMA: {
			triggerTypeName: 'DmaSparkStopLossToCollateralV2',
			triggerType: '129',
			triggerId: '10000000663',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008100000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0436c6f7365416e6452656d61696e537061726b506f736974696f6e5f340000000000000000000000000000000000000000000000000000000000000000001e6e',
			decodedParams: {
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '129',
				maxCoverage: '1500000000000000000000',
				executionLtv: '7790',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x436c6f7365416e6452656d61696e537061726b506f736974696f6e5f34000000',
			},
		},
		aave3: {
			stopLossToCollateralDMA: {
				triggerTypeName: 'DmaAaveStopLossToCollateralV2',
				triggerType: '127',
				triggerId: '10000000304',
				triggerData:
					'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000059681628000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c599436c6f7365416e6452656d61696e414156455633506f736974696f6e0000000000000000000000000000000000000000000000000000000000000000000010ca',
				decodedParams: {
					positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
					triggerType: '127',
					maxCoverage: '1499993640',
					executionLtv: '4298',
					debtToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
					collateralToken: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
					operationName: '0x436c6f7365416e6452656d61696e414156455633506f736974696f6e00000000',
				},
			},
		},
		spark: {
			basicBuy: {
				triggerTypeName: 'DmaSparkBasicBuyV2',
				triggerType: '131',
				triggerId: '10000000627',
				triggerData:
					'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008300000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b41646a7573745269736b55705f4175746f5f34000000000000000000000000000000000000000000000000000000000000000000000000000006a400000000000000000000000000000000000000000000000000000000000008fc0000000000000000000000000000000000000000000000000000008bb2c970000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
				decodedParams: {
					maxBuyPrice: '600000000000',
					positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
					triggerType: '131',
					maxCoverage: '1500000000000000000000',
					debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
					collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
					operationName: '0x537061726b41646a7573745269736b55705f4175746f5f340000000000000000',
					executionLtv: '1700',
					targetLtv: '2300',
					deviation: '100',
					maxBaseFeeInGwei: '300',
				},
			},
			partialTakeProfit: {
				triggerTypeName: 'DmaAavePartialTakeProfit',
				triggerType: '134',
				triggerId: '10000000662',
				triggerData:
					'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008600000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b5769746864726177546f446562745f6175746f000000000000000000000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000009c4000000000000000000000000000000000000000000000000000000975704e40000000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000001',
				decodedParams: {
					triggerType: '134',
					positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
					maxCoverage: '1500000000000000000000',
					debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
					collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
					operationName: '0x537061726b5769746864726177546f446562745f6175746f0000000000000000',
					withdrawToDebt: 'true',
					executionLtv: '2000',
					targetLtv: '2500',
					deviation: '100',
					executionPrice: '650000000000',
				},
				dynamicParams: {
					nextProfit: {
						triggerPrice: '650000000000',
						realizedProfitInCollateral: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'wstETH',
								address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
							},
						},
						realizedProfitInDebt: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'DAI',
								address: '0x6b175474e89094c44da98b954eedeac495271d0f',
							},
						},
						totalProfitInCollateral: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'wstETH',
								address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
							},
						},
						totalProfitInDebt: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'DAI',
								address: '0x6b175474e89094c44da98b954eedeac495271d0f',
							},
						},
						stopLossDynamicPrice: expect.any(String),
						fee: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'wstETH',
								address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
							},
						},
						totalFee: {
							balance: expect.any(String),
							token: {
								decimals: 18,
								symbol: 'wstETH',
								address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
							},
						},
					},
				},
			},
			stopLossToCollateralDMA: {
				triggerTypeName: 'DmaSparkStopLossToCollateralV2',
				triggerType: '129',
				triggerId: '10000000663',
				triggerData:
					'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008100000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0436c6f7365416e6452656d61696e537061726b506f736974696f6e5f340000000000000000000000000000000000000000000000000000000000000000001e6e',
				decodedParams: {
					positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
					triggerType: '129',
					maxCoverage: '1500000000000000000000',
					executionLtv: '7790',
					debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
					collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
					operationName: '0x436c6f7365416e6452656d61696e537061726b506f736974696f6e5f34000000',
				},
			},
		},
	},
	flags: {
		aave3: {
			isStopLossEnabled: true,
			isBasicBuyEnabled: false,
			isBasicSellEnabled: false,
			isPartialTakeProfitEnabled: false,
			isTrailingStopLossEnabled: false,
		},
		spark: {
			isStopLossEnabled: true,
			isBasicBuyEnabled: true,
			isBasicSellEnabled: false,
			isPartialTakeProfitEnabled: true,
			isTrailingStopLossEnabled: false,
		},
		isAaveStopLossEnabled: true,
		isAaveBasicBuyEnabled: false,
		isAaveBasicSellEnabled: false,
		isAavePartialTakeProfitEnabled: false,
		isSparkStopLossEnabled: true,
		isSparkBasicBuyEnabled: true,
		isSparkBasicSellEnabled: false,
		isSparkPartialTakeProfitEnabled: true,
	},
	triggersCount: 5,
	triggerGroup: {
		aaveStopLoss: {
			triggerType: '127',
			triggerId: '10000000304',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000059681628000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c599436c6f7365416e6452656d61696e414156455633506f736974696f6e0000000000000000000000000000000000000000000000000000000000000000000010ca',
			decodedParams: {
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '127',
				maxCoverage: '1499993640',
				executionLtv: '4298',
				debtToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				collateralToken: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
				operationName: '0x436c6f7365416e6452656d61696e414156455633506f736974696f6e00000000',
			},
		},
		sparkBasicBuy: {
			triggerType: '131',
			triggerId: '10000000627',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008300000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b41646a7573745269736b55705f4175746f5f34000000000000000000000000000000000000000000000000000000000000000000000000000006a400000000000000000000000000000000000000000000000000000000000008fc0000000000000000000000000000000000000000000000000000008bb2c970000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				maxBuyPrice: '600000000000',
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '131',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x537061726b41646a7573745269736b55705f4175746f5f340000000000000000',
				executionLtv: '1700',
				targetLtv: '2300',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
		sparkPartialTakeProfit: {
			triggerType: '134',
			triggerId: '10000000662',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008600000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0537061726b5769746864726177546f446562745f6175746f000000000000000000000000000000000000000000000000000000000000000000000000000007d000000000000000000000000000000000000000000000000000000000000009c4000000000000000000000000000000000000000000000000000000975704e40000000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000001',
			decodedParams: {
				triggerType: '134',
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				maxCoverage: '1500000000000000000000',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x537061726b5769746864726177546f446562745f6175746f0000000000000000',
				withdrawToDebt: 'true',
				executionLtv: '2000',
				targetLtv: '2500',
				deviation: '100',
				executionPrice: '650000000000',
			},
			dynamicParams: {
				nextProfit: {
					triggerPrice: '650000000000',
					realizedProfitInCollateral: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					realizedProfitInDebt: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'DAI',
							address: '0x6b175474e89094c44da98b954eedeac495271d0f',
						},
					},
					totalProfitInCollateral: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					totalProfitInDebt: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'DAI',
							address: '0x6b175474e89094c44da98b954eedeac495271d0f',
						},
					},
					stopLossDynamicPrice: expect.any(String),
					fee: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
					totalFee: {
						balance: expect.any(String),
						token: {
							decimals: 18,
							symbol: 'wstETH',
							address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
						},
					},
				},
			},
		},
		sparkStopLoss: {
			triggerType: '129',
			triggerId: '10000000663',
			triggerData:
				'0x000000000000000000000000ce049ff57d4146d5be3a55e60ef4523bb70798b6000000000000000000000000000000000000000000000000000000000000008100000000000000000000000000000000000000000000005150ae84a8cdf000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0436c6f7365416e6452656d61696e537061726b506f736974696f6e5f340000000000000000000000000000000000000000000000000000000000000000001e6e',
			decodedParams: {
				positionAddress: '0xce049ff57d4146d5be3a55e60ef4523bb70798b6',
				triggerType: '129',
				maxCoverage: '1500000000000000000000',
				executionLtv: '7790',
				debtToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
				collateralToken: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				operationName: '0x436c6f7365416e6452656d61696e537061726b506f736974696f6e5f34000000',
			},
		},
	},
	additionalData: {
		params: {
			account: '0xce049ff57d4146d5bE3a55E60Ef4523bB70798b6',
			chainId: 1,
			protocol: 'sparkv3',
			getDetails: true,
		},
	},
};
