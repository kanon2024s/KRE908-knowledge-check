const quizData = [
    {
      "FIELD1": 1,
      "type": "choice",
      "text": "基準のPVでKREVAは最後どの職業に扮装する?",
      "choices": "レコード屋;牛丼屋;トラック運転手;配達員",
      "correctAnswer": "配達員"
    },
    {
      "FIELD1": 2,
      "type": "choice",
      "text": "KREVAが2013年から続けている習い事とはなにか",
      "choices": "ピラティス;ヨガ;水泳;習字",
      "fields": "",
      "correctAnswer": "水泳"
    },
    {
      "FIELD1": 3,
      "type": "choice",
      "text": "KREVAが当時姉から借りたカセットテープの一曲目に入っており、別のカセットテープ46分全てその曲を再録音して聴いていたほど気に入った一曲はなに",
      "choices": "Merry Christmas Mr. Lawrence;君に、胸キュン。;Humpin'Around(Prelude);め組のひと",
      "correctAnswer": "Merry Christmas Mr. Lawrence"
    },
    {
      "FIELD1": 4,
      "type": "choice",
      "text": "KREVAが2006年に女子アナとある場所でトークする仕事のオファーを断った場所は?",
      "choices": "観覧車;カラオケ;KREVAの実家;ビジネスホテル",
      "correctAnswer": "観覧車"
    },
    {
      "FIELD1": 5,
      "type": "choice",
      "text": "KREVAがヒューマンビートボクサーのAFRAと一緒に出たCMの企業名は?",
      "choices": "NIKE;ペプシ;コカ・コーラ;Adidas",
      "correctAnswer": "コカ・コーラ"
    },
    {
      "FIELD1": 6,
      "type": "choice",
      "text": "ストロングスタイルのPVで最後に表示されるKREVAの歌唱力は何点と表示されるか?",
      "choices": "908点;68点;98点;48点",
      "correctAnswer": "48点"
    },
    {
      "FIELD1": 7,
      "type": "choice",
      "text": "国民的行事のPVで白KREVAvs黒KREVA最後に勝つのはどっち?",
      "choices": "黒KREVA;白KREVA",
      "correctAnswer": "黒KREVA"
    },
    {
      "FIELD1": 8,
      "type": "text",
      "text": "国民的行事のPVで白KREVA陣営の動物は豚ですが、黒KREVA陣営の動物は何でしょう?",
      "fields": "答え",
      "correctAnswer": "ゴリラ;ごりら",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 9,
      "type": "choice",
      "text": "OH YEAHのPVでKREVAが途中立ち寄ったガソリンスタンドの名前は?",
      "choices": "クレミツ;908;OH YEAH;KREOS",
      "correctAnswer": "OH YEAH"
    },
    {
      "FIELD1": 10,
      "type": "choice",
      "text": "OH YEAHのPVでガソリンスタンドのお会計、乗っていた車のナンバープレートは共に908であったか。",
      "choices": "はい;いいえ",
      "correctAnswer": "いいえ"
    },
    {
      "FIELD1": 11,
      "type": "choice",
      "text": "OH YEAHのPVで警察から取り調べを受けた後、KREVAが警察に対して行ったことは?",
      "choices": "CDを渡した;敬礼した;Dr.Kポーズをした;サインを渡した",
      "correctAnswer": "サインを渡した"
    },
    {
      "FIELD1": 12,
      "type": "choice",
      "text": "2008年自身のブログにて社長からジブリ作品のTシャツを貰った嬉しすぎると綴っていました。前から〇〇のTシャツがあれば絶対着ると言っていたそうです。<br />何のTシャツでしょうか",
      "choices": "ポニョ;トトロ;カルシファー;テト",
      "correctAnswer": "ポニョ"
    },
    {
      "FIELD1": 13,
      "type": "choice",
      "text": "2024年にKREVAがある時計ブランドの広告モデルとして採用された。<br />そのブランドとはなにか?",
      "choices": "セイコー;カシオ;ハミルトン;シチズン",
      "correctAnswer": "シチズン"
    },
    {
      "FIELD1": 14,
      "type": "choice",
      "text": "2022年クリスマスイブの日KREVA宅に週刊文春が押しかけたその際の取材内容とはなにか?",
      "choices": "キンプリの解散;三浦大知の不倫;ichibanが紅白で歌われること;サッカーW杯カタール大会",
      "correctAnswer": "ichibanが紅白で歌われること"
    },
    {
      "FIELD1": 15,
      "type": "choice",
      "text": "授業型エンターテイメントとして行われたKREVA classでKREVAの助手を勤めたキャラクターの名前は?",
      "choices": "バークレー;クレクレ;レクーバー;バックレー",
      "correctAnswer": "バークレー"
    },
    {
      "FIELD1": 16,
      "type": "choice",
      "text": "Ravijour(ラヴィジュール)というブランドの為に書き下ろされた楽曲としてSo Sexyがある。<br />ではRavijourどのような商品を取り扱っていたブランドか",
      "choices": "男女ペアルック専門;女性用下着;サーカス器具;ボディコン専門",
      "correctAnswer": "女性用下着"
    },
    {
      "FIELD1": 17,
      "type": "choice",
      "text": "2006年12月31日に8年半ぶりのアルバムだからどうした！をリリースしたBY PHAR THE DOPEST。<br />収録されているトラックは全てあるルールに則ってサンプリングで作成されている。<br />そのルールとはなにか",
      "choices": "2人の生まれ年にリリースされた曲;2人好きな映画の曲;当時2人が既に所持していた曲;レコ屋で目隠しをしたまま選んだ曲",
      "correctAnswer": "2人の生まれ年にリリースされた曲"
    },
    {
      "FIELD1": 18,
      "type": "choice",
      "text": "ある日、KREVAの娘が葉加瀬太郎の情熱大陸に歌詞を付けました。<br />その歌詞とは次のうちどれか",
      "choices": "悲しみの心持つ人;悲しみと心持つ人;優しさの心持つ人;優しさと心持つ人",
      "correctAnswer": "優しさの心持つ人"
    },
    {
      "FIELD1": 19,
      "type": "choice",
      "text": "紅白歌合戦にKICK THE CAN CREWが出場した時楽屋でlittleとKREVAは何をしていた?",
      "choices": "お弁当のおかずで韻を踏んでいた;おびただしい量を錠剤を飲んでいた;点滴をしていた;MCでlittleがどれぐらい喋るかを決めていた",
      "correctAnswer": "点滴をしていた"
    },
    {
      "FIELD1": 20,
      "type": "text",
      "text": "KREVAはレバーが苦手で、KICK時代にそのことをリリックにしている曲は何か?",
      "fields": "答え",
      "correctAnswer": "3MC＋1DJ;3MC+1DJ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 21,
      "type": "text",
      "text": "KREVAが通っていた慶應大学の学部名は?",
      "fields": "答え",
      "correctAnswer": "環境情報学部"
    },
    {
      "FIELD1": 22,
      "type": "text",
      "text": "音色remixがCM楽曲として使われたのは何のお菓子",
      "fields": "答え",
      "correctAnswer": "ポッキー"
    },
    {
      "FIELD1": 23,
      "type": "text",
      "text": "ファンキーグラマラスのPVで出演しているラッパーはKREVAとMummy-D、そしてもう一人は誰か?",
      "fields": "答え",
      "correctAnswer": "CUE ZERO;キューゼロ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 24,
      "type": "text-multi-field",
      "text": "ファンキーグラマラスのPVでKREVAが来ているアウターの色は何色か?",
      "correctAnswer": "赤",
      "fields": "色"
    },
    {
      "FIELD1": 25,
      "type": "text",
      "text": "ファンキーグラマラスのPVでCUE ZEROが被っているのはどのブランドの帽子か?",
      "fields": "答え",
      "correctAnswer": "fashion"
    },
    {
      "FIELD1": 26,
      "type": "text",
      "text": "KREVA CONCERT TOUR '07 『K-ing』@横浜ブリッツにてライブが終わり楽屋に戻ろうとしたところ客席にから舞台にあるものが投げ入れられました。<br />それは何でしょう",
      "fields": "答え",
      "correctAnswer": "ブラジャー;下着",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 27,
      "type": "text",
      "text": "KREFA CUPにてオープニングの台詞を読み上げたのは誰でしょう",
      "fields": "答え",
      "correctAnswer": "ジョンカビラ"
    },
    {
      "FIELD1": 28,
      "type": "text",
      "text": "亀田誠治、布袋寅泰とKREVAが組んだユニット名は?",
      "fields": "答え",
      "correctAnswer": "THE THREE"
    },
    {
      "FIELD1": 29,
      "type": "text-multi-field",
      "text": "2021年に出演した日テレのmusic blood にてKREVAがある人の曲をカバーした。<br />誰のなんという曲か",
      "correctAnswer": "久保田利伸;missing",
      "fields": "アーティスト名;曲名"
    },
    {
      "FIELD1": 30,
      "type": "text",
      "text": "勝手にremixシリーズとしてPerfumeのある楽曲をKREVAがremixした事がある。<br />その曲とは何か",
      "fields": "答え",
      "correctAnswer": "575"
    },
    {
      "FIELD1": 31,
      "type": "text",
      "text": "揺さぶるブルーは誰が作ったトラックでしょう",
      "fields": "答え",
      "correctAnswer": "千晴"
    },
    {
      "FIELD1": 32,
      "type": "text",
      "text": "BY PHAR THE DOPESTの安全運転は誰がトラックを作っているでしょう",
      "fields": "答え",
      "correctAnswer": "Mr.Drunk;Mummy-D"
    },
    {
      "FIELD1": 33,
      "type": "text",
      "text": "イッサイガッサイでKREVAが着ているドラゴン柄のロンTはどこのブランドか",
      "fields": "答え",
      "correctAnswer": "Ralph Lauren;ラルフローレン",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 34,
      "type": "text",
      "text": "勝手にREMIXシリーズでは様々なアーティストの曲が勝手にREMIXされてきた。<br />その中で実際にリリースまでされている曲のアーティストは三浦大知と誰?",
      "fields": "アーティスト名",
      "correctAnswer": "COMA-CHI;コマチ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 35,
      "type": "text",
      "text": "顔パスブラザーズのメンバーといえばKREVAと誰?",
      "fields": "メンバー名",
      "correctAnswer": "DJ TATSUTA;DJ タツタ;タツタ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 36,
      "type": "text",
      "text": "KREVAの楽曲「挑め」ではあるテーマに沿ってリリックが書かれている。<br />そのテーマとは決して〇と言わないことである。〇に入るのは何か?",
      "fields": "答え",
      "correctAnswer": "3"
    },
    {
      "FIELD1": 37,
      "type": "text",
      "text": "2013年2年目となる908FESが開催された会場はどこか",
      "fields": "会場名",
      "correctAnswer": "さいたまスーパーアリーナ"
    },
    {
      "FIELD1": 38,
      "type": "text",
      "text": "2012年KREVAがTwitterにてラッパーを募って出来た曲はPROPSですが、<br />TwitterでKREVAが元々候補の1人として考えていたラッパーの名前を出したところそのラッパーは1対1でオファー掛けれるように頑張りますと断りをいれる。<br />そのラッパーとは誰か",
      "fields": "答え",
      "correctAnswer": "環ROY;環ロイ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 39,
      "type": "text",
      "text": "2016年KREVAが所属していた事務所によるstudio tribute albumとしてリリースされたアルバム名は何か",
      "fields": "答え",
      "correctAnswer": "monday night studio session"
    },
    {
      "FIELD1": 40,
      "type": "text",
      "text": "KREVAのシングルCDにカップリングとして収録されている曲で自身の楽曲ではなく、他のアーティストの曲をカバーしたものが3曲ある。<br />今夜はブギーバック、君に、胸キュン。-浮気なヴァカンス-あともう一曲はなに?",
      "fields": "答え",
      "correctAnswer": "ベステンダンク"
    },
    {
      "FIELD1": 41,
      "type": "text",
      "text": "アルバムProjectKでは客演が0人であるがその他にもう1枚客演が0人のアルバムがある。<br />それはどのアルバムか(なおベスト盤や、録りなおし、ミニアルバムは含まない)",
      "fields": "答え",
      "correctAnswer": "SPACE"
    },
    {
      "FIELD1": 42,
      "type": "text-multi-field",
      "text": "SPACEのスペシャルエディションはいくつ限定で販売されたでしょう",
      "correctAnswer": "6908",
      "fields": "個"
    },
    {
      "FIELD1": 43,
      "type": "text",
      "text": "2007年音楽雑誌BridgeにてKREVAが吉井和哉と対談した際に吉井和哉にここだけは負けないというポイントを語っていたそれは何か",
      "fields": "答え",
      "correctAnswer": "デコメール"
    },
    {
      "FIELD1": 44,
      "type": "text",
      "text": "2007年音楽雑誌BridgeにてKREVAが吉井和哉と対談した際に自分の曲を相手にカバーしてもらうとしたらどの曲?<br />という問いかけに対しKREVAはどの曲を選択したでしょう",
      "fields": "答え",
      "correctAnswer": "スタート"
    },
    {
      "FIELD1": 45,
      "type": "text",
      "text": "2003.12.30名古屋のクラブに遊びに来ていたKREVA。<br />オープンマイクの時間にラッパー達に煽られたのでステージに上がりフリースタイルでラップをし、最後には以下のパンチラインと共にマイクを叩きつけステージを後にした。<br />〇〇の部分に入るリリックはなにか。<br />「こんなにいんだろラッパーはいっぱいだけど一つだけ言いてぇこと俺が日本で1番ラップで〇〇男」",
      "fields": "答え",
      "correctAnswer": "金を稼いでる;金をかせいでる",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 46,
      "type": "text",
      "text": "2011年に幻冬舎から刊行されたKREVAの初著書といえばKREAM(クリーム)ですがそれに続くタイトルとはなんでしょう",
      "fields": "答え",
      "correctAnswer": "ルールなき世界のルールブック"
    },
    {
      "FIELD1": 47,
      "type": "text",
      "text": "KREVAのファンクラブ加入者に届く会報誌の名前はなに?",
      "fields": "答え",
      "correctAnswer": "KFC TIMES"
    },
    {
      "FIELD1": 48,
      "type": "text",
      "text": "以下の歌詞はどの楽曲のリリックか。<br />「映画に飲み込まれたよう崩れて消えた時の壁はもう繰り返すばかりなのになぜだろう追いつけない諦めちゃダメだよ」",
      "fields": "答え",
      "correctAnswer": "暗闇のナビゲイラ"
    },
    {
      "FIELD1": 49,
      "type": "text-multi-field",
      "text": "KREVAが908名義で客演に参加した曲は誰の何という曲か",
      "correctAnswer": "AMIDA,エビスビーツ,EVISBEATS,アミダ;八百万",
      "fields": "アーティスト名;曲名",
      "tags": ["特別代表"]
    },
    {
      "FIELD1": 50,
      "type": "text",
      "text": "渋谷のクラブshibuya NUTSが監修したコンピレーションアルバムthis is...にFAKEASSという曲でKREVAが参加している。<br />その曲ではアーティスト名がTR-908となっている。<br />このTR-908とはKREVAと誰が組んでいるユニット名でしょう",
      "fields": "答え",
      "correctAnswer": "DJ JIN;DJ ジン",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 51,
      "type": "text",
      "text": "「CONCERT TOUR 2023 NO REASON」の最終公演にてICEの国岡真由美がゲストで登場しMellow Blueという曲を披露した。<br />さてその次にKREVAが歌った曲とはなんでしょうか?",
      "fields": "答え",
      "correctAnswer": "Have a nice day!;Have a nice day;ハバナイスデイ;ハバナイ",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 52,
      "type": "text",
      "text": "47都道府県RAPにて以下のリリックは何県と韻を踏む為のフリでしょう。<br />「進み続けることに意味がある気付けば到着」",
      "fields": "答え",
      "correctAnswer": "新潟"
    },
    {
      "FIELD1": 53,
      "type": "text-multi-field",
      "text": "KREVAの楽曲PROPSにはCDとDVDがある。<br />それぞれどの楽曲のシングルCDの先着予約特典として配られたものか",
      "correctAnswer": "OH YEAH;NA NA NA",
      "fields": "CD;DVD"
    },
    {
      "FIELD1": 54,
      "type": "text",
      "text": "RomancrewのALI-KICKがPVの監督を務めているKREVAのある楽曲とは何か",
      "fields": "答え",
      "correctAnswer": "PROPS"
    },
    {
      "FIELD1": 55,
      "type": "text",
      "text": "久保田利伸meetsKREVAとしてリリースした楽曲「M☆A☆G☆I☆C」はサンプリング手法でビートが作成されている。<br />KREVAのソロ曲でも元ネタが同じ曲が存在している。<br />それは何という曲か?",
      "fields": "答え",
      "correctAnswer": "ため息はCO2"
    },
    {
      "FIELD1": 56,
      "type": "text",
      "text": "曲が始まる前にKREVAが1番、2番と教えてくれる曲は何でしょう",
      "fields": "答え",
      "correctAnswer": "ため息はCO2"
    },
    {
      "FIELD1": 57,
      "type": "text",
      "text": "KREVAのアルバムよろしくお願いしますの中でDJ TATSUTAがプロデュースしている曲はどれでしょう",
      "fields": "答え",
      "correctAnswer": "東西南北脳内回想録"
    },
    {
      "FIELD1": 58,
      "type": "text",
      "text": "映画ローグアサシンの日本版主題歌に使われているKREVAの楽曲は何?",
      "fields": "答え",
      "correctAnswer": "ストロングスタイル"
    },
    {
      "FIELD1": 59,
      "type": "text-multi-field",
      "text": "KREVAの曲knockでは最後の歌部分にAIが使われており、KREVAの歌声をAIよって別人の声に変えて重ねるという手法が取られている。<br />何人分を重ねているでしょう",
      "correctAnswer": "9",
      "fields": "人"
    },
    {
      "FIELD1": 60,
      "type": "text-multi-field",
      "text": "Have a nice day!のPVで最初に流れる曲は誰のなんという曲か?",
      "correctAnswer": "KREVA;今夜はブギーバック",
      "fields": "アーティスト名;曲名"
    },
    {
      "FIELD1": 61,
      "type": "choice",
      "text": "挑めのPVにて音が止まったタイミングで上から落ちてくる物とは何か?",
      "choices": "赤色の風船;リンゴ;ビリヤードの玉;地球儀",
      "correctAnswer": "ビリヤードの玉"
    },
    {
      "FIELD1": 62,
      "type": "text",
      "text": "KREVAが今までリリースしたフルアルバムに収録されている曲で一番時間の短い曲は何?",
      "fields": "答え",
      "correctAnswer": "MIX / TAPE"
    },
    {
      "FIELD1": 63,
      "type": "text",
      "text": "KREVAが今までリリースしたフルアルバムに収録されている曲で一番時間の長い曲は何?",
      "fields": "答え",
      "correctAnswer": "アグレッシ部 Remix;アグレッシ部 REMIX;アグレッシ部リミックス",
      "tags": ["代表のみ"]
    },
    {
      "FIELD1": 64,
      "type": "choice",
      "text": "アルバム元新人KREVAは新人KREVAより一曲少ない。<br />カットされた曲は何か?",
      "choices": "スタンド・バイ・ミー feat.KANA from THC!!;Skit/Dr.K診療所;ひとりじゃないのよ<Album Version> feat.SONOMI;Baby Dancer / Home Grown Remix",
      "correctAnswer": "Baby Dancer / Home Grown Remix"
    },
    {
      "FIELD1": 65,
      "type": "text",
      "text": "アルバム愛自分博~紫~に付属してるDVDにはイッサイガッサイのPVが別Verとして収録されている。<br />それは何か?",
      "correctAnswer": "夏",
      "fields": "ver"
    },
    {
      "FIELD1": 66,
      "type": "choice",
      "text": "アルバム何卒よろしくお願いしますはよろしくお願いしますより一曲少ない。<br />カットされた曲は何か?",
      "choices": "アグレッシ部 (Remix);くればいいのに Feat.草野マサムネ From Spitz (Album Version);THE SHOW (熊井吾郎Remix);You Are My Sunshine Feat.千晴",
      "correctAnswer": "THE SHOW (熊井吾郎Remix)"
    },
    {
      "FIELD1": 67,
      "type": "choice",
      "text": "アルバム嘘と煩悩の煩悩版に収録されているFM908で自分の歌詞が焼き芋だとしたら居場所の歌詞は〇〇ですねと言った。<br />〇〇に入るのは何?",
      "choices": "大学芋;スイートポテト;さつまいもブリュレ;芋ようかん",
      "correctAnswer": "スイートポテト"
    },
    {
      "FIELD1": 68,
      "type": "text",
      "text": "アルバム嘘と煩悩でKREVAが1番初めに作成した曲は何?",
      "fields": "答え",
      "correctAnswer": "もう逢いたくて"
    },
    {
      "FIELD1": 69,
      "type": "text",
      "text": "次のリリックは何の曲でしょう「今この場所以外に世界のどこにもない音色」",
      "fields": "答え",
      "correctAnswer": "FRESH MODE"
    },
    {
      "FIELD1": 70,
      "type": "text",
      "text": "KREVA CONCERT TOUR'07「K-ing」@日本武道館のゲストDAYにてアンコール含めて最後に歌った曲はなんでしょう",
      "fields": "答え",
      "correctAnswer": "終わりたくないオーワラナイ",
    },
    {
      "FIELD1": 71,
      "type": "text",
      "text": "ある時期にKREVAが千晴と一緒に曲を大量に作ったことをキッカケにチーム名を決めた。<br />そのチーム名とは?",
      "fields": "答え",
      "correctAnswer": "ストレスFREE",
    }
];
    export default quizData;
