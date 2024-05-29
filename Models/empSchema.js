import mongoose from "mongoose";

const empSchema=mongoose.Schema({
    Emp_FirstName: String, 
    Emp_LastName: String,
    Emp_email: String,
    Emp_Designation: String,
    Emp_Managers: String
})

const Employee=mongoose.model("Employee",empSchema);
export default Employee