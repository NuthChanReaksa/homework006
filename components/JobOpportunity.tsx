import React from "react";

export default function JobOpportunity() {
  return (
    <main className="w-5/6 mx-auto p-5">
      <h2 className="text-3xl font-bold mt-5 text-blue-800 text-center">
        Job Announment
      </h2>
      <div>
        {/* Similar course */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div id="job" className="grid gap-8 lg:grid-cols-2 justify-center">
            {/* course 1 */}
            <a
              href="./../Job Views/WebEssentials.html"
              className="max-w-xl bg-white overflow-hidden rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300"
            >
              {/* Text on the right side */}
              <div className="w-5/6 p-4">
                <h2
                  className="text-xl font-semibold mb-4 text-blue-800"
                  style={{ fontSize: "22px" }}
                >
                  WebEssentials{" "}
                  <span className="FontKhmer">ប្រកាសរើសបុគ្គលិក</span> Software
                  Developer...
                </h2>
                <p className="text-gray-700 FontKhmer">
                  {" "}
                  ឱកាសការងារល្អសម្រាប់ប្អូនៗ និស្សិត ឬអ្នកដែលមានបំណង...{" "}
                </p>
                {/* Icon */}
                <div className="sm:block md:inline-block text-blue-900 text-xs pt-4">
                  {/* Author */}
                  <i className="fas fa-user i-style"></i>
                  <span className="content-detail-info mr-2">boss</span>
                  {/* End Author */}
                  {/* Publish Date */}
                  <i className="fas fa-clock i-style"></i>
                  <span className="content-detail-info mr-2">23-Nov-2023</span>
                  {/* End Publish Date */}
                  {/* View */}
                  <i className="fas fa-eye i-style"></i>
                  <span className="content-detail-info mr-2">919</span>
                  {/* End View */}
                  <i className="fa fa-folder i-style mr-1"></i>
                  <span className="content-detail-info">Job Announment</span>
                </div>
              </div>
              {/* Image on the left side */}
              <div className="w-1/2 flex items-center justify-center sm:mx-auto">
                <img
                  src="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png"
                  alt="Image"
                  className="w-4/5 object-cover"
                />
              </div>
            </a>
            {/*end of course 1 */}
            {/* course 2 */}
            <a
              href="./../Job Views/Senior-Spring-Web.html"
              className="max-w-xl bg-white overflow-hidden rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300"
            >
              {/* Text on the right side */}
              <div className="w-5/6 p-4">
                <h2
                  className="text-xl font-semibold mb-4 text-blue-800"
                  style={{ fontSize: "22px" }}
                >
                  Senior Spring Web Developer
                </h2>
                <p className="text-gray-700 FontKhmer">
                  {" "}
                  ឱកាសការងារល្អសម្រាប់ប្អូនៗ និស្សិត ឬអ្នកដែលមានបំណង...{" "}
                </p>
                {/* Icon */}
                <div className="sm:block md:inline-block text-blue-900 text-xs pt-4">
                  {/* Author */}
                  <i className="fas fa-user i-style"></i>
                  <span className="content-detail-info mr-2">boss</span>
                  {/* End Author */}
                  {/* Publish Date */}
                  <i className="fas fa-clock i-style"></i>
                  <span className="content-detail-info mr-2">23-Nov-2023</span>
                  {/* End Publish Date */}
                  {/* View */}
                  <i className="fas fa-eye i-style"></i>
                  <span className="content-detail-info mr-2">919</span>
                  {/* End View */}
                  <i className="fa fa-folder i-style mr-1"></i>
                  <span className="content-detail-info">Job Announment</span>
                </div>
              </div>
              {/* Image on the left side */}
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src="https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
                  className="w-4/5 object-cover"
                />
              </div>
            </a>
            {/* end of course 2 */}
            {/* course 3 */}
            <a
              href="./../Job Views/Sky-Booking.html"
              className="max-w-xl bg-white overflow-hidden rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300"
            >
              {/* Text on the right side */}
              <div className="w-5/6 p-4">
                <h2
                  className="text-xl font-semibold mb-4 text-blue-800"
                  style={{ fontSize: "22px" }}
                >
                  Senior Java Developer in Sky Booking Co., Ltd
                </h2>
                <p className="text-gray-700 FontKhmer">
                  {" "}
                  ឱកាសការងារសម្រាប់ប្អូនៗ និស្សិត ឬអ្នកដែលមានបំណង...{" "}
                </p>
                {/* Icon */}
                <div className="sm:block md:inline-block text-blue-900 text-xs pt-4">
                  {/* Author */}
                  <i className="fas fa-user i-style"></i>
                  <span className="content-detail-info mr-2">boss</span>
                  {/* End Author */}
                  {/* Publish Date */}
                  <i className="fas fa-clock i-style"></i>
                  <span className="content-detail-info mr-2">23-Nov-2023</span>
                  {/* End Publish Date */}
                  {/* View */}
                  <i className="fas fa-eye i-style"></i>
                  <span className="content-detail-info mr-2">919</span>
                  {/* End View */}
                  <i className="fa fa-folder i-style mr-1"></i>
                  <span className="content-detail-info">Job Announment</span>
                </div>
              </div>
              {/* Image on the left side */}
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src="https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png"
                  alt="Image"
                  className="w-4/5 object-cover"
                />
              </div>
            </a>
            {/* end of course 3 */}
            {/* course 4 */}
            <a
              href="./../Job Views/ISTAD-Job.html"
              className="max-w-xl bg-white overflow-hidden rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300"
            >
              {/* Text on the right side */}
              <div className="w-5/6 p-4">
                <h2
                  className="text-xl font-semibold mb-4 text-blue-800"
                  style={{ fontSize: "22px" }}
                >
                  <span className="FontKhmer">
                    ឱកាសការងារដែលសិស្សនិស្សិតនឹង...
                  </span>
                </h2>
                <p className="text-gray-700 FontKhmer">
                  {" "}
                  តើនិស្សិតនឹងទទួលបានអ្វីខ្លះ បន្ទាប់ពីបញ្ចប់ការសិក្សានៅ
                  ISTAD?...{" "}
                </p>
                {/* Icon */}
                <div className="sm:block md:inline-block text-blue-900 text-xs pt-4">
                  {/* Author */}
                  <i className="fas fa-user i-style"></i>
                  <span className="content-detail-info mr-2">boss</span>
                  {/* End Author */}
                  {/* Publish Date */}
                  <i className="fas fa-clock i-style"></i>
                  <span className="content-detail-info mr-2">23-Nov-2023</span>
                  {/* End Publish Date */}
                  {/* View */}
                  <i className="fas fa-eye i-style"></i>
                  <span className="content-detail-info mr-2">9kl19</span>
                  {/* End View */}
                  <i className="fa fa-folder i-style mr-1"></i>
                  <span className="content-detail-info">Job Announment</span>
                </div>
              </div>
              {/* Image on the left side */}
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src="https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png"
                  alt="Image"
                  className="w-4/5 object-cover"
                />
              </div>
            </a>
            {/* end of course 4 */}
          </div>
        </div>
        {/* end of Similar course */}
      </div>
    </main>
  );
}
