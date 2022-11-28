import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../Loader/Loading";

const BookModal = ({ product, user }) => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset } = useForm();

	const notify = () => {
		toast.success("Product Booked successfully!", {
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

	const handleBooking = (formData) => {
		setLoading(true);

		const data = {
			...formData,
			product: product._id,
			orderBy: user.email,
			seller: product.createdBy[0].email,
		};
		fetch(`${process.env.REACT_APP_server_url}/create-order`, {
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
			<input
				type="checkbox"
				id="booking-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<section className="p-6 dark:text-gray-800">
						<h2 className="w-full text-3xl text-center font-bold leading-tight">
							Confirm Your Booking
						</h2>

						<div className="p-6 space-y-3 lg:col-span-5">
							<h3 className="text-xl font-semibold underline">
								Product Details
							</h3>
							<p className="flex mb-3 ">
								<span className="flex font-semibold">
									Product Name
								</span>
								: {product.name}
							</p>

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
									Condition
								</span>
								: {product.condition}
							</p>
						</div>

						<div className="p-6 space-y-3 lg:col-span-5">
							<h3 className="text-xl font-semibold underline">
								Your Details
							</h3>
							<form
								className="space-y-6 ng-untouched ng-pristine ng-valid"
								onSubmit={handleSubmit(handleBooking)}
							>
								<div>
									<input
										id="name"
										type="text"
										placeholder="Your phone number..."
										className="w-full p-3 rounded dark:bg-gray-100"
										{...register("phone", {
											required: "This field is required",
										})}
									/>
								</div>
								<div>
									<input
										id="img"
										type="text"
										placeholder="Meeting Location..."
										className="w-full p-3 rounded dark:bg-gray-100"
										{...register("location", {
											required: "This field is required",
										})}
									/>
								</div>
								<div className="flex justify-center">
									{loading ? (
										<Loading />
									) : (
										<button
											type="submit"
											className="px-8 py-3   font-semibold rounded dark:bg-blue-400 dark:text-gray-800 hover:bg-blue-300"
										>
											Confirm Boooking
										</button>
									)}
								</div>
							</form>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default BookModal;
