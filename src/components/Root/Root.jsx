import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { createContext, useState } from "react";

export const TimelineContext = createContext();

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [timelineData, setTimelineData] = useState([]);

  const handleCheckIN = (type, userName) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      userName: userName,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString(),
    };
    setTimelineData((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timelineData, handleCheckIN }}>
      <div className="flex flex-col justify-between min-h-screen relative">
        {isLoading && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 backdrop-blur-[2px]">
            <span className="loading loading-ring loading-xl w-24 text-primary"></span>
            <h2 className="mt-6 text-2xl z-50 font-bold text-primary animate-pulse">
              Loading Connections...
            </h2>
          </div>
        )}

        <Nav />
        <ToastContainer />

        <main className="flex-1 container mx-auto px-6 py-10">

          {isLoading ? (
            <div className="w-full">
              <Skeleton height={40} width="30%" className="mb-6" />
              <Skeleton height={250} borderRadius={16} className="mb-10" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="p-5 rounded-xl">
                    <Skeleton height={150} className="mb-4" />
                    <Skeleton count={2} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>

        <Footer />
      </div>
    </TimelineContext.Provider>
  );
};

export default Root;