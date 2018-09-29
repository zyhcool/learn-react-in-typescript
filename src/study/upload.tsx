import { Button, Icon, Upload } from 'antd';
import * as React from 'react';

interface IState {
    fileList: any;
}
export default class MyUpload extends React.Component<any, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            fileList: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(info: any) {
        let fileList = info.fileList;
        console.log(info.file.originFileObj);
        if(info.file.statue === "done"){
            fileList.push(info.file);
            this.setState({
                fileList,
            });
        }else{
            return;
        }
    }

    public render() {
        const props = {
            onChange: this.handleChange,
        };
        return (
            <Upload {...props} fileList={this.state.fileList}>
                <Button>
                    <Icon type="upload" /> Upload
        </Button>
            </Upload>
        );
    }
}

