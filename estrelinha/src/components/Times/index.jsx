import {horarios} from '../../data'
import {Table, FirstLine1,FirstLine2,Column1,Column2,GeralContainer} from './style'

function Times(){
    
    console.log(horarios)

    return(
        <GeralContainer>

            {
                horarios.map((e,index)=>(
                    <Table key = {index}>
                        <FirstLine1>Icone</FirstLine1>
                        <FirstLine2>Disciplina</FirstLine2>
                        <Column1>13:00</Column1>
                        <Column2>{e.times.firstTime}</Column2>
                        <Column1>13:50</Column1>
                        <Column2>{e.times.secondTime}</Column2>
                        <Column1>14:40</Column1>
                        <Column2>{e.times.thirdTime}</Column2>
                        <Column1>15:30</Column1>
                        <Column2>{e.times.fourthTime}</Column2>
                        <Column1>16:20</Column1>
                        <Column2>{e.times.fifthTime}</Column2>
                        <Column1>17:10</Column1>
                        <Column2>{e.times.sixthTime}</Column2>
                    </Table>
                ))
            }
        </GeralContainer>
    )
}

export default Times