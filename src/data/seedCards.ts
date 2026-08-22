import type { CardType } from '../domain/types';

export interface SeedCard {
  displayName: string;
  type: CardType;
  points: number;
  note?: string;
}

/**
 * Seeded from db.agricolajp.dev (community-run Agricola card database)
 * on first app load, so most cards are recognized automatically instead
 * of requiring a first manual entry. Only cards with a fixed, unconditional
 * end-game point value are included; cards whose bonus depends on a formula
 * (e.g. points per resource owned) or whose value differs between editions
 * are intentionally left out so the app never guesses a wrong number —
 * those still fall back to first-time manual entry, same as any unrecognized card.
 *
 * Split into chunks: a single multi-thousand-element array literal made the
 * TypeScript compiler hit its type-complexity limit (TS2590).
 */
const chunk0: SeedCard[] = [
  {
    displayName: '5年計画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'FOUS: 異常な大きさのフェンス',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: 'Xファイル',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: 'あぜの溝',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ありえない木箱',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'いかだ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'いつもの仕事',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かいば桶',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かかし',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かがり火',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かご商',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'かご製作所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'かつら',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'かぼちゃパイ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'かぼちゃ種子油',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かまど',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'かめ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'かんな',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'がらがら',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'くびき',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'くまで',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'こて',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'じゃがいもではない',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'じゃがいもスコップ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'じゃがいも畝立て機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'じょうろ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'たんつぼ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'つぶし固めたバッタ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'つるはし鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'つるべ井戸',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'どんぐりいっぱいのカゴ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ぬかるんだ畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'のこぎり',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'はしご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ひな小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ふれあい動物園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'へら',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ほうき',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'めん棒',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'もじゃもじゃの友人',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: 'ゆりかご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'りんご園',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ろくろ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'わらぶき小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'わら小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'わら粘土',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'わら肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アグリコーラ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'アスパラガスの贈り物',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アスパラガスナイフ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アスモデウス',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アトリエ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'アトリエボート',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アナグマ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アブサン',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'アルデンヌの森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'アルム',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'アングリーコアラ',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'アーチ道',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: 'イチゴ花壇',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'ウイスキー樽',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ウサギ小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ウマ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'エイリアン燃料',
    type: 'improvement',
    points: -3,
    note: 'Xデッキ',
  },
  {
    displayName: 'エボニー・シュー賞',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'エレファントグラス焼却炉',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'エンジン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'エンダイブ畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'オランダの山',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'オランダの陶器パイプ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'オランダ式風車',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'オランダ牛車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'オランダ風車',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'オーク材の樽',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'オーバーホール',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'カゴ商',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'カゴ製作所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'カスタード',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'カツレツハンマー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'カヌー',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'カブ畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'カマンベール',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'カメレオン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'カルボナードとフライドポテト',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ガチョウ池',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ガラスビン',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: 'ガラス工場',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'ガードローブ',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'キッチンスライサー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'キャメロット',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: 'キリスト教',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'クマ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'クマの罠',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'クラフトビール醸造所',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'クローン作成',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'グリル',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'ケシの花畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ゲスト',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ゲーム祭',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'コウノトリの巣',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'コーヒーハウス',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'コーヒーブレイク',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ゴールドハンド',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ゴーレム',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'サックス',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シダの胞子',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シチュー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シャベル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シュタイアーのオーク樹',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シュナップス蒸留所',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'シュパレンブルク城',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'ショコラーデ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ジェネヴァ蒸留所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ジグザグ鍬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ジビエ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ステージ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'スパイス',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'スピード改築',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'スペキュラース屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ズタ袋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ゼンマイ人形',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ソファー',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'ソーセージ練り器',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'タイル窯',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ダイアモンド取引所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ダイヤモンド鉱山',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'チュイルリー庭園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'チューリップ畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'チーズ市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'トリュフスライサー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ドリル鍬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ニシン鍋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ネックレス',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ハウスボート',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ハウベルグ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ハチの巣型暖炉',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ハト小屋',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'ハンノキの小枝',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ハンマー破砕機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ハンモック',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'バイオガス工場',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'バグパイプ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'バゲット',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'バラック',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'バーベキュー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パル・フォルス式狩猟',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'パンケーキパン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パン焼き天板',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パン焼き小屋',
    type: 'improvement',
    points: 5,
  },
];

