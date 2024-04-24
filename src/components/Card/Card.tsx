import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import { FaStoreAlt } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import Button from "../../components/Button";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { IoTime } from "react-icons/io5";

interface CardProps {
  id?: string;
  sum?: string;
  entity?: string;
  beverage?: string;
  food?: string;
  time?: string;
}
const Card: React.FC<CardProps> = ({
  id,
  sum,
  entity,
  beverage,
  food,
  time,
}) => {
  return (
    <div className="max-w-[310px] rounded-[6px] border mb-2">
      <div className="border-b p-3 flex justify-between">
        <div className="flex items-center gap-1">
          <h4>ID: {id}</h4>
          <CiCircleAlert className="text-[#6E8BB7]" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#6E8BB7]">{sum} сум</p>
          <BsFillCreditCardFill className="text-[#6E8BB7]" />
          <FaStoreAlt className="text-[#6E8BB7]" />
        </div>
      </div>
      <div className="border-b p-3 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span>{entity} x</span>
          <span>{beverage}</span>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span>{entity} x</span>
            <span>{food}</span>
          </div>
          <div className="flex flex-col gap-1 pl-6 items-start">
            <p className="text-[#48535B] font-normal text-xs">С сыром</p>
            <p className="text-[#48535B] font-normal text-xs">Без лука</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>{entity} x</span>
          <span>{food}</span>
        </div>
        <div className="flex items-center gap-1 justify-end">
          <IoTime className="text-[#6E8BB7]" />
          <p className="text-[#6E8BB7]">{time}</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-3">
        <Button
          startIcon={<IoClose />}
          variant="secondary"
          className=" text-[#F76659]"
          size="sm"
        >
          Отменить
        </Button>
        <Button
          startIcon={<MdDone />}
          variant="secondary"
          className="bg-[#0E73F6] text-[white]"
          size="sm"
        >
          Принять
        </Button>
      </div>
    </div>
  );
};

export default Card;
