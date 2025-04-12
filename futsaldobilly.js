// Importando a biblioteca HaxBall
const HBInit = require("haxball-node").HBInit;

// Configurações da sala
const roomName2 = "🔴⚫FUTSAL DA LOY  🔴⚫ ";
const maxPlayers = 30;
const roomPublic = true;
const geo = { code: "BR", lat: -23.51634162, lon: -46.6460824 };
const token = "thr1.AAAAAGZH-9_qU8eAwF43zg.Qm9bogAs7g13Y";

// Criando a sala com HBInit
const room = HBInit({
  roomName: roomName2,
  maxPlayers: maxPlayers,
  public: roomPublic,
  geo: geo,
  token: token,
  noPlayer: true,
});

// Aqui você pode adicionar outros comandos ou funcionalidades que quiser

room.setTeamsLock(true);
const password = "penardfggol#2024";
const password2 = "flamefgdgngo";

room.setTeamColors(1, 135, 0xffffff, [0xff0357, 0xcf0246, 0xa80239]);
room.setTeamColors(2, 135, 0xff004c, [0xfff2f2, 0xfff2f2, 0xfff2f2]);

/* Team chat prefix */
let prefixTeamChatStringss = "t ";

/* OPTIONS */
const maxTeamSize = 20;

/* PLAYERS */
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = {
  GA: 0,
  WI: 1,
  DR: 2,
  LS: 3,
  WR: 4,
  GL: 5,
  AS: 6,
  GK: 7,
  CS: 8,
  CP: 9,
  RL: 10,
  NK: 11,
};

var teamR;
var teamB;
var teamS;
var gameocorring;

/* GAME */
var officialAdms = [];
var colorAdm = [];
var lastTeamTouched;
var lastPlayersTouched;
var countAFK = false;
var activePlay = false;
var banList = [];
var muteList = [];

/* STATS */
var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var penativo = true;
var point = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streakr = 0;
var streakb = 0;
var allBlues = [];
var allReds = [];
var map = 3;

/* OBJECTS */
function Goal(time, team, striker, assist) {
  this.time = time;
  this.team = team;
  this.striker = striker;
  this.assist = assist;
}

function Game(date, scores, goals) {
  this.date = date;
  this.scores = scores;
  this.goals = goals;
}

/* COLORS */
var welcomeColor = 0xc4ff65;
var AnnouncementColor = 0xffefd6;
var announcementColor = 0xffefd6;
var redColor = 0xff1f17;
var blueColor = 0x0080ff;
var pinkColor = 0xff1ca4;
var yellowColor = 0xffff1f;
var strongRed = 0xff0000;
var colorOne = 0xff8400;
var colorTwo = 0xffaa4f;
var colorThree = 0xffc382;
var colorFour = 0xe69500;
var colorBan = 0x3a96dd;
var colorPass = 0xffc83d;
var colorHelp = 0xf03a17;
var redUni = 0xff1f17;
var blueUni = 0x0080ff;
var privateMessageColor = 0xff6efa;
var defaultColor = null;

/* Senha Dono */
var senharei = "!billyfoda"; // Reinier a lenda né vida

/* Senhas Subs Donos */
var senhatop1 = "!topone"; // isq
var senhacen = "!topone"; // telly
var senharoger = "!moasdadon2"; // yin
var senhappk = "!estadaddosunidos"; // alaska

/* Senhas Supevisores */
var senhahez = ""; // pk
var senharog = ""; // roger

/* Senha Gerente */
var senhakvk = ""; // Kvkzin

/* Senha Administradores Oficial */
var senhapun = "!ferreiraasdagoat9"; // ferreira
var senhanig = "!paganiwasdahopper"; // pagani
var senhaxpq = "!miraderadasadi10"; // vio
var senhatel = "!jonasasdapoco"; // pocoyo
var senhavio = "!vellasdadezgay"; // leonardo
var senhainv = "!fakedadsaovit4"; // dash
var senhavit = "!fechaasddura"; // lock
var senhafel = "!jotasdavebuceta"; // jota
var senhalen = "!senhoasdrzinha"; // srzia
var senhafio = ""; // alaska
var senhasay = ""; // sayd
var senhasil = ""; // Silva
var senhakc = ""; // kc
var senharat = ""; // Ratue do 085

/* Senha Moderadores */
var senhames = ""; // Messi

/* Cores Cargos & tags */
var reinieColor = 0xff0000;
var subsdonosColor = 0x00ffff;
var supsColor = 0xffff00;
var gersColor = 0x66e6f5;
var admsofcColor = 0x35ff00;
var modsColor = 0x1e35f5;
var vippremiumColor = 0x00ffff;
var vipgoldColor = 0xffd700;
var vipclassicsColor = 0xf0e68c;