const chunk1: SeedCard[] = [
  {
    displayName: 'パン焼き暖炉',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'パン焼き桶',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パン焼き棒',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パン焼き畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'パン焼き部屋',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: 'ビアジョッキ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビアホール',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビオトープ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビスケット',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビーチチェア',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ビールテーブル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビールベンチ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビール博物館',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'ビール屋台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビール栓',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビール樽',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビール祭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ビーレフェルトのトランプ',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: 'ビーレフェルトの陰謀',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ファサード彫刻',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フェロモン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フォアグラ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フォーク',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フォーク型くわ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フサフサの友人',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: 'フランキー杭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'フルーツケーキ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'フロントガーデン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ブラバント',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ブランデー蒸留所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ブロッホ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'プラムの庭',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'プランター',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'プレゼント台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ベアパーク',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: 'ベギン会館',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ベルジアンシェパード',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ペルーの異端審問',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: 'ペレット圧縮機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ペレット種子',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ペーパーナイフ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ホップ畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'マスの池',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'マツの森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'マテルネ社のジャム',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'マメかご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'マメ畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'マルリーの機械',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'マーケット広場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ミステリーサークル',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: 'ミズゴケ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ミツバチの巣',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ミネラルフィーダー',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ミルクがめ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ミルク壺',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ミートパイ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ヤギ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ユニコーン パート1',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: 'ライオンの丘',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ライ麦飼料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ラズベリー',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ラベンスブルグの紡績工場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ランタンの奇跡',
    type: 'improvement',
    points: 8,
  },
  {
    displayName: 'ランタンの家',
    type: 'improvement',
    points: 7,
  },
  {
    displayName: 'ランプの油',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ラ・グラースの噴水',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'リンゴの木',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ル・アーブル港',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'レイライン',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: 'レタス畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'レンガの家増築',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガの屋根',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'レンガの柱',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガハンマー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガ坑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'レンガ工場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガ暖炉',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'レンガ窯',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'レンガ置き場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガ補給',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'レンガ道',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ロザラムの鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ロバ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ローストのレシピ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ワインケラー',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ワイン棚',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ワイン畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: 'ヴィラ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: 'ヴェストーニスのビーナス',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '一時保管庫',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '三つ又の矛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '三つ足やかん',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '三圃式農業',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '下生え',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '不動産地図',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '中庭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '中立',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '乳母車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '乾燥地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '乾燥小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '予定表',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '二段ベッド',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '五月柱',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '五輪',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '井戸',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: '亜麻色の髪',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '人の子ではない',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '仕込み水',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '休日の贈り物',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '休耕地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '休閑地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '会館',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '伸縮ヤギ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '住居縮小',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '住居計画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '作付け区域',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '作業台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '保護林',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '信用貸し',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '修行期間',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '修道会の手紙',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '修道院の誓い',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '修道院ビール',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '修道院跡地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '俵',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '個人の森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '個人間取引',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '借用書',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '兄弟愛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '光線',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: '公園のベンチ',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '公園墓地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '共用の壁',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '円材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '再教育',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '再生レンガ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '冬の倉庫',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '冬の枯れ木',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '冬園',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '出張職人',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '出稼ぎ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '出稼ぎ労働者の家',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '切り株飛び越え鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '刈り取りフック',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '刈り込んだ柳',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '別荘',
    type: 'improvement',
    points: 8,
  },
  {
    displayName: '削り馬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '剪定ばさみ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '労働許可証',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '労働証明書',
    type: 'improvement',
    points: 0,
  },
];

const chunk2: SeedCard[] = [
  {
    displayName: '動物園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '包囲壁',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '北緯52度の標石',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '区画整理',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '単葉機',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '博物館村',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: '卸売市場',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '厩',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '厩の庭',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '厩の木',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '厩肥',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '友好的な牧場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '収穫の宴',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '収穫小屋',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '収穫祭計画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '受賞した羊',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '名犬ラッシー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '味見',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '品物リスト',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '品種登録',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '喜捨',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '喫茶店',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '営巣地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '回転鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '園芸用くわ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '園芸用ナイフ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '園芸用具',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '地固め機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '地球外奴隷',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: '埋められた宝',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '堀り取り機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '堆肥',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '境界石',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '売春宿',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '外輪船',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '多産の社',
    type: 'improvement',
    points: -1,
  },
  {
    displayName: '夜警',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '大家畜市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大工の手斧',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大工の敷地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '大工の金鎚',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大枠のこぎり',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大温室',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大牧場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '大製陶所',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '大農場の称号',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '大鎌',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '大麦製粉機',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '天井',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '天然堆肥',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '天秤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '奇妙な異星人燃料',
    type: 'improvement',
    points: -3,
    note: 'Xデッキ',
  },
  {
    displayName: '婚礼馬車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '子ども部屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '子供の動物市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '学校',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '完全伐採',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '室内暖炉',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家の墓所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家具商',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '家具職人小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家具製作所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '家庭動物園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家族の肖像画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家族向け住宅',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家畜の赤ちゃん飼育所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家畜の餌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家畜収容所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家畜商',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家畜大市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家畜市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '家畜庭',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '家畜檻',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '宿泊車両',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '宿題',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '密造酒',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '寝室',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '対外援助',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小さなカゴ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小便少女',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '小川',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小温室',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '小牧場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小舟',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '小麦の束',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小麦の迷路',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小麦サイロ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小麦市場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '小麦畑のベッド',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小麦貯蔵庫',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '小麦車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '屋根はしご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '屋根裏部屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '屠殺教会',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '屠畜場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '山の洞穴',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '岩のピラミッド',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '岩の多い地形',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '岩石坑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '岩石抗',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '川辺のレンガ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '巡礼地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '工作台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '工具箱',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '巨大かぼちゃ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '市場の噴水',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '市民のファサード',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '市民の木',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '帰宅の音楽',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '幅木',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '干し草倉',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '干し草山',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '干上がった沼',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '干草用荷車',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '干草置き場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '平らな丘',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '平和の島',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '平地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '平底船',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '庭の木材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '庭園の道',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '庭師小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '庭熊手',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '廃墟',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '建築用木材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '建築設計図',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '建築資材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '建設予定地',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '強力餌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '彫像',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '彫刻学科',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '待ち合わせ場所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '応接間',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '怒ったアヒル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '恋文',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '愛の庭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '成育農場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '手引き車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '手投げ斧',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '手押し台車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '手押し車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '手押し鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '手挽き臼',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '投げ縄',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '折り返し鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '担保',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '掘り土窯',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '掘り返しシャベル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '採掘シャベル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '採石事業所',
    type: 'improvement',
    points: 1,
  },
];

