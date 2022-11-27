import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loader/Loading";

const Products = () => {
	const [loading, setLoading] = useState(false);
	const [recentProducts, setRecentProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_server_url}/recent-products`)
			.then((res) => res.json())
			.then((data) => {
				setRecentProducts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
					{loading ? (
						<Loading />
					) : (
						<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
							{recentProducts.map((product) => (
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
											{product.category[0].name}
										</p>
										<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
											{product.name}
										</h3>
										<p className="flex-1 py-2 text-md text-secondary leading-snug">
											Price: ${product.resalePrice}
										</p>
										<Link
											to="/product-details"
											className="btn btn-ghost sm:btn-sm md:btn-md lg:btn-md bg-blue-400 text-gray-800"
										>
											View Details
										</Link>
										<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
											<span>{product.location}</span>
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
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Products;
