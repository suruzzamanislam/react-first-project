import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <div>
        {blogs.map(blog => (
          <Blog
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
            handleReadingTime={handleReadingTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func,
};

export default Blogs;
