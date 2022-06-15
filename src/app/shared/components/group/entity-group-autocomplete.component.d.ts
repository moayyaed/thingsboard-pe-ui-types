import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export declare class EntityGroupAutocompleteComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private store;
    translate: TranslateService;
    private entityGroupService;
    private fb;
    selectEntityGroupFormGroup: FormGroup;
    modelValue: string | null;
    groupType: EntityType;
    private ownerIdValue;
    get ownerId(): EntityId;
    set ownerId(value: EntityId);
    excludeGroupIds: Array<string>;
    excludeGroupAll: boolean;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityGroupLoaded: EventEmitter<EntityGroupInfo>;
    entityGroupInput: ElementRef<HTMLInputElement>;
    filteredEntityGroups: Observable<Array<EntityGroupInfo>>;
    allEntityGroups: Observable<Array<EntityGroupInfo>>;
    searchText: string;
    private pristine;
    private cleanFilteredEntityGroups;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityGroupService: EntityGroupService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    getCurrentEntityGroup(): EntityGroupInfo | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    reset(keepEntityGroup?: boolean): void;
    updateView(value: string | null, entityGroup: EntityGroupInfo | string | null): void;
    displayEntityGroupFn(entityGroup?: EntityGroupInfo): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<EntityGroupInfo>>;
    getEntityGroups(): Observable<Array<EntityGroupInfo>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupAutocompleteComponent, "tb-entity-group-autocomplete", never, { "groupType": "groupType"; "ownerId": "ownerId"; "excludeGroupIds": "excludeGroupIds"; "excludeGroupAll": "excludeGroupAll"; "placeholderText": "placeholderText"; "notFoundText": "notFoundText"; "requiredText": "requiredText"; "required": "required"; "disabled": "disabled"; }, { "entityGroupLoaded": "entityGroupLoaded"; }, never, never>;
}
