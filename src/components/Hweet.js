import { dbService } from "fbase";
import React, { useState } from "react";

function Hweet({ hweetObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [newHweet, setNewHweet] = useState(hweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this hweet?");

    if (ok) {
      await dbService.doc(`hweets/${hweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  return (
    <div>
      {editing ? (
        <>
          <form>
            <input
              type="text"
              placeholder="Edit your hweet"
              defaultValue={newHweet}
              required
            />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{hweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Hweet</button>
              <button onClick={toggleEditing}>Edit Hweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Hweet;
