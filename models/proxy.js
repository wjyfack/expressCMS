const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 代理地址
const proxy = new Schema({
	addr: {
		type: String,
		required: true
	},
	source: {
		type: Schema.Types.ObjectId,
		ref: 'CrawlerWeb',
		required: true
	}
});

module.exports = mongoose.model('Proxy', proxy);