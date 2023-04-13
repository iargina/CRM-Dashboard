import css from './Pagination.module.css';
export const Pagination = () => {
  return (
    <div className={css.pagination}>
      <button className={css.button}>«</button>
      <button className={css.buttonActive}>1</button>
      <button className={css.button}>2</button>
      <button className={css.button}>3</button>
      <button className={css.button}>4</button>
      <button className={css.button}>...</button>
      <button className={css.button}>40</button>
      <button className={css.button}>»</button>
    </div>
  );
};
