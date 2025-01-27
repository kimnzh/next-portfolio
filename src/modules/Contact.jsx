const Contact = () => {
  return (
    <section className="pt-20 sm:pt-[118px] xl:pt-[204px] pb-24 md:pb-36">
      <div className="w-full text-start underline text-4xl xl:text-5xl max-xl:py-2 font-semibold text-primary-dark dark:text-white mb-4 xl:mb-8">
        Reach Me Out!
      </div>
      <div className="relative w-full grid gap-4 min-[486px]:gap-6 md:gap-8 grid-cols-2 md:grid-cols-[1fr_2fr] bg-primary dark:bg-primary-dark border-2 border-primary-dark dark:border-white rounded-[24px] min-[486px]:rounded-[36px] p-[28px_16px_16px] min-[486px]:p-[56px_32px_32px]">
        <div className="relative">
          <input
            type="text"
            placeholder=""
            className="bg-white peer h-6 min-[486px]:h-8 md:h-10 w-full text-sm min-[486px]:text-lg py-2 px-3 rounded-[8px] md:rounded-[10px] border-2 border-primary-dark"
          />
          <span className="placeholder">Name</span>
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder=""
            className="bg-white peer h-6 min-[486px]:h-8 md:h-10 w-full text-sm min-[486px]:text-lg py-2 px-3 rounded-[8px] md:rounded-[10px] border-2 border-primary-dark"
          />
          <span className="placeholder">Email</span>
        </div>
        <div className="relative max-md:col-span-2">
          <input
            type="text"
            placeholder=""
            className="bg-white peer h-6 min-[486px]:h-8 md:h-10 w-full text-sm min-[486px]:text-lg py-2 px-3 rounded-[8px] md:rounded-[10px] border-2 border-primary-dark"
          />
          <span className="placeholder">Subject</span>
        </div>
        <div className="relative col-span-2 md:row-span-3 row-start-3 md:col-start-2 md:row-start-1">
          <textarea
            placeholder=""
            className="peer h-48 md:h-full w-full bg-white text-sm min-[486px]:text-lg py-2 px-3 rounded-[8px] md:rounded-[10px] border-2 border-primary-dark"
          />
          <span className="placeholder">Message</span>
        </div>
        <button className="h-6 min-[486px]:h-8 md:h-10 text-sm min-[486px]:text-lg button border-2 rounded-[8px] md:rounded-[10px] max-md:col-span-2">
          Send
        </button>
        <div className="flex items-center min-[486px]:text-xl text-primary-dark max-md:col-span-2 max-md:row-start-4 max-md:-my-0 max-md:text-center dark:text-white">
          Feel free to message me!
        </div>
      </div>
    </section>
  );
};

export default Contact;
