console.log("Namaste TypeScript");
console.log("TypeScript is here");


// class CUser {
//     public email: string
//     private name: string
//     readonly city: string = "Patna"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }

class CUser {
    readonly city: string = "Patna"
    constructor(
        public email:string,  
        public name: string,
        // private userId: string | number
        protected _courseCount = 1
    ){

    }
    get getAppleEmail(): string{
        return`apple${this.email}`
    }
    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course Count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SUser extends CUser{
    isFamily: boolean = true
    changeCourseCount (){
        this._courseCount = 4
    }
}

const xyz = new CUser("X@x.com", "akash")
// xyz.city = "Patna";
xyz.city
// xyz.name

