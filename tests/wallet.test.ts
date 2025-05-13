import { generateWallet, importWalletFromPrivateKey, importWalletFromMnemonic } from '../src/index';

describe('Solana Wallet Generator', () => {
  it('should generate a valid wallet', () => {
    const wallet = generateWallet();
    
    expect(wallet.publicKey).toBeDefined();
    expect(wallet.privateKey).toBeDefined();
    expect(wallet.mnemonic).toBeDefined();
    expect(wallet.privateKey).toHaveLength(128);
  });

  it('should import wallet from private key', () => {
    const originalWallet = generateWallet();
    const importedWallet = importWalletFromPrivateKey(originalWallet.privateKey);
    
    expect(importedWallet.publicKey).toEqual(originalWallet.publicKey);
    expect(importedWallet.privateKey).toEqual(originalWallet.privateKey);
  });

  it('should import wallet from mnemonic', () => {
    const originalWallet = generateWallet();
    const importedWallet = importWalletFromMnemonic(originalWallet.mnemonic);
    
    expect(importedWallet.publicKey).toEqual(originalWallet.publicKey);
    expect(importedWallet.privateKey).toEqual(originalWallet.privateKey);
    expect(importedWallet.mnemonic).toEqual(originalWallet.mnemonic);
  });
});