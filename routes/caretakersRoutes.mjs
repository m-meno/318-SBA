import express from "express";
import carCont from "../controllers/caretakersControllers.mjs";

const router = express.Router();

router.route(`/`)
    .get(carCont.getAllCaretakers)

export default router;
