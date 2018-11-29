const Base = require('../base.js');
let xlsx = require('node-xlsx');

module.exports = class extends Base {
    async indexAction() {
        const files = this.ctx.file('file');
        let list = xlsx.parse(files.path);
        list  = list[0].data;
        let res = {};
        list.forEach(item =>{
            res[item[0]] = item[1]
        })
        this.success(res);
    }
};
