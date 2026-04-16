import { useLoaderData, useNavigation } from "react-router";
import { IoMdAdd } from "react-icons/io";
import Cards from "../Card/Cards";

const Home = () => {
  const friendsData = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const stats = [
    { id: 1, label: "Total Friends", value: friendsData?.length || 0 },
    {
      id: 2,
      label: "On Track",
      value:
        friendsData?.filter((item) => item.status === "On-track").length || 0,
    },
    {
      id: 3,
      label: "Need Attention",
      value:
        friendsData?.filter((item) => item.status === "overdue").length || 0,
    },
    {
      id: 4,
      label: "Interactions This Month",
      value:
        friendsData?.filter((item) => item.days_since_contact <= 30).length ||
        0,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 backdrop-blur-[2px]">
          <span className="loading loading-spinner w-24 text-primary"></span>
          <h2 className="mt-6 text-2xl z-50 font-bold text-primary animate-pulse">
            Loading Connections...
          </h2>
        </div>
      )}

      <section
        className={isLoading ? "opacity-30 pointer-events-none" : "opacity-100"}
      >
        <div className="hero bg-base-200 mt-20 p-20 rounded-2xl">
          <div className="hero-content text-center">
            <div className="max-w-full">
              <h1 className="text-4xl font-bold">
                Friends to keep close in your life
              </h1>
              <p className="py-6 text-gray-600">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
              <button className="btn text-white bg-[#1e3d33]" disabled={isLoading}>
                <IoMdAdd /> Add a Friend
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 mt-10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-4xl font-bold text-[#1a3a32] mb-2">
                  {stat.value}
                </h2>
                <p className="text-gray-500 font-medium text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto">
          <Cards friendsData={friendsData} />
        </div>
      </section>
    </div>
  );
};

export default Home;