var reiniColor = [];
var gustastagsColor = [];
var subsdonoColor = [];
var heztagsColor = [];
var gerColor = [];
var supColor = [];
var admofcColor = [];
var modColor = [];
var vippremiuColor = [];
var vipgolColor = [];
var vipclassicColor = [];

/* Cores */
let Cor = {
  Vermelho: 0xfa5646,
  Laranja: 0xffc12f,
  Verde: 0x7dfa89,
  Azul: 0x05c5ff,
  Amrelo: 0xffff17,
  Cinza: 0xcccccc,
  Branco: 0xffffff,
  Azulclaro: 0x6ecaff,
  Azulescuro: 0x426ad6,
  BLUE: 0x66e6f5,
  RED: 0xfa5646,
  ORANGE: 0xffc12f,
  GREEN: 0x7dfa89,
  YELLOW: 0xfff22a,
  PURPLE: 0xdb83ff,
  PINK: 0xff9eea,
  DARK_BLUE: 0x4f72ff,
  GRAY: 0x97a8c4,
  MARI: 0x66cdaa,
  WHITE: 0xfcfcff,
};

/* Comando !admin */
var admincomando = "!admin";

/* FUNCTIONS */
function updateAdmins() {
  var players = room.getPlayerList().filter((player) => player.id != 0);
  if (players.length == 0) return;
  if (players.find((player) => player.admin) != null) return;
}

/* AUXILIARY FUNCTIONS */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) {
  return (
    "[" +
    Math.floor(Math.floor(scores.time / 60) / 10).toString() +
    Math.floor(Math.floor(scores.time / 60) % 10).toString() +
    ":" +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
    ).toString() +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
    ).toString() +
    "]"
  );
}

function pointDistance(p1, p2) {
  var d1 = p1.x - p2.x;
  var d2 = p1.y - p2.y;
  return Math.sqrt(d1 * d1 + d2 * d2);
}

/* EVENTOS */
function SendMsg(msg, ignoreQuiteMode = true) {
  room.sendAnnouncement(msg, null, announcementColor, "bold", null);
}

function QuiteBot() {
  room.sendAnnouncement(
    "Modo silencioso ativado/desativado",
    null,
    announcementColor,
    "bold",
    null
  );
}

function RemoveBans() {
  room.sendAnnouncement(
    "Bans removidos",
    null,
    announcementColor,
    "bold",
    null
  );
  room.clearBans();
}

/* BUTTONS */
function topBtn() {
  if (teamS.length == 0) {
    return;
  } else {
    if (teamR.length == teamB.length) {
      if (teamS.length > 1) {
        room.setPlayerTeam(teamS[0].id, Team.RED);
        room.setPlayerTeam(teamS[1].id, Team.BLUE);
      }
      return;
    } else if (teamR.length < teamB.length) {
      room.setPlayerTeam(teamS[0].id, Team.RED);
    } else {
      room.setPlayerTeam(teamS[0].id, Team.BLUE);
    }
  }
}

function resetBtn() {
  if (teamR.length <= teamB.length) {
    for (var i = 0; i < teamR.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamR.length; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
  } else {
    for (var i = 0; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamB.length; i < teamR.length; i++) {
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
  }
}

function blueToSpecBtn() {
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
  }
}

function redToSpecBtn() {
  for (var i = 0; i < teamR.length; i++) {
    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
  }
}

function blueToRedBtn() {
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[i].id, Team.RED);
  }
}

/* GAME FUNCTIONS */
function endGame(winner) {
  const scores = room.getScores();
  game.scores = scores;
  const loser = winner == 1 ? 2 : 1;
  Rposs = Rposs / (Rposs + Bposs);
  Bposs = 1 - Rposs;
  lastWinner = winner;

  if (winner == Team.RED) {
    streakr++;
    streakb = 0;
    room.sendAnnouncement(
      "🥇 O time vermelho venceu por " +
        scores.red +
        "-" +
        scores.blue +
        " e está com " +
        streakr +
        " vitórias seguidas (🔥).",
      null,
      announcementColor,
      "bold",
      null
    );
  } else if (winner == Team.BLUE) {
    streakb++;
    streakr = 0;
    room.sendAnnouncement(
      "🥇 O time azul venceu por " +
        scores.blue +
        "-" +
        scores.red +
        " e está com " +
        streakb +
        " vitórias seguidas (🔥).",
      null,
      announcementColor,
      "bold",
      null
    );
  }

  room.sendAnnouncement(
    "🤼 O time vermelho (🔴) teve " +
      (Rposs * 100).toPrecision(3).toString() +
      "% de posse de bola enquanto o time azul (🔵) teve " +
      (Bposs * 100).toPrecision(3).toString() +
      "%.",
    null,
    announcementColor,
    "bold",
    null
  );
  scores.red == 0
    ? room.sendAnnouncement(
        " 🛡️ " + GKList[1].name + " não tomou nenhum gol!",
        null,
        announcementColor,
        "bold",
        null
      )
    : scores.blue == 0
    ? room.sendAnnouncement(
        " 🛡️ " + GKList[0].name + " não tomou nenhum gol!",
        null,
        announcementColor,
        "bold",
        null
      )
    : null;

  room.stopGame();
}

