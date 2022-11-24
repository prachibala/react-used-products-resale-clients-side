import React from "react";

const Products = () => {
    return (
        <div className="w-10/12 mx-auto ">
            <section className="py-6 sm:py-12  dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">
                            Partem reprimique an pro
                        </h2>
                        <p className="font-serif text-sm dark:text-gray-400">
                            Qualisque erroribus usu at, duo te agam soluta
                            mucius.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col shadow-lg rounded-md">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                aria-label="Te nulla oportere reprimique his dolorum"
                            >
                                <img
                                    alt=""
                                    className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
                                    src="https://source.unsplash.com/200x200/?fashion?1"
                                />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Te nulla oportere reprimique his dolorum"
                                ></a>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs tracking-wider uppercase hover:underline dark:text-sky-400 "
                                >
                                    Convenire
                                </a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                                    Te nulla oportere reprimique his dolorum
                                </h3>
                                <p className="flex-1 py-2 text-md text-secondary leading-snug">
                                    Price: $567
                                </p>
                                <button className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-md bg-blue-400 text-gray-800">
                                    View Details
                                </button>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
