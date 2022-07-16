import React from "react";
import bg from "../../assets/images/update.webp";

const SubscribeCard = () => {
    return (
        <div className="mt-24" data-aos="zoom-out" data-aos-duration="3000">
            <div
                className="w-full py-52 bg-gray-500 font-montserrat bg-no-repeat"
                style={{
                    background: `url(${bg})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex flex-col flex-wrap content-center lg:ml-16">
                    <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
                        Get Our Updates
                    </div>
                    <div className="text-xl text-white antialiased text-center">
                        Find out about events and other news.
                    </div>
                    <div className="mt-3 flex flex-row flex-wrap">
                        <input
                            type="text"
                            className=" text-gray-600 w-2/3 p-2 pl-5 outline-none rounded-l-lg"
                            placeholder="rana@exmaple.com"
                        />
                        <button
                            className=" p-2 w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: hover:bg-indigo-300"
                            type="button"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeCard;