import React, { useEffect, useState } from "react";
import ItemsDetails from "./ItemsDetails";
const Home = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("Home.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.error());
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold">API BLOG</h2>
      <p className="mb-6">here are three items for your support</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-8 lg:w-[1140px] md:w-[100%]  mx-auto">
        {items.map((item) => (
          <ItemsDetails key={item.id} item={item}></ItemsDetails>
        ))}
      </div>
    </div>
  );
};

export default Home;
