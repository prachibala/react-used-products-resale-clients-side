import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Nav = () => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const LogOut = () => {
		logOut()
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<div className=" w-10/12 mx-auto p-4">
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/blogs" tabIndex={0}>
										Blogs
									</Link>
								</li>
								{user && (
									<li>
										<Link to="/dashboard" tabIndex={0}>
											Dashboard
										</Link>
									</li>
								)}

								{/* user ----->log in || log out */}

								<li>
									{user ? (
										<Link to="/" onClick={LogOut}>
											LogOut
										</Link>
									) : (
										<Link to="/signin">Sign in</Link>
									)}
								</li>
							</ul>
						</div>
						<Link
							to="/"
							className="btn btn-ghost normal-case text-xl"
						>
							Reto
							<span className="text-blue-300 text-2xl">C</span>art
						</Link>
					</div>

					<div className="navbar-end">
						<Link
							to="/"
							className="btn  dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
						>
							HOME
						</Link>
						<Link
							to="/blogs"
							className="btn  dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
						>
							Blogs
						</Link>
						{user && (
							<Link
								to="/dashboard"
								className="btn  dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
							>
								Dashboard
							</Link>
						)}
						{user && (
							<div
								className="dropdown dropdown-end tooltip tooltip-bottom tooltip-base-300 "
								data-tip={user.displayName}
							>
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar "
								>
									<div className="w-10 rounded-full">
										<img src={user.photoURL} alt="" />
									</div>
								</label>
							</div>
						)}

						{/* user ----->log in || log out */}

						{user ? (
							<Link
								to="/signin"
								onClick={LogOut}
								className="btn btn-active btn-primary dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
							>
								LogOut
							</Link>
						) : (
							<Link
								to="/signin"
								className="btn btn-active btn-primary dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
							>
								Sign in
							</Link>
						)}
						<label
							htmlFor="dashboard-drawer"
							tabIndex={0}
							className="btn btn-ghost lg:hidden navbar-end"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
