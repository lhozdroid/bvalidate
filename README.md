# BValidate

- [Configuration Object Structure](#configuration-object-structure)
   * [Parameters](#parameters)
- [Available Validations](#available-validations)
   * [`blank`](#blank)
   * [`required`](#required)
   * [`email`](#email)
   * [`digits`](#digits)
   * [`number`](#number)
   * [`alphanumeric`](#alphanumeric)
   * [`minLength`](#minlength)
   * [`maxLength`](#maxlength)
   * [`ipv4`](#ipv4)
   * [`ipv6`](#ipv6)
   * [`ip`](#ip)
   * [`date`](#date)
- [Example Usage](#example-usage)
   * [HTML Form](#html-form)
   * [JavaScript](#javascript)

## Class: `BValidate`

### Configuration Object Structure

- **Events**:
  - `onSubmit`: Function executed when the form is successfully submitted.
  - `onFormErrors`: Function executed when there are errors in the form.
  - `onFieldErrors`: Function executed when there are errors in individual fields.
  
 - **Custom methods**:
  - `renderFieldValidations`: Function to render validation messages for a field.
  - `clearFieldValidations`: Function to clear validation messages for a field.

- **Validations and Messages**:
  - `validations`: Object containing validation functions.
  - `messages`: Object containing error messages for validations.

#### Parameters

- `form`: The form element to be validated.
- `config`: Configuration object to customize the validation behavior (optional).

### Available Validations

The following validation functions are available in `BValidate`:

#### `blank`

Ensures the field is empty.

#### `required`

Ensures the field is not empty.

#### `email`

Validates that the field contains a valid email address.

#### `digits`

Validates that the field contains only digits.

#### `number`

Validates that the field contains a valid number.

#### `alphanumeric`

Validates that the field contains only alphanumeric characters.

#### `minLength`

Ensures the field has at least a specified number of characters.

#### `maxLength`

Ensures the field does not exceed a specified number of characters.

#### `ipv4`

Validates that the field contains a valid IPv4 address.

#### `ipv6`

Validates that the field contains a valid IPv6 address.

#### `ip`

Validates that the field contains a valid IPv4 or IPv6 address.

#### `date`

Validates that the field contains a valid date.

### Example Usage

Here's a detailed example showing how to use the `BValidate` class with custom validation functions and error messages.

#### HTML Form

```html
<form id="myForm">
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" name="email" data-required="true" data-email="true">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" data-required="true">
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
<a href="https://www.paypal.com/donate/?business=CSQRVLE2D43NU&no_recurring=0&item_name=Buy+me+a+beer%21&currency_code=USD">If you like it buy me a beer!</a>
