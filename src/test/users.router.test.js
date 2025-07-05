import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import 'dotenv/config';



describe('users router', () => {
    let testUserId;
    const testUserData = {
        last_name: 'test',
        first_name: 'test',
        email: 'nOJ2d@example.com',
        password: '1234'
    };

    before(async () => {
        const response = await request(app).post('/api/sessions/register').send(testUserData);
        testUserId = response.body.data.payload.id;
    })

    after(async () => {
        await request(app).delete(`/api/users/${testUserId}`);
    })

    it('GET /api/users We expect a list of users with status code 200', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('GET /api/users/:id We expect a user with status code 200', async () => {
        const response = await request(app).get(`/api/users/${testUserId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('GET /api/users/:id We expect an error when getting a user with status code 404', async () => {
        const response = await request(app).get('/api/users/000000000000000000000000');
        expect(response.status).to.equal(404);
        expect(response.body).to.be.an('object');
    })

    it('PUT /api/users/:id We expect to update a user with status code 200', async () => {
        const response = await request(app).put(`/api/users/${testUserId}`).send({ first_name: 'NuevoNombre' });
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('DELETE /api/users/:id We hope to delete a user with status code 200', async () => {
        const response = await request(app).delete(`/api/users/${testUserId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })
})

