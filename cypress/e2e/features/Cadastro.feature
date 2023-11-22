@cadastro
Feature: Cadastro Usuário

  @cadasto_sucesso
  Scenario: Cadastro com sucesso de um usuário
    Given clico no link sign up
    When preencho o email de um usuário
    And preencho a senha de um usuário