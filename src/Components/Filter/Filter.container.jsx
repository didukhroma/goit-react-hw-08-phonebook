import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: ({ target: { value } }) => dispatch(changeFilter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
