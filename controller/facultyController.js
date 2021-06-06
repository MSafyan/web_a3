const Faculty = require('../model/facultyModel')

exports.getOneFaculty = async(req, res, next) => {
  try {
    const Faculties = await Faculty.findById(req.params.id);
    res.status(200).json({
      success: "success",
      Faculties,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.getFaculty = async(req, res, next) => {
  try {
    const Faculties = await Faculty.find();
    res.status(200).json({
      success: "success",
      Faculties,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.postFaculty = async(req, res, next) => {
  try {
  const { name, email, } = req.body;
	console.log(req.body);

	const newFaculty = await Faculty.create(rq.body);
  return res.json({
      success: "success",
      newFaculty,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.deleteFaculty = async(req, res, next) => {
  try {
    const doc = await Faculty.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.send('No Document found with that Id');
    }
    res.status(204).json({
      status: 'success',
      data: 'Deleted successfully'
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.updateFaculty = async(req, res, next) => {
  try {
  const updatedDoc = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
      new: true});
    if (!updatedDoc) {
      return res.send('No Document found with that Id');
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: updatedDoc
      }
    });
  } catch (error) {
    res.json(error);
  }
}