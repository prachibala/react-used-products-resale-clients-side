import React from "react";
import pic from "../../Images/addCart.svg";
const AddProducts = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 dark:text-gray-800 mt-6">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                            Add Product!
                        </h2>
                        <div className="dark:text-gray-400">
                            Vivamus in nisl metus? Phasellus.
                        </div>
                        <img
                            src={pic}
                            alt="Add Product Image"
                            className="p-6 h-52 md:h-64"
                        />
                    </div>
                    <img
                        src="assets/svg/doodle.svg"
                        alt=""
                        className="p-6 h-52 md:h-64"
                    />
                </div>
                <form
                    novalidate=""
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div>
                        <label for="name" className="text-sm">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder=""
                            className="w-full p-3 rounded dark:bg-white"
                        />
                    </div>
                    <div>
                        <label for="email" className="text-sm">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 rounded dark:bg-white"
                        />
                    </div>
                    <div>
                        <label for="message" className="text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="3"
                            className="w-full p-3 rounded dark:bg-white"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-400 dark:text-white"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
