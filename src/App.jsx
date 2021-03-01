import React, { Component } from "react";
import { uuid } from "uuidv4";
// import "node_modules/modern-normalize/modern-normalize.css";
// import PropTypes from "prop-types";

export default class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  
  filter: '',
  name: ' ',/**label */
  number: ''
}

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });   
  }

  
  addContact = (name) => {
    const contact = {
      id: uuid(),
      name,
      number: "010",
      }
    this.setState((prevState)=>( {
      contacts: [...prevState.contacts, contact],
      name: '',
    }));
  }

  
    handleSubmit = (event) => {
      event.preventDefault();
      const {name } = this.state;
      this.addContact(name);
    }
  
  handleRemove = (id) => {
    this.setState((prevState) => {
      const contacts = prevState.contacts.filter((item) => item.id !== id);
      return {
        contacts,
      }
    })
  };
  

    getFilteredContacts(contacts, filterStr){
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterStr.toLowerCase())
    );
  }

  render() {
    const { contacts, name , filter} = this.state;
    
    const visibleContacts = this.getFilteredContacts(contacts,filter)
    return <div className="container" >
      <h2 className="title">Phonebook</h2>
      
        <form onSubmit={this.handleSubmit} className="contactForm">
          <input name="name"
          type="text"
          className="contactInput"
          placeholder="insert new contact"
          onChange={this.handleChange}
          value={name}
        />
          
          <button type="submit" className="btn">
            Add contact
        </button>
        </form>
            
      <section className="contacts">
        <h2 className="title">Contacts</h2>
          <input name="filter"
          type="text"
          className="contactInput"
          placeholder="search contact"
          onChange={this.handleChange}
          value={filter}
           />
      
        <ul className="contactsList">
         {visibleContacts.map(({id=uuid(), name}) => (
      <li className="contactListItem" key={id}>{name}
             <button onClick={() =>
               this.handleRemove(id)}
               className="btn">Delete</button>
      </li>
  ))}
        </ul>
       </section>
       
    </div>;
  }
}

{/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}