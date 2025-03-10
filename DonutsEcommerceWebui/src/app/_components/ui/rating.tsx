import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
interface Props {
  star: number;
}
export const StarRating: React.FC<Props> = ({ star }) => {
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="w-6 h-6 text-[#FFC633] " />
        ) : star >= number ? (
          <FaStarHalfStroke className="w-6 h-6 text-[#FFC633]" />
        ) : (
          <FaRegStar className="w-6 h-6 text-[#FFC633] " />
        )}
      </span>
    );
  });
  return <div className="flex">{rating}</div>;
};
