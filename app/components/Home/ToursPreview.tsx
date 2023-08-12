import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import Link from "next/link";
import Carousel from "../AppWide/Carousel";
import { ToursData } from "@/data/tours";

type Props = {
  title: string;
  img: string;
  url: string;
  duration: string;
};

const ToursPreview = ({ title, img, url, duration }: Props) => {
  return (
    <div className="min-w-[30rem]  mx-auto   ">
      <figure className="flex flex-col  ">
        <div
          className={` bg-cover bg-center  rounded-lg relative h-72`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flex absolute bottom-1 p-2 w-full  text-yellow-400  ">
            <BiSolidStar size={24} />
            <BiSolidStar size={24} />
            <BiSolidStar size={24} />
            <BiSolidStar size={24} />
            <BiSolidStarHalf size={24} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-2 content-center">
          <div className="col-span-2"> {title} </div>
          <div className="flex items-center justify-end space-x-3">
            <HiOutlineClock className="text-yellow-500" size={18} />
            <p className="text-sm">{duration} hrs</p>
          </div>
          <div className="col-span-3">
            <Link
              href={url}
              className="px-5 py-3 mr-3 text-base font-semibold text-center text-yellow-950 rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300"
            >
              View Tour
            </Link>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ToursPreview;
