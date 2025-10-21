import bg from "../assets/mission-image.jpg";

export default function Mission() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="overlay bg-black/20 md:px-[3rem] px-[2rem] md:py-[5rem] py-[4rem] h-[80vh]">
          <header className="flex flex-col items-center justify-center text-center gap-2 md:gap-6">
            <h1 className="text-3xl md:text-5xl text-white capitalize font-semibold">
              our missions
            </h1>
          </header>

          <section className="flex flex-col items-start justify-center gap-6 md:mt-20 mt-10 mx-auto w-[90%] md:w-[40%]">
            <div className="mission flex items-start gap-5 flex-1 md:flex-[.5]">
              <div className="bar w-4 h-20 bg-yellow-500"></div>
              <div className="text text-white font-thin md:font-medium w-full md:w-[80%]">
                Leading the Revolution with Cutting-Edge Technology and
                Innovative Solutions for a Better Tomorrow.
              </div>
            </div>
            <div className="mission flex items-start gap-5 flex-1 md:flex-[.5]">
              <div className="bar w-4 h-20 bg-white"></div>
              <div className="text text-white font-thin md:font-medium w-full md:w-[80%]">
                Empowering the next generation of tech leaders and bridging the
                digital divide by offering widespread access to top-tier
                technology training for all.
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
