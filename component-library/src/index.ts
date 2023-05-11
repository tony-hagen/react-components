import ConditionalRender, {IOptionRequestResult, AccessOptions, IConditionalRenderProps} from './components/ConditionalRender'
import { isStringNullOrWhiteSpace, capitalizeFirstLetter, joinStringsWithAnd } from './utils/text'
import useAsyncFetch, {ComponentStatus, AsyncDataHookResult} from './hooks/useAsyncFetch';


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
    AsyncDataHookResult
}

//Util functions
export {
    isStringNullOrWhiteSpace, 
    capitalizeFirstLetter, 
    joinStringsWithAnd,
}