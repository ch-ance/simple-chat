"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
exports.default = () => {
    const keyPair = (0, crypto_1.generateKeyPairSync)("rsa", {
        modulusLength: 2048,
        publicExponent: 0x10101,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "der",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "der",
            cipher: "aes-192-cbc",
            passphrase: "GeeksforGeeks is a CS-Portal!",
        },
    });
    return keyPair;
};
