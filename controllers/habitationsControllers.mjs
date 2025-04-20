import habitations from "../data/habitations.mjs";

function getAllHabitations(req, res) {
    const links = [
        {
            href: 'habitations/:id',
            rel: ':id',
            type: 'GET'
        },
    ]
    res.json({ habitations, links })

};


export default { getAllHabitations };