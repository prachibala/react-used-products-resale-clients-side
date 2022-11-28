import React, { useEffect, useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../../Loader/Loading";

const AllSellers = () => {
	UseTitle("All Seller");
	const [buyers, setBuyers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_server_url}/get-buyers`, {
			headers: {
				authorization: `bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setBuyers(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleVerification = (id) => {
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_server_url}/update-verification-status/${id}`,
			{
				method: "POST",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const newUsers = buyers.map((b) => {
					if (b._id === id) {
						b.verified = true;
					}
					return b;
				});
				setBuyers(newUsers);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (id) => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_server_url}/delete-user/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const newUsers = buyers.filter((s) => {
					return s._id !== id;
				});
				setBuyers(newUsers);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
				<h2 className="mb-4 text-2xl font-semibold leading-tight">
					All Seller Users
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
								<col />
							</colgroup>
							<thead className="dark:bg-blue-400 text-base-100">
								<tr className="text-left">
									<th className="p-3">Name</th>
									<th className="p-3">Email</th>
									<th className="p-3">Verification</th>
									<th className="p-3">Delete</th>
									<th className="p-3">Verify</th>
								</tr>
							</thead>
							<tbody>
								{buyers.map((buyer) => (
									<tr
										key={buyer._id}
										className="border-b border-opacity-20  dark:border-blue-400 dark:bg-base-100"
									>
										<td className="p-5">
											<p>{buyer.name}</p>
										</td>
										<td className="p-3">
											<p>{buyer.email}</p>
										</td>
										<td className="p-3">
											<p>
												{buyer.verified
													? "Verified"
													: "Unverified"}
											</p>
										</td>
										<td className="p-3">
											<button
												onClick={() => {
													handleDelete(buyer._id);
												}}
												className="bg-red-300 px-3 py-2 hover:bg-red-400 rounded text-gray-900 "
											>
												Delete
											</button>
										</td>
										<td className="p-3">
											{buyer.verified ? (
												<button
													className="bg-green-500 px-3 py-2  rounded text-gray-900 "
													disabled
												>
													Verified
												</button>
											) : (
												<button
													onClick={() => {
														handleVerification(
															buyer._id
														);
													}}
													className="bg-sky-300 px-3 py-2 hover:bg-sky-400 rounded text-gray-900 "
												>
													Verify
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

export default AllSellers;
