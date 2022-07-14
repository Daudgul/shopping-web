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
      className="group h-[310px] w-[250px] md:w-[210px] md:h-[280px] xl:w-[270px] xl:h-[350px] cursor-pointer  "
    >
      <div className=" h-[244px] w-[247px] md:w-[200px] md:h-[200px] flex xl:w-[247px] items-center justify-center xl:h-[244px]  bg-[#f7f8f7] flex-col  ">
        <img
          src={imgUrl}
          alt="product"
          className="w-[140px] h-[140px]  lg:w-[187px] lg:h-[187px] object-contain group-hover:scale-110 duration-200"
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
