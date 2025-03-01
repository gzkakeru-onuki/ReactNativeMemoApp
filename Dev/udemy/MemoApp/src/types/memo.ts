import { type Timestamp } from "firebase/firestore"

interface Memo{
    id:string
    content:string
    updatedAt:Timestamp
}

export type {Memo}