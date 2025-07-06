import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import { fa } from '@faker-js/faker';

describe('pets router', () => {
    let testPetId;
    let testPetName;
    it('GET /api/pets We are successfully waiting for a list of all pets with status code 200', async () => {
        const response = await request(app).get('/api/pets');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('POST /api/pets We hope to successfully create or upload a new pet with status code 201', async () => {
        const response = await request(app)
            .post('/api/pets')
            .send({
                name: 'petTest',
                specie: 'petTest',
                birthDate: '10-02-2025',
                adopted: false,
                image: ''
            });
        expect(response.status).to.equal(201);
        expect(response.body).to.be.an('object');
        testPetId = response.body.data.payload._id;
        testPetName = response.body.data.payload.name;
    })

    it('GET /api/pets/name/:name We hope to obtain the pets information through the name with status code 200', async () => {
        const response = await request(app)
            .get(`/api/pets/name/${testPetName}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('GET /api/pets/:id We hope to obtain the pets information through the ID with status code 200', async () => {
        const response = await request(app)
            .get(`/api/pets/${testPetId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('GET /api/pets/:id We expect an error when an incorrect or non-existent ID is found with status code 404', async () => {
        const response = await request(app)
            .get(`/api/pets/000000000000000000000000`);
        expect(response.status).to.equal(404);
        expect(response.body).to.be.an('object');
    })

    it('PUT /api/pets/:id We hope to update the pets information through the ID with status code 200', async () => {
        const response = await request(app)
            .put(`/api/pets/${testPetId}`)
            .send({
                name: 'petTest2',
                specie: 'petTest2',
                birthDate: '10-03-2025',
                adopted: false
            });
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

    it('DELETE /api/pets/:id We hope to delete the pet through the ID with status code 200', async () => {
        const response = await request(app)
            .delete(`/api/pets/${testPetId}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
    })

})