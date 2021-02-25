import { Head } from "next/document";
import { CompletedChallends } from "../components/CompletedChallends";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className= {styles.container}  >    
      <ExperienceBar />      
      <section>
        <div>
          <Profile />
          <CompletedChallends />
          <CountDown />
        </div>

        <div>

        </div>
      </section>

      <footer>
        
      </footer>
    </div>  
  )
}
