const request = require('supertest')
const app = require('../../app')

jest.mock('../../database/db')

describe('API - Notes route', () => {
  describe('GET /', () => {
    it('/ -> status code 201', () => {
      return request(app).get('/api/').expect(201)
    })
    it('/ -> content-type to be json', () => {
      return request(app).get('/api/').expect('Content-Type', /json/)
    })
    it('/ -> return an array', () => {
      return request(app)
        .get('/api/')
        .then((response) => {
          expect(Array.isArray(response.body)).toBeTruthy()
        })
    })
    it('/ -> 4 notes', () => {
      return request(app)
        .get('/api/')
        .then((response) => {
          expect(response.body.length).toEqual(4)
        })
    })
    it('/ -> check data types', () => {
      return request(app)
        .get('/api/')
        .then((response) => {
          expect(response.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                text: expect.any(String)
              })
            ])
          )
        })
    })
    it('/ -> check first note data', () => {
      return request(app)
        .get('/api/')
        .then((response) => {
          expect(response.body[0].id).toBe('1')
          expect(response.body[0].text).toBe('Tidy up the room')
        })
    })
    it('/ -> check second note data', () => {
      return request(app)
        .get('/api/')
        .then((response) => {
          expect(response.body[1]).toEqual(
            expect.objectContaining({
              id: '2',
              text: 'Study unit testing'
            })
          )
        })
    })
  })
  describe('POST', () => {
    it.todo('/ -> insert a note')
  })
})
