import {Component} from "react";
import {Navigate} from "react-router-dom";

export class ProtectedRoute extends Component<{ children: any }> {
    render() {
        let {children, ...rest} = this.props;
        const user = localStorage.getItem('user');
        if (!user) {
            return <Navigate to="/" />;
        }
        return children;
    }
}