
import React from "react";
import Cards from "./CardSection";

const CaredDetail = () => {
  const data = [
    { id: 1, name: "Maskara", price: 10.99, image: "https://sunglass-react-pj.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproducts%2Fimages%2Fbeauty%2FEssence%2520Mascara%2520Lash%2520Princess%2F1.png&w=384&q=75" },
    { id: 2, name: "Nike Black", price: 7.99, image: "https://sunglass-react-pj.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproducts%2Fimages%2Fbeauty%2FPowder%2520Canister%2F1.png&w=384&q=75" },
    { id: 3, name: "Lipstick 2", price: 8.99, image: "https://sunglass-react-pj.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproducts%2Fimages%2Fbeauty%2FRed%2520Lipstick%2F1.png&w=384&q=75" },
    { id: 4, name: "Perfume", price: 15.99, image: "https://sunglass-react-pj.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproducts%2Fimages%2Ffragrances%2FChanel%2520Coco%2520Noir%2520Eau%2520De%2F1.png&w=384&q=75" },
  ];

  return (
    <div>
      {data.map(item => (
        <Cards
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CaredDetail;
