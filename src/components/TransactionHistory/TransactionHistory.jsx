import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  const renderTransactions = () => {
    return transactions.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    ));
  };

  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th className={css.typeHeader}>Type</th>
          <th className={css.amountHeader}>Amount</th>
          <th className={css.currencyHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>{renderTransactions()}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
