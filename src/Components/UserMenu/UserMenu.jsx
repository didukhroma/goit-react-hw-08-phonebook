import Button from '../Button';
import styles from './UserMenu.module.css';
const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome {userEmail} !</p>
      <Button text={'LogOut'} cdOnClick={onLogout} />
    </div>
  );
};

export default UserMenu;
