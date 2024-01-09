import './App.css';
import { useState } from 'react';

function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`${firstname} ${lastname}`);
    setFirstName('');
    setLastName('');
  };

  const reset = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setMessage('');
  };

  return (
    <div className="form-yay">
      <form onSubmit={handleSubmit} className="form">
        <h1>Enter Your Name:</h1>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstname}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            onChange={(event) => setLastName(event.target.value)}
            value={lastname}
          />
        </div>

        <div className="button-group">
          <button type="submit">Display Name</button>
          <button type="button" onClick={reset}>
            Clear Name
          </button>
        </div>

        <div className="result">
          <label>
            Name: {message}
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
