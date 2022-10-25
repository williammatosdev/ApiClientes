const db = require('../db');

module.exports = {
    buscarTodos:() =>{
        return new Promise((aceito,rejeitado)=>{
        
             db.query('SELECT * FROM usuarios',(error,results)=>{
               if(error) { rejeitado(error);return;}
               aceito(results);
            });
        });
    },
    
    buscarUm: (id_usuario) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id_usuario],(error,results)=>{
                if(error) { rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome,sobrenome,email,telefone,cpf) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO usuarios (nome,sobrenome,email,telefone,cpf) VALUES (?,?,?,?,?)',
                [nome,sobrenome,email,telefone,cpf],
                (error,results)=>{
                    if(error) { rejeitado(error);return;}
                    aceito(results.insertid_usuario);
               
                }
            );
        });
    },

    alterar: (id_usuario,nome,sobrenome,email,telefone,cpf) =>{
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE usuarios SET nome = ?,sobrenome = ?,email = ?,telefone = ?,cpf = ? WHERE id_usuario = ?',
                [nome,sobrenome,email,telefone,cpf,id_usuario],
                (error,results)=>{
                    if(error) { rejeitado(error);return;}
                    aceito(results);
               
                }
            );
        });
    },

    excluir:(id_usuario) =>{
        return new Promise((aceito,rejeitado)=>{
        
             db.query('DELETE FROM usuarios WHERE codigo =?',[id_usuario],(error,results)=>{
               if(error) { rejeitado(error);return;}
               aceito(results);
            });
        });
    }
};
