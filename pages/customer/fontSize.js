import React, { useEffect, useState } from 'react'

import DisplayText from './displayText';



function FontSize(props) {

  const [inputValue, setInputValue] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an asynchronous operation with a promise
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.5;
          if (success) {
            resolve('Data successfully fetched!');
          } else {
            reject('Error fetching data.');
          }
        }, 1000);
      });
    };
    // Using the promise
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const { handleFontSize } = props

  const handleChange = (event) => {
    setInputValue(event.target.value);

  }

  const isSubmitting = () => {
    handleFontSize(inputValue)
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <input
        name="fontSize"
        placeholder='Enter  the font size '
        onChange={handleChange} />
      <button variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Please wait...' : 'Save'}
      </button>{" "}


      {loading && <p>Loading...</p>}
      {data && <p>Data: {data}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  )
}
export default FontSize