const chunk3: SeedCard[] = [
  {
    displayName: '採石場見学',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '搾乳台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '搾乳所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '搾乳施設',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '撹乳器',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '攪乳器',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '改築事業所',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '改装',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '放し飼いの鶏',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '放牧場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '救貧院',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '教会',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: '教会墓地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '教師の机',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '教育手当',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '教育施設',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '整備保証',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '料理店',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '料理教室',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '斧',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '新しい土地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '新しい市場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '新婚旅行',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: '新耕地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '新規購入',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '旅行靴',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '日曜学校',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '日記',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '旬の物',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '星付きの食事',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '春の小麦畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '晩課',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '景観設計',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '晶洞石',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '暖炉',
    type: 'improvement',
    points: -3,
  },
  {
    displayName: '暖炉ほうき',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '暖炉設備',
    type: 'improvement',
    points: -1,
  },
  {
    displayName: '暗渠鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '暦',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '書き机',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '書斎',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '書棚',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '最低賃金',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '最終章',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '有用動物市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木っ端',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木のくまで',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木のクレーン',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '木のスリッパ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木のホエイ桶',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木のボタン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木の宝石箱',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木の家増築',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木の暖炉',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '木の桟橋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '木の風よけ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木工作業場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木彫り',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木挽き台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木挽き所',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '木挽水車',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '木挽風車',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '木材荷車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木製スライドハンマー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木靴',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '木骨の小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '本棚',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '村のお店',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '村の井戸',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: '村の公民館',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '村の学校',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '村の教会',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: '杯',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '東インド会社',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '東洋かまど',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '板張りの小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '林',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '林務官舎',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '林学教育',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '林道',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '果樹',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '果樹園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '果物の木',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '柄付き網',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '柴屋根',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '格子垣',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '格子柵',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '梁',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '棒杭柵',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '森のはずれ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '森の井戸',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の学校',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の宿屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の幼稚園',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の果物',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '森の湖畔荘',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の湿原',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '森の牧場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の石',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '森の道',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '森林鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '植え替え',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '植林',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '植物性肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '横挽きの木材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '樹上の家',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '樹木畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '樽詰ビール',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '機織り機',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '檻',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '武者修行',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '残飯',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '段地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '毛刈りバサミ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '毛皮',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '毛皮の屋根',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '水の家',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '水上アトリエ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '水森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '水泳教室',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '水路',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '水車',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '水車の輪',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '水飲み場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '水飲み桶',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '永久ライ麦栽培',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '汚水だめ',
    type: 'improvement',
    points: -1,
  },
  {
    displayName: '池の小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '河港',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '沼地化',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥地の白樺',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥地化',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥地博物館',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '泥地森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥地開発',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥溜り',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥灰肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭そり',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭の小舟',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥炭スコップ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭ペレット',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭塀の小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥炭採掘権',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭採掘隊',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭焼き場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥炭考古学',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '泥炭肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '泥炭船',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '泥薬',
    type: 'improvement',
    points: 1,
  },
];

