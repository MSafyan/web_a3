const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
  gender:{
    type:String
  },
  address:{
    street_address:{
      type:String
    },
    city:{
      type:String
    },
    country:{
    type:String
    }
  },
  course_code:{
    type:String
  },
  phone_number:{
    type:[String]
  },

})

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;