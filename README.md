# shiny-masters
<h1>Projeto individual do primeiro semestre de ADS na SPTech</h1>
<h2>Projeto fullstack</h2>
<ul>
        <li>Backend desenvolvido em node.js com express</li>
        <li>Frontend desenvolvido com html, css e javascript</li>
        <li>Banco de dados MYSQL</li>
    </ul>

<h1>Documentação do projeto</h1>
<h2>Contexto</h2>
	Pokémon é uma franquia de mídia criada no japão, está franquia possui, Jogos, cartas colecionáveis, séries e diversos outros produtos, todos focados em um universo onde as pessoas convivem com criaturas chamadas de Pokémon, nos jogos da franquia Pokémon seu personagem é um treinador Pokémon que utiliza essas criaturas para batalhas com outros treinadores, seu objetivo é capturar todos os Pokémon para completar a Pokédex que é uma ferramenta que registra dados dos Pokémon que você captura.
Nos jogos da franquia Pokémon, existem Pokémon com coloração diferente dos outros da mesma espécie chamados de Pokémon shiny, que são extremamente raros, em alguns jogos a chance de encontrar um shiny chega a 1 em 4.096, devido a essa raridade existe uma prática muito conhecida na comunidade Pokémon chamada de “shiny hunt” que consiste em utilizar métodos para aumentar a probabilidade de encontrar um shiny, como por exemplo o “Masuda Method”, que consiste em chocar ovos de dois Pokémon de nacionalidades diferentes, o que aumenta a chance do Pokémon que sai do ovo ser shiny de 1 em 4.096 para 1 em 683.

<h2>Objetivo</h2>
	Criar uma aplicação web para ajudar aqueles que desejam iniciar no universo de shiny hunt em Pokémon e incentivar essa prática criando um tipo de agenda onde a pessoa pode registrar os Pokémon shiny que ela já capturou e receber rankings e desbloquear insígnias com base na quantidade de Pokémon shiny capturados.

<h2>Justificativa</h2>
Desde a minha infância a franquia Pokémon tem uma grande importância para mim, um dos primeiros jogos que eu joguei foi Pokémon FireRed quando eu tinha 10 anos de idade e desde então eu já joguei todos os jogos de Pokémon e jogo até hoje, eu sempre fui apaixonado por fazer shiny hunting, e pegar o máximo de Pokémon shiny possível em cada jogo, os jogos de Pokémon não apenas me forneceram horas de entretenimento, mas também já me ajudaram em momentos muito difíceis e também já me ajudaram a fazer muitas amizades.
Atualmente é muito complicado para uma pessoa que está iniciando nos jogos de Pokémon aprender as melhores formas de fazer uma shiny hunt, o Shiny masters visa facilitar para players iniciantes começarem. Explicando as possíveis formas de fazer uma shiny hunt, quais as mais eficientes e também em que situações utilizar cada método de shiny hunting.
O projeto também visa engajar mais a comunidade na prática de shiny hunting por meio de sua dashboard e das insígnias que serão desbloqueadas com base na quantidade de Pokémon shiny que o usuário captura.
O projeto Shiny master também contribui para o objetivo de desenvolvimento sustentável número 3 da ONU – Saúde e Bem-estar, tendo em vista que a prática de atividades de lazer pode causar diversos benefícios para a saúde mental e o bem-estar de um indivíduo. Logo o projeto não visa apenas fornecer informações e recursos para a prática de shiny hunting, mas também promover um lazer que seja benéfico para a saúde e o bem-estar dos jogadores de Pokémon.

<h2>Escopo</h2>
1.	Site
•	Site contendo informações sobre a franquia Pokémon e métodos do shiny hunt e também tela de cadastro e login para entrar na shiny box.

2. Shiny Box (dashboard)
-Tela de perfil.
•	Informações sobre quantos Pokémon o usuário capturou, quantas insígnias de campeão possui e quantas insígnias de região conquistou;
•	Gráficos mostrando progresso de insígnias de região e quantidade de Pokémon capturados por região;
•	Função de receber análise detalhada do professor sobre seu perfil;
•	Função de alterar imagem do perfil para imagem de algum dos Pokémon shiny que o usuário já capturou;
•	Botão para excluir conta.

-Tela de insígnias
•	Tela contendo todas as insígnias que o usuário pode conquistar separadas por regiões, cada região tendo uma barra de progresso e informações como a porcentagem de progresso que o usuário teve em determinada região;
•	Insígnias que o usuário ainda não conquistou ofuscadas com opacidade baixa, insígnias que já conquistou destacadas com opacidade alta.

-Tela de Shiny Box
•	Campo para adicionar Pokémon capturado;
•	Uma box para cada região contendo imagens dos Pokémon que já foram capturados pelo mesmo.

3. Banco de dados
•	Criar a modelagem lógica para o projeto;
•	Criar o database e as tabelas.

4. Back-end da aplicação
•	Criar servidor local para a aplicação com node.js;
•	Conectar aplicação ao banco de dados mysql.

5. Analytics
•	Criar o analytics com base nos dados capturados pelo usuário da aplicação, gráficos e análise do professor.


