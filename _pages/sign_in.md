---
layout: default
title: Sign In
permalink: /sign_in/
---

<div class="sign-in-container">
    <h2>Sign In</h2>
    <button id="connectWallet" class="sign-in-button">Sign In with Ronin Wallet</button>
    <p id="status"></p>
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
    #status {
        margin-top: 20px;
        font-size: 14px;
        color: #333;
    }
</style>

<script>
    document.getElementById('connectWallet').addEventListener('click', async () => {
        if (!window.ronin) {
            document.getElementById('status').textContent = 'Ronin Wallet is not installed!';
            return;
        }

        try {
            const provider = new ethers.providers.Web3Provider(window.ronin);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            document.getElementById('status').textContent = 'Connected: ' + address;
        } catch (error) {
            document.getElementById('status').textContent = 'Error connecting to wallet: ' + error.message;
        }
    });
</script>
