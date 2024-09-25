import React from "react";

const NavLinkItem = ({ content, url }) => {
  return (
    <li>
      <a href={url} className="hover:text-veryDarkBlue">
        {content}
      </a>
    </li>
  );
};

export default NavLinkItem;
