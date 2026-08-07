"use client"

import { TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { TableCellCompProps } from './types';



const TableCellComp = ({ 
    children,
    type, 
    badge = false, 
    compact = false,
    className = '',
    maxLength = 20 // Default max length
}: TableCellCompProps) => {
    const [formattedValue, setFormattedValue] = useState<string>("");

    useEffect(() => {
        if (!children && children !== 0) {
            setFormattedValue("—");
            return;
        }

        let formatted = "";

        switch (type) {
            case 'date':
                if (children instanceof Date) {
                    formatted = children.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                } else if (typeof children === 'string') {
                    formatted = new Date(children).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                }
                break;

            case 'number':
                if (typeof children === 'number') {
                    formatted = children.toString();
                } else if (typeof children === 'string') {
                    formatted = parseFloat(children).toString();
                }
                break;

            case 'currency':
                if (typeof children === 'number') {
                    formatted = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(children);
                }
                break;

            case 'percentage':
                if (typeof children === 'number') {
                    formatted = `${children}%`;
                }
                break;

            case 'string':
            default:
                if (compact && typeof children === 'string' && children.length > 0) {
                    formatted = children.charAt(0).toUpperCase();
                } else if (typeof children === 'string') {
                    formatted = children;
                } else if (typeof children === 'number') {
                    formatted = children.toString();
                }
                break;
        }

        // Fallback if no formatting applied
        if (!formatted) {
            formatted = String(children);
        }

        // ✅ TRIM STRINGS MORE THAN maxLength
        if (typeof formatted === 'string' && formatted.length > maxLength) {
            formatted = formatted.slice(0, maxLength) + '...';
        }

        setFormattedValue(formatted);
    }, [children, type, compact, maxLength]);

    // If badge is true, wrap in Badge componen
    if (badge) {
        return (
            <TableCell className={className}>
                <Badge 
                    variant="secondary" 
                    className="flex h-8 px-2 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 max-w-[200px]"
                >
                    <span className="truncate">{formattedValue}</span>
                </Badge>
            </TableCell>
        );
    }

    // Default rendering
    return (
        <TableCell className={className}>
            {compact ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    {formattedValue}
                </div>
            ) : (
                <span className="block truncate max-w-[300px]" title={String(children)}>
                    {formattedValue}
                </span>
            )}
        </TableCell>
    );
};

export default TableCellComp;