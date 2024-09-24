import illustrationWorking from "./assets/illustration-working.svg";
import HeroCard from "./components/HeroCard";
function App() {
  return (
    <div className="flex flex-col items-center h-full overflow-x-hidden">
      <nav className="pt-12 flex flex-row justify-between items-center mb-32 text-grayishViolet text-lg font-bold mainWidth">
        <ul className="flex flex-row gap-9 items-center">
          <li>
            <a href="" className="text-4xl mr-2 text-veryDarkBlue">
              Shortly
            </a>
          </li>
          <li>
            <a href="" className="hover:text-veryDarkBlue">
              Features
            </a>
          </li>
          <li>
            <a href="" className="hover:text-veryDarkBlue">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="hover:text-veryDarkBlue">
              Resources
            </a>
          </li>
        </ul>
        <ul className="flex flex-row gap-8">
          <li>
            <a href="" className="hover:text-veryDarkBlue">
              Login
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white bg-cyan rounded-full py-3 px-7 hover:opacity-70"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex flex-row relative mainWidth">
        <div className="w-3/5 mb-52">
          <h1 className="text-7xl font-bold leading-tight text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="text-grayishViolet text-xl text-balance mb-14">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href=""
            className="text-white bg-cyan rounded-full text-xl py-4 px-12"
          >
            Get Started
          </a>
        </div>
        <div>
          <img
            src={illustrationWorking}
            alt=""
            className="absolute min-h-fit min-w-fit -translate-y-16 -right-72"
          />
        </div>
      </main>
      <section className="bg-slate-100 relative w-full flex flex-col items-center">
        <div className="mainWidth flex justify-center items-center bg-shorten-desktop bg-cover h-32 bg-darkViolet rounded-xl relative -top-16">
          <input type="text" className="h-12 rounded-lg mr-6 ml-16 w-full" />
          <button className="text-white bg-cyan rounded-lg py-3 px-7 hover:opacity-70 mr-16 min-w-fit">
            Shorten it!
          </button>
        </div>
        <ul className="mb-12"></ul>
        <div className="flex items-center justify-center flex-col mb-20">
          <h2 className="text-veryDarkViolet text-4xl font-bold mb-5">
            Advanced Statistics
          </h2>
          <p className="text-grayishViolet text-lg break-words text-center">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>

        <div
          className="grid gap-x-8 grid-cols-3 grid-rows-8 mainWidth h-[25rem] mb-52
        after:content-[''] after:border-4 after:border-cyan after:block after:h-0 after:col-span-3 after:-translate-y-56 after:z-0"
        >
          <HeroCard
            rowStart="row-start-1"
            imgSrc="/icon-brand-recognition.svg"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links 
            don't mean a thing. Branded links help instil confidence in your content."
          />
          <HeroCard
            rowStart="row-start-2"
            imgSrc="/icon-detailed-records.svg"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when 
            and where people engage with your content helps inform better decisions."
          />
          <HeroCard
            rowStart="row-start-3"
            imgSrc="/icon-fully-customizable.svg"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through 
            customizable links, supercharging audience engagement."
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full bg-boost-desktop bg-cover bg-darkViolet">
        <h2 className="mb-10 mt-16 text-3xl text-white">Boost your links today!</h2>
        <a
          href=""
          className="text-white bg-cyan rounded-full text-xl py-4 px-12 mb-16"
        >
          Get Started
        </a>
      </section>
      
    </div>
  );
}

export default App;
