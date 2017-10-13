var React = require('react');
var AppStore = require('./stores/AppStore');
var AddNoteForm = require('./components/AddNoteForm');
var createReactClass = require('create-react-class');
var NoteList = require('./components/NoteList')
var AppAPI = require('./utils/appAPI');

function getAppState(){
    return {notes: AppStore.getNotes() }
}

var App = createReactClass({
    getInitialState: function(){//
        return getAppState();
    },
    componentDidMount: function(){//
        AppStore.addChangeListener(this._onChange);
    },
    componentWillMount(){
        AppAPI.getNotes();
    },
    componentUnmount: function(){//
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        //console.log(this.state);
        return(
            <div>
                <div className="off-canvas-wrapper">
                    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                        <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                            <div className="row column">
                                <br />
                                <AddNoteForm />
                            </div>
                        </div>
                        <div className="off-canvas-content" data-off-canvas-content>
                            <NoteList notes={this.state.notes}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    // Update view state when change is received
    _onChange: function(){//
        this.setState(getAppState());
    }
});
module.exports = App;