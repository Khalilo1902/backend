import User from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id }, {});
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const createUser = async (req, res) => {
  const { _id, firstName, lastName, email, photo } = req.body;
  try {
    const user = User.create({
      _id: _id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      photo: photo,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user =await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json(user)
  } catch (error) {
    res.json(error);
  }
};
export const deleteUser = async (req,res)=>{
    try{
const user = await User.deleteOne({_id:req.params.id},{$set:req.body});
res.json(user) 
    }catch(error){res.json(error)}
}