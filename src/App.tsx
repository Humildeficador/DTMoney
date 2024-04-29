import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isTransictionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}