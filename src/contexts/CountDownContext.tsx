import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountDown: ()=>void;
  resetCountDown: ()=>void;
}

interface CountDownProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData ); 
let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider( { children } : CountDownProps ){
  
  const { startNewChallenge } = useContext(ChallengesContext);

  const [ time, setTime ] = useState( 0.1 * 60 );
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, sethasFinished ] = useState(false);

  const minutes = Math.floor( time / 60 );
  const seconds = time % 60;
  
  function startCountDown(){
    setIsActive(true);   
  }

  function resetCountDown(){
    sethasFinished(false);
    setIsActive(false);   
    setTime(0.1 * 60);
    clearTimeout(countDownTimeout);
  }
 
  useEffect(()=>{
    if(isActive && time > 0){
      countDownTimeout = setTimeout( () => {
        setTime(time - 1);
      }, 1000)
    }else if( isActive && time === 0 ){
      sethasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time] )

  return (
    <CountDownContext.Provider 
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}