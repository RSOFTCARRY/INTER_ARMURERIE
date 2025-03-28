import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import router from './auth.routes.js'
import { sign } from 'hono/jwt'
import env from '../config/env.js'
import authService from '../services/auth.service.js'

import * as mailer from "../utils/mailer.js"
beforeAll(async () => {
  vi.spyOn(mailer, 'sendEmail').mockImplementation(async () => {
    return true
  })
  const user = await authService.findUserByEmail('armurerieross@gmail.com')
  if (user)
    await authService.deleteUser(user.id)
})

//afterAll(async () => {
//  const user = await authService.findUserByEmail('armurerieross@gmail.com')
//  if (user)
//    await authService.deleteUser(user.id)
//})
//
describe("Register", () => {
  test('Test wrong register body', async () => {
    const res = await router.request('/register', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ message: 'hello hono' }),
    })
    expect(res.status).toBe(400)
    const jsonres = await res.json()
    expect(jsonres.error).toBeDefined()
    expect(jsonres.error.issues).toHaveLength(4)
  })
  test('Test register valid body', async () => {
    const registerPayload = { email: 'armurerieross@gmail.com', password: "mvagusta750", firstname: 'Laurent', lastname: 'Rosello' }
    const res = await router.request('/register', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(registerPayload),
    })

    console.log(":", res)
    expect(res.status).toBe(201)
  })
})

describe("Login", () => {
  test('Test wrong login body', async () => {
    const res = await router.request('/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ message: 'hello hono' }),
    })
    expect(res.status).toBe(400)
    const jsonres = await res.json()
    expect(jsonres.error).toBeDefined()
    expect(jsonres.error.issues).toHaveLength(2)
  })
  test('Test login invalid credentials', async () => {
    const res = await router.request('/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com', password: 'mvagusta750' }),
    })
    expect(res.status).toBe(401)
    const jsonres = await res.json()
    expect(jsonres.error).toBeDefined()
    expect(jsonres.error).toBe('Invalid credentials');
  })
  test('Test login with right creds but not verified', async () => {
    const res = await router.request('/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com', password: 'mvagusta750' }),
    })
    expect(res.status).toBe(401)
    const jsonres = await res.json()
    expect(jsonres.error).toBeDefined()
    expect(jsonres.error).toBe('user-not-verified');
  })
  test('Test account verification', async () => {
    const verificationToken = await sign(
      {
        email: 'armurerieross@gmail.com',
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
      },
      env.JWT_SECRET,
    )
    const res = await router.request('/verify/' + verificationToken, {
      method: 'GET',
    })

    console.log(":", res)
    expect(res.status).toBe(200)
  })
  test('Test login with right creds verified', async () => {
    const res = await router.request('/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com', password: 'mvagusta750' }),
    })
    expect(res.status).toBe(200)
  })
  test('Test forgot password', async () => {
    const res = await router.request('/forgot-password', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com' }),
    })
    expect(res.status).toBe(200)
    const user = await authService.findUserByEmail('armurerieross@gmail.com')
    expect(user.reset_token).toBeDefined()
  })
  test('Test reset password', async () => {
    const user = await authService.findUserByEmail('armurerieross@gmail.com')
    expect(user.reset_token).toBeDefined()
    const res = await router.request('/reset-password', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ token: user.reset_token, password: "mvagusta750" }),
    })
    expect(res.status).toBe(200)
  })
  test('Test login with new creds ', async () => {
    const res = await router.request('/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com', password: 'mvagusta750' }),
    })
    expect(res.status).toBe(200)
  })
  test('send verification', async () => {
    const res = await router.request('/send-verification', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email: 'armurerieross@gmail.com' }),
    })
    expect(res.status).toBe(200)
  })
  //test('Test reset password', async () => {
  //  const res = await router.request('/reset-password', {
  //    method: 'POST',
  //    headers: new Headers({ 'Content-Type': 'application/json' }),
  //    body: JSON.stringify({ email: 'armurerieross@gmail.com', password: 'mvagusta750' }),
  //  })
  //  expect(res.status).toBe(200)
  //})
})
