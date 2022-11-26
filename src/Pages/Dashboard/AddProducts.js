import React from "react";
import { useForm } from "react-hook-form";
import UseTitle from "../../Hooks/UseTitle";
import pic from "../../Images/addCart.svg";

const AddProducts = () => {
    UseTitle("Add Product");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 dark:text-gray-800 mt-6">
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
                            alt="Add Product"
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label for="name" className="text-sm">
                            Product Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Product name.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="resalePrice" className="text-sm">
                            Resale Price
                        </label>
                        <input
                            id="resalePrice"
                            type="number"
                            placeholder="Resale price.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("resalePrice", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="originalPrice" className="text-sm">
                            Original Price
                        </label>
                        <input
                            id="originalPrice"
                            type="number"
                            placeholder="Original price.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("originalPrice", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="condition" className="text-sm">
                            Product condition
                        </label>
                        <select
                            className="w-full p-3 rounded dark:bg-white"
                            id="condition"
                            {...register("condition", { required: true })}
                        >
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>

                    <div>
                        <label for="contact" className="text-sm">
                            Mobile Number
                        </label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Mobile Number.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("sellerContact", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="contact" className="text-sm">
                            Mobile Number
                        </label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Mobile Number.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("sellerContact", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="location" className="text-sm">
                            Location
                        </label>
                        <input
                            id="location"
                            type="text"
                            placeholder="Location.."
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("location", { required: true })}
                        />
                    </div>

                    <div>
                        <label for="category" className="text-sm">
                            Product category
                        </label>
                        <select
                            className="w-full p-3 rounded dark:bg-white"
                            id="category"
                            {...register("category", { required: true })}
                        >
                            <option value="Home Furniture">
                                Home Furniture
                            </option>
                        </select>
                    </div>

                    <div>
                        <label for="description" className="text-sm">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="product description..."
                            rows="3"
                            className="w-full p-3 rounded dark:bg-white"
                            {...register("description", { required: true })}
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
