import React, { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or sign-up logic here
  };

  return (
    <div className="App">
      <div className="form-container">
        {isLogin ? (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
