import { DestroyRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupColumn, EntityGroupColumnType, EntityGroupEntityField, EntityGroupSortOrder } from '@shared/models/entity-group.models';
import { EntityType } from '@shared/models/entity-type.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export interface EntityGroupColumnDialogData {
    isReadOnly: boolean;
    column: EntityGroupColumn;
    entityType: EntityType;
    columnTypes: EntityGroupColumnType[];
    entityFields: {
        [fieldName: string]: EntityGroupEntityField;
    };
}
export declare class EntityGroupColumnDialogComponent extends DialogComponent<EntityGroupColumnDialogComponent, EntityGroupColumn> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: EntityGroupColumnDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<EntityGroupColumnDialogComponent, EntityGroupColumn>;
    private widgetService;
    fb: UntypedFormBuilder;
    private destroyRef;
    columnFormGroup: UntypedFormGroup;
    columnType: typeof EntityGroupColumnType;
    isReadOnly: boolean;
    column: EntityGroupColumn;
    entityType: EntityType;
    columnTypes: EntityGroupColumnType[];
    entityFields: {
        [fieldName: string]: EntityGroupEntityField;
    };
    entityFieldKeys: string[];
    sortOrders: string[];
    entityGroupColumnTypeTranslations: Map<EntityGroupColumnType, string>;
    entityGroupSortOrderTranslations: Map<EntityGroupSortOrder, string>;
    submitted: boolean;
    functionScopeVariables: string[];
    constructor(store: Store<AppState>, router: Router, data: EntityGroupColumnDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<EntityGroupColumnDialogComponent, EntityGroupColumn>, widgetService: WidgetService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    private updateDisabledState;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupColumnDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupColumnDialogComponent, "tb-entity-group-column-dialog", never, {}, {}, never, never, false, never>;
}
