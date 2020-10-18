const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()

client.once('ready', () => {
  console.log('SpaceServerUra に接続しました。')
  client.user.setActivity('?help | Ver1.0.0', { type: 'STREAMING'})
})

client.on('message', message => {
  if(message.content === '?help') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport CommandList",
        description: "SpaceServerTradeSupportのコマンドリスト",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "?ping",
            value: "ping値を送信します。"
          },
          {
            name: "?s-<code>",
            value: "`<code>`で指定したツールやアイテムの相場を確認します。"
          },
          {
            name: "?sl-<page>",
            value: "Codeリストを送信します。"
          },
          {
            name: "?uinfo",
            value: "アップデート情報を確認します。"
          },
          {
            name: "?about",
            value: "このBotについての詳細情報を確認します。"
          },
          {
            name: "アナウンス",
            value: "これからどんどん悪い点は改善されていきますのでよろしくお願いします。"
          }
        ]
      }
    })
  }
  //ここから情報系
  if(message.content === '?ping') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport ping",
        description: "DiscordServer <-> NatuServer",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "Ping値",
            value: `${client.ws.ping}ws`
          }
        ]
      }
    })
  }
  if(message.content === '?uinfo') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport アップデート情報",
        description: "このBotの詳細的な更新情報を確認できます。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "> __**Ver1.0.0**__",
            value: "・引用にて詳細情報を確認できるようになりました。\n・サービスを開始\n・SpaceServerTradeSupportは宇宙鯖(裏)以外のサーバーでも利用できます。 Wikiに情報がないアイテムは相場のみ確認可能。"
          },
          {
            name: "ヒント",
            value: "過去のアップデート情報はGithubを確認してください。https://github.com/Natu9/SpaceServerTradeSupport/tree/master/changelog　\n"
          },
          {
            name: "アナウンス",
            value: "これからどんどん悪い点は改善されていきますのでよろしくお願いします。"
          }
        ]
      }
    })
  }
  if(message.content === '?about') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport 詳細情報",
        description: "このBotの詳細情報です。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "Ping",
            value: `${client.ws.ping}ws`
          },
          {
            name: "バージョン",
            value: "Ver1.0.0 (Build 1.2020.1)"
          },
          {
            name: "導入サーバー数",
            value: `${client.guilds.cache.size}`
          },
          {
            name: "開発者",
            value: "Natu#2506"
          },
          {
            name: "Botを導入する",
            value: "https://discord.com/oauth2/authorize?client_id=767335911384940554&permissions=522304&scope=bot"
          },
          {
            name: "アナウンス",
            value: "これからどんどん悪い点は改善されていきますのでよろしくお願いします。"
          }
        ]
      }
    })
  }
  //ここからは相場などの本コードになる
  if(message.content === '?sl') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport CodeList",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "ページ数",
            value: "現在CodeListは`1ページ`あります。\n`/sl-1`"
          },
        ]
      }
    })
  }
  if(message.content === '?sl-1') {
    message.channel.send({
      embed: {
        title: "SpaceServerTradeSupport アイテムcode 1/1",
        description: "`?s <code>`のcodeに以下のコードを挿入すると\nアイテムの詳細情報が確認できます。",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "==ツールカテゴリー==",
            value: "カテゴリー=>ツール"
          },
          {
            name: "code `1`",
            value: "朱鷲の紋章のあるピッケル"
          },
          {
            name: "code `2`",
            value: "りりの亡き猫ルナとの思い出の爪"
          },
          {
            name: "code `3`",
            value: "aktouのイケてる★シャベル"
          },
          {
            name: "==アイテムカテゴリー==",
            value: "カテゴリー=>アイテム"
          },
          {
            name: "code `4`",
            value: "修復クリーム"
          },
        ]
      }
    })
  }
  //アイテム
  if(message.content === '?s-1') {
    message.channel.send({
      embed: {
        title: "アイテム詳細情報 - 朱鷲の紋章のあるピッケル",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "相場",
            value: "5万~10万"
          },
          {
            name: "エンチャント",
            value: "耐久X効率3"
          },
          {
            name: "入手方法",
            value: "ガチャ"
          },
          {
            name: "概要",
            value: "アドバンスに行くまでの初心者のお供！\n壊さないように大事に使おう！"
          },
        ]
      }
    })
  }
  if(message.content === '?s-2') {
    message.channel.send({
      embed: {
        title: "アイテム詳細情報 - りりの亡き猫ルナとの思い出の爪",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "相場",
            value: "5万~10万"
          },
          {
            name: "入手方法",
            value: "ガチャ"
          },
        ]
      }
    })
  }
  if(message.content === '?s-3') {
    message.channel.send({
      embed: {
        title: "アイテム詳細情報 - aktouのイケてる★シャベル",
        color:7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "相場",
            value: "5万~10万"
          },
          {
            name: "入手方法",
            value: "ガチャ"
          },
        ]
      }
    })
  }
  if(message.content === '?s-4') {
    message.channel.send({
      embed: {
        title: "アイテム詳細情報 - 修復クリーム",
        color: 7506394,
        timestamp: new Date(),
        fields: [
          {
            name: "相場",
            value: "~~15万~~\n現在バグで利用できないため価額低下中"
          },
          {
            name: "元アイテム",
            value: "マグマクリーム"
          },
          {
            name: "入手方法",
            value: "ガチャやプレイヤー間の取引、イベント開催ボーナスなど"
          },
          {
            name: "概要",
            value: "ツールを修理する際の必要なアイテム。\n~~宇宙鯖で一番価値のあるアイテム。~~★現在バグで使えない。"
          },
        ]
      }
    })
  }
})
