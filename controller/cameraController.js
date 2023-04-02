import Camera from "../models/cameraModel.js";
import Network from "../models/networkModel.js";

//camera
export const getCamera = async (req, res) => {
  try {
    const camera = await Camera.find();
    res.json(camera);
  } catch (error) {
    res.send("Error" + error);
  }
};

export const getACamera = async (req, res) => {
  try {
    const camera = await Camera.findById(req.params.id);
    res.json(camera);
  } catch (error) {
    res.send("Error" + error);
  }
};

export const addCamera = async (req, res) => {
  const newCamera = new Camera({
    name: req.body.name,
    desc: req.body.desc,
    url: req.body.url,
    modelName: req.body.modelName,
  });
  try {
    const add = await newCamera.save();
    res.json(add);
  } catch (error) {
    res.send("Error" + error);
  }
};

export const updateCamera = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Camera.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCamera = async (req, res) => {
  try {
    const camera = await Camera.findById(req.params.id);
    await Network.updateMany({}, { $pull: { camera: camera._id } });
    res.json(camera);

    // await camera.deleteOne();
    // res.status(200).json("Post deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

//Camera Network

export const getNetwork = async (req, res) => {
  try {
    const cameraNetworks = await Network.find().populate("cameras");
    res.json(cameraNetworks);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAnetwork = async (req, res) => {
  try {
    const cameraNetwork = await Network.findById(req.params.id).populate(
      "cameras"
    );
    res.json(cameraNetwork);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addNetwork = async (req, res) => {
  const newNetwork = new Network({
    name: req.body.name,
    desc: req.body.desc,
    cameras: req.body.cameras,
  });
  try {
    const add = await newNetwork.save();
    res.json(add);
  } catch (error) {
    res.send("Error" + error);
  }
};

export const updateNetwork = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Network.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteNetwork = async (req, res) => {
  try {
    const cameraNetwork = await Network.findByIdAndDelete(req.params.id);
    res.json(cameraNetwork);
  } catch (error) {
    res.status(500).json(error);
  }
};
