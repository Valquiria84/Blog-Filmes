let ArrayDeFilmes=[]

function capturarFilme(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let description = document.getElementById ('description');
    let textoDigitadoNatela = document.getElementById ('container-post');
    let i = 0

    if((title.value !== "") && (author.value != "") && (description.value !=="")){
        textoDigitadoNatela.innerHTML += `<p> ${title.value} </p> <p> ${author.value} </p> 
        <p>${description.value} </p>`;
        let filmes = {

        title: title.value,
        author: author.value,
        description: description.value
       }
        for(i=0; i<ArrayDeFilmes.length; i++){
            ArrayDeFilmes.push(filmes)
        }
        title.value = ""
        author.value = ""
        description.value = ""

        console.log(Object.values(filmes))
       

    }


}