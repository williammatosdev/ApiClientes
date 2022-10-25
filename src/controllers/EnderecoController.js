const EnderecoService = require('../services/EnderecoServices');

module.exports = {
    buscarEnderecos: async (req,res)=> {
        let json = {sucesso:'',results:[]};
        let enderecos = await EnderecoService.buscarEnderecos();

        for( let i in enderecos){
            json.results.push({
              id: enderecos[i].id,
              cep: enderecos[i].cep

            });
        }
        res.json(json);
    },
    buscarUmEndereco: async(req,res) => {
        let json = { sucesso:'',result:{}};

        let id = req.params.id;
        let endereco = await EnderecoService.buscarUmEndereco(id);
        
        if(endereco){
            json.result = endereco;
        }
        res.json(json);
    },
    inserirEndereco: async(req,res) => {
        let json = { sucesso:'',result:{}};

        let logradouro = req.body.logradouro;
        let numero = req.body.numero;
        let cidade = req.body.cidade;
        let uf = req.body.uf;
        let cep = req.body.cep; 
        let bairro = req.body.bairro; 
        let complemento = req.body.complemento;  

        
        if(logradouro && numero && cidade && uf && cep && bairro && complemento){
            let EnderecoCodigo = await EnderecoService.inserirEndereco(logradouro,numero,cidade,uf,cep,bairro,complemento);
            json.result = {
                id: EnderecoCodigo,
                logradouro,
                numero,
                cidade,
                uf,
                cep,
                bairro,
                complemento
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
    
    alterarEndereco: async(req,res) => {
        let json = { sucesso:'CLIENTE ALTERADO COM SUCESSO!',result:{}};
        
        let id = req.params.id;
        let logradouro = req.body.logradouro;
        let numero = req.body.numero;
        let cidade = req.body.cidade;
        let uf = req.body.uf;
        let cep = req.body.cep; 
        let bairro = req.body.bairro; 
        let complemento = req.body.complemento;
        
        if(id && logradouro && numero && cidade && uf && cep && bairro && complemento){
            await EnderecoService.alterarEndereco(id,logradouro,numero,cidade,uf,cep,bairro,complemento);
            json.result = {
                id,
                logradouro,
                numero,
                cidade,
                uf,
                cep,
                bairro,
                complemento
            };
        }else{
            json.error = 'Campos não enviados';
        }
    },
    excluirEndereco: async (req,res)=>{
        let json = { sucesso:'',result:{}};
        await EnderecoService.excluirEndereco(req.params.id);
   
        res.json(json);
       }
}