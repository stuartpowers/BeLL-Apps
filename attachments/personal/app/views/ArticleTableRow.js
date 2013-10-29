$(function() {

  App.Views.ArticleTableRow = Backbone.View.extend({

    tagName: "tr",
    vars: {},
    template : _.template($("#template-ArticleRow").html()),
    initialize : function()
    {
        console.log("Best Ha")
    },
    render: function () {
      var vars = this.model.toJSON()
      this.$el.append(this.template(vars))
    },
})

})