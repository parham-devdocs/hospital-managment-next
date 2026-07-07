"use client"

import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger 
  } from '@/components/ui/dropdown-menu'
  import { Calendar, Clock, Eye, MoreHorizontal, Pencil, Trash2, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { deleteDoctor } from '../../services'
import { useTransition } from 'react'
  

  
  const GenericDropDownMenu = ({
id
  }:{id:string}) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function handleDelete() {
      router.refresh()
      deleteDoctor(id)
    }
  
    // Filter out items with separator flag for rendering
  
    return (
      <DropdownMenu>
      <DropdownMenuTrigger className="p-1 rounded-full hover:bg-gray-100">
        <MoreHorizontal className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => router.push(`/admin/doctors/${id}`)}>
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push(`/admin/doctors/${id}/profile`)}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push(`/admin/doctors/${id}/appointments`)}>
          <Calendar className="mr-2 h-4 w-4" />
          Appointments
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push(`/admin/doctors/${id}/timetable`)}>
          <Clock className="mr-2 h-4 w-4" />
          Timetable
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => router.push(`/admin/doctors/${id}/edit`)}>
          <Pencil className="mr-2 h-4 w-4" />
          Edit Doctor
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => handleDelete()}
          className="text-red-600 focus:text-red-600"
          disabled={isPending}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          {isPending ? 'Deleting...' : 'Delete Doctor'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    )
  }
  
  export default GenericDropDownMenu