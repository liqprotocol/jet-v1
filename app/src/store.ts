import type * as anchor from '@project-serum/anchor';
import type { Market, Reserve, AssetStore, Copilot, Locale, TransactionLog, Notification, CustomProgramError, IdlMetadata } from './models/JetTypes';
import { writable } from 'svelte/store';

// Writable value stores
export const MARKET = writable<Market>({reserves: {}} as Market);
export const CONNECT_WALLET = writable<boolean> (false);
export const WALLET = writable<any> (null);
export const ASSETS = writable<AssetStore | null> (null);
export const TRANSACTION_LOGS = writable<TransactionLog[] | null> ([]);
export const CURRENT_RESERVE = writable<Reserve | null> (null);
export const TRADE_ACTION = writable<string> ('deposit');
export const COPILOT = writable<Copilot | null> (null);
export const PROGRAM = writable<anchor.Program | null> (null);
export const LOCALE = writable<Locale | null> (null);
export const PREFERRED_LANGUAGE = writable<string> ('en');
export const NATIVE = writable<boolean> (true);
export const DARK_THEME = writable<boolean> (false);
export const PREFERRED_NODE = writable<string | null> (null);
export const PING = writable<number> (0);
export const WALLET_INIT = writable<boolean> (false);
export const LIQUIDATION_WARNED = writable<boolean> (false);
export const INIT_FAILED = writable<{ geobanned: boolean } | null> (null);
export const NOTIFICATIONS = writable<Notification[]> ([]);
export const CUSTOM_PROGRAM_ERRORS = writable<CustomProgramError[]> ([]);
export const ANCHOR_WEB3_CONNECTION = writable<anchor.web3.Connection> (undefined);
export const ANCHOR_CODER = writable<anchor.Coder> (undefined);
export const IDL_METADATA = writable<IdlMetadata> (undefined);