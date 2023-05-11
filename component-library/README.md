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


## Utility functions

### String utils
 - isStringNullOrWhiteSpace
 - capitalizeFirstLetter
 - joinStringsWithAnd