import ReactModal from "react-modal"
import { NewTransactionModalContainer } from "./styles"
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <NewTransactionModalContainer>
                <h2>Nova transação</h2>

                <input
                    type="text"
                    placeholder="Titulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <div>
                    <button className="submit">
                        <img src={incomeImg} alt="Entrada" />
                        Entrada
                    </button>
                    <button className="deposit">
                        <img src={outcomeImg} alt="Saída" />
                        Saída
                    </button>
                </div>

                <button type="submit">
                    Cadastrar
                </button>
            </NewTransactionModalContainer>
        </ReactModal>
    )
}