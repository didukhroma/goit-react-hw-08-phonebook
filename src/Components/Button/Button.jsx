import PropTypes from 'prop-types';
import styles from './Button.module.css';
const Button = ({ type = 'button', text = 'Button', onDeletedById, id }) => {
  const handleClick = () => {
    if (!id) return;
    onDeletedById(id);
  };

  return (
    <button type={type} onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  onDeletedById: PropTypes.func,
};

export default Button;