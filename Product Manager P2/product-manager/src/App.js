import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import OneProduct from './components/OneProduct'
import UpdateProduct from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/products" replace/>}/>
        <Route path='/products' element={<Main/>}/>
        <Route path='/:_id' element={<OneProduct/>}/>
        <Route path='/products/:_id/edit' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
