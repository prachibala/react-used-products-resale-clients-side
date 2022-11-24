import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <section className="py-6 sm:py-12  dark:text-gray-800 w-10/12 mx-auto">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">
                            Our Product Categories
                        </h2>
                        <p className="font-serif text-sm dark:text-gray-400">
                            Our all main product categories are here..And make
                            your choice..!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => (
                            <Category category={category}></Category>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;
