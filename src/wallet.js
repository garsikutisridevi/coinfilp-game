import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const network = WalletAdapterNetwork.Devnet;
const wallets = [new PhantomWalletAdapter()];

export async function connectWallet() {
    const wallet = wallets[0];
    await wallet.connect();
    console.log('Wallet connected:', wallet.publicKey.toString());
    return wallet;
}
