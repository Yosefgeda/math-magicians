import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const api = 'https://api.api-ninjas.com/v1/quotes?category=happiness&limit=1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api, {
          headers: {
            'X-Api-Key': 'EEEFydr/yL2WbQvvjfFQAg==eXxCv2xI9AEZwYIh',
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setData(result[0].quote);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error.message || 'Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="quotes-container">
      {isLoading && <p className="quotes-loading">Loading Quote...</p>}
      {!isLoading && error && <p className="quotes-error">{error}</p>}
      {!isLoading && data && <p className="quotes">{data}</p>}
    </div>
  );
};
// EEEFydr/yL2WbQvvjfFQAg==eXxCv2xI9AEZwYIh
export default Quotes;
