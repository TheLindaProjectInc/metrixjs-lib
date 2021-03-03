module.exports = {
    metrix: {
        messagePrefix: '\x15Metrix Signed Message:\n',
        bech32: 'mc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x32,
        scriptHash: 0x55,
        wif: 0x99
    },
    metrix_testnet: {
        messagePrefix: '\x15Metrix Signed Message:\n',
        bech32: 'tm',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x6e,
        scriptHash: 0xbb,
        wif: 0xef
    }
}
