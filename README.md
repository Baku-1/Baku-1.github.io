# Ronin P2P Trading Platform

Ronin P2P is a decentralized Peer-to-Peer safe and secure trading system for clients to open trades, post them in a grid view, and allow users to view the open trade, modify the agreement up to 3 times using NFTs or tokens. All possibilities are kept off-chain to save on gas fees. The system features a fee distribution mechanism where 95% of fees are split between two wallets (Admin and Treasury Manager), and the remaining 5% is stored in a pool until the threshold is met. The rewards are then disbursed to the top 5 leaders with the most transaction amounts.

## Features

- Decentralized Peer-to-Peer trading
- Off-chain transaction processing
- Trade agreements and modifications using NFTs or tokens
- Fee distribution and reward disbursement
- Admin dashboard for managing the platform

## Technologies Used

- Solidity (Smart Contracts)
- React (Frontend)
- Redux (State Management)
- Node.js (Backend)
- Express (Backend Framework)
- MongoDB (Database)
- Redis (Caching)
- Web3.js (Blockchain Integration)
- Foundry (Solidity Testing)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Redis
- Foundry
- Web3.js

### Installation

1. Clone the repository:

    ```bash
        git clone https://github.com/Baku-1/RoninP2PdApp.git
            cd RoninP2PdApp
                ```

                2. Install dependencies for both client and server:

                    ```bash
                        cd client
                            npm install
                                cd ../server
                                    npm install
                                        ```

                                        3. Set up environment variables:

                                            - Create a `.env` file in the `server` directory with the following content:

                                                  ```plaintext
                                                        INFURA_URL=https://saigon-testnet.roninchain.com/rpc
                                                              ADMIN_WALLET=<Your_Admin_Wallet_Address>
                                                                    ADMIN_PRIVATE_KEY=<Your_Admin_Wallet_Private_Key>
                                                                          MONGO_URI=<Your_MongoDB_URI>
                                                                                REDIS_URL=<Your_Redis_URL>
                                                                                      CONTRACT_ADDRESS=<Your_Contract_Address>
                                                                                            ```

                                                                                                - Create a `.env` file in the `client` directory with the following content:

                                                                                                      ```plaintext
                                                                                                            REACT_APP_API_URL=http://localhost:5000
                                                                                                                  ```

                                                                                                                  4. Start the development server:

                                                                                                                      - In the `server` directory:

                                                                                                                            ```bash
                                                                                                                                  npm start
                                                                                                                                        ```

                                                                                                                                            - In the `client` directory:

                                                                                                                                                  ```bash
                                                                                                                                                        npm start
                                                                                                                                                              ```

                                                                                                                                                              5. Open your browser and navigate to `http://localhost:3000` to access the Ronin P2P Trading Platform.

                                                                                                                                                              ## Smart Contract Deployment

                                                                                                                                                              1. Install Foundry:

                                                                                                                                                                  ```bash
                                                                                                                                                                      curl -L https://foundry.paradigm.xyz | bash
                                                                                                                                                                          source ~/.bashrc # or ~/.zshrc, depending on your shell
                                                                                                                                                                              foundryup
                                                                                                                                                                                  ```

                                                                                                                                                                                  2. Compile the smart contracts:

                                                                                                                                                                                      ```bash
                                                                                                                                                                                          forge build
                                                                                                                                                                                              ```

                                                                                                                                                                                              3. Run tests:

                                                                                                                                                                                                  ```bash
                                                                                                                                                                                                      forge test
                                                                                                                                                                                                          ```

                                                                                                                                                                                                          ## Contributing

                                                                                                                                                                                                          Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

                                                                                                                                                                                                          ## License

                                                                                                                                                                                                          This project is licensed under the MIT License.
