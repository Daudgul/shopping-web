import { HandymanTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const takeToProductDetail = (id: number) => {
    router.push(`products/${id}`);
  };

  return (
    <div
      onClick={() => takeToProductDetail(id)}
      className="group w-[270px] h-[350px] cursor-pointer  "
    >
      <div className=" flex w-[247px] items-center justify-center h-[244px]  bg-[#f7f8f7] flex-col  ">
        <img
          src={imgUrl}
          alt="product"
          className="w-[187px] h-[187px] object-contain group-hover:scale-110 duration-200"
        />
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

{
  /* <Button
          disableElevation
          href="/products"
          variant="contained"
          sx={{ textTransform: "capitalize", mt: "-18px" }}
        >
          Shop Now
        </Button> */
}
