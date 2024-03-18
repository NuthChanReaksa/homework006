import MainComponent from "@/components/MainComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div
          id="default-carousel"
          className="relative z-1 w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative lg:h-[600px] overflow-hidden md:h-96 h-[700px]">
            {/* Item 1 */}
            <div className="shadow-md">
              {" "}
              {/* Add shadow to the container div */}
              <img
                src="https://images.unsplash.com/photo-1542931415-162aeab4418f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-sm"
                alt="..."
              />
            </div>
            <div className="absolute inset-x-[10%] hidden py-5 text-white md:block pt-[200px] text-left">
              <h2 className="text-4xl font-bold mb-5">
                Center of Science and Technology Advanced Development
              </h2>
              <p className="text-lg">
                CSTAD is a noteworthy science and technology center in Cambodia.
                CSTAD has routed <br />
                Cambodian students to advanced science and technology, research,
                and develop digital <br />
                skills and our graduates have been guaranteed excellent job
                opportunities with the Top <br />
                IT company.
              </p>
              <Link href="enroll1/apply.html">
                <button
                  type="button"
                  className="relative px-10 py-2 mt-10 overflow-hidden font-semibold rounded-lg bg-blue-900 text-white"
                >
                  Enroll
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MainComponent />
    </main>
  );
}
