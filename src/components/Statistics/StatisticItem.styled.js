import styled from '@emotion/styled';
import colors from '../../data/colors.json'

export const ItemStat = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 3.6em;
  padding: 1.1em;
  background-color: ${getRandomColor};
  gap: 0.3em;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 1px;
    height: 100%;
    background-color: white;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: white;
  font-size: 0.8em;
`;

export const Percentage = styled.span`
color: white;
`;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
