const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder to serve images, CSS, JS files
app.use(express.static(__dirname + '/public'));

// Dummy data for posts and comments
let posts = [
    {
        id: 1,
        username: 'username123',
        timeAgo: '2 hours ago',
        imageUrl: '/images/post1.jpg',
        caption: 'This is an amazing post! #clouds #photography',
        comments: [
            { user: 'user2', text: 'Amazing picture!' },
            { user: 'user3', text: 'Love the clouds!' }
        ]
    }
];

// Home route to render the post page
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// Add post route
app.post('/add-post', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        username: 'newUser', // You can change this to a logged-in user
        timeAgo: 'Just now',
        imageUrl: '/images/default.jpg', // You can add a file upload feature later
        caption: req.body.caption,
        comments: []
    };
    posts.push(newPost);
    res.redirect('/');
});

// Add comment to a post
app.post('/add-comment/:postId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comments.push({ user: 'randomUser', text: req.body.comment }); // Adjust 'randomUser' with an actual user
    }
    res.redirect('/');
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
