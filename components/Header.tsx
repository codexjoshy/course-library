import React from 'react'

interface Props {
 type: string;
 query: string;
 category: string;
}
const Header = ({ type, query, category }: Props) => {

 let result = `No Result found`;

 if (query) {
  result = `${query}`.toUpperCase();
 }

 if (category) {
  result = `${category}`.toUpperCase()
 }

 if (query && category) {
  result = `Search results for "${query}" in ${category}`;
 }

 return (
  <h1 className='heading3 self-start text-white-800 '>{result}</h1>
 )
}

export default Header