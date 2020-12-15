var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  // note: data wasn't originally there
  render: function({results}) {
    _.each(_.filter(results, msg =>
      msg.roomname === RoomsView.getCurrentRoom()
      && _.has(msg, 'text')
      && msg.text !== ''), msg =>
      MessagesView.$chats.append(MessageView.render(msg))
    );
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  }

};