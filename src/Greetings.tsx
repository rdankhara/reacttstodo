import React from 'react';

type GreetingProps = { 
    name: string
}

export const Greetings: React.SFC<GreetingProps> = ({name}) => <div>Hello {name}</div>