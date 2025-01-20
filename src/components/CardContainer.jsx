import React from 'react';
import Card from './Card';

const CardContainer = () => {
  const items = [
    { id: 1, image: 'https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Amazon_-_Tata_Salt,_1kg___CatchMyCoupon.jpg', name: 'Tata Salt', price: 29.99 },
    { id: 2, image: 'https://alphasilver.productsalphawizz.com/uploads/media/2024/89173594-c8d8-4062-a8d0-cec1c9e9b88d.jpg', name: 'Atta ', price: 19.99 },
    { id: 3, image: 'https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Chakra_Gold_976KB.jpg', name: 'Chai', price: 39.99 },
    { id: 4, image: 'https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Tide_Plus_Double_Power_Detergent_Washing_Powder_Jasmine_Rose_7kg_+_3kg_FREE.jpg', name: 'Tide Surf', price: 49.99 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {items.map(item => (
        <Card key={item.id} image={item.image} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default CardContainer;
