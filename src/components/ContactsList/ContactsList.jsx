import React from 'react'
import { uuid } from "uuidv4";
import ContactListItem from '../ContactListItem/ContactListItem';


const ContactsList = ({ visibleContacts, handleRemove }) => {
    
    if (!visibleContacts.length) {
        return <p>Phonebook is empty</p>
    }
    return (
       <ul className="contactsList">
         {visibleContacts.map(({id=uuid(), name, number}) => (
             <ContactListItem
                 key={id}
                 id={id}
                 name={name}
                 number={number}
                 handleRemove={handleRemove} />
  ))}
        </ul>
    )
}

export default ContactsList;
