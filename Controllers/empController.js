import Employee from "../Models/empSchema.js";

export const createEmp=async(req,res)=>{
    
    try {
        const newEmp=new Employee(req.body)
        await newEmp.save()
        res.status(200).json({message:"New Employee added successfully", data:[newEmp]})
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server Error in Create method")
    }
}

export const getEmp=async(req,res)=>{
    try {
        const employee=await Employee.find();
        res.status(200).json({data:employee})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error in Get method")
        
    }
}

export const getEmpById=async(req,res)=>{
    try {
        const empId=req.params.id;
        const emp=await Employee.findById(empId)
        if(!emp){
            return res.status(404).send("No employee found in ID",empId)
        }
        res.status(200).json({data:emp})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error in Get by ID method")
    }
}

export const editEmpById=async(req,res)=>{
    try {
        const empId=req.params.id;
        const{Emp_FirstName,Emp_LastName,Emp_email,Emp_Designation,Emp_Managers}=req.body;
        
        const result=await Employee.updateOne({_id:empId},{Emp_FirstName,Emp_LastName,Emp_email,Emp_Designation,Emp_Managers})
        console.log(result)
        if(result.matchedCount===0){
            return res.status(404).send("Employe not found")
        }

        const empUpdate=await Employee.find({_id:empId})
        res.status(200).json({message:"Updated success",data:empUpdate})
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error in Update by ID method")
    }
}

export const deleteEmpById=async(req,res)=>{
    try {
        const empId=req.params.id;
        const result=await Employee.deleteOne({_id:empId})
        if(!result){
            return res.status(404).send("No employee found in ID",empId)
        }
        res.status(200).send("data Deleted")
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error in Delete by ID method")
 
    }
}