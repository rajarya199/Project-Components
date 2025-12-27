export type createUserParams={
       clerkId: string

    fname: string
    lname: string
    email: string
    avatar?:string
}

export type UserRole = "user" | "admin"

export interface AdminUser {
  _id: string
  clerkId: string
  name?: string
  email: string
  avatar?: string
  role: UserRole
  createdAt: string
  updatedAt: string
}
