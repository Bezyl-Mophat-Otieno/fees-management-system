
/// <reference types="jest" />
import request from 'supertest';
import app from '../server.js'
import { v4 } from 'uuid';




describe('Test Driven Development Approach Testing EndPoints', () => {

    // it('should return 200 and the student added in the system', async () => {
    //     const res = await request(app).post('/api/student/add').send({fullname:'Ledama Ole Kina',current_class:'3W',feebalance:40000})
    //     expect(res.statusCode).toEqual(200)
    //     expect(res.body.msg).toEqual('Student added successfully')  
        
    // })
    it('should resolve with a status code of 200 and the list of students in the system',async()=>{
        const res = await request(app).get('/api/student/')
        expect(res.statusCode).toEqual(200)
        expect(res.body.students).toBeDefined()
        expect(res.body.students.length).toBeGreaterThan(0)

    })
    //This one is failing because the student is already in the system
    // it('should resolve with a status code of 400 and a message when no students are found',async()=>{
    //     const res = await request(app).get('/api/student/')
    //     expect(res.statusCode).toEqual(400)
    //     expect(res.body.msg).toEqual('No students found')

    // })

    it('should resolve with a status code of 200 and the student with the given id',async()=>{
        const res = await request(app).get('/api/student/d45e358c-31b1-4704-8294-8cfa02c95a00')
        expect(res.statusCode).toEqual(200)
        expect(res.body.student).toBeDefined()
        expect(res.body.student).toHaveProperty('id')
        expect(res.body.student).toHaveProperty('fullname')
        expect(res.body.student).toHaveProperty('feebalance')

    }) 
    it('should resolve with a status code of 400 and a message when the student is not found',async()=>{
        const res = await request(app).get('/api/student/d45e358c-31b1-4704-8294-8cfa02c90')
        expect(res.statusCode).toEqual(400)
        expect(res.body.msg).toEqual('Student not found')
    })
    it('should resolve with a status code of 200 and a message on successfull update of the student fees',async()=>{
        const res = await request(app).put('/api/student/update/d45e358c-31b1-4704-8294-8cfa02c95a00').send({feebalance:10000})
        expect(res.statusCode).toEqual(200)
        expect(res.body.msg).toEqual('Student fees updated successfully')
    })

    it('It should resolve with a status code of 200 and a message on successfull soft deletion of the student',async()=>{
        const res = await request(app).put('/api/student/d45e358c-31b1-4704-8294-8cfa02c95a00')
        expect(res.statusCode).toEqual(200)
        expect(res.body.msg).toEqual('Student deleted successfully')
    })
    it('it should return an error message when the student to be deleted is not found',async()=>{
        const res = await request(app).put('/api/student/d45e358c-31b1-4704-8294-8cfa02c950')
        expect(res.statusCode).toEqual(400)
        expect(res.body.msg).toEqual('Student not found, thus not deleted')
    })
    
});
