class Requests {
  getTest() {
    return cy.request({
        method: 'GET',
        url: '/test',
      });
  }

  getLogin() {
    return cy.request({
        method: 'POST',
        url: '/auth/login',
        body: {
          "username": "kminchelle",
          "password": "0lelplR"
      }
      });
  }

  getDoLogin() {
    this.getLogin().then(loginResponse => {
      let token = loginResponse.body.token 
      Cypress.env('token',token)
    }) 
  }
  
  getAuthProduto() {
    return cy.request({
        method: 'GET',
        url: '/auth/products',
        headers: { 
          authorization: `Bearer ${Cypress.env('token')}`
        }
      });
  }

  getAuthProdutoError() {
    return cy.request({
        method: 'GET',
        url: '/auth/products',
        failOnStatusCode: false
      });
  }

  postCadastraProduto() {
    return cy.request({
        method: 'POST',
        url: '/products/add',
        body: {
          "title": "Perfume Oil",
          "description": "Mega Discount, Impression of A...",
          "price": 13,
          "discountPercentage": 8.4,
          "rating": 4.26,
          "stock": 65,
          "brand": "Impression of Acqua Di Gio",
          "category": "fragrances",
          "thumbnail": "https://i.dummyjson.com/data/products/11/thumnail.jpg"
      }
      });
  }

  putProduto(response) {
    let idProduto = response.body.id 
    cy.log('ID produto retornado: ' + idProduto)

    idProduto = 1

    return cy.request({
        method: 'PUT',
        url: `/products/${idProduto}`,
        body: {
          "title": "iPhone 9.111"
        }
      });
  }
}

export default new Requests();
