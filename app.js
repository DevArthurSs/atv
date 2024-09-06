console.log("ola mundo");

dados.forEach(function(atleta)  {
    console.log("titulo: " + atleta.titulo);
    console.log("descricao: " + atleta.descricao);
    console.log("link: " + atleta.link);
    console.log("--------------------");
});

function pesquisar() {
    let section = document.getElementById("Resultado-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">mais informações</a>
        </div>
        `;
    }

    section.innerHTML = resultados;
}



function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa"). value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. digite o nome ou esporte do atleta"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowercase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || titulo.includes(campoPesquisa))

        resultados += `
        <div class"item-resultado" ></div>
        <h2> 
            <a href="#" target="_blank">${dado.titulo} </a>
        </h2>
        <p class "descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" tanget="_blank">mais informações</a>

        `};
    
    

    if(!resultados) {
        resultados = "<p>nada foi encontrado</p>" 
    }

    Selection.innerHTML = resultados;