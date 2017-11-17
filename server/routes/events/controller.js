const User = require("../users/model")
const Question = require("./model")

const helpers = require("../helpers")

module.exports = {
  destroy: (req, res, next) => {
    console.log("DESTROYING")
    mongoose.connection.db.dropCollection("events", (err, result) => {
      if (err) res.send(err)
      else res.send("Collection events dropped")
    })
  },

  get: (req, res, next) => {
    Question.find({})
      .populate("createdBy", "-password")
      .exec((err, events) => {
        if (err) res.send(err)
        else res.send(questions)
      })
  },

  getOne: (req, res, next) => {
    Question.findOne({ id: req.params.id })
      .populate("createdBy", "-password")
      .exec((err, events) => {
        if (err) res.send(err)
        else res.send(event)
      })
  },

  post: (req, res, next) => {
    const token = req.headers.authorization || req.body.token
    const user = helpers.decodeToken(token)

    if (user) {
      // PREPARE NEW Event
      const newEvent = new Event({
        title: req.body.title,
        createdBy: user._id
      })

      console.log(newEvent)

      // SAVE THAT NEW Event
      newEvent.save(err => {
        err
          ? res.send(err)
          : res.send({
              message: "New event saved",
              data: newEvent
            })
      })
    } else {
      // NOTIFY IF USER TOKEN IS INVALID
      res.send({ message: "User token is invalid" })
    }
  },

  delete: (req, res, next) => {},

  deleteOne: (req, res, next) => {},

  putOne: (req, res, next) => {}
}