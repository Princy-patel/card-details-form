import React from "react";

function SuccessNotification() {
  return (
    <div className="h-screen w-auto sm:flex-1 flex justify-center items-center flex-col [&>*]:p-3">
      <img src="/images/icon-complete.svg" alt="thank-you" />

      <h1 className="text-3xl tracking-widest font-medium">THANK YOU!</h1>
      <p className="font-medium text-[#8e8593]">We've added your card details</p>
      <button
        type="submit"
        className="text-white w-[20vw] text-center bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-9"
      >
        Continue
      </button>
    </div>
  );
}

export default SuccessNotification;
