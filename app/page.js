import Header from "@/lib/components/common/Header";
import HeaderMain from "@/lib/components/common/HeaderMain";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="text-gray-700 bg-white">
        <HeaderMain />
        <div
          className="py-20"
          style={{
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1100px]">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-2 text-white">
                  Manage Your Organization's Cultural Events
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">in One Place!</h3>

                <a href="/register">
                  {" "}
                  <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1100px]">
            <section className="container mx-auto px-6 p-10">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Features
              </h2>
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Event Registration
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Allow students to easily register and gain access to a
                    variety of events hosted by your organization.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723366/illustrration/undraw_online_articles_79ff_vjdpak.svg"
                    alt="Monitoring"
                  />
                </div>
              </div>

              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Application for Events
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Empower students to apply to participate in specific events
                    that align with their interests and skills.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723562/illustrration/undraw_report_mx0a_phbrsj.svg"
                    alt="Reporting"
                  />
                </div>
              </div>

              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Schedules & Venues
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Provide a well-organized schedule with event dates, times,
                    and venue locations, making it easy for everyone to stay
                    informed.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723624/illustrration/undraw_file_sync_ot38_ntk9nt.svg"
                    alt="Syncing"
                  />
                </div>
              </div>

              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Event Registration
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Allow students to easily register and gain access to a
                    variety of events hosted by your organization.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723366/illustrration/undraw_online_articles_79ff_vjdpak.svg"
                    alt="Monitoring"
                  />
                </div>
              </div>

              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Live Results & Team Points
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Enable students and organizers to follow live scores,
                    results, and updated team points, fostering a competitive
                    and engaging atmosphere.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723562/illustrration/undraw_report_mx0a_phbrsj.svg"
                    alt="Reporting"
                  />
                </div>
              </div>

              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    Reports & User Management
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Ensure smooth event experiences with features to report
                    issues or users as needed, maintaining a safe and enjoyable
                    environment.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/tommypratama/image/upload/v1585723624/illustrration/undraw_file_sync_ot38_ntk9nt.svg"
                    alt="Syncing"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
        <section style={{ backgroundColor: "#667eea" }}>
          <div className="container mx-auto px-6 text-center py-20">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[1100px]">
                <h2 className="mb-6 text-4xl font-bold text-center text-white">
                  Effortlessly Manage and Track Your Organization’s Exclusive
                  Events
                </h2>
                <p className="my-4 text-2xl text-white">
                  A specialized event management platform crafted to meet the
                  unique needs of your organization. Whether organizing arts,
                  sports, or academic events, this system offers an end-to-end
                  solution for efficient event registration, scheduling, and
                  real-time updates. Enhance participant engagement and
                  streamline event logistics, all within one dedicated platform
                  designed just for your organization.
                </p>
                <a href="/register">
                  <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
