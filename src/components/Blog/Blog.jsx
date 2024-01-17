import PropTypes from 'prop-types';
import { IoBookmarksOutline } from 'react-icons/io5';
const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    cover_img,
    author_img,
    title,
    id,
    author,
    hashtags,
    reading_time,
    post_date,
  } = blog;
  return (
    <div key={id} className="mb-10">
      <div className="w-full rounded-xl">
        <img
          className="w-full rounded-xl h-[450px]"
          src={cover_img}
          alt={title}
        ></img>
      </div>
      <div className="flex justify-between items-center  py-2">
        <div className="flex gap-x-2 items-center">
          <div className="w-14 rounded-full border border-red-600">
            <img className="w-full rounded-full" src={author_img}></img>
          </div>
          <div>
            <h1 className="font-bold">{author}</h1>
            <h1 className="font-semibold">{post_date}</h1>
          </div>
        </div>
        <div className="font-bold">
          <span>{reading_time} min red</span>
          <button onClick={() => handleBookmark(blog)} className="ml-2">
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold">
        {title} Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </h2>
      <p className="my-3">{hashtags}</p>
      <button
        className="underline text-blue-600"
        onClick={() => handleReadingTime(id, reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func,
};
export default Blog;
