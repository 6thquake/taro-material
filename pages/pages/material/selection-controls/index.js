import Taro, { Component } from '@tarojs/taro';
import { View, CheckboxGroup, Checkbox, RadioGroup, Radio } from '@tarojs/components';

import { RMSwitch, RMRadio, RMCheckbox, RMRadioGroup } from '../../../';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Switch',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = (checked, value, e) => {
    console.log(`${value}: ${checked}, ${e ? e.detail.value : e}`);
    this.setState({
      [value]: checked,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <View className="root">
        <View className="body">
          <View className="title">Switch</View>
          <RMSwitch checked={false} onChange={this.handleChange.bind(this)} value="checkedA" />
          <RMSwitch
            checked={true}
            onChange={this.handleChange.bind(this)}
            value="checkedB"
            color="primary"
          />
          <RMSwitch value="checkedC" />
          <RMSwitch disabled value="checkedD" />
          <RMSwitch disabled checked value="checkedE" />
          <RMSwitch value="checkedF" color="secondary" title={'开关'} required={true} />
          <RMSwitch value="checkedF" color="warning" title={'开关'} helperText={'请选择'} />

          <View className="title" style={{ marginTop: '16px' }}>
            Checkbox
          </View>
          <View className="row">
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked1}
              value="checked1"
              color="default"
            >
              default
            </RMCheckbox>
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked2}
              value="checked2"
              color="primary"
            >
              primary
            </RMCheckbox>
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked3}
              value="checked3"
              color="secondary"
            >
              secondary
            </RMCheckbox>
          </View>
          <View className="row">
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked4}
              value="checked4"
              color="error"
              icon="remove"
            >
              error
            </RMCheckbox>
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked5}
              value="checked5"
              color="success"
              icon="add"
            >
              success
            </RMCheckbox>
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked6}
              value="checked6"
              color="warning"
            >
              warning
            </RMCheckbox>
          </View>
          <View className="row">
            <RMCheckbox
              onChange={this.handleChange.bind(this)}
              checked={this.state.checked7}
              value="checked7"
              color="progress"
            >
              progress
            </RMCheckbox>
          </View>
          <View className="row">
            <RMCheckbox
              disabled
              value="checkedA"
              color="default"
              checked={this.state.checkedA}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedB"
              color="primary"
              checked={this.state.checkedB}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedC"
              color="secondary"
              checked={this.state.checkedC}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedD"
              color="error"
              checked={this.state.checkedD}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedE"
              color="success"
              checked={this.state.checkedE}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedF"
              color="warning"
              checked={this.state.checkedF}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedG"
              color="progress"
              checked={this.state.checkedG}
              onChange={this.handleChange.bind(this)}
            />
          </View>
          <View className="row">
            <RMCheckbox
              disabled
              value="checkedA1"
              color="default"
              checked={!this.state.checkedA}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedB2"
              color="primary"
              checked={!this.state.checkedB}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedC3"
              color="secondary"
              checked={!this.state.checkedC}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedD4"
              color="error"
              checked={!this.state.checkedD}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedE5"
              color="success"
              checked={!this.state.checkedE}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedF6"
              color="warning"
              checked={!this.state.checkedF}
              onChange={this.handleChange.bind(this)}
            />
            <RMCheckbox
              disabled
              value="checkedG7"
              color="progress"
              checked={!this.state.checkedG}
              onChange={this.handleChange.bind(this)}
            />
          </View>

          <View className="title" style={{ marginTop: '16px' }}>
            Radio
          </View>
          <View className="row">
            <RMRadioGroup onChange={this.handleChange.bind(this)}>
              <RMRadio checked={this.state.radio1} value="radio1" color="default" name="radios">
                default
              </RMRadio>
              <RMRadio checked={this.state.radio2} value="radio2" color="primary" name="radios">
                primary
              </RMRadio>
              <RMRadio checked={this.state.radio3} value="radio3" color="secondary" name="radios">
                secondary
              </RMRadio>
            </RMRadioGroup>
          </View>
          <View className="row">
            <RMRadioGroup className="row" onChange={this.handleChange.bind(this)}>
              <RMRadio checked={this.state.radio4} value="radio4" color="error" icon="remove">
                error
              </RMRadio>
              <RMRadio checked={this.state.radio5} value="radio5" color="success" icon="add">
                success
              </RMRadio>
              <RMRadio checked={this.state.radio6} value="radio6" color="warning">
                warning
              </RMRadio>
            </RMRadioGroup>
          </View>
          <View className="row">
            <RMRadio
              onChange={this.handleChange.bind(this)}
              checked={this.state.radio7}
              value="radio7"
              color="progress"
            >
              progress
            </RMRadio>
          </View>

          <RMRadio
            disabled
            value="radioA"
            color="default"
            checked={this.state.radioA}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioB"
            color="primary"
            checked={this.state.radioB}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioC"
            color="secondary"
            checked={this.state.radioC}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioD"
            color="error"
            checked={this.state.radioD}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioE"
            color="success"
            checked={this.state.radioE}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioF"
            color="warning"
            checked={this.state.radioF}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioG"
            color="progress"
            checked={this.state.radioG}
            onChange={this.handleChange.bind(this)}
          />

          <RMRadio
            disabled
            value="radioA1"
            color="default"
            checked={!this.state.radioA1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioB1"
            color="primary"
            checked={!this.state.radioB1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioC1"
            color="secondary"
            checked={!this.state.radioC1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioD1"
            color="error"
            checked={!this.state.radioD1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioE1"
            color="success"
            checked={!this.state.radioE1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioF1"
            color="warning"
            checked={!this.state.radioF1}
            onChange={this.handleChange.bind(this)}
          />
          <RMRadio
            disabled
            value="radioG1"
            color="progress"
            checked={!this.state.radioG1}
            onChange={this.handleChange.bind(this)}
          />

          <View className="title" style={{ marginTop: '16px' }}>
            Taro Checkbox
          </View>
          <CheckboxGroup onChange={this.handleChange.bind(this)}>
            <Checkbox value="taroChecked1" checked={this.state.taroChecked1}>
              选中
            </Checkbox>
            <Checkbox
              value="taroChecked2"
              checked={this.state.taroChecked2}
              style="margin-left: 20rpx"
            >
              未选中
            </Checkbox>
          </CheckboxGroup>

          <View className="title" style={{ marginTop: '16px' }}>
            Taro Radio
          </View>
          <RadioGroup onChange={this.handleChange.bind(this)}>
            <Radio value="taroRadio1" checked={this.state.taroRadio1}>
              选中
            </Radio>
            <Radio value="taroRadio2" checked={this.state.taroRadio2} style="margin-left: 20rpx">
              未选中
            </Radio>
          </RadioGroup>
        </View>
        <View className="spacer" />
      </View>
    );
  }
}

export default Index;
