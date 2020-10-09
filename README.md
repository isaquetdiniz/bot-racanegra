# Meu primeiro BOT do Discord

Repositório com o racanegra, meu primeiro bot do discord :)

## A motivação

Eu sempre gostei da facilidade de digitar comandos e receber mensagens engraçadas, dados, músicas. Me parecia algo muito divertido e simples de fazer, e foi o que acabou sendo no fim das contas.

## A ideia

Foi bem simples, um bot que responde o comando `/pagodinho` com um link do youtube para uma música de pagode/samba aleatória.

## O progresso

Até agora o bot consegue responder bem ao comando, mas a seleção de links que ele pode enviar foi pré-definida por mim.

### Melhorias

1. Fica como evolução adicionar um webcrawling que seleciona as músicas de acordo com que aparecem no youtube.
2. Fazer o bot tocar a música também.
3. Realizar o deploy em um servidor externo

## Como fazer um bot no Discord ?

É bem mais fácil do que parece, o discord já oferece uma interface bem intuitiva para construir aplicações desse tipo, mas antes de partir para os primeiros passos, é preciso entender alguns pontos.

1. O bot funciona como um servidor que se conecta com o discord através de uma API (que nada mais é do que uma interface de comunicação) e a partir das informações que a API manda para o nosso bot, ele realiza uma ação. 

2. Sendo o bot um servidor, ele se mantem funcional enquanto estiver rodando, ou seja, você precisa mantê-lo rodando localmente ou realizar o deploy em algum servidor externo. 

3. Você pode se conectar com a API do Discord com a linguagem que for mais confortável para você, no meu caso acabei usando JavaScript.

## Criando o bot

### Configuando o Discord 

1. Você deve criar uma conta no discord, pode fazer isso indo no site oficial [aqui](https://discord.com/).
2. Agora que já tem uma conta, você precisar entrar na página de gerenciamento dos bots, que é essa [daqui](https://discord.com/developers/applications).
3. Nela, você deve clicar em **New Application**, depois dar um nome a sua aplicação e clicar em **CREATE**.
4. Pronto, agora você pode adicionar uma descrição e uma foto do seu bot, não é obrigatório mas é recomendado :).
5. Na aba *Bot* você vai poder adicionar o seu bot ao discord seguindo os seguintes passos: **Add Bot** e depois, **Yes, i do it!** (Se ele der um erro relacioando ao nickname, você vai precisar trocar :( ).
6. Se ele apareceu, deu tudo certo! E agora precisamos adicioná-lo em algum canal, para isso vamos para *OAuth2* e selecionar a opção de **bot** e logo abaixo, dar as permissões que ele vai precisar, é meio óbvio que se você quer que ele se conecte ao chat de voz, precisará dar permissão para isso, idem para ler e enviar mensagens de textos. Para a versão inicial desse bot eu selecionei **Send Messages**, **Manage Messages** e **Send TTS Messages**, agora é só copiar o link que foi gerado, abrir uma nova aba do navegador e entrar nele.
7. Na tela que foi aberta, é possível selecionar o canal que deseja adicioná-lo, e é importante lembrar que você deve ser administrador de um canal para conseguir adicionar um bot nele, após confirmar você vai receber uma mensagem dizendo se ocorreu tudo bem.
8. Se tudo deu certo até aqui, quando abrir o canal no discord vai ser possível ver o bot que você criou no canal, mas offline. 
9. Agora vamos colocá-lo no ar :).

### Vamo codar o bicho

#### Requisitos
- [Node.js](https://nodejs.org/en/)
- NPM

1. Bem, como eu disse mais à cima, escolhi fazer o bot em javascript, e existe uma biblioteca prontíssima para colocarmos a mão na massa, ela se chama [DiscordJs](https://discord.js.org/#/).
2. Com o node instalado, e o projeto baixado, o que precisamos fazer é abrir o terminal e navegar até a pasta do projeto, e então com
```
npm install 
```
instalamos todas as dependências que o projeto precisa, incluindo o DiscordJs e o dotenv.
3. Antes de iniciar o projeto, é necessário abrir o arquivo `.envexample`, adicionar o TOKEN (Ir em *Bot* e clicar em **copy**) do seu bot no campo TOKEN, ele deveria ficar assim: `TOKEN=token-do-seu-bot`, e agora renomeamos o `.envexample` para `.env`
4. Finalmente podemos iniciar o bot com: 
```
node bot.js
```
e vê-lo ficar online no canal do discord no qual foi adicionado.

