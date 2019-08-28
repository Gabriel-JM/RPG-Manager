const searchForm = document.getElementById("searchForm");
const inp = document.getElementById("inp");
const output = document.getElementById("output");
const datalist = document.getElementById("nomesCriaturas");

searchForm.addEventListener('submit', showItem);

function showItem(e) {
    e.preventDefault();
    for(let i=0; i < criaturas.length; i++) {
        let crt = criaturas[i];
        if(crt.nome.toLowerCase() == inp.value.toLowerCase()) {
            output.innerHTML = `<p>Nome: ${crt.nome}<br>
            Nível: ${crt.nivel}<br>
            Pontos de Vida: ${crt.vida}<br>
            Classe de Armadura: ${crt.ca}</p>
            <table class="atributos">
                <tr>
                    <td>For</td><td>Des</td><td>Con</td><td>Int</td><td>Sab</td><td>Car</td>
                </tr>
                <tr class="valores">
                    <td>${crt.forca}</td><td>${crt.destreza}</td><td>${crt.constituicao}</td><td>${crt.inteligencia}</td><td>${crt.sabedoria}</td><td>${crt.carisma}</td>
                </tr>
            </table>
            <p>Habilidades: ${crt.habilidades}</p>
            <p>Ações: ${crt.action}</p>`;
            document.querySelector("#conteudo").style.marginBottom = "10px";
        } else if((i + criaturas.length) == criaturas.length){
            output.innerHTML = "<p class='not-found'>Não Encontrado!</p>";
            document.querySelector("#conteudo").style.marginBottom = "16vh";
        }
    }
}

for(let i=0; i < criaturas.length; i++) {
    datalist.innerHTML += `<option value='${criaturas[i].nome}'></option>`;
}