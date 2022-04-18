require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember stick snake include problem metal gauge'; 
let testAccounts = [
"0x4d5038f458a6a847990039a90b3245f6c95ff7b7cd0c06c9359b5ec31ae84828",
"0xc142ad43d1e2b00f213f619b9840fceb039f5211a7f81432851875eb7377db0c",
"0x0a9b571bff2461b5530b843ce1dde294d26231fb2f45bb4438335b0073e9e69f",
"0x8eb42397afb265ed109f388a107c4b78e234a66a813c179dd0da009d74bb845c",
"0x29a071cb6fe373611996777e3ce3d2aca3b50197c4f272acab88c74f35d7d15e",
"0xd5990b2e681f1b0e384b62cef1d2b66fec14de128b1153310c374e87995585aa",
"0x0c1cc9b38b0d2239abfe9f46de0bb61921324bbf1de96a75e099f4a2a9278808",
"0x21882da0313efd1fb3faa25557c06e75f815b9c2bf54cf584a91e57c65520c5f",
"0xa371f1b2785a1c84d2dbe63707e8652babe1fd6f2ee726e0a1957bb02df69602",
"0x74df6f4d48096b6a44289475154e853651ce3e92359ba6b4e4b6c4d40e3d4fdc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

