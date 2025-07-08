# CharClub Candid Curio

**CharClub Candid Curio** is a decentralized platform for curating and sharing verifiable, interactive digital "curiosities"—unique, ephemeral experiences and self-authenticating narratives powered by the Internet Computer.

---

## Project Overview

CharClub Candid Curio envisions a new realm of digital expression beyond mere asset ownership. Instead of focusing on tradable NFTs, our platform is a unique repository for "candid curios"—singular, verifiable digital experiences, interactive stories, or ephemeral digital art pieces that are designed to be shared and experienced, rather than bought and sold. Built entirely on the Internet Computer Protocol, each "curio" is a self-contained canister that maintains its own integrity and state, ensuring tamper-proof authenticity and direct, seamless interaction ("Candid") without intermediaries.

Our roadmap centers on empowering creators to mint these unique digital moments, offering tools for crafting interactive narratives, personalized ephemeral art installations, or verifiable digital mementos linked to real-world events. Users can discover, interact with, and genuinely "experience" these curios, contributing to a decentralized archive of unique digital phenomena. CharClub Candid Curio aims to cultivate a community around the appreciation of rare digital experiences, fostering a new kind of digital provenance based on verifiable interaction and ephemeral beauty. It's about collecting moments, not just tokens, in a truly decentralized and interactive environment.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [pnpm](https://pnpm.io/) (recommended for monorepo)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/CharClub/candid-curio.git
cd candid-curio
pnpm install
```

### Running the Project Locally

Start the local Internet Computer replica and deploy canisters:

```bash
dfx start --background
dfx deploy
```

Start the frontend development server:

```bash
pnpm dev:web
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Project Structure

- `src/backend/` — Motoko backend canisters and types
- `src/frontend/` — React/TypeScript frontend
- `src/frontend/src/components/` — UI components
- `src/frontend/src/pages/` — App pages and views
- `src/frontend/src/hooks/` — React hooks for data and state
- `src/frontend/src/utils/` — Utility functions

---

## Contributing

We welcome contributions! Please open issues or pull requests to help revive and improve the project.

---

## Roadmap

- [ ] Revive and modernize the UI
- [ ] Add tools for creators to mint and share "curios"
- [ ] Enhance interactive and ephemeral experience support
- [ ] Expand documentation and onboarding

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [DFINITY Internet Computer](https://internetcomputer.org/)
- All contributors and the open source community
