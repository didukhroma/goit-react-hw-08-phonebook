import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Container styleClass={styles.wrapper}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};

export default AppBar;
