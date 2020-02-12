import React , { Fragment , useContext} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition , TransitionGroup   } from 'react-transition-group';
 

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts,filtered } = contactContext;
    if(contacts.length === 0 ){
      return <h4> Please add a contact </h4>
    }

    return (
        <Fragment>
          <TransitionGroup>
              { filtered !== null ? filtered.map( item => (
                 <CSSTransition  key={item.id} classNames="item" timeout={1000} >
                   <ContactItem contact ={item} />
                 </CSSTransition>
             )) 
             
             : contacts.map( item => (
                 <CSSTransition  key={item.id} classNames="item" timeout={1000} >
                   <ContactItem contact ={item} />
                 </CSSTransition>
             ))
                
              }

          
         </TransitionGroup>  
        </Fragment>
    )
}


export default Contacts