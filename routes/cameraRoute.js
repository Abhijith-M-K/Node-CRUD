import express from "express";
import { addCamera, addNetwork, deleteCamera, deleteNetwork, getACamera, getAnetwork, getCamera, getNetwork, updateCamera, updateNetwork } from "../controller/cameraController.js";

const router = express.Router();

//camera routes
router.get('/get-camera',getCamera)
router.get('/get-camera/:id',getACamera)
router.put('/get-camera/:id',updateCamera)
router.post('/add-camera',addCamera)
router.delete('/remove-camera/:id',deleteCamera)

//Network routes
router.get('/cameraNetworks',getNetwork)
router.get('/cameraNetworks/:id',getAnetwork)
router.post('/add-network',addNetwork)
router.put('/cameraNetworks/:id',updateNetwork)
router.delete('/remove-network/:id',deleteNetwork)



export default router;