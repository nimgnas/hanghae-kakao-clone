import { useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

function ProfileHeader() {
  const [isFavToggle, setFavToggle] = useState(true);
  const onClickFav = () => {
    setFavToggle(!isFavToggle);
  };
  return (
    <div className="top">
      <div className="fav" onClick={onClickFav}>
        {isFavToggle ? (
          <IoHeartCircleOutline color="white" size={25} />
        ) : (
          <IoHeartCircleOutline color="yellow" size={25} />
        )}
      </div>
      <div className="close">
        <AiOutlineClose color="white" />
      </div>
    </div>
  );
}

export default ProfileHeader;
