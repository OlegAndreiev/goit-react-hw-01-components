import PropTypes from 'prop-types';
import data from '../../data.json';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(el => (
          <li
            className="item-statistics"
            style={{ backgroundColor: getRandomHexColor() }}
            key={el.id}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
  }),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
