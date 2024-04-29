import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal} :HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </HeaderContent>
        </HeaderContainer>
    )
}