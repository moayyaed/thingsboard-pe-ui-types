/// <reference types="node" />
import { NgZone } from '@angular/core';
import { TelemetryPluginCmdsWrapper, TelemetryService, TelemetrySubscriber, WebsocketDataMsg } from '@app/shared/models/telemetry/telemetry.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { WebSocketSubject } from 'rxjs/webSocket';
import Timeout = NodeJS.Timeout;
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
export declare class TelemetryWebsocketService implements TelemetryService {
    private store;
    private authService;
    private ngZone;
    private reportService;
    private window;
    isActive: boolean;
    isOpening: boolean;
    isOpened: boolean;
    isReconnect: boolean;
    socketCloseTimer: Timeout;
    reconnectTimer: Timeout;
    lastCmdId: number;
    subscribersCount: number;
    subscribersMap: Map<number, TelemetrySubscriber>;
    reconnectSubscribers: Set<TelemetrySubscriber>;
    cmdsWrapper: TelemetryPluginCmdsWrapper;
    telemetryUri: string;
    dataStream: WebSocketSubject<TelemetryPluginCmdsWrapper | WebsocketDataMsg>;
    constructor(store: Store<AppState>, authService: AuthService, ngZone: NgZone, reportService: ReportService, window: Window);
    subscribe(subscriber: TelemetrySubscriber, skipPublish?: boolean): void;
    batchSubscribe(subscribers: TelemetrySubscriber[]): void;
    update(subscriber: TelemetrySubscriber): void;
    unsubscribe(subscriber: TelemetrySubscriber, skipPublish?: boolean): void;
    batchUnsubscribe(subscribers: TelemetrySubscriber[]): void;
    private nextCmdId;
    publishCommands(): void;
    private checkToClose;
    private reset;
    private closeSocket;
    private tryOpenSocket;
    private openSocket;
    private onOpen;
    private onMessage;
    private onError;
    private onClose;
    private showWsError;
    static ɵfac: i0.ɵɵFactoryDeclaration<TelemetryWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TelemetryWebsocketService>;
}
