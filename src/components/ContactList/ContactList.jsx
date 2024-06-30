import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <div className={css.group}>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </div>
  );
}
