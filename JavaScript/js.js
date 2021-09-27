function Conta(mNumero,mTipo,mSaldo,mTitular){
    this.numero = mNumero;
    this.tipo = mTipo;
    this.saldo = mSaldo;
    this.titular = mTitular;
  }

  let lucas = new Conta(123,"Conta Corrente",99,"Lucas Feitosa");
  let abigael = new Conta(1183971869,"Conta Corrente",1555,"Abigael Natte");


  let lista = [lucas,abigael];

//   console.log(lista)

let banco = {
    clientes:lista,
    consultarCliente:function(nome){
      // for(let i = 0;i<this.clientes.length;i++){
      //   const cliente = this.clientes[i];
      //   if(cliente.titular === nome){
      //     console.log(cliente);
      //     return cliente;
      //   }
  
      // }
      // for(let cliente of this.clientes){
      //   if(cliente === nome)
      //     return cliente;
      // }
      
      let cliente = this.clientes.find( elemento => elemento.titular === nome && elemento.saldo < 100 );
      return cliente;
  
    },
    deposito:function(nome,valor){
      const cliente = this.consultarCliente(nome);
      cliente.saldo += valor;
      console.log("Depósito realizado, seu novo saldo é: " + cliente.saldo);
    },
    saque:function(nome,valor){
      const cliente = this.consultarCliente(nome);
      if(valor > cliente.saldo){
        console.log("Saldo insuficiente!");
      } else {
        cliente.saldo -= valor;
      }
    }
  }
