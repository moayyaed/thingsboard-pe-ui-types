import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, Renderer2, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
import { HelpService } from '@core/services/help.service';
import { MarkdownService } from 'ngx-markdown';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import * as i0 from "@angular/core";
export declare class TbMarkdownComponent implements OnChanges {
    private help;
    private cd;
    private zone;
    markdownService: MarkdownService;
    private sharedModule;
    private dynamicComponentFactoryService;
    private renderer;
    markdownContainer: ViewContainerRef;
    fallbackElement: ElementRef<HTMLElement>;
    data: string | undefined;
    context: any;
    additionalCompileModules: Type<any>[];
    markdownClass: string | undefined;
    containerClass: string | undefined;
    style: {
        [klass: string]: any;
    };
    applyDefaultMarkdownStyle: boolean;
    additionalStyles: string[];
    get lineNumbers(): boolean;
    set lineNumbers(value: boolean);
    get fallbackToPlainMarkdown(): boolean;
    set fallbackToPlainMarkdown(value: boolean);
    usePlainMarkdown: boolean;
    ready: EventEmitter<void>;
    private lineNumbersValue;
    private fallbackToPlainMarkdownValue;
    isMarkdownReady: boolean;
    error: any;
    private tbMarkdownInstanceComponentRef;
    private tbMarkdownInstanceComponentType;
    constructor(help: HelpService, cd: ChangeDetectorRef, zone: NgZone, markdownService: MarkdownService, sharedModule: Type<any>, dynamicComponentFactoryService: DynamicComponentFactoryService, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    private render;
    private handleError;
    private plainMarkdown;
    private handlePlugins;
    private setPluginClass;
    private handleImages;
    private sanitizeCurlyBraces;
    private destroyMarkdownInstanceResources;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbMarkdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbMarkdownComponent, "tb-markdown", never, { "data": "data"; "context": "context"; "additionalCompileModules": "additionalCompileModules"; "markdownClass": "markdownClass"; "containerClass": "containerClass"; "style": "style"; "applyDefaultMarkdownStyle": "applyDefaultMarkdownStyle"; "additionalStyles": "additionalStyles"; "lineNumbers": "lineNumbers"; "fallbackToPlainMarkdown": "fallbackToPlainMarkdown"; "usePlainMarkdown": "usePlainMarkdown"; }, { "ready": "ready"; }, never, never, false, never>;
}
