import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="relative m-0">
      <div className="container px-5 py-32 mx-auto flex sm:flex-nowrap flex-wrap justify-center m-0">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative m-0">
          <div className="relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1 pl-1">
                ADDRESS
              </h2>
              <p className="mt-1 p-1 text-white">
                8-60 Hanson Road <br />
                Mississauga, ON L5B 2P6
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1 pl-1">
                LINKEDIN
              </h2>
              <a href="https://ca.linkedin.com/in/neil-sano-7480591b9?trk=profile-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin mt-1 pl-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-1">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs pl-1">
                EMAIL
              </h2>
              <p className="text-white leading-relaxed mt-1 p-1">
                neil.hiroshi.sano@gmail.com
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1 p-1">
                PHONE
              </h2>
              <p className="leading-relaxed text-white mt-1 pl-1">
                647-985-2725
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
