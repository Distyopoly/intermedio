# Authentication

Authentication is built upon [next-auth](https://next-auth.js.org/). 

## Configuration

### Configured Providers

- Guest Provider (Credentials Provider)
- Google Provider (OAuth Provider)

## UI

### Buttons

- Login Button
- Signout Button

### Guards

#### Authenticated Guard Server

> name: `AuthenticatedGuardServer`
>
> props: `children, notAuthenticatedComponent?`

A server component that checks if the user is authenticated. If not, renders the `notAuthenticatedComponent` prop.

#### Login Required

> name: `LoginRequired`
>
> props: `children, message?`

Use this component to wrap major components requiring authentication.

Wrapper around [Authenticated Guard](#authenticated-guard-server), with a predefined not authenticated component, showing an alert with login button.

#### Authenticated Guard Client

A client component version of `AuthenticatedGuardServer`