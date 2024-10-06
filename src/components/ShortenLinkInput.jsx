import React, { useState } from "react";
import LinkList from "./LinkList";
// TODO: change the name of this component to ShortenLinkSection or something similar
// TODO: implement custom url validator
// TODO: change the fetched url in handleSubmit

const ShortenLinkInput = ({ LinkList }) => {
  const [link, setLink] = useState("");
  const [linkArr, setLinkArr] = useState([]);
  const [shortenedLink, setShortenedLink] = useState("");
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const baseUrl = "https://localhost:7143/api/UrlShortener/";

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

    try {
      const res = await fetch(`${baseUrl}shortenUrl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          originalUrl: link,
        }),
      });
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || `HTTP error! status: ${res.status}`);
      }

      const result = await res.json();

      setLinkArr([
        ...linkArr,
        {
          original: result.originalUrl,
          shortened: baseUrl + result.shortCode,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while shortening the link. Please try again."
      );
    }
  };

  const handleCopy = (index, shortenedLink) => {
    navigator.clipboard.writeText(shortenedLink);
    setCopiedIndex(index);
    // setTimeout(() => setCopiedIndex(null), 3000);
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
      <ul className="mb-12 mainWidth relative -top-10">
        {linkArr.map((item, index) => (
          <li
            key={index}
            className="bg-white p-4 mb-4 rounded-sm shadow-sm flex justify-between items-center"
          >
            <span className="text-veryDarkViolet">{item.original}</span>
            <div>
              <span className="text-cyan mr-5">{item.shortened}</span>
              <button
                className={`text-white text-sm rounded-md mr-5 min-w-fit py-2 w-24 ${
                  copiedIndex === index
                    ? "bg-darkViolet"
                    : "bg-cyan hover:brightness-110"
                }`}
                onClick={() => handleCopy(index, item.shortened)}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShortenLinkInput;
