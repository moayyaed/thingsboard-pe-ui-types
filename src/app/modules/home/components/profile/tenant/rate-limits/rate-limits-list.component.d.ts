import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { RateLimits } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsListComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    disabled: boolean;
    rateLimitsListFormGroup: FormGroup;
    rateLimitsArray: Array<RateLimits>;
    private valueChangeSubscription;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    removeRateLimits(index: number): void;
    addRateLimits(): void;
    get rateLimitsFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(rateLimits: string): void;
    updateView(rateLimitsArray: Array<RateLimits>): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsListComponent, "tb-rate-limits-list", never, { "disabled": "disabled"; }, {}, never, never>;
}
