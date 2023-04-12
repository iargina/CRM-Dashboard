import logo from 'assets/icons/setting.svg';
import discount from 'assets/icons/discount.svg';
import product from 'assets/icons/3d.svg';
import key from 'assets/icons/key.svg';
import user from 'assets/icons/user.svg';
import wallet from 'assets/icons/wallet.svg';
import message from 'assets/icons/message.svg';
import manager from 'assets/images/manager.png';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <header className={css.header}>
        <img src={logo} alt="Icon" width="37" height="37" />
        <h1 className={css.title}>
          Dashboard <span className={css.text}>v.01</span>
        </h1>
      </header>

      <ul className={css.list}>
        <li className={css.listItem}>
          <img src={key} className={css.listIcon} alt="Logo" />
          <p className={css.navText}>Dashboard</p>
        </li>
        <li className={css.listItem}>
          <img src={product} className={css.listIcon} alt="Logo" />
          <p className={css.navText}>Product</p>
        </li>
        <li className={css.listItemIsActive}>
          <img src={user} className={css.listIconIsActive} alt="Logo" />
          <p className={css.textIsActive}>Customers</p>
        </li>
        <li className={css.listItem}>
          <img src={wallet} className={css.listIcon} alt="Logo" />
          <p className={css.navText}>Income</p>
        </li>
        <li className={css.listItem}>
          <img src={discount} className={css.listIcon} alt="Logo" />
          <p className={css.navText}>Promote</p>
        </li>
        <li className={css.listItem}>
          <img src={message} className={css.listIcon} alt="Logo" />
          <p className={css.navText}>Help</p>
        </li>
      </ul>
      <section className={css.managerWrap}>
        <img src={manager} className={css.photo} alt="Manager" />
        <article className={css.managerInfo}>
          <h3 className={css.managerName}>Evano</h3>
          <p className={css.managerPosition}>Project Manager</p>
        </article>
      </section>
    </nav>
  );
};
