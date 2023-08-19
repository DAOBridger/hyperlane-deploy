import dotenv from 'dotenv';

import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

dotenv.config();

console.log(
  `https://linea-goerli.infura.io/v3/${process.env.INFURA_API_KEY || ''}`,
);
// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    // anvil default chain id
    chainId: 31337,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8545',
      },
    ],
    // You can set overrides for transaction fields here
    // transactionOverrides: {
    //   gasLimit: 1000000
    // },
  },
  anvil2: {
    name: 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId: 31338,
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8555',
      },
    ],
  },
  lineagoerli: {
    name: 'lineagoerli',
    protocol: ProtocolType.Ethereum,
    chainId: 59140,
    rpcUrls: [
      {
        http: `https://linea-goerli.infura.io/v3/${
          process.env.INFURA_API_KEY || ''
        }`,
      },
    ],
  },
  // --------------------------------------------------
  // You can also override the default chain metadata (completely)
  // ethereum: {
  //   ...chainMetadata.ethereum,
  //   publicRpcUrls: [
  //     {
  //       http: 'my.custom.rpc.url',
  //     }
  //   ],
  // }
};
