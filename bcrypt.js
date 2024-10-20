const bcrypt = require('bcrypt');

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send("Error occurred during password hashing.");
        }

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        newUser.save((err) => {
            if (err) {
                res.status(500).send("Error occurred while signing up.");
            } else {
                res.status(200).send("User signed up successfully!");
            }
        });
    });
});
