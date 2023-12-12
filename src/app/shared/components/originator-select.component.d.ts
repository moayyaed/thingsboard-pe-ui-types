import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import * as i0 from "@angular/core";
export declare class OriginatorSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    translate: TranslateService;
    private fb;
    originatorFormGroup: UntypedFormGroup;
    modelValue: EntityId | null;
    allowedEntityTypes: Array<EntityType>;
    singleEntityText: string;
    groupOfEntitiesText: string;
    entitiesGroupOwnerText: string;
    headerOptions: {
        name: any;
        value: string;
    }[];
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    currentGroupType: EventEmitter<EntityType>;
    currentUser: import("../public-api").AuthUser;
    private loadData;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityId | null): void;
    entityGroupLoaded(entityGroup: EntityGroupInfo): void;
    updateView(value: {
        originator: string;
        entityOriginatorId: EntityId;
        groupOriginatorId: EntityId;
    } | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OriginatorSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OriginatorSelectComponent, "tb-originator-select", never, { "allowedEntityTypes": "allowedEntityTypes"; "singleEntityText": "singleEntityText"; "groupOfEntitiesText": "groupOfEntitiesText"; "entitiesGroupOwnerText": "entitiesGroupOwnerText"; "required": "required"; "disabled": "disabled"; }, { "currentGroupType": "currentGroupType"; }, never, never, false, never>;
}
