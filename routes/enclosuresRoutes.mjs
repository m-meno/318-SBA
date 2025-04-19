import express from "express";
import encCont from "../controllers/enclosuresControllers.mjs";

const router = express.Router();

router.route('/')
    .get(encCont.getAllEnclosures)



export default router;