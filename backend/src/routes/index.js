import express from "express";
import { userRoute } from "./user.route.js";
import { loginRoute } from "./login.roure.js";

/**
 * @param { express.Application } app - The Express application instance
 */
export function routes(app) {
    app.use(express.json())
    app.use("/user", userRoute)
    app.use("/login", loginRoute)
    
}