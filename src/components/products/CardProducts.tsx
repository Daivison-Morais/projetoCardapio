import { NextPage } from "next";
type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  promotion: boolean;
  price: number;
  categoryId: string;
  menusId: string;
};
const CardProduct: NextPage<Product> = ({
  id,
  name,
  image,
  description,
  price,
  menusId,
  promotion,
  categoryId,
}) => {
  return (
    <div className=" flex flex-col justify-between items-center   max-h-56 m-2 p-1 border border-gray-300 rounded-lg shadow-md bg-white cursor-pointer min-w-[125px] max-w-[240px]">
      <img
        src={image}
        alt={name}
        className="object-cover mb-2 max-h-[50%] "
      />
      <div className="text-sm text-black/80 font- font-semibold text-center">
        {name}
      </div>
      <div className="text-xs text-black/60 text-center max-h-16 mb-2 overflow-hidden">
        {description}
      </div>
      <div className="font-semibold text-black/60 text-sm">
        {(price / 100).toFixed(2)} R$
      </div>
    </div>
  );
};

export default CardProduct;
