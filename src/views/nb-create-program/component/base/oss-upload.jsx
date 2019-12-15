import React from "react";
import { Form, Upload, message, Button, Icon } from "antd";
import OSS from "ali-oss";

export default class AliyunOSSUpload extends React.Component {
  state = {

  };

  init = async () => {
    try {
      const OSSData = await this.mockGetOSSData();

      this.setState({
        OSSData
      });
    } catch (error) {
      message.error(error);
    }
  };

  onChange = ({ fileList }) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange([...fileList]);
    }
  };

  onRemove = file => {
    const { value, onChange } = this.props;

    const files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  transformFile = file => {
    const { OSSData } = this.state;

    const suffix = file.name.slice(file.name.lastIndexOf("."));
    const filename = Date.now() + suffix;
    file.url = OSSData.dir + filename;
    console.log(file);
    return file;
  };

  getExtraData = file => {
    const { OSSData } = this.state;

    return {
      key: file.url,
      OSSAccessKeyId: OSSData.accessId,
      policy: OSSData.policy,
      Signature: OSSData.signature,
      success_action_status: "201"
    };
  };

  beforeUpload = async () => {
    const { OSSData } = this.state;
    const expire = OSSData.expire * 1000;

    if (expire < Date.now()) {
      await this.init();
    }
    return true;
  };

  render() {
    const { value } = this.props;
    const props = {
      name: "file",
      listType: "picture-card",
      fileList: value,
      onChange: this.onChange,
      onRemove: this.onRemove,
      transformFile: this.transformFile,
      beforeUpload: this.beforeUpload
    };

    return (
      <Upload {...props}>
        <>
          <Icon type="plus" />
          <span className="ant-upload-text">Upload</span>
        </>
      </Upload>
    );
  }
}
