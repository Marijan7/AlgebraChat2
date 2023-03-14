import React from "react";

const Send = (props) => {
      return (
            <div className="flex pr-5  justify-end">
                  <div className="m-5 border rounded-b-xl rounded-tl-xl bg-blue-300 border-yellow-100 p-2 text-right max-w-lg">
                        <p className="text-blue-600 font-extrabold text-right mb-2">
                              {props.name}
                        </p>
                        {props.message}
                  </div>
                  <div className="flex flex-col justify-center items-center ">
                        <p className="text-yellow-100 text-sm">
                              {new Date(props.time).toLocaleTimeString()}
                        </p>
                  </div>
            </div>
      );
};

export default Send;
