function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
         // 主語      動詞     目的語
}

const o = {
  subject: "I", // 主語
  verb: "love", // 動詞
  object: "JavaScript", // 目的語
};

console.log(getSentence(o)); // "I love JavaScript"
