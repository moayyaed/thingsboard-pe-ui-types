import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { ClaimRequest, ClaimResult, Device, DeviceCredentials, DeviceInfo, DeviceInfoQuery, DeviceSearchQuery, PublishTelemetryCommand } from '@shared/models/device.models';
import { EntitySubtype } from '@shared/models/entity-type.models';
import { BulkImportRequest, BulkImportResult } from '@shared/import-export/import-export.models';
import { PersistentRpc, RpcStatus } from '@shared/models/rpc.models';
import { ResourcesService } from '@core/services/resources.service';
import * as i0 from "@angular/core";
export declare class DeviceService {
    private http;
    private resourcesService;
    constructor(http: HttpClient, resourcesService: ResourcesService);
    getDeviceInfosByQuery(deviceInfoQuery: DeviceInfoQuery, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getTenantDevices(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<Device>>;
    getCustomerDevices(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<Device>>;
    getDevice(deviceId: string, config?: RequestConfig): Observable<Device>;
    getDevices(deviceIds: Array<string>, config?: RequestConfig): Observable<Array<Device>>;
    getUserDevices(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<Device>>;
    getAllDeviceInfos(includeCustomers: boolean, pageLink: PageLink, deviceProfileId?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getCustomerDeviceInfos(includeCustomers: boolean, customerId: string, pageLink: PageLink, deviceProfileId?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getDeviceInfo(deviceId: string, config?: RequestConfig): Observable<DeviceInfo>;
    saveDevice(device: Device, entityGroupIds?: string | string[], config?: RequestConfig): Observable<Device>;
    saveDeviceWithCredentials(device: Device, credentials: DeviceCredentials, entityGroupIds?: string | string[], config?: RequestConfig): Observable<Device>;
    deleteDevice(deviceId: string, config?: RequestConfig): Observable<Object>;
    getDeviceTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    getDeviceCredentials(deviceId: string, sync?: boolean, config?: RequestConfig): Observable<DeviceCredentials>;
    saveDeviceCredentials(deviceCredentials: DeviceCredentials, config?: RequestConfig): Observable<DeviceCredentials>;
    sendOneWayRpcCommand(deviceId: string, requestBody: any, config?: RequestConfig): Observable<any>;
    sendTwoWayRpcCommand(deviceId: string, requestBody: any, config?: RequestConfig): Observable<any>;
    getPersistedRpc(rpcId: string, fullResponse?: boolean, config?: RequestConfig): Observable<PersistentRpc>;
    deletePersistedRpc(rpcId: string, config?: RequestConfig): Observable<PersistentRpc>;
    getPersistedRpcRequests(deviceId: string, pageLink: PageLink, rpcStatus?: RpcStatus, config?: RequestConfig): Observable<PageData<PersistentRpc>>;
    findByQuery(query: DeviceSearchQuery, config?: RequestConfig): Observable<Array<Device>>;
    findByName(deviceName: string, config?: RequestConfig): Observable<Device>;
    claimDevice(deviceName: string, claimRequest: ClaimRequest, config?: RequestConfig): Observable<ClaimResult>;
    unclaimDevice(deviceName: string, config?: RequestConfig): Observable<Object>;
    bulkImportDevices(entitiesData: BulkImportRequest, config?: RequestConfig): Observable<BulkImportResult>;
    getDevicePublishTelemetryCommands(deviceId: string, config?: RequestConfig): Observable<PublishTelemetryCommand>;
    downloadGatewayDockerComposeFile(deviceId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceService>;
}
