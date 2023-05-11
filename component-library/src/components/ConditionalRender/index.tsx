import React, { ReactElement } from 'react';

export interface IOptionRequestResult {
    canGet: boolean;
    canPost: boolean;
    canPut: boolean;
    canPatch: boolean;
    canDelete: boolean;
}

export enum AccessOptions {
    canGet = 'canGet',
    canPost = 'canPost',
    canPut = 'canPut',
    canPatch = 'canPatch',
    canDelete = 'canDelete',
}

export interface IConditionalRenderProps {
    access: IOptionRequestResult | null;
    condition: AccessOptions;
    children: ReactElement | ReactElement[];
    negated?: boolean;
}

export default function ConditionalRender({
    access,
    condition,
    children,
    negated = false,
}: IConditionalRenderProps): ReactElement {
    if (!access) return null;

    switch (negated) {
        case true: {
            if (access[condition]) {
                return null;
            } else {
                return <>{children}</>;
            }
        }
        case false: {
            if (!access[condition]) {
                return null;
            } else {
                return <>{children}</>;
            }
        }
    }
}
