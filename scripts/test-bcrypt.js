const bcrypt = require('bcrypt')

// test bcrypt
const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) console.log(err)
    else console.log(salt)
    bcrypt.hash('123456', salt, function(err, hash) {
        if (err) console.log(err)
        else console.log(hash)
    });
})

