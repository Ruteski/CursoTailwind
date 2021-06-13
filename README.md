// instalação inicial tailwind
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

// inicia o arquivo de configuração do tailwind
yarn tailwindcss init

// builda o tailwind para o projeto - aqui tem que ser o npx
npx tailwindcss-cli@latest build styles.css -o src/css/build.css

COMO CUSTOMIZAR O TAILWIND
- arquivo tailwind.config.js
- theme: estilos para o nosso projeto
- extend: extensões das nossas classes do projeto
- plugins: adicionar plugins de tailwind externos
- prefix: adiciona um prefixo as classes do tailwind
- -----------------------
- DEFININDO BREAKPOINTS:
- - na chave screens do theme
- ------------------------
- ALTERANDO ESPAÇAMENTO - altera o valor do espaçamento, ex: p-2, m-20, vai alterar/criar o valor depois do traço
- - na chave spacing