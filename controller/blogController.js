import Blog from "../model/blogModel.js";

export const createBlog = async (req, res) => {
  const { _userId, title, content, date, imgUrl } = req.body;
  try {
    const blog = await Blog.create({
      _userId: _userId,
      title: title,
      content: content,
      date: date,
      imgUrl: imgUrl,
    });
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById({ _id: req.params.id },{});
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.id });
    res.json(blog);
  } catch (error) {
    res.json(error);
  }
};
export const patchBlog = async (req, res) => {
    
    try {
      const blog = await Blog.findOneAndUpdate({ _id: req.params.id },{$set:req.body},{new:true});
      res.json(blog);
    } catch (error) {
      res.json(error);
    }
  };