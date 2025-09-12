import CommenHero from '@/Commen-components/CommenHero'
import React from 'react'
import BlogDetails from './BlogDetails';

export default async function  page({params}) {
  const {slug}= await params;
  return <BlogDetails Slugdata={slug}/>
}
