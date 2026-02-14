# Architecture Decision Record (ADR)

## 1. Project Structure
- `app/`: Remix application (Shopify Admin + Backend)
- `extensions/`: Shopify UI Extensions (Checkout, Post-Purchase)
- `prisma/`: Database Schema
- `python-engine/`: AI Logic (Future)

## 2. Key Decisions
- **Remix over Next.js:** Remix is now the official recommendation for Shopify Apps. It handles auth/session tokens natively.
- **Prisma:** Type-safe database access. Essential for "clean code."
- **Polaris:** We will use Shopify's design system to ensure the app looks "Native" and professional. No custom hacks unless necessary.

## 3. Data Flow
`Webhook (Order Created)` -> `Queue (Redis)` -> `AI Worker` -> `Update Metafields` -> `UI Extension`

## 4. Perfection Checklist
- [ ] Strict TypeScript (no `any`)
- [ ] 100% Test Coverage for core logic
- [ ] Accessible UI (A11y compliant)
