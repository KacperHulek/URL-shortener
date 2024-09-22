import illustrationWorking from "./assets/illustration-working.svg";

function App() {
  return (
    <>
      <nav className="pt-12 px-36 flex flex-row justify-between items-center mb-32 text-grayishViolet text-lg font-bold">
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
      <main className="px-36 flex flex-row relative">
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
            className="text-white bg-cyan rounded-full text-2xl py-4 px-12 "
          >
            Get Started
          </a>
        </div>
        <div>
          <img
            src={illustrationWorking}
            alt=""
            className="absolute min-h-fit min-w-fit -translate-y-16 -right-32"
          />
        </div>
      </main>
      <div className="bg-slate-100 px-36 relative">
        <div className="flex justify-center items-center bg-shorten-desktop bg-cover h-32 w-full bg-darkViolet rounded-xl relative -top-16">
          <input type="text" className="h-12 rounded-lg mr-6 ml-16 w-full"/>
          <button className="text-white bg-cyan rounded-lg py-3 px-7 hover:opacity-70 mr-16 min-w-fit">Shorten it!</button>
        </div>
        <ul className="mb-12"></ul>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-veryDarkViolet text-3xl">Advanced Statistics</h2>
          <p className="text-grayishViolet text-lg">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
