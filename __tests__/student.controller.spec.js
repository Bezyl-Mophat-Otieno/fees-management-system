import request from 'supertest';
import app from "../src/app";


describe('Test Driven Development Approach Testing EndPoints', () => {

    it('should return 200 and the student added in the system', async () => {

        const res = await request(app).post('/api/student/add')
        expect(res.statusCode).toEqual(200)
        
    })
    
});
