import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import UseTitle from "../Hooks/UseTitle";
import Loading from "../Loader/Loading";
import BookModal from "./Home/BookModal";

const ProdDetails = () => {
	UseTitle("Product Details");
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});
	const params = useParams();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_server_url}/product-details/${params.id}`
		)
			.then((res) => res.json())
			.then((data) => {
				let d = data[0];
				setProduct(d);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [params.id]);

	return (
		<div className="w-10/12 mx-auto mt-10">
			<section className=" dark:text-gray-800 ">
				<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
					{loading ? (
						<Loading />
					) : (
						<div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow">
							<img
								src={product.imgUrl}
								alt=""
								className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
							/>
							<div className="p-6 space-y-3 lg:col-span-5">
								<h3 className="text-2xl font-semibold sm:text-4xl  group-focus:underline">
									{product.name}
								</h3>
								<span className="text-xs dark:text-gray-400 mb-3">
									{new Date(
										product.createdAt
									).toLocaleString()}
								</span>
								<p className="flex mb-3 ">
									<span className="flex font-semibold">
										Location
									</span>
									: {product.location}
								</p>
								<p className="mb-4">
									<span className="font-semibold ">
										Resale Price
									</span>
									: ${product.resalePrice}
								</p>
								<p className="mb-4">
									<span className=" font-semibold">
										Original Price
									</span>
									: ${product.originalPrice}
								</p>
								<p className="mb-4">
									<span className=" font-semibold">
										Category
									</span>
									: {product.category[0].name}
								</p>
								<p className="mb-4">
									<span className=" font-semibold">
										Condition
									</span>
									: {product.condition}
								</p>
								<div className="flex items-center space-x-4 mt-8">
									<img
										src={product.createdBy[0].imgUrl}
										alt=""
										className="w-10 h-10 rounded-full dark:bg-gray-500"
									/>
									<div className="">
										<h3 className="text-xl font-medium">
											{product.createdBy[0].name}
										</h3>
										{product.createdBy[0].verified ? (
											<p className="flex justify-start items-center  sm:text-base dark:text-gray-800">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5 mr-1 fill-green-600"
												>
													<path
														fillRule="evenodd"
														d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clipRule="evenodd"
													/>
												</svg>
												<span className="text-md text-green-700">
													Verified
												</span>
											</p>
										) : (
											<p className="flex justify-center items-center px-5  sm:text-base dark:text-gray-800">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													className="w-5 h-5 mr-1 fill-red-600"
												>
													<path
														fillRule="evenodd"
														d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
														clipRule="evenodd"
													/>
												</svg>

												<span className="text-md text-red-700">
													Unverified
												</span>
											</p>
										)}
									</div>
								</div>

								{user && (
									<label
										htmlFor="booking-modal"
										className="btn btn-ghost px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-800 "
									>
										BOOK NOW
									</label>
								)}

								<BookModal
									product={product}
									user={user}
								></BookModal>
							</div>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProdDetails;