const chunk4: SeedCard[] = [
  {
    displayName: '泥風呂',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '洞窟',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '流し網船',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '浴室',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '海藻肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '消防署',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '液体肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '深い森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '深掘り鋤',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '温室',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '湖畔旅行',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '滑車',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '漕ぐ舟',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '漫画屋',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '激しい空腹',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '灌漑用水路',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '火の沼の炎が吹き出す暖炉',
    type: 'improvement',
    points: 1,
    note: '森デッキ',
  },
  {
    displayName: '火の沼の炎が吹き出す窯',
    type: 'improvement',
    points: 1,
    note: '森デッキ',
  },
  {
    displayName: '火酒製造所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '灯台',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '灰色の脳細胞',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '災害の年',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '炭坑馬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '炭焼釜',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '焼き串',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '焼き菓子教室',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '焼畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '焼畑栽培',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '煙吹く炉棚',
    type: 'improvement',
    points: -3,
  },
  {
    displayName: '煙突',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '煮沸釜',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '熱波',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '燃料倉庫',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '燻製所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '牛の鈴',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '牛の首輪',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '牛牧場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '牛車',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '牧人の杖',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '牧羊犬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '牧草地でゲームを',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '牧草地の川辺の森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '物々交換所',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '物乞いの手紙',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '物置',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '物置小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '物語',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '特別な餌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '特別牧場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '狩りの記念品',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '猟師の帽子',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '猪の泥だまり',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '猪の飼育',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '猪狩り',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '猫の舌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '獲物の交換',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '王家の木材',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '珍しい建築物',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '珪化木',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '理想的眺望',
    type: 'improvement',
    points: -1,
  },
  {
    displayName: '理髪店',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '瓶',
    type: 'improvement',
    points: 4,
  },
  {
    displayName: '生活保護',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '生活必需品',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '生野菜',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '産院',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '男児希望',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畑の柵',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畑の粘土',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畑の避難所',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '畑用品',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畜殺場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '畜産場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畜産援助',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畜糞用くまで',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '畝立て鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '異常な大きさのフェンス',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '異星人の農夫',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: '白鳥の湖',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '皆伐',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '直播き',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '省庁',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '石のクレーン',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '石のベンチ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石の交換',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石の家再建',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '石の家増築',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石の心臓',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石の暖炉',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '石の調理場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '石ばさみ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石切りの広間',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '石切り場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '石取り作業',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石材荷車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石灰肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石炭層',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '石窯',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '石臼',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '石車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '硬磁器',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '礼拝堂',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '礼拝所',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '祝典ホール',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '私立学校',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '移住労働者',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '移動キッチン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '移動住宅',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '移動労働者',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '移動式暖炉',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '移動耕作',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '種まき機',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '種子散布機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '穀物の束',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '穀物スコップ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '穀物倉庫',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '穀物飼料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '積みわら',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '突き鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '窯置き場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '第六感の学院',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '筆記板',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '箕',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '管理部門',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '簡易かまど',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '簡易台所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '籠椅子',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '粉砕鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '粘土層の窪地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '粘土積み場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '糞山',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '糸巻き台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '糸巻き棒',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '糸杉',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: '納屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '紡績場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '組合のお店',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '経験の蓄積',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '給餌柵',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '緑化計画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '繁殖手当',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '織機',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '羊の井戸',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '羊の毛布',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '羊市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '羊皮の絨毯',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '義務教育',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '耕作区画',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '耕作放棄地',
    type: 'improvement',
    points: 0,
  },
];

