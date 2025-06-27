// ✅ Mostra um alerta quando o formulário é enviado
function enviarFormulario() {
  alert("Mensagem enviada com sucesso! Obrigado por entrar em contato 😊");
  return false;
}

// ✅ Seleciona todos os elementos que devem aparecer com animação ao rolar a página
const elementos = document.querySelectorAll('.animar');

// ✅ Função que verifica se o elemento entrou na tela e adiciona a classe "visivel"
function mostrarElemento() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top; // distância do topo da tela até o elemento

    if (topo < alturaTela - 100) {
      el.classList.add('visivel'); // ativa transição no CSS
    }
  });
}

// ✅ Dispara a animação tanto no carregamento quanto ao rolar a página
window.addEventListener('scroll', mostrarElemento);
window.addEventListener('load', mostrarElemento);

// ✅ Lógica de abas interativas (usado nas páginas com .aba e .painel-aba)
const abas = document.querySelectorAll(".aba");         // Botões das abas
const paineis = document.querySelectorAll(".painel-aba"); // Áreas de conteúdo de cada aba

// ✅ Só executa esse código se houver abas e painéis na página
if (abas.length && paineis.length) {
  abas.forEach(botao => {
    botao.addEventListener("click", () => {

      // 🔁 Remove destaque de todas as abas e painéis
      abas.forEach(a => a.classList.remove("ativa"));
      paineis.forEach(p => p.classList.remove("ativa"));

      // ✅ Ativa a aba clicada
      botao.classList.add("ativa");

      // ✅ Ativa o painel correspondente com base no atributo data-alvo
      const alvo = document.querySelector(botao.dataset.alvo); // Exemplo: "#almond"
      if (alvo) alvo.classList.add("ativa");
    });
  });
}