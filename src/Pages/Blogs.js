import React from "react";
import UseTitle from "../Hooks/UseTitle";

const Blogs = () => {
    UseTitle("Blogs");
    return (
        <div>
            <section className=" dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        Blogs
                    </h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">
                                1 What are the different ways to manage a state
                                in a React application?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                Local state is perhaps the easiest kind of state
                                to manage in React, considering there are so
                                many tools built into the core React library for
                                managing it. useState is the first tool you
                                should reach for to manage state in your
                                components. its setter function can be passed
                                down to other components as a callback function
                                !
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                2 How does prototypical inheritance work?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                The Prototypal Inheritance is a feature in
                                javascript used to add methods and properties in
                                objects. It is a method by which an object can
                                inherit the properties and methods of another
                                object. Traditionally, in order to get and set
                                the [[Prototype]] of an object, we use Object.
                                getPrototypeOf and Object.!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                3 What is a unit test? Why should we write unit
                                tests?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                The main objective of unit testing is to isolate
                                written code to test and determine if it works
                                as intended. Unit testing is an important step
                                in the development process, because if done
                                correctly, it can help detect early flaws in
                                code which may be more difficult to find in
                                later testing stages.!
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">
                                4 React vs. Angular vs. Vue?
                            </h3>
                            <p className="mt-1 dark:text-gray-400">
                                React is a UI library, Angular is a
                                fully-fledged front-end framework, while Vue. js
                                is a progressive framework. They can be used
                                almost interchangeably to build front-end
                                applications, but they're not 100 percent the
                                same, so it makes sense to compare them and
                                understand their differences.!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
