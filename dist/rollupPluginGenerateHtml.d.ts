interface IGenerateHtmlOptions {
    charset?: string;
    id?: string;
    lang?: string;
    path?: string;
    publicPath?: string;
    title?: string;
}
export declare const generateHtml: (options: IGenerateHtmlOptions) => object;
export {};