/* PLAYER FUNCTIONS */
function updateList(number, team) {
  if (room.getScores() != null) {
    if (team == Team.RED) {
      GKList = GKList.slice(0, number)
        .concat(GKList.slice(number + 1, maxPlayers))
        .concat(0)
        .concat(GKList.slice(maxPlayers, GKList.length));
    } else if (team == Team.BLUE) {
      GKList = GKList.slice(0, maxPlayers + number).concat(
        GKList.slice(maxPlayers + number + 1, GKList.length).concat(0)
      );
    }
  }
}

function updateTeams() {
  players = room.getPlayerList().filter((player) => player.id != 0);
  teamR = players.filter((p) => p.team === Team.RED);
  teamB = players.filter((p) => p.team === Team.BLUE);
  teamS = players.filter((p) => p.team === Team.SPECTATORS);
}

function getAuth(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH]
    : null;
}

function getAFK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK]
    : null;
}

function setAFK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.AFK] = value));
}

function getActivity(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT]
    : null;
}

function setActivity(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.ACT] = value));
}

function getGK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK]
    : null;
}

function setGK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.GK] = value));
}

function getMute(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE]
    : null;
}

function setMute(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.MUTE] = value));
}

/* STATS FUNCTIONS */
function getLastTouchOfTheBall() {
  const ballPosition = room.getBallPosition();
  updateTeams();
  for (var i = 0; i < players.length; i++) {
    if (players[i].position != null) {
      var distanceToBall = pointDistance(players[i].position, ballPosition);
      if (distanceToBall < 15) {
        // triggerDistance não definido, usando 15 como padrão
        !activePlay ? (activePlay = true) : null;
        if (
          lastTeamTouched == players[i].team &&
          lastPlayersTouched[0] != null &&
          lastPlayersTouched[0].id != players[i].id
        ) {
          lastPlayersTouched[1] = lastPlayersTouched[0];
          lastPlayersTouched[0] = players[i];
        }
        lastTeamTouched = players[i].team;
      }
    }
  }
}

