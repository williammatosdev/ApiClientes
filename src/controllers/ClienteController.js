const ClienteService = require('../services/ClienteServices');

module.exports = {
    buscarTodos: async (req,res)=> {
        let json = {sucesso:'',results:[]};
        let usuarios = await ClienteService.buscarTodos();

        for( let i in usuarios){
            json.results.push({
              id_usuario: usuarios[i].id_usuario,
              sobrenome: usuarios[i].sobrenome

            });
        }
        res.json(json);
    },
    buscarUm: async(req,res) => {
        let json = { sucesso:'',result:{}};

        let id_usuario = req.params.id_usuario;
        let usuario = await ClienteService.buscarUm(id_usuario);
        
        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    },
    inserir: async(req,res) => {
        let json = { sucesso:'',result:{}};

        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let cpf = req.body.cpf;       
        
        if(nome && sobrenome && email && telefone && cpf){
            let UsuarioCodigo = await ClienteService.inserir(nome,sobrenome,email,telefone,cpf);
            json.result = {
                id_usuario: UsuarioCodigo,
                nome,
                sobrenome,
                email,
                telefone,
                cpf
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    }, 
    alterar: async(req,res) => {
        let json = { sucesso:'CLIENTE ALTERADO COM SUCESSO!',result:{}};
        
        let id_usuario = req.params.id_usuario;
        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let cpf = req.body.cpf;       
        
        if(id_usuario && nome && sobrenome && email && telefone && cpf){
            await ClienteService.alterar(id_usuario,nome,sobrenome,email,telefone,cpf);
            json.result = {
                id_usuario,
                nome,
                sobrenome,
                email,
                telefone,
                cpf
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
    excluir: async (req,res)=>{
     let json = { sucesso:'',result:{}};
     await ClienteService.excluir(req.params.id_usuario);

     res.json(json);
    }
}