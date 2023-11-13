import React from "react";
import Banner from "../../Banner/Banner";
import BannerBottom from "../../Banner/BannerBottom";
import Sale from "../../home/Sale/Sale";
import NewArrivals from "../../home/NewArrivals/NewArrivals";
import BestSellers from "../../home/BestSellers/BestSellers"
import YearProduct from "../../home/YearProduct/YearProduct";
import SpecialOffers from "../../home/SpecialOffers/SpecialOffers";
function Home() {
  return (
    <div className="w-100">
    <Banner />
    <BannerBottom />
    <div className=" max-w-container mx-auto px-4">
       <Sale/>
       <NewArrivals />
      <BestSellers />
      <YearProduct />
      <SpecialOffers />
      </div>
  </div>
  )
}
export default Home;