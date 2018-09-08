import { Button, Card, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
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
                {/* <LoginFormOne /><br />
                <LoginFormTwo /><br /> */}
                <LoginFormThree /><br />
            </Card>
        );
    }
}


// const LoginFormOne = Form.create()(
//     class extends React.Component<FormComponentProps, any> {
//         constructor(props: FormComponentProps) {
//             super(props);
//             this.login = this.login.bind(this);
//         }
//         public componentDidMount() {
//             this.props.form.validateFields();
//         }
//         public login(e: any) {
//             e.preventDefault();
//             this.props.form.validateFields((err, values) => {
//                 if (!err) {
//                     console.log(values);
//                 }
//             });
//         }
//         public hasErrors(fieldsError: any) {
//             if (fieldsError) {
//                 console.warn(fieldsError);
//                 return true;
//             }
//             return false;
//         }
//         public render() {
//             const { getFieldDecorator, getFieldError, isFieldTouched, getFieldsError } = this.props.form;
//             let userNameError = isFieldTouched("userName") && getFieldError("userName");
//             let passWordError = isFieldTouched("passWord") && getFieldError("passWord");
//             return (
//                 <Form
//                     layout="inline"
//                     hideRequiredMark={false}
//                     onSubmit={this.login}>
//                     <Form.Item
//                         validateStatus={userNameError ? "error" : undefined}
//                         help={userNameError}>
//                         {
//                             getFieldDecorator("userName", {
//                                 rules: [
//                                     { required: true, message: "Your UserName !" },
//                                     { min: 2, message: "userName no less than 2" },
//                                     { max: 10, message: "userName no more than 10" },
//                                 ],
//                             })(
//                                 <Input placeholder="enter your userName" />,
//                             )
//                         }
//                     </Form.Item>
//                     <Form.Item
//                         validateStatus={passWordError ? "error" : undefined}
//                         help={passWordError}>
//                         {
//                             getFieldDecorator("passWord", {
//                                 rules: [
//                                     { required: true, message: "Your passWord !" },
//                                     { min: 6, message: "passWord no less than 6" },
//                                     { max: 16, message: "passWord no more than 16" },
//                                 ],
//                             })(
//                                 <Input placeholder="enter your password" type="password" />,
//                             )
//                         }

//                     </Form.Item>
//                     <Form.Item>
//                         <Button
//                             htmlType="submit"
//                             type="primary"
//                             disabled={this.hasErrors(getFieldsError())}
//                         >
//                             登录
//                             </Button>
//                     </Form.Item>
//                 </Form>
//             );
//         }
//     },
// );

// const LoginFormTwo = Form.create()(
//     class extends React.Component<FormComponentProps, any> {
//         constructor(props: FormComponentProps) {
//             super(props);
//             this.login = this.login.bind(this);
//         }
//         public componentDidMount() {
//             this.props.form.validateFields();
//         }
//         public login(e: any) {
//             e.preventDefault();
//             this.props.form.validateFields((err, values) => {
//                 if (!err) {
//                     console.log(values);
//                 }
//             });
//         }
//         public render() {
//             const { getFieldDecorator } = this.props.form;
//             return (
//                 <Form
//                     layout="horizontal"
//                     hideRequiredMark={false}
//                     onSubmit={this.login}>
//                     <Form.Item>
//                         {
//                             getFieldDecorator("userName", {
//                                 rules: [
//                                     { required: true, message: "Your UserName !" },
//                                     { min: 2, message: "userName no less than 2" },
//                                     { max: 10, message: "userName no more than 10" },
//                                 ],
//                             })(
//                                 <Input placeholder="enter your userName" />,
//                             )
//                         }
//                     </Form.Item>
//                     <Form.Item>
//                         {
//                             getFieldDecorator("passWord", {
//                                 rules: [
//                                     { required: true, message: "Your passWord !" },
//                                     { min: 6, message: "passWord no less than 6" },
//                                     { max: 16, message: "passWord no more than 16" },
//                                 ],
//                             })(
//                                 <Input placeholder="enter your password" type="password" />,
//                             )
//                         }

