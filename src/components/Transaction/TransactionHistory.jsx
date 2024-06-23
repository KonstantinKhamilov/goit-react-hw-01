// TransactionHistory.js
import TransactionItem from "./TransactionItem";

export default function TransactionHistory({ items }) {
  return (
    <table className={history.table}>
      <thead>
        <tr>
          <th>Тип</th>
          <th>Сумма</th>
          <th>Валюта</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}
