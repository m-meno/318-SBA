import express from "express";


const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('Get')
    })
    .post((req, res) => {
        res.send('Post')
    })
    .patch((req, res) => {
        res.send('Patch')
    })
    .put((req, res) => {
        res.send('Put')
    })
    .delete((req, res) => {
        res.send('Delete')
    })


    // router 
    //     .route('/:id')
    //     .get()
    //     .patch()
    //     .delete()


export default router;