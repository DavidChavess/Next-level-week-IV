import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  description: string;
  type: 'body' | 'eye';
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}
interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider( props: ChallengesProviderProps ){

  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ challenge, setChallenge ] = useState( null );

  const experienceToNextLevel = Math.pow( (level+1) * 4, 2 );

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const index =  Math.floor( Math.random() * challenges.length );
    setChallenge( challenges[index] );
  }

  function resetChallenge(){
    setChallenge(null);
  }

  function completeChallenge() {
    if(!challenge){
      return;
    }

    const { amount } = challenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel
      levelUp();
    }

    setCurrentExperience(finalExperience);
    resetChallenge();
    setChallengesCompleted(challengesCompleted + 1);

  }

  return (    
    <ChallengesContext.Provider 
      value={ { 
        level, 
        currentExperience, 
        challengesCompleted,
        challenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }
      }  
    >
      {props.children}
    </ChallengesContext.Provider>
  )
}
