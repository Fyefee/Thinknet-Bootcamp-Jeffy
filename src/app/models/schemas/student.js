const { Decimal128 } = require("bson");
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    birthday: { type: Date, required: true },
    class: { type: String, required: true, trim: true },
    contact: {
      phone: [{ type: String, trim: true }],
      zipcode: { type: String, trim: true },
    },
    gpa: [{
      grade: Number,
      gpa: Number,
    }],
    club: [{ type: String, trim: true }],
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

module.exports = mongoose.model("student", StudentSchema);
