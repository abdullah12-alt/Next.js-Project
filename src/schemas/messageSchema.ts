import {z} from "zod"


export const messageSchema = z.object({
    content: z.string().min(10,{message:"Content must be at least 10 char"})
    .max(10,{message:"Content must be no longer than 300 char"}),
})