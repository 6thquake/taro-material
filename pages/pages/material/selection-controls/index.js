import Taro, { Component } from '@tarojs/taro';
import { View, CheckboxGroup, Checkbox, RadioGroup, Radio } from '@tarojs/components';

import { RMSwitch, RMRadio, RMCheckbox, RMRadioGroup, RMCheckboxGroup } from '../../../';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Selection Controls',
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
              lebel="default"
            />
            <RMCheckbox
              disabled
              value="checkedB2"
              color="primary"
              checked={!this.state.checkedB}
              onChange={this.handleChange.bind(this)}
              lebel="primary"
            />
            <RMCheckbox
              disabled
              value="checkedC3"
              color="secondary"
              checked={!this.state.checkedC}
              onChange={this.handleChange.bind(this)}
              lebel="secondary"
            />
            <RMCheckbox
              disabled
              value="checkedD4"
              color="error"
              checked={!this.state.checkedD}
              onChange={this.handleChange.bind(this)}
              lebel="error"
            />
          </View>
          <View className="row">
            <RMCheckbox
              disabled
              value="checkedE5"
              color="success"
              checked={!this.state.checkedE}
              onChange={this.handleChange.bind(this)}
              lebel="success"
            />
            <RMCheckbox
              disabled
              value="checkedF6"
              color="warning"
              checked={!this.state.checkedF}
              onChange={this.handleChange.bind(this)}
              lebel="warning"
            />
            <RMCheckbox
              disabled
              value="checkedG7"
              color="progress"
              checked={!this.state.checkedG}
              onChange={this.handleChange.bind(this)}
              lebel="progress"
            />
          </View>

          <View className="title" style={{ marginTop: '16px' }}>
            Radio
          </View>
          <View className="row">
            <RMRadio
              value="radioA"
              color="default"
              checked={this.state.radioA}
              onChange={this.handleChange.bind(this)}
            >
              default
            </RMRadio>
            <RMRadio
              value="radioB"
              color="primary"
              checked={this.state.radioB}
              onChange={this.handleChange.bind(this)}
            >
              primary
            </RMRadio>
            <RMRadio
              value="radioC"
              color="secondary"
              checked={this.state.radioC}
              onChange={this.handleChange.bind(this)}
            >
              secondary
            </RMRadio>
            <RMRadio
              value="radioD"
              color="error"
              checked={this.state.radioD}
              onChange={this.handleChange.bind(this)}
            >
              error
            </RMRadio>
          </View>
          <View className="row">
            <RMRadio
              value="radioE"
              color="success"
              checked={this.state.radioE}
              onChange={this.handleChange.bind(this)}
            >
              success
            </RMRadio>
            <RMRadio
              value="radioF"
              color="warning"
              checked={this.state.radioF}
              onChange={this.handleChange.bind(this)}
            >
              warning
            </RMRadio>
            <RMRadio
              value="radioG"
              color="progress"
              checked={this.state.radioG}
              onChange={this.handleChange.bind(this)}
            >
              progress
            </RMRadio>
          </View>

          <RMRadio
            disabled
            onChange={this.handleChange.bind(this)}
            checked={this.state.radio7}
            value="radio7"
            color="progress"
          >
            progress
          </RMRadio>

          <RMRadio
            disabled
            value="radioA1"
            color="default"
            checked={!this.state.radioA1}
            onChange={this.handleChange.bind(this)}
            lable="default"
          />
          <RMRadio
            disabled
            value="radioB1"
            color="primary"
            checked={!this.state.radioB1}
            onChange={this.handleChange.bind(this)}
            lable="primary"
          />
          <RMRadio
            disabled
            value="radioC1"
            color="secondary"
            checked={!this.state.radioC1}
            onChange={this.handleChange.bind(this)}
            lable="secondary"
          />
          <RMRadio
            disabled
            value="radioD1"
            color="error"
            checked={!this.state.radioD1}
            onChange={this.handleChange.bind(this)}
            lable="error"
          />
          <RMRadio
            disabled
            value="radioE1"
            color="success"
            checked={!this.state.radioE1}
            onChange={this.handleChange.bind(this)}
            lable="success"
          />
          <RMRadio
            disabled
            value="radioF1"
            color="warning"
            checked={!this.state.radioF1}
            onChange={this.handleChange.bind(this)}
            lable="warning"
          />
          <RMRadio
            disabled
            value="radioG1"
            color="progress"
            checked={!this.state.radioG1}
            onChange={this.handleChange.bind(this)}
            lable="progress"
          />

          <View className="title" style={{ marginTop: '16px' }}>
            CheckboxGroup
          </View>
          <View className="row">
            <RMCheckboxGroup
              onChange={this.handleChange.bind(this)}
              name="checkboxs"
              value={this.state.checkboxs}
              options={[
                {
                  name: 'checkboxs1',
                  value: 'checkboxs1',
                  color: 'error',
                  label: 'error',
                  icon: 'remove',
                },
                {
                  name: 'checkboxs2',
                  value: 'checkboxs2',
                  color: 'success',
                  label: 'success',
                  disabled: false,
                  icon: 'add',
                },
                {
                  name: 'checkboxs3',
                  value: 'checkboxs3',
                  color: 'default',
                  label: 'disabled',
                  disabled: true,
                },
                {
                  name: 'checkboxs4',
                  value: 'checkboxs4',
                  color: 'error',
                  label: 'yes',
                  icon: 'remove',
                },
                {
                  name: 'checkboxs5',
                  value: 'checkboxs5',
                  color: 'success',
                  label: 'no',
                  disabled: false,
                  icon: 'add',
                },
                {
                  name: 'checkboxs6',
                  value: 'checkboxs6',
                  color: 'default',
                  label: 'ok',
                  disabled: true,
                },
              ]}
            />
          </View>
          <View className="row">
            <RMCheckboxGroup
              onChange={this.handleChange.bind(this)}
              name="checkboxs"
              value={this.state.checkboxs}
              vertical
              options={[
                {
                  name: 'checkboxs1',
                  value: 'checkboxs1',
                  color: 'error',
                  label: 'error',
                  icon: 'remove',
                },
                {
                  name: 'checkboxs2',
                  value: 'checkboxs2',
                  color: 'success',
                  label: 'success',
                  disabled: false,
                  icon: 'add',
                },
                {
                  name: 'checkboxs3',
                  value: 'checkboxs3',
                  color: 'default',
                  label: 'disabled',
                  disabled: true,
                },
              ]}
            />
          </View>

          <View className="title" style={{ marginTop: '16px' }}>
            RadioGroup
          </View>
          <View className="row">
            <RMRadioGroup
              onChange={this.handleChange.bind(this)}
              name="radios"
              value={this.state.radios}
              options={[
                {
                  name: 'radios4',
                  value: 'radios4',
                  color: 'error',
                  label: 'error',
                },
                {
                  name: 'radios5',
                  value: 'radios5',
                  color: 'success',
                  label: 'success',
                  disabled: false,
                },
                {
                  name: 'radios6',
                  value: 'radios6',
                  color: 'default',
                  label: 'disabled',
                  disabled: true,
                },
              ]}
            />
          </View>
          <View className="row">
            <RMRadioGroup
              onChange={this.handleChange.bind(this)}
              name="radios"
              value={this.state.radios}
              vertical
              options={[
                {
                  name: 'radios4',
                  value: 'radios4',
                  color: 'error',
                  label: 'error',
                },
                {
                  name: 'radios5',
                  value: 'radios5',
                  color: 'success',
                  label: 'success',
                  disabled: false,
                },
                {
                  name: 'radios6',
                  value: 'radios6',
                  color: 'default',
                  label: 'disabled',
                  disabled: true,
                },
              ]}
            />
          </View>

          <View className="title" style={{ marginTop: '16px' }}>
            Taro CheckboxGroup
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
            Taro RadioGroup
          </View>
          <RadioGroup onChange={this.handleChange.bind(this)}>
            <Radio value="taroRadio1" checked={this.state.taroRadio1}>
              选中
            </Radio>
            <Radio value="taroRadio2" checked={this.state.taroRadio2} style="margin-left: 20rpx">
              未选中
            </Radio>
          </RadioGroup>

          <View className="title">Switch</View>
          <RMSwitch checked={false} onChange={this.handleChange.bind(this)} value="checkedA" />
          <RMSwitch
            checked
            onChange={this.handleChange.bind(this)}
            value="checkedB"
            color="primary"
          />
          <RMSwitch value="checkedC" />
          <RMSwitch disabled value="checkedD" />
          <RMSwitch disabled checked value="checkedE" />
          <RMSwitch value="checkedF" color="secondary" title="开关" required />
          <RMSwitch value="checkedF" color="warning" title="开关" helperText="请选择" />
        </View>
      </View>
    );
  }
}

export default Index;
