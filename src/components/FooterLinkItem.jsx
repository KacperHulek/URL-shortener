import React from "react";

const FooterLinkItem = ({ content, url }) => {
  return (
    <li className="mb-2">
      <a href={url} className="hover:text-cyan text-gray">
        {content}
      </a>
    </li>
  );
};

export default FooterLinkItem;
