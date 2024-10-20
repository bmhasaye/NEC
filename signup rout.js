app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
        name: name,
        email: email,
        password: password // In real applications, hash the password for security
    });

    // Save the user to the database
    newUser.save((err) => {
        if (err) {
            res.status(500).send("Error occurred while signing up.");
        } else {
            res.status(200).send("User signed up successfully!");
        }
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

