//Imports
import express from "express";
import animalRoutes from "./routes/animalRoutes.mjs";
import enclosureRoutes from "./routes/enclosuresRoutes.mjs";
import logReq from "./middleware/logRequest.mjs";
import fs from "fs";

//Setups
const app = express();
const PORT = 3000 || 3001;  


//Middleware
app.use(express.json());
app.use(express.static("./styles"));
app.use(logReq);


//Routes
app.use('/animals', animalRoutes);
app.use('/enclosures', enclosureRoutes);

// app.engine("template", (filePath, options, callback) => {
//     fs.readFile(filePath, (err, content) => {
//         if (err) return callback(err);
//         const rendered = content
//             .toString()
//             .replaceAll("#title#", '${options.title}')
//             .replace("#content#", '${options.}')
//             .replace("#name#", '${options.}')
//         return callback(null, rendered);    
//     });
// });

// app.set("views", "./views");
// app.set("view engine", "template");

// app.get('/template', (req, res) => {
//     let options = {title: "", contents: "", name: ""
//     res.render("index", options);    
//     }
// });

//Error Handling Middleware --- next not needed because we aren't passing off to another function
app.use((req, res) => {
    res.status(404);
    res.json({error: `Resource Not Found`});
})

//Listener
app.listen(PORT, (req, res) => {
    console.log(`Server Connected on PORT ${PORT}.`)
});
