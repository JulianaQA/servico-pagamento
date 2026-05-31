const ServicoDePagamento = require('./src/ServicoDePagamento');

const servico = new ServicoDePagamento();
servico.pagar('0987-7656-3475', 'Samar', 156.87);
console.log('Resultado:');
console.log(servico.consultarUltimoPagamento());
