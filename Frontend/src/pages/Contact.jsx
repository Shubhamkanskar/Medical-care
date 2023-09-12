const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center"> Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-para">
          Got a technical issue? want to send feedback about a beta feature ?
          let us know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gamil.com"
                className="Form__input mt-1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
              <input
                type="text"
                id="subject"
                placeholder="Let us Know how we can help you"
                className="Form__input mt-1"
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your message
              <textarea
                rows="6"
                type="text"
                id="message"
                placeholder="Leave a Comment...."
                className="Form__input mt-1"
              ></textarea>
            </label>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
