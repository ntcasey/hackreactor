var makePatties = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps );
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass("patty");
};

makePatties.prototype = Object.create(makeDancer.prototype);

makePatties.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({'top': '1000', 'opacity': 0.25}, Math.random() * 8000);
};

makePatties.prototype.lineUp = function(x, y) {
  this.setPosition(x, y);
};