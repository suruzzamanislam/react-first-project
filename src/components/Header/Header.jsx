import Profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <header className="px-24 mb-6">
      <div className="flex justify-between py-2 items-center border-b-2  pb-3">
        <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
        <img src={Profile}></img>
      </div>
    </header>
  );
};

export default Header;
