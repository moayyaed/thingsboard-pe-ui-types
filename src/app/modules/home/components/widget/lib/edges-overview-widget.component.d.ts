import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { LoadNodesCallback } from '@shared/components/nav-tree.component';
import { EntityService } from '@core/http/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { UserPermissionsService } from "@core/http/user-permissions.service";
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export declare class EdgesOverviewWidgetComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private entityService;
    private entityGroupService;
    private translate;
    private utils;
    private userPermissionsService;
    ctx: WidgetContext;
    toastTargetId: string;
    edgeIsDatasource: boolean;
    private widgetConfig;
    private subscription;
    private datasources;
    private settings;
    private nodeIdCounter;
    constructor(store: Store<AppState>, entityService: EntityService, entityGroupService: EntityGroupService, translate: TranslateService, utils: UtilsService, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    loadNodes: LoadNodesCallback;
    private initializeConfig;
    private updateTitle;
    private loadNodesForEdge;
    private getAllowedEntityGroupTypes;
    private createEdgeGroupsNode;
    private entityGroupsToNodes;
    private createEntityGroupsNode;
    private entitiesToNodes;
    private createEntityGroupNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgesOverviewWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgesOverviewWidgetComponent, "tb-edges-overview-widget", never, { "ctx": "ctx"; }, {}, never, never>;
}
