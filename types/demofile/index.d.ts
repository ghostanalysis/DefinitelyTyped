// Type definitions for demofile 0.4.20
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
    public serverName: string;
    public clientName: string;
    public mapName: string;
    public protocol: number;
    public networkProtocol: number;
    public playbackTime: number;
    public playbackTicks: number;
    public playbackFrames: number;
    public signonLength: number;
}

export class BaseEntity extends events.EventEmitter {
    public props: any;
    public teamNumber: number;
}

export class GameRules extends BaseEntity {
    public isWarmup(): void;
    public phase: string;
    public roundsPlayed: number;
}

export class GameEvents extends events.EventEmitter {
}

export class userMessages extends events.EventEmitter {
}

interface Position {
    x: number;
    y: number;
    z: number;
}

interface EyeAngles {
    pitch: number;
    yaw: number;
}

export class Weapon extends BaseEntity {
    public className: string;
    public itemName: string;
}

export class Player extends BaseEntity {
    public hasSpotted(entity: any): boolean;

    public account: number;
    public armor: number;
    public assists: number;
    public cashSpendThisRound: number;
    public cashSpendTotal: number;
    public clanTag: string;
    public currentEquipmentValue: number;
    public deaths: number;
    public eyeAngles: EyeAngles;
    public flashDuration: number;
    public freezeTimeEndEquipmentValue: number;
    public hasC4: boolean;
    public hasDefuser: boolean;
    public hasHelmet: boolean;
    public health: number;
    public isAlive: boolean;
    public isDefusing: boolean;
    public isFakePlayer: boolean;
    public isHltv: boolean;
    public isInBombZone: boolean;
    public isInBuyZone: boolean;
    public isScoped: boolean;
    public isSpotted: boolean;
    public isWalking: boolean;
    public kills: number;
    public mvps: number;
    public name: string;
    public placeName: string;
    public position: Position;
    public roundStartEquipmentValue: number;
    public score: number;
    public steamId: string;
    public steam64Id: string;
    public userId: number;
    public velocity: Position;
    public weapon: Weapon | null;
    public weapons: Weapon[];
}

export class Team extends BaseEntity {
    public clanName: string;
    public teamName: string;
    public flagImage: string;
    public logoImage: string;
    public score: number;
    public scoreFirstHalf: number;
    public scoreSecondHalf: number;
    public members: Player[];
}

export class Entities extends events.EventEmitter {
    public getByUserId(userId: number): Player | undefined;
    public entities: [any];
}

export class DemoFile extends events.EventEmitter {
    public on(event: string | symbol, listener: (...args: any[]) => void): this;
    public parse(buffer: Buffer): void;
    public currentTick: number;
    public currentTime: number;
    public header: DemoHeader;
    public entities: Entities;
    public gameEvents: GameEvents;
    public gameRules: GameRules | null;
    public userMessages: userMessages;
    public players: Player[];
    public teams: Team[];
}
