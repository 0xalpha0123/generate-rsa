var crypto = require("crypto");
var fs = require("fs");
  
var now = Math.floor(new Date() / 1000);
var dir = "rsa-key_" + now;
fs.mkdirSync(dir);
  
crypto.generateKeyPair(
    "rsa",
    {modulusLength: 2048},
    (err, publicKey, privateKey) => {
        fs.writeFile(
            dir + "/public.pem",
            publicKey.export({ type: "spki", format: "pem" }),
            err => {}
        );
        fs.writeFile(
            dir + "/public_key.txt",
            publicKey.export({ type: "spki", format: "der" }).toString("base64") +
            "\n",
            err => {}
        );
        fs.writeFile(
            dir + "/private.pem",
            privateKey.export({ type: "pkcs1", format: "pem" }),
            err => {}
        );
    }
  );
  
  console.log("Public key saved in " + dir + "/public_key.txt");