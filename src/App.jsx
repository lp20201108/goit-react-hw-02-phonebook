import React, { Component } from "react";
import { uuid } from "uuidv4";
import ContactForm from './components/ContactForm';
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter/Filter";
// import "node_modules/modern-normalize/modern-normalize.css";
// import PropTypes from "prop-types";


export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
      filter: '',
  }
  
  addContact = (name, number) => {

       const contact = {
      id: uuid(), 
      name,
      number,
    }
    
    const oldContactName = this.state.contacts.find(contact =>
    contact.name === name);
    
    const oldContactNumber= this.state.contacts.find(contact =>contact.number === number);
        
    if (oldContactName) {
      alert(`This contact NAME already exists as Name:${oldContactName.name} Tel:${oldContactName.number}` );
      return;
    } else if(oldContactNumber) {
      alert(`This contact NUMBER already exists as  Tel:${oldContactNumber.number} Name:${oldContactNumber.name}` );
      return;
    }
    else if (!name.length) {
      alert('Please, enter the contact name');
     
    } else if (!number.length) {
       alert('Please, enter the contact number');
    }
      
    else {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  }
  }
   
  handleRemove = (id) => {
    this.setState((prevState) => {
      const contacts = prevState.contacts.filter((item) => item.id !== id);
      return {
        contacts,
      }
    })
  };
  
    handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });   
    }

    getFilteredContacts(contacts, filterStr){
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterStr.toLowerCase())
    );
  }

  
  render() {
    const { contacts, filter} = this.state;
    const visibleContacts = this.getFilteredContacts(contacts, filter)
  
    return (
      <>
      <div className="container" >
          <h1 className="titlePhonebook">Phonebook</h1>
       <ContactForm addContact={ this.addContact}/>
      <h2 className="title">Contacts</h2>
      <Filter filter={this.state.filter} handleChange={this.handleChange}  />
      <ContactsList visibleContacts={visibleContacts} handleRemove={ this.handleRemove}/>    
        </div>
     </>
    )
  }
}
