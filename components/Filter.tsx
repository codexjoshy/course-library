'use client'
import { convertUrlToQueryString } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Filter = () => {
 const list = ["All", "Frontend", "Backend", "Fullstack", "Data analysis"];
 const [active, setActive] = useState('');
 const searchParams = useSearchParams();
 const router = useRouter();

 const handleFilter = (link: string) => {
  let queryUrl;
  if (link === active) {
   setActive('All');
   queryUrl = convertUrlToQueryString({ params: searchParams.toString(), removeKeys: ['category'] })
  } else {
   setActive(link)
   queryUrl = convertUrlToQueryString({ params: searchParams.toString(), key: 'category', value: link.toLowerCase() });

  }
  router.push(queryUrl, { scroll: false })
 }
 return (
  <ul className="body-text text-white-800 flex w-full max-w-full gap-2 overflow-auto no-scrollbar py-12 sm:max-w-2xl">
   {list.map((link, i) => (
    <button key={i} onClick={() => handleFilter(link)}
     className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${active === link ? 'gradient_blue-purple' : ''}`}>
     {link}
    </button>
   ))}
  </ul>
 )
}

export default Filter