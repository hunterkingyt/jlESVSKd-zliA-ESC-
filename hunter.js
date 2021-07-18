const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});


client.on("guildCreate", hunter => {

  });


//------------------- Oto Komutlar ---------------------------------\\
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866257320568684574") 
      hunter.send("**SA AB NASILSINIZ**")
      }, 10000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866257320568684574") 
      hunter.send("<:waow:866269353056665631>")
      }, 10000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
      hunter.send("owo")
      }, 20000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
      hunter.send("w cft 1")
      }, 44300,53400,69700,35100);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
hunter.send("w cf 1")
      }, 34690,45920,35940,15160);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
      hunter.send("w team")
      }, 55000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
      hunter.send("wh")
      }, 27190,32890,46200,45940);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
      hunter.send("wb")
    }, 38500,29700,15260,49300);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584")
      hunter.send("w zoo")
      }, 45000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
hunter.send("w pray 793589155367354388")
      }, 300100);
})

client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
hunter.send("w sell all")
      }, 33000);
})
client.on("ready", () => {
      setInterval(() => {
       let hunter = client.channels.cache.get("866227788703596584") 
hunter.send("w send 100 <@793589155367354388>")
      }, 30000);
})
//-------------- oto komut son ------------------\\

//------------------ para gönderme ------------------\\
client.on('message', msg => {
  if (msg.content === '!send1k') {
    msg.channel.send('w send 1000 <@793589155367354388>');
  }
});
client.on('message', msg => {
  if (msg.content === '!send10k') {
    msg.channel.send('w send 10000 <@793589155367354388>');
  }
});
client.on('message', msg => {
  if (msg.content === '!send5k') {
    msg.channel.send('w send 5000 <@793589155367354388>');
  }
});
client.on('message', msg => {
  if (msg.content === '!send30k') {
    msg.channel.send('w send 30000 <@793589155367354388>');
  }
});
client.on('message', msg => {
  if (msg.content === '!send20k') {
    msg.channel.send('w send 20000 <@793589155367354388>');
  }
});
client.on('message', msg => {
  if (msg.content === '!cash') {
    msg.channel.send('w cash');
  }
});
client.on('message', msg => {
  if (msg.content === '!inv') {
    msg.channel.send('w inv');
  }
});
client.on('message', msg => {
  if (msg.content === '!pray') {
    msg.channel.send('w pray 793589155367354388');
  }
});
client.on('message', msg => {
  if (msg.content === '!xp') {
    msg.channel.send('w xp');
  }
});
client.on('message', msg => {
  if (msg.content === '!sell all') {
    msg.channel.send('w sell all');
  }
});
client.on('message', msg => {
  if (msg.content === '!q') {
    msg.channel.send('wq');
  }
});
//------------------------ Gem Kullanma -------------------\\
client.on('message', msg => {
  if (msg.content === '!use 51') {
    msg.channel.send('w use 51');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 52') {
    msg.channel.send('w use 52');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 53') {
    msg.channel.send('w use 53');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 54') {
    msg.channel.send('w use 54');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 55') {
    msg.channel.send('w use 55');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 56') {
    msg.channel.send('w use 56');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 57') {
    msg.channel.send('w use 57');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 58') {
    msg.channel.send('w use 58');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 59') {
    msg.channel.send('w use 59');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 60') {
    msg.channel.send('w use 60');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 61') {
    msg.channel.send('w use 61');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 62') {
    msg.channel.send('w use 62');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 63') {
    msg.channel.send('w use 63');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 64') {
    msg.channel.send('w use 64');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 65') {
    msg.channel.send('w use 65');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 66') {
    msg.channel.send('w use 66');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 67') {
    msg.channel.send('w use 67');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 68') {
    msg.channel.send('w use 68');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 69') {
    msg.channel.send('w use 69');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 70') {
    msg.channel.send('w use 70');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 71') {
    msg.channel.send('w use 71');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 72') {
    msg.channel.send('w use 72');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 73') {
    msg.channel.send('w use 73');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 74') {
    msg.channel.send('w use 74');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 75') {
    msg.channel.send('w use 75');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 76') {
    msg.channel.send('w use 76');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 77') {
    msg.channel.send('w use 77');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 78') {
    msg.channel.send('w use 78');
  }
});
client.on('message', msg => {
  if (msg.content === '!use 79') {
    msg.channel.send('w use 79');
  }
});
client.on('message', msg => {
  if (msg.content === '!yardım') {
    msg.channel.send('Gem Kullanmak İçin  **!use <gem no>** \n İnv İçin : **!inv** \n Paranıza Bakmak İçin **!cash** \n Pray Atmak İçin **!pray** \n Xp Ye Bakmak İçin **!xp**\n Manuel Hayvan Satmak İçin **!sell all** \n Görevlere Bakmak İçin **!q** \n\n Para Göndermek İçin **!send1k** , **!send5k** , **!send10k** , **!send20k** , **!send30k** ');
  }
});

client.login(process.env.token)

