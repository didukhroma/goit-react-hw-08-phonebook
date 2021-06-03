import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../../Components/ContactForm';
import ContactList from '../../Components/ContactList';
import Filter from '../../Components/Filter';
import Loader from '../../Components/Loader';
import styles from './ContactsPage.module.css';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }
  render() {
    const { contacts, loading } = this.props;
    return (
      <section className={styles.contactsSection}>
        {loading && <Loader />}
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 && <ContactList />}
          {contacts.length === 0 && (
            <h3 className={styles.title}>Your Phonebook is empty!!!</h3>
          )}
        </div>
      </section>
    );
  }
}

ContactsPage.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.bool,
  fetchAllContacts: PropTypes.func,
};
export default ContactsPage;
