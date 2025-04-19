import express from "express";


function error(err, req, res, next){
    res.status(err.status || 500);
    res.json({error: err.message})
};

function err(status, msg){
    var error = new Error(msg);
    err.status = status;
    return err;
}

export default {error, err};