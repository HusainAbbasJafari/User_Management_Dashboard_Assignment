
import React, { useEffect, useMemo, useState } from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { debounce } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useNavigate } from "react-router-dom";

const UserTable = ({ users = [], itemsPerPage = 8 }) => {
 const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  
  const handleSearch = useMemo(
    () =>
      debounce((term) => {
        if (!term.trim()) return setFilteredUsers(users)
        const lower = term.toLowerCase()
        setFilteredUsers(
          users.filter(
            (u) =>
              u.name.toLowerCase().includes(lower) ||
              u.email.toLowerCase().includes(lower)
          )
        )
        setCurrentPage(1)
      }, 400),
    [users]
  )

  const onSearchChange = (e) => {
    const val = e.target.value
    setSearchTerm(val)
    handleSearch(val)
  }
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const handleView = (id) => {
    navigate(`/user/${id}`);
  }

  return (
    <div className="w-full  dark:bg-black border   overflow-x-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <h2 className="text-lg font-semibold">User List</h2>
        <Input
          type="text"
          placeholder="Search by Name or Email..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full sm:w-64"
        />
      </div>

      <Table>
        <TableCaption>A list of registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <TableRow key={user?.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.phone || "—"}</TableCell>
                <TableCell>{user?.company?.name || user?.company || "—"}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(user.id)}
                  >
                    View Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

  
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  className={
                    currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

export default UserTable
