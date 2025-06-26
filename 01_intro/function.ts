function addTwo (num: number): number{
    return num + 2
    // return "hello"
}
function getUpper(val: string){
    return val.toUpperCase()
}
function signUpuser(name: string, email: string, isPaid: boolean){}

//arrow
let loginUser = (name:string, email: string, ispaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("mississppi")
signUpuser("Akash", "akash@dev", false)
loginUser("a", "a@a.com")

// function getValue(myVal : number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok"
// }

const getHello = (s: string):string => {
    return ""
} 

const heros = ["Thor", "spiderman", "ironman"]
// const heros = [1,2,3]
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);  
}




export {}