import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Added Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page1 = () => {
  const categories = [
    {
      href: "https://alphasilver.productsalphawizz.com/products/category/clothing-1",
      imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/download_(2)1.jpg",
      label: "Clothing",
    },
    {
      href: "https://alphasilver.productsalphawizz.com/products/category/electronics-1",
      imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg",
      label: "Electronics",
    },
    {
        href: "https://alphasilver.productsalphawizz.com/products/category/clothing-1",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/download_(2)1.jpg",
        label: "Clothing",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/electronics-1",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg",
        label: "Electronics",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/home-kitchen",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Home_Kitchen.jpeg",
        label: "Home & Kitchen",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/beauty-personal-care-1",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Beauty_Personal_Care_.jpg",
        label: "Beauty & Personal Care",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/toys-games",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/_Toys_Games.jpeg",
        label: "Toys & Games",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/grocery-gourmet-food-1",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg",
        label: "Grocery & Gourmet Food",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/books",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Books.jpeg",
        label: "Books",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/fitness",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Fitness.jpeg",
        label: "Fitness",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/health-personal-care",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Health_Personal_Care_.jpeg",
        label: "Health & Personal Care",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/stationery",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Stationery_.jpeg",
        label: "Stationery",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/mobiles",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/mobiles2.jpg",
        label: "Mobiles",
      },
      {
        href: "https://alphasilver.productsalphawizz.com/products/category/women-jewellery",
        imgSrc: "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Adorable_Fantastic_Knitting_Gold_Diamond_Nacklace_Designs_Jewellery_Sets_For_Women_Wedding_Ideas.jpg",
        label: "Women Jewellery",
      },
    
  ];

  return (
    <div className="w-full py-8">
      <h1 className="text-center text-2xl font-semibold mb-4">Category</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }} 
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <a
                href={category.href}
                className="block w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-2"
                style={{ borderColor: "#49A6A2" }} 
              >
                <img
                  src={category.imgSrc}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
              </a>
              <span className="mt-2 text-sm md:text-base text-center">{category.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page1;
