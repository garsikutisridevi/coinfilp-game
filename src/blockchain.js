import { Transaction, SystemProgram } from '@solana/web3.js';
import { connectWallet } from './wallet.js';

export async function executeFlip(betAmount, selectedSide) {
    const wallet = await connectWallet();
    const flipResult = flipCoin();

    if (checkWin(selectedSide, flipResult)) {
        // Double the user's tokens if they win
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: wallet.publicKey, // In a real scenario, this would be the smart contract's public key
                lamports: betAmount * 2,
            })
        );
        await wallet.sendTransaction(transaction, connection);
        return true;
    } else {
        return false;
    }
}
