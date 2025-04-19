import express from "express";
import aniCont from "../controllers/animalControllers.mjs";


const router = express.Router();

router.route('/')
    .get(aniCont.getAllAnimals)
    .post((req, res) => {
        res.send('Post')
    })


router.route('/:id')
    .get(aniCont.getSingleAnimal)    
    .patch(aniCont.editAnimal)
    .put((req, res) => {
        res.send('Put')
    })
    .delete(aniCont.deleteAnimal)


    // router 
    //     .route('/:id')
    //     .get()
    //     .patch()
    //     .delete()


export default router;

// .get((req, res) => {
//     res.send('Get')
// })