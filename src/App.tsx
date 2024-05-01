import { useState } from "react";
import ReactModal from "react-modal";
import { TransactionsProvider } from "./TransactionsContext";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement('#root')

export function App() {
  const [isTransictionModalOpen, setIsTransictionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransictionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsTransictionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isTransictionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}