import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import Filter from './Filter';

const mapDispatchToProps = dispatch => ({
  onChangeFilter: ({ target: { value } }) => dispatch(changeFilter(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
