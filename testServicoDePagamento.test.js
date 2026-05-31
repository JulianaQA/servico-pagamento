const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  let servicoDePagamento;

  beforeEach(() => {
    servicoDePagamento = new ServicoDePagamento();
  });

  describe('#pagar', () => {
    it('deve criar pagamento com categoria "cara" quando valor > 100', () => {
      servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
      
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
      
      assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
      assert.strictEqual(ultimoPagamento.empresa, 'Samar');
      assert.strictEqual(ultimoPagamento.valor, 156.87);
      assert.strictEqual(ultimoPagamento.categoria, 'cara');
    });

    it('deve criar pagamento com categoria "padrão" quando valor <= 100', () => {
      servicoDePagamento.pagar('1234-5678-9012', 'Empresa X', 56.87);
      
      const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
      
      assert.strictEqual(ultimoPagamento.categoria, 'padrão');
    });

    it('deve armazenar múltiplos pagamentos', () => {
      servicoDePagamento.pagar('1111-1111-1111', 'Empresa A', 50.00);
      servicoDePagamento.pagar('2222-2222-2222', 'Empresa B', 150.00);
      servicoDePagamento.pagar('3333-3333-3333', 'Empresa C', 80.00);
      
      // Verifica se tem 3 pagamentos
      assert.strictEqual(servicoDePagamento.pagamentos.length, 3);
    });
  });

  describe('#consultarUltimoPagamento', () => {
    it('deve retornar null quando não há pagamentos', () => {
      const resultado = servicoDePagamento.consultarUltimoPagamento();
      assert.strictEqual(resultado, null);
    });

    it('deve retornar o último pagamento adicionado', () => {
      servicoDePagamento.pagar('PAG1', 'Empresa 1', 10.00);
      servicoDePagamento.pagar('PAG2', 'Empresa 2', 200.00);
      
      const resultado = servicoDePagamento.consultarUltimoPagamento();
      assert.strictEqual(resultado.codigoBarras, 'PAG2');
      assert.strictEqual(resultado.valor, 200.00);
    });
  });
});