import erc6551AccountAbiV2 from "../abis/v2/account.abi.json";
import erc6551RegistryAbiV2 from "../abis/v2/registry.abi.json";
import erc6551AccountV3ABI from "../abis/v3/account.abi.json";
import erc6551RegistryV3ABI from "../abis/v3/registry.abi.json";
import { Abi } from "starknet";

type Standard6551Deployment = {
  ADDRESS: string;
  ABI: Abi;
};

type NetworkDeployment = {
  IMPLEMENTATION: Standard6551Deployment;
  REGISTRY: Standard6551Deployment;
};

type Standard6551Deployments = {
  [network: string]: {
    [version: string]: NetworkDeployment;
  };
};

export const ERC_6551_DEPLOYMENTS: Standard6551Deployments = {
  SN_MAIN: {
    V2: {
      IMPLEMENTATION: {
        ADDRESS:
          "0x45d67b8590561c9b54e14dd309c9f38c4e2c554dd59414021f9d079811621bd",
        ABI: erc6551AccountAbiV2 as Abi,
      },
      REGISTRY: {
        ADDRESS:
          "0x7f63abcad960f980c12d650b2cc4c27a8f63ee1f6eb36ea8286a946a2330c1b",
        ABI: erc6551RegistryAbiV2 as Abi,
      },
    },
    V3: {
      IMPLEMENTATION: {
        ADDRESS:
          "0x3d311ba322e1f900d669586b191a2a82c50f6cb850563a8e1c01c7bac9be7b0",
        ABI: erc6551AccountV3ABI as Abi,
      },
      REGISTRY: {
        ADDRESS:
          "0x572a25dbc65462ca99f8f1ea906879a8de3abaeadd2fb935fdb59950c767516",
        ABI: erc6551RegistryV3ABI as Abi,
      },
    },
  },

  SN_SEPOLIA: {
    V2: {
      IMPLEMENTATION: {
        ADDRESS:
          "0x45d67b8590561c9b54e14dd309c9f38c4e2c554dd59414021f9d079811621bd",
        ABI: erc6551AccountAbiV2 as Abi,
      },
      REGISTRY: {
        ADDRESS:
          "0x4101d3fa033024654083dd982273a300cb019b8cb96dd829267a4daf59f7b7e",
        ABI: erc6551RegistryAbiV2 as Abi,
      },
    },
    V3: {
      IMPLEMENTATION: {
        ADDRESS:
          "0xbe8863311f24317dff8af16deb1285ec5b035e57cf9beda545c341c339b925",
        ABI: erc6551AccountV3ABI as Abi,
      },
      REGISTRY: {
        ADDRESS:
          "0x4107f453e68bf4331a31316078bb73ecfcb767dc624ebd78f8c1e15b14c63bd",
        ABI: erc6551RegistryV3ABI as Abi,
      },
    },
  },
};
