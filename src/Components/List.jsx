/* eslint-disable react/button-has-type */
import styles from './list.module.scss';

const List = () => {
  // eslint-disable-next-line no-alert
  const handleClick = (number, buttonText) => window.alert(buttonText);

  return (
    <>
      <ul className={styles.categories_grid}>
        <li className={styles.item}><button className={styles.depression_button} onClick={() => handleClick(1, 'Depression')}>Depression</button></li>
        <li className={styles.item}><button className={styles.anxiety_button} onClick={() => handleClick(2, 'Anxiety')}>Anxiety</button></li>
        <li className={styles.item}><button className={styles.relationships_button} onClick={() => handleClick(3, 'Relationships')}>Relationships</button></li>
        <li className={styles.item}><button className={styles.stress_button} onClick={() => handleClick(4, 'Stress')}>Stress</button></li>
        <li className={styles.item}><button className={styles.life_button} onClick={() => handleClick(5, 'Life')}>Life Transitions</button></li>
        <li className={styles.item}><button className={styles.ptsd_button} onClick={() => handleClick(6, 'PTSD')}>PTSD</button></li>
        <li className={styles.item}><button className={styles.adhd_button} onClick={() => handleClick(7, 'ADHD')}>ADHD</button></li>
        <li className={styles.item}><button className={styles.parenting_button} onClick={() => handleClick(8, 'Parenting')}>Parenting</button></li>
      </ul>
    </>
  );
};

export default List;
