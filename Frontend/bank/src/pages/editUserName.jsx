import React from 'react';
import EditUserNameForm from '../components/EditUserNameForm';
import TransactionHistory from '../components/TransactionHistory';

function EditUserName(){
  
    return(
       <div>
        <EditUserNameForm/>
        <TransactionHistory/>
       </div>
    )
}

export default EditUserName