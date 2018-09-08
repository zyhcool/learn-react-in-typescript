import { Button, Card, Checkbox, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';

// interface ILoginFormProps extends FormComponentProps{

// }

// interface IState {
//     userName: string;
//     passWord: string;
// }

export class Login extends React.Component {
    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <Card
                bodyStyle={{ width: "300px", height: "400px" }}>
                <LoginFormOne /><br />
                <LoginFormTwo /><br />
            </Card>
        );
    }
}


const LoginFormOne = Form.create()(
    class extends React.Component<FormComponentProps, any> {
        constructor(props: FormComponentProps) {
            super(props);
            this.login = this.login.bind(this);
        }
        public componentDidMount() {
            this.props.form.validateFields();
        }
        public login(e: any) {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log(values);
                }
            });
        }
        public hasErrors(fieldsError: any) {
            if (fieldsError) {
                console.warn(fieldsError);
                return true;
            }
            return false;
        }
        public render() {
            const { getFieldDecorator, getFieldError, isFieldTouched, getFieldsError } = this.props.form;
            let userNameError = isFieldTouched("userName") && getFieldError("userName");
            let passWordError = isFieldTouched("passWord") && getFieldError("passWord");
            return (
                <Form
                    layout="inline"
                    hideRequiredMark={false}
                    onSubmit={this.login}>
                    <Form.Item
                        validateStatus={userNameError ? "error" : undefined}
                        help={userNameError}>
                        {
                            getFieldDecorator("userName", {
                                rules: [
                                    { required: true, message: "Your UserName !" },
                                    { min: 2, message: "userName no less than 2" },
                                    { max: 10, message: "userName no more than 10" },
                                ],
                            })(
                                <Input placeholder="enter your userName" />,
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        validateStatus={passWordError ? "error" : undefined}
                        help={passWordError}>
                        {
                            getFieldDecorator("passWord", {
                                rules: [
                                    { required: true, message: "Your passWord !" },
                                    { min: 6, message: "passWord no less than 6" },
                                    { max: 16, message: "passWord no more than 16" },
                                ],
                            })(
                                <Input placeholder="enter your password" type="password" />,
                            )
                        }

                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                            disabled={this.hasErrors(getFieldsError())}
                        >
                            登录
                            </Button>
                    </Form.Item>
                </Form>
            );
        }
    },
);

const LoginFormTwo = Form.create()(
    class extends React.Component<FormComponentProps, any> {
        constructor(props: FormComponentProps) {
            super(props);
            this.login = this.login.bind(this);
        }
        public componentDidMount() {
            this.props.form.validateFields();
        }
        public login(e: any) {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log(values);
                }
            });
        }
        public render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <Form
                    layout="horizontal"
                    hideRequiredMark={false}
                    onSubmit={this.login}>
                    <Form.Item>
                        {
                            getFieldDecorator("userName", {
                                rules: [
                                    { required: true, message: "Your UserName !" },
                                    { min: 2, message: "userName no less than 2" },
                                    { max: 10, message: "userName no more than 10" },
                                ],
                            })(
                                <Input placeholder="enter your userName" />,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator("passWord", {
                                rules: [
                                    { required: true, message: "Your passWord !" },
                                    { min: 6, message: "passWord no less than 6" },
                                    { max: 16, message: "passWord no more than 16" },
                                ],
                            })(
                                <Input placeholder="enter your password" type="password" />,
                            )
                        }

                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            type="primary"
                        >
                            登录
                            </Button>
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator("remember",{
                                valuePropName:'checked',
                                initialValue:true,
                            })(
                                <Checkbox>Remember me</Checkbox>,
                            )
                        }
                    </Form.Item>
                </Form>
            );
        }
    },
);


