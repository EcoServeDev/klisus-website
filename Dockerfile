# KliSus marketing site — built for the EC2 compose stack (see the product
# repo's infra/). Build context = this repo root.
FROM node:22-alpine AS deps
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm build

FROM node:22-alpine AS run
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
# OG image routes read TTFs via process.cwd()/assets
COPY --from=build /app/assets ./assets
EXPOSE 3000
CMD ["node", "server.js"]
