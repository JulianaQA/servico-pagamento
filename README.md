# Serviço de Pagamento

## Descrição
Classe que realiza pagamentos e consulta o último pagamento realizado.

## Instalação

```bash
npm install
```
## Como usar

```javascript
const ServicoDePagamento = require('./src/ServicoDePagamento');

const servico = new ServicoDePagamento();
servico.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servico.consultarUltimoPagamento());
```

## Testes

```bash
npm test
```
