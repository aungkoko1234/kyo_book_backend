import { Document } from 'mongoose';
export interface Cuisine extends Document{
    name: string;
}