const Footer = () => {
  return (
    <div className="flex h-16 w-full items-center justify-center border-t-2 border-primary-dark bg-primary dark:border-white dark:bg-primary-dark max-xl:flex-col min-[584px]:h-24 xl:justify-between xl:p-12">
      <div className="text-[10px] text-primary-dark dark:text-white min-[584px]:text-base md:text-xl">
        Created by{" "}
        <span className="font-bold text-primary-dark dark:text-white">
          Muhamad Hakim Nizami
        </span>{" "}
        © 2025 - All Rights Reserved
      </div>
      <div className="text-[10px] text-primary-dark dark:text-white min-[584px]:text-sm md:text-lg">
        Designed and developed with love by me.
      </div>
    </div>
  );
};

export default Footer;
