import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-7xl font-bold">Creative Blogging Agency.</h1>
        <p className="text-xl text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          deleniti expedita quo sapiente cupiditate in nihil temporibus cum
          praesentium voluptatibus.
        </p>
        <div className="flex gap-5">
          <button className="p-3 bg-btn rounded-lg font-semibold">
            Learn More
          </button>
          <button className="p-3 bg-gray-600 rounded-lg font-semibold">
            Contact
          </button>
        </div>
        <div>
          <Image src="/brands.png" alt="" width={400} height={200} />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
