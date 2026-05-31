class ServicoDePagamento {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    // Define a categoria baseada no valor
    const categoria = valor > 100.00 ? 'cara' : 'padrão';

    // Cria o objeto do pagamento
    const pagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    };

    // Adiciona à lista de pagamentos
    this.pagamentos.push(pagamento);
  }

  consultarUltimoPagamento() {
    if (this.pagamentos.length === 0) {
      return null;
    }
    return this.pagamentos[this.pagamentos.length - 1];
  }
}

module.exports = ServicoDePagamento;