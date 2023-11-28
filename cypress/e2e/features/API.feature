@pi
Feature: API

  @api
  Scenario: API 
    Given teste helve
    And teste login
    And consulta produto error
    And cadastro produto
    And altera produto

  @api
  Scenario: API
    Given gera token
    And consulta produto

      @api
  Scenario: API
    Given gera token
    And consulta produto
