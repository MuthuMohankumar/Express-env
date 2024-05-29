import express from "express"
import {createEmp, deleteEmpById, editEmpById, getEmp, getEmpById} from "../Controllers/empController.js";


const router=express.Router();

router.post('/create',createEmp);
router.get('/get',getEmp);
router.get('/get/:id',getEmpById);
router.put('/edit/:id',editEmpById);
router.delete('/delete/:id',deleteEmpById);
export default router;