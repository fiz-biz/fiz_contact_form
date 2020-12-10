import React, { useState } from 'react';
import Axios from '../Utils/axios_call'
import * as yup from 'yup';

function ContactForm() {

    const [newMessage, setNewMessage] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    })

    let schema = yup.object().shape({
        email: yup.string().email().required()
    });

    const change_handler = (e) => {
        e.preventDefault();
        setNewMessage({
            ...newMessage,
            [e.target.name]: e.target.value
        })
    }

    const submit_handler = (e) => {
        e.preventDefault();
        schema.isValid(newMessage);
        Axios(newMessage).then(r => console.log(r))
        alert('Thank You for you submission')
        setNewMessage({
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div className='contact_container'>
            <h1><strong>Contact Us Form</strong></h1>
            <form onSubmit={submit_handler} className='contact_form'>
                <label htmlFor='first_name'>First Name</label>
                <input type='text'
                       name='first_name'
                       id='first_name'
                       value={newMessage.first_name}
                       onChange={change_handler}>
                </input>

                <label htmlFor='last_name'>Last Name</label>
                <input type='text'
                       name='last_name'
                       id='last_name'
                       value={newMessage.last_name}
                       onChange={change_handler}>
                </input>

                <label htmlFor='email'>Email</label>
                <input type='email'
                       name='email'
                       id='email'
                       value={newMessage.email}
                       onChange={change_handler}>
                </input>

                <label htmlFor='message'>Message</label>
                <textarea name='message'
                          id='message'
                          value={newMessage.message}
                          onChange={change_handler}>
                </textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;