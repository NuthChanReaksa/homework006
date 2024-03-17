import React from 'react';

export default function EnrollPage() {
  return (
    <div className="max-w-[950px] m-auto mt-10 mb-10">
      <div className="flex items-center justify-center rounded-xl bg-white"> 
        {/* Author: FormBold Team */}
        <div className="mx-auto w-full max-w-[450px]">
          <h1 id="contact" className="text-2xl font-bold text-center mt-5 mb-5">ENROLL FORM</h1> 
          <form className="ml-6">
            <div className="mb-5">
              <input type="text" name="name" id="full-name" placeholder="Full Name (EN)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <input type="email" name="email" id="email" placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <select id="gender" name="gender"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input type="date" name="date" id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            </div>
            {/* More form elements */}
            {/* Add more form elements here */}
            <div className="mb-5">
              <input type="text" name="phone" id="phone" placeholder="Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            {/* More form elements */}
            {/* Add more form elements here */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <select id="university" name="university"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                    <option value="">University</option>
                    {/* Add university options */}
                    {/* Add university options here */}
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <select id="education" name="education"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                    <option value="">Education</option>
                    {/* Add education options */}
                    {/* Add education options here */}
                  </select>
                </div>
              </div>
            </div>
            {/* More form elements */}
            {/* Add more form elements here */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <select id="courses" name="courses"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                    <option value="">Courses</option>
                    {/* Add course options */}
                    {/* Add course options here */}
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <div>
                    <button
                      className="hover:shadow-form w-full rounded-md border-2 border-green-600 bg-white py-3 px-8 text-center font-bold text-green-600 outline-none">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-red-600 font-bold mb-10"><i className="fas fa-hand-point-right"></i> Please filter available courses to select the class..!</h3>
          </form>
        </div> 
        {/* image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?t=st=1703475442~exp=1703476042~hmac=d41fcbc976ae3c2ebd676e93a954f2aaaeec455edcf5598c06277e24b6591b35"
            alt="courses"
          />
        </div>
      </div>
    </div>
  );
}
