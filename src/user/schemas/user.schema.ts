import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});