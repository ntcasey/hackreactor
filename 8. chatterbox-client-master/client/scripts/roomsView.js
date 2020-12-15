var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //RoomsView.$select.change(event => console.log(event.target.value));
    RoomsView.$select.change(event => {
      MessagesView.$chats.empty();
      App.fetch();
    });
  },

  render: function({results}) {
    if (RoomsView.$select.children().length !== 0) { return; }

    room = [];
    _.each(_.filter(results, item => _.has(item, 'roomname')),
      filtered => {
        room.push(filtered.roomname);
        room = _.unique(room);
      });

    room.forEach(roomName => RoomsView.$select.append(Rooms.render({ 'roomname': roomName})));
    console.log(RoomsView.getCurrentRoom());
  },

  getCurrentRoom: function() { return RoomsView.$select[0].value; }
};
