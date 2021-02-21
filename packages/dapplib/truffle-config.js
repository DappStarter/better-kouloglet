require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet remember saddle pulse hunt derive bone truth'; 
let testAccounts = [
"0xd94160ffea450415cc9b971e7b6cbb695445020d7e01569acc74b241a3307f37",
"0xafa90a1c2656a7c5bc48c74b0c8076e420007ca1f3a2dad1e0873df2ac89e054",
"0xf9148e7b2bef5f2bbee83db2b6812000367606b171a6797e77f466757765d0a7",
"0xa889ba5deb30da5b3e18d1e2e93d5541d96faff116c8ecff85013bb7db2a8718",
"0x515e4680f0f30ea6a26059eb70a7cf3458acfdf6824af213a33b9d1954c81685",
"0xfb0574a66d2320733eb814ea1a7adb88815cb7238cd4e2d798b5eb3ab0cb6316",
"0xa74cc7b88f43a9d772254eb4968bfe005168c2d65d7b870844eb13b63fdee765",
"0x92731333256c1ba2b1dddf77129fe429fe661c05f4de3b36e553d69c928acfe4",
"0x25644a74c3668ca33828498f0b96c6f1d03aa9ce9503c08118a6e860a10ff527",
"0xa0884359dada201bfd4354e441bad8cda83d2362f974778ea808c67c23fa5a92"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
