import Button from '../Button';
import styles from './UserMenu.module.css';
const UserMenu = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Hello user email !</p>
      <Button text={'LogOut'} />
    </div>
  );
};

export default UserMenu;
