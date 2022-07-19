import { horarios } from "../../data";
import {
  Button,
  Table,
  FirstLine1,
  FirstLine2,
  Column1,
  Column2,
  GeralContainer,
  FirstLine1DarkMode,
  FirstLine2DarkMode,
  Column2Destaque,
} from "./style";
import Clock from "../../Assets/Clock.svg";
import { useEffect, useState } from "react";

function Times({ dark, setDay }) {
  let date = new Date();
  let today = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }

  if (today < 1 || today > 5) {
    today = 0;
  }

  const [index, setIndex] = useState(today - 1);


  const addIndex = () => {
    if (index < horarios.length - 1) {
      setIndex(index + 1);
    }
   
    if(today<1||today>5){
        today=0;
    }

    }

  const removeIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
   }
  };

  useEffect(() => {
    setDay(horarios[index].day);
  }, [index]);

  return (
    <div
      style={{
        width: "100vw",
        height: "70%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Button onClick={() => removeIndex()}>{"<"}</Button>

      <GeralContainer>

        {dark === false ? (
          <Table>
            <FirstLine1>
              <img src={Clock} alt="iconeRelogio" />
            </FirstLine1>
            <FirstLine2>DISCIPLINA</FirstLine2>

            <Column1>{horarios[index].times.firstTime.hour}</Column1>
            {((hour === 13 && minutes >= 0) || (hour === 13 && minutes <= 50)) && (today.toString()=== horarios[index].cod )? (
              <Column2Destaque>{horarios[index].times.firstTime.name}</Column2Destaque>
            ) : (
              <Column2>{horarios[index].times.firstTime.name}</Column2>
            )}

            <Column1>{horarios[index].times.secondTime.hour}</Column1>
            {((hour === 13 && minutes >= 50)||(hour === 14 && minutes <= 40))&& (today.toString()=== horarios[index].cod ) ?
                <Column2Destaque>{horarios[index].times.secondTime.name}</Column2Destaque>: 
                <Column2>{horarios[index].times.secondTime.name}</Column2>
            }

            <Column1>{horarios[index].times.thirdTime.hour}</Column1>
            {((hour === 14 && minutes >= 40)||(hour === 15 && minutes <= 30)) && (today.toString()=== horarios[index].cod ) ?
                <Column2Destaque>{horarios[index].times.thirdTime.name}</Column2Destaque>: 
                <Column2>{horarios[index].times.thirdTime.name}</Column2>
            }
            
            <Column1>{horarios[index].times.fourthTime.hour}</Column1>
            {((hour===15&&minutes>=30)||(hour===16&&minutes<=20))&& (today.toString()=== horarios[index].cod )?
                <Column2Destaque>{horarios[index].times.fourthTime.name}</Column2Destaque>:
                <Column2>{horarios[index].times.fourthTime.name}</Column2>                        
            }

            <Column1>{horarios[index].times.fifthTime.hour}</Column1>
            {((hour === 16 && minutes >= 20)||(hour === 17 && minutes <= 10))&& (today.toString()=== horarios[index].cod ) ?
              <Column2Destaque>{horarios[index].times.fifthTime.name}</Column2Destaque>: 
              <Column2>{horarios[index].times.fifthTime.name}</Column2>
            }

            <Column1>{horarios[index].times.sixthTime.hour}</Column1>
            {(hour === 17 && minutes >= 10)&& (today.toString()=== horarios[index].cod ) ? 
              <Column2Destaque>{horarios[index].times.sixthTime.name}</Column2Destaque> : 
              <Column2>{horarios[index].times.sixthTime.name}</Column2>
            }
          </Table>
        ) : (
          <Table>
            <FirstLine1DarkMode>
              <img src={Clock} alt="iconeRelogio" />
            </FirstLine1DarkMode>
            <FirstLine2DarkMode>DISCIPLINA</FirstLine2DarkMode>

            <Column1>{horarios[index].times.firstTime.hour}</Column1>
            {((hour === 13 && minutes >= 0) || (hour === 13 && minutes <= 50)) && (today.toString()=== horarios[index].cod )? (
              <Column2Destaque>{horarios[index].times.firstTime.name}</Column2Destaque>
            ) : (
              <Column2>{horarios[index].times.firstTime.name}</Column2>
            )}

            <Column1>{horarios[index].times.secondTime.hour}</Column1>
            {((hour === 13 && minutes >= 50)||(hour === 14 && minutes <= 40))&& (today.toString()=== horarios[index].cod ) ?
                <Column2Destaque>{horarios[index].times.secondTime.name}</Column2Destaque>: 
                <Column2>{horarios[index].times.secondTime.name}</Column2>
            }

            <Column1>{horarios[index].times.thirdTime.hour}</Column1>
            {((hour === 14 && minutes >= 40)||(hour === 15 && minutes <= 30)) && (today.toString()=== horarios[index].cod ) ?
                <Column2Destaque>{horarios[index].times.thirdTime.name}</Column2Destaque>: 
                <Column2>{horarios[index].times.thirdTime.name}</Column2>
            }
            
            <Column1>{horarios[index].times.fourthTime.hour}</Column1>
            {((hour===15&&minutes>=30)||(hour===16&&minutes<=20))&& (today.toString()=== horarios[index].cod )?
                <Column2Destaque>{horarios[index].times.fourthTime.name}</Column2Destaque>:
                <Column2>{horarios[index].times.fourthTime.name}</Column2>                        
            }

            <Column1>{horarios[index].times.fifthTime.hour}</Column1>
            {((hour === 16 && minutes >= 20)||(hour === 17 && minutes <= 10))&& (today.toString()=== horarios[index].cod ) ?
              <Column2Destaque>{horarios[index].times.fifthTime.name}</Column2Destaque>: 
              <Column2>{horarios[index].times.fifthTime.name}</Column2>
            }

            <Column1>{horarios[index].times.sixthTime.hour}</Column1>
            {(hour === 17 && minutes >= 10)&& (today.toString()=== horarios[index].cod ) ? 
              <Column2Destaque>{horarios[index].times.sixthTime.name}</Column2Destaque> : 
              <Column2>{horarios[index].times.sixthTime.name}</Column2>
            }
                                            
          </Table>            
        )
        }

      </GeralContainer>

      <Button onClick={() => addIndex()}>{">"}</Button>
    </div>
  );
}

export default Times;
