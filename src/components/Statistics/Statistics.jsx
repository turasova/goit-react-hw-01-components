import data from '../../json/data.json';
import css from './Statistics.module.css';

  
// <Statistics stats={data} />



export const Statistics = () => {
  return <section className={css.statistics} >
        <h2 className={css.title}>Upload stats</h2>
     <ul className={css.list}> 
      {data.map(({ id, label, percentage }) => ( 
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>        
      ))} 
    </ul>     
     </section>
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const color = getRandomHexColor();
//<Statistics title="Upload stats" stats={data} />