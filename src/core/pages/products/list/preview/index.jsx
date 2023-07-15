import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useGetProductQuery } from "../../../../state/api/product";
import { Oval } from "react-loader-spinner";
import Description from "./description";
import Features from "./features";
import SideNote from "./sidenote";
import Service from "./service";

const Preview = () => {
  const params = useParams();
  const { id } = params;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("service");

  const { data, isLoading: isGetProductLoading } = useGetProductQuery({ id });
  const [features, setFeatures] = React.useState([...(data?.features || [])]);
  const [price, setPrice] = React.useState([...(data?.price || [])]);
  const [services, setServices] = React.useState([
    ...(data?.design_services || []),
  ]);
  const [featuresState, setFeaturesState] = useState({});
  const [priceState, setPriceState] = useState({});

  useEffect(() => {
    if (data) {
      setFeatures([...data.features]);
      setPrice([...data.price]);
      setServices([...data.design_services]);
    }
  }, [data]);

  return (
    <>
      {isGetProductLoading ? (
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
        <div className="px-[1rem] md:px-[5rem] py-[2rem] md:py-[5rem]">
          <div className="w-full flex justify-between">
            <Header title={`${data.name}`} />
          </div>
          <div className="mt-[1rem] flex flex-col gap-5">
            <div className="flex flex-col h-auto md:h-[25rem]">
              <div className="h-full w-full bg-red-200 order-2">
                <Description data={data} />
              </div>
              <div className="w-full h-full relative order-1 text-gray-900">
                <div className="relative md:absolute w-full h-full flex items-center justify-center">
                  <img
                    src={data.cover}
                    alt="cover"
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                  />
                </div>
             
              </div>
            </div>
            <div className="relative min-h-auto flex w-full gap-5 mt-10">
              <div className="w-full md:w-[70%] h-auto flex flex-col gap-5">
                {query === "let_us_design" && (
                  <Service
                    data={data}
                    services={services}
                    setServices={setServices}
                  />
                )}
                <Features
                  data={data}
                  price={price}
                  setPrice={setPrice}
                  priceState={priceState}
                  setPriceState={setPriceState}
                  features={features}
                  setFeatures={setFeatures}
                  featuresState={featuresState}
                  setFeaturesState={setFeaturesState}
                />
              </div>
              <div className="hidden sticky min-w-[30%] h-[60vh] top-0 md:flex justify-center items-center">
                <SideNote features={features} featuresState={featuresState} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
