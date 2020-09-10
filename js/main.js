
// shadow
// 0:極小
// 1:小
// 2:中
// 3:大
// 4:特大
// 5:ヒレ
// 6:長い

const json = '\
[{\
        "name": "たなご",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_1_i.png",\
        "season":[1,2,3,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "おいかわ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_2_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "フナ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_3_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ウグイ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_4_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "コイ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_5_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "ニシキゴイ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_6_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "キンギョ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_7_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "デメキン",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_8_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"池"\
    },\
    {\
        "name": "ランチュウ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_9_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"池"\
    },\
    {\
        "name": "メダカ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_10_i.png",\
        "season":[4,5,6,7,8],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "ザリガニ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_11_i.png",\
        "season":[4,5,6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "スッポン",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_12_i.png",\
        "season":[8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "カミツキガメ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_13_i.png",\
        "season":[4,5,6,7,8,9,10],\
        "time":[0,1,2,3,4,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "オタマジャクシ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_14_i.png",\
        "season":[3,4,5,6,7],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "カエル",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_15_i.png",\
        "season":[5,6,7,8],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "ドンコ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_16_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ドジョウ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_17_i.png",\
        "season":[3,4,5],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ナマズ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_18_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "ライギョ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_19_i.png",\
        "season":[6,7,8],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"池"\
    },\
    {\
        "name": "ブルーギル",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_20_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "イエローパーチ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_21_i.png",\
        "season":[1,2,3,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ブラックバス",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_22_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ティラピア",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_23_i.png",\
        "season":[6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "パイク",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_24_i.png",\
        "season":[9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ワカサギ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_25_i.png",\
        "season":[1,2,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "アユ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_26_i.png",\
        "season":[7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ヤマメ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_27_i.png",\
        "season":[3,4,5,6,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"崖の上"\
    },\
    {\
        "name": "オオイワナ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_28_i.png",\
        "season":[3,4,5,6,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"崖の上"\
    },\
    {\
        "name": "ゴールデントラウト",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_29_i.png",\
        "season":[3,4,5,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"崖の上"\
    },\
    {\
        "name": "イトウ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_30_i.png",\
        "season":[1,2,3,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"崖の上"\
    },\
    {\
        "name": "サケ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_31_i.png",\
        "season":[9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"河口"\
    },\
    {\
        "name": "キングサーモン",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_32_i.png",\
        "season":[9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"河口"\
    },\
    {\
        "name": "シャンハイガニ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_33_i.png",\
        "season":[9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "グッピー",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_34_i.png",\
        "season":[4,5,6,7,8,9,10,11],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "ドクターフィッシュ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_35_i.png",\
        "season":[5,6,7,8,9],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "エンゼルフィッシュ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_36_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ベタ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_37_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "ネオンテトラ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_38_i.png",\
        "season":[4,5,6,7,8,9,10,11],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "レインボーフィッシュ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_39_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[9,10,11,12,13,14,15,16],\
        "place":"川"\
    },\
    {\
        "name": "ピラニア",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_40_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,9,10,11,12,13,14,15,16,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "アロワナ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_41_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "ドラド",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_42_i.png",\
        "season":[6,7,8,9],\
        "time":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\
        "place":"川"\
    },\
    {\
        "name": "ガー",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_43_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"池"\
    },\
    {\
        "name": "ピラルク",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_44_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "エンドリケリー",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_45_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "チョウザメ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_46_i.png",\
        "season":[1,2,3,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"河口"\
    },\
    {\
        "name": "クリオネ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_47_i.png",\
        "season":[1,2,3,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "タツノオトシゴ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_48_i.png",\
        "season":[4,5,6,7,8,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "クマノミ",\
        "shadow": 0,\
        "type": "fish",\
        "img": "sakana_49_i.png",\
        "season":[4,5,6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ナンヨウハギ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_50_i.png",\
        "season":[4,5,6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "チョウチョウウオ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_51_i.png",\
        "season":[4,5,6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ナポレオンフィッシュ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_52_i.png",\
        "season":[7,8],\
        "time":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\
        "place":"海"\
    },\
    {\
        "name": "ミノカサゴ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_53_i.png",\
        "season":[4,5,6,7,8,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "フグ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_54_i.png",\
        "season":[1,2,11,12],\
        "time":[0,1,2,3,4,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ハリセンボン",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_55_i.png",\
        "season":[7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "アンチョビ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_56_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\
        "place":"海"\
    },\
    {\
        "name": "アジ",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_57_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "イシダイ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_58_i.png",\
        "season":[3,4,5,6,7,8,9,10,11],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "スズキ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_59_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "タイ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_60_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "カレイ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_61_i.png",\
        "season":[1,2,3,4,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ヒラメ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_62_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "イカ",\
        "shadow": 2,\
        "type": "fish",\
        "img": "sakana_63_i.png",\
        "season":[1,2,3,4,5,6,7,8,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ウツボ",\
        "shadow": 6,\
        "type": "fish",\
        "img": "sakana_64_i.png",\
        "season":[8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ハナヒゲウツボ",\
        "shadow": 6,\
        "type": "fish",\
        "img": "sakana_65_i.png",\
        "season":[6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "マグロ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_66_i.png",\
        "season":[1,2,3,4,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"桟橋"\
    },\
    {\
        "name": "カジキ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_67_i.png",\
        "season":[1,2,3,4,7,8,9,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"桟橋"\
    },\
    {\
        "name": "ロウニンアジ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_68_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"桟橋"\
    },\
    {\
        "name": "シイラ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_69_i.png",\
        "season":[5,6,7,8,9,10],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"桟橋"\
    },\
    {\
        "name": "マンボウ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_70_i.png",\
        "season":[7,8,9],\
        "time":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\
        "place":"海"\
    },\
    {\
        "name": "エイ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_71_i.png",\
        "season":[8,9,10,11],\
        "time":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],\
        "place":"海"\
    },\
    {\
        "name": "ノコギリザメ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_72_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "シュモクザメ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_73_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "サメ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_74_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "ジンベエザメ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_75_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "コバンザメ",\
        "shadow": 5,\
        "type": "fish",\
        "img": "sakana_76_i.png",\
        "season":[6,7,8,9],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "チョウチンアンコウ",\
        "shadow": 3,\
        "type": "fish",\
        "img": "sakana_77_i.png",\
        "season":[1,2,3,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "リュウグウノツカイ",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_78_i.png",\
        "season":[1,2,3,4,5,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "デメニギス",\
        "shadow": 1,\
        "type": "fish",\
        "img": "sakana_79_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "シーラカンス",\
        "shadow": 4,\
        "type": "fish",\
        "img": "sakana_80_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    }\
]';


