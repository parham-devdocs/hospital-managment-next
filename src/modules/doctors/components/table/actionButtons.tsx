import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const ActionButtons = () => {
  return (
    <TableCell>
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-blue-600 cursor-pointer hover:text-blue-800 hover:bg-blue-50"
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-red-600 cursor-pointer hover:text-red-800 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  </TableCell>  )
}


export default ActionButtons