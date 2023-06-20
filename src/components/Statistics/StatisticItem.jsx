import { ItemStat, Label, Percentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <ItemStat>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ItemStat>
  );
};
