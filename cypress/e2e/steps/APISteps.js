/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import req from '../api/requests'
import assert from '../api/assertions/assertions'
import schemas from '../api/schemas/schemas'

Given('gera token', () => {
  req.getDoLogin()
})

Given('teste helve', () => {
  req.getTest().then(getTestResponse => {
    assert.shouldHaveStatus(getTestResponse, 200)
    assert.validaSchema(getTestResponse, schemas.getTestSchema())
  })
})

Given('teste login', () => {
  req.getLogin
  req.getLogin().then(getLoginResponse => {
    assert.shouldHaveStatus(getLoginResponse, 200)
    assert.validaSchema(getLoginResponse, schemas.getLoginSchema())
    assert.getIdIsNull(getLoginResponse)
    assert.shouldHaveHeadersDefault(getLoginResponse)
    assert.shouldHaveTime(getLoginResponse,400)
  })
})


Given('consulta produto error', () => {
  req.getAuthProdutoError
  req.getAuthProdutoError().then(getAuthProdutoErrorResponse => {
    assert.shouldHaveStatus(getAuthProdutoErrorResponse, 403)
    assert.shouldHaveHeadersDefault(getAuthProdutoErrorResponse)
    assert.shouldHaveTime(getAuthProdutoErrorResponse,400)
  })
})

Given('consulta produto', () => {
  req.getAuthProduto().then(getAuthProdutoResponse => {
      assert.shouldHaveStatus(getAuthProdutoResponse, 200)
      assert.shouldHaveHeadersDefault(getAuthProdutoResponse)
      assert.shouldHaveTime(getAuthProdutoResponse,400)
  })
})

Given('cadastro produto', () => {
  req.postCadastraProduto()
  req.postCadastraProduto().then(postCadastraProdutoResponse => {
    assert.shouldHaveStatus(postCadastraProdutoResponse, 200)
    assert.shouldHaveHeadersDefault(postCadastraProdutoResponse)
    assert.shouldHaveTime(postCadastraProdutoResponse,400)
  })
})

Given('altera produto', () => { 
  req.postCadastraProduto().then(postCadastraProdutoResponse => {
    req.putProduto(postCadastraProdutoResponse).then(putProdutoResponse => {
      assert.shouldHaveStatus(putProdutoResponse, 200)
      assert.shouldHaveHeadersDefault(putProdutoResponse)
      assert.shouldHaveTime(putProdutoResponse,400)
    })
  })
})

