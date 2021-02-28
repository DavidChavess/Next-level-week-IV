import { CompletedChallends } from "../components/CompletedChallends";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallendBox } from "../components/ChallendBox";

import styles from '../styles/pages/Home.module.css';
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <CountDownProvider>
      <div className= {styles.container}  >    
        <head >
          <title>Move.it</title>
        </head>

        <ExperienceBar />      
        <section>
          <div>
            <Profile />
            <CompletedChallends />
            <CountDown />
          </div>
          <div>
            <ChallendBox />

          </div>
        </section>
      </div> 
    </CountDownProvider> 
  )
}
