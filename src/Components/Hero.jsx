import TrueFocus from "../animation/TrueFocus";
import ProfileCard from "../animation/ProfileCard";
import AshProfile1 from "../assets/AshProfile1.png";


function Hero() {
  return (
    <>
      <section className="bg-[#0d1b2a] p-5 mt-10 md:mt-0 text-[#fdfcdc]">

        <div className="grid max-w-7xl mx-auto h-auto min-h-screen px-4 py-16 grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-10">
          <div className="flex flex-col text-center sm:justify-center md:text-left gap-5">
            <h2 className="font-semibold text-4xl text-start sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hello, I'm
              
            </h2>
              <TrueFocus
                sentence="Ashraf Pathan"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            <p className="text-base text-start sm:text-lg md:text-xl leading-relaxed">
              I design and develop websites with precision, performance, and
              purpose. But I also whisper to data, make sense of the mission.
              From clean code to clear insights, I bridge the divide, where
              logic meets design, and numbers don’t hide. A developer by
              passion, an analyst by skill. I turn chaos into clarity, and ideas
              into will.
            </p>
            <button className="w-fit p-5  !bg-[#fdfcdc] text-[#0d1b2a] liquid">
              Say Hello!
            </button>
          </div>

          {/* Right Content */}
          <div className="w-full flex justify-center">
            <ProfileCard
              name="Ashraf Pathan"
              title="Web Developer"
              handle="Ashxaf"
              status="Online"
              contactText="Contact Me"
              avatarUrl={AshProfile1}
              miniAvatarUrl={AshProfile1}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
