# Servico de Pagamento

## Descricao
Classe que realiza pagamentos e consulta o último pagamento realizado.

## Instalacao

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
