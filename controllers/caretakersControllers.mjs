import caretakers from "../data/caretakers.mjs";

function getAllCaretakers(req, res) {
    const links = [
        {
            href: 'caretakers/:id',
            rel: ':id',
            type: 'GET'
        },
    ]
    res.json({ caretakers, links });
};

export default { getAllCaretakers };