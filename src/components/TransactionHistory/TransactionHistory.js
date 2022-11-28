// import transactions from '../../transactions.json';
import PropTypes from 'prop-types';
import './TransactionHistory.css';
export const TransactionHistory = props => {
  //   console.dir(props);
  return (
    <section className="transactions">
      <table className="transaction-history">
        <thead className="table">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map(el => (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
