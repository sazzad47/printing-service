import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsClasses } from "@mui/material/Tabs";
import { useGetProductsQuery } from "../../../state/api/product";
import { Oval } from "react-loader-spinner";
import Product from "./Product";


export default function Categories() {
  const { data, isLoading } = useGetProductsQuery({});
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category_name)),
      ];
      setCategories(uniqueCategories);
      setProducts(data);
    }
  }, [data]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "#701a75",
              },
            }}
            sx={{
              "& button": {
                color: "#db2777",
                textTransform: "capitalize",
                fontSize: "1rem",
              },
              "& button:focus": { outline: "none" },
              "& button.Mui-selected": {
                bgColor: "#701a75",
              },
              backgroundColor: "#fdf2f8",
              height: "5rem",
              display: "flex",
              alignItems: "center",
              [`& .${tabsClasses.scrollButtons}`]: {
                color: "#701a75",
                "&.Mui-disabled": { opacity: 0.3, color: "#701a75" },
              },
            }}
          >
            <Tab label="All" />
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
          <TabPanel value={value} products={products} categories={categories} />
        </Box>
      )}
    </>
  );
}

function TabPanel({ value, products, categories }) {
  const filteredProducts = value === 0 ? products : products.filter(
    (product) => product.category_name === categories[value - 1]
  );
  
 
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-[3rem] bg-white">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="w-full flex flex-col gap-5 items-center"
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
