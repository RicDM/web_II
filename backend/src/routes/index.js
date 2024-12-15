import express from "express";
import { userRoute } from "./user.route.js";
/**
 * @param {express.Application} app - The Express application instance
 */
export function routes(app) {
    app.use("/user", userRoute)
}