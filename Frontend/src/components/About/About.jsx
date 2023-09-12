import aboutimg from "../../assets/images/about.png";
import aboutCardimg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutimg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22px]">
              <img src={aboutCardimg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading"> Proud to be one of the nations best </h2>
            <p className="text-para">
              For 30 year of Experince in a row ,Indian News & World Report has
              recognzed us a one of the best public hospitals in the natuin and
              #1 in Pune
            </p>
            <p className="text-para mt-[30px]">
              Indian News & World Report has recognzed us a one of the best
              public hospitals in the natuin and #1 in Pune
            </p>
            <Link to="/">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
