
# Supabase Architecture & Development Rules

These rules define how Supabase must be used in this project.
All developers and AI tools (including GitHub Copilot) must strictly follow these rules.

These guidelines apply to **all projects in this ecosystem that use Supabase**.

---

# 1. Never Access Supabase Tables Directly

Application code **must never directly query Supabase tables**.

This includes:

* `select`
* `insert`
* `update`
* `delete`

from client applications.

This rule applies to:

* Web apps
* Mobile apps
* Server-side apps
* Background jobs

❌ Forbidden example

```javascript
supabase.from("products").select("*")
```

All database access must go through **Supabase Edge Functions**.

---

# 2. All Database Communication Must Go Through Edge Functions

Architecture must follow this structure:

```
Client (Web / Mobile / Backend)
        |
        v
Supabase Edge Function
        |
        v
Supabase Database
```

Clients should **only call Edge Functions**.

---

# 3. One Edge Function Per Resource

Edge functions must follow **resource-based architecture**.

Do NOT create separate edge functions for each operation.

❌ Incorrect

```
/get-product
/create-product
/delete-product
/update-product
```

✔ Correct

```
/product
```

Operations are determined using **HTTP methods and route parameters**.

---

# 4. RESTful Endpoint Pattern

Example resource:

```
/product
```

Endpoints:

| Method      | Endpoint     | Purpose              |
| ----------- | ------------ | -------------------- |
| GET         | /product     | Get list of products |
| GET         | /product/:id | Get a single product |
| POST        | /product     | Create product       |
| PUT / PATCH | /product/:id | Update product       |
| DELETE      | /product/:id | Delete product       |

All of these are handled inside **one edge function**.

---

# 5. Edge Function Folder Structure

Example for `product`

```
supabase/functions/product/

index.ts

handlers/
  getProducts.ts
  getProductById.ts
  createProduct.ts
  updateProduct.ts
  deleteProduct.ts

shared/
  auth.ts
  cors.ts
  response.ts
  validation.ts
  db.ts
```

### Explanation

**index.ts**

* Main router
* Determines request type
* Routes request to handler

**handlers**

Contains logic for each operation.

**shared**

Contains reusable utilities.

---

# 6. Edge Function Router Pattern

`index.ts` acts as a router.

Example structure:

```ts
switch (req.method) {
  case "GET":
    return handleGet(req)

  case "POST":
    return createProduct(req)

  case "PUT":
    return updateProduct(req)

  case "DELETE":
    return deleteProduct(req)

  default:
    return errorResponse("Method not allowed")
}
```

This prevents large monolithic files.

---

# 7. Standard API Response Format

All Edge Functions **must return responses using the same format**.

Standard response structure:

```json
{
  "success": true,
  "message": "Request successful",
  "data": {},
  "meta": {},
  "errors": null
}
```

### Field Definitions

| Field   | Purpose                                           |
| ------- | ------------------------------------------------- |
| success | Indicates whether the request succeeded           |
| message | Human-readable description                        |
| data    | Main response payload                             |
| meta    | Additional information (pagination, totals, etc.) |
| errors  | Validation or system errors                       |

---

# 8. Response Helper Utility

To enforce consistency, a response helper must be used.

File:

```
shared/response.ts
```

Example implementation:

```ts
export function successResponse(data = {}, message = "Request successful", meta = {}) {
  return new Response(
    JSON.stringify({
      success: true,
      message,
      data,
      meta,
      errors: null
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200
    }
  )
}

export function errorResponse(message = "Request failed", errors = null, status = 400) {
  return new Response(
    JSON.stringify({
      success: false,
      message,
      data: null,
      meta: {},
      errors
    }),
    {
      headers: { "Content-Type": "application/json" },
      status
    }
  )
}
```

All handlers must use this utility.

---

# 9. Edge Function Deployment

Supabase CLI is installed in this project.

Edge Functions must be deployed using:

```
supabase functions deploy <function-name>
```

Example:

```
supabase functions deploy product
```

This is the **only approved deployment method**.

---

# 10. SQL Migration Rules

SQL migrations must NOT be pushed using the Supabase CLI.

Due to reliability issues with CLI SQL migrations, the approved workflow is:

1. Write SQL locally
2. Copy migration SQL
3. Open Supabase Dashboard
4. Navigate to **SQL Editor**
5. Paste and run the script manually

Supabase SQL Editor is the **only approved method for migrations**.

---

# 11. Authentication Rules

Basic authentication flows may use Supabase Auth directly.

Examples:

```
login
logout
password reset
email verification
```

Example:

```javascript
supabase.auth.signInWithPassword({
  email,
  password
})
```

---

# 12. Complex Authentication Must Use Edge Functions

If signup requires **additional logic**, it must go through Edge Functions.

Examples:

* Creating profile record
* Checking username availability
* Checking email existence
* Creating related records
* Running validations

Example flow:

```
Client
   |
   v
Edge Function
   |
   v
Create auth user
Create profile
Create preferences
Return response
```

---

# 13. Profiles Table Pattern

The project uses a **profiles table in the public schema**.

Example:

```
public.profiles
```

Signup process:

1️⃣ Create user in `auth.users`
2️⃣ Create profile in `public.profiles`

If validation is needed, the signup process must run through an **Edge Function**.

---

# 14. Email Verification (Supabase Native)

Use **Supabase built-in email verification**.

Do NOT use external providers.

Do not integrate:

* SendGrid
* Mailchimp
* Postmark
* Resend

Enable email verification in:

```
Supabase Dashboard
Authentication → Providers → Email
```

Enable:

```
Confirm email
```

Signup example:

```javascript
supabase.auth.signUp({
  email,
  password
})
```

Supabase automatically sends verification emails.

This works on the **free plan**.

---

# 15. Resource Examples

This architecture applies to all resources:

```
/product
/cart
/orders
/users
/inventory
/payments
/categories
```

Each resource must have:

* One edge function
* Internal routing
* Separate handlers
* Shared utilities

---

# 16. Summary

Core rules:

1. Never query Supabase tables directly.
2. All database access must go through Edge Functions.
3. One Edge Function per resource.
4. Use RESTful routing with HTTP methods.
5. `index.ts` acts as router.
6. Separate handlers into different files.
7. Shared utilities live in `shared/`.
8. Deploy functions using:

```
supabase functions deploy <name>
```

9. SQL migrations run manually in Supabase SQL Editor.
10. Use standard API response format.
11. Use Supabase Auth for basic authentication.
12. Use Edge Functions for complex authentication flows.


