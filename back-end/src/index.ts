import express from 'express';
import knex from './knex';

const PORT = 8080;

const app = express();

app.get('/users', async (req, res) => {
  res.json({
    result: 'result',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * The following demonstrates how to generate a keypair with Node.js.
 * This should be done on the client side, but it's included here as a comment to demonstrate its use. This should probably be moved elsewhere at some point.
 */
// Node.js program to demonstrate the
// crypto.generateKeyPair() method

// Including generateKeyPair from crypto module
// import { generateKeyPair } from 'crypto';

// Calling generateKeyPair() method
// with its parameters
// const genKeyPair = () => {
//   generateKeyPair(
//     'rsa',
//     {
//       modulusLength: 2048, // options
//       publicExponent: 0x10101,
//       publicKeyEncoding: {
//         type: 'pkcs1',
//         format: 'der',
//       },
//       privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'der',
//         cipher: 'aes-192-cbc',
//         passphrase: 'GeeksforGeeks is a CS-Portal!',
//       },
//     },
//     (err: any, publicKey: any, privateKey: any) => {
//       // Callback function
//       if (!err) {
//         // Prints new asymmetric key pair
//         console.log('Public Key is : ', publicKey);
//         console.log();
//         console.log('Private Key is: ', privateKey);
//       } else {
//         // Prints error
//         console.log('Errr is: ', err);
//       }
//     }
//   );
// };
