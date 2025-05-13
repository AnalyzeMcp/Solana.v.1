# Solana Wallet Generator API Documentation

## Table of Contents
1. [Wallet Generation](#wallet-generation)
2. [Key Management](#key-management)
3. [Transaction Signing](#transaction-signing)

## Wallet Generation

### `generateWallet()`
Generates a new Solana wallet with key pair and mnemonic.

**Returns:**
```typescript
interface Wallet {
  publicKey: string;
  privateKey: string;
  mnemonic: string;
}
```

**Example:**
```typescript
const wallet = generateWallet();
console.log('Public Key:', wallet.publicKey);
console.log('Private Key:', wallet.privateKey);
console.log('Mnemonic:', wallet.mnemonic);
```

## Key Management

### `importWalletFromPrivateKey(privateKey: string)`
Imports an existing wallet from private key.

**Parameters:**
- `privateKey`: Hex-encoded private key string

**Returns:** `Wallet` object (without mnemonic)

**Example:**
```typescript
const importedWallet = importWalletFromPrivateKey('your-private-key-here');
```

### `importWalletFromMnemonic(mnemonic: string)`
Imports an existing wallet from mnemonic phrase.

**Parameters:**
- `mnemonic`: 12 or 24 word mnemonic phrase

**Returns:** Complete `Wallet` object

**Example:**
```typescript
const importedWallet = importWalletFromMnemonic('your mnemonic phrase here');
```

## Transaction Signing

Coming soon in v2.0 release...