function getStats() {
  if (activePlay) {
    updateTeams();
    lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
    var ballPosition = room.getBallPosition();
    point[1] = point[0];
    point[0] = ballPosition;
    ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
    var k = [-1, Infinity];

    for (var i = 0; i < teamR.length; i++) {
      if (teamR[i].position.x < k[1]) {
        k[0] = teamR[i];
        k[1] = teamR[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    k = [-1, -Infinity];
    for (var i = 0; i < teamB.length; i++) {
      if (teamB[i].position.x > k[1]) {
        k[0] = teamB[i];
        k[1] = teamB[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    findGK();
  }
}

function findGK() {
  var tab = [
    [-1, ""],
    [-1, ""],
  ];
  for (var i = 0; i < extendedP.length; i++) {
    if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.RED
    ) {
      if (tab[0][0] < extendedP[i][eP.GK]) {
        tab[0][0] = extendedP[i][eP.GK];
        tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    } else if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE
    ) {
      if (tab[1][0] < extendedP[i][eP.GK]) {
        tab[1][0] = extendedP[i][eP.GK];
        tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    }
  }
  GKList = [tab[0][1], tab[1][1]];
}

function initPlayerStats(player) {
  if (stats.get(player.name)) return;
  stats.set(player.name, [0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

/* Webhook */
function senhaslogsdiscord(mensagem) {
  var chamar = new XMLHttpRequest();
  chamar.open(
    "POST",
    "https://discord.com/api/webhooks/1354964971984781441/qEVuD-VIi6t5CjXwW3M27VQdqMVdBMni8ncU-ch9PM3izDnwGfaA10rguuMZvu-FYrmt"
  );
  chamar.setRequestHeader("Content-type", "application/json");

  var weebhook_dados = {
    username: "Logs de Administração",
    avatar_url:
      "https://media.discordapp.net/attachments/1342816498510725130/1354832554762571996/T0P.1_TEAM.png",
    content: mensagem,
  };

  chamar.send(JSON.stringify(weebhook_dados));
}

function sendAnnouncementToDiscord(message) {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1354919498788110449/z8op1r_NHfN2zmkou8MDW2TFADGBgUuZqcH24Wy0KqszeEuUbAnqMst8wOoJ416xd-D8"
  );
  request.setRequestHeader("Content-type", "application/json");

  var params = {
    username: "Entrada de Jogadores",
    avatar_url:
      "https://media.discordapp.net/attachments/1342816498510725130/1354832554762571996/T0P.1_TEAM.png",
    content: message,
  };

  request.send(JSON.stringify(params));
}

const webhookURL =
  "https://discord.com/api/webhooks/1354996357756092557/Fb9W0n1KMo-_n4KrHKBGSQHDg2xdsgZA085kDRODSsOAz99V7HFwjKha1Yq41wHizBxb";

let lastScores = {};

function getDate() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"),
    ano = data.getFullYear(),
    horas = data.getHours().toString().padStart(2, "0"),
    minutos = data.getMinutes().toString().padStart(2, "0");
  return `${dia}-${mes}-${ano}-${horas}h${minutos}m`;
}

function getScoresObjectTime(scores) {
  return (
    Math.floor(Math.floor(scores / 60) / 10).toString() +
    Math.floor(Math.floor(scores / 60) % 10).toString() +
    ":" +
    Math.floor(
      Math.floor(scores - Math.floor(scores / 60) * 60) / 10
    ).toString() +
    Math.floor(
      Math.floor(scores - Math.floor(scores / 60) * 60) % 10
    ).toString()
  );
}

function getPlayersStats(scores) {
  red = room.getPlayerList().filter((player) => player.team == 1);
  blue = room.getPlayerList().filter((player) => player.team == 2);
  printRed = red.map((player) => {
    return player.name;
  });
  printBlue = blue.map((player) => {
    return player.name;
  });
  getGameStats = [
    `${printRed} **${scores.red}-${scores.blue}** ${printBlue}\n` +
      `timer: ${getScoresObjectTime(scores.time)}\n` +
      `scoreLimit: ${scores.scoreLimit}\n` +
      `timeLimit: ${getScoresObjectTime(scores.timeLimit)}`,
  ];
  return getGameStats;
}

function sendDiscordWebhook() {
  // Avisa que a gravação será enviada
  room.sendAnnouncement(
    "🎥 A REC da partida foi finalizada.",
    null,
    0x00ff00,
    "bold",
    1
  );

  const form = new FormData();
  const scores = lastScores;
  const getTeamList = (id) => {
    const team = room
      .getPlayerList()
      .filter((player) => player.team == id)
      .map((player) => player.name);
    return team.length ? team.join("\n") : "\u3164";
  };
  const customTime = (time) =>
    ~~(Math.trunc(time) / 60) +
    "m" +
    (Math.trunc(time) % 60).toString().padStart(2, "0") +
    "s";

  form.append(
    "arquivo",
    new File([room.stopRecording()], `HBReplay-${getDate()}.hbr2`, {
      type: "text/plain",
    })
  );
  form.append(
    "payload_json",
    JSON.stringify({
      username: "📹 REPLAY DA PARTIDA",
      avatar_url:
        "https://static.wikia.nocookie.net/logopedia/images/3/33/Rede_Globo_logo_2014_2.png/revision/latest?cb=20140404224338",
      content:
        "🎥 A gravação da partida foi finalizada e está disponível abaixo! Os jogadores podem assistir ao replay.",
      embeds: [
        {
          color: 0x2b2d31,
          title: "🔥🔥🔥 FUTSAL DO BILLY 🔥🔥🔥",
          description: "Estatísticas detalhadas do jogo:",
          thumbnail: {
            url: "https://cdn-icons-png.flaticon.com/512/183/183314.png",
          },
          footer: {
            text: `HBReplay-${getDate()}.hbr2`.slice(
              0,
              `HBReplay-${getDate()}.hbr2`.length - 5
            ),
            icon_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/2048px-ORCID_iD.svg.png",
          },
          fields: [
            {
              name: "🔴 Time Vermelho",
              value: `**Pontuação:** ${
                scores.red
              }\n**Jogadores:**\n${getTeamList(1)}`,
              inline: true,
            },
            {
              name: "⚔️ VS ⚔️",
              value: "ㅤ",
              inline: true,
            },
            {
              name: "🔵 Time Azul",
              value: `**Pontuação:** ${
                scores.blue
              }\n**Jogadores:**\n${getTeamList(2)}`,
              inline: true,
            },
            {
              name: "⏱️ Tempo de jogo",
              value: `\`${customTime(scores.time)}\``,
              inline: true,
            },
            {
              name: "📊 Posse de bola",
              value: `\`\`\`diff\n+ Vermelho: ${(Rposs * 100).toPrecision(
                3
              )}%\n- Azul: ${(Bposs * 100).toPrecision(3)}%\`\`\``,
              inline: true,
            },
            {
              name: "🎥 Gravação",
              value:
                "Use um player compatível com HBR2 para assistir ao replay completo!",
              inline: false,
            },
          ],
        },
      ],
    })
  );

  const webhook = new XMLHttpRequest();

  webhook.onload = function () {
    if (webhook.status === 200 || webhook.status === 204) {
      room.sendAnnouncement(
        "✅ Gravação enviada com sucesso, acesse em !discord",
        null,
        0x00ff00,
        "bold",
        1
      );
    } else {
      room.sendAnnouncement(
        "❌ Falha ao enviar a gravação para o Discord",
        null,
        0xff0000,
        "bold",
        1
      );
    }
  };

  webhook.onerror = function () {
    room.sendAnnouncement(
      "❌ Erro de conexão ao tentar enviar para o Discord",
      null,
      0xff0000,
      "bold",
      1
    );
  };

  webhook.open("POST", webhookURL);
  webhook.send(form);
}

/* EVENTOS */
var adminColor = [];
var messageColor;
var colorControl = [];
var arm = new Map();
var stats = new Map();
var teste = true;
var permis = false;
var senhaperma = "!programadorperm";
var specoff,
  chatoff,
  alloff = false;
var topontuadores = [];
var conns = [];
var playersConn = {};

if (localStorage.getItem("conns")) {
  conns = JSON.parse(localStorage.getItem("conns"));
} else {
  var conn = JSON.stringify(conns);
  localStorage.setItem("conns", conn);
}

/* PLAYER MOVEMENT */
room.setTimeLimit(3);
room.setScoreLimit(3);

const vipspgc = ["", "", "", ""];
const vipp = ["3139312E3139312E32392E3534", "", ""];
const vipg = ["", ""];

room.onPlayerJoin = function (player) {
  // Lógica para dar admin ao primeiro jogador se a sala estava vazia
  if (room.getPlayerList().length === 1) {
    adminPlayer = player.id;
    room.setPlayerAdmin(player.id, true);
    room.sendAnnouncement(
      "🎖️ " +
        player.name +
        " é agora o administrador por ser o primeiro a entrar!",
      null,
      0x00ff00,
      "bold",
      2
    );
  }

  // Suas verificações de VIP existentes
  if (vipp.includes(player.conn)) {
    room.sendAnnouncement(
      `💎 O ADMIN ${player.name} ENTROU NA SALA! `,
      null,
      0x00ffff,
      "bold",
      2
    );
  }
  if (vipg.includes(player.conn)) {
    vipgolColor.push(player.name);
    room.sendAnnouncement(
      `💛 O ADMIN ${player.name} ENTROU NA SALA! `,
      null,
      0xffd700,
      "bold",
      2
    );
  }

  // Restante do seu código onPlayerJoin...

  var conn = player.conn;
  var acessoipv4 = conn
    .match(/.{1,2}/g)
    .map(function (v) {
      return String.fromCharCode(parseInt(v, 16));
    })
    .join("");

  sendAnnouncementToDiscord(
    "```" +
      "📝Informações do jogador, conn, auth, IP e data ⏰" +
      "\n" +
      "🛸 Nick: " +
      player.name +
      "\n" +
      "🌐 Conn: " +
      player.conn +
      "\n" +
      "🔥 Auth:  " +
      player.auth +
      "\n" +
      "🌏 Ipv4: " +
      acessoipv4 +
      "\n" +
      "📅 Data: " +
      `${getDate()}` +
      "```"
  );

  for (let i = 0; i < conns.length; i++) {
    if (conns[i] == player.conn) {
      room.kickPlayer(
        player.id,
        "🚨👮‍♂️ Você está na lista negra da sala!",
        true
      );
      break;
    }
  }

  arm.set(player.id, [player.conn, 0, 0, "", 0, false, 0, false]);

  if (!localStorage.getItem("status" + player.name)) {
    initPlayerStats(player);
    var ps = JSON.stringify(stats.get(player.name));
    localStorage.setItem("status" + player.name, ps);
  } else {
    var ps = JSON.parse(localStorage.getItem("status" + player.name));
    stats.set(player.name, [
      ps[0],
      ps[1],
      ps[2],
      ps[3],
      ps[4],
      ps[5],
      ps[6],
      ps[7],
      ps[8],
    ]);
  }

  var players = room.getPlayerList().filter((player) => player.id != 0);
  for (i = 0; i < players.length - 1; i++) {
    if (
      player.conn == arm.get(players[i].id)[0] &&
      player.id != players[i].id
    ) {
      room.kickPlayer(
        player.id,
        "Alguém, com a sua mesma rede, já está na sala!",
        false
      );
      room.kickPlayer(
        players[i].id,
        "Alguém, com a sua mesma rede, está tentando entrar na sala!",
        false
      );
      return false;
    }
  }

  if (officialAdms.includes(player.name)) {
    officialAdms.splice(officialAdms.indexOf(player.name), 1);
  }

  if (colorAdm.includes(player.name)) {
    colorAdm.splice(colorAdm.indexOf(player.name), 1);
  }

  updateAdmins();
  extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
  room.sendAnnouncement(
    `👋🏼 Eai, ${player.name}! Seja bem vindo a sala do time TOP.1!`,
    player.id,
    welcomeColor,
    "bold",
    null
  );
  updateTeams();
  playersConn[player.name] = player.conn;
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
  if (changedPlayer.id == 0) {
    room.setPlayerTeam(0, Team.SPECTATORS);
    return;
  }
  if (changedPlayer.team == Team.SPECTATORS) {
    updateList(
      Math.max(
        teamR.findIndex((p) => p.id == changedPlayer.id),
        teamB.findIndex((p) => p.id == changedPlayer.id),
        teamS.findIndex((p) => p.id == changedPlayer.id)
      ),
      changedPlayer.team
    );
  }
  updateTeams();
  if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
    room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
    room.sendAnnouncement(
      "💤 " + changedPlayer.name + " está AFK e não pode ser movido.",
      null,
      announcementColor,
      "bold",
      null
    );
    return;
  }

  updateTeams();
  if (room.getScores() != null) {
    var scores = room.getScores();
    if (
      changedPlayer.team != Team.SPECTATORS &&
      scores.time <= (3 / 4) * scores.timeLimit &&
      Math.abs(scores.blue - scores.red) < 2
    ) {
      changedPlayer.team == Team.RED
        ? allReds.push(changedPlayer)
        : allBlues.push(changedPlayer);
    }
  }

  if (changedPlayer.team == Team.SPECTATORS) {
    setActivity(changedPlayer, 0);
  }
};

room.onPlayerLeave = function (player) {
  updateList(
    Math.max(
      teamR.findIndex((p) => p.id == player.id),
      teamB.findIndex((p) => p.id == player.id),
      teamS.findIndex((p) => p.id == player.id)
    ),
    player.team
  );
  updateTeams();
  updateAdmins();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
  ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
  if (officialAdms.includes(kickedPlayer.name) && byPlayer != null) {
    if (ban && !officialAdms.includes(byPlayer.name)) {
      room.clearBans();
      room.kickPlayer(byPlayer.id, "🚨👮‍♂️ Você expulsou um ADM oficial!", true);
    } else {
      room.sendAnnouncement(
        "🚨👮‍♂️ Você não pode expulsar ou banir um ADM oficial!",
        byPlayer.id,
        null,
        colorBan,
        "bold",
        1
      );
      room.kickPlayer(
        byPlayer.id,
        "🚨👮‍♂️ Não é permitido expulsar ou banir um ADM oficial!",
        true
      );
    }
  }

  if (officialAdms.includes(kickedPlayer.name)) room.clearBans();
};

const banidos = [];
const jogadores = [];
const jogadorPorId = (id) => {
  return jogadores.find((i) => i.id == id);
};

// ================================================
// ADICIONE ISSO NO TOPO DO SEU SCRIPT (com as outras variáveis globais)
// ================================================
const arenaMaps = {
  x3: "...código HBR2 do mapa X3...",
  x5: "...código HBR2 do mapa X5...",
  default: "",
};
let currentMap = "default";

function loadArena(mapName) {
  if (arenaMaps[mapName]) {
    try {
      room.setCustomStadium(arenaMaps[mapName]);
      currentMap = mapName;
      room.sendAnnouncement(
        `🏟️ Arena ${mapName.toUpperCase()} carregada!`,
        null,
        0x00ff00,
        "bold",
        2
      );
      return true;
    } catch (e) {
      room.sendAnnouncement(
        `❌ Erro ao carregar "${mapName}": ${e.message}`,
        null,
        0xff0000,
        "bold",
        2
      );
      return false;
    }
  }
  return false;
}
// ================================================

room.onPlayerChat = function (player, message) {
  messageColor = message;

  if (message.startsWith("!mp")) {
    let parts = message.split(" ");
    if (parts.length >= 3) {
      let targetId = parts[1].replace("#", "");
      let privateMessage = parts.slice(2).join(" ");
      room.sendAnnouncement(
        "[PV] Mensagem enviada.",
        player.id,
        privateMessageColor,
        "bold",
        2
      );
      room.sendAnnouncement(
        "[PV] " + player.name + ": " + privateMessage,
        Number(targetId),
        privateMessageColor,
        "bold",
        null
      );
    }
    return false;
  }

  if (message == "!admin") {
    if (officialAdms.includes(player.name)) {
      room.setPlayerAdmin(player.id, !player.admin);
    } else {
      room.sendAnnouncement(
        "Você não tem permissão.",
        player.id,
        Cor.RED,
        "bold",
        1
      );
    }
    return false;
  }

  // Verificação de senhas de admin
  if (message == senharei) {
    arm.get(player.id)[1] = true;
    officialAdms.push(player.name);
    reiniColor.push(player.name);
    room.setPlayerAdmin(player.id, true);
    room.sendAnnouncement(
      `💎 ${player.name} Billy, UTILIZOU A SENHA DE DONO! `,
      null,
      vippremiumColor,
      "bold",
      1
    );
    senhaslogsdiscord(
      "```" +
        `[👑] [💎] [DONO] ${player.name} UTILIZOU A SENHA DE DONO ` +
        "```"
    );
    return false;
  }

  if (message == "!ajuda" || message == "!help") {
    room.sendAnnouncement(
      "🎮 - Seja bem-vindo à sala do billy! -",
      player.id,
      colorHelp,
      "bold",
      1
    );
    room.sendAnnouncement(
      "🎮 - Comandos: !x3, !x5, !arenas, !rr, !admin -",
      player.id,
      colorHelp,
      "bold",
      1
    );
    return false;
  }

  // ================================================
  // ADICIONE ESTA SEÇÃO PARA OS COMANDOS DE ARENA
  // ================================================
  if (
    message.startsWith("!") &&
    arenaMaps.hasOwnProperty(message.substring(1).toLowerCase())
  ) {
    const arenaName = message.substring(1).toLowerCase();
    if (officialAdms.includes(player.name) || player.admin) {
      loadArena(arenaName);
    } else {
      room.sendAnnouncement(
        "❌ Apenas administradores podem mudar de arena!",
        player.id,
        0xff0000,
        "bold",
        1
      );
    }
    return false;
  }

  if (message == "!arenas" || message == "!mapas") {
    room.sendAnnouncement(
      `🏟️ Arenas disponíveis: ${Object.keys(arenaMaps).join(", ")}`,
      player.id,
      0x00ff00,
      "bold",
      1
    );
    room.sendAnnouncement(
      `Arena atual: ${currentMap.toUpperCase()}`,
      player.id,
      0x00ff00,
      "bold",
      1
    );
    return false;
  }
  // ================================================

  if (message == "!rr") {
    if (officialAdms.includes(player.name) || player.admin) {
      room.stopGame();
      room.startGame();
      room.sendAnnouncement(
        `⚡ ${player.name} reiniciou a partida!`,
        null,
        0x00ff00,
        "bold",
        1
      );
      return false;
    } else {
      room.sendAnnouncement(
        "❌ Apenas administradores podem reiniciar a partida!",
        player.id,
        0xff0000,
        "bold",
        1
      );
      return false;
    }
  }

  if (
    message.substr(0, prefixTeamChatStringss.length) == prefixTeamChatStringss
  ) {
    room
      .getPlayerList()
      .filter((callback) => callback.team == player.team)
      .forEach((callback) => {
        room.sendAnnouncement(
          `💭 [TEAM CHAT] ${player.name}: ${message.substr(
            prefixTeamChatStringss.length
          )}`,
          callback.id,
          player.team == 1 ? 0xff7b73 : player.team == 0 ? 0xe4ffb6 : 0x38b5ff,
          "bold",
          2
        );
      });
    return false;
  }

  if (message == "!discord") {
    room.sendAnnouncement(
      "📲 Entre no nosso discord!, vagas para a base!",
      player.id,
      null,
      announcementColor,
      "bold",
      null
    );
    room.sendAnnouncement(
      "📲 https://discord.gg/tNQP562hCF",
      player.id,
      null,
      announcementColor,
      "bold",
      null
    );
    return false;
  }

  if (["!sair", "!bb", "!bye", "!cya", "!gn"].includes(message)) {
    room.kickPlayer(player.id, "👋 Tchau!", false);
    return false;
  }

  if (message[0] == "!") {
    return false;
  }

  if (muteList.includes(playersConn[player.name])) {
    room.sendAnnouncement(
      "💬❌ Você está mutado lerdão.",
      player.id,
      null,
      announcementColor,
      "bold",
      null
    );
    return false;
  }

  if (getMute(player) && !player.admin) {
    room.sendAnnouncement(
      "💬❌ Você está mutado.",
      player.id,
      null,
      announcementColor,
      "bold",
      null
    );
    return false;
  }

  // Sistema de cores de chat
  if (reiniColor.includes(player.name)) {
    room.sendAnnouncement(
      "[👑] [💎] " + " " + player.name + ": " + messageColor,
      undefined,
      reinieColor,
      "bold"
    );
    return false;
  }

  return true;
};

room.onPlayerActivity = function (player) {
  setActivity(player, 0);
};

room.onPlayerBallKick = function (player) {
  if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
    !activePlay ? (activePlay = true) : null;
    lastTeamTouched = player.team;
    lastPlayersTouched[1] = lastPlayersTouched[0];
    lastPlayersTouched[0] = player;
  }
};

/* GAME MANAGEMENT */
// Variável para controle da gravação
let gameRecording = {
  active: false,
  startTime: null,
  valid: false,
  lastAnnouncement: null,
};

function startRecording() {
  try {
    room.startRecording();
    gameRecording.active = true;
    gameRecording.startTime = Date.now();
    gameRecording.valid = false;
    room.sendAnnouncement(
      "🎥 A partida está sendo gravada!",
      null,
      0x00ffff,
      "bold",
      1
    );
  } catch (e) {
    console.error("Erro ao iniciar gravação:", e);
  }
}

room.onGameStart = function () {
  // Inicialização do jogo
  game = new Game(Date.now(), room.getScores(), []);
  countAFK = true;
  gameOcorring = true; // Corrigido typo (gameocorring -> gameOcorring)
  activePlay = false;
  lastPlayersTouched = [null, null];
  goldenGoal = false;
  Rposs = 0;
  Bposs = 0;

  // Inicia a gravação
  startRecording();
};

room.onTeamGoal = function (team) {
  activePlay = false;
  countAFK = false;
  var scores = room.getScores();
  game.scores = scores;

  let announcementText = getTime(scores) + " ⚽ ";

  if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
    if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
      announcementText += `Tá lá! Gol de ${lastPlayersTouched[0].name}! Assistência de ${lastPlayersTouched[1].name}.`;
    } else {
      announcementText += `Tá lá! Gol de ${lastPlayersTouched[0].name}!`;
    }
  } else {
    announcementText += `😂 Vish... Gol contra de ${lastPlayersTouched[0].name}!`;
  }

  announcementText += ` Velocidade da bola: ${ballSpeed.toPrecision(4)}km/h`;

  room.sendAnnouncement(
    announcementText,
    null,
    team == 1 ? redColor : blueColor,
    "bold",
    1
  );

  if (
    scores.scoreLimit != 0 &&
    (scores.red == scores.scoreLimit ||
      scores.blue == scores.scoreLimit ||
      goldenGoal)
  ) {
    endGame(team);
    goldenGoal = false;
    setTimeout(() => {
      room.stopGame();
    }, 1000);
  }

  // Salva estatísticas dos jogadores
  room
    .getPlayerList()
    .filter((player) => player.id != 0)
    .forEach((player) => {
      localStorage.setItem(
        "status" + player.name,
        JSON.stringify(stats.get(player.name))
      );
    });
};

room.onTeamVictory = function (scores) {
  lastScores = scores;
  gameRecording.valid = true;

  // Determina o vencedor e envia mensagem
  const winningTeam = scores.red > scores.blue ? "Vermelho" : "Azul";
  const teamColor = scores.red > scores.blue ? 0xff7777 : 0x7777ff;

  room.sendAnnouncement(
    `🏆 𝗩𝗜𝗧𝗢́𝗥𝗜𝗔 𝗗𝗢 ${winningTeam.toUpperCase()}`,
    null,
    teamColor,
    "bold",
    2
  );

  room.sendAnnouncement(
    `🔴 ${scores.red} - ${scores.blue} 🔵 | 🎥 Replay será enviado automaticamente`,
    null,
    0xdddddd,
    "bold",
    1
  );

  // Chama endGame com o time vencedor
  endGame(scores.red > scores.blue ? 1 : 2);
};

room.onGameStop = function (byPlayer) {
  if (gameRecording.active) {
    sendDiscordWebhook();
    gameRecording.active = false;
  }

  // Limpeza de variáveis do jogo
  gameOcorring = false;
  activePlay = false;
  lastPlayersTouched = [null, null];
};

// Outros eventos mantidos conforme original
room.onPositionsReset = function () {
  countAFK = true;
  lastPlayersTouched = [null, null];
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
  if (byPlayer && changedPlayer.id == byPlayer.id) {
    room.setPlayerAdmin(byPlayer.id, false);
    return false;
  }

  if (officialAdms.includes(changedPlayer.name) && !changedPlayer.admin) {
    room.sendAnnouncement(
      "🚨 Não é permitido retirar ADM de um ADM oficial!",
      byPlayer?.id,
      announcementColor,
      "bold"
    );
    room.setPlayerAdmin(changedPlayer.id, true);
    if (!officialAdms.includes(byPlayer?.name))
      room.setPlayerAdmin(byPlayer?.id, false);
  }

  updateAdmins();

  if (getMute(changedPlayer) && changedPlayer.admin) {
    room.sendAnnouncement(
      `${changedPlayer.name} 💬 foi desmutado.`,
      null,
      announcementColor,
      "bold"
    );
    setMute(changedPlayer, false);
  }
};

room.onGameTick = function () {
  getLastTouchOfTheBall();
  lastScores = room.getScores();
  getStats();
};

// Intervalos
setInterval(() => {
  room.sendAnnouncement(
    "💡 Entre no nosso discord: 📲 https://discord.gg/tNQP562hCF",
    null,
    announcementColor,
    "bold"
  );
}, 3600000); // A cada 1 hora

setInterval(() => {
  room.clearBans(
    "🔫 A lista de banidos foi limpa automaticamente após 30 minutos"
  );
}, 1800000); // A cada 30 minutos

setInterval(() => {
  officialAdms.length = 0; // Método mais eficiente para limpar array
  console.log("[CLEARLIST] Lista de ADMs oficiais limpa após 12 horas");
}, 43200000); // A cada 12 horas
