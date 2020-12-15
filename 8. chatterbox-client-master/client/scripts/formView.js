var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //console.log('click!');
    //console.log(event.target[0].value);
    let msg = {'username': App.username, 'text': event.target[0].value, 'roomname': RoomsView.getCurrentRoom()};
    Parse.create(msg, () => console.log('post succesesful'));
    MessagesView.renderMessage(msg);


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};