import React , { Fragment , useContext} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition , TransitionGroup   } from 'react-transition-group';
 

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;

    return (
        <Fragment>
          <TransitionGroup>
              
            {
                contacts.map( item => (
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