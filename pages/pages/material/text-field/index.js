import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTextField, RMButton } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'TextField',
  };

  componentWillMount() {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 0,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        value: 111,
        helperText: '111',
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        value: null,
        helperText: 'null',
      });
    }, 7000);
  }

  componentDidShow() {}

  componentDidHide() {}

  handleClick(focus) {
    this.setState({ focus: !focus });
  }

  render() {
    const { value, helperText, focus } = this.state;

    return (
      <View className="root">
        <View className="spacer" />
        <View className="input">
          <RMTextField
            type="text"
            value={value}
            name="input1-1"
            placeholder="enter"
            title="text"
            helperText={helperText}
          />
          <RMTextField
            type="number"
            value={value}
            name="input1-2"
            placeholder="enter"
            title="number"
          />
          <RMTextField
            type="password"
            value={value}
            name="input1-3"
            placeholder="enter"
            title="password"
          />
          <RMTextField
            type="phone"
            value={value}
            name="input1-4"
            placeholder="enter"
            title="phone"
          />
          <RMTextField
            type="idcard"
            value={value}
            name="input1-5"
            placeholder="enter"
            title="idcard"
          />
          <RMTextField
            type="digit"
            value={value}
            name="input1-6"
            placeholder="enter"
            title="digit"
          />

          <RMTextField
            type="text"
            value=""
            name="input2"
            placeholder="enter"
            title="required"
            required
          />
          <RMTextField
            type="text"
            value=""
            name="input3"
            placeholder="enter"
            title="error"
            error
            helperText="Some errors occur"
          />
          <RMTextField
            type="text"
            value=""
            name="input4-1"
            placeholder="enter"
            title="helperText"
            helperText="Some important text"
          />
          <RMTextField
            type="text"
            value=""
            name="input4-2"
            placeholder="enter"
            title="helperText"
            helperText="Some important text"
            helperTextClass="warning"
          />
          <RMTextField
            type="text"
            value="clear"
            name="input5"
            placeholder="enter"
            title="clear"
            clear
          />
          <RMTextField
            type="text"
            name="input6-1"
            placeholder="enter"
            title="editable+normal"
            value="editable+normal"
            editable={false}
            readOnlyStyle="normal"
          />
          <RMTextField
            type="text"
            value="editable"
            name="input6-2"
            placeholder="enter"
            title="editable"
            editable={false}
            readOnlyStyle="disabled"
          />
          <RMTextField
            type="text"
            value="disabled"
            name="input7"
            placeholder="enter"
            title="disabled"
            disabled
          />
          <RMTextField
            type="number"
            value=""
            name="input8"
            placeholder="enter"
            title="startAdornment"
            startAdornment="attach_money"
          />
          <RMTextField
            type="number"
            value=""
            name="input9"
            placeholder="enter"
            title="endAdornment"
            endAdornment="visibility"
          />
          <RMTextField
            type="number"
            value=""
            name="input10"
            placeholder="enter"
            title="adornment"
            startAdornment="attach_money"
            endAdornment="visibility"
          />

          <RMTextField
            type="text"
            value=""
            name="input11"
            placeholder="enter"
            title="normal"
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input12"
            placeholder="enter"
            title="required"
            required
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input13"
            placeholder="enter"
            title="error"
            error
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input14"
            placeholder="enter"
            title="helperText"
            helperText="Some important text"
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input15-1"
            placeholder="enter"
            title="editable+normal"
            editable={false}
            readOnlyStyle="normal"
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input15-2"
            placeholder="enter"
            title="editable"
            editable={false}
            readOnlyStyle="disabled"
            multiline
          />
          <RMTextField
            type="text"
            value=""
            name="input16"
            placeholder="enter"
            title="disabled"
            disabled
            multiline
          />

          <RMTextField
            type="text"
            value=""
            name="input17"
            placeholder="focus"
            title="focus"
            focus={focus}
          />

          <RMButton variant="contained" onClick={this.handleClick.bind(this, focus)}>
            {focus ? 'focus' : 'not focus'}
          </RMButton>
        </View>
      </View>
    );
  }
}

export default Index;
