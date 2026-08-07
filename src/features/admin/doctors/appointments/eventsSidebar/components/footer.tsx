import { Pencil, XCircle } from 'lucide-react'
import React from 'react'

const Footer = ({id}:{id:string}) => {
    function onEdit(id:string) {
        console.log(`${id} is edited`)
    }
    function onCancel(id:string) {
        console.log(`${id} is edited`)
    }
  return (

    <div className="flex gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
        <button
          onClick={() => onEdit?.(id)}
          className="flex-1 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm shadow-blue-200/50"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={() => onCancel?.(id)}
          className="flex-1 px-4 py-2.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200/80 rounded-xl hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
        >
          <XCircle className="w-4 h-4" />
          Cancel
        </button>
      </div>)
}

export default Footer