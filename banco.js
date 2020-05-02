
class bdSql{



    constructor(){
        this.conexao = window.openDatabase("myData", "1.0", "MyDataBase", 2 * 1024 * 1024);
        this.conexao.transaction(function (tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS  formularios(id integer primary key autoincrement ,plataformaAtual varchar ,nuvemoulocal varchar ,dadosseguros varchar ,atende varchar ,considera varchar ,vlaquisicao varchar ,vlmensal varchar ,manutencaoAtende,ideal varchar, plataformaOnline varchar,vlIdeal)",[], 
            function(tx, msg){
                console.log('Sucesso');
                console.log(msg);
             }, 
             function(tx, msg){
                 console.log('Erro');
                 console.log(msg);
             });
    
        });

    }
    iserirDado(dados,callback){
        this.conexao.transaction(function (tx) {
            tx.executeSql('insert into formularios(plataformaAtual,nuvemoulocal,dadosseguros,atende,considera,vlaquisicao,vlmensal,manutencaoAtende,ideal,plataformaOnline,vlIdeal) values(?,?,?,?,?,?,?,?,?,?,?)', dados, 
            function(resultado, msg){
                    callback(resultado)
                 }, 
                 function(erro, msg){
                     console.log('Erro');
                     console.log(msg);
                 });
        });

    }
   

}