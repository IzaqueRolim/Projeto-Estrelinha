import GitHub from '../../Assets/GitHub.svg'
import { Div } from './style'

function Credits(){
    return(
        <Div>
            <a href="https://github.com/Rolinzinho48" target="_blank">
                <img src={GitHub} alt="icone Git"/>
                <span>Izaque Rolim</span>
            </a>    
            <a href="https://github.com/raqueldesa" target="_blank">
                <img src={GitHub} alt="icone Git"/>
                <span>Raquel De Sa</span>
            </a>     
        </Div>
        
    )
}
export default Credits