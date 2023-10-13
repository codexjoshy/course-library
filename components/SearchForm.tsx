'use client'
import Image from "next/image"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { convertUrlToQueryString } from "@/utils"

const SearchForm = () => {
 const [search, setSearch] = useState('');
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathName = usePathname();
 useEffect(() => {
  // set timeout for debounced search
  const debouncedSearch = setTimeout(() => {
   let queryUrl = "";
   if (search) {
    queryUrl = convertUrlToQueryString({ params: searchParams.toString(), key: 'query', value: search })
   } else {
    queryUrl = convertUrlToQueryString({ params: searchParams.toString(), removeKeys: ['query'] })
   }
   router.push(queryUrl, { scroll: false })

  }, 300);


  return () => clearTimeout(debouncedSearch)
 }, [search])

 return (
  <form className="flex-center w-full mx-auto mt-10 sm:-mt-10 sm:px-5">
   <label className="flex-center relative w-full max-w-3xl">
    <Image
     className="absolute left-8 "
     src="/magnifying-glass.svg" width={30} height={30} alt="search" />
    <Input
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     placeholder="Search..."
     type="text"
     className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800" />
   </label>
  </form>
 )
}

export default SearchForm