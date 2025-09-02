import React from 'react';
// Use the direct relative path for this test
import Card from '../global/Card';

const WhatYouGet = () => {
  return (
    <section>
      <h1>Testing Card Import</h1>
      <Card>
        <p>If you can see this text inside a red border, the import is working!</p>
      </Card>
    </section>
  );
};

export default WhatYouGet;