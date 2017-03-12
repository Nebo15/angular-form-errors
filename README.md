# nebo-form-errors

[![Greenkeeper badge](https://badges.greenkeeper.io/Nebo15/nebo-form-errors.svg)](https://greenkeeper.io/)

Get error object from From Controller. It could be useful for login for errors. eg, sending errors to mixpanel on submit form.

## How to install

Install bower package

```
bower install nebo-form-errors --save
```

Add to application module. 

```
angular.module('app', [
  ...,
  'formErrors'
]);
```

## Example

```

angular.module('app').controller('AppController', function ($scope, $errors) {
  $scope.submit = function (form) {
    if (form.$invalid) {
      
      var formErrors = $errors.fromForm(form);
      console.log('form errors', formErrors);
      
      return;
    }
    
  };
});

```
