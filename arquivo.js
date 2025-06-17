document.addEventListener('DOMContentLoaded', () => {

  // 1) Filtro de produtos (para páginas de categoria)
  const categoriaSection = document.querySelector('.categoria');
  if (categoriaSection) {
    // Cria um filtro simples baseado no texto do parágrafo do produto
    const produtos = categoriaSection.querySelectorAll('.produto');
    if (produtos.length > 0) {
      // Criar dropdown para filtro
      const filtroDiv = document.createElement('div');
      filtroDiv.style.margin = '20px';
      filtroDiv.innerHTML = `
        <label for="filtro-produto">Filtrar produtos:</label>
        <input type="text" id="filtro-produto" placeholder="Digite para filtrar...">
      `;
      categoriaSection.insertBefore(filtroDiv, categoriaSection.firstChild);

      const inputFiltro = document.getElementById('filtro-produto');
      inputFiltro.addEventListener('input', () => {
        const textoFiltro = inputFiltro.value.toLowerCase();
        produtos.forEach(produto => {
          const descricao = produto.querySelector('p').textContent.toLowerCase();
          if (descricao.includes(textoFiltro)) {
            produto.style.display = 'flex';
          } else {
            produto.style.display = 'none';
          }
        });
      });
    }
  }

  // 2) Validação simples do formulário de contato
  const formContato = document.querySelector('form');
  if (formContato) {
    formContato.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = formContato.querySelector('input[placeholder="Nome"]').value.trim();
      const email = formContato.querySelector('input[type="email"]').value.trim();
      const mensagem = formContato.querySelector('textarea').value.trim();

      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha Nome, Email e Mensagem para enviar.');
        return;
      }

      // Pode adicionar validação básica do email aqui se quiser

      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
      formContato.reset();
    });
  }

  // 3) Botão "Voltar ao Topo"
  const botaoTopo = document.createElement('button');
  botaoTopo.textContent = '↑ Topo';
  botaoTopo.style.position = 'fixed';
  botaoTopo.style.bottom = '30px';
  botaoTopo.style.right = '30px';
  botaoTopo.style.padding = '10px 15px';
  botaoTopo.style.fontSize = '16px';
  botaoTopo.style.border = 'none';
  botaoTopo.style.borderRadius = '5px';
  botaoTopo.style.backgroundColor = '#333';
  botaoTopo.style.color = '#fff';
  botaoTopo.style.cursor = 'pointer';
  botaoTopo.style.display = 'none';
  botaoTopo.style.zIndex = '1000';
  document.body.appendChild(botaoTopo);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      botaoTopo.style.display = 'block';
    } else {
      botaoTopo.style.display = 'none';
    }
  });

  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 4) Animação no botão "Shop Now"
  const shopNowBtn = document.querySelector('.banner button');
  if (shopNowBtn) {
    shopNowBtn.style.transition = 'all 0.3s ease';
    shopNowBtn.addEventListener('mouseenter', () => {
      shopNowBtn.style.backgroundColor = '#0056b3';
      shopNowBtn.style.transform = 'scale(1.1)';
    });
    shopNowBtn.addEventListener('mouseleave', () => {
      shopNowBtn.style.backgroundColor = 'blue';
      shopNowBtn.style.transform = 'scale(1)';
    });

    // Mantém o clique que redireciona para produtos.html
    shopNowBtn.addEventListener('click', () => {
      window.location.href = 'produtos.html';
    });
  }

});
