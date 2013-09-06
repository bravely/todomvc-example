Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.HandleBars.helper('edit-todo', Todos.EditTodoView);