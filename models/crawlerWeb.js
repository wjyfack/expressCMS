const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 代理网站
const crawlerWeb = new Schema({
	name: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('CrawlerWeb', crawlerWeb);