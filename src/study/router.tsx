import * as React from 'react';
import {
    BrowserRouter as Router,
    Link,
    match,
    Route,
    withRouter,
} from 'react-router-dom';

export class RouterOne extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/router/1">Home</Link>
                        </li>
                        <li>
                            <Link to="/router/1/about">about</Link>
                        </li>
                        <li>
                            <Link to="/router/1/topics">Topics</Link>
                        </li>
                    </ul>
                    <div>
                        <Route exact={true} path="/router/1" component={Home} />
                        <Route path="/router/1/about" component={About} />
                        <Route path="/router/1/topics" component={Topics} />
                    </div>
                </div>
            </Router>
        );
    }
}

class Home extends React.Component {
    public render() {
        return (
            <div>Home</div>
        );
    }
}
class About extends React.Component {
    public render() {
        return (
            <div>About</div>
        );
    }
}

interface ITopicsProps {
    match: match<{ number: string }>;
}
class Topics extends React.Component<ITopicsProps, any> {
    public render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/One`}>One</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Two`}>Two</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Three`}>Three</Link>
                    </li>
                </ul>
                <div>
                    <Route path={`${this.props.match.url}/:number`} component={Topic} />
                    <Route exact={true} path={`${this.props.match.url}`} component={
                        class extends React.Component {
                            public render() {
                                return (
                                    <div>Select a Topic</div>
                                );
                            }
                        }
                    } />
                </div>
            </div>
        );
    }
}

class Topic extends React.Component<ITopicsProps, any>{
    public render() {
        return (
            <div>
                {this.props.match.params.number}
            </div>
        );
    }
}



export class AuthRoute extends React.Component {
    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <Router>
                <div>
                    <LoginTip />
                    <ul>
                        <li>
                            <Link to="/router/2/public">Public</Link>
                        </li>
                        <li>
                            <Link to="/router/2/private">Private</Link>
                        </li>
                    </ul>
                    <div>
                        <Route path="/router/2/public" component={Public} />
                        <Route path="/router/2/login" component={Login} />
                        <Route path="/router/2/private" component={Private} />
                    </div>
                </div>
            </Router>
        );
    }
}

const fakeAuth = {
    islogin: false,
    login() {
        this.islogin = true;
    },
    signout() {
        this.islogin = false;
    },
};

const LoginTip = withRouter(
    ({ history }) =>
        fakeAuth.islogin ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout();
                        history.push("/");
                    }}
                >
                    Sign out
          </button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            ),
);

class Public extends React.Component {
    public render() {
        return (
            <div>Public</div>
        );
    }
}
class Private extends React.Component {
    public render() {
        return (
            <div>Private</div>
        );
    }
}
class Login extends React.Component {
    public render() {
        return (
            <div>Private</div>
        );
    }
}
