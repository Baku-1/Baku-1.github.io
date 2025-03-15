import React from 'react';
import UserForm from '../components/UserForm';
import '../assets/styles/UserPage.css'; // Ensure this path is correct

const UserPage = () => {
  return (
    <div>
      <h1>Register User</h1>
      <UserForm />
      <div className="button-group">
        <button className="button" onClick={() => console.log('Sign In')}>Sign In</button>
        <button className="button" onClick={() => console.log('Create Trade')}>Create Trade</button>
        <button className="button" onClick={() => window.location.href = '/trades'}>View Trades</button>
        <button className="button" onClick={() => console.log('Interact with Trades')}>Interact with Trades</button>
      </div>
    </div>
  );
};

export default UserPage;
