import { useState, useEffect } from 'react';
import data from 'data/data.json';
import css from './Product.module.css';
import { Table } from 'components/Table/Table';

export const Product = () => {
  const [customersToShow, setCustomer] = useState(data);
  const [filterData, setFilter] = useState('');

  useEffect(() => {
    const filteredData = data.filter(customer => {
      const { name, company, phone, email, country } = customer;
      const searchTerm = filterData.toLowerCase().trim();
      return (
        name.toLowerCase().includes(searchTerm) ||
        company.toLowerCase().includes(searchTerm) ||
        phone.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm) ||
        country.toLowerCase().includes(searchTerm)
      );
    });
    setCustomer(filteredData);
  }, [filterData]);

  return (
    <main className={css.main}>
      <h2 className={css.mainTitle}>Hello Evano 👋🏼,</h2>
      <article className={css.mainArticle}>
        <section className={css.tableHeader}>
          <div className={css.textWrap}>
            <h3 className={css.tableHeaderTitle}>All Customers</h3>
            <p className={css.tableHeaderText}>Active Members</p>
          </div>

          <input
            input
            type="text"
            id="search"
            placeholder="Search"
            className={css.input}
            value={filterData}
            onChange={e => setFilter(e.target.value)}
          />
          <span className={css.span}></span>
        </section>
        <Table customers={customersToShow} />
      </article>
    </main>
  );
};
