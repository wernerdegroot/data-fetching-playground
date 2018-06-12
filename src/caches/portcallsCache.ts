import { IFilter, areEqual } from "../state/IFilter";
import { IPortcall, defaultPortcalls } from "../state/IPortcall";
import { IAppState } from "../state/IAppState";
import { Cache } from "./Cache";

export const portcallsCache = new Cache<IFilter, IPortcall[], IAppState>(
  'portcalls',
  areEqual,
  appState => appState.portcalls
)