import { Ace } from 'ace-builds';
export type tbMetaType = 'object' | 'function' | 'service' | 'property' | 'argument' | 'constant' | 'module';
export type TbEditorCompletions = {
    [name: string]: TbEditorCompletion;
};
export interface FunctionArgType {
    type?: string;
    description?: string;
}
export interface FunctionArg extends FunctionArgType {
    name: string;
    type?: string;
    description?: string;
    optional?: boolean;
}
export interface TbEditorCompletion {
    meta: tbMetaType;
    description?: string;
    type?: string;
    args?: FunctionArg[];
    return?: FunctionArgType;
    children?: TbEditorCompletions;
}
interface TbEditorAceCompletion extends Ace.SnippetCompletion {
    isTbEditorAceCompletion: true;
    title: string;
    description?: string;
    type?: string;
    args?: FunctionArg[];
    return?: FunctionArgType;
}
export declare class TbEditorCompleter implements Ace.Completer {
    private editorCompletions;
    identifierRegexps: RegExp[];
    constructor(editorCompletions: TbEditorCompletions);
    updateCompletions(completions: TbEditorCompletions): void;
    getCompletions(editor: Ace.Editor, session: Ace.EditSession, position: Ace.Point, prefix: string, callback: Ace.CompleterCallback): void;
    private resolvePath;
    private prepareCompletions;
    private toAceCompletionsList;
    private toAceCompletion;
    getDocTooltip(completion: TbEditorAceCompletion): TbEditorAceCompletion;
    private createDocHTML;
}
export {};
