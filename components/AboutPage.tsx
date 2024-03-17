import React from "react";
import CardMobileComponent from "./CardMobileComponent";

export default function AboutPage() {
  return (
    <main className="w-4/5 mx-auto py-5">
      <h2 className="text-3xl font-bold mt-5 text-center">
        About <span className="text-blue-900">CSTAD</span>{" "}
      </h2>

      {/* Slogan */}
      <div>
        <div className="bg-white py-4 px-4 my-5 rounded-lg">
          <p className="flex items-center">
            <i className="fas fa-bullhorn mr-4 text-2xl"></i> SLOGAN
          </p>
          <p className="ml-8 text-gray-500">
            . Start your IT career with CSTAD
          </p>
        </div>
      </div>
      {/* End slogan */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
          <div className="p-4">
            <img
              src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/431996426_402001492580357_7184578435190816870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLnG2iESoLUUslbLfg43AgZcQ-NoShvrtlxD42hKG-u4UUmW0Jz_hxJAgZwp9ZYDov3t8u5lGvbzCgl2Z9H9o4&_nc_ohc=CR7j3I32N7wAX-1fVD-&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfBu7rBI0bXGLqQcfvRMjZRNre8B4p9sd6NHz_hYzJnNvw&oe=65FB0FA6"
              alt="Composite Image 1+4"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <img
              src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/432041447_402001115913728_8568234042224429894_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHHghB2Hy8QZXw29ciOOFYzBHOkPLWdNtQEc6Q8tZ021BG2gtdKCf6vhdOHg-9Pjzah1UNIHd_ip1Jo9dhqXCSv&_nc_ohc=Dkr9GxmagYQAX-eAaXF&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfBdD_-xFPLT7Le5QnfEMnFWodD_4sYEt2pPT2yktITFnw&oe=65FBEBA7"
              alt="Composite Image 1+4"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="p-4">
            <img
              src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/431247656_402001795913660_6101248820885637276_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmiQ9QvrF9DelJuOaPg8eeRuDbd_z5vh9G4Nt3_Pm-H5TNe0fFvYddFhXdjwlOcg8Ii5R9JKSG3YhEtRkxaaQo&_nc_ohc=OWFhuS-cNLYAX-ULzZb&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfCMEJqzi1pKo9TAQm-ooaGDo0vq1bRjpyR5d-zwVYXNbA&oe=65FC1220"
              alt="Composite Image 3+6"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <h3 className="text-2xl my-10 font-semibold text-center">
        What is Center of Science and Technology Advanced Development?
      </h3>

      <div className="mb-5">
        <img
          src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/431894286_402001805913659_5562207900110684299_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6xr7ny6ZP7uXfv3SQPphzvukis_na4_S-6SKz-drj9H9-hKLLTOnT4pERTmT-ymt0Spka6tQ-qUCkzKdwcmg6&_nc_ohc=e4a2usV7HY0AX8FF-ms&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfCYMcvTQYK7wieaPUjXZ2Gk-OZnN1zsot6iufCPPWLhHQ&oe=65FAA494"
          style={{ width: "80%" }}
          className="mx-auto"
          alt=""
        />
        <p style={{ width: "70%" }} className="mx-auto my-4">
          CSTAD is a noteworthy science and technology center in Cambodia. CSTAD
          has routed Cambodian students to advanced science and technology,
          research, and develop digital skills and our graduates have been
          guaranteed excellent job opportunities with the Top IT company. CSTAD
          will continue to provide high-quality training with the latest
          methodology, and roadmap as well as the best choice for those who want
          to be an IT expert in Cambodia.
        </p>
      </div>

      {/* More sections ... */}

      {/* Replace with remaining sections */}
      {/* Section with images */}
      <div className="my-12">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <img
              src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/432071101_403181655795674_7066393886688507532_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFC3v_JFZTen1-ndNanQXjbzOWYQucRNifM5ZhC5xE2JwUsWkuVGu0EqnJDpmTrVN_VMzbb7QScAAXhive4d5Nu&_nc_ohc=k1L--xIB5dQAX_ulT5V&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfDSFy-jiEsDPVM8MeQgFwTBDCFpH-jTAMCDbe0mL1KydA&oe=65FBA510"
              className="w-full h-auto"
              alt=""
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-2">
            <div className="bg-white py-3 px-5 rounded-lg md:mb-0">
              <p className="flex items-center mt-2">
                <i className="fa-solid fa-eye mr-4 text-md"></i> VISION
              </p>
              <p className="ml-8 my-3 text-gray-500 text-sm">
                . Advanced IT Institute in Cambodia
              </p>
            </div>
            <div className="bg-white py-3 px-5 my-3 rounded-lg">
              <p className="flex items-center">
                <i className="fa-regular fa-circle-dot mr-4 text-md"></i>{" "}
                MISSION
              </p>
              <p className="ml-8 my-3 text-gray-500 text-sm">
                . Provide the latest methodology with high quality training and
                mentoring
              </p>
              <p className="ml-8 my-3 text-gray-500 text-sm">
                . Build up the capacity and career of IT experts Cambodia
              </p>
              <p className="ml-8 my-3 text-gray-500 text-sm">
                . Consult and connect CSTAD trainees to top IT careers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of div with images */}

      {/* App download links */}
      <h2 className="text-3xl font-bold text-center mb-3">
        Check out our latest Installment <br />{" "}
        <span className="text-blue-900">CSTAD</span> MOBILE
      </h2>
      <p className="my-3 text-gray-500 text-md text-center">
        Stay Informed with IT News. Simplify registration and access essential
        info.
      </p>
      <div className="flex gap-3 justify-center my-3">
        <a href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798">
          <img
            src="https://social.webestica.com/assets/images/app-store.svg"
            alt="Appstore Button"
            className="h-10"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share">
          <img
            src="https://social.webestica.com/assets/images/google-play.svg"
            alt="Playstore Button"
            className="h-10"
          />
        </a>
      </div>
      {/* End of App download links */}

      {/* Screenshots div */}
      <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <CardMobileComponent />
        <CardMobileComponent />
        <CardMobileComponent />
        <CardMobileComponent />
      </div>

      {/* End of screenshots div */}

      {/* About app */}
      <h2 className="text-3xl font-bold my-5 text-center">About this app</h2>
      <div className="w-4/5 mx-auto m-8 pb-10">
        <div className="flex flex-col md:flex-row gap-10 justify-center mx-5 ">
          <div className="bg-white p-8 rounded-lg mb-4 md:mb-0">
            <p className="flex items-center mt-2 font-semibold text-blue-800">
              CSTAD
              <span className="text-black pl-1">APP</span>
            </p>
            <p className="my-3 text-gray-700 text-sm">
              Stay up-to-date with the latest IT news, simplify registration
              processes, and access essential information effortlessly with
              CSTAD. Our all-in-one app is designed to empower you with the
              knowledge and convenience you need in the fast-paced world of
              technology.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg mb-4 md:mb-0">
            <p className="flex items-center mt-2 font-semibold">APP PRIVACY</p>
            <p className="my-3 text-gray-700 text-sm">
              The developer, Tara Kit, indicated that the app's privacy
              practices may include handling of data as described below. This
              information has not been verified by Apple. For more information,
              see the developer's privacy policy.
            </p>
          </div>
        </div>
      </div>
      {/* End of about app div */}

      {/* Mentor div */}
      <hr style={{ border: "1px solid rgb(62, 62, 62)" }} />
    </main>
  );
}