const chunk5: SeedCard[] = [
  {
    displayName: '耕地の垣根',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '耕運鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '聖マリア像',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '聖書',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '職人の小部屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '職人の巻物',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '職人地区',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '肉処理台',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '肥料運搬車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '肥溜め',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '背負いかご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '胸像',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '脱穀そり',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '脱穀場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '脱穀板',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '脱穀棒',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '脱穀鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '膨らし粉',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '自動水受け皿',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '自然保護区域',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '舗装道路',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '芝泥炭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '芝生用肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '花鉢',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '芸術家の庭',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '苗床の鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '苗木畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '若牛',
    type: 'improvement',
    points: -3,
  },
  {
    displayName: '茂み',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '草上の昼食',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '草刈り鎌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '草地鍬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '荷揚げかご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '荷車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '荷馬車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '葦の交換',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '葦の売却',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '葦の家',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '葦の群生帯',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '葦帽子のヒキガエル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '葦床',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '葦栽培',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '蒸し器',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '蒸気機械',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '蒸気機関',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '蒸気鋤',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '薪',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '薪の山',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '薬草畑',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '行き詰まった荷車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '行進曲',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '装蹄刀',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '裏口',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '裏庭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '裏庭の井戸',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '裕福な生活',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '補給ボート',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '製材所',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '製粉オーブン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '製陶所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '製陶所の敷地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '複製機',
    type: 'improvement',
    points: 0,
    note: 'Xデッキ',
  },
  {
    displayName: '親切な隣人',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '観賞動物園',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '角笛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '解体ハンマー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '計画変更',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '認証の印',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '誕生石',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '調理コーナー',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '調理台',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '調理場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '調理場の拡張',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '警戒牧草地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '議長の庭',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '豊作',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '豊穣地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '豪華な宿泊所',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '貧者の家',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '貯蓄預金',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '貯蔵部屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '貸付金',
    type: 'improvement',
    points: -4,
  },
  {
    displayName: '賃金',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '資材倉庫',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '資源拠点',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '資産価値',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '贈り物かご',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '足蹴り自転車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '踏み粘土',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '蹄ナイフ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '車輪鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '車陣',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農園',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農場拡張',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '農家の舞踏会',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '農家市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農業学校',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '農業愛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農業用肥料',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農業用荷車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農民のブティック',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '農産店',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '農用車',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '農耕馬市場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '農舎',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '近郊農業',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '退職',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '逢瀬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '連絡通路',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '週末市場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '逸楽の国',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '遊園地',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '運び馬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '運河',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '遍歴の旅',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '道具小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '避暑地の別荘',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '避難小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '酒場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '酪農場',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '醸造所',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '醸造所の池',
    type: 'improvement',
    points: -1,
  },
  {
    displayName: '醸造窯',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '野営地',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野焼き',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野生の畑',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野生の繁殖',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野菜の収穫',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野菜スライサー',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '野菜園',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '金のイヤリング',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '金のバラ',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '金メダル',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '金槌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '金物屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '釣り堀',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '釣り桟橋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '釣り針',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '釣り餌',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '釣竿',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鉄の鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鉤型鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鋤車',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鋳鉄製の暖炉',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '鋼の鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '錐',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '鍵',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '鎖状農具',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '開墾鋤',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '開拓者の魂',
    type: 'improvement',
    points: 0,
  },
];

const chunk6: SeedCard[] = [
  {
    displayName: '開門',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '闘牛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '防火用貯水池',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '陶器',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '陶器パイプ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '陶器商',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '陶工の中庭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '陶工の小窯',
    type: 'improvement',
    points: 5,
  },
  {
    displayName: '陶工市',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '陶磁器',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '雄羊',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '集草機',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '雇われの助っ人',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '雇用契約',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '雑木林',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '雑草掻き',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '離れのトイレ',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '雨除け',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '電報',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '露店',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '静かな沼',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '革なめしの森',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '革の鞍',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '革ズボン',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鞭',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '風車小屋',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '飛行石',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '食べられる根',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '食料箱',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '食材かご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '飢餓の壁',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '飼料部屋',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: '飼馬桶',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '養魚場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '餌場',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '餌皿',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '馬小屋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '馬肉屋',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '馬袋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '馬車旅行',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '馬鍬',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '騎手の庭',
    type: 'improvement',
    points: 3,
  },
  {
    displayName: '高地牛',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '高熱暖炉',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '高熱窯',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '魔女',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '魔女との遭遇',
    type: 'improvement',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '魔女の踊り場',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '魔法の豆',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鯉の池',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '鳥かご',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鳥の罠',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '鴨の池',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '鶏小屋',
    type: 'improvement',
    points: 1,
  },
  {
    displayName: '鷹の塔',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '麦ふるい',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '麦袋',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '黄土レンガ',
    type: 'improvement',
    points: 0,
  },
  {
    displayName: '黄金の兜',
    type: 'improvement',
    points: 2,
  },
  {
    displayName: 'かご編み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'かご編みの息子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'かまど焚き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'こけら葺き職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ごますり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'じゃがいもを食べる人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'じゃがいも収穫者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'じゃがいも植え',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'たかり屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'たがね工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'つましい農家の若者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'てき屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ねぐら作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ねたみ深い農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ひそかな広告主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ぶらつき学生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ほら吹き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'もり打ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'やな作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'りんごの人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'アクションの達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'アドバイザー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'アブサン飲み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'アマゾネス',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'イェーガー、非狩人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'イチゴ集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'イベント担当者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'イリュージョニスト',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ウイスキー蒸留者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'オウムブリーダー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カウボーイ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カウボーイと母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カゴ編み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カゴ編みの妻',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カゴ運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カフェ歌手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カブ農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'カーテン織',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ガラス職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'キッチンメイド',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'キノコ探し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'キャベツ好き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'キャベツ買い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ギルド長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ゲームデザイナー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ゲーム会主催者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'コック',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'コーン蒸留人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'サイコロ彫り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'サイロ番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'シェフ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'シャンソン歌手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'シュルレアリスト',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ショベル運搬人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'スキー教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'スケート靴研ぎ師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'スパイ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'スピンドクター',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'セラピスト',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ゼネラリスト',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ソーダ生産者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'タイル工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ダンサー&スパイ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ダンス教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'チャック・ザ・ウッド・チャック',
    type: 'occupation',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: 'チーズ売りの女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'チーズ運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'トリュフ掘り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'トリュフ探し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ドイツ好き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ニンジンケーキ職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ニンジン農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ネズミ捕り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ハイドシュヌッケン飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ハト猟師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ハーレムの魔女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'バイオリン弾き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'バグパイプ奏者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'バックパッカー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パイプ吸い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パトロン',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン焼き長老',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン焼き長老見習い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン職人の娘',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パン運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'パーティー主催者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ビッグバン論者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ビール醸造人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ビール露店経営者',
    type: 'occupation',
    points: 0,
  },
];

