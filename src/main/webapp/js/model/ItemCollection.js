define(['jquery', 'backbone', 'model/Item'],
    function($, Backbone, Item) {
        return Backbone.Collection.extend({

            model: Item,

            initialize: function() {
                var self = this;


            }
        });
    }
);