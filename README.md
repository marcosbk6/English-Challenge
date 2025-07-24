# Sistema de Reconhecimento de Voz para Aprender Cores em Inglês

Este projeto é um jogo educativo inspirado no universo do Mario, cujo objetivo é ajudar usuários a aprenderem e praticarem o nome das cores em inglês utilizando reconhecimento de voz.

## Demonstração

O usuário deve falar o nome da cor exibida na tela (em inglês). Se acertar, ganha uma moeda; se errar, perde uma moeda. O sistema utiliza a API de reconhecimento de voz do navegador.

## Funcionalidades

- **Reconhecimento de voz:** O jogo escuta o que o usuário fala e compara com a cor exibida.
- **Pontuação:** O usuário ganha ou perde moedas conforme acerta ou erra.
- **Feedback sonoro:** Sons de acerto e erro são reproduzidos.
- **Visual temático:** Elementos visuais inspirados no Mario, com imagens e cores vibrantes.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript 
- Web Speech API (Reconhecimento de Voz)
- Recursos de áudio e imagens

## Estrutura de Pastas

```
/
├── audio/         # Sons de acerto e erro
├── css/           # Estilos do jogo
├── img/           # Imagens do Mario, moedas, ícones, etc.
├── js/            # Lógica do jogo (function.js)
├── mock/          # Protótipo visual (imagem)
└── index.html     # Página principal
```

## Como Executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador **Google Chrome** ou outro que suporte a Web Speech API.
3. Clique no botão "RESPONDER" e fale o nome da cor exibida em inglês.
4. Veja sua pontuação aumentar ou diminuir conforme o resultado.

> **Atenção:** O reconhecimento de voz pode não funcionar em todos os navegadores. Recomenda-se o uso do Google Chrome.

## Créditos

- Imagens e sons utilizados são de domínio público ou adaptados para fins educacionais.
- Projeto inspirado no universo Mario e desenvolvido para fins de aprendizado. 