import { spawn } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const args = process.argv.slice(2);
const major = Number(process.versions.node.split(".")[0]);

function isSupported(versionMajor) {
  return versionMajor >= 20 && versionMajor < 26;
}

function resolveNvmNode() {
  const base = path.join(homedir(), ".nvm", "versions", "node");
  if (!existsSync(base)) return null;

  const match = readdirSync(base)
    .filter((name) => /^v\d+\.\d+\.\d+$/.test(name))
    .map((name) => ({
      name,
      major: Number(name.slice(1).split(".")[0]),
    }))
    .filter((item) => isSupported(item.major))
    .sort((a, b) => b.major - a.major || a.name.localeCompare(b.name))[0];

  if (!match) return null;
  const binary = path.join(base, match.name, "bin", "node");
  return existsSync(binary) ? binary : null;
}

if (!args.length) {
  console.error("Usage: node scripts/run-with-supported-node.mjs <command> [...args]");
  process.exit(1);
}

const env = { ...process.env };
const localBin = path.join(process.cwd(), "node_modules", ".bin");
const pathParts = [];

if (!isSupported(major)) {
  const nvmNode = resolveNvmNode();
  if (!nvmNode) {
    console.error(
      `This project needs Node 20–24. Current version: ${process.version}.\nInstall Node 24 (nvm install 24 && nvm use) and retry.`,
    );
    process.exit(1);
  }
  pathParts.push(path.dirname(nvmNode));
}

if (existsSync(localBin)) {
  pathParts.push(localBin);
}

if (pathParts.length) {
  env.PATH = `${pathParts.join(path.delimiter)}${path.delimiter}${env.PATH ?? ""}`;
}

const child = spawn(args[0], args.slice(1), {
  stdio: "inherit",
  env,
});

child.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
