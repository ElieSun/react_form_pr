import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignupForm from './component/SignupForm/SignupForm.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/signup">
    <SignupForm/>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
