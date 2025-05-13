# Solana Wallet Generator

A comprehensive Solana wallet generator toolkit that provides:
- Wallet generation
- Key management
- Transaction signing
- Integration with Solana blockchain

## Features

- Generate new Solana wallets with secure key pairs
- Import existing wallets via private keys
- Sign and verify transactions
- Built with TypeScript for type safety
- Comprehensive test coverage

## Installation

```bash
npm install @solana/wallet-generator
```

## Usage

```typescript
import { generateWallet, signTransaction } from '@solana/wallet-generator';

// Generate a new wallet
const wallet = generateWallet();
console.log('Public Key:', wallet.publicKey);
console.log('Private Key:', wallet.privateKey);

// Sign a transaction
const signedTx = signTransaction(wallet, transaction);
```

## Documentation

See [docs/](docs/) for detailed API documentation.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)