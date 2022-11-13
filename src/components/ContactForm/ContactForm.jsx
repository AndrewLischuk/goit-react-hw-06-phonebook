import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [userName, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const onChangeInput = e => {
    const { name, value, id } = e.currentTarget;
    setId(id);
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(userName, id, number);
    setName('');
    setNumber('');
    setId('');
  };

  const inputId = nanoid(6);
  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.formLabel} htmlFor={inputId}>
          Name
        </label>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          id={inputId}
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
        <label className={styles.formLabel} htmlFor={inputId}>
          Number
        </label>
        <input
          className={styles.formInput}
          type="tel"
          name="number"
          id={inputId}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
