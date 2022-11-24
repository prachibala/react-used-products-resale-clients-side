import React from "react";
import { Link } from "react-router-dom";
import NavBottom from "./NavBottom";

const Nav = () => {
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
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">
                            Take
                            <span className="text-blue-300 text-2xl">M</span>e
                        </a>
                    </div>

                    <div className="navbar-end">
                        <Link
                            to="/"
                            className="btn  dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/"
                            className="btn  dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/signin"
                            className="btn btn-active btn-primary dark:text-gray-800 btn-ghost ml-3 invisible lg:visible"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;