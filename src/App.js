import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/MyHome';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="portFolio">
    <div className='a1'>1 </div>
    <div className='container'>
    <Home></Home>
    </div>
    <div className='a3'>3</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
