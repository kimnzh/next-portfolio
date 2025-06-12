"use client";
import Animated from "@/components/ui/Animated";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="pb-24 pt-20 sm:pt-[118px] md:pb-36 xl:pt-[204px]"
    >
      <Animated
        direction="left"
        className="mb-4 w-full text-start text-4xl font-semibold text-primary-dark underline dark:text-white max-xl:py-2 xl:mb-8 xl:text-5xl"
      >
        Reach me out!
      </Animated>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="7ede9b55-1666-4385-bc95-e49453223972"
        />
        <Animated className="relative grid w-full grid-cols-2 gap-6 rounded-[24px] border-2 border-primary-dark bg-primary p-[42px_24px_24px] dark:border-white dark:bg-primary-dark md:grid-cols-[1fr_2fr] md:gap-8 md:rounded-[36px] md:p-[56px_32px_32px]">
          <div className="relative">
            <input
              required
              type="text"
              name="name"
              placeholder=""
              className="peer h-8 w-full rounded-[8px] border-2 border-primary-dark bg-white px-3 py-2 text-lg md:h-10 md:rounded-[10px]"
            />
            <span className="placeholder">Name</span>
          </div>
          <div className="relative">
            <input
              required
              type="email"
              name="email"
              placeholder=""
              className="peer h-8 w-full rounded-[8px] border-2 border-primary-dark bg-white px-3 py-2 text-lg md:h-10 md:rounded-[10px]"
            />
            <span className="placeholder">Email</span>
          </div>
          <div className="relative max-md:col-span-2">
            <input
              type="text"
              name="subject"
              placeholder=""
              className="peer h-8 w-full rounded-[8px] border-2 border-primary-dark bg-white px-3 py-2 text-lg md:h-10 md:rounded-[10px]"
            />
            <span className="placeholder">Subject</span>
          </div>
          <div className="relative col-span-2 row-start-3 md:col-start-2 md:row-span-3 md:row-start-1">
            <textarea
              required
              name="message"
              placeholder=""
              className="peer h-48 w-full rounded-[8px] border-2 border-primary-dark bg-white px-3 py-2 text-lg md:h-full md:rounded-[10px]"
            />
            <span className="placeholder">Message</span>
          </div>
          <button
            type="submit"
            className="button h-8 rounded-[8px] border-2 text-lg max-md:col-span-2 md:h-10 md:rounded-[10px]"
          >
            Send
          </button>
          <div className="flex items-center text-xl text-primary-dark dark:text-white max-md:col-span-2 max-md:row-start-4 max-md:-my-2 max-md:text-center">
            Feel free to message me!
          </div>
        </Animated>
      </form>
    </section>
  );
};

export default ContactSection;
