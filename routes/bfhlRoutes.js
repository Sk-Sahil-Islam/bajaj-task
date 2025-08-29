import express from "express";
import { processData } from "../controllers/bfhlController.js";

const router = express.Router();

/**
 * @swagger
 * /bfhl:
 *   post:
 *     summary: Process input data and return categorized results
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               data: ["a","1","334","4","R","$"]
 *     responses:
 *       200:
 *         description: Successful response with categorized data
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Server error
 */
router.post("/bfhl", processData);

export default router;
