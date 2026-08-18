"use client";
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TableHeaderCompProps } from './types';
import { cn } from '../../lib/cn';

const TableHeaderComp = ({ columns, className = '' }: TableHeaderCompProps) => {
  return (
    <TableHeader className={cn(className, "w-full")}>
      <TableRow>
        {columns.map((column) => (
          <TableHead
            key={column.key}
            className={cn(
              column.className,
              column.align === 'center' && 'text-center',
              column.align === 'right' && 'text-right',
              column.align === 'left' && 'text-left'
            )}
            onClick={() => column.sortable}
            style={{ cursor: column.sortable ? 'pointer' : 'default' }}
          >
            <div className="flex items-center gap-1">
              {column.label}
              {column.sortable && <span className="text-muted-foreground">↕</span>}
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaderComp;