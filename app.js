const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// mongodb+srv://Safyan:qwertyasdf@cluster0-f9smh.mongodb.net/natrous?retryWrites=true&w=majority

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/natours', {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`connected to DB`);
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

app.use('/',require('./routes/fucultyRoute'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Running at ${PORT}`);
});

connectDB();