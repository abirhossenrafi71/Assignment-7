import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let statusMessage = "Something went wrong!";
  let statusCode = "Error";

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    statusMessage = error.statusText || error.data;
  } else if (error instanceof Error) {
    statusMessage = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-5 text-center font-sans">
      <h1 className="text-9xl font-black text-gray-200">{statusCode}</h1>

      <div className="absolute">
        <h2 className="text-2xl font-bold uppercase text-gray-800 md:text-4xl">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-gray-500 text-lg italic">"{statusMessage}"</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-gray-800 px-8 py-3 font-bold uppercase tracking-wider text-gray-800 transition-all hover:bg-gray-800 hover:text-white"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-red-500 px-8 py-3 font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 shadow-lg"
          >
            Take Me Home
          </button>
        </div>
      </div>

      <p className="fixed bottom-10 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Status: {statusCode} | Path Invalid
      </p>
    </div>
  );
};

export default ErrorPage;
