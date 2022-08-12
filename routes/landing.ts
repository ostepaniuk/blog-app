import express from "express";
const router = express.Router();

router.get("/", (request: any, response: any) => {
  response.render("landing/index");
});

export default router;
