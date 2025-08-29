import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-1/3 shadow-md shadow-gray-600 flex justify-between items-center font-bold text-3xl text-blue-700">
      <ul className="flex gap-6">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/project">PROJECT</Link></li>
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
