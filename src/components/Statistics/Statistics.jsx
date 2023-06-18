import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';

export const Statistics = ({title, ...rest}) => {
  return (
    <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
   <StatisticItem stats={rest}/>
  </ul>
</section>
  );
};

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired)
// };
