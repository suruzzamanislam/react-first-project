import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="w-full  bg-gray-50 p-2 rounded-md mb-2">
      <h2 className="text-2xl">
        {title} Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Natus!
      </h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
