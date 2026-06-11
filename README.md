# SAP B1 Service Layer Reporting Portal

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![SAP Service Layer](https://img.shields.io/badge/SAP_Business_One-Service_Layer-F0AB00?style=for-the-badge&logo=sap&logoColor=white)

## Executive Summary

The **SAP B1 Service Layer Reporting Portal** is a high-performance analytics and reporting gateway engineered to bridge modern web protocols with native SAP Business One OData structures. Developed by Muhammad Jalal, this platform was specifically designed to demonstrate advanced proficiency in integrating cutting-edge React frameworks (Next.js 16 App Router) with complex relational database schemas commonly found in enterprise manufacturing and steel corporation environments. 

This repository serves as a production-ready architectural blueprint for modernizing legacy ERP ecosystems without sacrificing the strict operational integrity required by MS SQL-backed systems.

## Core Architecture

This platform implements several advanced technical achievements simulating a true enterprise environment:

- **Native OData Query Parsing**: A custom-built server-side engine capable of securely intercepting and resolving complex OData parameters (`$select`, `$filter`, `$orderby`). It dynamically applies filtering operators (`eq`, `gt`, `lt`, `and`, `or`) to payload responses, reducing payload bloat over the wire.
- **Enterprise Authentication Security**: Simulates SAP B1's rigorous session management. Next.js edge interceptors (`proxy.ts`) securely manage the `B1SESSION` token via `HttpOnly`, `SameSite=Strict` cookies, preventing CSRF attacks and enforcing strict route protection.
- **Relational Data Mapping**: Strongly typed TypeScript interfaces accurately mirror MS SQL table relationships. The mock backend seamlessly handles relationships between Master Data (`OCRD` - Business Partners, `OITM` - Item Master) and transactional documents (`ORDR` - Sales Header, `RDR1` - Sales Lines).

## Business Value & Features

The portal delivers immediate, actionable intelligence tailored for supply chain and financial operations:

- **Executive Dashboard**: Provides high-level visibility into financial health. Leverages `$select` query optimization to aggregate pipeline metrics, visualize closed-order ratios, and render dynamic bar charts powered by `recharts`.
- **Supply Chain Watchdog**: Delivers real-time inventory alerting. Dynamically computes the true net available stock (`NetAvailable = OnHand - IsCommited + OnOrder`) and automatically flags components breaching minimum safety stock thresholds to prevent manufacturing delays.
- **Partner Directory**: A comprehensive financial ledger tracking system for customers and vendors (`CardType eq 'C' | 'S'`). Highlights negative balances and provides rapid visibility into enterprise credit health.

## Tech Stack & Design System

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Design System**: "Industrial Dark" — A custom, high-contrast aesthetic utilizing `slate-950` backgrounds and SAP Blue (`#3b82f6`) accents. Built entirely on **Tailwind CSS v4** to eliminate reliance on external stylesheets.
- **Components**: Shadcn UI (Headless UI architecture)
- **Data Visualization**: Recharts
- **Typography**: Inter (UI elements) and JetBrains Mono (Financial and relational figures)

## Getting Started

To initialize the mock environment and run the portal locally:

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser. 

**Mock Login Credentials:**
- **Company DB:** `SBODEMOUS`
- **Username:** `manager`
- **Password:** `1234`

---
*Architected and developed by **Muhammad Jalal**.*
