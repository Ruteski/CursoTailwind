// instalação inicial tailwind
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

// inicia o arquivo de configuração do tailwind
yarn tailwindcss init

// builda o tailwind para o projeto - aqui tem que ser o npx
npx tailwindcss-cli@latest build -o src/css/build.css

COMO CUSTOMIZAR O TAILWIND
- arquivo tailwind.config.js
- theme: estilos para o nosso projeto
- extend: extensões das nossas classes do projeto
- plugins: adicionar plugins de tailwind externos
- prefix: adiciona um prefixo as classes do tailwind