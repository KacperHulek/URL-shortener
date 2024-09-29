import React, { useState } from "react";

const ShortenLinkInput = () => {
  const [link, setLink] = useState("");
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { domain: "bit.ly", long_url: link };
    // console.log(import.meta.env.VITE_API_KEY);
    // response.link = shortened link

    try {
      const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mainWidth flex justify-center items-center bg-shorten-desktop bg-cover h-32 bg-darkViolet rounded-xl relative -top-16">
      {/* input validation needed. */}
      <input
        type="text"
        className="pl-5 h-12 rounded-lg mr-6 ml-16 w-full"
        placeholder="Shorten a link here..."
        onChange={handleInputChange}
        value={link}
      />
      <button
        onClick={handleSubmit}
        className="text-white bg-cyan rounded-lg  mr-16 min-w-fit py-3 px-7 hover:brightness-110"
      >
        Shorten it!
      </button>
    </div>
  );
};

export default ShortenLinkInput;
