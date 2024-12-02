export const wEthContractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
export const usdcContractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
export const ajnaPoolAddress = '0x3ba6a019ed5541b5f5555d8593080042cf3ae5f4';

export const sparkEthereumMultiplyPools = [];
// 'WBTC-DAI', --> Not possiblt to use WBTC on Spark (as collateral or borrow)
// 'WEETH-DAI', --> WEETH supply 100%
// 'SDAI-ETH' --> Already tested in /withWallet/spark
// 'ETH-DAI', --> Already tested in /withWallet/spark
// 'RETH-DAI', --> Already tested in /withWallet/spark
// 'WSTETH-DAI' --> Already tested in /withWallet/spark

export const sparkEthereumEarnPools = ['WSTETH-ETH', 'SDAI-USDC'];
// 'WEETH-ETH', --> WEETH supply 100%
// 'RETH-ETH', --> Already tested in /withWallet/spark
// 'SDAI-USDT', --> Already tested in /withWallet/spark

export const sparkEthereumBorrowPools = [];
// 'WBTC-DAI',  --> Not possiblt to use WBTC on Spark (as collateral or borrow)
// 'WEETH-DAI', --> WEETH supply 100%
// 'SDAI-ETH' --> Already tested in /withWallet/spark
// 'ETH-DAI',  --> Already tested in /withWallet/spark
// 'RETH-DAI', --> Already tested in /withWallet/spark
// 'WSTETH-DAI' --> Already tested in /withWallet/spark

export const morphoEthereumMultiplyPools = [];
// 'WSTETH-USDC', --> Already tested in /withWallet/morphoBlue
// 'WBTC-USDT', --> Already tested in /withWallet/morphoBlue
// 'WBTC-USDC', --> Already tested in /withWallet/morphoBlue
// 'MKR-USDC' --> Already tested in /withWallet/morphoBlue
// 'WSTETH-USDT' --> Already tested in /withWallet/morphoBlue
// 'WSTETH-USDA' --> BUG 15978 - Pool removed for Multiply

export const morphoEthereumEarnPools_1 = [
	'flagship-ETH',
	'flagship-USDC',
	'flagship-USDT',
	'steakhouse-ETH',
	'steakhouse-PYUSD',
	'steakhouse-USDC',
];
// 'steakhouse-USDT', --> Already tested in /withWallet/morphoBlue
// 'USDE-DAI-2', --> NO LIQUIDITY

export const morphoEthereumEarnPools_2 = [
	'USDE-DAI-1',
	'USDE-DAI-3',
	'SUSDE-USDT',
	'OSETH-ETH',
	'WSTETH-ETH-1',
	'WSTETH-ETH-2',
	'WSTETH-ETH-3',
	'WEETH-ETH',
	'EZETH-ETH',
	'SUSDE-DAI-1',
	'SUSDE-DAI-3',
];
// 'WOETH-ETH', --> NO LIQUIDITY
// 'USDE-DAI-2', --> NO LIQUIDITY

export const morphoEthereumBorrowPools = [
	'OSETH-ETH',
	'EZETH-ETH',
	'SUSDE-DAI-3',
	'SUSDE-DAI-4',
	'SUSDE-USDT',
	'WSTETH-ETH-2',
	'WSTETH-USDA',
	'SWBTC-WBTC',
	'RSWETH-ETH',
];
// 'USDE-DAI-2', --> NO LIQUIDITY
// 'RSETH-ETH', --> NO LIQUIDITY
// 'WOETH-ETH', --> NO LIQUIDITY
// 'USDE-DAI-1', --> Already tested in /withWallet/morphoBlue
// 'USDE-DAI-3', --> Already tested in /withWallet/morphoBlue
// 'SUSDE-DAI-1', --> Already tested in /withWallet/morphoBlue
// 'SUSDE-DAI-2', --> Already tested in /withWallet/morphoBlue
// 'WSTETH-ETH-1', --> Already tested in /withWallet/morphoBlue
// 'WSTETH-ETH-3', --> Already tested in /withWallet/morphoBlue
// 'WSTETH-USDC', --> Already tested in /withWallet/morphoBlue
// 'WSTETH-USDT', --> Already tested in /withWallet/morphoBlue
// 'WBTC-USDC',  --> Already tested in /withWallet/morphoBlue
// 'WBTC-USDT', --> Already tested in /withWallet/morphoBlue
// 'MKR-USDC', --> Already tested in /withWallet/morphoBlue
// 'WEETH-ETH', --> Already tested in /withWallet/morphoBlue

// export const morphoEthereumBorrowPools_1 = ['USDE-DAI-2', 'OSETH-ETH', 'EZETH-ETH'];

