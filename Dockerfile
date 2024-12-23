
# ------------------------------------------------
# BASE
# ------------------------------------------------
FROM node:20-alpine AS base


# ------------------------------------------------
# DEPENDS BASE
# ------------------------------------------------
FROM base AS depends_base

RUN apk add --no-cache --virtual .gyp python3 make g++


# ------------------------------------------------
# DEPENDENCIES
# ------------------------------------------------
FROM depends_base AS depends

WORKDIR /kedoomedia

# COPY .yarn ./.yarn
COPY package.json package-lock.json ./

RUN npm install


# ------------------------------------------------
# BUILD
# ------------------------------------------------
FROM base AS build

WORKDIR /kedoomedia

COPY --from=depends /kedoomedia/node_modules ./node_modules
COPY . ./


RUN npm run build


# ------------------------------------------------
# RUNNER
# ------------------------------------------------
FROM base AS runner

WORKDIR /kedoomedia

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=build /kedoomedia/public ./public

COPY --from=build --chown=nextjs:nodejs /kedoomedia/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /kedoomedia/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]