import React, { useEffect, useState } from "react";
import UseTitle from "../Hooks/UseTitle";
import { Link } from "react-router-dom";
import Loading from "../Loader/Loading";

const AllProducts = () => {
	UseTitle("All Products");
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_server_url}/products`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div className="w-10/12 mx-auto ">
				<section className="py-6 sm:py-12  dark:text-gray-800">
					<div className="container p-6 mx-auto space-y-8">
						{products.length < 1 ? (
							<div className="space-y-2 text-center">
								<h2 className="text-3xl font-semibold">
									Could Not Found Any Product
								</h2>
							</div>
						) : (
							<>
								<div className="space-y-2 text-center">
									<h2 className="text-3xl font-semibold">
										All Products
									</h2>
								</div>
								<div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
									{loading ? (
										<Loading />
									) : (
										products.map((product) => {
											return (
												<article
													className="flex flex-col shadow-lg rounded-md"
													key={product._id}
												>
													<img
														alt=""
														className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
														src={product.imgUrl}
													/>

													<div className="flex flex-col flex-1 p-6">
														<p className="text-xs tracking-wider uppercase dark:text-sky-400">
															{
																product
																	.category[0]
																	.name
															}
														</p>
														<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
															{product.name}
														</h3>
														<p className="flex-1 py-2 text-md text-secondary leading-snug">
															Price: $
															{
																product.resalePrice
															}
														</p>
														<Link
															to={`/product-details/${product._id}`}
															className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-md bg-blue-400 text-gray-800"
														>
															View Details
														</Link>
														<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
															<span>
																{
																	product.location
																}
															</span>
															<span>
																{
																	product.createdAt.split(
																		"T"
																	)[0]
																}
															</span>
														</div>
													</div>
												</article>
											);
										})
									)}
								</div>
							</>
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default AllProducts;
