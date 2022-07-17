import Calendario from '../../Assets/Calendario.svg'
import { Title,Day } from './style'

function Header({day}){
    return(
        <>
        <Title>
            <img src ={Calendario} alt="iconeCalendario"/>
            <h2>Horarios de Aula</h2>
        </Title>
        <Day>
            <h1>Segunda</h1>
        </Day>
        </>
    )
}

export default Header