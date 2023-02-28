import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Hweet from "../components/Hweet";
import HweetFactory from "../components/HweetFactory";

function Home({ userObj }) {
  const [hweets, setHweets] = useState([]);

  useEffect(() => {
    dbService.collection("hweets").onSnapshot((snapshot) => {
      const hweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHweets(hweetArray);
    });
  }, []);

  return (
    <div>
      <HweetFactory userObj={userObj} />
      <div>
        {hweets.map((hweet) => (
          <Hweet
            key={hweet.id}
            hweetObj={hweet}
            isOwner={hweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
