import React, { useState } from 'react';

const ItemList = () => {
  const items = [
    'Rohan',
    'Amit',
  ];

  const [limit] = useState(3);

  const croppedItems = items.slice(0, limit);
  return (
    <div>
      <h3>Students</h3>
      <ul>
        {croppedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