//                     </Form.Item>
//                     <Form.Item>
//                         <Button
//                             htmlType="submit"
//                             type="primary"
//                         >
//                             登录
//                             </Button>
//                     </Form.Item>
//                     <Form.Item>
//                         {
//                             getFieldDecorator("remember", {
//                                 valuePropName: 'checked',
//                                 initialValue: true,
//                             })(
//                                 <Checkbox>Remember me</Checkbox>,
//                             )
//                         }
//                     </Form.Item>
//                 </Form>
//             );
//         }
//     },
// );

// let uuid = 0;
// const LoginFormThree = Form.create()(
//     class extends React.Component<FormComponentProps>{
//         public constructor(props: any) {
//             super(props);
//             this.add = this.add.bind(this);
//             this.remove = this.remove.bind(this);
//         }
//         public add() {
//             const { form } = this.props;
//             const keys = form.getFieldValue('keys');
//             console.log("keys: "+keys);
//             const nextKeys = keys.concat(uuid);
//             console.log("nextKeys: "+nextKeys);
//             uuid++;
//             form.setFieldsValue({
//                 keys: nextKeys,
//             });
//         }
//         public remove(k: any) {
//             const { form } = this.props;
//             const keys = form.getFieldValue('keys');
//             if (keys.length === 1) {
//                 return;
//             }
//             form.setFieldsValue({
//                 keys: keys.filter((key: any) => key !== k),
//             });
//         }
//         public handleSubmit(e: any) {
//             e.preventDefault();
//             this.props.form.validateFields((err, values) => {
//                 if (!err) {
//                     console.log('Received values of form: ', values);
//                 }
//             });
//         }
//         public render() {
//             const { getFieldDecorator, getFieldValue } = this.props.form;
//             getFieldDecorator("keys", { initialValue: [] });
//             const keys = getFieldValue("keys");
//             console.log(keys);
//             const nameItems = keys.map((k: any) => {
//                 return (
//                     <FormItem
//                         key={k}>
//                         {
//                             getFieldDecorator(`name[${k}]`, {
//                                 rules: [{ required: true, whitespace: true, message: "input something" }],
//                             })(
//                                 <Input placeholder="exam's name" />,
//                             )
//                         }
//                         <Icon
//                             className="dynamic-delete-button"
//                             type="minus-circle-o"
//                             onClick={() => this.remove(k)} />
//                     </FormItem>
//                 );
//             });
//             return (
//                 <Form>
//                     {nameItems}
//                     <FormItem>
//                         <Button type="dashed" onClick={this.add}>添加</Button>
//                     </FormItem>
//                     <FormItem>
//                         <Button type="primary" htmlType="submit">保存</Button>
//                     </FormItem>
//                 </Form>
//             );
//         }
//     },
// );


function returnFnuc(type: number) {
    let count = 0;
    if (type === 1) {
        return (i: number, keys: any[]) => {
            count++;
            keys.push(count);
            console.log(keys);
            console.log(i);
            return keys;
        };
    } else {
        return (i: number, keys: any[]) => {
            keys = keys.filter((key, index) => keys[index] !== i);
            console.log(keys);
            return keys;
        };
    }
}
let add = returnFnuc(1);
let remove = returnFnuc(3);

const LoginFormThree = Form.create()(
    class extends React.Component<FormComponentProps, any>{
        public constructor(props: FormComponentProps) {
            super(props);
            this.state = {
                keys: [],
            };
        }
        public handleSubmit(e: any) {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
        public render() {
            const { getFieldDecorator } = this.props.form;
            let nameItems = this.state.keys.map((k: any) => {
                return (
                    <FormItem
                        key={k}
                    >
                        {
                            getFieldDecorator(`name[${k}]`, {
                                rules: [{ required: true, whitespace: true, message: "input something" }],
                            })(
                                <Input placeholder="exam's name" />,
                            )
                        }
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => { let keys = remove(k, this.state.keys); this.setState({ keys }); }} />
                    </FormItem>
                );
            });
            return (
                <Form>
                    {nameItems}
                    <FormItem>
                        <Button type="dashed" onClick={() => { let keys = add(1,this.state.keys); this.setState({ keys }); }}>添加</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            );
        }
    },
);
