"use client"
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import { TableHeaderCompProps } from './types';



const TableHeaderComp = ({ 
  columns,
  className = ''
}: TableHeaderCompProps) => {
  return (
    <TableHeader className={className}>
      <TableRow>
        {columns.map((column) => (
          <TableHead
            key={column.key}
            className={column.className || ''}
            style={{ 
              textAlign: column.align || 'left',
              cursor: column.sortable ? 'pointer' : 'default'
            }}
            onClick={() => column.sortable && column.onSort?.(column.key)}
          >
            <div className={`flex items-center gap-1 ${column.align === 'right' ? 'justify-end' : ''}`}>
              {column.label}
              {column.sortable && (
                <span className="text-muted-foreground">↕</span>
              )}
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaderComp;