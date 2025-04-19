import express from "express";


// function err(err, req, res, next){
//     res.status(err.status || 500);
//     res.json({error: err.message})

function error(status, msg){
    var err = new Error(msg);
    err.status = status;
    return err;
}

export default error;