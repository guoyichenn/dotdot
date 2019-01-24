const Base = require('../../base.js');
const service = think.service('post_service');

module.exports = class extends Base {
    async indexAction() {
        let user_id = this.get('user_id');
        let result = await service.getPostList(user_id);
        return this.success(result);
    }
};
