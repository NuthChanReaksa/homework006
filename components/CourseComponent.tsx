import React from "react";
import CardComponent from "@/components/CardComponent";

export default function CourseComponent() {
  return (
    <>
      <article className="mx-auto flex justify-center py-8 lg:py-8 text">
        <h2 className="flex text-3xl text-blue-800 font-semibold mx-auto">
          COURSES
        </h2>
      </article>
      <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {/* search */}
          <form action="">
            <div className="w-full">
              <div className="relative flex w-full flex-row items-stretch">
                <input
                  type="search"
                  id="search"
                  className="relative m-0 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                {/* Search button */}
                <button
                  className="relative flex items-center rounded-r bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {/* end of search */}
          {/* category */}
          <div className="w-full">
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Category</option>
              <option value="FP">Fundamental</option>
              <option value="FE">Front-End</option>
              <option value="MB">Mobile</option>
              <option value="DB">Database</option>
              <option value="BE">Back-End</option>
              <option value="DO">DevOps</option>
              <option value="Bl">Blockchain</option>
            </select>
          </div>
          {/* end category */}
          {/* sort by */}
          <div className="w-full">
            <select
              id="sortby"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Sort By</option>
              <option value="PC">Popular Course</option>
              <option value="CA">Basic Course</option>
              <option value="AC">Advanced Course</option>
            </select>
          </div>
          {/* end of sort by */}
          {/* button filter */}
          <div>
            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Filter Result
            </button>
          </div>
          {/* end of button filter */}
        </div>
      </div>

      <main id="course">
        {/* backend */}

        {/* end of backend */}
        {/* database */}
        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              Database Management System
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div
              id="database"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 "
            >
              <CardComponent />
              <CardComponent />

              {/* course 1 */}

              {/* end of course 2 */}
            </div>
          </div>
        </div>
        {/* end of database */}
        {/* programming */}
        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              Programming Languages
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div
              id="programming"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 "
            >
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              Web Development
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div id="web" className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
        {/* end of web */}
        {/* app development */}
        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              App Development
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div id="app" className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
        {/* end of app */}
        {/* cyber */}
        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              Cyber Security
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div id="cyber" className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
        {/* end of cyber */}
        {/* web design */}
        <div className="max-w-screen-xl mx-auto px-10 lg:mx-auto course-card">
          <article className="mt-10">
            <h2 className="text-3xl text-blue-800 font-semibold mx-auto">
              Web Design
            </h2>
          </article>
          <div className="py-8 mx-auto max-w-screen-xl ">
            <div id="design" className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
        {/* end of web design */}
      </main>
    </>
  );
}
