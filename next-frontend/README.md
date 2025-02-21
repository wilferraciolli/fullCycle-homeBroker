This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Home broker UI NextJS
This project uses react with next framework to make easier for server rendering pages. Also tailwind and flowbite is used to make styling easier.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Or in a different port type in `PORT=3001 npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Routes
[wallets to chose from ](http://localhost:3001)
[main](http://localhost:3001/?wallet_id=5fdd0b84-26af-434d-8244-667bcd3d04dc)
[assets](http://localhost:3001/assets?wallet_id=5fdd0b84-26af-434d-8244-667bcd3d04dc)
[asset by symbol](http://localhost:3001/assets/{assetSymbol}?wallet_id=5fdd0b84-26af-434d-8244-667bcd3d04dc)
[orders](http://localhost:3001/orderss?wallet_id=5fdd0b84-26af-434d-8244-667bcd3d04dc)

## Dependencies
### Flowbite (tailwind extension components)
used for typography and components
```bash
npm install flowbite-typography flowbite-react
```
Then configure flowbite within the `tailwind.config.ts` file Eg
```typescript
import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind';
//@ts-expect-error - flowbite-typography has not a type
import flowbiteTypography from 'flowbite-typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbite.plugin(), flowbiteTypography],
} satisfies Config;

```

### lightweight chart (Trading view graph)
used to display graph for home broker Eg TradingView
```bash
npm install lightweight-charts```
