import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-between px-12 py-6 bg-yellow-200 font-concert text-2xl">
      <div>Logo</div>
      <div className="flex gap-7">
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
    </nav>
  );
};

export default Navbar;