const mushi_json = '\
[{\
        "name": "たなご",\
        "type": "mushi",\
        "img": "musi_1_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "シーラカンス",\
        "type": "mushi",\
        "img": "musi_2_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    }\
]';

const kaisan_json = '\
[{\
        "name": "たなご",\
        "shadow": 1,\
        "type": "kaisan",\
        "img": "seafood_1_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"川"\
    },\
    {\
        "name": "デメニギス",\
        "shadow": 1,\
        "type": "kaisan",\
        "img": "seafood_2_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    },\
    {\
        "name": "シーラカンス",\
        "shadow": 4,\
        "type": "kaisan",\
        "img": "seafood_3_i.png",\
        "season":[1,2,3,4,5,6,7,8,9,10,11,12],\
        "time":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],\
        "place":"海"\
    }\
]';

CreateFishTable(json);
CreateMushiTable(mushi_json);
CreateKaisanTable(kaisan_json);

function CreateFishTable(json)
{
    const data = JSON.parse(json);

    var count = 0;
    for (var info of data) {
        var name = info.name;
        var imgName = info.img;
        var type = info.type;
        var place = info.place;
        var shadow = info.shadow;
        var shadowNameList = ["極小", "小",  "中",  "大",  "特大",  "背びれ",  "細長"];
        var shadowName = shadowNameList[shadow];
        var seasonText = MakeSeasonText(info.season, "月");
        var timeText = MakeSeasonText(info.time, "時");
        var thisMonth = CheckThisMonth(info.season);// 今月までフラグ。

        var html = `
        <tr class="table_row ${thisMonth}" name='${type}${count}'>
          <td class="align-middle">
                <input type="hidden" name='${type}${count}' class="kizou_check" id="${type}_check">
                <img src="./images/${type}/${imgName}" alt="${name}" class="img-thumbnail" width="59px"><br>
                ${name}
          </td>
          <td class="align-middle">
                <img src="./images/${type}/shadow/${shadow}.png" alt="" class="img-thumbnail" width="50px"><br>
                ${shadowName}
          </td>
          <td class="align-middle">${place}</td>
          <td class="align-middle">${seasonText}</td>
          <td class="align-middle">${timeText}</td>
        </tr>
        `

        $('#fish_table').append(html);
        count++;
    }
}

