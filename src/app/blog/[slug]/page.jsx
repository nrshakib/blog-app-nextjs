import Image from "next/image";

const SinglePost = () => {
  return (
    <div className="flex gap-8">
      <div>
        <Image
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Title</h1>
        <div className="flex gap-3">
          <Image
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="mr-4">
            <p className="text-xs text-gray-400">Author</p>
            <p className="font-semibold text-gray-300">NR Shakib</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="font-semibold text-gray-300">01.01.2024</p>
          </div>
        </div>
        <div className="mt-8 w-4/5">
          Post Details: Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ea iusto a, totam reiciendis ipsum minus corrupti earum
          blanditiis tempora praesentium!
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
