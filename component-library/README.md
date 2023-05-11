# Tony's timesavers

This is a component library to save me time while working on react projects.
Documentation for the components are generated with ChatGPT

## Components

### ConditionalRender
Description:
The ConditionalRender function is a custom React component that provides a way to conditionally render its children based on the access permissions specified in the access object. The function takes in the access object, condition, children, and an optional negated boolean value as props.

Parameters:
 - access: An object of type IOptionRequestResult or null. The object represents the permissions that are required to render the children. If the value of access is null, then nothing is rendered.
 - condition: An enum value of type AccessOptions. This value specifies which permission is required to render the children.
 - children: A single or multiple React elements that will be rendered conditionally based on the access and condition props.
 - negated: An optional boolean value that is used to negate the condition for rendering the children. If negated is true, then the children are rendered when the specified permission is not present in the access object. If negated is false, then the children are rendered only when the specified permission is present in the access object. The default value of negated is false.

Return Value:
The ConditionalRender function returns a ReactElement that represents the conditional rendering of its children based on the access permissions specified in the access object.

