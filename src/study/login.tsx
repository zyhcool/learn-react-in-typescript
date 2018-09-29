import { Button, Checkbox, Form, Icon, Input, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import * as React from 'react';

// interface ILoginFormProps extends FormComponentProps{

// }

// interface IState {
//     userName: string;
//     password: string;
// }

export class Login extends React.Component {
    public constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                <LoginFormOne /><div style={{ height: "30px" }} /><hr />
                <LoginFormTwo /><div style={{ height: "30px" }} /><hr />
                <LoginFormThree /><div style={{ height: "30px" }} /><hr />
                <LoginFormFour /><div style={{ height: "30px" }} /><hr />
                <LoginFormFive /><div style={{ height: "30px" }} /><hr />
                <FormSix /><div style={{ height: "30px" }} /><hr />
                <InputTest /><div style={{ height: "30px" }} /><hr />
            </div>
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
            let passwordError = isFieldTouched("password") && getFieldError("password");
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
                        validateStatus={passwordError ? "error" : undefined}
                        help={passwordError}>
                        {
                            getFieldDecorator("password", {
                                rules: [
                                    { required: true, message: "Your password !" },
                                    { min: 6, message: "password no less than 6" },
                                    { max: 16, message: "password no more than 16" },
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
                            getFieldDecorator("password", {
                                rules: [
                                    { required: true, message: "Your password !" },
                                    { min: 6, message: "password no less than 6" },
                                    { max: 16, message: "password no more than 16" },
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
                            getFieldDecorator("remember", {
                                valuePropName: 'checked',
                                initialValue: true,
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

let uuid = 0;
const LoginFormThree = Form.create()(
    class extends React.Component<FormComponentProps>{
        public constructor(props: any) {
            super(props);
            this.add = this.add.bind(this);
            this.remove = this.remove.bind(this);
        }
        public add() {
            const { form } = this.props;
            const keys = form.getFieldValue('keys');
            console.log("keys: " + keys);
            const nextKeys = keys.concat(uuid);
            console.log("nextKeys: " + nextKeys);
            uuid++;
            form.setFieldsValue({
                keys: nextKeys,
            });
        }
        public remove(k: any) {
            const { form } = this.props;
            const keys = form.getFieldValue('keys');
            if (keys.length === 1) {
                return;
            }
            form.setFieldsValue({
                keys: keys.filter((key: any) => key !== k),
            });
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
            const { getFieldDecorator, getFieldValue } = this.props.form;
            getFieldDecorator("keys", { initialValue: [] });
            const keys = getFieldValue("keys");
            console.log(keys);
            const nameItems = keys.map((k: any) => {
                return (
                    <FormItem
                        key={k}>
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
                            onClick={() => this.remove(k)} />
                    </FormItem>
                );
            });
            return (
                <Form>
                    {nameItems}
                    <FormItem>
                        <Button type="dashed" onClick={this.add}>添加</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            );
        }
    },
);


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

const LoginFormFour = Form.create()(
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
                        <Button type="dashed" onClick={() => { let keys = add(1, this.state.keys); this.setState({ keys }); }}>添加</Button>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            );
        }
    },
);

interface ITheFormProps extends FormComponentProps {
    onChange: (changedFields: any) => void;
    onClick: () => void;
    itemData: any;
}
interface IState {
    fields: any;
    itemData: any;
}

const TheForm = Form.create({
    onFieldsChange(props: ITheFormProps, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props: ITheFormProps) {
        let fields = {};
        for (let item of props.itemData.items) {
            fields[item.field] = Form.createFormField({
                ...props[item.field],
                value: props[item.field].value,
            });
        }
        return fields;
    },
})(
    class extends React.Component<ITheFormProps, any>{
        public constructor(props: ITheFormProps) {
            super(props);
        }
        public userName() {
            const { getFieldDecorator } = this.props.form;
            return (
                <FormItem label="userName">
                    {
                        getFieldDecorator("userName", {
                            rules: [{ required: true, message: "userName please !" }],
                        })(
                            <Input />,
                        )
                    }
                </FormItem>
            );
        }
        public password() {
            const { getFieldDecorator } = this.props.form;
            return (
                <FormItem label="password">
                    {
                        getFieldDecorator("password", {
                            rules: [{ required: true, message: "password please !" }],
                        })(
                            <Input />,
                        )
                    }
                </FormItem>
            );
        }
        public render() {
            return (
                <Form layout="horizontal">
                    {
                        this.props.itemData.items.map((item: any) => {
                            let element: JSX.Element = this[item.field]();
                            return element;
                        })
                    }
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={this.props.onClick}>
                            Save
                        </Button>
                    </FormItem>
                </Form>
            );
        }
    },
);

class LoginFormFive extends React.Component<any, IState>{
    public constructor(props: any) {
        super(props);
        let fields = {
            userName: {
                value: "zyh",
            },
            password: {
                value: "123456",
            },
        };
        let itemData = {
            items: [{
                field: "userName",
            }, {
                field: "password",
            }],
        };
        this.state = {
            fields,
            itemData,
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    public handleFormChange(changedFields: any) {
        this.setState(({ fields }) => ({
            fields: {
                ...fields, ...changedFields,
            },
        }));
    }
    public onSave(e: any) {
        e.preventDefault();
        let data = {};
        let fields = this.state.fields;
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                data[key] = fields[key].value;
            }
        }
        console.log(this.state.fields);
        console.log(data);
    }
    public render() {
        const fields = this.state.fields;
        return (
            <div>
                <TheForm
                    {...fields}
                    itemData={this.state.itemData}
                    onChange={this.handleFormChange}
                    onClick={this.onSave}
                />
                {JSON.stringify(fields, null, 2)}
            </div>
        );
    }
}

const FormSix = Form.create()(
    class extends React.Component<FormComponentProps, any> {
        public constructor(props: any) {
            super(props);
            this.submit = this.submit.bind(this);
        }
        public submit(e: any) {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                console.log(values);
            });
        }

        public render() {
            const selectOptions = [];
            for (let i = 0; i < 4; i++) {
                selectOptions.push(<Select.Option key={`${i}`} value={`${i}`}>{i}</Select.Option>);
            }
            const { getFieldDecorator } = this.props.form;
            return (
                <Form>
                    <Form.Item>
                        {
                            getFieldDecorator(`selects`, {
                                rules: [{ required: true, message: "choose something" }],
                            })(
                                <Select
                                    mode="multiple"
                                    placeholder="select your choice">
                                    {selectOptions}
                                </Select>,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={this.submit}>确定</Button>
                    </Form.Item>
                </Form>
            );
        }
    },
);


interface IInputTestState {
    email: string;
    captcha: string;
}
const InputTest = Form.create()(
    class extends React.Component<FormComponentProps, IInputTestState>{
        public constructor(props: FormComponentProps) {
            super(props);
            this.state = {
                email: "",
                captcha: "",
            };
            this.onChange = this.onChange.bind(this);
            this.onCaptchaChange = this.onCaptchaChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.sendCaptcha = this.sendCaptcha.bind(this);
        }
        public onChange(e: any) {
            let value = e.target.value;
            this.setState({
                email: value,
            });
        }
        public onCaptchaChange(e: any) {
            let value = e.target.value;
            this.setState({
                captcha: value,
            });
        }
        public handleSubmit(e: React.MouseEvent) {
            e.preventDefault();
            console.log(JSON.stringify(this.state));
        }
        public async sendCaptcha(){
            return;
        }

        public render() {
            const { getFieldDecorator } = this.props.form;
            const formItemLayout = {
                labelCol:{
                    span: 8,
                },
                wrapperCol:{
                    span: 16,
                },
            };
            return (
                <Form style={{maxWidth:"300px"}}>
                    <Form.Item label="hahha" {...formItemLayout} style={{width:"70%"}}>
                        {
                            getFieldDecorator("email", {
                                rules: [{ required: true, message: "email please!" }],
                            })(
                                <Input onChange={this.onChange} style={{width:"70%"}}/>,
                            )
                        }
                        <a href="javascript:;"
                        style={{marginLeft:"10px"}}
                        onClick={this.sendCaptcha}>
                        验证
                        </a>
                    </Form.Item>
                    <Form.Item label="ajjaja" {...formItemLayout}>
                        {
                            getFieldDecorator("captcha", {
                                rules: [{ required: true, message: "captcha please!" }],
                            })(
                                <Input onChange={this.onCaptchaChange} />,
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={this.handleSubmit}>确定</Button>
                    </Form.Item>
                </Form>
            );
        }
    },
);

