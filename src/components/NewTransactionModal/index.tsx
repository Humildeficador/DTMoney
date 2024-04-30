import ReactModal from "react-modal"
import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from "./styles"
import incomeImg from '../../assets/income.svg'
import incomeWhiteImg from '../../assets/incomeWhite.svg'
import outcomeImg from '../../assets/outcome.svg'
import outcomeWhiteImg from '../../assets/outcome-white.svg'
import closeImg from '../../assets/close.svg'
import { useState } from "react"

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

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

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                        >
                        {type === 'deposit' 
                            ? <img src={incomeWhiteImg} alt="Saída" />
                            : <img src={incomeImg} alt="Saída" />
                        }
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        {type === 'withdraw'
                            ? <img src={outcomeWhiteImg} alt="Saída" />
                            : <img src={outcomeImg} alt="Saída" />
                        }
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </NewTransactionModalContainer>
        </ReactModal>
    )
}