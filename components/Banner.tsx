function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Curry Coder</h1>
        <h2 className="mt-5 md:mt-0 py-2">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#8e6f47]">
            Curry Coder
          </span>
          , my personal blog
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Technology | Motivation | Sports | Life
      </p>
    </div>
  );
}

export default Banner;
