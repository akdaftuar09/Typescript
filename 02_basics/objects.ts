// const User = {
//     name: "Akash",
//     email: "akash@com",
//     isActive : true
// }

// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "Akash", isPaid: false, email: "a@a.com"}
// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "typescript", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     inActive: boolean
// }
// function createUser(user: User): User{
//     return {name: "", email: "", inActive: true}
// }
// createUser({name: "", email: "", inActive: true})

type User = {
   readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    creditcardDetails?: number
}
let myUser: User = {
    _id: "12345",
    name: "a",
    email: "a@A.com",
    isActive: false,
}

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.name = "aka"
myUser.email = "a@a.com"
// myUser._id = "asa"


export {}