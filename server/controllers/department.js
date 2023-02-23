import cloudinary from "cloudinary";

/* IMPORTS FROM MODELS */
import Deparetment from "../models/department.js";

/* IMPORTS FROM UTILS */
import catchAsync from "../utils/catchAsync.js";
import ErrorHandler from "../utils/errorHandler.js";

//USER: create a new departemnt => /api/v1/department
export const createDepartment = catchAsync(async (req, res, next) => {
  //upload photot into cloudinary
  const result = await cloudinary.v2.uploader.upload(req.body.image, {
    folder: "departments",
    transformation: [{ format: "webp" }, { quality: "auto" }],
  });

  const departmentImage = {
    public_id: result.public_id,
    url: result.secure_url,
  };

  const department = await Deparetment.create({
    title: req.body.title,
    description: req.body.description,
    image: departmentImage,
  });

  res.status(201).json({
    success: true,
    department,
  });
});

//USER: get all departemnts => /api/v1/department
export const getAllDepartments = catchAsync(async (req, res, next) => {
  const departemnt = await Deparetment.find();

  res.status(200).json({
    success: true,
    departemnt,
  });
});
