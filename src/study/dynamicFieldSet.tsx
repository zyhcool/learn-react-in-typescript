import { Button, Divider, Icon, Input, Select } from "antd";
import * as React from "react";

interface IDynamicFieldSetState {
    datas: {
        [key: number]: any;
    };
    keys: number[];
}

interface IDynamicFieldSetProps {
    value?: { [key: string]: any };
    onChange?: (datas: { [key: string]: any }) => void;
}

export class DynamicFieldSet extends React.Component<IDynamicFieldSetProps, IDynamicFieldSetState> {
    private key: number = 0;
    public constructor(props: IDynamicFieldSetProps) {
        super(props);
        this.state = {
            datas: {},
            keys: [],
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.triggerChange = this.triggerChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        let keys = [];
        if (this.props.value) {
            for (let key in this.props.value) {
                if (this.props.value.hasOwnProperty(key)) {
                    keys.push(parseInt(key, 10));
                    this.key++;
                }
            }
            this.setState({
                keys,
                datas: this.props.value,
            });
        }
    }

    public componentWillReceiveProps(nextProps: IDynamicFieldSetProps) {
        // Should be a controlled component.
        if ('value' in nextProps && nextProps.value) {
            const values = nextProps.value;
            this.setState({
                datas: values,
            });
        }
    }

    public triggerChange() {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(this.state.datas);
        }
    }

    public remove(k: number) {
        this.setState((prevState) => {
            let keys = prevState.keys.filter((key) => {
                return key !== k;
            });
            delete prevState.datas[k];
            return Object.assign(prevState, { keys });
        });
    }

    public add() {
        this.key++;
        this.setState((prevState) => {
            prevState.datas[this.key] = {};
            prevState.keys.push(this.key);
            return prevState;
        });
    }

    public handleChange(k: number, value: any) {
        this.setState((prevState) => {
            prevState.datas[k] = value;
            return prevState;
        });
        this.triggerChange();
    }

    public render() {
        const child = React.Children.only(this.props.children);
        const items = this.state.keys.map((k: number, index: number) => {
            const childElement = React.cloneElement(child, {
                value: this.props.value ? this.props.value[k] : undefined,
                onChange: (value: any) => this.handleChange(k, value),
            });
            return (
                <div
                    key={k}
                    style={{
                        margin: "8px 0 8px",
                        padding: "4px 12px 8px 24px",
                    }}
                >
                    <Divider type="horizontal">
                        {
                            `第 ${index + 1} 项  `
                        }
                        <Icon
                            type="minus-circle-o"
                            style={{
                                color: "red",
                            }}
                            onClick={() => this.remove(k)}
                        />
                    </Divider>
                    {childElement}
                </div>
            );
        });

        return (
            <div>
                {items}
                <Button type="dashed" onClick={this.add} style={{ width: "60%", paddingLeft: 24 }}>
                    <Icon type="plus" />{"新增输入项"}
                </Button >
            </div>
        );
    }
}


export class DynamicFieldSetPage extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }
    public render() {
        return (
            <div>
                <DynamicFieldSet>
                    <Input />
                </DynamicFieldSet>
                <Divider type="horizontal" />
                <DynamicFieldSet>
                    <Select defaultValue={1} placeholder="选择">
                        <Select.Option key={1} value={1}>1</Select.Option>
                        <Select.Option key={2} value={2}>2</Select.Option>
                        <Select.Option key={3} value={3}>3</Select.Option>
                    </Select>
                </DynamicFieldSet>
            </div>
        );
    }
}
