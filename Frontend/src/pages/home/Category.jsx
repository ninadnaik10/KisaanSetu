import React from "react";
import CategoryCard from "../../components/home/CategoryCard";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link to={"/category/rice"}>
        <CategoryCard
          title="Urea"
          image="https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/UREA_0.png"
        />
      </Link>
      <Link to={"/category/pesticides"}>
        <CategoryCard
          title="Pesticides"
          image="https://5.imimg.com/data5/SELLER/Default/2022/11/PI/EC/FY/7154801/organic-insecticide-500x500.jpg"
        />
      </Link>
      <Link to={"/category/nuts"}>
        <CategoryCard
          title="Equipments"
          image="https://cdn1.vectorstock.com/i/1000x1000/75/55/farming-equipment-icon-set-cartoon-style-vector-23437555.jpg"
        />
      </Link>
      <Link to={"/category/sugar"}>
        <CategoryCard
          title="Seeds"
          image="https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/h/z/6/2-legume-fodder-seeds-each-in-250-gram-pack-of-2-hedge-lucerne-original-imagmhg6g9atqyex.jpeg?q=20&crop=false"
        />
      </Link>
      {/* <Link to={"/category/spices"}>
        <CategoryCard
          title="Spices"
          image="https://source.unsplash.com/uaHShoIDGeo"
        />
      </Link>
      <Link to={"/category/fruits"}>
        <CategoryCard
          title="Fruits"
          image="https://source.unsplash.com/M_xIaxQE3Ms"
        />
      </Link>
      <Link to={"/category/vegetables"}>
        <CategoryCard
          title="Vegetables"
          image="https://source.unsplash.com/5aJVJvJ9rG8"
        />
      </Link>
      <Link to={"/category/pulses"}>
        <CategoryCard
          title="Pulses"
          image="https://source.unsplash.com/TUf3H3vRlNU"
        />
      </Link> */}
    </div>
  );
}

export default Category;
