import { useState, useEffect } from 'react';
import data from 'data/data.json';
import css from './Table.module.css';

export const Table = () => {
  const [customersToShow, setCustomer] = useState(data);
  console.log(customersToShow);
  useEffect(() => {
    setCustomer(data);
  }, []);
  return (
    <section className={css.tableSection}>
      <table className={css.table}>
        <tr className={css.tableHeadRow}>
          <th className={css.tableHead}>Customer Name</th>
          <th className={css.tableHead}>Company</th>
          <th className={css.tableHead}>Phone Number</th>
          <th className={css.tableHead}>Email</th>
          <th className={css.tableHead}>Country</th>
          <th className={css.tableHead}>Status</th>
        </tr>
        {customersToShow &&
          customersToShow.map(customer => {
            const { name, company, phone, email, country, isActive } = customer;
            return (
              <tr className={css.tableRow}>
                <td className={css.tableData}>{name}</td>
                <td className={css.tableData}>{company}</td>
                <td className={css.tableData}>{phone} </td>
                <td className={css.tableData}>{email}</td>
                <td className={css.tableData}>{country}</td>
                {isActive && <td className={css.tableDataActive}>Active</td>}
                {!isActive && (
                  <td className={css.tableDataInactive}>Inactive</td>
                )}
              </tr>
            );
          })}
      </table>
      <p className={css.tableInfo}>Showing data 1 to 8 of 256K entries</p>
    </section>
  );
};
