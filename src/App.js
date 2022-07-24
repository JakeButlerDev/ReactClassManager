import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import AppRouter from './components/Routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
