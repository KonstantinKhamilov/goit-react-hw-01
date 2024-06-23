import history from "./Transaction.module.css";

export default function TransactionItem({ transaction }) {
  return (
    <tr className={history.row}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
}
