import express from "express";
import animals from "../data/animals.mjs";
import err from "../middleware/errorHandling.mjs";

function getAllAnimals(req, res){
    const link = [
        {
            href: 'animals/:id',
            rel: ':id',
            type: 'GET'
        },
    ]

    res.json({animals, link})
};

function getSingleAnimal(req, res, next){
    const link = [
        {
            href: `/${req.params.id}`,
            rel: ``,
            type: "DELETE",
        },
        {
            href: `/${req.params.id}`,
            rel: ``,
            type: `PATCH`,
        }
    ]
    const animal = animals.find((a) => a.id == req.params.id);

    if (animal) res.json({animal, link});
    else next();
};
 
function createAnimal(req, res){
    if (req.body.name && req.body.species && req.body.age){
        if (animals.find((a) => a.name == req.body.name)){
            next(409, `This animal already exists in our database`);
        }
        const animal =
            {
                id: animals[animals.length - 1].id + 1,
                name: req.body.name,
                species: req.body.species,
                age: req.body.age,
            };
        animals.push(animal);
        res.json(animals[animals.length - 1]);
    }   else next(error(400, 'Insufficient animal data'));
};

function deleteAnimal(req, res, next){
    const animal = animals.find((a, i) => {
        if (a.id == req.params.id) {
            animals.splice(i, 1);
            return true;
        }
    });
    if (animal) res.json(animal);
    else next();

};

function editAnimal(req, res, next){
    const animal = animals.find((a, i) => {
        if (a.id == req.params.id) {
            for (const key in req.body) {
                animals[i][key] = req.body[key];
            }
            return true;
        };
    });

    if (animal) res.json(animal);
    else next();
};

export default {getAllAnimals, getSingleAnimal, createAnimal, deleteAnimal, editAnimal};