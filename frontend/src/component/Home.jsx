import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'
import { useSelector } from 'react-redux'
import useGetMyTweets from '../hooks/useGetMyTweets'


function Home() {
    // custom hook
    const { user, otherUsers } = useSelector(store => store.user);
    
    useOtherUsers(user?._id);
    useGetMyTweets(user?._id);
    return (
        <div className='flex justify-between w-[80%] mx-auto mt-5 '>
            <LeftSidebar />
            <Outlet />
            <RightSidebar otherUsers={ otherUsers} />
        </div>
    )
}

export default Home