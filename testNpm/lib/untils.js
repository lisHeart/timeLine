var Promise  = require("es6-promise").Promise;

/**
 *
 */
module.exports = {

    getDefer: function () {
        var deferred = {};
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        })
        return deferred;
    },

    when: function (promises) {
        let deffered = this.getDefer();
        Promise.all(promises).then(function (data) {
            deffered.resolve(data);
        },function (err) {
            deffered.reject(err);
        });
        return deffered.promise;
    }
}