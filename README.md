# NTconsulting

# Introdução

Projeto destinado ao Teste Prático de Desenvolvimento Front-End com Vue.js

# Rodando o projeto 

Recomendo abrir o arquivo **cloud-platform.code-workspace** com o Visual Studio Code para aproveitar as funcionalidades de debug, formatação e extensões recomendadas para rodar o projeto. 

Para o rodar o projeto, vá na aba de debug e selecione no combobox como deseja rodar  o mesmo. 

Porem é possivel rodar utilizano os seguintes passos. 
    
Dentro da pasta code execute **npm install** para instalar os pacotes necessarios para utilização.

Após a instalação utilize o comando **npm run dev** para rodar a aplicação. 

# Boas práticas

O Vue é um framework que nos permite componentizar nossas paginas. Isso nos permite então reaproveitar grande parte de nosso código, afim de evitar duplicidade. 

Antes de commitar a sua alteração, recomendamos que realize um **npm run build** para verificar se não existe nenhum erro de typescript. Caso exista, não passará no build.

# Configurações

Nesse projeto foram utilizadas as seguintes configurações:
    Node    -> v20.16.0
    NPM     -> v9.2.0
    VUE     -> v3.4.29
    VUETIFY -> v3.6.14
    Pinia   -> v2.1.7
    Vite    -> v5.3.1

Para definir as configurações do projeto, será necessário alterar o arquivo **code/public/settings.json**

Junto a isso, será necessário mapear a classe de configuração, que pode ser encontrada em **code/models/configurations/index.ts**

# Páginas

As novas **páginas** devem ser criadas dentro da pasta **code/pages** seguindo o padrão das existentes. 

# Componentes

Os novos **componentes** devem ser criados dentro da pasta **code/components**

# Rotas 

As **rotas** devem ser criadas dentro da pasta **code/router/routes** seguindo o padrão existente. 


# Tecnologias utilizadas

* [Vue.js](https://vuejs.org/)
* [Vuetify](https://next.vuetifyjs.com/)
* [Vue Router](https://router.vuejs.org/)
* [Pinia](https://pinia.esm.dev/)
* [Typescript]( https://www.typescriptlang.org/ )
