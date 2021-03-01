import React from 'react';
import styles from './ContactListItem.module.css';


const ContactListItem = ({id,name,number, handleRemove}) => {
    return (
        <li className={styles.contactListItem}>
            <span className="contactName">{name}</span> 
            <span className="contactNumber"> {number}</span>
             <button onClick={() =>
               handleRemove(id)}
               className={styles.btnRemove}>Delete</button>
      </li>
    )
}

export default ContactListItem;
