'use strict';


angular.module('formErrors', []).service('$errors', function () {
    function getFormInputs (ctrl) {
        return Object.keys(ctrl).filter(function (name) {
            return name[0] !== '$';
        });
    }
    function getErrors (ctrl, inputs) {
        var errors = {};
        inputs.map(function (inputName) {
            var error = Object.keys(ctrl[inputName].$error);
            if (error.length > 0) {
                errors[inputName] = error;
            }
        });
        return errors;
    }
    this.fromForm = function (form) {
        return getErrors(form, getFormInputs(form));
    };
});