import React from "react";
import { Link } from "react-router-dom";

function Card() {
    return (
        <>
            <div className="flex justify-center mt-4">
                <div className="max-w-screen-lg w-full rounded overflow-hidden shadow-lg bg-gray-200">
                    <div className="px-6 py-4">
                        <Link to="/Card">
                            <img
                                src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/15/4d386120a9f7f066a825c1d47e8f8e411715749237587916_original.jpg?impolicy=abp_cdn&imwidth=470"
                                alt="innercard"
                                className="w-full"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;