export interface Auth extends Document {
    username: string,
    password: string
}
export interface AuthResponse {
    token: string
}