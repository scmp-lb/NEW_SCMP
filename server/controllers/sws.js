import cloudinary from "cloudinary";

import Sws from "../models/sws.js";

/* IMPORTS FROM UTILS */
import catchAsync from "../utils/catchAsync.js";
import ErrorHandler from "../utils/errorHandler.js";

//USER: create a new event => /api/v1/sws
export const createSws = catchAsync(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "sws",
      transformation: [{ format: "webp" }, { quality: "auto" }],
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const sws = await Sws.create(req.body);

  res.status(201).json({
    success: true,
    sws,
  });
});

//USER: get all sws => /api/v1/sws
export const getAllSws = catchAsync(async (req, res, next) => {
  const sws = await Sws.find();

  res.status(200).json({
    success: true,
    sws,
  });
});

//USER: get one sws => /api/v1/sws/:id
export const getOneSws = catchAsync(async (req, res, next) => {
  const sws = await Sws.find(req.params.id);

  res.status(200).json({
    success: true,
    sws,
  });
});
