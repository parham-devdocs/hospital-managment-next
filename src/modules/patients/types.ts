
export interface GeneralInfo{
    fullName:string
    email:string
    address:string
    age:number
    phoneNumber:string
    avatarUrl?:string
    isActive?:boolean
    gender:"Male"|"Female"
  }


export interface Patient{
    allergies:string[],
    height:number,
    medical_condition_summary:string,
    bloodType: "A+"| "A-"| "B+"| "B-"| "AB+"| "AB-"| "O+"| "O-"
    weight: number
    emergency_phone:string
    illness:string
    user:GeneralInfo
}