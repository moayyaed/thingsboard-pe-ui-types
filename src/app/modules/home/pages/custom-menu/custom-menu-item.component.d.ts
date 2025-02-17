import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { CMItemLinkType, CMItemType, CMScope, CustomMenuItem } from '@shared/models/custom-menu.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class CustomMenuItemComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private store;
    private destroyRef;
    CMItemType: typeof CMItemType;
    CMItemLinkType: typeof CMItemLinkType;
    cmItemTypes: CMItemType[];
    cmItemTypeTranslations: Map<CMItemType, string>;
    cmLinkTypes: CMItemLinkType[];
    cmLinkTypeTranslations: Map<CMItemLinkType, string>;
    disabled: boolean;
    scope: CMScope;
    menuItemTypeEditable: boolean;
    linkTypeEditable: boolean;
    modelValue: CustomMenuItem;
    menuItemFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CustomMenuItem): void;
    validate(_c: UntypedFormControl): {
        invalidCustomMenuItem: boolean;
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuItemComponent, "tb-custom-menu-item", never, { "disabled": { "alias": "disabled"; "required": false; }; "scope": { "alias": "scope"; "required": false; }; "menuItemTypeEditable": { "alias": "menuItemTypeEditable"; "required": false; }; }, {}, never, never, false, never>;
}
