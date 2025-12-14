import { NextFunction, Request, Response } from "express";

let clientRequests: Record<number, number[]> = {};

export const rateLimiter = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // TODO: Add limit based on IP

    next();
};
