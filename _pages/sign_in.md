---
layout: default
title: Sign In
permalink: /sign_in/
---

<div class="sign-in-container">
    <h2>Sign In</h2>
    <form action="/sign_in" method="post">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" class="sign-in-button">Sign In</button>
    </form>
</div>

<style>
    .sign-in-container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .sign-in-container h2 {
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
    }
    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .sign-in-button {
        background-color: #03a9f4; /* futuristic-blue */
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s, border-color 0.3s;
    }
    .sign-in-button:hover {
        background-color: #7f00ff; /* futuristic-purple */
        border-color: #7f00ff; /* futuristic-purple */
    }
</style>
