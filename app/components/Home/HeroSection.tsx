
import Image from "next/image";

const HeroSection = () => {
  return (
    
      <section className="grid grid-cols-1 lg:grid-cols-2 py-12 space-y-6">
        <div className="space-y-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Your Travel & Destination Management Partner
          </h1>
          <button className="px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300">
            Find out more{" "}
          </button>
        </div>
        <div
          className="hidden md:block relative h-48 md:h-[40vh] bg-no-repeat bg-cover w-full"
          style={{
            backgroundImage: `url(/imgs/v-a-waterfront.jpg)`,
          }}
        >
          <div className="absolute top-2 right-1 w-56 h-72">
            <Image
              src="/imgs/penguin.png"
              width={418}
              height={597}
              alt="hero1"
            />
          </div>
        </div>
      </section>
   
  );
};

export default HeroSection;
