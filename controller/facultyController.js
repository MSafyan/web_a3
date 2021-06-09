const Faculty = require('../model/facultyModel');
const arr=require('../arr');

exports.getOneFaculty = async(req, res, next) => {
  try {
    // const Faculties = await Faculty.findById(req.params.id);
    
    res.status(200).json({
      success: "success",
      faculty:arr[req.params.id]
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.getFaculty = async(req, res, next) => {
  try {
    // const Faculties = await Faculty.find();
    res.status(200).json({
      success: "success",
      length:arr.length,
      arr,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.postFaculty = async(req, res, next) => {
  try {
    const {id,name,email,gender,address,course_code,phone_number}=req.body;
    const {street_address,city,country}=address;
  const newFaculty={
    id,
    name,
    email,
    gender,
    address:{
      street_address,
      city,
      country
    },
    course_code,
    phone_number
  }
  if(id){
    arr.push(newFaculty)
    return res.json({
        success: "success",
        arr,
      });
  }else {
    return res.json({
      msg:"id field is compulsory"
    })
  }
  
  console.log(req.body,newFaculty);
  
	// const newFaculty = await Faculty.create(req.body);
  } catch (error) {
    res.json(error)
  
  }
}
exports.deleteFaculty = async(req, res, next) => {
  try {
    // const doc = await Faculty.findByIdAndDelete(req.params.id);
    // if (!doc) {
    //   return res.send('No Document found with that Id');
    // }
    i = arr.findIndex((obj => obj.id == req.params.id));
    arr.splice(i,1);
    res.status(204).json({
      status: 'success',
      data: 'Deleted successfully',
      arr
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.updateFaculty = async(req, res, next) => {
  try {
  // const updatedDoc = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true});
  //   if (!updatedDoc) {
  //     return res.send('No Document found with that Id');
  //   }

    i = arr.findIndex((obj => obj.id == req.params.id));
    const result=arr[i];

    var merge={...result,...req.body};
    arr[i]=merge;

    res.status(200).json({
      status: 'success',
      arr,
    });
  } catch (error) {
    res.json(error);
  }
}