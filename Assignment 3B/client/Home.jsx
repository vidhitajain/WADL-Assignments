import React, { useState } from 'react';

const Home = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your home page.</p>
    </div>
  );
};

export default Home;
