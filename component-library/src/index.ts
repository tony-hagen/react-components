import ConditionalRender, {IOptionRequestResult, AccessOptions, IConditionalRenderProps} from './components/ConditionalRender'
import { isStringNullOrWhiteSpace, capitalizeFirstLetter, joinStringsWithAnd } from './utils/text'
import useAsyncFetch, {ComponentStatus, AsyncDataHookResult} from './hooks/useAsyncFetch';
import {isValidDate, FormatDateOptions, formatDateToString, sortByDate} from './utils/date'
import {checkEquality, checkObjectEquality} from './utils/object'


//Components
export {
    ConditionalRender,
};

//Hooks
export {
    useAsyncFetch,
}

//Types
export {
    IConditionalRenderProps,
    IOptionRequestResult,
    AccessOptions,
    ComponentStatus,
    AsyncDataHookResult,
    FormatDateOptions
}

//Util functions
export {
    isStringNullOrWhiteSpace, 
    capitalizeFirstLetter, 
    joinStringsWithAnd,
    formatDateToString,
    sortByDate,
    isValidDate,
    checkEquality,
    checkObjectEquality
}