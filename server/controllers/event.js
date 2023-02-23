import cloudinary from "cloudinary";

/* IMPORTS FROM MODELS */
import Event from "../models/event.js";

/* IMPORTS FROM UTILS */
import catchAsync from "../utils/catchAsync.js";
import ErrorHandler from "../utils/errorHandler.js";

//USER: create a new event => /api/v1/event
export const createEvent = catchAsync(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "event",
      transformation: [{ format: "webp" }, { quality: "auto" }],
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const event = await Event.create(req.body);

  res.status(201).json({
    success: true,
    event,
  });
});

//USER: get all events => /api/v1/event
export const getAllEvents = catchAsync(async (req, res, next) => {
  const event = await Event.find();

  res.status(200).json({
    success: true,
    event,
  });
});
