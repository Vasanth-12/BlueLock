const router = require('express').Router();
const UserProfile = require('../dbmodel/userprofile');

router.post('/', (req, res) => {
	const name = req.body.name;
	const mailid = req.body.mailid;
	const password = req.body.password;

	/*
	const newuser = new UserProfile({
		name,
		mailid,
		password
	});

	newuser.save()
		.then(() => console.log("User Added!!"))
		.catch(err => console.log("Error while adding user:", err));
	*/

	UserProfile.find({name: name})
		.then( userprofile =>  res.json(`This username ${userprofile[0].name} already exists. Please choose other name`))
		.catch( () => {
			const newuser = new UserProfile({
				name,
				mailid,
				password
			});
			newuser.save()
				.then(() => res.send('User Added!!'))
				.catch(err => res.status(500).json(`Can't add user because of: ${err}`));
		});

});

module.exports = router;