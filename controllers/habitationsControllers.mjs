import enclosures from "../data/habitations.mjs";

function getAllEnclosures(req, res){
    const link = [
        {
            href: 'animals/:id',
            rel: ':id',
            type: 'GET'
        },
    ]
    res.json({ habitations, link })
   
};


export default {getAllEnclosures}