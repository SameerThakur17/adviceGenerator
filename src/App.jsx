import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  const request = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((resp) => (setAdvice(resp["slip"]["advice"]), setLoading(false)));
  };
  useEffect(() => {
    request();
  }, []);

  const getAdvice = () => {
    setLoading(false);
    request();
  };
  return (
    <div className="flex w-screen h-screen bg-[url('images/bg.png')] bg-cover justify-center items-center">
      <div className="w-[600px] h-[300px] backdrop-blur-sm shadow-lg shadow-green-300 rounded-xl text-white flex space-y-8 items-center flex-col font-poppins">
        {loading ? (
          <div className="font-semibold text-2xl p-4 h-24 m-8 justify-center items-center flex w-full">
            Loading ...
          </div>
        ) : (
          <div className="font-semibold  text-green-300 text-2xl p-4 h-24 m-8 justify-center items-center flex w-full ">
            {advice}
          </div>
        )}

        <div>
          <button
            onClick={getAdvice}
            className="text-xl w-fit p-4 font-semibold shadow-md shadow-green-300 rounded-lg duration-300 hover:shadow-lg  text-green-300 hover:shadow-green-300  "
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
