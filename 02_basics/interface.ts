interface IUser {
    readonly dbId: number
    email: string
    userId: number
    googleId ?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}
interface IUser {
    githubToken : string
}

interface Admin extends IUser{
    role: "admin" | "ta" | "learner"
}

const jon: Admin = {dbId: 22, email: "a@A.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    
    startTrail: () => {
        return "trail statred"
    },
    getCoupon: (name: "moxely10", off: 10) => {
        return 10
    }
}

jon.email = "a@ak.com"
// jon.dbId = 33 
