import illustrationWorking from "./assets/illustration-working.svg";
import FooterLinkItem from "./components/FooterLinkItem";
import HeroCard from "./components/HeroCard";
import NavLinkItem from "./components/NavLinkItem";
import ShortenLinkInput from "./components/ShortenLinkInput";
import SocialLinkItem from "./components/SocialLinkItem";
function App() {
  return (
    <div className="flex flex-col items-center h-full overflow-x-hidden">
      <nav className="pt-12 flex flex-row justify-between items-center mb-32 text-grayishViolet text-base font-bold mainWidth">
        <ul className="flex flex-row gap-9 items-center">
          <li>
            <h2 className="text-4xl mr-2 text-veryDarkBlue">Shortly</h2>
          </li>
          <NavLinkItem content="Features" url="" />
          <NavLinkItem content="Pricing" url="" />
          <NavLinkItem content="Resources" url="" />
        </ul>
        <ul className="flex flex-row gap-8">
          <NavLinkItem content="Login" url="" />
          {/* See if optional prop is possible */}
          <li>
            <a
              href=""
              className="text-white bg-cyan rounded-full py-2 px-5 hover:brightness-110"
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
            className="text-white bg-cyan rounded-full text-xl py-3 px-10 hover:brightness-110"
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
        <ShortenLinkInput />
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
        <h2 className="mb-10 mt-16 text-4xl text-white font-bold">
          Boost your links today!
        </h2>
        <a
          href=""
          className="text-white bg-cyan rounded-full text-xl py-4 px-12 mb-16 hover:brightness-110"
        >
          Get Started
        </a>
      </section>
      <footer className="w-full bg-veryDarkViolet flex justify-center pt-16 pb-6">
        <div className="flex flex-row justify-end mainWidth">
          <h2 className="text-4xl mr-56 text-white font-bold">Shortly</h2>
          <div className="flex flex-row justify-between w-full">
            <ul>
              <li>
                <h3 className="text-white font-bold mb-6">Features</h3>
              </li>
              <FooterLinkItem content="Link Shortening" url="" />
              <FooterLinkItem content="Branded Links" url="" />
              <FooterLinkItem content="Analytics" url="" />
            </ul>
            <ul>
              <li>
                <h3 className="text-white font-bold mb-6">Resources</h3>
              </li>
              <FooterLinkItem content="Blog" url="" />
              <FooterLinkItem content="Developers" url="" />
              <FooterLinkItem content="Support" url="" />
            </ul>
            <ul>
              <li>
                <h3 className="text-white font-bold mb-6">Company</h3>
              </li>
              <FooterLinkItem content="About" url="" />
              <FooterLinkItem content="Our Team" url="" />
              <FooterLinkItem content="Careers" url="" />
              <FooterLinkItem content="Contact" url="" />
            </ul>
            <ul className="flex flex-row">
              <SocialLinkItem type="facebook" url="" />
              <SocialLinkItem type="instagram" url="" />
              <SocialLinkItem type="pinterest" url="" />
              <SocialLinkItem type="twitter" url="" />
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
