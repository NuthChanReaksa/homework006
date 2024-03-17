import React from "react";

export default function MainComponent() {
  return (
    <div className="my-[64px]">
      <article className="max-w-screen-xl mx-auto lg:mx-auto pr-4">
        <h2 className="text-blue-800 font-bold text-3xl mx-auto text-center">
          Our Courses
        </h2>
        <p className="text-[#626262] text-l mx-auto text-center">
          Check out the available courses
        </p>
      </article>

      <div
        id="div_ctn"
        className="container relative grid grid-cols-3 mx-auto my-6 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 w-4/5"
      >
        {/* Your content here */}
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span className="text-blue-800">CSTAD</span> ALSO AVAILABLE<br className="hidden md:block" />
                ON PHONE
              </h2>
              <p className="text-base text-[#656565] md:text-lg">
                Stay Update with IT News and Education with ISTAD
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798"
                className="w-32 transition duration-300 hover:shadow-lg"
              >
                <img
                  src="https://kitwind.io/assets/kometa/app-store.png"
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share"
                className="w-32 transition duration-300 hover:shadow-lg"
              >
                <img
                  src="https://kitwind.io/assets/kometa/google-play.png"
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2 duration-1000" data-aos="fade-up-right">
            <div className="w-2/5">
              <img
                className="object-cover"
                src="./asset/Image/Mobile2.png"
                alt=""
              />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32 duration-1000" data-aos="fade-up-left">
              <img
                className="object-cover"
                src="./asset/Image/Mobile1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