function CreateMushiTable(json)
{
    const data = JSON.parse(json);

    var count = 0;
    for (var info of data) {
        var name = info.name;
        var imgName = info.img;
        var type = info.type;
        var place = info.place;
        var seasonText = MakeSeasonText(info.season, "月");
        var timeText = MakeSeasonText(info.time, "時");
        var thisMonth = CheckThisMonth(info.season);// 今月までフラグ。

        var html = `
        <tr class="table_row ${thisMonth}" name='${type}${count}'>
          <td class="align-middle">
                <input type="hidden" name='${type}${count}' class="kizou_check" id="${type}_check">
                <img src="./images/${type}/${imgName}" alt="${name}" class="img-thumbnail" width="59px"><br>
                ${name}
          </td>
          <td class="align-middle">${place}</td>
          <td class="align-middle">${seasonText}</td>
          <td class="align-middle">${timeText}</td>
        </tr>
        `

        $('#mushi_table').append(html);
        count++;
    }
}

function CreateKaisanTable(json)
{
    const data = JSON.parse(json);

    var count = 0;
    for (var info of data) {
        var name = info.name;
        var imgName = info.img;
        var type = info.type;
        var place = info.place;
        var shadow = info.shadow;
        var shadowNameList = ["極小", "小",  "中",  "大",  "特大",  "背びれ",  "細長"];
        var shadowName = shadowNameList[shadow];
        var seasonText = MakeSeasonText(info.season, "月");
        var timeText = MakeSeasonText(info.time, "時");
        var thisMonth = CheckThisMonth(info.season);// 今月までフラグ。

        var html = `
        <tr class="table_row ${thisMonth}" name='${type}${count}'>
          <td class="align-middle">
                <input type="hidden" name='${type}${count}' class="kizou_check" id="${type}_check">
                <img src="./images/${type}/${imgName}" alt="${name}" class="img-thumbnail" width="59px"><br>
                ${name}
          </td>
          <td class="align-middle">
                <img src="./images/${type}/shadow/${shadow}.png" alt="" class="img-thumbnail" width="50px"><br>
                ${shadowName}
          </td>
          <td class="align-middle">${place}</td>
          <td class="align-middle">${seasonText}</td>
          <td class="align-middle">${timeText}</td>
        </tr>
        `

        $('#kaisan_table').append(html);
        count++;
    }
}

function CheckThisMonth(array)
{
    // 今月まで。
    var today = new Date();
    var thisMonth = (today.getMonth()+1);

    // 来月。
    var next = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
    var nextMonth = (next.getMonth()+1);

    // まず今月出現する。
    var thisMonthResult = array.indexOf(thisMonth);

    // 来月は出現しない。
    var nextMonthResult = array.indexOf(nextMonth);
    
    // 今月まで。
    if(thisMonthResult >= 0 && nextMonthResult == -1)
    {
        return "ThisMonth";
    }
    return "NotThisMonth";
}

