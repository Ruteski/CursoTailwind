// instalação inicial tailwind
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

// inicia o arquivo de configuração do tailwind
yarn tailwindcss init

// builda o tailwind para o projeto - aqui tem que ser o npx
npx tailwindcss-cli@latest build -o src/css/build.css