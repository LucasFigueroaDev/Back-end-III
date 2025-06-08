import { Router } from "express";
import usersRouter from "./users.router.js";
import sessionRouter from "./sessions.router.js";
import petRouter from "./pets.router.js";
import adoptionRouter from "./adoption.router.js";
import mockRouter from "./mocks.router.js";


const router = Router();

router.use("/users", usersRouter);
router.use("/sessions", sessionRouter);
router.use("/pets", petRouter);
router.use("/adoptions", adoptionRouter);
router.use("/mocks", mockRouter);

export default router;