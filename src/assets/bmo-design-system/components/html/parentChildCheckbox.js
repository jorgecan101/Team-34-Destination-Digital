/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/

function ControlledCheckbox (checkbox, controllerObj) {
  this.checkbox = checkbox;
  this.controller = controllerObj;
  this.lastState = false;
}

ControlledCheckbox.prototype.init = function () {
  this.lastState = this.isChecked();
  this.checkbox.addEventListener('change', this.handleChange.bind(this));
  this.checkbox.addEventListener('keydown', this.handleKeyup.bind(this), true);
  this.checkbox.addEventListener('click',  this.handleClick.bind(this), true);
};

ControlledCheckbox.prototype.isChecked = function () {
  if (typeof this.checkbox.checked === 'boolean') {
      return this.checkbox.checked;
  }
  // If ARIA checkbox widget
  return this.checkbox.getAttribute('aria-checked') === 'true';
};

ControlledCheckbox.prototype.setChecked = function (value) {
  if (typeof this.checkbox.checked === 'boolean') {
      switch (value) {
          case 'true':
          this.checkbox.checked = true;
          break;

          case 'false':
          this.checkbox.checked = false;
          break;

          case 'last':
          this.checkbox.checked = this.lastState;
          break;

          default:
          break;
      }
  }
  // If ARIA checkbox widget
  if (typeof this.checkbox.getAttribute('aria-checked') === 'string') {
      switch (value) {
          case 'true':
          case 'false':
              this.checkbox.setAttribute('aria-checked', value);
              break;

          case 'last':
              if (this.lastState) {
                  this.checkbox.setAttribute('aria-checked', 'true');
              }
              else {
                  this.checkbox.setAttribute('aria-checked', 'false');
              }
              break;

          default:
              break;
      }
  }
};

/* EVENT HANDLERS */
ControlledCheckbox.prototype.handleChange = function (event) {
  this.controller.updateCheckboxMixed();
};

ControlledCheckbox.prototype.handleKeyup = function (event) {
  this.lastState = this.isChecked();
};

ControlledCheckbox.prototype.handleClick = function (event) {
  this.lastState = this.isChecked();
};

export function CheckboxMixed(checkbox) {
  this.checkbox = checkbox;
  this.controlledCheckboxes = [];
  this.keyCode = Object.freeze({
      'RETURN': 13,
      'SPACE': 32
  });
}

CheckboxMixed.prototype.init = function () {
  var ids = this.checkbox.getAttribute('aria-controls').split(' ');
  var self = this;
  [].forEach.call(ids, function(id) {
      var node = document.getElementById(id);
      var controlledCheckBox = new ControlledCheckbox(node, self);
      controlledCheckBox.init();
      self.controlledCheckboxes.push(controlledCheckBox);
  });
  this.checkbox.addEventListener('keydown', this.handleKeydown.bind(this));
  this.checkbox.addEventListener('click',  this.handleClick.bind(this));
  this.updateCheckboxMixed();
};

CheckboxMixed.prototype.updateCheckboxMixed = function () {
  var count = 0;
  this.controlledCheckboxes.forEach(function(controlledCheckbox) {
      if (controlledCheckbox.isChecked()) {
          count += 1;
      }
  });
  if (count === 0) {
      this.checkbox.setAttribute('aria-checked', 'false');
      this.checkbox.checked = false;
  }
  else {
      if (count === this.controlledCheckboxes.length) {
          this.checkbox.setAttribute('aria-checked', 'true');
          this.checkbox.checked = true;
      }
      else {
          this.checkbox.setAttribute('aria-checked', 'mixed');
          this.checkbox.checked = true;
          this.updateControlledStates();
      }
  }
};

CheckboxMixed.prototype.updateControlledStates = function () {
  this.controlledCheckboxes.forEach(function(controlledCheckbox) {
      controlledCheckbox.lastState = controlledCheckbox.isChecked();
  });
};

CheckboxMixed.prototype.anyLastChecked = function () {
  var count = 0;
  this.controlledCheckboxes.forEach(function(controlledCheckbox) {
      if (controlledCheckbox.lastState) {
          count += 1;
      }
  });
  return count > 0;
};

CheckboxMixed.prototype.setControlledCheckboxes = function (value) {
  this.controlledCheckboxes.forEach(function(controlledCheckbox) {
      controlledCheckbox.setChecked(value);
  });
  this.updateCheckboxMixed();
};

CheckboxMixed.prototype.toggleCheckboxMixed = function () {
  var state = this.checkbox.getAttribute('aria-checked');
  if (state === 'false') {
      this.setControlledCheckboxes('true');
  }
  else {
      if (state === 'mixed') {
          this.setControlledCheckboxes('true');
      }
      else {
          this.setControlledCheckboxes('false');
      }
  }
  this.updateCheckboxMixed();
};
/* EVENT HANDLERS */
CheckboxMixed.prototype.handleKeydown = function (event) {
  var flag = false;
  switch (event.keyCode) {
      case this.keyCode.SPACE:
          this.toggleCheckboxMixed();
          flag = true;
          break;

      default:
          break;
  }
  if (flag) {
      event.stopPropagation();
      event.preventDefault();
  }
};

CheckboxMixed.prototype.handleClick = function (event) {
  this.toggleCheckboxMixed();
};