import express from "express";
import habCont from "../controllers/habitationsControllers.mjs";

const router = express.Router();

router.route('/')
    .get(habCont.getAllHabitations)

export default router;