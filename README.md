JULIO SHOES - Mini Loja Virtual Front-End
O "JULIO SHOES" é um mini projeto front-end que simula uma loja virtual de calçados, construído com HTML5, CSS3 e JavaScript puro. O foco principal é a geração dinâmica de conteúdo: os produtos são carregados de uma Array de Objetos (um banco de dados simulado) e, em vez de uma lista estática, o script agrupa os itens por categoria e os injeta no HTML como carrosséis de produtos com scroll horizontal. O design utiliza Flexbox para criar um layout moderno com "sticky footer", e a identidade visual (slategray, box-shadow) é reutilizada de forma coesa tanto nos cards de produto quanto na página de login, demonstrando uma estrutura de site multi-página com componentes reaproveitáveis.

STATUS DO PROJETO
🚧 Em Desenvolvimento 🚧

(Este é um projeto de estudo focado no front-end e na manipulação do DOM. Funcionalidades de back-end, como sistema de carrinho ou pagamento, não foram implementadas).

🚀 RECURSOS E FUNCIONALIDADES
Geração Dinâmica de Conteúdo: Os produtos não estão fixos no HTML. Eles são carregados a partir de um banco de dados simulado (base_dados_produtos) em script.js.

Agrupamento por Categoria: O JavaScript processa a lista de produtos, agrupa-os dinamicamente por categoria (Botas, Corrida, Casual, etc.) e cria uma seção de carrossel para cada uma.

Layout Moderno com Flexbox: O site utiliza Flexbox para a estrutura principal, incluindo um "Sticky Footer" que se fixa na parte inferior da tela em páginas com pouco conteúdo (como o Login).

Carrossel de Produtos: As seções de produtos usam overflow-x: auto para criar um scroll horizontal, uma abordagem de UI comum em e-commerce.

Design Consistente: O CSS compartilha uma identidade visual (paleta de cores, box-shadow, border-radius) entre a página de produtos e a página de login.

Múltiplas Páginas: O projeto inclui as páginas index.html (loja) e login.html, ambas reutilizando o mesmo header, footer e style.css.

Imagens de Placeholder: Utiliza o serviço gratuito Unsplash Source (ou via.placeholder.com) para carregar imagens de produtos reais e de alta qualidade que não são bloqueadas por proteção de hotlink.

💻 TECNOLOGIAS UTILIZADAS
HTML5: Para a estrutura e semântica das páginas.

CSS3 (Flexbox): Para toda a estilização, layout e design.

JavaScript (Vanilla JS): Para a manipulação do DOM, lógica de agrupamento e geração dinâmica do HTML.

🏁 COMO RODAR O PROJETO
Este projeto é 100% front-end e não requer instalação de dependências ou um servidor complexo.

Clone este repositório (ou simplesmente baixe os arquivos ZIP).

Navegue até a pasta do projeto.

Abra o arquivo index.html (ou login.html) diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

Pronto! O script será executado assim que a página carregar (DOMContentLoaded) e os produtos aparecerão na tela.

📁 ESTRUTURA DE ARQUIVOS
/JULIO-SHOES
│
├── 📄 index.html      (Página principal da loja)
├── 📄 login.html      (Página de login)
├── 📄 style.css       (Folha de estilos única para todo o site)
└── 📄 script.js       (Script principal com a lógica do app)
script.js contém:

base_dados_produtos: A Array (banco de dados) com todos os dados dos produtos.

DOMContentLoaded: O evento que espera a página carregar.

A lógica para agrupar os produtos e injetar o HTML dinâmico no <main>.

📄 LICENÇA
Este projeto está sob a licença MIT.

Desenvolvido por Júlio César
