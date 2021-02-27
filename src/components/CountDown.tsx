import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function CountDown(){

  const value = useContext(ChallengesContext);
   
  const [ time, setTime ] = useState( 0.1 * 60 );
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, sethasFinished ] = useState(false);

  const minutes = Math.floor( time / 60 );
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); 

  function startCountDown(){
    setIsActive(!isActive);
    
    if(isActive){
      setTime(0.1 * 60);
      clearTimeout(countDownTimeout);
    }
  }
 
  useEffect(()=>{
    if(isActive && time > 0){
      countDownTimeout = setTimeout( () => {
        setTime(time - 1);
      }, 1000)
    }else if( isActive && time === 0 ){
      sethasFinished(true);
      setIsActive(false);
      value.startNewChallenge();
    }
  }, [isActive, time] )

  return (
    <div>
      <div className={styles.countDownContainer} >
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished
        ? 
          <button
            disabled
            className={styles.countDownButton} 
          >
            Ciclo encerrado
            <img src="icons/close.svg" alt="close"/>

          </button> 
        : 
          <button
            onClick={startCountDown} 
            type="button" 
            className={`${styles.countDownButton} ${isActive ? styles.countDownButtonActive : ''}`} 
          >
            { isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
          </button>
      }    

    </div> 
  );
}