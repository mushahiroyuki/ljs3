const words = ["Beachball", "Rodeo", "Angel",
	       "Aardvark", "Xylophone", "November", "Chocolate",
	       "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = words.filter((w) => w.length>6).join(" ");
console.log(longWords); // Beachball Aardvark Xylophone November Chocolate Uniform

const 単語リスト
	= ["ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ",
	   "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ",
	   "ガラパゴス", "ストリート", "トーマス", "ストレッチ",
	   "チベット", "トキ", "キツツキ", "キリン"];
const 長い単語 = 単語リスト.filter((w) => w.length>=5).join(" ");
console.log(長い単語);
// ビーチボール ルービックキューブ ブタペスト ガラパゴス ストリート ストレッチ