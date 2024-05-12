import Image from "next/image";

const About = () => {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-xl font-bold text-btn">About Agency</h2>
        <h1 className="text-4xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed
          nobis repellat ullam, officia atque, quae mollitia eaque, repellendus
          commodi suscipit dolorum doloribus eveniet deleniti. Eveniet est
          placeat facere natus.
        </p>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-btn">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-btn">234 K+</h1>
            <p>People Reached</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-btn">5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image src="/about.png" alt="" width={500} height={200} />
      </div>
    </div>
  );
};

export default About;
