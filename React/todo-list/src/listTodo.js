import React from 'react';


const ListTodo = (props)=>{
    let listOfItems;
    if(props.list.length > 0){
        listOfItems= props.list.map((item,index) =>  
            <li key={index}>{item}</li>
        )
    }
    else {
        listOfItems =<p>Please add some tasks</p>
    }

    return (
        <ul>
            
           {listOfItems}
            
        </ul>
    )

}
  
export default ListTodo;
