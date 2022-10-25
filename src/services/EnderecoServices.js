const db = require('../db')

module.exports ={
    buscarTodos:() =>{
        return new Promise((aceito,rejeitado)=>{
        
             db.query('SELECT * FROM enderecos_usuarios',(error,results)=>{
               if(error) { rejeitado(error);return;}
               aceito(results);
            });
        });
    },

    buscarUmEndereco: (id) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM enderecos_usuarios WHERE id = ?',[id],(error,results)=>{
                if(error) { rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserirEndereco: (logradouro,numero,cidade,uf,cep,bairro,complemento) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO enderecos_usuarios (logradouro,numero,cidade,uf,cep,bairro,complemento) VALUES (?,?,?,?,?,?,?)',
                [logradouro,numero,cidade,uf,cep,bairro,complemento],
                (error,results)=>{
                    if(error) { rejeitado(error);return;}
                    aceito(results.insertid);
               
                }
            );
        });
    },

    alterarEndereco: (logradouro,numero,cidade,uf,cep,bairro,complemento) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE enderecos_usuarios SET logradouro = ?,numero = ?,cidade = ?,uf = ?,cep = ?,bairro = ?,complemento = ? WHERE id_usuario = ?',
                [logradouro,numero,cidade,uf,cep,bairro,complemento],
                (error,results)=>{
                    if(error) { rejeitado(error);return;}
                    aceito(results);
               
                }
            );
        });
    },
    
    excluirEndereco:(id) =>{
        return new Promise((aceito,rejeitado)=>{
        
             db.query('DELETE FROM enderecos_usuarios WHERE id =?',[id],(error,results)=>{
               if(error) { rejeitado(error);return;}
               aceito(results);
            });
        });
    }
};