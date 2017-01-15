import React from 'react';
import ReactDOM from 'react-dom';

class PassedProps extends React.Component{
    handleChange(e) {
        var txt = e.target.value;
        this.props.changePreview(txt);
    }

    render() {
        var content = marked(this.props.preview,{sanitize: true});
        return (

                <div>
                <textarea 
                type="text"
                onChange={this.handleChange.bind(this)}
                value={this.props.preview}
                cols="50"
                rows="40"
                >
                </textarea>
                <div id="markdown" dangerouslySetInnerHTML={{__html: content}}>

                </div>
                </div>
               );
    }
}

class App extends React.Component{
    constructor() {
        super();
        this.state = {
field : "Markdown Previewer\n==================\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * beans\n  * nuts\n  * pasta\n\nNumbered list:\n\n  1. nodejs\n  2. react\n  3. express\n\n## Have great Day!\n\nMade by mndowne!"
        }; 
    }

    changePreview(preview) {
        this.setState({
field : preview
});
}

render() {
    return (
            <div>
            <PassedProps 
            changePreview={this.changePreview.bind(this)} 
            preview={this.state.field} 
            />
            </div>
           );
}
}
const app = document.getElementById('display');
ReactDOM.render(<App />, app)
