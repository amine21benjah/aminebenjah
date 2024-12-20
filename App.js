import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './page1';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage></FirstPage>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
