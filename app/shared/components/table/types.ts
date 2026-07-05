

export interface ImageAvatarCompProps{className?:string,imageUrl?:string,fallbackText?:string}


export interface TableCellCompProps {
    children: string | number | Date;
    type: 'date' | 'string' | 'number' | 'currency' | 'percentage' | "image"
    badge?: boolean;
    compact?: boolean;
    className?: string; 
    format?: string;
    maxLength?: number; 
}

export interface TableColumn {
    key: string;
    label: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    onSort?: (key: string) => void;
  }
  
 export interface TableHeaderCompProps {
    columns: TableColumn[];
    className?: string;
  }
