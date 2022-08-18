import { IDashboardComponent } from '@home/models/dashboard-component.models';
import { DataSet, Datasource, DatasourceData, FormattedData, JsonSettingsSchema, Widget, WidgetActionDescriptor, WidgetActionSource, WidgetConfig, WidgetControllerDescriptor, WidgetType, widgetType, WidgetTypeDescriptor, WidgetTypeDetails, WidgetTypeParameters, WidgetExportType } from '@shared/models/widget.models';
import { Timewindow, WidgetTimewindow } from '@shared/models/time/time.models';
import { IAliasController, IStateController, IWidgetSubscription, IWidgetUtils, RpcApi, StateParams, SubscriptionEntityInfo, TimewindowFunctions, WidgetActionsApi, WidgetSubscriptionApi } from '@core/api/widget-api.models';
import { ChangeDetectorRef, ComponentFactory, Injector, NgZone, Type } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RafService } from '@core/services/raf.service';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetLayout } from '@shared/models/dashboard.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NotificationHorizontalPosition, NotificationType, NotificationVerticalPosition } from '@core/notification/notification.models';
import { AuthUser } from '@shared/models/user.model';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { CustomerService } from '@core/http/customer.service';
import { DashboardService } from '@core/http/dashboard.service';
import { UserService } from '@core/http/user.service';
import { AttributeService } from '@core/http/attribute.service';
import { EntityRelationService } from '@core/http/entity-relation.service';
import { EntityService } from '@core/http/entity.service';
import { DialogService } from '@core/services/dialog.service';
import { CustomDialogService } from '@home/components/widget/dialog/custom-dialog.service';
import { AuthService } from '@core/auth/auth.service';
import { ResourceService } from '@core/http/resource.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink } from '@shared/models/page/page-link';
import { SortOrder } from '@shared/models/page/sort-order';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EdgeService } from '@core/http/edge.service';
import * as RxJS from 'rxjs';
import * as RxJSOperators from 'rxjs/operators';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityId } from '@shared/models/id/entity-id';
import { ReportService } from '@core/http/report.service';
export interface IWidgetAction {
    name: string;
    icon: string;
    onAction: ($event: Event) => void;
}
export declare type ShowWidgetHeaderActionFunction = (ctx: WidgetContext, data: FormattedData[]) => boolean;
export interface WidgetHeaderAction extends IWidgetAction {
    displayName: string;
    descriptor: WidgetActionDescriptor;
    useShowWidgetHeaderActionFunction: boolean;
    showWidgetHeaderActionFunction: ShowWidgetHeaderActionFunction;
}
export interface WidgetAction extends IWidgetAction {
    show: boolean;
}
export interface IDashboardWidget {
    updateWidgetParams(): any;
}
export declare class WidgetContext {
    dashboard: IDashboardComponent;
    private dashboardWidget;
    private widget;
    parentDashboard?: IDashboardComponent;
    constructor(dashboard: IDashboardComponent, dashboardWidget: IDashboardWidget, widget: Widget, parentDashboard?: IDashboardComponent);
    get stateController(): IStateController;
    get aliasController(): IAliasController;
    get dashboardTimewindow(): Timewindow;
    get widgetConfig(): WidgetConfig;
    get settings(): any;
    get units(): string;
    get decimals(): number;
    set changeDetector(cd: ChangeDetectorRef);
    set containerChangeDetector(cd: ChangeDetectorRef);
    get currentUser(): AuthUser;
    authService: AuthService;
    deviceService: DeviceService;
    assetService: AssetService;
    entityViewService: EntityViewService;
    edgeService: EdgeService;
    customerService: CustomerService;
    dashboardService: DashboardService;
    userService: UserService;
    attributeService: AttributeService;
    entityRelationService: EntityRelationService;
    entityService: EntityService;
    entityGroupService: EntityGroupService;
    dialogs: DialogService;
    customDialog: CustomDialogService;
    resourceService: ResourceService;
    date: DatePipe;
    translate: TranslateService;
    http: HttpClient;
    sanitizer: DomSanitizer;
    router: Router;
    reportService: ReportService;
    private changeDetectorValue;
    private containerChangeDetectorValue;
    inited: boolean;
    destroyed: boolean;
    subscriptions: {
        [id: string]: IWidgetSubscription;
    };
    defaultSubscription: IWidgetSubscription;
    timewindowFunctions: TimewindowFunctions;
    controlApi: RpcApi;
    utils: IWidgetUtils;
    $container: JQuery<HTMLElement>;
    $containerParent: JQuery<HTMLElement>;
    width: number;
    height: number;
    $scope: IDynamicWidgetComponent;
    isEdit: boolean;
    isMobile: boolean;
    toastTargetId: string;
    widgetNamespace?: string;
    subscriptionApi?: WidgetSubscriptionApi;
    actionsApi?: WidgetActionsApi;
    activeEntityInfo?: SubscriptionEntityInfo;
    exportWidgetData: (widgetExportType: WidgetExportType) => void;
    customDataExport?: () => {
        [key: string]: any;
    }[] | RxJS.Observable<{
        [key: string]: any;
    }[]>;
    datasources?: Array<Datasource>;
    data?: Array<DatasourceData>;
    latestData?: Array<DatasourceData>;
    hiddenData?: Array<{
        data: DataSet;
    }>;
    timeWindow?: WidgetTimewindow;
    hideTitlePanel: boolean;
    widgetTitle?: string;
    widgetTitleTooltip?: string;
    customHeaderActions?: Array<WidgetHeaderAction>;
    widgetActions?: Array<WidgetAction>;
    servicesMap?: Map<string, Type<any>>;
    $injector?: Injector;
    ngZone?: NgZone;
    store?: Store<AppState>;
    private popoverComponents;
    rxjs: {
        audit: typeof RxJSOperators.audit;
        auditTime: typeof RxJSOperators.auditTime;
        buffer: typeof RxJSOperators.buffer;
        bufferCount: typeof RxJSOperators.bufferCount;
        bufferTime: typeof RxJSOperators.bufferTime;
        bufferToggle: typeof RxJSOperators.bufferToggle;
        bufferWhen: typeof RxJSOperators.bufferWhen;
        catchError: typeof RxJSOperators.catchError;
        combineAll: typeof RxJSOperators.combineAll;
        combineLatest: typeof RxJSOperators.combineLatest;
        concat: typeof RxJSOperators.concat;
        concatAll: typeof RxJSOperators.concatAll;
        concatMap: typeof RxJSOperators.concatMap;
        concatMapTo: typeof RxJSOperators.concatMapTo;
        count: typeof RxJSOperators.count;
        debounce: typeof RxJSOperators.debounce;
        debounceTime: typeof RxJSOperators.debounceTime;
        defaultIfEmpty: typeof RxJSOperators.defaultIfEmpty;
        delay: typeof RxJSOperators.delay;
        delayWhen: typeof RxJSOperators.delayWhen;
        dematerialize: typeof RxJSOperators.dematerialize;
        distinct: typeof RxJSOperators.distinct;
        distinctUntilChanged: typeof RxJSOperators.distinctUntilChanged;
        distinctUntilKeyChanged: typeof RxJSOperators.distinctUntilKeyChanged;
        elementAt: typeof RxJSOperators.elementAt;
        endWith: typeof RxJSOperators.endWith;
        every: typeof RxJSOperators.every;
        exhaust: typeof RxJSOperators.exhaust;
        exhaustMap: typeof RxJSOperators.exhaustMap;
        expand: typeof RxJSOperators.expand;
        filter: typeof RxJSOperators.filter;
        finalize: typeof RxJSOperators.finalize;
        find: typeof RxJSOperators.find;
        findIndex: typeof RxJSOperators.findIndex;
        first: typeof RxJSOperators.first;
        groupBy: typeof RxJSOperators.groupBy;
        ignoreElements: typeof RxJSOperators.ignoreElements;
        isEmpty: typeof RxJSOperators.isEmpty;
        last: typeof RxJSOperators.last;
        map: typeof RxJSOperators.map;
        mapTo: typeof RxJSOperators.mapTo;
        materialize: typeof RxJSOperators.materialize;
        max: typeof RxJSOperators.max;
        merge: typeof RxJSOperators.merge;
        mergeAll: typeof RxJSOperators.mergeAll;
        mergeMap: typeof RxJSOperators.mergeMap;
        flatMap: typeof RxJSOperators.mergeMap;
        mergeMapTo: typeof RxJSOperators.mergeMapTo;
        mergeScan: typeof RxJSOperators.mergeScan;
        min: typeof RxJSOperators.min;
        multicast: typeof RxJSOperators.multicast;
        observeOn: typeof RxJSOperators.observeOn;
        onErrorResumeNext: typeof RxJSOperators.onErrorResumeNext;
        pairwise: typeof RxJSOperators.pairwise;
        partition: typeof RxJSOperators.partition;
        pluck: typeof RxJSOperators.pluck;
        publish: typeof RxJSOperators.publish;
        publishBehavior: typeof RxJSOperators.publishBehavior;
        publishLast: typeof RxJSOperators.publishLast;
        publishReplay: typeof RxJSOperators.publishReplay;
        race: typeof RxJSOperators.race;
        reduce: typeof RxJSOperators.reduce;
        repeat: typeof RxJSOperators.repeat;
        repeatWhen: typeof RxJSOperators.repeatWhen;
        retry: typeof RxJSOperators.retry;
        retryWhen: typeof RxJSOperators.retryWhen;
        refCount: typeof RxJSOperators.refCount;
        sample: typeof RxJSOperators.sample;
        sampleTime: typeof RxJSOperators.sampleTime;
        scan: typeof RxJSOperators.scan;
        sequenceEqual: typeof RxJSOperators.sequenceEqual;
        share: typeof RxJSOperators.share;
        shareReplay: typeof RxJSOperators.shareReplay;
        single: typeof RxJSOperators.single;
        skip: typeof RxJSOperators.skip;
        skipLast: typeof RxJSOperators.skipLast;
        skipUntil: typeof RxJSOperators.skipUntil;
        skipWhile: typeof RxJSOperators.skipWhile;
        startWith: typeof RxJSOperators.startWith;
        subscribeOn: typeof RxJSOperators.subscribeOn;
        switchAll: typeof RxJSOperators.switchAll;
        switchMap: typeof RxJSOperators.switchMap;
        switchMapTo: typeof RxJSOperators.switchMapTo;
        take: typeof RxJSOperators.take;
        takeLast: typeof RxJSOperators.takeLast;
        takeUntil: typeof RxJSOperators.takeUntil;
        takeWhile: typeof RxJSOperators.takeWhile;
        tap: typeof RxJSOperators.tap;
        throttle: typeof RxJSOperators.throttle;
        throttleTime: typeof RxJSOperators.throttleTime;
        throwIfEmpty: typeof RxJSOperators.throwIfEmpty;
        timeInterval: typeof RxJSOperators.timeInterval;
        timeout: typeof RxJSOperators.timeout;
        timeoutWith: typeof RxJSOperators.timeoutWith;
        timestamp: typeof RxJSOperators.timestamp;
        toArray: typeof RxJSOperators.toArray;
        window: typeof RxJSOperators.window;
        windowCount: typeof RxJSOperators.windowCount;
        windowTime: typeof RxJSOperators.windowTime;
        windowToggle: typeof RxJSOperators.windowToggle;
        windowWhen: typeof RxJSOperators.windowWhen;
        withLatestFrom: typeof RxJSOperators.withLatestFrom;
        zip: typeof RxJSOperators.zip;
        zipAll: typeof RxJSOperators.zipAll;
        Observable: typeof RxJS.Observable;
        ConnectableObservable: typeof RxJS.ConnectableObservable;
        GroupedObservable: typeof RxJS.GroupedObservable;
        observable: string | symbol;
        Subject: typeof RxJS.Subject;
        BehaviorSubject: typeof RxJS.BehaviorSubject;
        ReplaySubject: typeof RxJS.ReplaySubject;
        AsyncSubject: typeof RxJS.AsyncSubject;
        asap: import("rxjs/internal/scheduler/AsapScheduler").AsapScheduler;
        asapScheduler: import("rxjs/internal/scheduler/AsapScheduler").AsapScheduler;
        async: import("rxjs/internal/scheduler/AsyncScheduler").AsyncScheduler;
        asyncScheduler: import("rxjs/internal/scheduler/AsyncScheduler").AsyncScheduler;
        queue: import("rxjs/internal/scheduler/QueueScheduler").QueueScheduler;
        queueScheduler: import("rxjs/internal/scheduler/QueueScheduler").QueueScheduler;
        animationFrame: import("rxjs/internal/scheduler/AnimationFrameScheduler").AnimationFrameScheduler;
        animationFrameScheduler: import("rxjs/internal/scheduler/AnimationFrameScheduler").AnimationFrameScheduler;
        VirtualTimeScheduler: typeof RxJS.VirtualTimeScheduler;
        VirtualAction: typeof RxJS.VirtualAction;
        Scheduler: typeof RxJS.Scheduler;
        Subscription: typeof RxJS.Subscription;
        Subscriber: typeof RxJS.Subscriber;
        Notification: typeof RxJS.Notification;
        NotificationKind: typeof RxJS.NotificationKind;
        pipe: typeof RxJS.pipe;
        noop: typeof RxJS.noop;
        identity: typeof RxJS.identity;
        isObservable: typeof RxJS.isObservable;
        ArgumentOutOfRangeError: import("rxjs/internal/util/ArgumentOutOfRangeError").ArgumentOutOfRangeErrorCtor;
        EmptyError: import("rxjs/internal/util/EmptyError").EmptyErrorCtor;
        ObjectUnsubscribedError: import("rxjs/internal/util/ObjectUnsubscribedError").ObjectUnsubscribedErrorCtor;
        UnsubscriptionError: import("rxjs/internal/util/UnsubscriptionError").UnsubscriptionErrorCtor;
        TimeoutError: import("rxjs/internal/util/TimeoutError").TimeoutErrorCtor;
        bindCallback: typeof RxJS.bindCallback;
        bindNodeCallback: typeof RxJS.bindNodeCallback;
        defer: typeof RxJS.defer;
        empty: typeof RxJS.empty;
        forkJoin: typeof RxJS.forkJoin;
        from: typeof RxJS.from;
        fromEvent: typeof RxJS.fromEvent;
        fromEventPattern: typeof RxJS.fromEventPattern;
        generate: typeof RxJS.generate;
        iif: typeof RxJS.iif;
        interval: typeof RxJS.interval;
        never: typeof RxJS.never;
        of: typeof RxJS.of;
        pairs: typeof RxJS.pairs;
        range: typeof RxJS.range;
        throwError: typeof RxJS.throwError;
        timer: typeof RxJS.timer;
        using: typeof RxJS.using;
        scheduled: typeof RxJS.scheduled;
        EMPTY: RxJS.Observable<never>;
        NEVER: RxJS.Observable<never>;
        config: {
            Promise: PromiseConstructorLike;
            useDeprecatedSynchronousErrorHandling: boolean;
        };
    };
    registerPopoverComponent(popoverComponent: TbPopoverComponent): void;
    updatePopoverPositions(): void;
    setPopoversHidden(hidden: boolean): void;
    showSuccessToast(message: string, duration?: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showInfoToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showWarnToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showErrorToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showToast(type: NotificationType, message: string, duration: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    hideToast(target?: string): void;
    detectChanges(updateWidgetParams?: boolean): void;
    detectContainerChanges(): void;
    updateWidgetParams(): void;
    updateAliases(aliasIds?: Array<string>): void;
    reset(): void;
    pageLink(pageSize: number, page?: number, textSearch?: string, sortOrder?: SortOrder): PageLink;
}
export interface IDynamicWidgetComponent {
    readonly ctx: WidgetContext;
    readonly errorMessages: string[];
    readonly $injector: Injector;
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse;
    raf: RafService;
    [key: string]: any;
}
export interface WidgetInfo extends WidgetTypeDescriptor, WidgetControllerDescriptor {
    widgetName: string;
    alias: string;
    typeSettingsSchema?: string | any;
    typeDataKeySettingsSchema?: string | any;
    typeLatestDataKeySettingsSchema?: string | any;
    image?: string;
    description?: string;
    componentFactory?: ComponentFactory<IDynamicWidgetComponent>;
}
export interface WidgetConfigComponentData {
    config: WidgetConfig;
    layout: WidgetLayout;
    widgetType: widgetType;
    typeParameters: WidgetTypeParameters;
    actionSources: {
        [actionSourceId: string]: WidgetActionSource;
    };
    isDataEnabled: boolean;
    settingsSchema: JsonSettingsSchema;
    dataKeySettingsSchema: JsonSettingsSchema;
    latestDataKeySettingsSchema: JsonSettingsSchema;
    settingsDirective: string;
    dataKeySettingsDirective: string;
    latestDataKeySettingsDirective: string;
}
export declare const MissingWidgetType: WidgetInfo;
export declare const ErrorWidgetType: WidgetInfo;
export interface WidgetTypeInstance {
    getSettingsSchema?: () => string;
    getDataKeySettingsSchema?: () => string;
    getLatestDataKeySettingsSchema?: () => string;
    typeParameters?: () => WidgetTypeParameters;
    useCustomDatasources?: () => boolean;
    actionSources?: () => {
        [actionSourceId: string]: WidgetActionSource;
    };
    onInit?: () => void;
    onDataUpdated?: () => void;
    onLatestDataUpdated?: () => void;
    onResize?: () => void;
    onEditModeChanged?: () => void;
    onMobileModeChanged?: () => void;
    onDestroy?: () => void;
}
export declare function detailsToWidgetInfo(widgetTypeDetailsEntity: WidgetTypeDetails): WidgetInfo;
export declare function toWidgetInfo(widgetTypeEntity: WidgetType): WidgetInfo;
export declare function toWidgetTypeDetails(widgetInfo: WidgetInfo, id: WidgetTypeId, tenantId: TenantId, bundleAlias: string, createdTime: number): WidgetTypeDetails;
export declare function toWidgetType(widgetInfo: WidgetInfo, id: WidgetTypeId, tenantId: TenantId, bundleAlias: string, createdTime: number): WidgetType;
export declare function updateEntityParams(params: StateParams, targetEntityParamName?: string, targetEntityId?: EntityId, entityName?: string, entityLabel?: string): void;
