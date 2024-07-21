const express = require("express");
const response = require("../../red/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getTask = await controller.get_All();
    response.success(req, res, getTask);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getTaskId = await controller.get_AllId(req.params.id);
    response.success(req, res, getTaskId);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    await controller.postData(req.body);
    response.success(req, res, req.body);
    console.log("Los datos son: ", req.body);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await controller.putData(req.body, req.params.id);
    response.success(req, res, (info = "Registro actualizado"));
  } catch (error) {
    response.error(req, res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await controller.removeData(req.params.id);
    response.success(req, res, (info = "Registro eliminado con éxito"));
  } catch (error) {
    response.error(req, res, error);
  }
});

module.exports = router;
