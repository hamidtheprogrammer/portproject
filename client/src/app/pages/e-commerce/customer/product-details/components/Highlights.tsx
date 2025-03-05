import React from "react";
import { detailsInfo } from "..";

const Highlights = () => {
  return (
    <div className="mt-8">
      <h1 className="font-medium mb-3">Product Highlights</h1>
      <div className="flex w-full text-sm">
        <ul className="flex-1 font-semibold space-y-2">
          <li>Brand</li>
          <li>Model Name</li>
          <li>Screen Size</li>
          <li>Color</li>
          <li>Hard Disk Size</li>
          <li>CPU Model</li>
          <li>RAM Size</li>
          <li>Operating System</li>
          <li>Special Feature</li>
          <li>Graphics Card</li>
        </ul>
        <ul className="flex-1 space-y-2">
          <li>{detailsInfo.brand}</li>
          <li>{detailsInfo.modelName}</li>
          <li>{detailsInfo.screenSize}</li>
          <li>{detailsInfo.color}</li>
          <li>{detailsInfo.hardDiskSize}</li>
          <li>{detailsInfo.cpuModel}</li>
          <li>{detailsInfo.ramSize}</li>
          <li>{detailsInfo.operatingSystem}</li>
          <li>{detailsInfo.specialFeature}</li>
          <li>{detailsInfo.graphicsCard}</li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
