import React from "react";

const ProdDetails = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title!</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdDetails;