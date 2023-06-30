
Feature: Compra de produtos em eCommerce Saucedemo

    Eu, como Herói
    Quero realizar a compra de camisa vermelha;
    Quero realizar a compra de bolsa;
    Quero ordenar os valores do menor para o maior e que seja comprado os dois produtos menores;
    Para obter os produtos escolhidos.

    Scenario: Compra de camisa vermelha
        Given que estou logado no sistema
        And adiciono "camisa vermelha" no carrinho
        When faço o checkout da compra no valor de "$17.27"
        Then compro o item escolhido com sucesso

    Scenario: Compra da bolsa
        Given que estou logado no sistema
        And adiciono "bolsa" no carrinho
        When faço o checkout da compra no valor de "$32.39"
        Then compro o item escolhido com sucesso

    Scenario: Compra da camisa preta
        Given que estou logado no sistema
        And adiciono "camisa preta" no carrinho
        When faço o checkout da compra no valor de "$17.27"
        Then compro o item escolhido com sucesso

    Scenario: Ordenar e comprar
        Given que estou logado no sistema
        And ordeno do mais barato para mais caro
        And adiciono "roupa de bebe" no carrinho
        And adiciono "lanterna" no carrinho
        When faço o checkout da compra no valor de "$19.42"
        Then compro os dois itens com sucesso
