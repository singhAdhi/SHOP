import express from "express";
import {
  create,
  getAll,
  getOne,
  getUpdate,
  deleteData,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", getUpdate);
route.delete("/delete/:id", deleteData);

export default route;
