import React, { Component } from 'react';
import styles from './ContactForm.module.css'; 


class ContactForm extends Component {

 

    state = {
        name: "",  
        number: "",
    }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });   
    }
    
      
    handleSubmit = (event) => {
      event.preventDefault();
        const { name,number } = this.state;
        const { addContact } = this.props;
        addContact(name,number);
        this.setState({name: '', number:''})
    }

    render() {
        const { name, number } = this.state; 
        return (
            <form onSubmit={this.handleSubmit} className={styles.contactForm}>
                <label htmlFor="name" className={styles.label}>
                    Name
                <input name="name"
                    type="text"
                     className={styles.contactInput}
                    placeholder="insert name"
                    onChange={this.handleChange}
                    value={name}
                />
                </label>  
                <label htmlFor="number" className={styles.label}>
                    Number
             <input name="number"
                type="text"
                className={styles.contactInput}
                placeholder="insert number"
                onChange={this.handleChange}
                value={number}
                />
                </label>
          
         <button type="submit" className={styles.btn}>
                    Add contact
        </button>
            </form>
        )
    }
}



export default ContactForm;
