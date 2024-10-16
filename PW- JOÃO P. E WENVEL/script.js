
let disciplinasTecnicas = ["- PROGRAMAÇÃO WEB I, II E III","- DESIGN DIGITAL" , "- BD BANCO DE DADOS I E II","- APS ANÁLISE E PROJETO DE SISTEMAS","- EACNT ESTUDOS AVANÇADOS EM CIÊNCIAS DA NATUREZA E SUAS TECNOLOGIAS","- EAMT ESTUDOS AVANÇADOS EM MATEMÁTICA E SUAS TECNOLOGIAS","- FI FUNDAMENTOS DA INFORMÁTICA","- LIC LABORATÓRIO DE INVESTIGAÇÃO CIENTÍFICA","- PRÁTICAS DE EMPREENDEDORISMO","- TPA TÉCNICAS DE PROGRAMAÇÃO E ALGORÍTMOS"];
let disciplinasExatas = ["- MATEMÁTICA","- FÍSICA","- QUÍMICA","- ARTE","- EDUCAÇÃO FÍSICA","- HISTÓRIA","- INGLÊS","- PORTUGUÊS"];


function updateBoxes() { 
    document.getElementById("tecnicasBox").innerText = disciplinasTecnicas.join("\n");
    document.getElementById("exatasBox").innerText = disciplinasExatas.join("\n")

}

{     // Push - serve para adiconar um item no final da lista basicamente
    disciplinasTecnicas.push("TPA - TÉCNICAS DE PROGRAMAÇÃO E ALGORÍTMOS");
    disciplinasExatas.push("PORTUGUÊS");

    // Pop - Remove a última disciplina de cada lista, não vou usar.
    disciplinasTecnicas.pop();
    disciplinasExatas.pop();

    // Unshift - Adiciona uma disciplina no início de cada uma das lista
    disciplinasTecnicas.unshift("PROGRAMAÇÃO WEB I, II E III");
    disciplinasExatas.unshift("MATEMÁTICA");

    // Shift - Remove praticamente  a primeira disciplina de cada lista. nem usei
    disciplinasTecnicas.shift();
    disciplinasExatas.shift();

    
    updateBoxes();
}


updateBoxes();
