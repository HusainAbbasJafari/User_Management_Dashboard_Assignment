import React, { useEffect } from 'react'
import UserTable from './components/UserTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '@/redux/userSlice';
import UserTableSkeleton from '@/components/UserTableSkeleton';

const HomePage = () => {
  
const dispatch = useDispatch();
const { users, status } = useSelector((state) => state.users);

useEffect(() => {
if (status === "idle" ) {
dispatch(fetchUsersData());
}
}, [dispatch,status]);

useEffect(() => {
console.log(users,"users data from redux toolkit")
}, [users])

if (status === "loading") {
  return <UserTableSkeleton/>
}

  return ( 
    <UserTable users={users} itemsPerPage={8} />
  )
}

export default HomePage