const chunk7: SeedCard[] = [
  {
    displayName: 'フライドポテト屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'フランシスコ会の修道士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'フランデレンの愛国者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'フリーメイソン会員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'フレスコ画家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ブタ飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ブラシ作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ブリキ職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ベッド造り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ペット仲買人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ペット育成人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ホモ・ルーデンス',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ボヘミアン',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ボート塗装工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'マイスター・ホラ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ママっ子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'マメな会計士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ミンク飼育士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'メイド',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'メガネ作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'リネン織工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'リフォーム士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'リュート奏者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'リンゴつみ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ルーベンス風の女性',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レモン商',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガの刻印うち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガの家の住人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ泥棒',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ混ぜ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ焼き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ積み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ貼り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'レンガ運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ワルツの踊り手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ワーカホリック',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: 'ヴァンパイア',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '一人っ子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '一輪車使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '七面鳥飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '三文文士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '上棟式たかり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '上級教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '下働き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '不平屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '世捨て人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '世論誘導者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '丘陵地農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '主計官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '乗馬従者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '乳搾り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '乳母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '乳牛王子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '二人目の配偶者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '二児の母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '井戸掘り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '井戸検査人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '交換教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '交渉使節',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '人形使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '人狼',
    type: 'occupation',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '仕立屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '代官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '代役',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '代理教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '仲介商',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '伐採人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '会計士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '伴侶',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '何でも屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '作手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '作曲家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '使用人頭',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '使者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '侍医',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '係争物取り扱い人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '保育士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '信仰深い配偶者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '修理屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '修道院の設立者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '修道院生活者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '倉庫の女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '倉庫主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '倉庫人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '倉庫番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '倉庫管理係',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '個別指導',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '借地農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '借用者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '借金取り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '働き者嫌い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '先鋭建築家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '先駆者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '児童相談員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '入植者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '八百屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '共同体長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '兵士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '内地管理者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '内装業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '冬場の管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '出来高労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '出稼ぎ工芸家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '初産婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '利他主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '削蹄師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '剥製師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '創設の父',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '助産婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '助産師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '動物好き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '動物愛護活動家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '動物捕り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '動物福祉士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '動物訓練士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '勢力家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '包装の達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '北海の漁師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '十字軍の指揮者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '卒業生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '協同組合員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '占い師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '即席パン屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '卸売業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '原型製作者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩の乳搾り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩の見本作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩務員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩建築士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩掃除人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩舎長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩設計士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '厩配達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '去勢人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '双子の母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '双子の研究者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '反乱軍',
    type: 'occupation',
    points: 5,
    note: 'Xデッキ',
  },
  {
    displayName: '反骨の歌手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '収入役',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '収穫手伝い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '収穫管理',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '収集家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '取り持ち女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '受注生産職人',
    type: 'occupation',
    points: 0,
  },
];

const chunk8: SeedCard[] = [
  {
    displayName: '受賞者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '叡智の持ち主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '古物商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '召使',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '台所の芸術家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '合理主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '名家録の編纂者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '名探偵',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '君主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '吟遊楽人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '吟遊詩人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '唐変木',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '商品詐欺師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '営林士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '営農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '囚人番号24601',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '囲い柵作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '国家教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '園芸事務長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '園芸愛好家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '土器作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '土地清掃人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '土堀り人夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '土壌科学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '土木作業員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '地主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '地質学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '坑夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '執事',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '執筆狂',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '塔造り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '塗装美術家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '塩作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '壁職人の親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '壁装飾人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '壺作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '外交官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '外働き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '多くのプレイヤー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '夜学生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '夜間労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '夢遊病者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大パトロン',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大口叩き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大地主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大工の親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大規模農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大農場管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大鎌使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '大食漢',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '天才画家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '天文学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '太陽農',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '奇術師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '奉仕女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女たらし',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女中',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女化学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女性の権利運動者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女性相続人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '女性顧問',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '子なし',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '季節労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '学校中退者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '学校教員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '宇宙構造論学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '守銭奴',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '官僚',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '害虫駆除女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家具職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家具調達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家庭教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家庭相談員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家政婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家族計画家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜の世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜の保有者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜の餌係',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜バイヤー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜守',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜小作人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜警護',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜買い取り人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜追い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家畜餌やり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '家長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '寄宿者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '寮長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '将軍',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小さい庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小さな農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小作人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小動物ブリーダー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小売人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小売業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小屋大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小百姓',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小説家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小麦刈り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小麦収穫者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小麦好き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小麦相場師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '小麦農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '居候',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '居酒屋の店主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋内飼育の専門家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋台の所有者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋外飼育人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋根がけ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋根付け',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '屋根点検者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '山の羊飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '山師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '山歩き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '岸辺の庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '岸辺の建築士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '岸辺の林業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '川辺の羊飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '巡礼者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '工場主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '工房の助手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '工芸指南',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '左官屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '左翼主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '巨人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '巨匠',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '布告者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '帆船大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '干し草管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '床張り職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '店主夫妻',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '庭園デザイナー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '庭職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '廃材商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建具大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建築士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建築専門家',
    type: 'occupation',
    points: 0,
  },
];

