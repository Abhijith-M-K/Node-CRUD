import mongoose from "mongoose";

const networkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    cameras: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Camera',
      }],
    created: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const networkModel = mongoose.model("Network", networkSchema);
export default networkModel;
