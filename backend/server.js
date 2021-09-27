const express = require('express');
const app = express();
const cors = require('cors');
const mongoose =require('mongoose');
const port = 5000;

const login = require('./module/loginmodule');
const signin = require('./module/signinmodule');

app.use(express.json());
app.use(cors());

/*
app.get('/', (req, res) => {
	res.send("Hello 3000");
});
*/

/*
const URI = 'mongodb+srv://VasanthPalanisamy:uSDJTvawVnhZTZN2@appcontest.laduc.mongodb.net/LearnMERN?retryWrites=true&w=majority';
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then((res) => {
		console.log(`Connected to MongoDB. Here the list of collections ${res}`);
	})
	.catch((err) => console.log(err));

mongoose.connection.db.listCollections().toArray( (err, collections) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log(collections);
			}
		});
app.use('/login', login);
//app.use('/signup', signup)


app.listen(port, () => {
	console.log(`Server starts on the port ${port}`);
});
*/


async function run() {
	const URI = 'mongodb+srv://VasanthPalanisamy:uSDJTvawVnhZTZN2@appcontest.laduc.mongodb.net/LearnMERN?retryWrites=true&w=majority';
	await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then((res) => {
			console.log(`Connected to MongoDB. Here the list of collections ${res}`);
		})
		.catch((err) => console.log(err));

	mongoose.connection.db.listCollections().toArray( (err, collections) => {
		if (err) {
			console.log(err);
		}
		else {
			console.log(collections);
		}
	});
}

app.use('/login', login);
app.use('/signin', signin);

app.listen(port, () => {
	console.log(`Server starts on the port ${port}`);
	run();
});