import css from "./TransactionHistory.module.css";
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.header}>
        <tr className={css.row}>
          <th className={css.row__title}>Type</th>
          <th className={css.row__title}>Amount</th>
          <th className={css.row__title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.row}>
              <td className={css.row__item}> {item.type}</td>
              <td className={css.row__item}>{item.amount}</td>
              <td className={css.row__item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
