import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-blue-800 text-center sm:text-center md:text-center">
      <div className="container mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="ml-4">
        <Link href="index.html" className="flex items-center">
            <img
              src="https://istad.co/resources/img/CSTAD_120.png"
              alt="logo"
              className="cstadlogo"
            />
            <span className="ml-2 text-lg font-bold tracking-wide text-white">
              Start your IT career with CSTAD
            </span>
          </Link>
          <p className="mt-4 text-sm text-white text-justify">
            CSTAD is a noteworthy science and technology center in Cambodia.
            CSTAD has routed Cambodian students to advanced science and
            technology, research, and develop digital skills and our graduates
            have been guaranteed excellent job opportunities with the Top IT
            company.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-lg text-white">
          <p className="text-base font-bold tracking-wide">LEARN MORE</p>
          <Link href="./course/course.html">Course</Link>
          <Link href="./announcement/itnews.html">IT News</Link>
          <Link href="./announcement/AnnounmnetJob.html">Job Opportunity</Link>
          <Link href="./policy/privacy.html">Privacy Policy</Link>
          <Link href="./policy/faq.html">FAQ</Link>
        </div>
        <div className="flex flex-col gap-2 text-lg text-white">
          <p className="text-base font-bold tracking-wide">POPULAR COURSE</p>
          <Link href="./course/course.html">Web Design</Link>
          <Link href="./course/course.html">Flutter Mobile Development</Link>
          <Link href="./course/course.html">Spring framework</Link>
          <Link href="./course/course.html">Java Programming</Link>
        </div>
        <div className="mt-3">
          <p className="text-base font-bold tracking-wide text-white">
            CSTAD IS ALSO AVAILABLE ON
          </p>

          <div className="gap-1 pt-5 pb-6 flex">
            <Link
              href="https://apps.apple.com/kh/app/cstad-mobile/id6463835798"
              className="w-full min-w-xl flex justify-end"
            >
              <img
                src="https://social.webestica.com/assets/images/app-store.svg"
                alt="Appstore Button"
                className="h-10"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=co.istad.mobile.istad_moblie&pcampaignid=web_share"
              className="w-full min-w-xl"
            >
              <img
                src="https://social.webestica.com/assets/images/google-play.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </Link>
          </div>

          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="text-white">
            <span className="mr-1">Email:</span>
            <Link href="mailto:info.istad@gmail.com" title="send email">
              info.istad@gmail.com
            </Link>
          </div>
          <p className="text-white">
            <Link href="tel:+85595990910">(+855) 95-990-910</Link>
            <br />
            <Link href="tel:+85593990910">(+855) 93-990-910</Link>
          </p>
          <div className="justify-start space-x-3 text-white text-2xl">
            <Link href="https://www.facebook.com/istad.co/?ref=embed_page">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="https://www.youtube.com/@istad7665">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href="https://t.me/istadkh">
              <i className="fa-brands fa-telegram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-base text-white">
          © 2023 Center of Science and Technology Advanced Development | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}
