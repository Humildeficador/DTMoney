import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { DashboardContainer } from "./styles";

export function Dashboard() {
    return (
        <DashboardContainer>
            <Summary />
            <TransactionsTable />
        </DashboardContainer>
    )
}