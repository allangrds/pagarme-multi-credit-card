Você acabou de criar sua primeira conta no banco e ficou muito feliz por ter seu primeiro cartão de crédito. Logo ficou desconfortável com o fato de o banco escolher quanto ele acha que você pode gastar nesse cartão por mês: o seu limite de crédito. Logo você imaginou que poderia abrir contas em outros bancos para ter outros cartões de crédito e assim aumentar o seu limite de crédito.

Como você é uma pessoa que está sempre pensando em facilitar a sua vida, percebeu que essa quantidade de cartões na sua carteira era um desperdício de espaço. Além de ser difícil de guardar todos, você percebeu que cada cartão tem uma data mensal para você pagar o que consumiu em crédito no último mês. Por exemplo, um cartão tem que ser pago todo dia 03 do mês e outro todo dia 15. Um detalhe importante é que você pode pagar o cartão antes da data de vencimento para liberar crédito.

Você prefere usar o cartão que está mais longe de vencer porque terá mais tempo para pagar a conta. Caso os dois cartões vençam no mesmo dia você prefere usar aquele que tem menor limite para continuar tendo um cartão com o limite mais alto. Lembre-se que cada compra é feita em apenas um cartão. Manter um cartão com limite mais alto te dá liberdade de fazer compras grandes. Somente no caso em que não for possível fazer a compra em um único cartão, o sistema deve dividir a compra em mais cartões. Para isso, você vai preenchendo os cartões usando as mesmas ordens de prioridade já descritas. Você gasta primeiro do cartão que está mais longe de vencer e "completa" com o próximo cartão mais longe de vencer. Caso os cartões vençam no mesmo dia, você gasta primeiro daquele com menor limite e "completa" com o que tem mais limite.

Comentando com seus amigos, você percebeu que não era apenas você que tinha essa necessidade. Logo veio a ideia genial de criar uma empresa que concentra todos os cartões de crédito de uma pessoa e otimiza compras usando o melhor cartão disponível para essa compra. Agora a pessoa vai ter apenas um cartão com a marca Gastar.me (que você criou) e não terá que se preocupar com esses detalhes no seu dia-a-dia. Ela pode definir qual o limite de crédito que ela quer que seu cartão Gastar.me tenha, respeitando que não pode ser maior que a soma dos limites de todos os seus cartões de crédito.

O melhor cartão deverá ser escolhido com base na data de vencimento da fatura e limite disponível de cada cartão, nesta ordem de prioridade. No pagamento da fatura o cliente poderá escolher pagar o valor total ou um parcial. O pagamento deve ser feito priorizando os cartões da mesma forma que eles são priorizados para realizar compras.

Você contratou uma consultoria para ajudar a modelar o necessário para a especificação do serviço. Aqui está o resultado do trabalho deles e que você deve seguir.

# Dados importantes

## Card

1. Número
2. Nome do Portador
3. CVV
4. Validade
5. Limite
6. Vencimento

## User

1. Nome
2. Email
3. Nível de acesso

## Wallet

1. Usuário
2. Cartões
3. Limite
4. Limite Disponível

# Funcionalidades Sugeridas

## Usuário

1. Listar cartões
2. Adicionar cartão
3. Remover cartão
4. Ver wallet
5. Comprar
6. Pagar fatura
7. Cadastro
8. Criação de wallet

## Administrativo

1. Listar wallets
2. Deletar wallet

Seu trabalho é modelar e implementar um servidor em Node.js com, pelo menos, as funcionalidades definidas. Você é livre para desenvolver outras funcionalidades que julgar válidas.

O objetivo final é entregar um projeto completo, seguro, pronto para produção e de fácil manutenção.

# Pontos de atenção

Alguns pontos são bem importantes para o teste, esperamos que você capriche neles!

- Boas práticas de desenvolvimento.
- Uma boa identação do código.
- Testes, testes e mais testes. Uma boa cobertura de testes garante o
  funcionamento de sua aplicação.
- Versionar o seu banco de dados seria bem maneiro.
- Uma boa documentação.
