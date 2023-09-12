import mongoose from "mongoose";
import DoctorSchema from "./DoctorSchema";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);


reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  })
  next();
})

reviewSchema.static.calcAverageRatings = async function (docotorID) {

  //this point the current review 
  const stats = await this.agrregate([{
    $match: { doctor: docotorID }
  },
  {
    $group: {
      _id: "$doctor",
      numOfRating: { $sum: 1 },
      avgRating: { $avg: "$rating" }
    }
  }
  ])
  await DoctorSchema.findByIdAndUpdate(docotorID, {
    totalRatings: stats[0].numOfRating,
    avgRating: stats[0].avgRating
  })
}

reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.doctor);
})

export default mongoose.model("Review", reviewSchema);
