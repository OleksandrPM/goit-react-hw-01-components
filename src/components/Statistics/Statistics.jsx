import PropTypes from 'prop-types';

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
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(statObj => {
          const { label, percentage } = statObj;
          key += 1;

          return (
            <li
              className="item"
              key={key}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
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
