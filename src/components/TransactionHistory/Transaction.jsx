import { Row, Cell } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <Row>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Row>
  );
};
