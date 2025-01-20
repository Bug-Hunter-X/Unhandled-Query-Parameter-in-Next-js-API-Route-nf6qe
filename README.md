# Unhandled Query Parameter in Next.js API Route

This repository demonstrates a common error in Next.js API routes: failure to handle cases where expected query parameters are missing.  The `pages/api/hello.js` file shows the problematic code.  The solution demonstrates proper error handling using optional chaining and default values.

## Bug
The original code lacks error handling for the `req.query.name` parameter. If a request is made without the `name` query parameter, the code will attempt to access `undefined.name`, leading to a runtime error or unexpected behavior. 

## Solution
The solution utilizes optional chaining (`?.`) and provides a default value to gracefully handle missing query parameters.  This ensures the API route responds appropriately even when the parameter is absent.