import React from 'react'
import {css, creatStyle} from 'aphrodite-freestyle'
import tools from 'react-common-tools'
import _style from './style'

console.log()

export default class FileUpload extends React.Component{

    state = {style:{}}

    componentWillMount(){
       this.setState({style : creatStyle(_style)})
    }

    componentDidMount(){
        let name = css(this.state.style.span)
        let span = _style.base.span
        let input = _style.base.input
        setTimeout(()=>{
            let width = tools.getNodeValue('.'+name,'offsetWidth')
            let height = tools.getNodeValue('.'+name,'offsetHeight')
            span.marginLeft = width * -0.5 + 'px'
            span.marginTop = height * -0.5 + 'px'
            input.cursor = this.props.cursor? this.props.cursor : 'pointer'
            if(this.props.type=='label') {
                input.marginLeft = span.marginLeft
                input.marginTop = span.marginTop
                input.width = width
                input.height = height
                input.left = '50%',
                input.top = '50%'
            }else {
                input.width = '100%',
                input.height = '100%'
                input.left = '0',
                input.top = '0'
            }

            this.setState({style : creatStyle(_style)})
        })
    }

	_onChange(event) {
		event.preventDefault()
		var target = event.target
		var files = target.files
		var count = this.props.multiple ? files.length : 1
		var i
		for (i = 0; i < count; i++) {
			files[i].thumb = URL.createObjectURL(files[i])
		}
		// convert to array
		files = Array.prototype.slice.call(files, 0)
		files = files.filter(function (file) {
			return /image/i.test(file.type)
		})
		this.props.onChange(files, event)
	}

	render() {
        let style = this.state.style
        
		return (
			<div className={this.props.className}>
                <div className={css(style.body)}>
                        <span className={css(style.span)}>
                            {this.props.content}
                        </span>
                        <input
                            type="file"
                            ref={input => this.input = input}
                            multiple={this.props.multiple} 
                            onChange={this._onChange.bind(this)}
                            className={css(style.input)}
                        />
                </div>
			</div>
		)
	}

}


FileUpload.defaultProps = {
    type: 'button',
    multiple: true,
    content: 'Upload'
}

FileUpload.propTypes = {
    type: React.PropTypes.oneOf(['button','label']),
    multiple: React.PropTypes.bool,
    content: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
}