// export const morphoEthereumBorrowPools_2 = ['SUSDE-DAI-3', 'SUSDE-DAI-4', 'SUSDE-USDT'];

// export const morphoEthereumBorrowPools_3 = ['WSTETH-ETH-2', 'WSTETH-USDA', 'SWBTC-WBTC'];

// export const morphoEthereumBorrowPools_4 = ['RSWETH-ETH'];

export const morphoBaseMultiplyPools = ['ETH-USDC', 'CBBTC-ETH', 'CBBTC-USDC', 'CBETH-EURC'];
// , 'WSTETH-USDC' --> NO LIQUIDITY
// , 'WEETH-USDC' --> WEETH supply 100%
// , 'CBETH-USDC' --> NO LIQUIDITY

export const morphoBaseEarnPools = [
	'WSTETH-ETH-2',
	// 'WEETH-ETH', --> NO LIQUIDITY
	// 'CBETH-ETH', --> Already tested in /withWallet/morphoBlue
	// 'WSUPEROETHB-ETH', -- NO 'SWAP' LIQUIDITY
	// 'WSTETH-ETH-1', -- NO 'SWAP' LIQUIDITY
	// 'EZETH-ETH', -- NO 'SWAP' LIQUIDITY
	// 'BSDETH-ETH', -- NO 'SWAP' LIQUIDITY
];

export const morphoBaseBorrowPools = [
	'CBBTC-ETH',
	'CBBTC-USDC',
	'CBETH-ETH',
	'WSTETH-ETH-2',
	'WEETH-ETH',
	'WSUPEROETHB-ETH',
	'CBETH-USDC',
	'CBETH-EURC',
];
// 'WSTETH-USDC', -- NO LIQUIDITY
// 'EZETH-USDC', -- NO LIQUIDITY
// 'WEETH-USDC', -- NO LIQUIDITY
// 'BSDETH-ETH', -- NO LIQUIDITY
// 'AERO-USDC', -- NO LIQUIDITY
// 'ETH-USDC',  --> Already tested in /withWallet/morphoBlue

// export const morphoBaseBorrowPools1 = ['CBETH-ETH', 'WSTETH-ETH-2', 'WSTETH-USDC', 'WEETH-ETH'];

// export const morphoBaseBorrowPools2 = ['EZETH-USDC', 'WSUPEROETHB-ETH', 'CBETH-USDC'];

export const aaveV3EthereumEarnPools = [
	'WSTETH-CBETH',
	'SDAI-DAI',
	'SDAI-LUSD',
	'SDAI-USDC',
	'USDC-USDT',
	'SDAI-FRAX',
];
// 'USDC-GHO', 'SDAI-GHO' -- NO LIQUIDITY - GHO
// 'RETH-ETH', --> Already tested in /withWallet/aaveV3
// 'SDAI-USDT', --> Already tested in /withWallet/aaveV3
// 'CBETH-ETH', --> Already tested in /withWallet/aaveV3
// , 'WEETH-ETH' --> WEETH supply 100%
// 'SUSDE-USDT', 'SUSDE-USDC', 'SUSDE-DAI' --> SUSDE supply 100%

export const aaveV3EthereumMultiplyPools = [
	'ETH-USDC',
	'ETH-USDT',
	'ETH-WBTC',
	'WBTC-DAI',
	'WBTC-USDT',
	'WBTC-LUSD',
	'WBTC-ETH',
	'WSTETH-DAI',
	'WSTETH-USDT',
	'WSTETH-LUSD',
	'WSTETH-RPL',
	'RETH-DAI',
	'RETH-USDC',
	'RETH-USDT',
	'CBETH-DAI',
	'CBETH-USDC',
	'LINK-DAI',
	'LINK-USDC',
	'LINK-USDT',
	'DAI-ETH',
	'DAI-MKR',
	'SDAI-WBTC',
	'SDAI-ETH',
	'USDC-WSTETH',
	'USDC-WBTC',
	'USDT-ETH',
];
// 'LDO-USDT' --> skipped as tenderly_setErc20Balance is not working with LDO
// 'WBTC-GHO', -- NO LIQUIDITY - GHO
// 'ETH-GHO', -- NO LIQUIDITY - GHO
// 'CBETH-GHO', -- NO LIQUIDITY - GHO
// 'WSTETH-GHO', -- NO LIQUIDITY - GHO
// 'RETH-GHO', -- NO LIQUIDITY - GHO
// 'WEETH-GHO', -- NO LIQUIDITY - GHO
// 'LINK-GHO', -- NO LIQUIDITY - GHO
// 'ETH-DAI', --> Already tested in /withWallet/aaveV3
// 'USDC-ETH', --> Already tested in /withWallet/aaveV3
// 'WBTC-USDC', --> Already tested in /withWallet/aaveV3
// 'WSTETH-USDC', --> Already tested in /withWallet/aaveV3
// 'LINK-ETH', --> Already tested in /withWallet/aaveV3
// 'DAI-WBTC', --> Already tested in /withWallet/aaveV3

