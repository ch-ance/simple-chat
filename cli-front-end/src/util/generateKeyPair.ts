import { generateKeyPairSync, KeyPairSyncResult } from "crypto";

export default (): KeyPairSyncResult<Buffer, Buffer> => {
  const keyPair = generateKeyPairSync("rsa", {
    modulusLength: 2048, // options
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
