import { useState } from 'react';
import styles from '../styles/components/ChallendBox.module.css'

export function ChallendBox() {

  const [hasActiveChallend, setHasActiveChallend ] = useState(true);

  return (
    <div className={styles.challendBoxContainer} >
      { hasActiveChallend ? 
        <div className={styles.challendActive} >
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="body"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <button 
              className={styles.failedChallendButton}
              type='button' 
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