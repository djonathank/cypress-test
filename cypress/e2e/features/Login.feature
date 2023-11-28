@Login
Feature: Login

  @login_sucesso
  Scenario: Login com sucesso
    Given que o estou na tela de login do site
    When preencher dados de login
      | usuario | testeX1@teste.com |
      | senha   | 123456            |
    Then verifico que login foi realizado com sucesso

  @novo_login_sucesso
  Scenario: Login com sucesso novo
    Given que o estou na tela de login do site
    When preencher dados de login
      | usuario | testeX1@teste.com |
      | senha   | 123456            |
    Then verifico que login foi realizado com sucesso

# @login_invalido
# Scenario o: Login com dados inválido
# Given que o estou na tela de login do site
# When preencher dados de login
# | usuario | testeX1@teste.com |
# | senha   | 123456            |
# Then verifico que mensagem de login inválido é apresentada
#   | mensagem | tes |
# Then verifico que mensagem de login inválido é "apresentada"
