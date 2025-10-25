import { createUser, fetchUserById, fetchUsers } from '@/services/user';
import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import UserTable from './components/UserTable';
const users = [
  { id: 1, name: "Ramesh", email: "ramesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 2, name: "Suresh", email: "suresh@gmail.com", phone: "9658741230", company: "TechCorp" },
  { id: 3, name: "Mahesh", email: "mahesh@gmail.com", phone: "9876543210", company: "TechCorp" },
  { id: 4, name: "Rajesh", email: "rajesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 5, name: "Naresh", email: "naresh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 6, name: "Ganesh", email: "ganesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 7, name: "Dinesh", email: "dinesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 8, name: "Lokesh", email: "lokesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 9, name: "Rakesh", email: "rakesh@gmail.com", phone: "9876543210", company: "Acoeme" },
  { id: 10, name: "Rajiv", email: "rajiv@gmail.com", phone: "9876543210", company: "Acoeme" },
  // ...more users
]
const HomePage = () => {
  

  return (
    <UserTable users={users} itemsPerPage={8} />
  )
}

export default HomePage