import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/GlobalStyles.css';

function MyApp({ Component, pageProps }) {
  return ( 
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
