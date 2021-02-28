import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {
  
  const { challenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountDownContext);

  function reset(){
    resetChallenge();
    resetCountDown();
  }

  function start(){
    completeChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challendBoxContainer} >
      { challenge ? 
        <div className={styles.challendActive} >
          <header>Ganhe { challenge.amount } xp</header>
          <main>
            <img src={`icons/${ challenge.type }.svg`} alt="body"/>
            <strong>Novo desafio</strong>
            <p> { challenge.description } </p>
          </main>
          <footer>
            <button 
              className={styles.failedChallendButton}
              type='button' 
              onClick={ reset }
            >  
              Falhei
            </button>
            <button 
              className={styles.successChallendButton}
              type='button'  
              onClick={ start }
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