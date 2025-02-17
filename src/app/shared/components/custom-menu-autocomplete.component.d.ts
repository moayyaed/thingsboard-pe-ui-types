import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { FloatLabelType, MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import { CustomMenuId } from '@shared/models/id/custom-menu-id';
import { CMAssigneeType, CMScope, CustomMenuInfo } from '@shared/models/custom-menu.models';
import { CustomMenuService } from '@core/http/custom-menu.service';
import * as i0 from "@angular/core";
export declare class CustomMenuAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private customMenuService;
    private fb;
    private dirty;
    private refresh$;
    selectCustomMenuFormGroup: UntypedFormGroup;
    modelValue: CustomMenuId | null;
    label: any;
    placeholder: string;
    private scopeValue;
    set scope(value: CMScope);
    get scope(): CMScope;
    assigneeType: CMAssigneeType;
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    subscriptSizing: SubscriptSizing;
    inlineField: boolean;
    requiredText: string;
    required: boolean;
    disabled: boolean;
    customMenuInput: ElementRef;
    filteredCustomMenus: Observable<Array<CustomMenuInfo>>;
    searchText: string;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, customMenuService: CustomMenuService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CustomMenuId | null): void;
    displayCustomMenuFn(customMenu?: CustomMenuInfo): string | undefined;
    onFocus(): void;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    private updateView;
    private fetchCustomMenus;
    private getCustomMenus;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuAutocompleteComponent, "tb-custom-menu-autocomplete", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "scope": { "alias": "scope"; "required": true; }; "assigneeType": { "alias": "assigneeType"; "required": false; }; "floatLabel": { "alias": "floatLabel"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "inlineField": { "alias": "inlineField"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["[tb-error]", "[tb-hint]"], false, never>;
}
