# react-slim-uploader
A slim uploader for react

### Install
`npm install --save react-slim-uploader`

### Usage

#### 1. Design style
```css
/*app.css*/
.uploader {
    height: 60px;
    width: 100px;
    background: #7F6553;
    color: white;
    border-radius: 10px;
    font-size: 1.4rem;
    font-family: "microsoft yahei";
    font-weight: bold;
}
```

#### 2. Import in
```javascript
//app.js
import React from 'react'
import {render} from 'react-dom'
import Uploader from 'react-slim-uploader'
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
                type="button"
                onChange={this.handleUpload.bind(this)}
            />
        )
    }
}

render(<App/>, document.getElementById('app'))
```

![](http://7xqhly.com1.z0.glb.clouddn.com/btn3.png)

### API
```javascript
/**
 * @description 
 * Get param value of dom node object.
 * @param {string} className: className.
 * @param {string} type: button or label.
 * @param {string} cursor: the cursor style.
 * @param {string} content: the text display on the button.
 * @param @required {function} onChange: will call when the content to upload was changed,
 * will receive param: files(the files' object, obtain a blob object), event(the onChange event)
 */

<Uploader
    className="uploader"
    cursor="pointer"
    content="Upload"
    type="button"
    onChange={this.handleUpload.bind(this)}
/>
```

