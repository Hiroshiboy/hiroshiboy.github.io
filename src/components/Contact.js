import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="relative m-0">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center m-0">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative m-0">
          <div className="relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 p-1 text-white">
                8-60 Hanson Road <br />
                Mississauga, ON L5B 2P6
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-1">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="text-white leading-relaxed mt-1 p-1">
                neil.hiroshi.sano@gmail.com
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1 p-1">
                PHONE
              </h2>
              <p className="leading-relaxed text-white mt-1 p-1">647-985-2725</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
