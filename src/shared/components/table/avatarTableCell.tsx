import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TableCell } from '@/components/ui/table'
import { ImageAvatarCompProps } from './types'

const AvatarTableCell = ({className,imageUrl,fallbackText}:ImageAvatarCompProps) => {
  return (
    <TableCell className={className}>
        <Avatar className={`h-8 w-8`}>
            <AvatarImage src={imageUrl} alt="Avatar" />
            <AvatarFallback className="bg-primary/10 text-primary">
                {fallbackText?.charAt(0).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    </TableCell>   
  )
}

export default AvatarTableCell