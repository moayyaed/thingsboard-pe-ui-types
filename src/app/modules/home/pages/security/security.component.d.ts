import { OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ClipboardService } from 'ngx-clipboard';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { TwoFactorAuthProviderType } from '@shared/models/two-factor-auth.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { AuthService } from '@core/auth/auth.service';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class SecurityComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private translate;
    private twoFaService;
    dialog: MatDialog;
    dialogService: DialogService;
    fb: FormBuilder;
    private datePipe;
    private userPermissionsService;
    private authService;
    private clipboardService;
    private readonly destroy$;
    private accountConfig;
    twoFactorAuth: FormGroup;
    changePassword: FormGroup;
    user: User;
    passwordPolicy: UserPasswordPolicy;
    allowTwoFactorProviders: TwoFactorAuthProviderType[];
    providersData: Map<TwoFactorAuthProviderType, import("@shared/models/two-factor-auth.models").TwoFactorAuthProviderData>;
    twoFactorAuthProviderType: typeof TwoFactorAuthProviderType;
    useByDefault: TwoFactorAuthProviderType;
    activeSingleProvider: boolean;
    get jwtToken(): string;
    get jwtTokenExpiration(): string;
    constructor(store: Store<AppState>, route: ActivatedRoute, translate: TranslateService, twoFaService: TwoFactorAuthenticationService, dialog: MatDialog, dialogService: DialogService, fb: FormBuilder, datePipe: DatePipe, userPermissionsService: UserPermissionsService, authService: AuthService, clipboardService: ClipboardService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private buildTwoFactorForm;
    private twoFactorLoad;
    private processTwoFactorAuthConfig;
    private buildChangePasswordForm;
    private loadPasswordPolicy;
    private passwordStrengthValidator;
    private samePasswordValidation;
    trackByProvider(i: number, provider: TwoFactorAuthProviderType): TwoFactorAuthProviderType;
    copyToken(): void;
    confirm2FAChange(event: MouseEvent, provider: TwoFactorAuthProviderType): void;
    private createdNewAuthConfig;
    changeDefaultProvider(event: MouseEvent, provider: TwoFactorAuthProviderType): void;
    generateNewBackupCode(): void;
    providerDataInfo(provider: TwoFactorAuthProviderType): {
        info: any;
    };
    onChangePassword(form: FormGroupDirective): void;
    discardChanges(form: FormGroupDirective, event?: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecurityComponent, "tb-security", never, {}, {}, never, never>;
}
