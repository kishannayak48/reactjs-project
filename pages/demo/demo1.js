import React, { useState } from 'react';

const MyForm = () => {
  // Define state variables for form fields and submitted data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the submitted data in the state
    const data = { name, email };
    setSubmittedData(data);

    // Reset form fields after submission
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default MyForm;
