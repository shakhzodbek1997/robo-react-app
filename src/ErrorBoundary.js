import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }

    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }


    render() {
        return this.state.hasError ?
            <h1 className='tc'>Ooops! That is not Good!</h1> :
            this.props.children;
    }

}

export default ErrorBoundary;