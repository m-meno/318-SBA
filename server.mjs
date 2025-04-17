//Imports
import express from "express";
import animalRoutes from "./routes/animalRoutes.mjs";
import logReq from "./middleware/logRequest.mjs";
import animals from "./data/animals.mjs";
import enclosures from "./data/enslosures.mjs";

//Setups
const app = express();
const PORT = 3000 || 3001;  

//Routes
app.use('/', animalRoutes);

//Middleware
app.use(express.static("./styles"));
app.use(logReq);



//Listener
app.listen(PORT, (req, res) => {
    console.log(`Server Connected on PORT ${PORT}.`)
});
