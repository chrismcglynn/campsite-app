var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest",
        image: "https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?auto=format&fit=crop&w=1355&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat. Enim blandit volutpat maecenas volutpat. Risus feugiat in ante metus dictum at tempor. Ac ut consequat semper viverra nam libero justo laoreet sit. Adipiscing tristique risus nec feugiat in fermentum posuere. "
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1508430459690-9621c7aee2ae?auto=format&fit=crop&w=1226&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat. Enim blandit volutpat maecenas volutpat. Risus feugiat in ante metus dictum at tempor. Ac ut consequat semper viverra nam libero justo laoreet sit. Adipiscing tristique risus nec feugiat in fermentum posuere. "
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1506995292672-416a03419575?auto=format&fit=crop&w=1248&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat. Enim blandit volutpat maecenas volutpat. Risus feugiat in ante metus dictum at tempor. Ac ut consequat semper viverra nam libero justo laoreet sit. Adipiscing tristique risus nec feugiat in fermentum posuere. "
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log(campground);
                // create comment
                Comment.create(
                {
                    text: "This place is great, but I wish there was internet!",
                    author: "Homer"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    } else {
                    campground.comments.push(comment);
                    campground.save();
                    console.log(comment);
                    }
                });
            }
        });
    });
});
}

module.exports = seedDB;