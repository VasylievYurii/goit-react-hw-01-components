import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TableTransactionHistory,Thead,RowHead,CellHead,Tbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactionHistory>
      <Thead>
        <RowHead>
          <CellHead>Type</CellHead>
          <CellHead>Amount</CellHead>
          <CellHead>Currency</CellHead>
        </RowHead>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </Tbody>
    </TableTransactionHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
