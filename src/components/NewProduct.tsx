import React from "react";
import ProductCard from "./ProductCard"; // Import ProductCard component

// Sample product data
const productsData = [
  {
    img: "/product1.jpg",
    title: "Stylish Jacket",
    desc: "Warm and comfortable",
    rating: 4,
    price: "$49.99",
  },
  {
    img: "/product2.jpg",
    title: "Running Shoes",
    desc: "Perfect for athletes",
    rating: 5,
    price: "$69.99",
  },
  {
    img: "/product3.jpg",
    title: "Elegant Watch",
    desc: "Timeless design",
    rating: 3,
    price: "$89.99",
  },
  {
    img: "/product4.jpg",
    title: "Leather Bag",
    desc: "Durable and stylish",
    rating: 4,
    price: "$99.99",
  },
];

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
