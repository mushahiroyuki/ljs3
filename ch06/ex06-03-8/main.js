function getSentence([ subject, verb, object ]) {
  return `${subject} ${verb} ${object}`;
}

const arr = [ "I", "love", "JavaScript" ];
console.log(getSentence(arr)); // "I love JavaScript"
