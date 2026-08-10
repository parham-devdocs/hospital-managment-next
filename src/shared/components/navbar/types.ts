

export type NamePropType={
    adminAvatar:string,adminName:string
}


export type NotificationType = { 
    type: "critical" | "warning" | "success" | "info", 
    title: string, 
    timestamp: Date, 
    message: string, 
    id: string 
  }
  