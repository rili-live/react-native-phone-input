import { Component } from 'react';
import { ReactNativeCountryPickerProps, ReactNativeCountryPickerState } from './typings';
export default class CountryPicker extends Component<ReactNativeCountryPickerProps, ReactNativeCountryPickerState> {
    private picker;
    constructor(props: any);
    selectCountry(selectedCountry: any): void;
    onPressCancel: () => void;
    onPressSubmit: () => void;
    onValueChange: (selectedCountry: any) => void;
    show(): void;
    renderItem(country: any, index: any): JSX.Element;
    render(): JSX.Element;
}
