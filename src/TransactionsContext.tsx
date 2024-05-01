import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number 
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransctionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransctionsContextData>(
    {} as TransctionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', transactionInput)
        const { transaction } = response.data;

        setTransactions(prevState => [...prevState, transaction])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}