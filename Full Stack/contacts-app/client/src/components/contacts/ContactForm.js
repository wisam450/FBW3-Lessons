import React , { useState ,useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

const current="ADD";
const clearAll ='CLEAR';
const ContactForm = () => {
    const contactContext  = useContext(ContactContext)
    const [contact , setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    const { name , email , phone ,type } = contact;
    const onChange = e => {
        setContact({ ...contact , [e.target.name]:[e.target.value] })
    }
    const onSubmit= e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
        name:'',
        email:'',
        phone:'',
        type:'personal'

        })
    }

    return (
        <form onSubmit ={onSubmit}>            
            <h2 className="text-dark">Add Contact</h2>
            <input type="text" placeholder="name" name="name" value={name}
            onChange={onChange}
             />

             <input type="email" placeholder="Email" name="email" value={email}
            onChange={onChange}
             />
             <input type="text" placeholder="Mobile Phone" name="phone" value={phone}
            onChange={onChange}
             />
             <h5>Contact Type </h5>
             <input type="radio" name ="type" value="personal" 
             checked={type==='personal'} onChange={onChange} 
              />{' '} Personal
              <input type="radio" name ="type" value="business" 
             checked={type==='business'} onChange={onChange} 
              />{' '}Business
              <div>
                  <input type="submit"  value={current ? 'Update Contact' : 'Add Contact' }
                  className = "btn btn-primary btn-block"

                  />
              </div>
              <div>
                  <button className="btn btn-dark btn-block" onClick = {clearAll}>
                      Clear
                  </button>

              </div>

        </form>
    )
}

export default ContactForm
