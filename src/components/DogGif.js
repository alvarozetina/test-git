import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogGif = () => {
  const [gifUrl, setGifUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogGif = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setGifUrl(response.data.message);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch dog GIF. Please try again later.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogGif();
  }, []);

  if (isLoading) {
    return <p>Loading dog GIF...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="dog-gif">
      <img src={gifUrl} alt="Random dog" />
    </div>
  );
};

export default DogGif;