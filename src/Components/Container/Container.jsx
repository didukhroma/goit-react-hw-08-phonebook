import styles from './Container.module.css';
import cx from 'classnames';
const Container = ({ children, styleClass }) => {
  return <div className={cx(styles.container, styleClass)}>{children}</div>;
};

export default Container;
