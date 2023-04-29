import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export { Statistics };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

let key = 0;

function Statistics(props) {
  const { title, stats } = props;
  const statCount = stats.length;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(statObj => {
          const { label, percentage } = statObj;
          key += 1;

          return (
            <li
              className={css.item}
              key={key}
              style={{
                backgroundColor: getRandomHexColor(),
                width: `calc(100% / ${statCount})`,
              }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
