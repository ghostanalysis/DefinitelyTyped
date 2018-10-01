// Type definitions for demofile 0.4
// Project: https://github.com/saul/demofile (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: William Stewart <https://github.com/zoidbergwill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace demofile;

import * as parser from "binary-parser";
import * as events from "events";

export class DemoHeader extends parser.Parser {
    serverName: string;
    clientName: string;
    mapName: string;
    protocol: number;
    networkProtocol: number;
    playbackTime: number;
    playbackTicks: number;
    playbackFrames: number;
    signonLength: number;
}

export class BaseEntity extends events.EventEmitter {
    props: any;
    teamNumber: number;
}

export class GameRules extends BaseEntity {
    isWarmup(): void;
    phase: string;
    roundsPlayed: number;
}

export class GameEvents extends events.EventEmitter {
}

export class userMessages extends events.EventEmitter {
}

export interface Position {
    x: number;
    y: number;
    z: number;
}

export interface EyeAngles {
    pitch: number;
    yaw: number;
}

export class Weapon extends BaseEntity {
    className: string;
    itemName: string;
}

export class Player extends BaseEntity {
    hasSpotted(entity: any): boolean;

    account: number;
    armor: number;
    assists: number;
    cashSpendThisRound: number;
    cashSpendTotal: number;
    clanTag: string;
    currentEquipmentValue: number;
    deaths: number;
    eyeAngles: EyeAngles;
    flashDuration: number;
    freezeTimeEndEquipmentValue: number;
    hasC4: boolean;
    hasDefuser: boolean;
    hasHelmet: boolean;
    health: number;
    isAlive: boolean;
    isDefusing: boolean;
    isFakePlayer: boolean;
    isHltv: boolean;
    isInBombZone: boolean;
    isInBuyZone: boolean;
    isScoped: boolean;
    isSpotted: boolean;
    isWalking: boolean;
    kills: number;
    mvps: number;
    name: string;
    placeName: string;
    position: Position;
    roundStartEquipmentValue: number;
    score: number;
    steamId: string;
    steam64Id: string;
    userId: number;
    velocity: Position;
    weapon: Weapon | null;
    weapons: Weapon[];
}

export class Team extends BaseEntity {
    clanName: string;
    teamName: string;
    flagImage: string;
    logoImage: string;
    score: number;
    scoreFirstHalf: number;
    scoreSecondHalf: number;
    members: Player[];
}

export class Entities extends events.EventEmitter {
    getByUserId(userId: number): Player | undefined;
    entities: [any];
}

export class DemoFile extends events.EventEmitter {
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    parse(buffer: Buffer): void;
    currentTick: number;
    currentTime: number;
    header: DemoHeader;
    entities: Entities;
    gameEvents: GameEvents;
    gameRules: GameRules | null;
    userMessages: userMessages;
    players: Player[];
    teams: Team[];
}