export const aaveV3EthereumBorrowPools = [
	'ETH-USDT',
	'ETH-WBTC',
	'WBTC-USDC',
	'WBTC-USDT',
	'WBTC-LUSD',
	'WBTC-ETH',
	'WSTETH-DAI',
	'WSTETH-USDC',
	'WSTETH-LUSD',
	'WSTETH-RPL',
	'WSTETH-CBETH',
	'RETH-DAI',
	'RETH-USDC',
	'RETH-USDT',
	'CBETH-USDC',
	'CBETH-GHO',
	'LINK-DAI',
	'LINK-USDC',
	'LINK-USDT',
	'LINK-ETH',
	'DAI-ETH',
	'DAI-MKR',
	'DAI-WBTC',
	'SDAI-WBTC',
	'SDAI-ETH',
	'SDAI-USDT',
	'USDC-WBTC',
	'USDC-ETH',
	'USDC-WSTETH',
	'USDC-USDT',
	'USDT-ETH',
];
// 'LDO-USDT' skipped as tenderly_setErc20Balance is not working with LDO
// 'ETH-GHO', -- NO LIQUIDITY - GHO
// 'WBTC-GHO', -- NO LIQUIDITY - GHO
// 'WSTETH-GHO', -- NO LIQUIDITY - GHO
// 'RETH-GHO', -- NO LIQUIDITY - GHO
// 'WEETH-GHO', -- NO LIQUIDITY - GHO
// 'LINK-GHO', -- NO LIQUIDITY - GHO
// 'SDAI-GHO', -- NO LIQUIDITY - GHO
// 'USDC-GHO', -- NO LIQUIDITY - GHO
// 'ETH-DAI', --> Already tested in /withWallet/aaveV3
// 'ETH-USDC', --> Already tested in /withWallet/aaveV3
// 'WBTC-DAI', --> Already tested in /withWallet/aaveV3
// 'WSTETH-USDT', --> Already tested in /withWallet/aaveV3

export const aaveV3ArbitrumEarnPools = ['WSTETH-ETH', 'RETH-ETH'];
// 'WEETH-ETH' --> WEETH supply 100%

export const aaveV3ArbitrumMultiplyPools = [
	'ETH-DAI',
	'WBTC-DAI',
	'WBTC-USDC',
	'RETH-DAI',
	'RETH-USDC',
	'WSTETH-USDC',
	'DAI-ETH',
	'DAI-WBTC',
	'USDC-ETH',
	'USDC-WBTC',
];
// 'WEETH-USDC',  --> WEETH supply 100%
// 'ETH-USDC', 'WSTETH-DAI' -- Already tested in /withWallet/aaveV3 test suite

export const aaveV3ArbitrumBorrowPools = [
	'ETH-DAI',
	'RETH-DAI',
	'RETH-USDC',
	'DAI-ETH',
	'DAI-WBTC',
	'USDC-ETH',
	'USDC-WBTC',
	'WSTETH-DAI',
	'WSTETH-USDC',
	'WBTC-DAI',
	'WBTC-USDC',
];
// 'ETH-USDC', -- Already tested in /withWallet/aaveV3 test suite
// 'WEETH-USDC',  --> WEETH supply 100%

export const aaveV3BaseEarnPools = ['WSTETH-ETH'];
// , 'WEETH-ETH'  --> WEETH supply 100%
// 'CBETH-ETH', --> Already tested in /withWallet/aaveV3 test suite

export const aaveV3BaseMultiplyPools = ['ETH-USDBC', 'CBETH-USDC', 'WSTETH-USDC'];
// 'WEETH-USDC', --> WEETH supply 100%
// 'CBETH-USDBC', --> Already tested in /withWallet/aaveV3 test suite
// 'ETH-USDC', --> Already tested in /withWallet/aaveV3 test suite

export const aaveV3BaseBorrowPools = [
	'ETH-USDC',
	'CBETH-USDC',
	'CBETH-USDBC',
	'WSTETH-USDC',
	// 'WEETH-USDC', --> WEETH supply 100%
	// 'ETH-USDBC', --> Already tested in /withWallet/aaveV3 test suite
];

export const aaveV3OptimismEarnPools = ['USDC.E-SUSD', 'USDC-SUSD', 'WSTETH-ETH'];
// BUG - 16013

