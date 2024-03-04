import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    typeAccount: String,
    agency: Number,
    account: Number,
    balance: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});