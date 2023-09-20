import { AlarmAction, AlarmAssignmentAction, ComponentLifecycleEvent, DeviceEvent, NotificationRule, TriggerType } from '@shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '@core/http/notification.service';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { TranslateService } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { ApiFeature, ApiUsageStateValue } from '@shared/models/api-usage.models';
import { StringItemsOption } from '@shared/components/string-items-list.component';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface RuleNotificationDialogData {
    rule?: NotificationRule;
    isAdd?: boolean;
    isCopy?: boolean;
    readonly?: boolean;
}
export declare class RuleNotificationDialogComponent extends DialogComponent<RuleNotificationDialogComponent, NotificationRule> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RuleNotificationDialogComponent, NotificationRule>;
    data: RuleNotificationDialogData;
    private breakpointObserver;
    private fb;
    translate: TranslateService;
    private notificationService;
    private dialog;
    addNotificationRule: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    ruleNotificationForm: FormGroup;
    alarmTemplateForm: FormGroup;
    deviceInactivityTemplateForm: FormGroup;
    entityActionTemplateForm: FormGroup;
    alarmCommentTemplateForm: FormGroup;
    alarmAssignmentTemplateForm: FormGroup;
    ruleEngineEventsTemplateForm: FormGroup;
    entitiesLimitTemplateForm: FormGroup;
    apiUsageLimitTemplateForm: FormGroup;
    integrationEventsTemplateForm: FormGroup;
    newPlatformVersionTemplateForm: FormGroup;
    rateLimitsTemplateForm: FormGroup;
    triggerType: typeof TriggerType;
    triggerTypes: TriggerType[];
    triggerTypeTranslationMap: Map<TriggerType, string>;
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    alarmSeverities: AlarmSeverity[];
    alarmActions: AlarmAction[];
    alarmActionTranslationMap: Map<AlarmAction, string>;
    alarmAssignmentActions: AlarmAssignmentAction[];
    alarmAssignmentActionTranslationMap: Map<AlarmAssignmentAction, string>;
    componentLifecycleEvents: ComponentLifecycleEvent[];
    componentLifecycleEventTranslationMap: Map<ComponentLifecycleEvent, string>;
    deviceEvents: DeviceEvent[];
    deviceEventTranslationMap: Map<DeviceEvent, string>;
    apiUsageStateValues: ApiUsageStateValue[];
    apiUsageStateValueTranslationMap: Map<ApiUsageStateValue, string>;
    apiFeatures: ApiFeature[];
    apiFeatureTranslationMap: Map<ApiFeature, string>;
    limitedApis: StringItemsOption[];
    integrationTypes: IntegrationType[];
    integrationTypeInfoMap: Map<IntegrationType, import("@shared/models/integration.models").IntegrationTypeInfo>;
    entityType: typeof EntityType;
    isAdd: boolean;
    allowEntityTypeForEntitiesLimit: EntityType[];
    selectedIndex: number;
    dialogTitle: string;
    private destroy$;
    private readonly ruleNotification;
    private triggerTypeFormsMap;
    private authState;
    private authUser;
    private _allowEntityTypeForEntityAction;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RuleNotificationDialogComponent, NotificationRule>, data: RuleNotificationDialogData, breakpointObserver: BreakpointObserver, fb: FormBuilder, translate: TranslateService, notificationService: NotificationService, dialog: MatDialog);
    ngOnDestroy(): void;
    changeStep($event: StepperSelectionEvent): void;
    backStep(): void;
    nextStep(): void;
    nextStepLabel(): string;
    get maxStepperIndex(): number;
    private add;
    private allValid;
    cancel(): void;
    createTarget($event: Event, button: MatButton): void;
    countRecipientsChainConfig(): number;
    formatLabel(value: number): string;
    private isSysAdmin;
    private allowTriggerTypes;
    get allowEntityTypeForEntityAction(): EntityType[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNotificationDialogComponent, "tb-rule-notification-dialog", never, {}, {}, never, never, false, never>;
}
