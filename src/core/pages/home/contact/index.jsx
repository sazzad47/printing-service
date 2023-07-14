import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetCategoriesQuery } from "../../../state/api/product";
import { Oval } from "react-loader-spinner";

const Contact = () => {
  const { data, isLoading } = useGetCategoriesQuery({});
  console.log("data", data);
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
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dhhn4nlmq/image/upload/v1689345445/15518074_5594016_kennp1.jpg')" }}
        >
          <div className="h-screen flex justify-center items-center">
            <div className="bg-white text-gray-900 text-center mx-4 p-8 rounded shadow-md w-[490px]">
              <Typography className="font-bold text-3xl mb-2">
                {" "}
                Get in touch{" "}
              </Typography>
              <Typography>
                {" "}
                Get a quote in as fast as 3 working hours!{" "}
              </Typography>
              <Grid container spacing={2} className="text-gray-900 mt-5">
                <Grid item xs={12} md={6}>
                  <input
                    placeholder="Name"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    placeholder="Email Address"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    placeholder="Contact Number"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <select
                    placeholder="What do you like to print?"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  >
                    <option value="" disabled selected>
                      What do you like to print?
                    </option>
                    {data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                    <option value="Other"> Other </option>
                  </select>
                </Grid>
                <Grid item xs={12} md={6}>
                <select
                    placeholder="Artwork Ready?"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  >
                    <option value="" disabled selected>
                      Artwork Ready?
                    </option>
                    <option value="Yes"> Yes </option>
                    <option value="No"> No </option>
                  </select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    placeholder="Quantity"
                    className="h-[56px] w-full outline-none bg-pink-100 border-0 px-3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    placeholder="Message"
                    className="min-h-[5rem] w-full outline-none bg-pink-100 border-0 px-3 py-3"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
