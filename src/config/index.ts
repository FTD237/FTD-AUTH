import { appConfig } from "./app.config";
import { proxyConfig } from "./proxy.config";
import { ApiKeys } from "../types";

export const apiKeys: ApiKeys = {
  // clés API pour les applications autorisées
  //TODO: les stockées dans une base de données
  "Sourcing-web": { appName: "Sourcing", permissions: ["read", "write"] },
  "BeOut-web": { appName: "BeOut-app", permissions: ["read", "write"] },
  "BeOut-mobile": { appName: "BeOut-mobile", permissions: ["read", "write"] },
};

export const config = {
  app: appConfig,
  proxies: proxyConfig,
  apiKeys,
};
