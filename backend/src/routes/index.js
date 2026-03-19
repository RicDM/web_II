import express from "express";
import { rentalRoute } from "./rental.routes.js";

/**
 * @param { express.Application } app - The Express application instance
 */
export function routes(app) {
    app.use(express.json())
    app.use("/rental", rentalRoute)
}