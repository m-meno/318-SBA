import enclosures from "../data/enclosures.mjs";

function getAllEnclosures(req, res){
    res.json(enclosures);
};


export default {getAllEnclosures}