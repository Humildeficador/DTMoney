import { useEffect } from "react";
import { TransactionsTableContainer } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log(data))
    }, [])

    return (
        <TransactionsTableContainer>
            <table>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1.100,00</td>
                        <td>Casa</td>
                        <td>17/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </TransactionsTableContainer>
    )
}