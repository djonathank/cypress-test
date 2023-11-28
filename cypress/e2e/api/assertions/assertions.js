class Assertions {
  shouldHaveStatus(response, status) {
    expect(response.status,`Status is ${status}`).to.eq(status)
  }

  getIdIsNull(response) {
    expect(response.body.id,'ID não vazio').to.be.not.null;
  }

  shouldHaveTime(response, time) {
    expect(response.duration,`Duration is ${time}`).lessThan(time)
  }

  shouldHaveHeadersDefault(response, time) {
      expect(response.headers, 'Default Headers').to.be.include({
        server: 'railway',
        'content-type': 'application/json; charset=utf-8'
      })
  }
  
  validaSchema(response, schema) {
    cy.wrap(response.body).should(schema)
  }
}

export default new Assertions;
