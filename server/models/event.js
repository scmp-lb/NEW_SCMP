import { Schema, model } from "mongoose";

const eventSchema = Schema({
  title: {
    type: String,
    unique: [true, "This event already mentioned"],
    required: [true, "Please provide the event name."],
  },
  description: {
    type: String,
    required: [true, "Please enter the event description."],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model("Event", eventSchema);
