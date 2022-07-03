import { HandymanTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  oldPrise: number;
  rating: number;
  details: string;
};

const TrendingPCard = ({
  id,
  title,
  oldPrise,
  price,
  imgUrl,
}: StoreItemProps) => {
  return (
    <div className="group ">
      <div className=" flex bg-[#f7f8f7] flex-col ">
        <img
          src={imgUrl}
          alt="product"
          className="w-[220px] h-[250px] scale-90 object-contain"
        />
        <Button
          disableElevation
          href="/products"
          variant="contained"
          sx={{ textTransform: "capitalize", mt: "-18px" }}
        >
          Shop Now
        </Button>
      </div>
      <div className=" mt-3 flex flex-col items-center  text-[#151875] ">
        <h3>{title}</h3>
        <h3>
          ${price}.00
          <span className=" text-xs text-[#ada9ab] line-through">
            ${oldPrise}.00
          </span>
        </h3>
      </div>
    </div>
  );
};

export default TrendingPCard;
