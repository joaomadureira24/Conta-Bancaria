 /* inicio do código*/

 function Conta (agencia, conta, saldo){
     this.agencia = agencia;
     this.conta = conta;
     this.saldo = saldo;
 }
 Conta.prototype.deposiTar = function(valor){
     this.saldo += valor;
     this.verSaldo();
 };

Conta.prototype.sacarSaldo = function(valor){
    if(saldo >= valor){
        return;
    }
    this.saldo -= valor
}
 Conta.prototype.verSaldo = function(){
     console.log(`Agência ${this.agencia} Conta: ${this.conta} Saldo: R$ ${this.saldo}` );
 };

 const conta1 = new Conta(11, 234, 300);
 console.log(conta1);
 conta1.verSaldo();