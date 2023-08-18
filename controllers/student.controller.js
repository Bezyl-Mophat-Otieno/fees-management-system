import DB from '../database/dbHelper.js'
import { v4 } from 'uuid'
import axios from 'axios'
import e from 'express'




const addStudent = async( req , res)=>{
    try {

        const id = v4()

        const { fullname , current_class , feebalance} = req.body
        if(!fullname || !current_class || !feebalance){
            return res.status(400).json({msg: 'Please fill all fields',student:req.body})
        }

        const newStudent = {...req.body , id}

        const result = await DB.executeProcedure('addStudents' , newStudent)

        if(result.rowsAffected[0]>0){
            return res.status(200).json({msg: 'Student added successfully'})
        }else{
            return res.status(400).json({msg: 'Student not added'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Server Error"})   
    }

}


const fetchStudents = async(req , res)=>{
try {

    const result = await DB.executeProcedure('fetchStudents')
    if(result?.recordset.length>0){
        return res.status(200).json({students:result.recordset})
    }else{
        return res.status(400).json({msg: 'No students found'})
    }
    
} catch (error) {
    return res.status(500).json({msg:"Server Error"})   
}

}

const fetchOneStudent = async  (req , res)=>{
    try {
        const {id} = req.params
        const result = await DB.executeProcedure('fetchStudent' , {id})

        if(result.recordset.length>0){
            return res.status(200).json({student:result.recordset[0]})
        }else{
            return res.status(400).json({msg: 'Student not found'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Server Error"})        
    }

}

const updateStudentFees = async (req , res)=>{
    try {
        const {id} = req.params
        const {feebalance} = req.body

        const result = await DB.executeProcedure('updateStudentFeeBalance' , {id , feebalance})
        console.log(result)
        if(result.rowsAffected[0]>0){
            return res.status(200).json({msg: 'Student fees updated successfully'})
        }else{
            return res.status(400).json({msg: 'Student fees not updated'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Server Error"})
    }
}

const deleteStudent = async (req , res)=>{
    try {

        const {id} = req.params

        const result = await DB.executeProcedure('deleteStudent' , {id})
        if(result.rowsAffected[0]>0){
            return res.status(200).json({msg: 'Student deleted successfully'})
        }else{
            return res.status(400).json({msg: 'Student not found, thus not deleted'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Server Error"})
        
    }
}

export {addStudent , fetchStudents , fetchOneStudent ,updateStudentFees , deleteStudent}