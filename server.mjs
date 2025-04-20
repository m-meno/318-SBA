//Imports
import express from "express";
import animalRoutes from "./routes/animalRoutes.mjs";
import habitationRoutes from "./routes/habitationsRoutes.mjs";
import caretakersRoutes from "./routes/caretakersRoutes.mjs";
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
app.use('/habitations', habitationRoutes);
app.use('/caretakers', caretakersRoutes);
 
//HATEOAS   
  app.get("/", (req, res) => {
    res.json({
      links: [
        {
          href: "/animals",
          rel: "animals",
          type: "GET",
        },
        {
          href: "/animals",
          rel: "animals",
          type: "POST",
        },
        {
          href: "/habitaions",
          rel: "habitations",
          type: "GET",
        },
        {
          href: "/caretakers",
          rel: "caretakers",
          type: "GET",
        },
      ],
    });
  });

//View Engine
app.engine("template", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content
            .toString()
            .replace("#optionA#", `${options.optionA}`)
            .replace("#optionB#", `${options.optionB}`)
            .replace("#optionC#", `${options.optionC}`)
        return callback(null, rendered);    
    });
});

app.set("views", "./views");
app.set("view engine", "template");

app.get('/template', (req, res) => {
    let options = {optionA: "Meet our Residents", optionB: "View the Habitatations", optionC: "Get to know the Caretakers"}
    res.render("index", options);    
});

//Error Handling Middleware
app.use((req, res) => {
    res.status(404);
    res.json({error: `Resource Not Found`});
});

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.json({error: err.message})
});   

//Listener
app.listen(PORT, (req, res) => {
    console.log(`Server Connected on PORT ${PORT}.`)
});
