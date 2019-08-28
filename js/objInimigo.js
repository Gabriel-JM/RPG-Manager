const Criatura = function(nome, nv, hp, ca, fo, des, con, int, sab, car, hab, action) {
    this.nome = nome;
    this.nivel = nv;
    this.vida = hp;
    this.ca = ca;
    this.forca = fo;
    this.destreza = des;
    this.constituicao = con;
    this.inteligencia = int;
    this.sabedoria = sab;
    this.carisma = car;
    this.habilidades = hab;
    this.action = action;
}

let criaturas = [];

const corvo = new Criatura("Corvo", "0", "1 (1d4-1)", "12", "2(-4)", "14(+2)", "8(-1)", "2(-4)", "12(+1)", "6(-2)", "<span class='nome-skill'>Mímica.</span> O corvo é capaz de imitar sons simples que ele ouve, como pessoas cochichando, um bebê chorando ou um animal rangendo. Uma criatura que ouvir os sons pode perceber que são imitações se for bem sucedida num teste de Sabedoria (Intuição) CD 10.", "<span class='nome-ataque'>Bicada.</span> Ataque Corpo-a-Corpo com Arma: +4 para atingir, alcance 1,5 m, um alvo.<br> Acerto: 1 de dano perfurante.");

const lobo = new Criatura("Lobo", "1/4", "11 (2d8+2)", "13", "12(+1)", "15(+2)", "12(+1)", "3(-4)", "12(+1)", "6(-2)", "<span class='nome-skill'>Audição e Faro Aguçados.</span> O lobo tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato.<br><span class='nome-skill'>Táticas de Matilha.</span> O lobo tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do lobo estiver a 1,5 metro da criaturas e não estiver incapacitado.", "<span class='nome-ataque'>Mordida.</span> Ataque Corpo-a-Corpo com Arma: +4 para atingir, alcance 1,5 m, um alvo. Acerto: 7 (2d4 + 2) de dano perfurante. Se o alvo for uma criatura, ele deve ser bem sucedido num teste de resistência de Força CD 11 para não cair no chão.");

const loboAtroz = new Criatura("Lobo Atroz", "1", "37 (5d10+10)", "14", "17(+3)", "15(+2)", "15(+2)", "3(-4)", "12(+1)", "7(-2)", "<span class='nome-skill'>Audição e Faro Aguçados.</span> O lobo tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato.<br><span class='nome-skill'>Táticas de Matilha.</span> O lobo tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do lobo estiver a 1,5 metro da criaturas e não estiver incapacitado.", "<span class='nome-ataque'>Mordida.</span> Ataque Corpo-a-Corpo com Arma: +5 para atingir, alcance 1,5 m, um alvo. Acerto: 10 (2d6 + 3) de dano perfurante. Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de Força CD 13 ou será derrubada no chão.");

const loboInvernal = new Criatura("Lobo Invernal", "3", "75 (10d10+20)", "13 (Imunidade à Frio)", "18(+4)", "13(+1)", "14(+2)", "7(–2)", "12(+1)", "8 (–1)", "<span class='nome-skill'>Audição e Faro Aguçados.</span> O lobo tem vantagem em testes de Sabedoria (Percepção) relacionados à audição e ao olfato.<br><span class='nome-skill'>Camuflagem de Neve.</span> O lobo tem vantagem em testes de Destreza (Furtividade) feitos em terrenos de neve.<br><span class='nome-skill'>Táticas de Matilha.</span> O lobo tem vantagem nas jogadas de ataque contra uma criatura se, pelo menos, um dos aliados do lobo estiver a 1,5 metro da criaturas e não estiver incapacitado.", "<span class='nome-ataque'>Mordida.</span> Ataque Corpo-a-Corpo com Arma: +6 para atingir, alcance 1,5 m, um alvo. Acerto: 11 (2d6 + 4) de dano perfurante. Se o alvo for uma criatura, ela deve ser bem sucedida num teste de resistência de Força CD 14 ou será derrubada no chão.<br><span class='nome-ataque'>Sopro Congelante (Recarrega 5–6).</span> O lobo expele um jato de vento congelante num cone de 4,5 metros. Cada criatura na área deve realizar um teste de resistência de Destreza CD 12, sofrendo 18 (4d8) de dano de frio caso fracasse, ou metade desse dano caso obtenha sucesso.");

const esqueleto = new Criatura("Esqueleto", "1/4", "13 (2d8+4)", "13", "10 (+0)", "14 (+2)", "15 (+2)", "6 (–2)", "8 (–1)", "5 (–3)", " --- ", "<span class='nome-ataque'>Espada Curta.</span> Ataque Corpo-a-Corpo com Arma: +4 para atingir, alcance 1,5 m, um alvo. Acerto: 5 (1d6 + 2) de dano perfurante.<br><span class='nome-ataque'>Arco Curto.</span> Ataque à Distância com Arma: +4 para atingir, distância 24/96 m, um alvo. Acerto: 5 (1d6 + 2) de dano perfurante.");

const zumbi = new Criatura("Zumbi", "1/4", "22 (3d8+9)", "8 (Imunidade à Veneno e Envenenado)", "13 (+1)", "6 (–2)", "16 (+3)", "3 (–4)", "6 (–2)", "5 (–3)", "<span class='nome-skill'>Fortitude de Morto-Vivo.</span> Se dano reduziria o zumbi a 0 pontos de vida, ele pode realizar um teste de resistência de Constituição com CD igual a 5 + o dano sofrido, a não ser que o dano seja radiante ou de um acerto crítico. Se obtiver sucesso, ele cairá a 1 ponto de vida, no lugar.", "<span class='nome-ataque'>Pancada.</span> Ataque Corpo-a-Corpo com Arma: +3 para atingir, alcance 1,5 m, um alvo. Acerto: 4 (1d6 + 1) de dano de concussão.");

const anomaliaDaAgua = new Criatura("Anomalia da Água", "3", "58 (9d10+9)", "13 (Imunidade à Veneno, Agarrado, Caído, Envenenado, Exausto, Impedido, Inconsciente, Paralisado / Resistência à fogo, concussão, perfurante e cortante de ataques não-mágicos)", "17 (+3)", "16 (+3)", "13 (+1)", "11 (+0)", "10 (+0)", "10 (+0)", "<span class='nome-skill'>Invisível na Água.</span> A anomalia da água é invisível enquanto estiver totalmente imersa em água.<br><span class='nome-skill'>Vínculo com a Água.</span> A anomalia da água morre se abandonar a água a qual foi vinculada ou se a água for destruída.", "<span class='nome-ataque'>Constrição.</span> Ataque Corpo-a-Corpo com Arma: +5 para atingir, alcance 3 m, uma criatura. Acerto: 13 (3d6 + 3) de dano de concussão. Se o alvo for Médio ou menor, ele será agarrado (CD 13 para escapar) e puxado 1,5 metro para a anomalia da água. Até que esse agarrão termine, o alvo está impedido e a anomalia da água tentará afoga-lo e a anomalia da água não pode constringir outro alvo.");

criaturas.push(anomaliaDaAgua);
criaturas.push(corvo);
criaturas.push(esqueleto);
criaturas.push(lobo);
criaturas.push(loboAtroz);
criaturas.push(loboInvernal);
criaturas.push(zumbi);

