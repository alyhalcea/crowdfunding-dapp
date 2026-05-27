# Crowdfunding dApp

A decentralized crowdfunding application built using the MultiversX blockchain ecosystem.

---

# Overview

This project is a blockchain-based crowdfunding platform where users can simulate donations using EGLD. The application demonstrates the architecture of a decentralized application (dApp), including a smart contract, a frontend interface, wallet interaction logic, and transaction processing concepts.

The project was developed for the Blockchain, Money & FinTech laboratory project.

---

# Features

- Smart contract written in Rust
- MultiversX smart contract architecture
- WASM smart contract build
- React frontend interface
- Wallet connection simulation
- Donation transaction simulation
- Dynamic crowdfunding progress tracking
- Recent donations feed
- Responsive modern UI
- Transaction confirmation system

---

# Technologies Used

## Blockchain
- MultiversX Devnet
- Rust
- multiversx-sc framework
- WebAssembly (WASM)

## Frontend
- React
- Vite
- JavaScript

## Deployment
- Vercel
- GitHub

---

# Smart Contract Logic

The smart contract contains the crowdfunding business logic.

## Main Endpoints

### donate()

Accepts EGLD payments and updates the total donations amount.

### withdraw()

Allows only the contract owner to withdraw collected funds.

---

## Storage

### totalDonations

Stores the total EGLD collected by the campaign.

### owner

Stores the smart contract owner's address.

---

# Frontend Functionality

The frontend allows users to:

- Connect a wallet
- Simulate EGLD donations
- View funding progress
- View recent donations
- View transaction confirmations

---

# Running the Frontend Locally

```bash
npm install
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

# Smart Contract Build

The smart contract was compiled using the MultiversX smart contract tooling:

```bash
sc-meta all build
```

---

# Project Structure

```text
crowdfunding-frontend/
├── src/
├── public/
├── package.json
├── vite.config.js

crowdfunding-sc/
├── src/
├── wasm/
├── output/
├── Cargo.toml
```

---

# Smart Contract Address

erd1qqqqqqqqqqqqqpgqxspslehyqp72y7c5hmlvg3j90rf00zkxs8lqm745ge

# Deployment

Frontend deployed using Vercel.

Smart contract successfully deployed on MultiversX Devnet.

---

# Live Demo

https://crowdfunding-dapp-beta.vercel.app/

---

# Future Improvements

- Real wallet integration using the MultiversX SDK
- Real blockchain transaction execution
- Smart contract deployment on MultiversX Devnet
- Multiple crowdfunding campaigns
- Persistent on-chain donation history
- User authentication improvements

---

# Authors

Alina Halcea & Francisca Buta
