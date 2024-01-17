import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <h2 className="p-6 text-2xl bg-gray-200 rounded-xl mb-2">
        Reading Time: {readingTime}
      </h2>
      <div className="bg-gray-300 rounded-xl  p-6">
        {bookmarks.map(bookmark => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
