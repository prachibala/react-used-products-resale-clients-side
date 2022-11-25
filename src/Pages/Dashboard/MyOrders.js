import React from "react";

const MyOrders = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                    My Orders
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-blue-400 text-base-100">
                            <tr className="text-left">
                                <th className="p-3">Serial</th>
                                <th className="p-3">Product Image</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20  dark:border-blue-400 dark:bg-base-100">
                                <td className="p-5">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://img.freepik.com/premium-vector/cute-panda-waving-hand-cartoon_346903-1163.jpg?w=2000"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>$45</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
                                        <span>Pay</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
