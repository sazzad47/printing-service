import { Typography } from "@mui/material";
import React from "react";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useGetProductsQuery } from "../../state/api/product";
import { Oval } from "react-loader-spinner";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery({});
  console.log('products', data)
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <Oval
            height={30}
            width={30}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="w-full h-auto px-[5rem] my-[3rem] py-[3rem] bg-white">
          <div className="w-full flex flex-col gap-[3rem]">
            <div>
              <h3 className="text-5xl font-bold text-center text-fuchsia-900">
                Our Products
              </h3>
              <h3 className="text-2xl font-medium text-center text-pink-600 mt-2">
                Choose the best available products on the market
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div
                style={{ borderBottom: "2px solid #701a75" }}
                className="w-full auto p-5 flex flex-col gap-5 bg-pink-100 items-center"
              >
                <BiSolidSelectMultiple className="text-fuchsia-900 text-6xl" />
                <Typography className="text-2xl font-bold text-pink-700">
                  Select your options
                </Typography>
              </div>
              {data.map((item, index) => (
                <div
                 key={index}
                  style={{ borderBottom: "2px solid #701a75" }}
                  className="w-full auto p-5 flex flex-col gap-5 bg-pink-100 items-center"
                >
                  <BsFillCartCheckFill className="text-fuchsia-900 text-6xl" />
                  <Typography className="text-2xl font-bold text-pink-700">
                    Add to cart
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
