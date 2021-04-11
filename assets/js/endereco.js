let modelo = `<div class="row gtr-uniform" style="justify-content: center;">								
Endereço 1
<div class="col-12">
    <input type="text" name="cep" id="cep" value="" placeholder="Cep" />
</div>
<div class="col-6 col-12-xsmall">
    <input type="text" name="rua" id="rua" value="" placeholder="Rua" />
</div>
<div class="col-6 col-12-xsmall">
    <input type="text" name="bairro" id="bairro" value="" placeholder="Bairro" />
</div>
<div class="col-6 col-12-xsmall">
    <input type="text" name="cidade" id="cidade" value="" placeholder="Cidade" />
</div>
<div class="col-6 col-12-xsmall">
    <input type="text" name="estado" id="estado" value="" placeholder="Estado" />
</div>
<ul class="actions stacked">
    <li><a type="submit" class="button primary" id="cadastro">Cadastrar</a></li>
</ul>
</div>`
let $inner = $('#inner')
const get_endereco = () =>{
    let endereco = [{
        "cep":"32240010",
         "rua":"Rua Teste",
         "bairro":"Bairro Teste",
         "cidade":"Cidade TEste",
         "estado":"Estado Teste"
    },
    {
        "cep":"32240011",
         "rua":"Rua Test2",
         "bairro":"Bairro Teste2",
         "cidade":"Cidade TEste2",
         "estado":"Estado Teste2"
    }
    ]
   
    for(var i=endereco.length-1 ; i>=0;i--){
        modelo = `<div class="row gtr-uniform" style="justify-content: center;">								
        Endereço ${i+1}
        <div class="col-12">
            <input type="text" name="cep" id="cep" value="${endereco[i].cep}" placeholder="Cep" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" name="rua" id="rua" value="${endereco[i].rua}" placeholder="Rua" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" name="bairro" id="bairro" value="${endereco[i].bairro}" placeholder="Bairro" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" name="cidade" id="cidade" value="${endereco[i].estado}" placeholder="Cidade" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" name="estado" id="estado" value="${endereco[i].cidade}" placeholder="Estado" />
        </div>
        <ul class="actions stacked">
            <li><a type="submit" class="button primary" id="cadastro">Atualizar</a></li>
        </ul>
        </div>`
        $inner.prepend(modelo)
    }
}
let $newend = $('#newend')

$newend.on('click',function(){
    console.log('click')
    
    modelo = `<div class="row gtr-uniform" style="justify-content: center;">								
                Novo Endereço 
                <div class="col-12">
                    <input type="text" name="cep" id="cep" value="" placeholder="Cep" />
                </div>
                <div class="col-6 col-12-xsmall">
                    <input type="text" name="rua" id="rua" value="" placeholder="Rua" />
                </div>
                <div class="col-6 col-12-xsmall">
                    <input type="text" name="bairro" id="bairro" value="" placeholder="Bairro" />
                </div>
                <div class="col-6 col-12-xsmall">
                    <input type="text" name="cidade" id="cidade" value="" placeholder="Cidade" />
                </div>
                <div class="col-6 col-12-xsmall">
                    <input type="text" name="estado" id="estado" value="" placeholder="Estado" />
                </div>
                <ul class="actions stacked">
                    <li><a type="submit" class="button primary" id="cadastro">Cadastrar</a></li>
                </ul>
                </div>`
    $inner.prepend(modelo)
    
    $newend = $('#newend')
})



get_endereco()