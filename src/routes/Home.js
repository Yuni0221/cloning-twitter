import React, { useState } from "react";

function Home() {
  const [hweet, setHweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {};
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Hweet" />
      </form>
    </div>
  );
}

export default Home;
