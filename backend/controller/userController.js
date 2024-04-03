import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body); //data comes from the frontend
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();

    if (!userData) {
      res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    let userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getUpdate = async (req, res) => {
  try {
    let id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(401).json({ msg: "user not found" });
    }
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id); //checks if the user exist or not

    if (!userExist) {
      return res.status(404).json({ msg: "user not exist" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
