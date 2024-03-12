import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contactsData, handleDelete }) {
  return (
    <div className={css.listBox}>
      <ul className={css.listContact}>
        {contactsData.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
