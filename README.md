# Crowdfunding dApp

A decentralized crowdfunding application built using the MultiversX blockchain ecosystem.

## Overview

This project is a blockchain-based crowdfunding platform where users can simulate donations using EGLD. The application demonstrates the architecture of a decentralized application (dApp), including a smart contract, a frontend interface, wallet interaction logic, and transaction processing concepts.

The project was developed for the Blockchain, Money & FinTech laboratory project.

---

## Features

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

## Technologies Used

### Blockchain
- MultiversX Devnet
- Rust
- multiversx-sc framework
- WebAssembly (WASM)

### Frontend
- React
- Vite
- JavaScript

### Deployment
- Vercel
- GitHub

---

## Smart Contract Logic

The smart contract contains the crowdfunding business logic:

### Main Endpoints

#### donate()
Accepts EGLD payments and updates the total donations amount.

#### withdraw()
Allows only the contract owner to withdraw collected funds.

### Storage

#### totalDonations
Stores the total EGLD collected by the campaign.

#### owner
Stores the smart contract owner's address.

---

## Frontend Functionality

The frontend allows users to:

- Connect a wallet
- Simulate EGLD donations
- View funding progress
- View recent donations
- View transaction confirmations

---

## Running the Frontend Locally

```bash
npm install
npm run dev
