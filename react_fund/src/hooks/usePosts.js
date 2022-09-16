import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    //sorting Posts Using useMemo
const sortedPosts = useMemo(()=>{
    if(sort) {
      return [...posts].sort((a,b) => a[sort].localeCompare[b[sort]] )
    }
    return posts;
  },[sort, posts])

  return sortedPosts;
}

export const usePosts = (posts, sort ,query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    //Get sortedPosts and use alredy sortedPosts for SearchQuery
const sortedAndSearchedPosts = useMemo (()=> {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLowerCase()))
  },[query, sortedPosts])
  return sortedAndSearchedPosts
}