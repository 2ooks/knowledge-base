FROM node:18-alpine AS builder
WORKDIR /app
COPY mcp-server/package*.json ./
RUN npm ci
COPY mcp-server/tsconfig.json ./
COPY mcp-server/src/ ./src/
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY wiki/ /data/wiki/
COPY graphify-out/ /data/graphify-out/
COPY raw/ /data/raw/
COPY outputs/ /data/outputs/
ENV DATA_DIR=/data
ENV PORT=3100
EXPOSE 3100
CMD ["node", "dist/index.js"]
