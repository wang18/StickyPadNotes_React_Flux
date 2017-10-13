var React = require('react');
var Note = require('./Note.js');
var createReactClass = require('create-react-class');

var NoteList = createReactClass({
    render: function(){
        console.log(this.props.notes);
        return(
            <div className="row small-up-2 medium-up-3 large-up-4">
                {
                    this.props.notes.map(function(note, i){
                        return (
                            <Note note={note} key={i} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = NoteList;