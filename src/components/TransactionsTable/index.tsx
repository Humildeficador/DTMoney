import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
import { TransactionsTableContainer } from "./styles";

export function TransactionsTable() {
    const transactions = useContext(TransactionContext)
    return (
        <TransactionsTableContainer>
            <table>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.value)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TransactionsTableContainer>
    )
}