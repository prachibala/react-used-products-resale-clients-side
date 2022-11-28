import React, { useState, useEffect, useContext } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { AuthContext } from "../../Context/Context";
import Loading from "../../Loader/Loading";
import { Link } from "react-router-dom";

const MyProducts = () => {
	const { user } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [myProducts, setMyProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_server_url}/my-products?email=${user?.email}`,
			{
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken"
					)}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setMyProducts(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user?.email]);

	const handleAdvertiseStatus = (id) => {
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_server_url}/update-advertise-status/${id}`,
			{
				method: "POST",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const newProducts = myProducts.map((p) => {
					if (p._id === id) {
						p.advertiseStatus = "published";
					}

					return p;
				});
				setMyProducts(newProducts);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (id) => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_server_url}/delete-product/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const newProducts = myProducts.filter((p) => {
					return p._id !== id;
				});
				setMyProducts(newProducts);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	UseTitle("My Product");
	return (
		<div>
			<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
				<h2 className="mb-4 text-2xl font-semibold leading-tight">
					My Products
				</h2>
				<div className="overflow-x-auto">
					{loading ? (
						<Loading />
					) : (
						<table className="min-w-full text-xs">
							<colgroup>
								<col />
								<col />
								<col />
								<col />
								<col className="w-24" />
								<col />
							</colgroup>
							<thead className="dark:bg-blue-400 text-base-100">
								<tr className="text-left">
									<th className="p-3">Product Name</th>
									<th className="p-3">Price</th>
									<th className="p-3">Sale Status</th>
									<th className="p-3">Advertise Status</th>
									<th className="p-3">Edit/Delete</th>
									<th className="p-3"></th>
								</tr>
							</thead>

							<tbody>
								{myProducts.map((product) => (
									<tr
										className="border-b border-opacity-20  dark:border-blue-400 dark:bg-base-100"
										key={product._id}
									>
										<td className="p-5">
											<p>{product.name}</p>
										</td>
										<td className="p-3">
											<p>{product.resalePrice}</p>
										</td>
										<td className="p-3">
											<p>{product.saleStatus}</p>
										</td>
										<td className="p-3">
											<p>{product.advertiseStatus}</p>
										</td>
										<td className="p-3 flex">
											<Link
												to={`/dashboard/edit-products/${product._id}`}
												className="bg-lime-300 px-3 py-2 hover:bg-lime-400 rounded text-gray-900 mr-2"
											>
												Edit
											</Link>
											<button
												onClick={() => {
													handleDelete(product._id);
												}}
												className="bg-red-300 px-3 py-2 hover:bg-red-400 rounded text-gray-900 "
											>
												Delete
											</button>
										</td>
										<td className="p-3 text-right">
											{product.advertiseStatus ===
											"published" ? (
												<button
													className="bg-stone-400 px-3 py-2  rounded text-gray-900 "
													disabled
												>
													Advertised
												</button>
											) : (
												<button
													onClick={() => {
														handleAdvertiseStatus(
															product._id
														);
													}}
													className="bg-sky-300 px-3 py-2 hover:bg-sky-400 rounded text-gray-900 "
												>
													Advertise
												</button>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
};

export default MyProducts;
