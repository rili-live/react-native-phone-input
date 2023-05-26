"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react")); // eslint-disable-line import/no-extraneous-dependencies, no-use-before-define
const react_native_1 = require("react-native");
const picker_1 = require("@react-native-picker/picker");
const country_1 = __importDefault(require("./country"));
const styles_1 = __importDefault(require("./styles"));
const PickerItem = picker_1.Picker.Item;
class CountryPicker extends react_1.Component {
    constructor(props) {
        super(props);
        this.onPressCancel = () => {
            if (this.props.onPressCancel) {
                this.props.onPressCancel();
            }
            this.setState({
                modalVisible: false,
            });
        };
        this.onPressSubmit = () => {
            if (this.props.onPressConfirm) {
                this.props.onPressConfirm();
            }
            if (this.props.onSubmit) {
                this.props.onSubmit(this.state.selectedCountry);
            }
            this.setState({
                modalVisible: false,
            });
        };
        this.onValueChange = (selectedCountry) => {
            this.setState({
                selectedCountry,
            });
        };
        this.state = {
            buttonColor: this.props.buttonColor || '#007AFF',
            modalVisible: false,
            selectedCountry: this.props.selectedCountry || country_1.default.getAll()[0],
        };
    }
    selectCountry(selectedCountry) {
        this.setState({
            selectedCountry,
        });
    }
    show() {
        this.setState({
            modalVisible: true,
        });
    }
    // eslint-disable-next-line class-methods-use-this
    renderItem(country, index) {
        return react_1.default.createElement(PickerItem, { key: country.iso2, value: country.iso2, label: country.name });
    }
    render() {
        const { buttonColor } = this.state;
        const itemStyle = this.props.itemStyle || {};
        return (react_1.default.createElement(react_native_1.Modal, { animationType: "slide", transparent: true, visible: this.state.modalVisible, onRequestClose: () => {
                console.log('Country picker has been closed.');
            } },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.basicContainer },
                react_1.default.createElement(react_native_1.View, { style: [
                        styles_1.default.modalContainer,
                        { backgroundColor: this.props.pickerBackgroundColor || 'white' },
                    ] },
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.buttonView },
                        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onPressCancel },
                            react_1.default.createElement(react_native_1.Text, { style: [{ color: buttonColor }, this.props.cancelTextStyle] }, this.props.cancelText || 'Cancel')),
                        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onPressSubmit },
                            react_1.default.createElement(react_native_1.Text, { style: [{ color: buttonColor }, this.props.confirmTextStyle] }, this.props.confirmText || 'Confirm'))),
                    react_1.default.createElement(react_native_1.View, { style: styles_1.default.mainBox },
                        react_1.default.createElement(picker_1.Picker, { ref: (ref) => {
                                this.picker = ref;
                            }, style: styles_1.default.bottomPicker, selectedValue: this.state.selectedCountry, onValueChange: (country) => this.onValueChange(country), itemStyle: itemStyle, mode: "dialog" }, country_1.default.getAll().map((country, index) => this.renderItem(country, index))))))));
    }
}
exports.default = CountryPicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Db3VudHJ5UGlja2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDLENBQUMsOEVBQThFO0FBQ3hILCtDQUVzQjtBQUN0Qix3REFBcUQ7QUFFckQsd0RBQWdDO0FBQ2hDLHNEQUE4QjtBQUc5QixNQUFNLFVBQVUsR0FBRyxlQUFNLENBQUMsSUFBSSxDQUFDO0FBRS9CLE1BQXFCLGFBQWMsU0FBUSxpQkFBdUU7SUFHOUcsWUFBWSxLQUFLO1FBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBZWpCLGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDOUI7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLFlBQVksRUFBRSxLQUFLO2FBQ3RCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDL0I7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixZQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFRCxrQkFBYSxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FB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QyxPQUFPLENBQUMsRUFDdkQsU0FBUyxFQUFFLFNBQVMsRUFDcEIsSUFBSSxFQUFDLFFBQVEsSUFFWixpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3JFLENBQ04sQ0FDSixDQUNKLENBQ0gsQ0FDWCxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBaEhELGdDQWdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzLCBuby11c2UtYmVmb3JlLWRlZmluZVxuaW1wb3J0IHtcbiAgICBUZXh0LCBUb3VjaGFibGVPcGFjaXR5LCBWaWV3LCBNb2RhbCxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IFBpY2tlciB9IGZyb20gJ0ByZWFjdC1uYXRpdmUtcGlja2VyL3BpY2tlcic7XG5cbmltcG9ydCBDb3VudHJ5IGZyb20gJy4vY291bnRyeSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFJlYWN0TmF0aXZlQ291bnRyeVBpY2tlclByb3BzLCBSZWFjdE5hdGl2ZUNvdW50cnlQaWNrZXJTdGF0ZSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmNvbnN0IFBpY2tlckl0ZW0gPSBQaWNrZXIuSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeVBpY2tlciBleHRlbmRzIENvbXBvbmVudDxSZWFjdE5hdGl2ZUNvdW50cnlQaWNrZXJQcm9wcywgUmVhY3ROYXRpdmVDb3VudHJ5UGlja2VyU3RhdGU+IHtcbiAgICBwcml2YXRlIHBpY2tlcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBidXR0b25Db2xvcjogdGhpcy5wcm9wcy5idXR0b25Db2xvciB8fCAnIzAwN0FGRicsXG4gICAgICAgICAgICBtb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5OiB0aGlzLnByb3BzLnNlbGVjdGVkQ291bnRyeSB8fCBDb3VudHJ5LmdldEFsbCgpWzBdLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNlbGVjdENvdW50cnkoc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblByZXNzQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblByZXNzQ2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJlc3NDYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25QcmVzc1N1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QcmVzc0NvbmZpcm0pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25QcmVzc0NvbmZpcm0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25WYWx1ZUNoYW5nZSA9IChzZWxlY3RlZENvdW50cnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZENvdW50cnksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxWaXNpYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHJlbmRlckl0ZW0oY291bnRyeSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIDxQaWNrZXJJdGVtIGtleT17Y291bnRyeS5pc28yfSB2YWx1ZT17Y291bnRyeS5pc28yfSBsYWJlbD17Y291bnRyeS5uYW1lfSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uQ29sb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGl0ZW1TdHlsZSA9IHRoaXMucHJvcHMuaXRlbVN0eWxlIHx8IHt9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZT1cInNsaWRlXCJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUubW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VudHJ5IHBpY2tlciBoYXMgYmVlbiBjbG9zZWQuJyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJhc2ljQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm1vZGFsQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLnBpY2tlckJhY2tncm91bmRDb2xvciB8fCAnd2hpdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJ1dHRvblZpZXd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e3RoaXMub25QcmVzc0NhbmNlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtbeyBjb2xvcjogYnV0dG9uQ29sb3IgfSwgdGhpcy5wcm9wcy5jYW5jZWxUZXh0U3R5bGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhbmNlbFRleHQgfHwgJ0NhbmNlbCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXt0aGlzLm9uUHJlc3NTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17W3sgY29sb3I6IGJ1dHRvbkNvbG9yIH0sIHRoaXMucHJvcHMuY29uZmlybVRleHRTdHlsZV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlybVRleHQgfHwgJ0NvbmZpcm0nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm1haW5Cb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlciA9IHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5ib3R0b21QaWNrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsoY291bnRyeSkgPT4gdGhpcy5vblZhbHVlQ2hhbmdlKGNvdW50cnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU9e2l0ZW1TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q291bnRyeS5nZXRBbGwoKS5tYXAoKGNvdW50cnksIGluZGV4KSA9PiB0aGlzLnJlbmRlckl0ZW0oY291bnRyeSwgaW5kZXgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19