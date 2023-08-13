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
    <div className="min-w-full px-4  mx-auto  lg:px-6  ">
      <figure className="flex flex-col  ">
        <div
          className={` bg-cover bg-center  rounded-lg relative h-72 lg:h-[35rem]`}
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
            <HiOutlineClock className="text-yellow-500" size={24} />
            <p className="">{duration} hrs</p>
          </div>
          <div className="col-span-3">
            <Link
              href={url}
              className="border-2 border-black-950  font-semibold text-black-600 rounded-lg  px-5 py-2 text-center mr-2 mb-2"
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
