function Form({
  inputValue,
  setInputValue,
  setSubmitValue,
  setErrorMessage,
  errorMessage,
}) {
  const handleInputChange = function (e) {
    let input = e.target.value;

    input = input.replace(/\D/g, "");

    // Insert spaces every 4 characters
    input = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setInputValue({ ...inputValue, cardNumber: input });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (errorMessage.name.length <= 0) {
      setErrorMessage({ ...errorMessage, name: "Please Enter your name" });
    }
    if (!errorMessage.cardNumber) {
      setErrorMessage({
        ...errorMessage,
        cardNumber: "Wrong format, Numbers only",
      });
    }
    if (!errorMessage.dateMonth) {
      setErrorMessage({ ...errorMessage, dateMonth: "Can't be blank" });
    }
    if (!errorMessage.dateYear) {
      setErrorMessage({ ...errorMessage, dateYear: "Can't be blank" });
    }
    if (!errorMessage.cvcNumber) {
      setErrorMessage({
        ...errorMessage,
        cvcNumber: "Can't be blank",
      });
    }
    setSubmitValue(inputValue);
  };

  return (
    <div className="w-full h-screen sm:flex-1 flex justify-center items-center">
      <form
        className="max-w-sm mx-auto [&>label]:tracking-widest"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 tracking-widest"
          >
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            id="base-input"
            className="block w-full p-2.5 rounded-md"
            style={{
              borderColor: "linear-gradient(to right, #294eff, #3a4e66)",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            placeholder="e.g. Jane Appleseed"
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            value={inputValue.name}
          />
          <p className="text-[12px] text[#ff5252]">{errorMessage.name}</p>
        </div>{" "}
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            CARD NUMBER
          </label>
          <input
            type="text"
            id="base-input"
            className="block w-full p-2.5 rounded-md"
            style={{
              borderColor: "linear-gradient(to right, #294eff, #3a4e66)",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            onChange={handleInputChange}
            value={inputValue.cardNumber}
          />
        </div>
        <div className="flex mb-5 z-10">
          <div>
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              EXP. DATE (MM/YY)
            </label>
            <div className="flex">
              <input
                type="number"
                id="base-input"
                className="block w-2/5 p-2.5 rounded-md mx-1"
                style={{
                  borderColor: "linear-gradient(to right, #294eff, #3a4e66)",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                placeholder="MM"
                maxLength={2}
                pattern="[0-9]{2}"
                onChange={(e) =>
                  setInputValue({ ...inputValue, dateMonth: e.target.value })
                }
                value={inputValue.dateMonth}
              />
              <input
                type="number"
                id="base-input"
                className="block w-2/5 p-2.5 rounded-md mx-1"
                style={{
                  borderColor: "linear-gradient(to right, #294eff, #3a4e66)",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                placeholder="YY"
                maxLength={2}
                pattern="[0-9]{2}"
                onChange={(e) =>
                  setInputValue({ ...inputValue, dateYear: e.target.value })
                }
                value={inputValue.dateYear}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              CVC
            </label>
            <input
              type="number"
              id="base-input"
              className="block w-full p-2.5 rounded-md"
              style={{
                borderColor: "linear-gradient(to right, #294eff, #3a4e66)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
              placeholder="e.g. 123"
              maxLength={3}
              pattern="[0-9]{3}"
              onChange={(e) => {
                const value = e.target.value.slice(0, 3);
                setInputValue({ ...inputValue, cvcNumber: value });
              }}
              value={inputValue.cvcNumber}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white w-full text-center bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
