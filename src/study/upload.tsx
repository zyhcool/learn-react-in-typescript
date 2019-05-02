import { Button, Icon, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import * as React from 'react';

interface IState {
    fileList: UploadFile[];
}
export default class MyUpload extends React.Component<any, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            fileList: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(info: UploadChangeParam) {
        let fileList = info.fileList;
        let file = info.file;
        console.log(file);
        console.log(fileList);
        if (info.file.status === "done") {
            fileList.push(info.file);
            this.setState({
                fileList,
            });
        } else {
            return;
        }
    }
    public beforeUpload(file: RcFile, fileList: RcFile[]) {
        console.log("-------------------");
        console.log("-------------------");
        console.log(file);
        console.log(fileList);
        // for(let file of fileList){
        //     await upload
        // }
        console.log("-------------------");
        console.log("-------------------");
        return false;
    }

    public render() {
        return (
            <Upload
                multiple={true}
                onChange={this.handleChange}
                defaultFileList={this.state.fileList}
                beforeUpload={this.beforeUpload}
            >
                <Button>
                    <Icon type="upload" />
                </Button>
            </Upload>
        );
    }
}

