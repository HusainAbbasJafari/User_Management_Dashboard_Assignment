import { createUser, fetchUserById, fetchUsers } from '@/services/user';
import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  

  return (
    <div>Home Page / User List Page</div>
  )
}

export default HomePage