const chunk9: SeedCard[] = [
  {
    displayName: '建築業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建築牧師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建築設計士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '建設の獅子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '彫刻家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '彫刻家の息子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '彫工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '彫師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '待ち構え',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '後見人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '従順な兄弟',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '復帰者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '徴税人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '怠惰な種まき',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '恐妻家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '情報屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '愛のメッセンジャー',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '愛らしいザンドラー君',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '愛人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '愛猫家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '成り上がり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '成功者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '手品師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '手押し車使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '托鉢僧',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '技師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '掃除屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '掘り出し人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '探検家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '接ぎ木職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '改築屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '改築計画作成者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '改装芸術家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '改革者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '放浪者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '放牧人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '政治家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '救世軍の女将校',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '教授',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '教父',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '散らかし屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '数学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '整地人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '文通者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '料理評論家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '新入生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅する壁職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅する屋根葺き人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅仲間',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅芸人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旅行業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '旋盤職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '族長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '族長の娘',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日の出の牧夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日の出崇拝者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日和見主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日曜労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日曜大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '日雇い農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '早起き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '昔語り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '曲芸師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '最古の職業',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '有機農業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木こり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木の専門家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木を切る人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木工職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材あさり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材収穫者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材収集家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材裁断師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材調達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材配り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木材集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '木造住宅増築士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '材木の名手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '材木買い付け人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村のとんま',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村のまぬけ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村のドルイド僧',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村の女性教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村の美女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村の農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村の農婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村の長老',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '村長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '杣人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '板金工の親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '林務官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '林業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '枝集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柱に噛みつく男',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柴刈り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柴結び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵の親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵手伝い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵立て',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵見張り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '柵運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '栄養士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '校長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '梁打ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '梨剥き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の住人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の労役者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の守護者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の所有者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の監督者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森の農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林保護者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林地区管理',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林活動家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林科学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '森林調査人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '植字工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '植物学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '検察官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '樹木庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '樹木検査人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '樽作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '機械いじり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '檻作りの女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '欧州の大富豪',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '歌い手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '歌手の家族',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '歌手の少年',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '武道家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '歩兵',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '殺菌技術者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '毒見役',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '水夫長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '水辺の労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '水運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '水道業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '求職者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '汎農',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '池の番人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '法学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '法律顧問',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '泥だらけの入居者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '洗濯女',
    type: 'occupation',
    points: 0,
  },
];

const chunk10: SeedCard[] = [
  {
    displayName: '流浪人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '海の指物師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '海洋学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '液肥散布人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '清廉潔白な人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '温室作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '測量士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '港の商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '港湾労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '港湾管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '港長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '満載畜産家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '漁師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '漁師の友人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '漁師の長老',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '漁師見習い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '火酒作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '炭坑夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '炭焼き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '無心する学生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '焼印押し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '焼畑農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '煙突掃除人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '熟練建築家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '熟練改築屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '熟練職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛の世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛の飼育士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛売り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛飼いの女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牛飼いの草分け',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牡蠣を食べる少女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牡蠣食べ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牧師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牧畜の達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '牧羊者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '物書き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '狩人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '独学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '独立の戦士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猛獣使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猪使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猪狩人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猪猟師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猪追い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猪飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '猫車押し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '獣医',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '獲物呼び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '獲物捕り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '獲物調達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '現場監督',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '環境保護者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '生け垣管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '生垣の親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '生存主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '産婆',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '田舎農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '町医者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑の世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑の使者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑の取引人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑の耕作者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑作人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑好き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑守',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑見張り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑調査人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畑農',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畜殺人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '畜産農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '異端教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '発明家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '白いブラジル人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '皇太子',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '盗賊',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '監督の少年',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '監督官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '真珠を測る女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '真珠採り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '知事',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '短時間労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石切り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石工組合員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石打ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石拾い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石持ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材保管人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材研磨師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材管理者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材輸入業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石材運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石積み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石臼職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石買い付け人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '石運び',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '研究所の創設者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '社会システム理論家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '神父',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '神童',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '秋の母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '移民二世',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種まきの指導者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種まき人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種まき指導者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種まく人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種をまく人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種子研究者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種畜買い付け人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '種職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '稼ぎ頭',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '穴掘り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '空飛ぶ主婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '突貫壁職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '窪地のみはり',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '窪地の庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '競売人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '箱造り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '篤志家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '簡略主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '粘土守',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '粘土運搬人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '精肉屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '紐編み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '純朴な人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '純血種の育成者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '紙すき',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '紳士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '組合の鋤手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '経営者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '結婚コンサルタント',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '綱作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '網漁師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '綿羊飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '総督',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '緑衣の狩人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '織工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '織物商',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '罠作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '罠猟師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊の供給者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊仲介者',
    type: 'occupation',
    points: 0,
  },
];

