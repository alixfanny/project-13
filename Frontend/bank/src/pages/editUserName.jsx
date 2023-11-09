import React, { useState } from 'react';
import EditUserNameForm from '../components/EditUserNameForm';
import TransactionHistory from '../components/TransactionHistory';

function EditUserName(){

    const [userName, setUserName] = useState("");

    const handleUserNameChange = (newName) => {
      setUserName(newName);
    };
  
    const cancelEdit = () => {
    };
  
    return(
       <div>
        <EditUserNameForm name={userName} 
        onNameChange={handleUserNameChange} 
        onCancel={cancelEdit}/>
        <TransactionHistory/>
       </div>
    )
}

export default EditUserName