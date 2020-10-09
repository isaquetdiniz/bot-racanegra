# Meu primeiro BOT do Discord

Repositório com o racanegra, meu primeiro bot do discord :)

## A motivação

Eu sempre gostei da facilidade de digitar comandos e receber mensagens engraçadas, dados, músicas. Me parecia algo muito divertido e simples de fazer, e foi o que acabou sendo no fim das contas.

## A ideia

Foi bem simples, um bot que responde o comando `/pagodinho` com um link do youtube para uma música de pagode/samba aleatória.

## O progresso

Até agora o bot consegue responder bem ao comando, mas a seleção de links que ele pode enviar foi pré-definida por mim.

> Sim, eu sem querer upei o node_modules junto KKKKKKKKKKKK

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

1. Você deve criar uma conta no discord, pode fazer isso indo no site oficial [aqui](https://discord.com/)
2. Agora que já tem uma conta, você precisar entrar na página de gerenciamento dos bots, que é essa [daqui](https://discord.com/developers/applications)
3. Nela, você deve clicar em