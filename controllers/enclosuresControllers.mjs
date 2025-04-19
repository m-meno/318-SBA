import express from "express";
import enclosures from "../data/enclosures.mjs";

function getAllEnclosures(req, res){
    res.json(animals);
};


export default {getAllEnclosures}