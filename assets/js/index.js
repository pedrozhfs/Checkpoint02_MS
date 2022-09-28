 
 $("#add_product").submit(function(event){
    alert("Produto Cadastrado com Sucesso!")
 })

 $("#update_product").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    var id = $(this).attr("data-id")

    $.map(unindexed_array, function(n, i){
        data[n['nomeProduto']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/products/${id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Produto Atualizado com sucesso!");
    })

 })

 if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/products/${id}`,
            "method": "DELETE"
        }

        if(confirm("Quer mesmo excluir esse produto?")){
            $.ajax(request).done(function(response){
                alert("Produto Deletado com sucesso!");
                location.reload();
            })
        }

    })
 }