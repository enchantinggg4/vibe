'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mutation = function () {
    function Mutation(subject, payload) {
        _classCallCheck(this, Mutation);

        this.subject = subject;
        var originalState = subject.store.heap[subject.name][subject.id];
        delete payload.id; // we just don't want to modify id, right?
        this.resultState = _ramda2.default.mergeDeepRight(originalState, payload);
    }

    _createClass(Mutation, [{
        key: 'commit',
        value: function commit(message) {
            this.subject.store.updateEntity(this.subject.name, this.subject.id, this.resultState, this.subject, message);
        }
    }]);

    return Mutation;
}();

exports.default = Mutation;