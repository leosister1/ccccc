import { useNavigate } from "react-router-dom";

const Place = ({ _id, placeName, desc, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className=" place-container grid grid-cols-5 h-1/5 rounded-lg py-3 hover:cursor-pointer"
      onClick={() => navigate(`/place/${_id}`)}
    >
      <div className="image col-span-1 rounded-lg bg-base-200 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt={`${placeName} 업체사진`}
        />
      </div>
      <div className="desc col-span-3 rounded-lg ml-3">
        <p className="place-name font-bold mb-1">{placeName}</p>
        <p className="place-desc text-xs text-base-300 truncate">{desc}</p>
      </div>
    </div>
  );
};

export default Place;