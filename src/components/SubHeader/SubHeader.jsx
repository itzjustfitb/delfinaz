import React, { useState } from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import BasketIcon from "../../assets/icons/BasketIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import { Button, Input } from "antd";
import BasketSidebar from "../BasketSidebar/BasketSidebar";

function SubHeader() {
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <div className="flex gap-5 desktop:grid desktop:grid-cols-3 desktop:gap-0 pt-5 px-5 pb-2 desktop:px-10 place-items-center">
      <div className="hidden desktop:block"></div>
      <div className="relative flex flex-1">
        <Input
          placeholder="Axtar"
          className="w-full desktop:w-[370px] px-5 py-3 pr-14"
        />
        <span className="absolute top-2/4 -translate-y-2/4 right-5">
          <SearchIcon width={24} />
        </span>
      </div>
      <div className="desktop:w-full flex justify-end gap-[10px] h-fit">
        <HeartIcon width={24} specialClass="cursor-pointer fill-none" />
        <ProfileIcon width={24} specialClass="cursor-pointer fill-none" />
        <div
          onClick={() => setBasketOpen(true)}
          className="relative flex cursor-pointer"
        >
          <Button className="p-0 border-0">
            <BasketIcon width={24} specialClass={"cursor-pointer fill-none"} />
          </Button>
          <span className="absolute flex justify-center items-center -top-1 -right-2 bg-skyBlue-500 p-1 w-5 h-5 rounded-full text-white text-sm">
            20
          </span>
        </div>
      </div>
      <BasketSidebar basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
    </div>
  );
}

export default SubHeader;
