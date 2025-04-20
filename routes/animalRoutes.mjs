import express from "express";
import aniCont from "../controllers/animalControllers.mjs";


const router = express.Router();

router.route('/')
    .get(aniCont.getAllAnimals)
    .post(aniCont.createAnimal)


router.route('/:id')
    .get(aniCont.getSingleAnimal)    
    .patch(aniCont.editAnimal)
    .delete(aniCont.deleteAnimal)
    
router.route('/:species')   
    .get(aniCont.getAnimalsOfSpecies)

export default router;

