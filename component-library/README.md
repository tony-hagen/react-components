# Tony's timesavers

This is a component library to save me time while working on react projects.
Documentation for the components are generated with ChatGPT

## Components

### ConditionalRender
Description:
The ConditionalRender function is a custom React component that provides a way to conditionally render its children based on the access permissions specified in the access object. The function takes in the access object, condition, children, and an optional negated boolean value as props.

Parameters:
 - **access**: An object of type IOptionRequestResult or null. The object represents the permissions that are required to render the children. If the value of access is null, then nothing is rendered.
 - **condition**: An enum value of type AccessOptions. This value specifies which permission is required to render the children.
 - **children**: A single or multiple React elements that will be rendered conditionally based on the access and condition props.
 - **negated**: An optional boolean value that is used to negate the condition for rendering the children. If negated is true, then the children are rendered when the specified permission is not present in the access object. If negated is false, then the children are rendered only when the specified permission is present in the access object. The default value of negated is false.

Return Value:
The ConditionalRender function returns a ReactElement that represents the conditional rendering of its children based on the access permissions specified in the access object.

Example usage: 

    import React from 'react';
    import ConditionalRender, { AccessOptions, IConditionalRenderProps } from './ConditionalRender';

    function App() {
    const access: IConditionalRenderProps['access'] = {
        canGet: true,
        canPost: false,
        canPut: true,
        canPatch: false,
        canDelete: true,
    };

    return (
        <div>
        <ConditionalRender access={access} condition={AccessOptions.canGet}>
            <p>You have permission to GET the data</p>
        </ConditionalRender>
        <ConditionalRender access={access} condition={AccessOptions.canPost}>
            <p>You have permission to POST the data</p>
        </ConditionalRender>
        <ConditionalRender access={access} condition={AccessOptions.canPut}>
            <p>You have permission to PUT the data</p>
        </ConditionalRender>
        <ConditionalRender access={access} condition={AccessOptions.canPatch}>
            <p>You have permission to PATCH the data</p>
        </ConditionalRender>
        <ConditionalRender access={access} condition={AccessOptions.canDelete} negated={true}>
            <p>You don't have permission to DELETE the data</p>
        </ConditionalRender>
        </div>
    );
    }

In the example above, the **access** object contains boolean values for each permission that is required to access a specific endpoint. The **ConditionalRender** component is used to render each permission based on the values in the **access** object. If the permission is not present in the **access** object, then nothing is rendered. If the permission is present and **negated** is false, then the corresponding **children** are rendered. If **negated** is true, then the corresponding **children** are rendered only when the permission is not present in the **access** object.

## Hooks

### useAsyncFetch
The **useAsyncFetch** hook is a custom React hook that can be used for making GET requests to an API endpoint asynchronously.

**Parameters:**
 - **requestFunction**: a function that returns a Promise representing the GET request to the API endpoint. The function should return null if the request should not be made (e.g. if a condition is not met).
 - **skip**: an optional boolean parameter indicating whether the initial fetch should be skipped. If skip is true, the hook will immediately set the status to ComponentStatus.loaded. Otherwise, the hook will fetch the data when the component mounts.

**Return Value**
The useAsyncFetch hook returns a tuple containing four elements:

 - **error** - an object representing any error that occurred during the request, or null if there was no error.
 - **status** - an enum value indicating the status of the request, which can be one of the following:
ComponentStatus.**fetching** - the request is currently being fetched.
ComponentStatus.**loaded** - the request has been successfully fetched.
ComponentStatus.**error** - an error occurred while fetching the request.
ComponentStatus.**reFetching** - the request is being re-fetched after an error occurred.
 - **data** - the data returned by the API endpoint, or null if the data has not yet been fetched.
 - **retry** - a function that can be called to retry the request if an error occurred.

## Utility functions

### String utils
 - isStringNullOrWhiteSpace - Checks if string is null or whitespace
 - capitalizeFirstLetter - Capitalizes first letter of string
 - joinStringsWithAnd - Joins a list of strings into one string separated with comma and 'and'