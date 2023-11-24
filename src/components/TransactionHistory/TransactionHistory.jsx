import transactions from '../../json/transactions.json';
import css from './TransactionHistory.module.css'

// <TransactionHistory items={transactions} />;

export const TransactionHistory = () => {
    return <table className={css.transactionHistory} >
  <thead>
    <tr className={css.header}>
      <th className={css.cell}>Type</th>
      <th className={css.cell}>Amount</th>
      <th className={css.cell}>Currency</th>
    </tr>
  </thead>
{transactions.map(({ currency, amount, type, id}) => (
  <tbody key={id}>
    <tr className={css.row}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{ amount}</td>
      <td className={css.cell}>{ currency}</td>
    </tr>
  </tbody>

))}
      </table>
}