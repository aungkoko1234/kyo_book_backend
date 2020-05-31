import { Document } from 'mongoose';
import { Role } from './role.interface';
export interface User extends Document{
    name: string;
    dob: string;
    email: string;
    password : string,
    roleId : Role,
    gender:string
  }
