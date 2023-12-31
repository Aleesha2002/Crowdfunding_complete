import React from "react";
import { useHistory } from "react-router-dom";
import { loader } from "../assets";
import FundCard1 from "../components/FundCard1";
import { daysLeft } from "../utils";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const history = useHistory();
  //const remainingDays = daysLeft(campaigns.);
  // const days=(campaign)=>{
  //    const remainingDays = daysLeft(campaign.deadline);
  // }
  let count = 0;
  for (let i = 0; i < campaigns.length; i++) {
    if (campaigns[i].deadline >= new Date().getTime()) {
      count++;
    }
  }

  const handleNavigate = (campaign) => {
    history.push(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        Past Campaigns ({count})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map(
            (campaign) =>
              daysLeft(campaign.deadline) && (
                <FundCard1
                  key={campaign.id}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              )
          )}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
