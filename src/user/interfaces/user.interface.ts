export interface User extends Document {
    name: string,
    email: string,
    password: string,
    typeAccount: "normal" | "shopkeeper",
    agency: number,
    account: number,
    balance: number
}