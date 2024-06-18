function Cards({ inputValue, submitValue }) {
  return (
    <div className="bg-[url('/images/bg-main-desktop.png')] w-full h-screen sm:w-1/3 bg-no-repeat -z-30">
      <div className="flex flex-col [&>*]:p-2">
        <div className="absolute top-[20%] left-[15%]">
          <img
            src="/images/bg-card-front.png"
            alt="card-front"
            width="70%"
            className="relative"
          />
          <img
            src="/images/card-logo.svg"
            alt="card-logo"
            className="absolute top-6 left-6"
          />
          {submitValue?.cardNumber && (
            <p className="text-white font-md absolute top-[12vh] left-5">
              {inputValue.cardNumber}
            </p>
          )}

          {submitValue?.name &&
            submitValue?.dateMonth &&
            submitValue?.dateYear && (
              <div className="absolute bottom-[3vh] [&>*]:text-white left-[1vw] flex gap-[2vw]">
                <p className="pl-1 w-[14vw] break-words">{inputValue.name}</p>
                <p>
                  {inputValue.dateMonth}/{inputValue.dateYear}
                </p>
              </div>
            )}
        </div>
        <div className="-z-30 absolute top-[50%] left-[20%]">
          <img
            src="/images/bg-card-back.png"
            alt="card-back"
            width="70%"
            className="relative"
          />

          {submitValue?.cvcNumber && (
            <p className="z-50 text-white font-md absolute top-[11vh] right-44">
              {inputValue.cvcNumber}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
