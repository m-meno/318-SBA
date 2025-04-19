import express from "express";
import aniCont from "../controllers/animalControllers.mjs";


const router = express.Router();

router.route('/')
    .get(aniCont.getAllAnimals)
    .post(aniCont.createAnimal)


router.route('/:id')
    .get(aniCont.getSingleAnimal)    
    .patch(aniCont.editAnimal)
    .put((req, res) => {
        res.send('Put')
    })
    .delete(aniCont.deleteAnimal)

export default router;

