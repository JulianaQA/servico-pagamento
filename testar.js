const ServicoDePagamento = require('./src/ServicoDePagamento');

// Criar uma instância do serviço
const servico = new ServicoDePagamento();

console.log('=== Teste 1: Pagamento caro (valor > 100) ===');
servico.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servico.consultarUltimoPagamento());

console.log('\n=== Teste 2: Pagamento padrão (valor <= 100) ===');
servico.pagar('1234-5678-9012', 'Loja ABC', 50.00);
console.log(servico.consultarUltimoPagamento());

console.log('\n=== Teste 3: Múltiplos pagamentos ===');
servico.pagar('1111-2222-3333', 'Empresa X', 200.00);
servico.pagar('4444-5555-6666', 'Empresa Y', 75.50);
console.log('Total de pagamentos:', servico.pagamentos.length);
console.log('Último pagamento:', servico.consultarUltimoPagamento());