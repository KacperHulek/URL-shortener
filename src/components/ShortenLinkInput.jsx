import React, { useState } from "react";
import LinkList from "./LinkList";

const ShortenLinkInput = ({ LinkList }) => {
  const [link, setLink] = useState("");
  const [linkArr, setLinkArr] = useState([]);
  const [shortenedLink, setShortenedLink] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortenedLink("");

    if (!link) {
      setError("Please enter a URL to shorten.");
      return;
    }

    const data = { long_url: link };
    // console.log(import.meta.env.VITE_API_KEY);
    // response.link = shortened link

    // try {
    //   const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }

    //   const result = await res.json();
    //   setShortenedLink(result.link);
    //   setLinkArr([...linkArr, result.link]);
    //   //   rerender list of links whenever a change to the array happens
    // } catch (error) {
    //   console.error("Error:", error);
    //   setError(
    //     "An error occurred while shortening the link. Please try again."
    //   );
    // }

    setLinkArr([...linkArr, { value: link }]);
    console.log(linkArr);
  };

  return (
    <>
      <div className="mainWidth flex justify-center items-center bg-shorten-desktop bg-cover h-32 bg-darkViolet rounded-xl relative -top-16">
        {/* input validation needed. */}
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center w-full"
        >
          <input
            type="url"
            className="pl-5 h-12 rounded-lg mr-6 ml-16 w-full"
            placeholder="Shorten a link here..."
            onChange={handleInputChange}
            value={link}
            required
          />
          <button
            type="submit"
            className="text-white bg-cyan rounded-lg  mr-16 min-w-fit py-3 px-7 hover:brightness-110"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <ul className="mb-12">
        {linkArr.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span className="text-gray-700">{item.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShortenLinkInput;
