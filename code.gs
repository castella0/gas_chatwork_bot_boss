/**
var config = {

  CW_ENDPOINT: {
    rooms: 'https://api.chatwork.com/v2/rooms/'
  },

  CW_TOKEN: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
  CW_ROOM_ID: '99999999',

  CW_BOT_ACCOUNT: 1234567,
};
**/

function postMsg() {

  var trigger_data = [
    {
      word: 'ジャパリパーク',
      msg: ['ジャパリパークについて話すね\nジャパリパークは気候を元にして幾つかの地方に分かれているよ\nそれぞれに動物、植物が展示されているんだ\nまず大きく5つの気候帯に分離…\nフレンズと呼ばれる生き物達で…\n彼女らは動物やその遺物と…']
    },
    {
      word: '図書館',
      msg: ['ジャパリ図書館は森林地方にあるよ\n途中3つの地方を通るね\nただとっても距離があるから歩いていくのはおすすめできないよ\nジャパリバスに乗って移動しよう\nここから一番近いのはアンイン橋の側だね',
        '図書館は砂漠地方を通ればすぐだよ\n運転は任せて',
        'これはバイパスだね\nここからでも図書館の方に行けるよ']
    },
    {
      word: 'ボス',
      msg: ['初めまして僕はラッキービーストだよ\nよろしくね',
        'まかせて\n僕の頭にはパークの全地形が入ってるんだ\nこの茂みを超えれば後は楽な道だよ',
        'ま…ままま…ま…ま…せ…ま…ま…ませ…て…ま…ま…ままま…が…',
        '運転席 検索中…検索中…本当はここにも車体があるはずなんだ\n運転席 検索中…',
        'どうだった？アトラクションが始まっちゃったから出口から迎えに来たよ',
        'ア、ア、アワワワワワ…']
    },
    {
      word: 'バス',
      msg: ['バスは乗り物の一種だよ\nジャパリバスなら広いパークを回るのも楽ちんさ',
        '僕とリンクして半自動運転してるんだ\n手動でも運転できるよ']
    },
    {
      word: 'ジャングル',
      msg: ['ジャングル地方は熱帯雨林気候になってるよ\n動物の数もとっても多いんだ',
        'ジャングル地方は植物も熱帯雨林のもので構成されてるんだ\n樹木が層になっているのが特徴だよ\nつる植物のように他の木を利用する植物が多いのも特徴だね']
    },
    {
      word: 'オセロット',
      msg: ['あれはオセロットだね\nサーバルキャットと同じネコ科なんだ\n夜行性だから日中は木の上や茂みで休むんだって\n木登りも上手なんだね']
    },
    {
      word: 'マレーバク',
      msg: ['マレーバクだね\n白黒の模様が特徴的だよ\n夜は白いところが目立って輪郭が曖昧になるから見つかりにくくなるんだって']
    },
    {
      word: 'インドゾウ',
      msg: ['インドゾウはアジアゾウの亜種だよ\nアフリカゾウと並んで陸上最大の動物だね']
    },
    {
      word: 'ジャガー',
      msg: ['ジャガーはネコ科では珍しく泳げるんだ']
    },
    {
      word: 'カフェ',
      msg: ['あそこの山頂にあるジャパリカフェの屋上で充電できるよ']
    },
    {
      word: 'トキ',
      msg: ['トキは翼を開くと140cmにもなる大きな鳥だよ\n全身は白翼の下の朱色がかった濃いピンク色が特徴だよ\nこの美しい赤はトキ色と呼ばれたりもするんだ',
        'トキの鳴き声はカラスのような濁った声でとってもうるさかったんだって',
        '鳴き声は鼻声っぽいとも言われそれを題材にした昔話なんかもあったんだって']
    },
    {
      word: 'サンドスター',
      msg: ['サンドスターによって温度、湿度、日差しまでもが変化してるんだ\nサンドスターには謎が多く僕らもまだわからないことだらけだよ']
    },
    {
      word: '草',
      msg: ['除草…除草…除草…',
        'ちょっと除草を中断してもいいかな']
    },
    {
      word: 'サーバル',
      msg: ['サーバル！三人での旅…楽しかったよ',
        'サーバル食べちゃだめだよ']
    },
    {
      word: '砂漠',
      msg: ['砂漠地方は雨が極端に少ないから砂・岩石が多く植物はとっても少ないよ\n砂漠にも種類が色々あるんだ\n実はこういう砂ばっかりのものは珍しいんだよ',
        '砂嵐だね\n砂漠では珍しくないけど砂を吸い込むと体に悪いよ',
        '砂漠のほとんどはこうして岩石に覆われているよ\n真っ白な砂漠や小石ばっかりの砂漠もあるよ',
        '砂漠地方は寒暖差が激しく昼は40度を超えることも珍しくないよ\nだからなるべく熱くならないように、それから水分を失わないように進化した動物が多いんだ',
        '砂漠の夜はとっても寒いよ']
    },
    {
      word: 'スナネコ',
      msg: ['スナネコの体は熱しやすく冷めやすいと言われてるよ\nフレンズ化のときにその影響があったのかもね',
        'スナネコは足の裏が長い毛で覆われていて熱い砂もへっちゃらなんだ']
    },
    {
      word: 'ビーバー',
      msg: ['大きな湖を通るよ\nここはビーバーが作った湖とも言われているよ']
    },
    {
      word: '材料',
      msg: ['この辺りは混合林と言って色んな木がまばらにあるんだけど\n建材として使うなら真っ直ぐな針葉樹がおすすめだよ\n車で少し行ったところに良い林があるよ']
    },
    {
      word: 'ガイド',
      msg: ['右上の木を見てみよう\nエナガの巣だよ\nエナガはコケと蜘蛛の糸を紡ぎ合わせて巣を作るんだ\n木のコブのような色と形で外敵から見つかりにくくしているよ\n今度は左側をよく見ててね',
        'ツカツクリの巣だよ\nオスが土や落ち葉を積み重ねて作った巣の中にメスが卵を産むんだ']
    },
    {
      word: 'プレーリー',
      msg: ['プレーリードッグは巣穴を作る動物だよ\n主に草原地帯に生息しているよ']
    }
  ];

  // 投稿を取得
  var msgs = UrlFetchApp.fetch(config.CW_ENDPOINT.rooms + config.CW_ROOM_ID + '/messages?force=1', {
    headers: {
      'X-ChatWorkToken': config.CW_TOKEN
    },
    method: 'get'
  });
  if (null == msgs || '' == msgs ) return;

  msgs = JSON.parse( msgs );

  if (msgs.length < 1) return;

  var target_msg = msgs[msgs.length-1];

  if ('ボス教えて' == target_msg.body || '教えてボス' == target_msg.body) {
    text = '';
    trigger_data.forEach( function(trigger) {
      text += trigger.word + ' ';
    });
    UrlFetchApp.fetch(config.CW_ENDPOINT.rooms + config.CW_ROOM_ID + '/messages', {
      headers: {
        'X-ChatWorkToken': config.CW_TOKEN
      },
      method: 'post',
      payload: 'body=' + encodeURIComponent(
        text + '\nについてこたえられるよ'
      )
    });
    return;
  }

  for (var index in trigger_data) {

    var trigger = trigger_data[index];

    if ( target_msg.account.account_id != config.CW_BOT_ACCOUNT && 0 <= target_msg.body.indexOf(trigger.word) ) {
      // 投稿
      UrlFetchApp.fetch(config.CW_ENDPOINT.rooms + config.CW_ROOM_ID + '/messages', {
        headers: {
          'X-ChatWorkToken': token
        },
        method: 'post',
        payload: 'body=' + encodeURIComponent(
          trigger.msg[ Math.floor( Math.random() * trigger.msg.length ) ]
        )
      });
      break;
    }

  }

}