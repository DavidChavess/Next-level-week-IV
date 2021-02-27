import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {
  
  const value = useContext(ChallengesContext);

  return (
    <div className={styles.challendBoxContainer} >
      { value.challenge ? 
        <div className={styles.challendActive} >
          <header>Ganhe {value.challenge.amount} xp</header>
          <main>
            <img src={`icons/${ value.challenge.type }.svg`} alt="body"/>
            <strong>Novo desafio</strong>
            <p> {value.challenge.description} </p>
          </main>
          <footer>
            <button 
              className={styles.failedChallendButton}
              type='button' 
              onClick={value.resetChallenge}
            >  
              Falhei
            </button>
            <button 
              className={styles.successChallendButton}
              type='button'  
            >
              Completei
            </button>
          </footer>
        </div>
        :
        <div className={styles.challendNotActive} >
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
      }
    </div>
  );
}