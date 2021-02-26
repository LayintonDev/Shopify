import bcrypt from "bcrypt"
export const userData = {
    users:[
        {
            name:"saheed",
            email:"layintondev@gmail.com",
            password:bcrypt.hashSync("1234", 8),
            isAdmin:true
        },
        {
            name:"fareedah",
            email:"adenike@gmail.com",
            password:bcrypt.hashSync("5678", 8),
            isAdmin:false
        }
        

    ]
}