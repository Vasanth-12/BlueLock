const router = require('express').Router();
const UserProfile = require('../dbmodel/userprofile');

router.post('/', (req, res) => {
	const user = req.body.name;
	const credential = '';
	UserProfile.find({name: user})
		.then( user_profile => {
			console.log(`Password is ${user_profile}`);
			if (req.body.password == user_profile[0].password ) {
				res.send(`Hi ${user}`);
			}
			else {
				res.send("Unauthorized");
			}
		})
		.catch( err => res.status(404).json('Error: User Not FOund'));

});

module.exports = router;