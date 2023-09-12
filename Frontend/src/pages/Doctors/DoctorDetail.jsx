import { useState } from "react";
import doctorIng from "../../assets/images/doctor-img01.png";
import StarIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import FeedBack from "./FeedBack";
import Sidepanel from "./Sidepanel";

const DoctorDetail = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorIng} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgion
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Rahul k
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className="flex items-center gap[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={StarIcon} alt="" /> 4.8
                  </span>
                  <span className=" text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (275)
                  </span>
                </div>
                <p className="text-para text[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  error laborum iure repellendus facilis.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                }py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="my-[50px] ">
              {tab === "about" && <DoctorAbout></DoctorAbout>}
              {tab === "about" && <FeedBack />}
            </div>
          </div>
          <div>
            <Sidepanel></Sidepanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetail;
