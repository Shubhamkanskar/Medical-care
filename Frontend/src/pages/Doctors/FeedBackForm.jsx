import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedBackForm = () => {
  const [rating, setrating] = useState(0);
  const [hover, setHover] = useState(0);
  const [setReview, setReviewText] = useState(0);
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    //late we will call our api
  };

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] font-semibold mb-4">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index + 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-400"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setrating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(index)}
                onDoubleClick={() => {
                  setHover(0);
                  setrating(0);
                }}
              >
                <span>
                  <AiFillStar></AiFillStar>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className=" border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write a Message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmitReview} className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedBackForm;
