import React , { useState ,useContext , useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';


const ContactForm = () => {
    const contactContext  = useContext(ContactContext)
    const addContact = contactContext.addContact;
    const current = contactContext.current;
    const clearCurrent = contactContext.clearCurrent;
    const updateContact = contactContext.updateContact;

    useEffect( ()=> {
        if(current!== null){
            setContact(current);
        }
        else {
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
        
            })
            
        }
    } , [contactContext , current] )
 

    const [contact , setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    const { name , email , phone ,type } = contact;
    const onChange = e => {
             
       setContact({ ...contact , [e.target.name]:e.target.value })
      
    }
    const onSubmit= e => {        
        e.preventDefault();
        if(current=== null){
            addContact(contact);
        }
        else {
            updateContact(contact)

        }
        clearAll();       
       
       
    }
    const clearAll =() =>{
        clearCurrent();

    }

    return (
        <form onSubmit ={onSubmit}>            
            <h2 className="text-dark">{current ? 'Edit contact' : 'Add contact'  }</h2>
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
             checked={type === 'personal'}
            onChange={onChange} 
              />{' '} Personal
              <input type="radio" name ="type" value="business" 
              checked={type === 'business'} onChange={onChange} 
              />{' '}Business
              <div>
                  <input type="submit"  value= {current ? 'Update contact' : 'Add contact'  }
                  className = "btn btn-primary btn-block"

                  />
              </div>
              { current &&
              <div>                  
                  <button className="btn btn-dark btn-block" onClick = {clearAll} >
                      Clear
                  </button>

              </div>
              }

        </form>
    )
}

export default ContactForm
