import React from "react";
import { Link } from "react-router-dom";
import pic from "../../Images/hero-pic2.jpg";
import Categories from "./Categories";
import Products from "./Products";
import UseTitle from "../../Hooks/UseTitle";
const Home = () => {
	UseTitle(" Home");
	return (
		<>
			<section className=" dark:text-gray-800 w-10/12 mx-auto">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-5xl md:text-5xl ">
							Make Your
							<span className="dark:text-blue-300">Days</span>
							Feeling Comfy
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							We provide the best product
							<br className="hidden md:inline lg:hidden" />
							you can afford......☺
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								rel="noopener noreferrer"
								to="/all-products"
								className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-300 dark:text-grey-800"
							>
								View Products
							</Link>
						</div>
					</div>

					<div className="w-full md:flex md:justify-end">
						<div className="carousel w-full lg:w-9/12">
							<div
								id="slide1"
								className="carousel-item relative w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
							>
								<img
									src={pic}
									alt=""
									className="object-cover w-full h-full rounded"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a
										href="#slide4"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❮
									</a>
									<a
										href="#slide2"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❯
									</a>
								</div>
							</div>
							<div
								id="slide2"
								className="carousel-item relative w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
							>
								<img
									src="https://m.media-amazon.com/images/I/81TXaBDMWmL._SL1500_.jpg"
									alt=""
									className="object-cover w-full h-full rounded"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a
										href="#slide1"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❮
									</a>
									<a
										href="#slide3"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❯
									</a>
								</div>
							</div>
							<div
								id="slide3"
								className="carousel-item relative w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
							>
								<img
									src="https://www.ikea.com/us/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg"
									alt=""
									className="object-cover w-full h-full rounded"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a
										href="#slide2"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❮
									</a>
									<a
										href="#slide4"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❯
									</a>
								</div>
							</div>
							<div
								id="slide4"
								className="carousel-item relative w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
							>
								<img
									src="http://cdn.shopify.com/s/files/1/1185/9434/products/blue-workstation-for-2-persons-12078758690913.jpg?v=1599154018"
									alt=""
									className="object-cover w-full h-full rounded"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a
										href="#slide3"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❮
									</a>
									<a
										href="#slide1"
										className="btn btn-circle bg-blue-400 btn-ghost"
									>
										❯
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Categories></Categories>
			<Products></Products>
		</>
	);
};

export default Home;
