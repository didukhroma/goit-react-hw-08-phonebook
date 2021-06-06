import { NavLink } from 'react-router-dom';
// import cx from 'classnames';
import { navPath } from '../../Routes/routes';
import styles from './Navigation.module.css';
const { mainPage, contactsPage } = navPath;
const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact={mainPage.exact}
        to={mainPage.path}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        {mainPage.text}
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact={contactsPage.exact}
          to={contactsPage.path}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          {contactsPage.text}
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
