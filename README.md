## How to use

1. `cp .env.example .env`
2. `yarn install`
3. `yarn dev`

You should see the following output:

```
yarn run v1.22.11
$ serverless offline
Serverless: Compiling with Typescript...
src/handlers/rollbarTest.ts (6,46): Argument of type '(event: any, context: Context, callback: Callback) => void' is not assignable to parameter of type 'LambdaHandler<any, any, any>'.
  Types of parameters 'callback' and 'callback' are incompatible.
    Types of parameters 'err' and 'error' are incompatible.
      Type 'string | Error | null | undefined' is not assignable to type 'MaybeError'.
        Type 'string' is not assignable to type 'MaybeError'.
Serverless: Typescript compiled.
Serverless: Watching typescript files...
offline: Starting Offline: dev/ap-northeast-1.
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:
           * rollbarTest: rollbar-test-dev-rollbarTest
```

If I change `callback: Callback` to `callback: any` in rollbarTest.ts, it compiles as expected.
