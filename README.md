🍁 Pro-League Arenas 🍁 - Scripts de Gerenciamento de Servidor HaxBall
Este repositório contém os scripts utilizados para gerenciar o servidor Pro-League Arenas para o jogo HaxBall. A infraestrutura do servidor foi projetada para oferecer uma experiência de jogo online fluida, com integração com banco de dados, comunicação via webhooks e a utilização de haxballheadless para facilitar o gerenciamento das salas.

🚀 Funcionalidades
Banco de Dados: Armazena e gerencia informações importantes do servidor, como dados dos jogadores, estatísticas e configurações de salas.

Webhooks: Comunicação em tempo real com outros sistemas (como Discord ou outros serviços) para integração de funcionalidades adicionais.

haxballheadless: Ferramenta utilizada para rodar o servidor HaxBall sem interface gráfica, facilitando a administração e o gerenciamento das salas.

Lista de Salas: As salas estão disponíveis para visualização e conexão na Room List, hospedada diretamente no haxballheadless.

Hospedagem em AWS: Os scripts estão hospedados em uma VM da AWS, garantindo escalabilidade e desempenho adequados.

🖥️ Tecnologias Utilizadas
Node.js: Ambiente de execução para os scripts de backend.

Banco de Dados: Utilizado para gerenciar dados de salas, jogadores e configurações.

Webhooks: Para comunicação entre sistemas em tempo real.

haxballheadless: Utilizado para gerenciar as salas de jogo do HaxBall de forma eficiente e sem a necessidade de interface gráfica.

AWS: A hospedagem da VM na Amazon Web Services garante escalabilidade e alta disponibilidade para o servidor.

🌍 Como Funciona
Os scripts são executados em uma máquina virtual (VM) da AWS, onde o HaxBall está rodando de forma "headless", ou seja, sem uma interface gráfica. As salas criadas pelo servidor podem ser acessadas na Room List. O sistema de comunicação via webhooks permite que os eventos importantes, como mudanças nas salas, sejam enviados para sistemas externos, como Discord.
