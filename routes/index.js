import { Router } from "express";
import { countryGetAction } from "../controllers/countryController.js";

const router = Router();

router.route("/").get(countryGetAction);

export default router;
