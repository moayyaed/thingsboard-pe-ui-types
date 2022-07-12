import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VersionCreationResult } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import { EntityId } from '@shared/models/id/entity-id';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EntityType } from '@shared/models/entity-type.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class EntityVersionCreateComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private entitiesVersionControlService;
    private cd;
    private translate;
    private fb;
    branch: string;
    entityId: EntityId;
    groupType: EntityType;
    entityName: string;
    onClose: (result: VersionCreationResult | null, branch: string | null) => void;
    onBeforeCreateVersion: () => Observable<any>;
    popoverComponent: TbPopoverComponent;
    createVersionFormGroup: FormGroup;
    entityTypes: typeof EntityType;
    resultMessage: string;
    versionCreateResult$: Observable<VersionCreationResult>;
    private versionCreateResultSubscription;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, cd: ChangeDetectorRef, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancel(): void;
    export(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityVersionCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityVersionCreateComponent, "tb-entity-version-create", never, { "branch": "branch"; "entityId": "entityId"; "groupType": "groupType"; "entityName": "entityName"; "onClose": "onClose"; "onBeforeCreateVersion": "onBeforeCreateVersion"; "popoverComponent": "popoverComponent"; }, {}, never, never>;
}
