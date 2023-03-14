import React from "react";

const Recieve = (props) => {
      return (
            <div className="flex p-3">
                  <div className="flex flex-col justify-center items-center ">
                        <p className="text-yellow-100 text-sm">
                              {new Date(props.time).toLocaleTimeString()}
                        </p>
                  </div>
                  <div className="m-5 border rounded-b-xl rounded-tr-xl bg-red-300 p-2 border-yellow-100">
                        <p className="text-red-600 font-extrabold">
                              {props.name}
                        </p>
                        {props.message}
                  </div>
            </div>
      );
};
export default Recieve;
