import Container from '../Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
const AppBar = () => {
  return (
    <header className={styles.header}>
      <Container styleClass={styles.wrapper}>
        <Navigation />
        <UserMenu />
      </Container>
    </header>
  );
};

export default AppBar;
