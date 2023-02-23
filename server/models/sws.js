import { Schema, model } from "mongoose";

const swsSchema = Schema({
  title: {
    type: String,
    unique: [true, "This event already mentioned"],
    required: [true, "Please provide the event name."],
  },
  description: [
    {
      subTitle: {
        type: String,
        required: [true, "Please enter the event description."],
      },
      content: {
        type: String,
        required: [true, "Please enter the event description."],
      },
    },
  ],
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
  winnerProject: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

export default model("Sws", swsSchema);
