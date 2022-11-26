import React from "react";

const BookModal = () => {
    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <section className="p-6 dark:text-gray-800">
                        <form
                            novalidate=""
                            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-base-300 ng-untouched ng-pristine ng-valid"
                        >
                            <h2 className="w-full text-3xl font-bold leading-tight">
                                Book Now
                            </h2>
                            <div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    required=""
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400  dark:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    required=""
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400 dark:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    id="productName"
                                    type="text"
                                    placeholder="Product Name"
                                    required=""
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400  dark:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    id="price"
                                    type="number"
                                    placeholder="Product Price"
                                    required=""
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400  dark:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    id="contact"
                                    type="number"
                                    placeholder="Contact Number"
                                    required
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400  dark:text-gray-600"
                                />
                            </div>
                            <div>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Location"
                                    required
                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-400  dark:text-gray-600"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-blue-400 focus:ring-sky-400 hover:ring-sky-400 dark:text-gray-900"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BookModal;
