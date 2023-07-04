import PropTypes from 'prop-types';
import './Statistics.module.css';
import clsx from 'clsx';

export const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

export const Statistics = ({ title, stats }) => {
    return (
      <section className={clsx('statistics')}>
        {title && <h4 className={clsx('title')}>{title}</h4>}
        <ul className={clsx('stat-list')}>
          {stats.map(item => (
            <li
              key={item.id}
              className={clsx('item')}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={clsx('label')}>{item.label}</span>
              <span className={clsx('percentage')}>{item.percentage} %</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ),
  };