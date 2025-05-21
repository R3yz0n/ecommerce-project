import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img src={LOGO_URL} alt="" className="w-20 h-20" />
      </div>
      <div className="flex justify-between list-none w-96">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </div>
      <div>Cart</div>
    </header>
  );
};
export default Header;
