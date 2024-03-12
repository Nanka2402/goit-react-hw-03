import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  handleDelete,
}) {
  return (
    <div className={css.contactbox}>
      <div>
        <p className={css.user}>
          <FaUser /> {name}
        </p>
        <span className={css.phone}>
          <FaPhone /> {number}
        </span>
      </div>
      <button
        type="button"
        className={css.delite}
        onClick={() => handleDelete(id)}
      >
        delite
      </button>
    </div>
  );
}
