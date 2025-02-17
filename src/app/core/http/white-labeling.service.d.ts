import { RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginWhiteLabelingParams, Palette, WhiteLabelingParams } from '@shared/models/white-labeling.models';
import { Observable } from 'rxjs';
import { ColorPalette } from '@shared/models/material.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestConfig } from '@core/http/http-utils';
import { MailTemplatesSettings } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class WhiteLabelingService {
    private http;
    private store;
    private sanitizer;
    private document;
    private changeWhiteLabelingSubject;
    private loginLogo;
    private loginLogoHeight;
    private loginPageBackgroundColor;
    private loginShowNameVersion;
    private loginDarkForeground;
    private showNameBottom;
    private platformName;
    private platformVersion;
    loginLogo$: Observable<string>;
    loginLogoHeight$: Observable<number>;
    loginPageBackgroundColor$: Observable<string>;
    loginShowNameVersion$: Observable<boolean>;
    loginDarkForeground$: Observable<boolean>;
    showNameBottom$: Observable<boolean>;
    platformName$: Observable<string>;
    platformVersion$: Observable<string>;
    private currentWLParams;
    private currentLoginWLParams;
    private loginWlParams;
    private userWlParams;
    isUserWlMode: boolean;
    private isPreviewWlMode;
    primaryPalette: Palette;
    accentPalette: Palette;
    private loginPrimaryPalette;
    private loginAccentPalette;
    private renderer;
    private readonly ROOT;
    constructor(http: HttpClient, store: Store<AppState>, sanitizer: DomSanitizer, rendererFactory: RendererFactory2, document: Document);
    logoImageUrl(): string;
    logoImageUrl$(): Observable<string>;
    logoImageHeight(): number;
    logoImageHeight$(): Observable<number>;
    appTitle(): string;
    appTitle$(): Observable<string>;
    faviconUrl(): string;
    getPrimaryPalette(): ColorPalette;
    getPrimaryColor(hue: string): string;
    getAccentPalette(): ColorPalette;
    getLoginPrimaryPalette(): ColorPalette;
    getLoginAccentPalette(): ColorPalette;
    getDocsUrl(): string;
    getHelpLinkBaseUrl(): string;
    getHelpLinkBaseUrl$(): Observable<string>;
    getUiHelpBaseUrl(): string;
    getUiHelpBaseUrl$(): Observable<string>;
    isEnableHelpLinks(): boolean;
    isEnableHelpLinks$(): Observable<boolean>;
    isShowVersion(): boolean;
    isShowVersion$(): Observable<boolean>;
    getPlatformName(): string;
    getPlatformName$(): Observable<string>;
    getPlatformVersion(): string;
    getPlatformVersion$(): Observable<string>;
    getHideConnectivityDialog(): boolean;
    loadLoginWhiteLabelingParams(): Observable<LoginWhiteLabelingParams>;
    private onLoginWlParamsLoaded;
    loadUserWhiteLabelingParams(): Observable<WhiteLabelingParams>;
    private onUserWlParamsLoaded;
    whiteLabelPreview(wLParams: WhiteLabelingParams): Observable<WhiteLabelingParams>;
    cancelWhiteLabelPreview(): Observable<any>;
    getCurrentWhiteLabelParams(): Observable<WhiteLabelingParams>;
    getCurrentLoginWhiteLabelParams(): Observable<LoginWhiteLabelingParams>;
    saveWhiteLabelParams(wlParams: WhiteLabelingParams): Observable<WhiteLabelingParams>;
    saveLoginWhiteLabelParams(wlParams: LoginWhiteLabelingParams): Observable<LoginWhiteLabelingParams>;
    deleteCurrentLoginWhiteLabelParams(config?: RequestConfig): Observable<void>;
    deleteCurrentWhiteLabelParams(config?: RequestConfig): Observable<WhiteLabelingParams>;
    isWhiteLabelingAllowed(): Observable<boolean>;
    isCustomerWhiteLabelingAllowed(): Observable<boolean>;
    saveMailTemplates(mailTemplates: MailTemplatesSettings, config?: RequestConfig): Observable<MailTemplatesSettings>;
    getMailTemplates(systemByDefault?: boolean, config?: RequestConfig): Observable<MailTemplatesSettings>;
    private wlChanged;
    private notifyWlChanged;
    private getCurrentWlParams;
    private setLoginWlParams;
    private setWlParams;
    private applyThemePalettes;
    private applyLoginThemePalettes;
    private applyLoginWlParams;
    private configurePalette;
    private applyThemeColors;
    private applyPaletteColors;
    private asWhiteLabelingObservable;
    static ɵfac: i0.ɵɵFactoryDeclaration<WhiteLabelingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WhiteLabelingService>;
}
