import { DestroyRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { SchedulerEvent } from '@shared/models/scheduler-event.models';
import { SchedulerEventService } from '@core/http/scheduler-event.service';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import * as i0 from "@angular/core";
export interface SchedulerEventDialogData {
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    isAdd: boolean;
    readonly: boolean;
    schedulerEvent: SchedulerEvent;
    defaultEventType: string;
}
export declare class SchedulerEventDialogComponent extends DialogComponent<SchedulerEventDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: SchedulerEventDialogData;
    private schedulerEventService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<SchedulerEventDialogComponent, boolean>;
    fb: UntypedFormBuilder;
    private destroyRef;
    schedulerEventFormGroup: UntypedFormGroup;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    isAdd: boolean;
    readonly: boolean;
    schedulerEvent: SchedulerEvent;
    defaultEventType: string;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: SchedulerEventDialogData, schedulerEventService: SchedulerEventService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<SchedulerEventDialogComponent, boolean>, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    private deepTrim;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventDialogComponent, "tb-scheduler-event-dialog", never, {}, {}, never, never, false, never>;
}
