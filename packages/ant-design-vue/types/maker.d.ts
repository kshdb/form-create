import {CreatorHelper} from "@form-create/core";
import {CreatorAttrs, OptionAttrs, RuleAttrs} from "./config";

declare const makerFactory: CreatorHelper<OptionAttrs, CreatorAttrs, RuleAttrs>

export default interface ElmMaker {
    auto: typeof makerFactory;
    autoComplete: typeof makerFactory;
    cascader: typeof makerFactory;
    checkbox: typeof makerFactory;
    date: typeof makerFactory;
    datePicker: typeof makerFactory;
    dateRange: typeof makerFactory;
    dateTime: typeof makerFactory;
    dateTimeRange: typeof makerFactory;
    email: typeof makerFactory;
    file: typeof makerFactory;
    frame: typeof makerFactory;
    frameFile: typeof makerFactory;
    frameFileOne: typeof makerFactory;
    frameFiles: typeof makerFactory;
    frameImage: typeof makerFactory;
    frameImageOne: typeof makerFactory;
    frameImages: typeof makerFactory;
    frameInput: typeof makerFactory;
    frameInputOne: typeof makerFactory;
    frameInputs: typeof makerFactory;
    idate: typeof makerFactory;
    image: typeof makerFactory;
    input: typeof makerFactory;
    inputNumber: typeof makerFactory;
    month: typeof makerFactory;
    number: typeof makerFactory;
    password: typeof makerFactory;
    radio: typeof makerFactory;
    rate: typeof makerFactory;
    select: typeof makerFactory;
    selectMultiple: typeof makerFactory;
    selectOne: typeof makerFactory;
    slider: typeof makerFactory;
    sliderRange: typeof makerFactory;
    'switch': typeof makerFactory;
    text: typeof makerFactory;
    textarea: typeof makerFactory;
    time: typeof makerFactory;
    timePicker: typeof makerFactory;
    timeRange: typeof makerFactory;
    tree: typeof makerFactory;
    upload: typeof makerFactory;
    uploadFile: typeof makerFactory;
    uploadFileOne: typeof makerFactory;
    uploadImage: typeof makerFactory;
    uploadImageOne: typeof makerFactory;
    url: typeof makerFactory;
    year: typeof makerFactory;
    group: typeof makerFactory;
    object: typeof makerFactory;
    subForm: typeof makerFactory;
}