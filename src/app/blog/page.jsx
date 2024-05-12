import PostCart from "@/components/postCard/PostCart";

const Blog = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3">
        <PostCart />
      </div>
      <div className="w-1/3">
        <PostCart />
      </div>
      <div className="w-1/3">
        <PostCart />
      </div>
      <div className="w-1/3">
        <PostCart />
      </div>
    </div>
  );
};

export default Blog;
