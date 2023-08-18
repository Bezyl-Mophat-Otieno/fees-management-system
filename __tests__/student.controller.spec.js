
/// <reference types="jest" />
import request from 'supertest';
import app from '../server.js'
import { v4 } from 'uuid';




describe('Test Driven Development Approach Testing EndPoints', () => {

    it('should return 200 and the student added in the system', async () => {

        const res = await request(app).post('/api/student/add').send({fullname:'John Doe',feebalance:40000, current_class:"3W"})
        expect(res.statusCode).toEqual(200)
        expect(res.body.student).toBeDefined()
        expect(res.body.student).toBe(
            expect.objectContaining({
                id,
                fullname: 'John Doe',
                current_class: '3W',
                feebalance: 40000,

            })
        )
        
    })
    it('should resolve with a status code of 200 and the list of students in the system',async()=>{
        const res = await request(app).get('/api/student/')
        expect(res.statusCode).toEqual(200)
        expect(res.body.students).toBeDefined()
        expect(res.body.students.length).toBeGreaterThan(0)

    })

    it('should resolve with a status code of 200 and the student with the given id',async()=>{
        const res = await request(app).get('/api/student/d45e358c-31b1-4704-8294-8cfa02c95a00')
        expect(res.statusCode).toEqual(200)
        expect(res.body.student).toBeDefined()
        expect(res.body.student).toHaveProperty('id')
        expect(res.body.student).toHaveProperty('fullname')
        expect(res.body.student).toHaveProperty('feebalance')

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
    
});
