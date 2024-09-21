import style from './TransactionHistory.module.css'
import PropTypes from 'prop-types';


const TransactionHistory = ({ items }) => {
    return (
      <div className={style.wrap}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.th}>Type</th>
              <th className={style.th}>Amount</th>
              <th className={style.th}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }, index) => (
              <tr key={id}
              className={`${index % 2 === 0 ? style.trEven : style.trOdd} ${style.trHover}`}>
                <td className={style.td}>{type}</td>
                <td className={style.td}>{amount}</td>
                <td className={style.td}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default TransactionHistory