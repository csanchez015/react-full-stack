import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { io } from 'socket.io-client';
import Main from './views/Main';
import NewAuthor from './components/AuthorForm';
import UpdateAuthor from './views/EditAuthor';
import React, { useState, useEffect } from 'react';

function App() {
  const [socket] = useState(() => io(':8000'));
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);
  return (
    <>
      <div className="container">

        <Routes>
          <Route path='/' element={<Navigate to='/authors' replace />} />
          <Route path='/authors' element={<Main />} />
          <Route path='/authors/:_id/update' element={<UpdateAuthor />} />
          <Route path='/authors/create' element={<NewAuthor />} />
        </Routes>
      </div>

    </>

  );
}

export default App;
