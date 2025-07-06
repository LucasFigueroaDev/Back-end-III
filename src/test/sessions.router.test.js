import request from 'supertest';
import { expect } from 'chai';
import { userDao } from '../dao/users.dao.js';
import app from '../app.js';

describe('sessions router', () => {
    let cookie = '';
    let emailTest = 'testSessions@example.com';

    it('POST /api/sessions/register We expect a successful user registration with code status 201', async () => {
        const response = await request(app)
            .post('/api/sessions/register')
            .send({
                last_name: 'testSessions',
                first_name: 'testSessions',
                email: emailTest,
                password: '1234'
            });
        expect(response.status).to.equal(201);
        expect(response.body).to.be.an('object');
    });

    it('POST /api/sessions/login We expect a successful login from a user with status code 200', async () => {
        const response = await request(app)
            .post('/api/sessions/login')
            .send({
                email: emailTest,
                password: '1234'
            });
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        cookie = response.headers['set-cookie'][0].split(';')[0]; // Obtener el valor de la cookie
    })

    it('GET /api/sessions/current We expect it to return the current authenticated user with status code 200', async () => {
        const response = await request(app)
            .get('/api/sessions/current')
            .set('Cookie', cookie);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    after(async () => {
        await userDao.deleteByEmail(emailTest);
    })

})