function MakeSeasonText(array, tanni)
{
    var first = false;
    var oldMonth = -1;
    var text = "";

    var tmpStartMonth = "";
    var tmpEndMonth = "";
    for(var month of array)
    {
        // 初回は無条件で月を入れる。
        if (!first)
        {
            tmpStartMonth = month + tanni;
            first = true;
        }
        // 連続した月。
        else if (month - oldMonth == 1)
        {
            tmpEndMonth = month + tanni;
        }
        else
        {
            if (tmpStartMonth !== "" && tmpEndMonth !== "")
            {
                text += tmpStartMonth + "〜" + tmpEndMonth + ",<br>";
            }
            else if(tmpStartMonth !== "")
            {
                text += tmpStartMonth + ",";
            }
            tmpStartMonth = month + tanni;
            tmpEndMonth = "";
        }
        oldMonth = month;
    }

    if (tmpStartMonth !== "" && tmpEndMonth !== "")
    {
        text += tmpStartMonth + "〜" + tmpEndMonth;
    }
    else if(tmpStartMonth !== "")
    {
        text += tmpStartMonth;
    }

    return text;
}

// テーブルタッチ。
$(".table_row").click(function() {

    // フラグを反転させる。
    var key = $(this).find('input').attr('name');
    var flag = $('input[name='+key+']').prop('checked');
    $('input[name='+key+']').prop('checked', !flag);


    CheckVisible();    
    saveAllParam();
});

// 今月チェック。
$('#this_month_check').click(function() {
    CheckVisible();    
    saveAllParam();
});

// 寄贈済チェック。
$('#kizou_setting_check').click(function() {
    CheckVisible();    
    saveAllParam();
});

$('.kizou_check').click(function() {
    CheckVisible(); 
    saveAllParam();
});

$('#tab_sakana').click(function(){
    $('#main_sakana').show();
    $('#main_mushi').hide();
    $('#main_kaisan').hide();
});

$('#tab_mushi').click(function(){
    $('#main_sakana').hide();
    $('#main_mushi').show();
    $('#main_kaisan').hide();
});

$('#tab_kaisan').click(function(){
    $('#main_sakana').hide();
    $('#main_mushi').hide();
    $('#main_kaisan').show();
});

// 描画切り替え。
function CheckVisible()
{
    // 今月までチェック。今月までじゃないやつを消す。
    var thisMonth = $('#this_month_check').prop('checked');
    if(thisMonth)
    {
        $('.NotThisMonth').hide();
    }
    else
    {
        $('.NotThisMonth').show();
    }

    // 寄贈チェック。寄贈済のやつを消す。
    var kizou = $('#kizou_setting_check').prop('checked');
    if(kizou)
    {
        // チェックついてるやつは消す。
        $('.kizou_check').each(function(index, element) {
            if($(this).prop('checked'))
            {
                $(this).parent().parent().hide();
            } 
        })
    }
    else
    {
        // 今月終了分だけ表示の場合は、今月分だけを復活
        if(thisMonth)
        {
            $('.ThisMonth').show();
        }
        // 今月とかも関係ない場合は全部復活。
        else
        {
            $('.table_row').show();
        }
    }

    // 寄贈済は色を変える。
    $('.kizou_check').each(function(index, element) {
        if($(this).prop('checked'))
        {
            $(this).parent().parent().addClass("table-secondary");
        }
        else
        {
            $(this).parent().parent().removeClass("table-secondary");
        }
    })
}

function saveAllParam()
{
    var saveData = {};

    // チェック状態を保存。
    $('.kizou_check').each(function(index, element) {
        var name = $(this).attr('name');
        saveData[name] = $(this).prop('checked');
    })

    var thisMonth = $('#this_month_check').prop('checked');
    saveData["thisMonth"] = thisMonth;

    var kizou = $('#kizou_setting_check').prop('checked');
    saveData["kizou"] = kizou;

    store.set('user_data', saveData);
}

function load()
{
    var saveData = store.get('user_data');

    // データが存在するならせっせとフォームにセットしにいく。
    if (!saveData)
    {
        return;
    }

    // 各データのチェック状態を復活。
    for (let key in saveData) {
      $('input[name='+key+']').prop('checked', saveData[key]);
    }

    $('#this_month_check').prop('checked', saveData["thisMonth"]);

    $('#kizou_setting_check').prop('checked', saveData["kizou"]);
}

function initialize()
{
    // 前回のデータ読み込み。
    load();

    // 表示チェック。
    CheckVisible();
}
