import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignupForm from '.npm start/component/SignupForm/SignupForm.jsx';

function App() {
  return (
    <div>
   
    <Routes>
    <Route path="/">
    <Route path="/signup" element={<SignupForm />} />
    </Route>
    </Routes>
   
    </div>
  );
}

export default App;
