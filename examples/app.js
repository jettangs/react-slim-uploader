import React from 'react'
import {render} from 'react-dom'
import Uploader from '../src'
import style from './app.css'

class App extends React.Component {
 
    handleUpload(files, event) {
        console.log(files)

    }

    render() {
        return (
            <Uploader
                className="uploader"
                content="Upload"
                onChange={this.handleUpload.bind(this)}
                cursor="pointer"
            />
        )
    }
}

render(<App/>, document.getElementById('app'))
