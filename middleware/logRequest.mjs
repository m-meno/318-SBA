import express from "express";

export default function (req, res, next) {
    console.log("Received Request");
    next();
};

