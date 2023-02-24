import React from "react";

function Home() {
  const onSubmit = (event) => {
    event.preventDefault();
  };
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
