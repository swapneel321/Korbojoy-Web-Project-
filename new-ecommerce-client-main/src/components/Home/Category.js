import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory } from "../../redux/actions/categoryAction";
import { setProducts } from "../../redux/actions/productAction";

const Category = () => {
  // const { data: categories = [], refetch } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const res = await fetch("https://korbojoy-server.onrender.com/api/category");
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  const category = useSelector((state) => state.allCategory.category);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://korbojoy-server.onrender.com/api/category")
      .catch((err) => {});
    dispatch(setCategory(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="popular-categories">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row align-items-center g-lg-4 g-1">
                <div className="col-lg-6 col-9">
                  <h2 className="title">Explore Popular Categories</h2>
                </div>
                <div className="col-lg-6 col-3">
                  <div className="text-end">
                    <a href="shop.html" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="custom-row">
                {category.map((category) => (
                  <div className="custom-col" key={category._id}>
                    <Link to={`/category/${category._id}`}>
                      <div className="category-card">
                        <div className="part-img">
                          <img src={category.img} alt="Image" />
                        </div>
                        <div className="part-txt">
                          <h3>{category.name}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
