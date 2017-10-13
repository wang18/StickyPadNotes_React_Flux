var $ = require('jquery');
var AppActions = require('../actions/AppActions');

module.exports = {
	addNote:function(note){
	    $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            data: JSON.stringify(note),
            type: "POST",
            contentType:"application/json"
        });
    },
    getNotes:function(){
	    $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            dataType:'json',
            cache: false,
            success:function(data){
                //console.log(data)
                AppActions.receiveNotes(data);
            }.bind(this),
            error:function(xhr,status,err){
                console.log(err);
            }.bind(this)
        });
    },
    removeNote:function(noteId){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes/"+noteId+"?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            type:'DELETE',
            aync: true,
            timeout: 300000,
            success:function(data){
                console.log('Note Deleted...');
            }.bind(this),
            error:function(xhr,status,err){
                console.log(err);
            }.bind(this)
        });
    }
}