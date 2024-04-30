import ReactModal from "react-modal"
import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from "./styles"
import incomeImg from '../../assets/income.svg'
import incomeWhiteImg from '../../assets/incomeWhite.svg'
import outcomeImg from '../../assets/outcome.svg'
import outcomeWhiteImg from '../../assets/outcome-white.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from "react"
import { api } from "../../services/api"

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type,
            createdAt: new Date()
        }

        api.post('/transactions', data)
    }

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
            <NewTransactionModalContainer onSubmit={handleCreateNewTransaction}>
                <h2>Nova transação</h2>

                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    />

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        $isActive={type === 'deposit'}
                        $activeColor='green'
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
                        $isActive={type === 'withdraw'}
                        $activeColor='red'
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