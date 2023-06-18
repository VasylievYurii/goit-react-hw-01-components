export const StatisticItem = ({ stats }) => {
    return (
        stats['stats'].map(({ id, label, percentage }) => {
        return (
          <li className="item" key={id}>
            <span className="label" key={id}>{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        );
      })
    );
  }