const chunk11: SeedCard[] = [
  {
    displayName: '羊使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊持ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊番',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊調査員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊農',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '羊飼い親方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '美術教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '美術監督',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '群れと羊飼い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '耕作の英雄',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '耕作者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '耕地整理',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '聖ニコラウス',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '聖職者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '職人技奨励者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '職場長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '職業訓練士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '肉体労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '肉屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '育畜家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '脱穀者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '脱穀職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '腹心の友',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '臨時のお手伝いさん',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '臨時労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '自家醸造師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '自由農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '自給自足者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '舞台の裏方',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '舞台スター',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '舞台監督',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '船渠労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '芝生の世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '苗床の管理人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '若手芸術家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '若農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '英雄',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '草干し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '荒くれパン職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '菓子職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '菜園の世話人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '菜食主義者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '葦売り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '葦屋根の葺き替え屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '葦買い付け人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '葦集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '蔵ざらえ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '薪集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '蘇りし者',
    type: 'occupation',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '行商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '行脚',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '街書記',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '街頭の音楽家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '裁縫の先生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '装備品揃え',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '裕福な男',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '補助作業員',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '製図家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '見習い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '見習い大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '親友',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '詐欺師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '読書家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '調度品職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '調教師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '調理器具商',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '議長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '豆農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '豚持ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '負傷したベテラン',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '販売人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '買い付け人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資本家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資材商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資材貸し',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資材配達人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資材集め',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資源再生業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '資源分析者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '質屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '賭博師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '越冬者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '趣味の数学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '趣味の柵作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '趣味人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '路面舗装工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '踊り手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '車輪工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '軟体人間',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '軟弱者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '輪作農家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農園の監督者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農地の法律家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農場主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農場労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農場管理',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農家の大将',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農家の娘',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農業労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '農業学校卒業生',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '造園業者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '週末労働者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '遅咲き',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '遅寝',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '運搬人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '運河の船乗り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '運河の船頭',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '道化師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '道路清掃人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '道連れ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '遠くの王女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '郊外管理者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '郵便夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '郵便馬車の御者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '都市設計家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '配管工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '酒場の主人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '醸造師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '野菜売り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '金計量者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '釣り師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '釣鐘鋳造師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鉱物学者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '銃士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鋤手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鋤手助手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鋤打ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鋤職人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鋤鍛冶',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '錬金術師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鍋パン作り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '鍬鍛冶',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '長官',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '長老',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '間借り人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '陶土こね',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '陶工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '隠れ農夫',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '隠者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '隣り合わせた人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '雄牛捕り',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '雨おとこ',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '露天商の女',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '青年大工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '青果商',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '革なめし工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '革命指導者',
    type: 'occupation',
    points: 0,
  },
];

const chunk12: SeedCard[] = [
  {
    displayName: '靴下編み',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '風景画家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '食料商人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '食料問屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '食肉供給者',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '食通',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '飲み屋の亭主',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '飼い葉の栽培人',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '養樹園の指物師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '養父母',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '養蜂家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '養魚家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '馬丁',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '馬房長',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '馬手',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '馬持ち',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '駆け出し画家',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '騎士',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '骨細工',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '高潔な英雄',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '高級娼婦',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '高貴な騎士',
    type: 'occupation',
    points: 0,
    note: '森デッキ',
  },
  {
    displayName: '魔術使い',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '魚屋',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '黄土の庭師',
    type: 'occupation',
    points: 0,
  },
  {
    displayName: '黒壇の家具職人',
    type: 'occupation',
    points: 0,
  },
];

export const seedCards: SeedCard[] = ([] as SeedCard[]).concat(chunk0, chunk1, chunk2, chunk3, chunk4, chunk5, chunk6, chunk7, chunk8, chunk9, chunk10, chunk11, chunk12);
