"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error is", error);
  }, [error]);

  const retryRequestHandler = () => {
    reset();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-red-300 font-semibold text-2xl mb-3">
        Something went wrong!
      </h2>
      <button
        onClick={retryRequestHandler}
        className="bg-fuchsia-500 w-auto px-5 py-2 rounded-lg	"
      >
        Retry request
      </button>
    </div>
  );
}
