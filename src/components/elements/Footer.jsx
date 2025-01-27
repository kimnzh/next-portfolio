const Footer = () => {
  return (
    <div className="w-full h-16 min-[584px]:h-24 xl:p-12 flex max-xl:flex-col justify-center xl:justify-between items-center border-primary-dark dark:border-white border-t-2 bg-primary dark:bg-primary-dark">
      <div className="text-[10px] min-[584px]:text-base md:text-xl text-primary-dark dark:text-white">
        Created by{" "}
        <span className="font-bold text-primary-dark dark:text-white">
          Muhamad Hakim Nizami
        </span>{" "}
        © 2025 - All Rights Reserved
      </div>
      <div className="text-[10px] min-[584px]:text-sm md:text-lg text-primary-dark dark:text-white">
        Designed and developed with love by me.
      </div>
    </div>
  );
};

export default Footer;
