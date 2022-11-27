import React from "react";
import UseTitle from "../Hooks/UseTitle";
import BookModal from "./Home/BookModal";

const ProdDetails = () => {
    UseTitle("Product Details");
    return (
        <div className="w-10/12 mx-auto mt-10">
            <section className=" dark:text-gray-800 ">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow">
                        <img
                            src="https://source.unsplash.com/random/480x360"
                            alt=""
                            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                        />
                        <div className="p-6 space-y-3 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl  group-focus:underline">
                                Noster tincidunt
                            </h3>
                            <span className="text-xs dark:text-gray-400 mb-3">
                                February 19, 2021
                            </span>
                            <p className="flex mb-3 ">
                                <span className="flex font-semibold">
                                    {" "}
                                    Location
                                </span>{" "}
                                : Dhaka,Bangladesh
                            </p>
                            <p className="mb-4">
                                {" "}
                                <span className="font-semibold ">
                                    Resale Price
                                </span>{" "}
                                : $40
                            </p>
                            <p className="mb-4">
                                <span className=" font-semibold">
                                    Original Price
                                </span>
                                : $60
                            </p>
                            <p className="mb-4">
                                <span className=" font-semibold">
                                    Year of use
                                </span>
                                : 2 yr
                            </p>
                            <p className="mb-4">
                                <span className=" font-semibold">
                                    Condition
                                </span>
                                : Fair
                            </p>
                            <div className="flex items-center space-x-4 mt-8">
                                <img
                                    src="https://source.unsplash.com/100x100/?portrait"
                                    alt=""
                                    className="w-10 h-10 rounded-full dark:bg-gray-500"
                                />
                                <div className="">
                                    <h3 className="text-sm font-medium">
                                        Leroy Jenkins
                                    </h3>
                                    <time
                                        datetime="2021-02-18"
                                        className="text-sm dark:text-gray-400"
                                    >
                                        Feb 18th 2021
                                    </time>
                                </div>
                            </div>

                            <label
                                htmlFor="booking-modal"
                                className="btn btn-ghost px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-800 "
                            >
                                BOOK NOW
                            </label>
                            <BookModal></BookModal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProdDetails;
