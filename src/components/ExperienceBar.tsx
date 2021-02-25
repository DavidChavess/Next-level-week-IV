import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={ styles.experienceBar } >
      <span>0 xp</span>
        <div >
          <div style={{ width: '50%' }} />

          <span className={ styles.currentExperiense } style={{ left: '50%' }} > 400 xp </span>
        </div>
      <span>800 xp</span>
  </header>
  );
}