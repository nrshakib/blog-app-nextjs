import Image from "next/image";
import Link from "next/link";

const PostCart = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex gap-16">
        <div className="w-4/5 relative">
          <Image
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <span className="text-sm w-1/5 transform -rotate-90">01.01.2024</span>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-5">Title</h1>
        <p className="mb-3 text-gray-400 w-4/5">Desc: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut et distinctio laborum porro blanditiis fugit beatae alias voluptatem nesciunt.</p>
        <Link className="underline text-btn" href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCart;
