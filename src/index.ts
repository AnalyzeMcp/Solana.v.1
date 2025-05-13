import { Keypair } from '@solana/web3.js';
import { derivePath } from 'ed25519-hd-key';
import * as bip39 from 'bip39';

export interface Wallet {
  publicKey: string;
  privateKey: string;
  mnemonic: string;
}

export function generateWallet(): Wallet {
  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const path = "m/44'/501'/0'/0'"
  const keypair = Keypair.fromSeed(derivePath(path, seed.toString('hex')).key);
  
  return {
    publicKey: keypair.publicKey.toString(),
    privateKey: Buffer.from(keypair.secretKey).toString('hex'),
    mnemonic
  };
}

export function importWalletFromPrivateKey(privateKey: string): Wallet {
  const keypair = Keypair.fromSecretKey(Buffer.from(privateKey, 'hex'));
  
  return {
    publicKey: keypair.publicKey.toString(),
    privateKey,
    mnemonic: ''
  };
}

export function importWalletFromMnemonic(mnemonic: string): Wallet {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const path = "m/44'/501'/0'/0'"
  const keypair = Keypair.fromSeed(derivePath(path, seed.toString('hex')).key);
  
  return {
    publicKey: keypair.publicKey.toString(),
    privateKey: Buffer.from(keypair.secretKey).toString('hex'),
    mnemonic
  };
}