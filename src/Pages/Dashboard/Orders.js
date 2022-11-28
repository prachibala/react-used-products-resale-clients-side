import React, { useState, useContext, useEffect } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { AuthContext } from "../../Context/Context";
import Loading from "../../Loader/Loading";

const Orders = () => {
	UseTitle("Orders");
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_server_url}/get-orders?email=${user?.email}`,
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
				setOrders(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user?.email]);

	return (
		<div>
			<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
				<h2 className="mb-4 text-2xl font-semibold leading-tight">
					My Orders
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
							</colgroup>
							<thead className="dark:bg-blue-400 text-base-100">
								<tr className="text-left">
									<th className="p-3">Product Name</th>
									<th className="p-3">Buyer</th>
									<th className="p-3">Phone</th>
									<th className="p-3">Meeting Location</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => (
									<tr
										key={order._id}
										className="border-b border-opacity-20  dark:border-blue-400 dark:bg-base-100"
									>
										<td className="p-5">
											<p>{order.product[0].name}</p>
										</td>
										<td className="p-3">
											<p>{order.orderBy[0].name}</p>
										</td>
										<td className="p-3">
											<p>{order.phone}</p>
										</td>
										<td className="p-3">
											<p>{order.location}</p>
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

export default Orders;
