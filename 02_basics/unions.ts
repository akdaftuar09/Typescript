let score: number | string 
score = 55

type myUser = {
    name : string
    id: number
}
type admin = {
    username: string
    id: number
}
let akash: myUser | admin = {name: "akash", id: 334}
akash = {username: "ak", id: 334}

// function getDbId(id: number | string){
//     console.log(`Db id is ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string ){
    if(typeof id === "string"){
        id.toLowerCase()
    }
}
//array

const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment : "aisel" | "middle" | "window"
seatAllotment = "aisel"
// seatAllotment = "crew"