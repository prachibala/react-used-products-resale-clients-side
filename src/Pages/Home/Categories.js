import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
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
                        <article className="flex flex-col bg-blue-100 rounded-full ">
                            <Link className="flex flex-col flex-1 p-4">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    Te nulla oportere
                                </h3>
                            </Link>
                        </article>
                        <article className="flex flex-col bg-blue-100 rounded-full text-center">
                            <Link className="flex flex-col flex-1 p-4">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    Te nulla oportere
                                </h3>
                            </Link>
                        </article>
                        <article className="flex flex-col bg-blue-100 rounded-full text-center">
                            <Link className="flex flex-col flex-1 p-4">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    Te nulla oportere
                                </h3>
                            </Link>
                        </article>
                        <article className="flex flex-col bg-blue-100 rounded-full text-center">
                            <Link className="flex flex-col flex-1 p-4">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    Te nulla oportere
                                </h3>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;
