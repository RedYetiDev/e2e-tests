export const aaveV3BaseAutoSellAndBuyGetResponse = {
	triggers: {
		aaveBasicBuy: {
			triggerTypeName: 'DmaAaveBasicBuyV2',
			triggerType: '121',
			triggerId: '10000000433',
			triggerData:
				'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007900000000000000000000000000000000000000000000000000000000596953fb000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b5570414156455633506f736974696f6e5f350000000000000000000000000000000000000000000000000000000000000000000013ec00000000000000000000000000000000000000000000000000000000000015e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				maxBuyPrice:
					'115792089237316195423570985008687907853269984665640564039457584007913129639935',
				positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
				triggerType: '121',
				maxCoverage: '1500075003',
				debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
				collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
				operationName: '0x41646a7573745269736b5570414156455633506f736974696f6e5f3500000000',
				executionLtv: '5100',
				targetLtv: '5600',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
		aaveBasicSell: {
			triggerTypeName: 'DmaAaveBasicSellV2',
			triggerType: '122',
			triggerId: '10000000434',
			triggerData:
				'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007a00000000000000000000000000000000000000000000000000000000596749ac000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b446f776e414156455633506f736974696f6e5f36000000000000000000000000000000000000000000000000000000000000000019640000000000000000000000000000000000000000000000000000000000001770000000000000000000000000000000000000000000000000000000174876e8000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				minSellPrice: '100000000000',
				positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
				triggerType: '122',
				maxCoverage: '1499941292',
				debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
				collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
				operationName: '0x41646a7573745269736b446f776e414156455633506f736974696f6e5f360000',
				executionLtv: '6500',
				targetLtv: '6000',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
		aave3: {
			basicBuy: {
				triggerTypeName: 'DmaAaveBasicBuyV2',
				triggerType: '121',
				triggerId: '10000000433',
				triggerData:
					'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007900000000000000000000000000000000000000000000000000000000596953fb000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b5570414156455633506f736974696f6e5f350000000000000000000000000000000000000000000000000000000000000000000013ec00000000000000000000000000000000000000000000000000000000000015e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
				decodedParams: {
					maxBuyPrice:
						'115792089237316195423570985008687907853269984665640564039457584007913129639935',
					positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
					triggerType: '121',
					maxCoverage: '1500075003',
					debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
					collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
					operationName: '0x41646a7573745269736b5570414156455633506f736974696f6e5f3500000000',
					executionLtv: '5100',
					targetLtv: '5600',
					deviation: '100',
					maxBaseFeeInGwei: '300',
				},
			},
			basicSell: {
				triggerTypeName: 'DmaAaveBasicSellV2',
				triggerType: '122',
				triggerId: '10000000434',
				triggerData:
					'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007a00000000000000000000000000000000000000000000000000000000596749ac000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b446f776e414156455633506f736974696f6e5f36000000000000000000000000000000000000000000000000000000000000000019640000000000000000000000000000000000000000000000000000000000001770000000000000000000000000000000000000000000000000000000174876e8000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
				decodedParams: {
					minSellPrice: '100000000000',
					positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
					triggerType: '122',
					maxCoverage: '1499941292',
					debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
					collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
					operationName: '0x41646a7573745269736b446f776e414156455633506f736974696f6e5f360000',
					executionLtv: '6500',
					targetLtv: '6000',
					deviation: '100',
					maxBaseFeeInGwei: '300',
				},
			},
		},
		spark: {},
	},
	flags: {
		aave3: {
			isStopLossEnabled: false,
			isBasicBuyEnabled: true,
			isBasicSellEnabled: true,
			isPartialTakeProfitEnabled: false,
			isTrailingStopLossEnabled: false,
		},
		spark: {
			isStopLossEnabled: false,
			isBasicBuyEnabled: false,
			isBasicSellEnabled: false,
			isPartialTakeProfitEnabled: false,
			isTrailingStopLossEnabled: false,
		},
		isAaveStopLossEnabled: false,
		isAaveBasicBuyEnabled: true,
		isAaveBasicSellEnabled: true,
		isAavePartialTakeProfitEnabled: false,
		isSparkStopLossEnabled: false,
		isSparkBasicBuyEnabled: false,
		isSparkBasicSellEnabled: false,
		isSparkPartialTakeProfitEnabled: false,
	},
	triggersCount: 2,
	triggerGroup: {
		aaveBasicBuy: {
			triggerType: '121',
			triggerId: '10000000433',
			triggerData:
				'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007900000000000000000000000000000000000000000000000000000000596953fb000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b5570414156455633506f736974696f6e5f350000000000000000000000000000000000000000000000000000000000000000000013ec00000000000000000000000000000000000000000000000000000000000015e0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				maxBuyPrice:
					'115792089237316195423570985008687907853269984665640564039457584007913129639935',
				positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
				triggerType: '121',
				maxCoverage: '1500075003',
				debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
				collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
				operationName: '0x41646a7573745269736b5570414156455633506f736974696f6e5f3500000000',
				executionLtv: '5100',
				targetLtv: '5600',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
		aaveBasicSell: {
			triggerType: '122',
			triggerId: '10000000434',
			triggerData:
				'0x0000000000000000000000005a1f00e5a2c1bf7974688ac1e1343e66598cd526000000000000000000000000000000000000000000000000000000000000007a00000000000000000000000000000000000000000000000000000000596749ac000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000002ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec2241646a7573745269736b446f776e414156455633506f736974696f6e5f36000000000000000000000000000000000000000000000000000000000000000019640000000000000000000000000000000000000000000000000000000000001770000000000000000000000000000000000000000000000000000000174876e8000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c',
			decodedParams: {
				minSellPrice: '100000000000',
				positionAddress: '0x5a1f00e5a2c1bf7974688ac1e1343e66598cd526',
				triggerType: '122',
				maxCoverage: '1499941292',
				debtToken: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
				collateralToken: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
				operationName: '0x41646a7573745269736b446f776e414156455633506f736974696f6e5f360000',
				executionLtv: '6500',
				targetLtv: '6000',
				deviation: '100',
				maxBaseFeeInGwei: '300',
			},
		},
	},
	additionalData: {
		params: {
			account: '0x5A1f00e5A2C1BF7974688ac1E1343E66598cd526',
			chainId: 8453,
			protocol: 'aavev3',
			getDetails: true,
		},
	},
};
