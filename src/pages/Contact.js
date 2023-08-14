import React from 'react'
import { Form, redirect } from 'react-router-dom'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <Form className={classes.form} method='post'>
      <div>
        <label htmlFor="name">Name</label>
        <input type='text' id='name' name='name' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' />
      </div>
      <div>
        <label htmlFor='description'>Text Message</label>
        <textarea rows="4" cols="50" name='description' /> 
      </div>
      <div className={classes.submit}>
        <button>Submit</button>
      </div>
    </Form>
  )
}

export default Contact

export const formAction = async ({request}) => {
  // Here I would do something with data what I get from form inpiuts
  
  // const data = await request.formData()
  // const contactData = data.get('description')
  alert('Thank you for contacting as')
  return redirect('/products')
}