export const aaveV3OptimismMultiplyPools = [
	'ETH-DAI',
	'ETH-USDC.E',
	'WSTETH-DAI',
	'WSTETH-USDC.E',
	'WBTC-DAI',
	'WBTC-USDC',
	'WBTC-USDC.E',
	'DAI-ETH',
	'DAI-WBTC',
	'USDC-ETH',
	'USDC-WBTC',
	'USDC.E-ETH',
	'USDC.E-WBTC',
	'WSTETH-USDC',
];
// 'ETH-USDC', --> Already tested in /withWallet/aaveV3 test suite

export const aaveV3OptimismBorrowPools = [
	'ETH-DAI',
	'ETH-USDC.E',
	'WSTETH-DAI',
	'WSTETH-USDC',
	'WSTETH-USDC.E',
	'WBTC-DAI',
	'WBTC-USDC',
	'WBTC-USDC.E',
	'DAI-ETH',
	'USDC-ETH',
	'USDC-WBTC',
	'USDC.E-ETH',
	'USDC.E-WBTC',
];
// 'ETH-USDC', --> Already tested in /withWallet/aaveV3 test suite
// 'DAI-WBTC', --> Already tested in /withWallet/aaveV3 test suite

// export const aaveV2EthereumMultiplyPools = [];
// 'WBTC-USDC', -- Already tested in /withWallet/aaveV2 test suite
// 'ETH-USDC', -- Already tested in /withWallet/aaveV2 test suite
// 'STETH-USDC' -- Not able to get funds with 'tenderly_setBalance'

export type Tokens =
	| 'AERO'
	| 'BSDETH'
	| 'CBBTC'
	| 'CBETH'
	| 'CLE'
	| 'DAI'
	| 'DAI-1'
	| 'DAI-2'
	| 'DAI-3'
	| 'DAI-4'
	| 'ETH'
	| 'ETH-1'
	| 'ETH-2'
	| 'ETH-3'
	| 'EZETH'
	| 'FRAX'
	| 'GHO'
	| 'LBTC'
	| 'LDO'
	| 'LINK'
	| 'LUSD'
	| 'MKR'
	| 'OSETH'
	| 'PTWEETH'
	| 'RETH'
	| 'RPL'
	| 'RSETH'
	| 'RSWETH'
	| 'SDAI'
	| 'SKY'
	| 'SUSDE'
	| 'SWBTC'
	| 'USDA'
	| 'USDC'
	| 'USDC_E'
	| 'USDE'
	| 'USDT'
	| 'USDS'
	| 'WBTC'
	| 'WEETH'
	| 'WOETH'
	| 'WSTETH'
	| 'WSUPEROETHB';

export type SetBalanceTokens =
	| 'AERO'
	| 'BSDETH'
	| 'CBBTC'
	| 'CBETH'
	| 'DAI'
	| 'ENA'
	| 'ETH'
	| 'EZETH'
	| 'FRAX'
	| 'GHO'
	| 'LBTC'
	| 'LDO'
	| 'LINK'
	| 'LUSD'
	| 'MKR'
	| 'OSETH'
	| 'PYUSD'
	| 'RETH'
	| 'RSETH'
	| 'RSWETH'
	| 'SDAI'
	| 'SKY'
	| 'STETH'
	| 'SUSDE'
	| 'SUSDS'
	| 'SWBTC'
	| 'USDA'
	| 'USDC'
	| 'USDC_E'
	| 'USDE'
	| 'USDS'
	| 'USDT'
	| 'WBTC'
	| 'WEETH'
	| 'WOETH'
	| 'WSTETH'
	| 'WSUPEROETHB'
	| 'YFI';

export const depositAmount: { [index: string]: string } = {
	AJNA: '100',
	AERO: '4000',
	BSDETH: '2',
	CBBTC: '0.15',
	CBETH: '2',
	DAI: '4000',
	ENA: '4000',
	ETH: '2',
	EZETH: '2',
	FRAX: '4000',
	GHO: '4000',
	LDO: '4000',
	LINK: '1000',
	LUSD: '4000',
	MKR: '2',
	OP: '1000',
	OSETH: '2',
	PYUSD: '4000',
	RETH: '2',
	RSETH: '2',
	RSWETH: '2',
	SDAI: '4000',
	STETH: '2',
	SUSDE: '4000',
	SWBTC: '0.15',
	TBTC: '100',
	USDC: '4000',
	USDC_E: '4000',
	USDE: '4000',
	USDT: '4000',
	WBTC: '0.15',
	WEETH: '2',
	WETH: '2',
	WOETH: '2',
	WSTETH: '2',
	WSUPEROETHB: '2',
	YFI: '1',
};

export const tokenDecimals = {
	CBETH: 10 ** 18,
	ETH: 10 ** 18,
	RETH: 10 ** 18,
	WSTETH: 10 ** 18,
};
