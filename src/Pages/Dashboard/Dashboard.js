import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Context";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../../Loader/Loading";

const Dashboard = () => {
	UseTitle("Dashboard");
	const { user } = useContext(AuthContext);
	const [savedUser, setSavedUser] = useState(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_server_url}/user?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setSavedUser(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [user?.email]);

	return (
		<div className="flex justify-center">
			{loading ? (
				<Loading />
			) : (
				<div className="flex flex-col justify-center w-full p-6 shadow-md rounded-xl sm:px-12 bg-base-200 dark:text-gray-900 m-4">
					<h2 className="text-2xl font-semibold text-center p-2">
						Welcome
					</h2>
					<img
						src={savedUser.imgUrl}
						alt=""
						className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
					/>
					<div className="space-y-4 text-center divide-y divide-gray-700">
						<div className="my-2 space-y-1">
							<h2 className="text-xl font-semibold sm:text-2xl">
								{savedUser.name}
							</h2>
							{savedUser.verified ? (
								<p className="flex justify-center items-center px-5  sm:text-base dark:text-gray-800">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 mr-1 fill-green-600"
									>
										<path
											fillRule="evenodd"
											d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-lg text-green-700">
										Verified
									</span>
								</p>
							) : (
								<p className="flex justify-center items-center px-5  sm:text-base dark:text-gray-800">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 mr-1 fill-red-600"
									>
										<path
											fillRule="evenodd"
											d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
											clipRule="evenodd"
										/>
									</svg>

									<span className="text-lg text-red-700">
										Unverified
									</span>
								</p>
							)}
						</div>
						<div className="pt-2 space-x-4 align-center">
							<p className="p-1 text-blue-600">
								{savedUser.email}
							</p>
							<p className="p-1 text-blue-600">
								{savedUser.userType.toUpperCase()}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
