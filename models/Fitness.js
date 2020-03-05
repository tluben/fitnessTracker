const mongoose = require("mongoose")

const Schema = mongoose.Schema

const fitnessSchema = new Schema(
    {
        day: {
            type: Date, 
            default: () => new Date ()
        },
        exercises: [
            {
                type: {
                    type: String
                },
                name: {
                    type: String
                },
                duration: {
                    type: Number
                },  
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]
    }
)

const Fitness = mongoose.model("Fitness", fitnessSchema)
module.exports = Fitness