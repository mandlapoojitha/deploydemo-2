import React from "react";
import { data } from "@/data/data.json";
import Link from "next/link";

const Latestposts = () => {
  const latestIds = ["6", "12", "18", "24", "30", "26", "42", "48", "54"];
  const latestpostsdata = data.filter((item) => latestIds.includes(item.id));

  return (
    <div className="w-1/6 min-h-9  rounded shadow-md flex flex-col justify-center items-center">
      <p className=" w-full py-4 px-4 text-xl font-bold bg-gradient-to-r from-rose-100 to-teal-100 rounded">
        Latestposts
      </p>
      {latestpostsdata.map((item, index) => {
        return (
            <Link  key={index}  href="/[id]" as={`/${item.id}`}>
            <div className="flex flex-col justify-start items-start w-full py-2 px-4 border-b-1 border-black mx-1">
            <p className="font-semibold text-base">{item.techname}</p>
            <p>{item.blogname}</p>
          </div>
            </Link>
          
        );
      })}
      {
       
      }
    </div>
  );
};

export default Latestposts;
