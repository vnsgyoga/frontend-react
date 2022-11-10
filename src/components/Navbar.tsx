import React from "react";

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div className="flex">Navbar</div>
    </div>
  );
};

export default Navbar;
