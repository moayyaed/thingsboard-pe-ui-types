import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Dashboard } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import * as i0 from "@angular/core";
export declare class DashboardFormComponent extends GroupEntityComponent<Dashboard> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    private dashboardService;
    protected entityValue: Dashboard;
    protected entitiesTableConfigValue: GroupEntityTableConfig<Dashboard>;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    isPublic: boolean;
    publicLink: string;
    constructor(store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, entityValue: Dashboard, entitiesTableConfigValue: GroupEntityTableConfig<Dashboard>, fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: Dashboard): FormGroup;
    updateForm(entity: Dashboard): void;
    prepareFormValue(formValue: any): any;
    onPublicLinkCopied($event: any): void;
    onDashboardIdCopied($event: any): void;
    private updateFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardFormComponent, "tb-dashboard-form", never, {}, {}, never, never>;
}
