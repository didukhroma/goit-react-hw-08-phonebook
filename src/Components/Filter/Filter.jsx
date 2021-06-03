import PropTypes from 'prop-types';
import Input from '../Input';

const Filter = ({ onChangeFilter }) => {
  return (
    <Input type="text" name="find contacts by name" onChange={onChangeFilter} />
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
