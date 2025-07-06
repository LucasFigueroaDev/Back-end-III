import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('adoption router', () => {
    let userid, petid, adoptionid;
    const userTest = {
        last_name: 'testadoption',
        first_name: 'testadoption',
        email: 'nOJ2d@example.com',
        password: '1234'
    };
    const petTest = {
        name: 'testadoption',
        specie: 'testadoption'
    }

    before(async () => {
        const response = await request(app).post('/api/sessions/register')
            .send(userTest);
        userid = response.body.data.payload.id;
        const responsePet = await request(app).post('/api/pets')
            .send(petTest);
        petid = responsePet.body.data.payload._id;
    })

    it('GET /api/adoptions We hope to obtain a list of all adoptions with status code 200', async () => {
        const response = await request(app)
            .get('/api/adoptions');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('POST /api/adoptions/:uid/:pid We expect to upload or create an adoption with a user ID and a pet ID with status code 201', async () => {
        const response = await request(app)
            .post(`/api/adoptions/${userid}/${petid}`);
        expect(response.status).to.equal(201);
        expect(response.body).to.be.an('object');
        adoptionid = response.body.data.payload._id;
    })

    it('GET /api/adoptions/:id We hope to obtain through an ID the information of an adoption with status code 200', async () => {
        const response = await request(app)
            .get(`/api/adoptions/${adoptionid}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('DELETE /api/adoptions/:id We hope to successfully remove an adoption with status code 200', async () => {
        const reponse = await request(app)
            .delete(`/api/adoptions/${adoptionid}`);
        expect(reponse.status).to.equal(200);
        expect(reponse.body).to.be.an('object');
    })

    after(async () => {
        await request(app).delete(`/api/users/${userid}`);
        await request(app).delete(`/api/pets/${petid}`);
    })
})