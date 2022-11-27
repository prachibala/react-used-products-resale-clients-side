import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseTitle from "../../Hooks/UseTitle";
import pic from "../../Images/addCart.svg";
import Loading from "../../Loader/Loading";
import { toast } from "react-toastify";

const AddCategory = () => {
	const [loading, setLoading] = useState(false);

	UseTitle("Add Category");

	const notify = () => {
		toast.success("Category created successfully!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_server_url}/add-category`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				notify();
				setLoading(false);
				reset();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 dark:text-gray-800 mt-6">
				<div className="flex flex-col justify-between">
					<div className="space-y-2">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
							Add Category!
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
					className="space-y-6 ng-untouched ng-pristine ng-valid"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<label htmlFor="name" className="text-sm">
							Category Name
						</label>
						<input
							id="name"
							type="text"
							placeholder="Category name.."
							className="w-full p-3 rounded dark:bg-white"
							{...register("name", {
								required: "This field is required",
							})}
						/>
					</div>
					<div>
						<label htmlFor="name" className="text-sm">
							Category Icon
						</label>
						<input
							id="img"
							type="url"
							placeholder="Icon url.."
							className="w-full p-3 rounded dark:bg-white"
							{...register("iconImg", {
								required: "This field is required",
							})}
						/>
					</div>

					{loading ? (
						<Loading />
					) : (
						<button
							type="submit"
							className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-400 dark:text-white"
						>
							Add category
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default AddCategory;
