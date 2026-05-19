// SkillMatch JS - Simulador de Compatibilidade com Vagas Front-End Júnior

const candidato = 
{nome: "Luiz",
  area: "Front-End",
  experienciaMeses: 3,
  habilidades: ["JavaScript", "HTML", "CSS", "Lógica de Programação", "Python"]}

const vagas = [
  {id: 1,
    empresa: "LAB365",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto"},
  {id: 2,
    empresa: "SENAI",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "HTML", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"},
  {id: 3,
    empresa: "Google",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "CSS", "HTML", "Lógica de Programação"],
    salario: 3000,
    modalidade: "Presencial"}
]


function compat(candidato, vaga) {
  let skills_candidato = candidato.habilidades
  //console.log(candidato.habilidades)
  let skills_vaga = vaga.requisitos

  let skills_compat = []

  for (let i of skills_vaga) {
    if (skills_candidato.includes(i)) {
      skills_compat.push(i)
    }
  }

  let qtd_compativeis = skills_compat.length
  let qtd_skils_vaga = vaga.requisitos.length

  let percentual = Math.round((qtd_compativeis / qtd_skils_vaga) * 100)

  return {
    percentual: percentual,
    cumpridos: skills_compat
  }
}

function classificar(percentual) {
  let aderencia = ""

  if (percentual >= 80) {
    aderencia = "Alta compatibilidade"
  } else if (percentual >= 50) {
    aderencia = "Média compatibilidade"
  } else {
    aderencia = "Baixa compatibilidade"
  }

  return aderencia
}

function skillsFalta(candidato, vaga) {
  let skills_exigido = vaga.requisitos
  let skills_candidato_tem = candidato.habilidades

  let faltantes = skills_exigido.filter(x =>
    !skills_candidato_tem.includes(x)
  )

  return faltantes
}

function melhorVaga(candidato, vagas) {
  let melhor_vaga = vagas.reduce((a, b) => {
    let melhor = compat(candidato, a)
    let atual = compat(candidato, b)

    if (atual.percentual > melhor.percentual) {
      return b
    } else {
      return a
    }
  })

  return melhor_vaga
}

function recomendacao(candidato, vaga) {
  let faltantes = skillsFalta(candidato, vaga)

  if (faltantes.length === 0) {
    return "Parabéns! Você possui todas as habilidades exigidas para esta vaga."
  } else {
    return "Para se candidatar a esta vaga, recomendamos estudar: " + faltantes.join(", ") + "."
  }
}

let resultados = vagas.map(vaga => {
  let compatibilidade_vaga = compat(candidato, vaga)
  let classificacao_vaga = classificar(compatibilidade_vaga.percentual)
  let habilidades_faltantes = skillsFalta(candidato, vaga)
  let vaga_recomendada = recomendacao(candidato, vaga)

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    percentual: compatibilidade_vaga.percentual,
    classificacao: classificacao_vaga,
    skills_encontradas: compatibilidade_vaga.cumpridos,
    skills_faltantes: habilidades_faltantes,
    recomendacao: vaga_recomendada
  }
})

console.log("=======================================================================================")
console.log("Candidato: " + candidato.nome)
console.log("Habilidades: " + candidato.habilidades.join(", "))

const tem_experiencia = candidato.experienciaMeses > 0
console.log("Tem experiência: " + tem_experiencia)
console.log("=======================================================================================")

for (let j of resultados) {
  let qtd_skills_faltante = j.skills_faltantes.length

  console.log("Empresa: " + j.empresa)
  console.log("Cargo: " + j.cargo)
  console.log("Compatibilidade: " + j.percentual + "% - " + j.classificacao)
  console.log("Habilidades encontradas: " + j.skills_encontradas.join(", "))
  if (qtd_skills_faltante > 0) {
    console.log("Habilidades faltantes: " + (j.skills_faltantes.join(", ")))}
  else { console.log("Habilidades faltantes: Nenhuma")}
  console.log("Recomendação: " + j.recomendacao)
console.log("=======================================================================================")
}

const vaga_mais_compativel = melhorVaga(candidato, vagas)
console.log("Vaga mais compatível: " + vaga_mais_compativel.empresa + " - " + vaga_mais_compativel.cargo)
console.log("Compatibilidade: " + compat(candidato, vaga_mais_compativel).percentual + "%")
console.log("=======================================================================================")

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa
    this.cargo = cargo
    this.requisitos = requisitos
    this.salario = salario
    this.modalidade = modalidade
  }

  exibirResumo() {
    return this.cargo + " na empresa " + this.empresa
  }
}

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade)
    this.nivel = nivel
  }

  exibirNivel() {
    return "Nível da vaga: " + this.nivel
  }
}

const vaga1 = new VagaFrontEnd("LAB365", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação"], 2800, "Remoto", "Júnior")

console.log()
console.log("======================= CLASSES E HERANÇA =======================")
console.log(vaga1.exibirResumo())
console.log(vaga1.exibirNivel())

function finalizar(nome_candidato, callback) {
  console.log("Análise finalizada!")
  callback(nome_candidato)
}

function ExibirMensagem(nome) {
  console.log(nome + ", revise suas habilidades faltantes e atualize o plano de estudos.")
}

console.log()
console.log("======================= CALLBACK =======================")
finalizar(candidato.nome, ExibirMensagem)

function lembrar() {
  let contador = 0

  return function () {
    contador += 5
    return contador
  }
}

const somar_contador = lembrar()

console.log()
console.log("======================= CLOSURE =======================")
console.log("1º soma: " + somar_contador())
console.log("2º soma: " + somar_contador())
console.log("3º soma: " + somar_contador())

function simulacaoDehBusca() {
  return new Promise((x) => {
    setTimeout(() => {
      x(vagas)
    }, 1000)
  })
}

async function iniciarSistema() {
  console.log()
  console.log("======================= PROMISE E ASYNC/AWAIT =======================")
  console.log("Buscando vagas...")

  let vagasCarregadas = await simulacaoDehBusca()

  console.log("Vagas carregadas com sucesso!")
  console.log("Total de vagas disponíveis: " + vagasCarregadas.length)
}

iniciarSistema()