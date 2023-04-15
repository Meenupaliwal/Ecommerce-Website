import React from 'react';
import Blogarea from './home/blogarea';
import Featuredproducts from './home/featuredproducts';
import Newproduct from './home/newproduct';
import Offercontent from './home/offercontent';
import Inspiredproduct from './home/inspiredproduct';
import Homebanner from './home/homebanner';
import Featuredarea from './home/featuredarea';


export default function home() {
  return (
    <>

  <Homebanner/>
  <Featuredarea/>
  <Featuredproducts/>
  <Offercontent/>
  <Newproduct/>
  <Inspiredproduct/>
  <Blogarea/>

  </>
  )
}
