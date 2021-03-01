import React from 'react'

const ContactListItem = ({id,name,number, handleRemove}) => {
    return (
        <li className="contactListItem">
            <span className="contactName">{name}</span> 
            <span className="contactNumber"> {number}</span>
             <button onClick={() =>
               handleRemove(id)}
               className="btn">Delete</button>
      </li>
    )
}

export default ContactListItem
