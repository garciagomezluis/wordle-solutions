const CryptoJS = require("crypto-js");

const secret_key = atob("bGxhbm9z");
const prefix = atob("aWJhaQ==");
const today_day = process.argv[2];

const solutions = [
  "U2FsdGVkX1/igoRWn4Ri97JmXRM/dkd2N0dfgCs8LEY=",
  "U2FsdGVkX1/E+/15FJvDvcsJcWUvb+LxKbzr9uLwPFU=",
  "U2FsdGVkX18NddZ2LQzoSvsTBDQlLFe0geAPP4Up0Ck=",
  "U2FsdGVkX18fK13toiO9S8kWGVMbCThXhalrMPOZyS0=",
  "U2FsdGVkX1/Rlby/WbBeg1xL4DXwtAQkU/O8oyJPQhI=",
  "U2FsdGVkX19V8Gd18viq1GIiEZox/tctGeU5CstDuqg=",
  "U2FsdGVkX1+0MRKoSk5bh636VBZ3wuFqfWfbzlcbjuA=",
  "U2FsdGVkX1/9pRJQ+WfP8IeTVvkeApwyuEBxY1SlIo4=",
  "U2FsdGVkX1/Mwi+KR+2YAuf2QPoHsFMXk0OTZ8gxDqA=",
  "U2FsdGVkX18Kj52Ojh0JEodlC7Bkf0cPILKsdzAfUu0=",
  "U2FsdGVkX1+0PF0/vI8vIEsxzgHWuoHgfnqM1tMdACc=",
  "U2FsdGVkX1+tTsavteFAcOXklGZ2YNr0eZGYOS8wSeQ=",
  "U2FsdGVkX1/30oorPjWZv2xjC9T22WqBtjTqr43Re8M=",
  "U2FsdGVkX187eDNHyhWEhDfHoz5+tg6Smsat1tclUtk=",
  "U2FsdGVkX1+3+OwIKchKM1TvJD9EnQcXGKJwmu5y42E=",
  "U2FsdGVkX1/8vs7w2ZOWNDhhdks7cADedTVrDkuv7qM=",
  "U2FsdGVkX1/v6vh50Ob9cXabX2P5QoiN6qgizVFJOyQ=",
  "U2FsdGVkX18iflOLdLIynjO1ugD2a13D90edfbYSCj8=",
  "U2FsdGVkX1+zI7LjR3RDw52Y/Xh+F0fUjxrhK4iS5dM=",
  "U2FsdGVkX19m09e7XFB+Iaq/J9xR4we33rvEVkwyNks=",
  "U2FsdGVkX1+kyepeI4+ogVcJnoSN8hzMIu5JYhnjZn0=",
];

const decrypt = (message) => {
  let solved = CryptoJS.AES.decrypt(message, secret_key).toString(
    CryptoJS.enc.Utf8
  );
  return solved.startsWith(prefix) && (solved = solved.slice(prefix.length));
};

console.log(decrypt(solutions[today_day]));
