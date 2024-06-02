
# BValidate

- [Overview](#overview)
- [Class: `BValidate`](#class-bvalidate)
  * [Properties](#properties)
  * [Configuration Object Structure](#configuration-object-structure)
  * [Constructor](#constructor)
    + [Parameters](#parameters)
    + [Description](#description)
  * [Methods](#methods)
    + [`#validateForm()`](#validateform)
    + [Description](#description-1)
    + [`#validateField(field)`](#validatefieldfield)
    + [Parameters](#parameters-1)
    + [Description](#description-2)
    + [`#renderFieldValidations(field, errors)`](#renderfieldvalidationsfield-errors)
    + [Parameters](#parameters-2)
    + [Description](#description-3)
    + [`#clearFieldValidations(field)`](#clearfieldvalidationsfield)
    + [Parameters](#parameters-3)
    + [Description](#description-4)
  * [Available Validations](#available-validations)
    + [`blank(form, field, config)`](#blankform-field-config)
    + [`required(form, field, config)`](#requiredform-field-config)
    + [`email(form, field, config)`](#emailform-field-config)
    + [`digits(form, field, config)`](#digitsform-field-config)
    + [`number(form, field, config)`](#numberform-field-config)
    + [`alphanumeric(form, field, config)`](#alphanumericform-field-config)
    + [`minLength(form, field, config)`](#minlengthform-field-config)
    + [`maxLength(form, field, config)`](#maxlengthform-field-config)
    + [`pattern(form, field, config)`](#patternform-field-config)
    + [`ipv4(form, field, config)`](#ipv4form-field-config)
    + [`ipv6(form, field, config)`](#ipv6form-field-config)
    + [`ip(form, field, config)`](#ipform-field-config)
    + [`date(form, field, config)`](#dateform-field-config)
  * [Example Usage](#example-usage)
    + [HTML Form](#html-form)
    + [JavaScript](#javascript)

## Overview

`BValidate` is a JavaScript class designed to facilitate form validation in Bootstrap-based projects. This class enables comprehensive form validation by leveraging configuration options for various events, validations, and error handling.

## Class: `BValidate`

### Properties

- `#form`: Represents the form element to be validated.
- `#config`: Holds the configuration for the form validation, including events, validation functions, and messages.

### Configuration Object Structure

The `#config` object can include the following properties:

- **Events**:
  - `onSubmit`: Function executed when the form is successfully submitted.
  - `onFormErrors`: Function executed when there are errors in the form.
  - `onFieldErrors`: Function executed when there are errors in individual fields.
  - `renderFieldValidations`: Function to render validation messages for a field.
  - `clearFieldValidations`: Function to clear validation messages for a field.

- **Validations and Messages**:
  - `validations`: Object containing validation functions.
  - `messages`: Object containing error messages for validations.

### Constructor

```javascript
constructor(form, config = {})
```

#### Parameters

- `form`: The form element to be validated.
- `config`: Configuration object to customize the validation behavior (optional).

#### Description

Initializes the `BValidate` class by merging the default configuration with the user-provided configuration. It also sets up event listeners for form submission and input events on the form fields.

### Methods

#### `#validateForm()`

```javascript
#validateForm()
```

#### Description

Validates the entire form based on the specified validation rules. Returns an object containing validation errors for each field.

#### `#validateField(field)`

```javascript
#validateField(field)
```

#### Parameters

- `field`: The form field to be validated.

#### Description

Validates a single form field and returns an array of error messages for that field.

#### `#renderFieldValidations(field, errors)`

```javascript
#renderFieldValidations(field, errors)
```

#### Parameters

- `field`: The form field for which validations are to be rendered.
- `errors`: An array of error messages to be displayed.

#### Description

Renders the validation messages for a specific form field.

#### `#clearFieldValidations(field)`

```javascript
#clearFieldValidations(field)
```

#### Parameters

- `field`: The form field for which validation messages are to be cleared.

#### Description

Clears the validation messages for a specific form field.

### Available Validations

The following validation functions are available in `BValidate`:

#### `blank(form, field, config)`

Ensures the field is empty.

```javascript
blank: (form, field, config) => {
    const value = field.value;
    return value === null || value.trim() === "";
}
```

#### `required(form, field, config)`

Ensures the field is not empty.

```javascript
required: (form, field, config) => {
    const value = field.value;
    return !(validations.blank(form, field, config));
}
```

#### `email(form, field, config)`

Validates that the field contains a valid email address.

```javascript
email: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
```

#### `digits(form, field, config)`

Validates that the field contains only digits.

```javascript
digits: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^\d+$/.test(value);
}
```

#### `number(form, field, config)`

Validates that the field contains a valid number.

```javascript
number: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^-?\d*\.?\d+$/.test(value);
}
```

#### `alphanumeric(form, field, config)`

Validates that the field contains only alphanumeric characters.

```javascript
alphanumeric: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^\w+$/i.test(value);
}
```

#### `minLength(form, field, config)`

Ensures the field has at least a specified number of characters.

```javascript
minLength: (form, field, config) => {
    const value = field.value;
    return value.length >= config.length;
}
```

#### `maxLength(form, field, config)`

Ensures the field does not exceed a specified number of characters.

```javascript
maxLength: (form, field, config) => {
    const value = field.value;
    return value.length <= config.length;
}
```

#### `pattern(form, field, config)`

Validates that the field matches a specific regex pattern.

```javascript
pattern: (form, field, config) => {
    const value = field.value;
    return config.pattern.test(value);
}
```

#### `ipv4(form, field, config)`

Validates that the field contains a valid IPv4 address.

```javascript
ipv4: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/.test(value);
}
```

#### `ipv6(form, field, config)`

Validates that the field contains a valid IPv6 address.

```javascript
ipv6: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])$/.test(value);
}
```

#### `ip(form, field, config)`

Validates that the field contains a valid IPv4 or IPv6 address.

```javascript
ip: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || validations.ipv4(form, field, config) || validations.ipv6(form, field, config);
}
```

#### `date(form, field, config)`

Validates that the field contains a valid date.

```javascript
date: (form, field, config) => {
    const value = field.value;
    return validations.blank(form, field, config) || !isNaN(Date.parse(value));
}
```

### Example Usage

Here's a detailed example showing how to use the `BValidate` class with custom validation functions and error messages.

#### HTML Form

```html
<form id="myForm">
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

#### JavaScript

```javascript
import BValidate from './bvalidate.js';

const formElement = document.querySelector('#myForm');
const validator = new BValidate(formElement);
```