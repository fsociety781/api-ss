
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceSetting
 * 
 */
export type DeviceSetting = $Result.DefaultSelection<Prisma.$DeviceSettingPayload>
/**
 * Model SensorReading
 * 
 */
export type SensorReading = $Result.DefaultSelection<Prisma.$SensorReadingPayload>
/**
 * Model Actuator
 * 
 */
export type Actuator = $Result.DefaultSelection<Prisma.$ActuatorPayload>
/**
 * Model ControlLog
 * 
 */
export type ControlLog = $Result.DefaultSelection<Prisma.$ControlLogPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model CultivationCycle
 * 
 */
export type CultivationCycle = $Result.DefaultSelection<Prisma.$CultivationCyclePayload>
/**
 * Model HarvestRecord
 * 
 */
export type HarvestRecord = $Result.DefaultSelection<Prisma.$HarvestRecordPayload>
/**
 * Model Firmware
 * 
 */
export type Firmware = $Result.DefaultSelection<Prisma.$FirmwarePayload>
/**
 * Model OtaLog
 * 
 */
export type OtaLog = $Result.DefaultSelection<Prisma.$OtaLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  TECHNICIAN: 'TECHNICIAN',
  ADMIN: 'ADMIN',
  FARMER: 'FARMER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  INVITED: 'INVITED',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const DeviceStatus: {
  READY: 'READY',
  ACTIVE: 'ACTIVE',
  OFFLINE: 'OFFLINE',
  SUSPENDED: 'SUSPENDED',
  MAINTENANCE: 'MAINTENANCE'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]


export const OwnershipType: {
  OWNED: 'OWNED',
  RENTED: 'RENTED',
  LEASED: 'LEASED'
};

export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType]


export const ControlMode: {
  MANUAL: 'MANUAL',
  AUTO: 'AUTO',
  HYBRID: 'HYBRID',
  SCHEDULE: 'SCHEDULE'
};

export type ControlMode = (typeof ControlMode)[keyof typeof ControlMode]


export const ActuatorType: {
  FLOOR: 'FLOOR',
  PUMP: 'PUMP',
  MISTING: 'MISTING',
  FLOOR_WATERING: 'FLOOR_WATERING',
  LIGHT: 'LIGHT',
  OTHER: 'OTHER'
};

export type ActuatorType = (typeof ActuatorType)[keyof typeof ActuatorType]


export const ActuatorState: {
  ON: 'ON',
  OFF: 'OFF',
  UNKNOWN: 'UNKNOWN'
};

export type ActuatorState = (typeof ActuatorState)[keyof typeof ActuatorState]


export const ControlAction: {
  TURN_ON: 'TURN_ON',
  TURN_OFF: 'TURN_OFF'
};

export type ControlAction = (typeof ControlAction)[keyof typeof ControlAction]


export const ControlSource: {
  MOBILE_APP: 'MOBILE_APP',
  WEB_DASHBOARD: 'WEB_DASHBOARD',
  AUTOMATION: 'AUTOMATION',
  SCHEDULE: 'SCHEDULE',
  DEVICE: 'DEVICE',
  TECHNICIAN: 'TECHNICIAN'
};

export type ControlSource = (typeof ControlSource)[keyof typeof ControlSource]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

export type OwnershipType = $Enums.OwnershipType

export const OwnershipType: typeof $Enums.OwnershipType

export type ControlMode = $Enums.ControlMode

export const ControlMode: typeof $Enums.ControlMode

export type ActuatorType = $Enums.ActuatorType

export const ActuatorType: typeof $Enums.ActuatorType

export type ActuatorState = $Enums.ActuatorState

export const ActuatorState: typeof $Enums.ActuatorState

export type ControlAction = $Enums.ControlAction

export const ControlAction: typeof $Enums.ControlAction

export type ControlSource = $Enums.ControlSource

export const ControlSource: typeof $Enums.ControlSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceSetting`: Exposes CRUD operations for the **DeviceSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceSettings
    * const deviceSettings = await prisma.deviceSetting.findMany()
    * ```
    */
  get deviceSetting(): Prisma.DeviceSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorReading`: Exposes CRUD operations for the **SensorReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorReadings
    * const sensorReadings = await prisma.sensorReading.findMany()
    * ```
    */
  get sensorReading(): Prisma.SensorReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actuator`: Exposes CRUD operations for the **Actuator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actuators
    * const actuators = await prisma.actuator.findMany()
    * ```
    */
  get actuator(): Prisma.ActuatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.controlLog`: Exposes CRUD operations for the **ControlLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ControlLogs
    * const controlLogs = await prisma.controlLog.findMany()
    * ```
    */
  get controlLog(): Prisma.ControlLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cultivationCycle`: Exposes CRUD operations for the **CultivationCycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CultivationCycles
    * const cultivationCycles = await prisma.cultivationCycle.findMany()
    * ```
    */
  get cultivationCycle(): Prisma.CultivationCycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.harvestRecord`: Exposes CRUD operations for the **HarvestRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HarvestRecords
    * const harvestRecords = await prisma.harvestRecord.findMany()
    * ```
    */
  get harvestRecord(): Prisma.HarvestRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.firmware`: Exposes CRUD operations for the **Firmware** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Firmware
    * const firmware = await prisma.firmware.findMany()
    * ```
    */
  get firmware(): Prisma.FirmwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otaLog`: Exposes CRUD operations for the **OtaLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtaLogs
    * const otaLogs = await prisma.otaLog.findMany()
    * ```
    */
  get otaLog(): Prisma.OtaLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Device: 'Device',
    DeviceSetting: 'DeviceSetting',
    SensorReading: 'SensorReading',
    Actuator: 'Actuator',
    ControlLog: 'ControlLog',
    Schedule: 'Schedule',
    CultivationCycle: 'CultivationCycle',
    HarvestRecord: 'HarvestRecord',
    Firmware: 'Firmware',
    OtaLog: 'OtaLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "device" | "deviceSetting" | "sensorReading" | "actuator" | "controlLog" | "schedule" | "cultivationCycle" | "harvestRecord" | "firmware" | "otaLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceSetting: {
        payload: Prisma.$DeviceSettingPayload<ExtArgs>
        fields: Prisma.DeviceSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          findFirst: {
            args: Prisma.DeviceSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          findMany: {
            args: Prisma.DeviceSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>[]
          }
          create: {
            args: Prisma.DeviceSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          createMany: {
            args: Prisma.DeviceSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>[]
          }
          delete: {
            args: Prisma.DeviceSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          update: {
            args: Prisma.DeviceSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          deleteMany: {
            args: Prisma.DeviceSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>[]
          }
          upsert: {
            args: Prisma.DeviceSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSettingPayload>
          }
          aggregate: {
            args: Prisma.DeviceSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceSetting>
          }
          groupBy: {
            args: Prisma.DeviceSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceSettingCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceSettingCountAggregateOutputType> | number
          }
        }
      }
      SensorReading: {
        payload: Prisma.$SensorReadingPayload<ExtArgs>
        fields: Prisma.SensorReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findFirst: {
            args: Prisma.SensorReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findMany: {
            args: Prisma.SensorReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          create: {
            args: Prisma.SensorReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          createMany: {
            args: Prisma.SensorReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          delete: {
            args: Prisma.SensorReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          update: {
            args: Prisma.SensorReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          deleteMany: {
            args: Prisma.SensorReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          upsert: {
            args: Prisma.SensorReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          aggregate: {
            args: Prisma.SensorReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorReading>
          }
          groupBy: {
            args: Prisma.SensorReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorReadingCountArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingCountAggregateOutputType> | number
          }
        }
      }
      Actuator: {
        payload: Prisma.$ActuatorPayload<ExtArgs>
        fields: Prisma.ActuatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActuatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActuatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          findFirst: {
            args: Prisma.ActuatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActuatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          findMany: {
            args: Prisma.ActuatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>[]
          }
          create: {
            args: Prisma.ActuatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          createMany: {
            args: Prisma.ActuatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActuatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>[]
          }
          delete: {
            args: Prisma.ActuatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          update: {
            args: Prisma.ActuatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          deleteMany: {
            args: Prisma.ActuatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActuatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActuatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>[]
          }
          upsert: {
            args: Prisma.ActuatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActuatorPayload>
          }
          aggregate: {
            args: Prisma.ActuatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActuator>
          }
          groupBy: {
            args: Prisma.ActuatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActuatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActuatorCountArgs<ExtArgs>
            result: $Utils.Optional<ActuatorCountAggregateOutputType> | number
          }
        }
      }
      ControlLog: {
        payload: Prisma.$ControlLogPayload<ExtArgs>
        fields: Prisma.ControlLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControlLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControlLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          findFirst: {
            args: Prisma.ControlLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControlLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          findMany: {
            args: Prisma.ControlLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>[]
          }
          create: {
            args: Prisma.ControlLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          createMany: {
            args: Prisma.ControlLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ControlLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>[]
          }
          delete: {
            args: Prisma.ControlLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          update: {
            args: Prisma.ControlLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          deleteMany: {
            args: Prisma.ControlLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ControlLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ControlLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>[]
          }
          upsert: {
            args: Prisma.ControlLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlLogPayload>
          }
          aggregate: {
            args: Prisma.ControlLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateControlLog>
          }
          groupBy: {
            args: Prisma.ControlLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ControlLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ControlLogCountArgs<ExtArgs>
            result: $Utils.Optional<ControlLogCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      CultivationCycle: {
        payload: Prisma.$CultivationCyclePayload<ExtArgs>
        fields: Prisma.CultivationCycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CultivationCycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CultivationCycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          findFirst: {
            args: Prisma.CultivationCycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CultivationCycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          findMany: {
            args: Prisma.CultivationCycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>[]
          }
          create: {
            args: Prisma.CultivationCycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          createMany: {
            args: Prisma.CultivationCycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CultivationCycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>[]
          }
          delete: {
            args: Prisma.CultivationCycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          update: {
            args: Prisma.CultivationCycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          deleteMany: {
            args: Prisma.CultivationCycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CultivationCycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CultivationCycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>[]
          }
          upsert: {
            args: Prisma.CultivationCycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CultivationCyclePayload>
          }
          aggregate: {
            args: Prisma.CultivationCycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCultivationCycle>
          }
          groupBy: {
            args: Prisma.CultivationCycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CultivationCycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CultivationCycleCountArgs<ExtArgs>
            result: $Utils.Optional<CultivationCycleCountAggregateOutputType> | number
          }
        }
      }
      HarvestRecord: {
        payload: Prisma.$HarvestRecordPayload<ExtArgs>
        fields: Prisma.HarvestRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HarvestRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HarvestRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          findFirst: {
            args: Prisma.HarvestRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HarvestRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          findMany: {
            args: Prisma.HarvestRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>[]
          }
          create: {
            args: Prisma.HarvestRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          createMany: {
            args: Prisma.HarvestRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HarvestRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>[]
          }
          delete: {
            args: Prisma.HarvestRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          update: {
            args: Prisma.HarvestRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          deleteMany: {
            args: Prisma.HarvestRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HarvestRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HarvestRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>[]
          }
          upsert: {
            args: Prisma.HarvestRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HarvestRecordPayload>
          }
          aggregate: {
            args: Prisma.HarvestRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHarvestRecord>
          }
          groupBy: {
            args: Prisma.HarvestRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<HarvestRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.HarvestRecordCountArgs<ExtArgs>
            result: $Utils.Optional<HarvestRecordCountAggregateOutputType> | number
          }
        }
      }
      Firmware: {
        payload: Prisma.$FirmwarePayload<ExtArgs>
        fields: Prisma.FirmwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FirmwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FirmwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          findFirst: {
            args: Prisma.FirmwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FirmwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          findMany: {
            args: Prisma.FirmwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>[]
          }
          create: {
            args: Prisma.FirmwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          createMany: {
            args: Prisma.FirmwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FirmwareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>[]
          }
          delete: {
            args: Prisma.FirmwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          update: {
            args: Prisma.FirmwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          deleteMany: {
            args: Prisma.FirmwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FirmwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FirmwareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>[]
          }
          upsert: {
            args: Prisma.FirmwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FirmwarePayload>
          }
          aggregate: {
            args: Prisma.FirmwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFirmware>
          }
          groupBy: {
            args: Prisma.FirmwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<FirmwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.FirmwareCountArgs<ExtArgs>
            result: $Utils.Optional<FirmwareCountAggregateOutputType> | number
          }
        }
      }
      OtaLog: {
        payload: Prisma.$OtaLogPayload<ExtArgs>
        fields: Prisma.OtaLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtaLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtaLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          findFirst: {
            args: Prisma.OtaLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtaLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          findMany: {
            args: Prisma.OtaLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>[]
          }
          create: {
            args: Prisma.OtaLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          createMany: {
            args: Prisma.OtaLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtaLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>[]
          }
          delete: {
            args: Prisma.OtaLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          update: {
            args: Prisma.OtaLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          deleteMany: {
            args: Prisma.OtaLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtaLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtaLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>[]
          }
          upsert: {
            args: Prisma.OtaLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtaLogPayload>
          }
          aggregate: {
            args: Prisma.OtaLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtaLog>
          }
          groupBy: {
            args: Prisma.OtaLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtaLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtaLogCountArgs<ExtArgs>
            result: $Utils.Optional<OtaLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    device?: DeviceOmit
    deviceSetting?: DeviceSettingOmit
    sensorReading?: SensorReadingOmit
    actuator?: ActuatorOmit
    controlLog?: ControlLogOmit
    schedule?: ScheduleOmit
    cultivationCycle?: CultivationCycleOmit
    harvestRecord?: HarvestRecordOmit
    firmware?: FirmwareOmit
    otaLog?: OtaLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdUsers: number
    devices: number
    createdDevices: number
    firmwares: number
    controlLogs: number
    schedules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    createdDevices?: boolean | UserCountOutputTypeCountCreatedDevicesArgs
    firmwares?: boolean | UserCountOutputTypeCountFirmwaresArgs
    controlLogs?: boolean | UserCountOutputTypeCountControlLogsArgs
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFirmwaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FirmwareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountControlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    sensorReadings: number
    actuators: number
    controlLogs: number
    schedules: number
    cultivationCycles: number
    otaLogs: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensorReadings?: boolean | DeviceCountOutputTypeCountSensorReadingsArgs
    actuators?: boolean | DeviceCountOutputTypeCountActuatorsArgs
    controlLogs?: boolean | DeviceCountOutputTypeCountControlLogsArgs
    schedules?: boolean | DeviceCountOutputTypeCountSchedulesArgs
    cultivationCycles?: boolean | DeviceCountOutputTypeCountCultivationCyclesArgs
    otaLogs?: boolean | DeviceCountOutputTypeCountOtaLogsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSensorReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountActuatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActuatorWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountControlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlLogWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountCultivationCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultivationCycleWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountOtaLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtaLogWhereInput
  }


  /**
   * Count Type ActuatorCountOutputType
   */

  export type ActuatorCountOutputType = {
    controlLogs: number
    schedules: number
  }

  export type ActuatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controlLogs?: boolean | ActuatorCountOutputTypeCountControlLogsArgs
    schedules?: boolean | ActuatorCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ActuatorCountOutputType without action
   */
  export type ActuatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActuatorCountOutputType
     */
    select?: ActuatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActuatorCountOutputType without action
   */
  export type ActuatorCountOutputTypeCountControlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlLogWhereInput
  }

  /**
   * ActuatorCountOutputType without action
   */
  export type ActuatorCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type CultivationCycleCountOutputType
   */

  export type CultivationCycleCountOutputType = {
    harvests: number
  }

  export type CultivationCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    harvests?: boolean | CultivationCycleCountOutputTypeCountHarvestsArgs
  }

  // Custom InputTypes
  /**
   * CultivationCycleCountOutputType without action
   */
  export type CultivationCycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycleCountOutputType
     */
    select?: CultivationCycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CultivationCycleCountOutputType without action
   */
  export type CultivationCycleCountOutputTypeCountHarvestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HarvestRecordWhereInput
  }


  /**
   * Count Type FirmwareCountOutputType
   */

  export type FirmwareCountOutputType = {
    otaLogs: number
  }

  export type FirmwareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otaLogs?: boolean | FirmwareCountOutputTypeCountOtaLogsArgs
  }

  // Custom InputTypes
  /**
   * FirmwareCountOutputType without action
   */
  export type FirmwareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirmwareCountOutputType
     */
    select?: FirmwareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FirmwareCountOutputType without action
   */
  export type FirmwareCountOutputTypeCountOtaLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtaLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phoneNumber: string | null
    email: string | null
    passwordHash: string | null
    farmName: string | null
    farmAddress: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    profileCompleted: boolean | null
    mustChangePassword: boolean | null
    createdById: string | null
    activatedAt: Date | null
    lastLoginAt: Date | null
    fcmToken: string | null
    lastFcmTokenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phoneNumber: string | null
    email: string | null
    passwordHash: string | null
    farmName: string | null
    farmAddress: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    profileCompleted: boolean | null
    mustChangePassword: boolean | null
    createdById: string | null
    activatedAt: Date | null
    lastLoginAt: Date | null
    fcmToken: string | null
    lastFcmTokenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    phoneNumber: number
    email: number
    passwordHash: number
    farmName: number
    farmAddress: number
    role: number
    status: number
    profileCompleted: number
    mustChangePassword: number
    createdById: number
    activatedAt: number
    lastLoginAt: number
    fcmToken: number
    lastFcmTokenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    passwordHash?: true
    farmName?: true
    farmAddress?: true
    role?: true
    status?: true
    profileCompleted?: true
    mustChangePassword?: true
    createdById?: true
    activatedAt?: true
    lastLoginAt?: true
    fcmToken?: true
    lastFcmTokenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    passwordHash?: true
    farmName?: true
    farmAddress?: true
    role?: true
    status?: true
    profileCompleted?: true
    mustChangePassword?: true
    createdById?: true
    activatedAt?: true
    lastLoginAt?: true
    fcmToken?: true
    lastFcmTokenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    email?: true
    passwordHash?: true
    farmName?: true
    farmAddress?: true
    role?: true
    status?: true
    profileCompleted?: true
    mustChangePassword?: true
    createdById?: true
    activatedAt?: true
    lastLoginAt?: true
    fcmToken?: true
    lastFcmTokenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string | null
    phoneNumber: string
    email: string | null
    passwordHash: string | null
    farmName: string | null
    farmAddress: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    profileCompleted: boolean
    mustChangePassword: boolean
    createdById: string | null
    activatedAt: Date | null
    lastLoginAt: Date | null
    fcmToken: string | null
    lastFcmTokenAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    passwordHash?: boolean
    farmName?: boolean
    farmAddress?: boolean
    role?: boolean
    status?: boolean
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastLoginAt?: boolean
    fcmToken?: boolean
    lastFcmTokenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    createdDevices?: boolean | User$createdDevicesArgs<ExtArgs>
    firmwares?: boolean | User$firmwaresArgs<ExtArgs>
    controlLogs?: boolean | User$controlLogsArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    passwordHash?: boolean
    farmName?: boolean
    farmAddress?: boolean
    role?: boolean
    status?: boolean
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastLoginAt?: boolean
    fcmToken?: boolean
    lastFcmTokenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    passwordHash?: boolean
    farmName?: boolean
    farmAddress?: boolean
    role?: boolean
    status?: boolean
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastLoginAt?: boolean
    fcmToken?: boolean
    lastFcmTokenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    email?: boolean
    passwordHash?: boolean
    farmName?: boolean
    farmAddress?: boolean
    role?: boolean
    status?: boolean
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastLoginAt?: boolean
    fcmToken?: boolean
    lastFcmTokenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phoneNumber" | "email" | "passwordHash" | "farmName" | "farmAddress" | "role" | "status" | "profileCompleted" | "mustChangePassword" | "createdById" | "activatedAt" | "lastLoginAt" | "fcmToken" | "lastFcmTokenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    createdDevices?: boolean | User$createdDevicesArgs<ExtArgs>
    firmwares?: boolean | User$firmwaresArgs<ExtArgs>
    controlLogs?: boolean | User$controlLogsArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      createdDevices: Prisma.$DevicePayload<ExtArgs>[]
      firmwares: Prisma.$FirmwarePayload<ExtArgs>[]
      controlLogs: Prisma.$ControlLogPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string | null
      phoneNumber: string
      email: string | null
      passwordHash: string | null
      farmName: string | null
      farmAddress: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      profileCompleted: boolean
      mustChangePassword: boolean
      createdById: string | null
      activatedAt: Date | null
      lastLoginAt: Date | null
      fcmToken: string | null
      lastFcmTokenAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdDevices<T extends User$createdDevicesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    firmwares<T extends User$firmwaresArgs<ExtArgs> = {}>(args?: Subset<T, User$firmwaresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    controlLogs<T extends User$controlLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$controlLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends User$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly farmName: FieldRef<"User", 'String'>
    readonly farmAddress: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly profileCompleted: FieldRef<"User", 'Boolean'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly createdById: FieldRef<"User", 'String'>
    readonly activatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly fcmToken: FieldRef<"User", 'String'>
    readonly lastFcmTokenAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.createdDevices
   */
  export type User$createdDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.firmwares
   */
  export type User$firmwaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    where?: FirmwareWhereInput
    orderBy?: FirmwareOrderByWithRelationInput | FirmwareOrderByWithRelationInput[]
    cursor?: FirmwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FirmwareScalarFieldEnum | FirmwareScalarFieldEnum[]
  }

  /**
   * User.controlLogs
   */
  export type User$controlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    where?: ControlLogWhereInput
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    cursor?: ControlLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * User.schedules
   */
  export type User$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    rssiDbm: number | null
    uptimeMs: number | null
  }

  export type DeviceSumAggregateOutputType = {
    rssiDbm: number | null
    uptimeMs: bigint | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    activationCode: string | null
    name: string | null
    model: string | null
    hardwareVersion: string | null
    firmwareVersion: string | null
    macAddress: string | null
    status: $Enums.DeviceStatus | null
    ownershipType: $Enums.OwnershipType | null
    controlMode: $Enums.ControlMode | null
    farmerId: string | null
    createdById: string | null
    activatedAt: Date | null
    lastSeenAt: Date | null
    rssiDbm: number | null
    uptimeMs: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    activationCode: string | null
    name: string | null
    model: string | null
    hardwareVersion: string | null
    firmwareVersion: string | null
    macAddress: string | null
    status: $Enums.DeviceStatus | null
    ownershipType: $Enums.OwnershipType | null
    controlMode: $Enums.ControlMode | null
    farmerId: string | null
    createdById: string | null
    activatedAt: Date | null
    lastSeenAt: Date | null
    rssiDbm: number | null
    uptimeMs: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    serialNumber: number
    activationCode: number
    name: number
    model: number
    hardwareVersion: number
    firmwareVersion: number
    macAddress: number
    status: number
    ownershipType: number
    controlMode: number
    farmerId: number
    createdById: number
    activatedAt: number
    lastSeenAt: number
    rssiDbm: number
    uptimeMs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    rssiDbm?: true
    uptimeMs?: true
  }

  export type DeviceSumAggregateInputType = {
    rssiDbm?: true
    uptimeMs?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    serialNumber?: true
    activationCode?: true
    name?: true
    model?: true
    hardwareVersion?: true
    firmwareVersion?: true
    macAddress?: true
    status?: true
    ownershipType?: true
    controlMode?: true
    farmerId?: true
    createdById?: true
    activatedAt?: true
    lastSeenAt?: true
    rssiDbm?: true
    uptimeMs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    activationCode?: true
    name?: true
    model?: true
    hardwareVersion?: true
    firmwareVersion?: true
    macAddress?: true
    status?: true
    ownershipType?: true
    controlMode?: true
    farmerId?: true
    createdById?: true
    activatedAt?: true
    lastSeenAt?: true
    rssiDbm?: true
    uptimeMs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    serialNumber?: true
    activationCode?: true
    name?: true
    model?: true
    hardwareVersion?: true
    firmwareVersion?: true
    macAddress?: true
    status?: true
    ownershipType?: true
    controlMode?: true
    farmerId?: true
    createdById?: true
    activatedAt?: true
    lastSeenAt?: true
    rssiDbm?: true
    uptimeMs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    serialNumber: string
    activationCode: string
    name: string | null
    model: string
    hardwareVersion: string | null
    firmwareVersion: string | null
    macAddress: string | null
    status: $Enums.DeviceStatus
    ownershipType: $Enums.OwnershipType
    controlMode: $Enums.ControlMode
    farmerId: string | null
    createdById: string | null
    activatedAt: Date | null
    lastSeenAt: Date | null
    rssiDbm: number | null
    uptimeMs: bigint | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    activationCode?: boolean
    name?: boolean
    model?: boolean
    hardwareVersion?: boolean
    firmwareVersion?: boolean
    macAddress?: boolean
    status?: boolean
    ownershipType?: boolean
    controlMode?: boolean
    farmerId?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    rssiDbm?: boolean
    uptimeMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
    setting?: boolean | Device$settingArgs<ExtArgs>
    sensorReadings?: boolean | Device$sensorReadingsArgs<ExtArgs>
    actuators?: boolean | Device$actuatorsArgs<ExtArgs>
    controlLogs?: boolean | Device$controlLogsArgs<ExtArgs>
    schedules?: boolean | Device$schedulesArgs<ExtArgs>
    cultivationCycles?: boolean | Device$cultivationCyclesArgs<ExtArgs>
    otaLogs?: boolean | Device$otaLogsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    activationCode?: boolean
    name?: boolean
    model?: boolean
    hardwareVersion?: boolean
    firmwareVersion?: boolean
    macAddress?: boolean
    status?: boolean
    ownershipType?: boolean
    controlMode?: boolean
    farmerId?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    rssiDbm?: boolean
    uptimeMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    activationCode?: boolean
    name?: boolean
    model?: boolean
    hardwareVersion?: boolean
    firmwareVersion?: boolean
    macAddress?: boolean
    status?: boolean
    ownershipType?: boolean
    controlMode?: boolean
    farmerId?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    rssiDbm?: boolean
    uptimeMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    serialNumber?: boolean
    activationCode?: boolean
    name?: boolean
    model?: boolean
    hardwareVersion?: boolean
    firmwareVersion?: boolean
    macAddress?: boolean
    status?: boolean
    ownershipType?: boolean
    controlMode?: boolean
    farmerId?: boolean
    createdById?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    rssiDbm?: boolean
    uptimeMs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNumber" | "activationCode" | "name" | "model" | "hardwareVersion" | "firmwareVersion" | "macAddress" | "status" | "ownershipType" | "controlMode" | "farmerId" | "createdById" | "activatedAt" | "lastSeenAt" | "rssiDbm" | "uptimeMs" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
    setting?: boolean | Device$settingArgs<ExtArgs>
    sensorReadings?: boolean | Device$sensorReadingsArgs<ExtArgs>
    actuators?: boolean | Device$actuatorsArgs<ExtArgs>
    controlLogs?: boolean | Device$controlLogsArgs<ExtArgs>
    schedules?: boolean | Device$schedulesArgs<ExtArgs>
    cultivationCycles?: boolean | Device$cultivationCyclesArgs<ExtArgs>
    otaLogs?: boolean | Device$otaLogsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | Device$farmerArgs<ExtArgs>
    createdBy?: boolean | Device$createdByArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      farmer: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      setting: Prisma.$DeviceSettingPayload<ExtArgs> | null
      sensorReadings: Prisma.$SensorReadingPayload<ExtArgs>[]
      actuators: Prisma.$ActuatorPayload<ExtArgs>[]
      controlLogs: Prisma.$ControlLogPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      cultivationCycles: Prisma.$CultivationCyclePayload<ExtArgs>[]
      otaLogs: Prisma.$OtaLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNumber: string
      activationCode: string
      name: string | null
      model: string
      hardwareVersion: string | null
      firmwareVersion: string | null
      macAddress: string | null
      status: $Enums.DeviceStatus
      ownershipType: $Enums.OwnershipType
      controlMode: $Enums.ControlMode
      farmerId: string | null
      createdById: string | null
      activatedAt: Date | null
      lastSeenAt: Date | null
      rssiDbm: number | null
      uptimeMs: bigint | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends Device$farmerArgs<ExtArgs> = {}>(args?: Subset<T, Device$farmerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Device$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Device$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    setting<T extends Device$settingArgs<ExtArgs> = {}>(args?: Subset<T, Device$settingArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sensorReadings<T extends Device$sensorReadingsArgs<ExtArgs> = {}>(args?: Subset<T, Device$sensorReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actuators<T extends Device$actuatorsArgs<ExtArgs> = {}>(args?: Subset<T, Device$actuatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    controlLogs<T extends Device$controlLogsArgs<ExtArgs> = {}>(args?: Subset<T, Device$controlLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Device$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Device$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cultivationCycles<T extends Device$cultivationCyclesArgs<ExtArgs> = {}>(args?: Subset<T, Device$cultivationCyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otaLogs<T extends Device$otaLogsArgs<ExtArgs> = {}>(args?: Subset<T, Device$otaLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly serialNumber: FieldRef<"Device", 'String'>
    readonly activationCode: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly model: FieldRef<"Device", 'String'>
    readonly hardwareVersion: FieldRef<"Device", 'String'>
    readonly firmwareVersion: FieldRef<"Device", 'String'>
    readonly macAddress: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'DeviceStatus'>
    readonly ownershipType: FieldRef<"Device", 'OwnershipType'>
    readonly controlMode: FieldRef<"Device", 'ControlMode'>
    readonly farmerId: FieldRef<"Device", 'String'>
    readonly createdById: FieldRef<"Device", 'String'>
    readonly activatedAt: FieldRef<"Device", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Device", 'DateTime'>
    readonly rssiDbm: FieldRef<"Device", 'Int'>
    readonly uptimeMs: FieldRef<"Device", 'BigInt'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.farmer
   */
  export type Device$farmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Device.createdBy
   */
  export type Device$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Device.setting
   */
  export type Device$settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    where?: DeviceSettingWhereInput
  }

  /**
   * Device.sensorReadings
   */
  export type Device$sensorReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    cursor?: SensorReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * Device.actuators
   */
  export type Device$actuatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    where?: ActuatorWhereInput
    orderBy?: ActuatorOrderByWithRelationInput | ActuatorOrderByWithRelationInput[]
    cursor?: ActuatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActuatorScalarFieldEnum | ActuatorScalarFieldEnum[]
  }

  /**
   * Device.controlLogs
   */
  export type Device$controlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    where?: ControlLogWhereInput
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    cursor?: ControlLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * Device.schedules
   */
  export type Device$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Device.cultivationCycles
   */
  export type Device$cultivationCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    where?: CultivationCycleWhereInput
    orderBy?: CultivationCycleOrderByWithRelationInput | CultivationCycleOrderByWithRelationInput[]
    cursor?: CultivationCycleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CultivationCycleScalarFieldEnum | CultivationCycleScalarFieldEnum[]
  }

  /**
   * Device.otaLogs
   */
  export type Device$otaLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    where?: OtaLogWhereInput
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    cursor?: OtaLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtaLogScalarFieldEnum | OtaLogScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceSetting
   */

  export type AggregateDeviceSetting = {
    _count: DeviceSettingCountAggregateOutputType | null
    _avg: DeviceSettingAvgAggregateOutputType | null
    _sum: DeviceSettingSumAggregateOutputType | null
    _min: DeviceSettingMinAggregateOutputType | null
    _max: DeviceSettingMaxAggregateOutputType | null
  }

  export type DeviceSettingAvgAggregateOutputType = {
    minTemperature: Decimal | null
    maxTemperature: Decimal | null
    minHumidity: Decimal | null
    maxHumidity: Decimal | null
    timerDurationSeconds: number | null
    telemetryIntervalSec: number | null
  }

  export type DeviceSettingSumAggregateOutputType = {
    minTemperature: Decimal | null
    maxTemperature: Decimal | null
    minHumidity: Decimal | null
    maxHumidity: Decimal | null
    timerDurationSeconds: number | null
    telemetryIntervalSec: number | null
  }

  export type DeviceSettingMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    minTemperature: Decimal | null
    maxTemperature: Decimal | null
    minHumidity: Decimal | null
    maxHumidity: Decimal | null
    timerDurationSeconds: number | null
    telemetryIntervalSec: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSettingMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    minTemperature: Decimal | null
    maxTemperature: Decimal | null
    minHumidity: Decimal | null
    maxHumidity: Decimal | null
    timerDurationSeconds: number | null
    telemetryIntervalSec: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSettingCountAggregateOutputType = {
    id: number
    deviceId: number
    minTemperature: number
    maxTemperature: number
    minHumidity: number
    maxHumidity: number
    timerDurationSeconds: number
    telemetryIntervalSec: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceSettingAvgAggregateInputType = {
    minTemperature?: true
    maxTemperature?: true
    minHumidity?: true
    maxHumidity?: true
    timerDurationSeconds?: true
    telemetryIntervalSec?: true
  }

  export type DeviceSettingSumAggregateInputType = {
    minTemperature?: true
    maxTemperature?: true
    minHumidity?: true
    maxHumidity?: true
    timerDurationSeconds?: true
    telemetryIntervalSec?: true
  }

  export type DeviceSettingMinAggregateInputType = {
    id?: true
    deviceId?: true
    minTemperature?: true
    maxTemperature?: true
    minHumidity?: true
    maxHumidity?: true
    timerDurationSeconds?: true
    telemetryIntervalSec?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSettingMaxAggregateInputType = {
    id?: true
    deviceId?: true
    minTemperature?: true
    maxTemperature?: true
    minHumidity?: true
    maxHumidity?: true
    timerDurationSeconds?: true
    telemetryIntervalSec?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSettingCountAggregateInputType = {
    id?: true
    deviceId?: true
    minTemperature?: true
    maxTemperature?: true
    minHumidity?: true
    maxHumidity?: true
    timerDurationSeconds?: true
    telemetryIntervalSec?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSetting to aggregate.
     */
    where?: DeviceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSettings to fetch.
     */
    orderBy?: DeviceSettingOrderByWithRelationInput | DeviceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceSettings
    **/
    _count?: true | DeviceSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSettingMaxAggregateInputType
  }

  export type GetDeviceSettingAggregateType<T extends DeviceSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceSetting[P]>
      : GetScalarType<T[P], AggregateDeviceSetting[P]>
  }




  export type DeviceSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSettingWhereInput
    orderBy?: DeviceSettingOrderByWithAggregationInput | DeviceSettingOrderByWithAggregationInput[]
    by: DeviceSettingScalarFieldEnum[] | DeviceSettingScalarFieldEnum
    having?: DeviceSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceSettingCountAggregateInputType | true
    _avg?: DeviceSettingAvgAggregateInputType
    _sum?: DeviceSettingSumAggregateInputType
    _min?: DeviceSettingMinAggregateInputType
    _max?: DeviceSettingMaxAggregateInputType
  }

  export type DeviceSettingGroupByOutputType = {
    id: string
    deviceId: string
    minTemperature: Decimal | null
    maxTemperature: Decimal | null
    minHumidity: Decimal | null
    maxHumidity: Decimal | null
    timerDurationSeconds: number | null
    telemetryIntervalSec: number
    createdAt: Date
    updatedAt: Date
    _count: DeviceSettingCountAggregateOutputType | null
    _avg: DeviceSettingAvgAggregateOutputType | null
    _sum: DeviceSettingSumAggregateOutputType | null
    _min: DeviceSettingMinAggregateOutputType | null
    _max: DeviceSettingMaxAggregateOutputType | null
  }

  type GetDeviceSettingGroupByPayload<T extends DeviceSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceSettingGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceSettingGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    minHumidity?: boolean
    maxHumidity?: boolean
    timerDurationSeconds?: boolean
    telemetryIntervalSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSetting"]>

  export type DeviceSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    minHumidity?: boolean
    maxHumidity?: boolean
    timerDurationSeconds?: boolean
    telemetryIntervalSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSetting"]>

  export type DeviceSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    minHumidity?: boolean
    maxHumidity?: boolean
    timerDurationSeconds?: boolean
    telemetryIntervalSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSetting"]>

  export type DeviceSettingSelectScalar = {
    id?: boolean
    deviceId?: boolean
    minTemperature?: boolean
    maxTemperature?: boolean
    minHumidity?: boolean
    maxHumidity?: boolean
    timerDurationSeconds?: boolean
    telemetryIntervalSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "minTemperature" | "maxTemperature" | "minHumidity" | "maxHumidity" | "timerDurationSeconds" | "telemetryIntervalSec" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceSetting"]>
  export type DeviceSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceSetting"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      minTemperature: Prisma.Decimal | null
      maxTemperature: Prisma.Decimal | null
      minHumidity: Prisma.Decimal | null
      maxHumidity: Prisma.Decimal | null
      timerDurationSeconds: number | null
      telemetryIntervalSec: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceSetting"]>
    composites: {}
  }

  type DeviceSettingGetPayload<S extends boolean | null | undefined | DeviceSettingDefaultArgs> = $Result.GetResult<Prisma.$DeviceSettingPayload, S>

  type DeviceSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceSettingCountAggregateInputType | true
    }

  export interface DeviceSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceSetting'], meta: { name: 'DeviceSetting' } }
    /**
     * Find zero or one DeviceSetting that matches the filter.
     * @param {DeviceSettingFindUniqueArgs} args - Arguments to find a DeviceSetting
     * @example
     * // Get one DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSettingFindUniqueArgs>(args: SelectSubset<T, DeviceSettingFindUniqueArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceSettingFindUniqueOrThrowArgs} args - Arguments to find a DeviceSetting
     * @example
     * // Get one DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingFindFirstArgs} args - Arguments to find a DeviceSetting
     * @example
     * // Get one DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSettingFindFirstArgs>(args?: SelectSubset<T, DeviceSettingFindFirstArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingFindFirstOrThrowArgs} args - Arguments to find a DeviceSetting
     * @example
     * // Get one DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSettings
     * const deviceSettings = await prisma.deviceSetting.findMany()
     * 
     * // Get first 10 DeviceSettings
     * const deviceSettings = await prisma.deviceSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceSettingWithIdOnly = await prisma.deviceSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceSettingFindManyArgs>(args?: SelectSubset<T, DeviceSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceSetting.
     * @param {DeviceSettingCreateArgs} args - Arguments to create a DeviceSetting.
     * @example
     * // Create one DeviceSetting
     * const DeviceSetting = await prisma.deviceSetting.create({
     *   data: {
     *     // ... data to create a DeviceSetting
     *   }
     * })
     * 
     */
    create<T extends DeviceSettingCreateArgs>(args: SelectSubset<T, DeviceSettingCreateArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceSettings.
     * @param {DeviceSettingCreateManyArgs} args - Arguments to create many DeviceSettings.
     * @example
     * // Create many DeviceSettings
     * const deviceSetting = await prisma.deviceSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceSettingCreateManyArgs>(args?: SelectSubset<T, DeviceSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceSettings and returns the data saved in the database.
     * @param {DeviceSettingCreateManyAndReturnArgs} args - Arguments to create many DeviceSettings.
     * @example
     * // Create many DeviceSettings
     * const deviceSetting = await prisma.deviceSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceSettings and only return the `id`
     * const deviceSettingWithIdOnly = await prisma.deviceSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceSetting.
     * @param {DeviceSettingDeleteArgs} args - Arguments to delete one DeviceSetting.
     * @example
     * // Delete one DeviceSetting
     * const DeviceSetting = await prisma.deviceSetting.delete({
     *   where: {
     *     // ... filter to delete one DeviceSetting
     *   }
     * })
     * 
     */
    delete<T extends DeviceSettingDeleteArgs>(args: SelectSubset<T, DeviceSettingDeleteArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceSetting.
     * @param {DeviceSettingUpdateArgs} args - Arguments to update one DeviceSetting.
     * @example
     * // Update one DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceSettingUpdateArgs>(args: SelectSubset<T, DeviceSettingUpdateArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceSettings.
     * @param {DeviceSettingDeleteManyArgs} args - Arguments to filter DeviceSettings to delete.
     * @example
     * // Delete a few DeviceSettings
     * const { count } = await prisma.deviceSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceSettingDeleteManyArgs>(args?: SelectSubset<T, DeviceSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSettings
     * const deviceSetting = await prisma.deviceSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceSettingUpdateManyArgs>(args: SelectSubset<T, DeviceSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSettings and returns the data updated in the database.
     * @param {DeviceSettingUpdateManyAndReturnArgs} args - Arguments to update many DeviceSettings.
     * @example
     * // Update many DeviceSettings
     * const deviceSetting = await prisma.deviceSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceSettings and only return the `id`
     * const deviceSettingWithIdOnly = await prisma.deviceSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceSetting.
     * @param {DeviceSettingUpsertArgs} args - Arguments to update or create a DeviceSetting.
     * @example
     * // Update or create a DeviceSetting
     * const deviceSetting = await prisma.deviceSetting.upsert({
     *   create: {
     *     // ... data to create a DeviceSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSetting we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSettingUpsertArgs>(args: SelectSubset<T, DeviceSettingUpsertArgs<ExtArgs>>): Prisma__DeviceSettingClient<$Result.GetResult<Prisma.$DeviceSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingCountArgs} args - Arguments to filter DeviceSettings to count.
     * @example
     * // Count the number of DeviceSettings
     * const count = await prisma.deviceSetting.count({
     *   where: {
     *     // ... the filter for the DeviceSettings we want to count
     *   }
     * })
    **/
    count<T extends DeviceSettingCountArgs>(
      args?: Subset<T, DeviceSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceSettingAggregateArgs>(args: Subset<T, DeviceSettingAggregateArgs>): Prisma.PrismaPromise<GetDeviceSettingAggregateType<T>>

    /**
     * Group by DeviceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceSettingGroupByArgs['orderBy'] }
        : { orderBy?: DeviceSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceSetting model
   */
  readonly fields: DeviceSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceSetting model
   */
  interface DeviceSettingFieldRefs {
    readonly id: FieldRef<"DeviceSetting", 'String'>
    readonly deviceId: FieldRef<"DeviceSetting", 'String'>
    readonly minTemperature: FieldRef<"DeviceSetting", 'Decimal'>
    readonly maxTemperature: FieldRef<"DeviceSetting", 'Decimal'>
    readonly minHumidity: FieldRef<"DeviceSetting", 'Decimal'>
    readonly maxHumidity: FieldRef<"DeviceSetting", 'Decimal'>
    readonly timerDurationSeconds: FieldRef<"DeviceSetting", 'Int'>
    readonly telemetryIntervalSec: FieldRef<"DeviceSetting", 'Int'>
    readonly createdAt: FieldRef<"DeviceSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceSetting findUnique
   */
  export type DeviceSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSetting to fetch.
     */
    where: DeviceSettingWhereUniqueInput
  }

  /**
   * DeviceSetting findUniqueOrThrow
   */
  export type DeviceSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSetting to fetch.
     */
    where: DeviceSettingWhereUniqueInput
  }

  /**
   * DeviceSetting findFirst
   */
  export type DeviceSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSetting to fetch.
     */
    where?: DeviceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSettings to fetch.
     */
    orderBy?: DeviceSettingOrderByWithRelationInput | DeviceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSettings.
     */
    cursor?: DeviceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSettings.
     */
    distinct?: DeviceSettingScalarFieldEnum | DeviceSettingScalarFieldEnum[]
  }

  /**
   * DeviceSetting findFirstOrThrow
   */
  export type DeviceSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSetting to fetch.
     */
    where?: DeviceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSettings to fetch.
     */
    orderBy?: DeviceSettingOrderByWithRelationInput | DeviceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSettings.
     */
    cursor?: DeviceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSettings.
     */
    distinct?: DeviceSettingScalarFieldEnum | DeviceSettingScalarFieldEnum[]
  }

  /**
   * DeviceSetting findMany
   */
  export type DeviceSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSettings to fetch.
     */
    where?: DeviceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSettings to fetch.
     */
    orderBy?: DeviceSettingOrderByWithRelationInput | DeviceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceSettings.
     */
    cursor?: DeviceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSettings.
     */
    distinct?: DeviceSettingScalarFieldEnum | DeviceSettingScalarFieldEnum[]
  }

  /**
   * DeviceSetting create
   */
  export type DeviceSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceSetting.
     */
    data: XOR<DeviceSettingCreateInput, DeviceSettingUncheckedCreateInput>
  }

  /**
   * DeviceSetting createMany
   */
  export type DeviceSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSettings.
     */
    data: DeviceSettingCreateManyInput | DeviceSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceSetting createManyAndReturn
   */
  export type DeviceSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceSettings.
     */
    data: DeviceSettingCreateManyInput | DeviceSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSetting update
   */
  export type DeviceSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceSetting.
     */
    data: XOR<DeviceSettingUpdateInput, DeviceSettingUncheckedUpdateInput>
    /**
     * Choose, which DeviceSetting to update.
     */
    where: DeviceSettingWhereUniqueInput
  }

  /**
   * DeviceSetting updateMany
   */
  export type DeviceSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSettings.
     */
    data: XOR<DeviceSettingUpdateManyMutationInput, DeviceSettingUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSettings to update
     */
    where?: DeviceSettingWhereInput
    /**
     * Limit how many DeviceSettings to update.
     */
    limit?: number
  }

  /**
   * DeviceSetting updateManyAndReturn
   */
  export type DeviceSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * The data used to update DeviceSettings.
     */
    data: XOR<DeviceSettingUpdateManyMutationInput, DeviceSettingUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSettings to update
     */
    where?: DeviceSettingWhereInput
    /**
     * Limit how many DeviceSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSetting upsert
   */
  export type DeviceSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceSetting to update in case it exists.
     */
    where: DeviceSettingWhereUniqueInput
    /**
     * In case the DeviceSetting found by the `where` argument doesn't exist, create a new DeviceSetting with this data.
     */
    create: XOR<DeviceSettingCreateInput, DeviceSettingUncheckedCreateInput>
    /**
     * In case the DeviceSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceSettingUpdateInput, DeviceSettingUncheckedUpdateInput>
  }

  /**
   * DeviceSetting delete
   */
  export type DeviceSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
    /**
     * Filter which DeviceSetting to delete.
     */
    where: DeviceSettingWhereUniqueInput
  }

  /**
   * DeviceSetting deleteMany
   */
  export type DeviceSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSettings to delete
     */
    where?: DeviceSettingWhereInput
    /**
     * Limit how many DeviceSettings to delete.
     */
    limit?: number
  }

  /**
   * DeviceSetting without action
   */
  export type DeviceSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSetting
     */
    select?: DeviceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSetting
     */
    omit?: DeviceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSettingInclude<ExtArgs> | null
  }


  /**
   * Model SensorReading
   */

  export type AggregateSensorReading = {
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  export type SensorReadingAvgAggregateOutputType = {
    id: number | null
    temperature: Decimal | null
    humidity: Decimal | null
  }

  export type SensorReadingSumAggregateOutputType = {
    id: bigint | null
    temperature: Decimal | null
    humidity: Decimal | null
  }

  export type SensorReadingMinAggregateOutputType = {
    id: bigint | null
    deviceId: string | null
    temperature: Decimal | null
    humidity: Decimal | null
    recordedAt: Date | null
  }

  export type SensorReadingMaxAggregateOutputType = {
    id: bigint | null
    deviceId: string | null
    temperature: Decimal | null
    humidity: Decimal | null
    recordedAt: Date | null
  }

  export type SensorReadingCountAggregateOutputType = {
    id: number
    deviceId: number
    temperature: number
    humidity: number
    recordedAt: number
    _all: number
  }


  export type SensorReadingAvgAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
  }

  export type SensorReadingSumAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
  }

  export type SensorReadingMinAggregateInputType = {
    id?: true
    deviceId?: true
    temperature?: true
    humidity?: true
    recordedAt?: true
  }

  export type SensorReadingMaxAggregateInputType = {
    id?: true
    deviceId?: true
    temperature?: true
    humidity?: true
    recordedAt?: true
  }

  export type SensorReadingCountAggregateInputType = {
    id?: true
    deviceId?: true
    temperature?: true
    humidity?: true
    recordedAt?: true
    _all?: true
  }

  export type SensorReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReading to aggregate.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorReadings
    **/
    _count?: true | SensorReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorReadingMaxAggregateInputType
  }

  export type GetSensorReadingAggregateType<T extends SensorReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorReading[P]>
      : GetScalarType<T[P], AggregateSensorReading[P]>
  }




  export type SensorReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithAggregationInput | SensorReadingOrderByWithAggregationInput[]
    by: SensorReadingScalarFieldEnum[] | SensorReadingScalarFieldEnum
    having?: SensorReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorReadingCountAggregateInputType | true
    _avg?: SensorReadingAvgAggregateInputType
    _sum?: SensorReadingSumAggregateInputType
    _min?: SensorReadingMinAggregateInputType
    _max?: SensorReadingMaxAggregateInputType
  }

  export type SensorReadingGroupByOutputType = {
    id: bigint
    deviceId: string
    temperature: Decimal
    humidity: Decimal
    recordedAt: Date
    _count: SensorReadingCountAggregateOutputType | null
    _avg: SensorReadingAvgAggregateOutputType | null
    _sum: SensorReadingSumAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  type GetSensorReadingGroupByPayload<T extends SensorReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
            : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
        }
      >
    >


  export type SensorReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    temperature?: boolean
    humidity?: boolean
    recordedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    temperature?: boolean
    humidity?: boolean
    recordedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    temperature?: boolean
    humidity?: boolean
    recordedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>

  export type SensorReadingSelectScalar = {
    id?: boolean
    deviceId?: boolean
    temperature?: boolean
    humidity?: boolean
    recordedAt?: boolean
  }

  export type SensorReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "temperature" | "humidity" | "recordedAt", ExtArgs["result"]["sensorReading"]>
  export type SensorReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type SensorReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $SensorReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorReading"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      deviceId: string
      temperature: Prisma.Decimal
      humidity: Prisma.Decimal
      recordedAt: Date
    }, ExtArgs["result"]["sensorReading"]>
    composites: {}
  }

  type SensorReadingGetPayload<S extends boolean | null | undefined | SensorReadingDefaultArgs> = $Result.GetResult<Prisma.$SensorReadingPayload, S>

  type SensorReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorReadingCountAggregateInputType | true
    }

  export interface SensorReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorReading'], meta: { name: 'SensorReading' } }
    /**
     * Find zero or one SensorReading that matches the filter.
     * @param {SensorReadingFindUniqueArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorReadingFindUniqueArgs>(args: SelectSubset<T, SensorReadingFindUniqueArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorReadingFindUniqueOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorReadingFindFirstArgs>(args?: SelectSubset<T, SensorReadingFindFirstArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany()
     * 
     * // Get first 10 SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorReadingFindManyArgs>(args?: SelectSubset<T, SensorReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorReading.
     * @param {SensorReadingCreateArgs} args - Arguments to create a SensorReading.
     * @example
     * // Create one SensorReading
     * const SensorReading = await prisma.sensorReading.create({
     *   data: {
     *     // ... data to create a SensorReading
     *   }
     * })
     * 
     */
    create<T extends SensorReadingCreateArgs>(args: SelectSubset<T, SensorReadingCreateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorReadings.
     * @param {SensorReadingCreateManyArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorReadingCreateManyArgs>(args?: SelectSubset<T, SensorReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorReadings and returns the data saved in the database.
     * @param {SensorReadingCreateManyAndReturnArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorReading.
     * @param {SensorReadingDeleteArgs} args - Arguments to delete one SensorReading.
     * @example
     * // Delete one SensorReading
     * const SensorReading = await prisma.sensorReading.delete({
     *   where: {
     *     // ... filter to delete one SensorReading
     *   }
     * })
     * 
     */
    delete<T extends SensorReadingDeleteArgs>(args: SelectSubset<T, SensorReadingDeleteArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorReading.
     * @param {SensorReadingUpdateArgs} args - Arguments to update one SensorReading.
     * @example
     * // Update one SensorReading
     * const sensorReading = await prisma.sensorReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorReadingUpdateArgs>(args: SelectSubset<T, SensorReadingUpdateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorReadings.
     * @param {SensorReadingDeleteManyArgs} args - Arguments to filter SensorReadings to delete.
     * @example
     * // Delete a few SensorReadings
     * const { count } = await prisma.sensorReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorReadingDeleteManyArgs>(args?: SelectSubset<T, SensorReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorReadingUpdateManyArgs>(args: SelectSubset<T, SensorReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings and returns the data updated in the database.
     * @param {SensorReadingUpdateManyAndReturnArgs} args - Arguments to update many SensorReadings.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorReadings and only return the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SensorReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorReading.
     * @param {SensorReadingUpsertArgs} args - Arguments to update or create a SensorReading.
     * @example
     * // Update or create a SensorReading
     * const sensorReading = await prisma.sensorReading.upsert({
     *   create: {
     *     // ... data to create a SensorReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorReading we want to update
     *   }
     * })
     */
    upsert<T extends SensorReadingUpsertArgs>(args: SelectSubset<T, SensorReadingUpsertArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingCountArgs} args - Arguments to filter SensorReadings to count.
     * @example
     * // Count the number of SensorReadings
     * const count = await prisma.sensorReading.count({
     *   where: {
     *     // ... the filter for the SensorReadings we want to count
     *   }
     * })
    **/
    count<T extends SensorReadingCountArgs>(
      args?: Subset<T, SensorReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SensorReadingAggregateArgs>(args: Subset<T, SensorReadingAggregateArgs>): Prisma.PrismaPromise<GetSensorReadingAggregateType<T>>

    /**
     * Group by SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SensorReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorReadingGroupByArgs['orderBy'] }
        : { orderBy?: SensorReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SensorReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorReading model
   */
  readonly fields: SensorReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SensorReading model
   */
  interface SensorReadingFieldRefs {
    readonly id: FieldRef<"SensorReading", 'BigInt'>
    readonly deviceId: FieldRef<"SensorReading", 'String'>
    readonly temperature: FieldRef<"SensorReading", 'Decimal'>
    readonly humidity: FieldRef<"SensorReading", 'Decimal'>
    readonly recordedAt: FieldRef<"SensorReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SensorReading findUnique
   */
  export type SensorReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findUniqueOrThrow
   */
  export type SensorReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findFirst
   */
  export type SensorReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findFirstOrThrow
   */
  export type SensorReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findMany
   */
  export type SensorReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReadings to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading create
   */
  export type SensorReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorReading.
     */
    data: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
  }

  /**
   * SensorReading createMany
   */
  export type SensorReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorReading createManyAndReturn
   */
  export type SensorReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading update
   */
  export type SensorReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorReading.
     */
    data: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
    /**
     * Choose, which SensorReading to update.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading updateMany
   */
  export type SensorReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
  }

  /**
   * SensorReading updateManyAndReturn
   */
  export type SensorReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorReading upsert
   */
  export type SensorReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorReading to update in case it exists.
     */
    where: SensorReadingWhereUniqueInput
    /**
     * In case the SensorReading found by the `where` argument doesn't exist, create a new SensorReading with this data.
     */
    create: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
    /**
     * In case the SensorReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
  }

  /**
   * SensorReading delete
   */
  export type SensorReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter which SensorReading to delete.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading deleteMany
   */
  export type SensorReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReadings to delete
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to delete.
     */
    limit?: number
  }

  /**
   * SensorReading without action
   */
  export type SensorReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
  }


  /**
   * Model Actuator
   */

  export type AggregateActuator = {
    _count: ActuatorCountAggregateOutputType | null
    _avg: ActuatorAvgAggregateOutputType | null
    _sum: ActuatorSumAggregateOutputType | null
    _min: ActuatorMinAggregateOutputType | null
    _max: ActuatorMaxAggregateOutputType | null
  }

  export type ActuatorAvgAggregateOutputType = {
    channel: number | null
  }

  export type ActuatorSumAggregateOutputType = {
    channel: number | null
  }

  export type ActuatorMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    type: $Enums.ActuatorType | null
    channel: number | null
    state: $Enums.ActuatorState | null
    isEnabled: boolean | null
    lastChangedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActuatorMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    type: $Enums.ActuatorType | null
    channel: number | null
    state: $Enums.ActuatorState | null
    isEnabled: boolean | null
    lastChangedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActuatorCountAggregateOutputType = {
    id: number
    deviceId: number
    name: number
    type: number
    channel: number
    state: number
    isEnabled: number
    lastChangedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActuatorAvgAggregateInputType = {
    channel?: true
  }

  export type ActuatorSumAggregateInputType = {
    channel?: true
  }

  export type ActuatorMinAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    type?: true
    channel?: true
    state?: true
    isEnabled?: true
    lastChangedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActuatorMaxAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    type?: true
    channel?: true
    state?: true
    isEnabled?: true
    lastChangedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActuatorCountAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    type?: true
    channel?: true
    state?: true
    isEnabled?: true
    lastChangedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActuatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuator to aggregate.
     */
    where?: ActuatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuators to fetch.
     */
    orderBy?: ActuatorOrderByWithRelationInput | ActuatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActuatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actuators
    **/
    _count?: true | ActuatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActuatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActuatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActuatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActuatorMaxAggregateInputType
  }

  export type GetActuatorAggregateType<T extends ActuatorAggregateArgs> = {
        [P in keyof T & keyof AggregateActuator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActuator[P]>
      : GetScalarType<T[P], AggregateActuator[P]>
  }




  export type ActuatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActuatorWhereInput
    orderBy?: ActuatorOrderByWithAggregationInput | ActuatorOrderByWithAggregationInput[]
    by: ActuatorScalarFieldEnum[] | ActuatorScalarFieldEnum
    having?: ActuatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActuatorCountAggregateInputType | true
    _avg?: ActuatorAvgAggregateInputType
    _sum?: ActuatorSumAggregateInputType
    _min?: ActuatorMinAggregateInputType
    _max?: ActuatorMaxAggregateInputType
  }

  export type ActuatorGroupByOutputType = {
    id: string
    deviceId: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state: $Enums.ActuatorState
    isEnabled: boolean
    lastChangedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ActuatorCountAggregateOutputType | null
    _avg: ActuatorAvgAggregateOutputType | null
    _sum: ActuatorSumAggregateOutputType | null
    _min: ActuatorMinAggregateOutputType | null
    _max: ActuatorMaxAggregateOutputType | null
  }

  type GetActuatorGroupByPayload<T extends ActuatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActuatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActuatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActuatorGroupByOutputType[P]>
            : GetScalarType<T[P], ActuatorGroupByOutputType[P]>
        }
      >
    >


  export type ActuatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    state?: boolean
    isEnabled?: boolean
    lastChangedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    controlLogs?: boolean | Actuator$controlLogsArgs<ExtArgs>
    schedules?: boolean | Actuator$schedulesArgs<ExtArgs>
    _count?: boolean | ActuatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuator"]>

  export type ActuatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    state?: boolean
    isEnabled?: boolean
    lastChangedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuator"]>

  export type ActuatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    state?: boolean
    isEnabled?: boolean
    lastChangedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actuator"]>

  export type ActuatorSelectScalar = {
    id?: boolean
    deviceId?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    state?: boolean
    isEnabled?: boolean
    lastChangedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActuatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "name" | "type" | "channel" | "state" | "isEnabled" | "lastChangedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["actuator"]>
  export type ActuatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    controlLogs?: boolean | Actuator$controlLogsArgs<ExtArgs>
    schedules?: boolean | Actuator$schedulesArgs<ExtArgs>
    _count?: boolean | ActuatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActuatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type ActuatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $ActuatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actuator"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      controlLogs: Prisma.$ControlLogPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      name: string
      type: $Enums.ActuatorType
      channel: number
      state: $Enums.ActuatorState
      isEnabled: boolean
      lastChangedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["actuator"]>
    composites: {}
  }

  type ActuatorGetPayload<S extends boolean | null | undefined | ActuatorDefaultArgs> = $Result.GetResult<Prisma.$ActuatorPayload, S>

  type ActuatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActuatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActuatorCountAggregateInputType | true
    }

  export interface ActuatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actuator'], meta: { name: 'Actuator' } }
    /**
     * Find zero or one Actuator that matches the filter.
     * @param {ActuatorFindUniqueArgs} args - Arguments to find a Actuator
     * @example
     * // Get one Actuator
     * const actuator = await prisma.actuator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActuatorFindUniqueArgs>(args: SelectSubset<T, ActuatorFindUniqueArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actuator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActuatorFindUniqueOrThrowArgs} args - Arguments to find a Actuator
     * @example
     * // Get one Actuator
     * const actuator = await prisma.actuator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActuatorFindUniqueOrThrowArgs>(args: SelectSubset<T, ActuatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorFindFirstArgs} args - Arguments to find a Actuator
     * @example
     * // Get one Actuator
     * const actuator = await prisma.actuator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActuatorFindFirstArgs>(args?: SelectSubset<T, ActuatorFindFirstArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorFindFirstOrThrowArgs} args - Arguments to find a Actuator
     * @example
     * // Get one Actuator
     * const actuator = await prisma.actuator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActuatorFindFirstOrThrowArgs>(args?: SelectSubset<T, ActuatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actuators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuators
     * const actuators = await prisma.actuator.findMany()
     * 
     * // Get first 10 Actuators
     * const actuators = await prisma.actuator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actuatorWithIdOnly = await prisma.actuator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActuatorFindManyArgs>(args?: SelectSubset<T, ActuatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actuator.
     * @param {ActuatorCreateArgs} args - Arguments to create a Actuator.
     * @example
     * // Create one Actuator
     * const Actuator = await prisma.actuator.create({
     *   data: {
     *     // ... data to create a Actuator
     *   }
     * })
     * 
     */
    create<T extends ActuatorCreateArgs>(args: SelectSubset<T, ActuatorCreateArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actuators.
     * @param {ActuatorCreateManyArgs} args - Arguments to create many Actuators.
     * @example
     * // Create many Actuators
     * const actuator = await prisma.actuator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActuatorCreateManyArgs>(args?: SelectSubset<T, ActuatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actuators and returns the data saved in the database.
     * @param {ActuatorCreateManyAndReturnArgs} args - Arguments to create many Actuators.
     * @example
     * // Create many Actuators
     * const actuator = await prisma.actuator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actuators and only return the `id`
     * const actuatorWithIdOnly = await prisma.actuator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActuatorCreateManyAndReturnArgs>(args?: SelectSubset<T, ActuatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actuator.
     * @param {ActuatorDeleteArgs} args - Arguments to delete one Actuator.
     * @example
     * // Delete one Actuator
     * const Actuator = await prisma.actuator.delete({
     *   where: {
     *     // ... filter to delete one Actuator
     *   }
     * })
     * 
     */
    delete<T extends ActuatorDeleteArgs>(args: SelectSubset<T, ActuatorDeleteArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actuator.
     * @param {ActuatorUpdateArgs} args - Arguments to update one Actuator.
     * @example
     * // Update one Actuator
     * const actuator = await prisma.actuator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActuatorUpdateArgs>(args: SelectSubset<T, ActuatorUpdateArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actuators.
     * @param {ActuatorDeleteManyArgs} args - Arguments to filter Actuators to delete.
     * @example
     * // Delete a few Actuators
     * const { count } = await prisma.actuator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActuatorDeleteManyArgs>(args?: SelectSubset<T, ActuatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuators
     * const actuator = await prisma.actuator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActuatorUpdateManyArgs>(args: SelectSubset<T, ActuatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actuators and returns the data updated in the database.
     * @param {ActuatorUpdateManyAndReturnArgs} args - Arguments to update many Actuators.
     * @example
     * // Update many Actuators
     * const actuator = await prisma.actuator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actuators and only return the `id`
     * const actuatorWithIdOnly = await prisma.actuator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActuatorUpdateManyAndReturnArgs>(args: SelectSubset<T, ActuatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actuator.
     * @param {ActuatorUpsertArgs} args - Arguments to update or create a Actuator.
     * @example
     * // Update or create a Actuator
     * const actuator = await prisma.actuator.upsert({
     *   create: {
     *     // ... data to create a Actuator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuator we want to update
     *   }
     * })
     */
    upsert<T extends ActuatorUpsertArgs>(args: SelectSubset<T, ActuatorUpsertArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actuators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorCountArgs} args - Arguments to filter Actuators to count.
     * @example
     * // Count the number of Actuators
     * const count = await prisma.actuator.count({
     *   where: {
     *     // ... the filter for the Actuators we want to count
     *   }
     * })
    **/
    count<T extends ActuatorCountArgs>(
      args?: Subset<T, ActuatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActuatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actuator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActuatorAggregateArgs>(args: Subset<T, ActuatorAggregateArgs>): Prisma.PrismaPromise<GetActuatorAggregateType<T>>

    /**
     * Group by Actuator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActuatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActuatorGroupByArgs['orderBy'] }
        : { orderBy?: ActuatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActuatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActuatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actuator model
   */
  readonly fields: ActuatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actuator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActuatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    controlLogs<T extends Actuator$controlLogsArgs<ExtArgs> = {}>(args?: Subset<T, Actuator$controlLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Actuator$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Actuator$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Actuator model
   */
  interface ActuatorFieldRefs {
    readonly id: FieldRef<"Actuator", 'String'>
    readonly deviceId: FieldRef<"Actuator", 'String'>
    readonly name: FieldRef<"Actuator", 'String'>
    readonly type: FieldRef<"Actuator", 'ActuatorType'>
    readonly channel: FieldRef<"Actuator", 'Int'>
    readonly state: FieldRef<"Actuator", 'ActuatorState'>
    readonly isEnabled: FieldRef<"Actuator", 'Boolean'>
    readonly lastChangedAt: FieldRef<"Actuator", 'DateTime'>
    readonly createdAt: FieldRef<"Actuator", 'DateTime'>
    readonly updatedAt: FieldRef<"Actuator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actuator findUnique
   */
  export type ActuatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter, which Actuator to fetch.
     */
    where: ActuatorWhereUniqueInput
  }

  /**
   * Actuator findUniqueOrThrow
   */
  export type ActuatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter, which Actuator to fetch.
     */
    where: ActuatorWhereUniqueInput
  }

  /**
   * Actuator findFirst
   */
  export type ActuatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter, which Actuator to fetch.
     */
    where?: ActuatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuators to fetch.
     */
    orderBy?: ActuatorOrderByWithRelationInput | ActuatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuators.
     */
    cursor?: ActuatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuators.
     */
    distinct?: ActuatorScalarFieldEnum | ActuatorScalarFieldEnum[]
  }

  /**
   * Actuator findFirstOrThrow
   */
  export type ActuatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter, which Actuator to fetch.
     */
    where?: ActuatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuators to fetch.
     */
    orderBy?: ActuatorOrderByWithRelationInput | ActuatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actuators.
     */
    cursor?: ActuatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuators.
     */
    distinct?: ActuatorScalarFieldEnum | ActuatorScalarFieldEnum[]
  }

  /**
   * Actuator findMany
   */
  export type ActuatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter, which Actuators to fetch.
     */
    where?: ActuatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actuators to fetch.
     */
    orderBy?: ActuatorOrderByWithRelationInput | ActuatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actuators.
     */
    cursor?: ActuatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actuators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actuators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actuators.
     */
    distinct?: ActuatorScalarFieldEnum | ActuatorScalarFieldEnum[]
  }

  /**
   * Actuator create
   */
  export type ActuatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Actuator.
     */
    data: XOR<ActuatorCreateInput, ActuatorUncheckedCreateInput>
  }

  /**
   * Actuator createMany
   */
  export type ActuatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actuators.
     */
    data: ActuatorCreateManyInput | ActuatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuator createManyAndReturn
   */
  export type ActuatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * The data used to create many Actuators.
     */
    data: ActuatorCreateManyInput | ActuatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actuator update
   */
  export type ActuatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Actuator.
     */
    data: XOR<ActuatorUpdateInput, ActuatorUncheckedUpdateInput>
    /**
     * Choose, which Actuator to update.
     */
    where: ActuatorWhereUniqueInput
  }

  /**
   * Actuator updateMany
   */
  export type ActuatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actuators.
     */
    data: XOR<ActuatorUpdateManyMutationInput, ActuatorUncheckedUpdateManyInput>
    /**
     * Filter which Actuators to update
     */
    where?: ActuatorWhereInput
    /**
     * Limit how many Actuators to update.
     */
    limit?: number
  }

  /**
   * Actuator updateManyAndReturn
   */
  export type ActuatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * The data used to update Actuators.
     */
    data: XOR<ActuatorUpdateManyMutationInput, ActuatorUncheckedUpdateManyInput>
    /**
     * Filter which Actuators to update
     */
    where?: ActuatorWhereInput
    /**
     * Limit how many Actuators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actuator upsert
   */
  export type ActuatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Actuator to update in case it exists.
     */
    where: ActuatorWhereUniqueInput
    /**
     * In case the Actuator found by the `where` argument doesn't exist, create a new Actuator with this data.
     */
    create: XOR<ActuatorCreateInput, ActuatorUncheckedCreateInput>
    /**
     * In case the Actuator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActuatorUpdateInput, ActuatorUncheckedUpdateInput>
  }

  /**
   * Actuator delete
   */
  export type ActuatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    /**
     * Filter which Actuator to delete.
     */
    where: ActuatorWhereUniqueInput
  }

  /**
   * Actuator deleteMany
   */
  export type ActuatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuators to delete
     */
    where?: ActuatorWhereInput
    /**
     * Limit how many Actuators to delete.
     */
    limit?: number
  }

  /**
   * Actuator.controlLogs
   */
  export type Actuator$controlLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    where?: ControlLogWhereInput
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    cursor?: ControlLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * Actuator.schedules
   */
  export type Actuator$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Actuator without action
   */
  export type ActuatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
  }


  /**
   * Model ControlLog
   */

  export type AggregateControlLog = {
    _count: ControlLogCountAggregateOutputType | null
    _avg: ControlLogAvgAggregateOutputType | null
    _sum: ControlLogSumAggregateOutputType | null
    _min: ControlLogMinAggregateOutputType | null
    _max: ControlLogMaxAggregateOutputType | null
  }

  export type ControlLogAvgAggregateOutputType = {
    id: number | null
  }

  export type ControlLogSumAggregateOutputType = {
    id: bigint | null
  }

  export type ControlLogMinAggregateOutputType = {
    id: bigint | null
    deviceId: string | null
    actuatorId: string | null
    userId: string | null
    action: $Enums.ControlAction | null
    source: $Enums.ControlSource | null
    mode: $Enums.ControlMode | null
    success: boolean | null
    message: string | null
    requestedAt: Date | null
    executedAt: Date | null
  }

  export type ControlLogMaxAggregateOutputType = {
    id: bigint | null
    deviceId: string | null
    actuatorId: string | null
    userId: string | null
    action: $Enums.ControlAction | null
    source: $Enums.ControlSource | null
    mode: $Enums.ControlMode | null
    success: boolean | null
    message: string | null
    requestedAt: Date | null
    executedAt: Date | null
  }

  export type ControlLogCountAggregateOutputType = {
    id: number
    deviceId: number
    actuatorId: number
    userId: number
    action: number
    source: number
    mode: number
    success: number
    message: number
    requestedAt: number
    executedAt: number
    _all: number
  }


  export type ControlLogAvgAggregateInputType = {
    id?: true
  }

  export type ControlLogSumAggregateInputType = {
    id?: true
  }

  export type ControlLogMinAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    userId?: true
    action?: true
    source?: true
    mode?: true
    success?: true
    message?: true
    requestedAt?: true
    executedAt?: true
  }

  export type ControlLogMaxAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    userId?: true
    action?: true
    source?: true
    mode?: true
    success?: true
    message?: true
    requestedAt?: true
    executedAt?: true
  }

  export type ControlLogCountAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    userId?: true
    action?: true
    source?: true
    mode?: true
    success?: true
    message?: true
    requestedAt?: true
    executedAt?: true
    _all?: true
  }

  export type ControlLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlLog to aggregate.
     */
    where?: ControlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlLogs to fetch.
     */
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ControlLogs
    **/
    _count?: true | ControlLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ControlLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ControlLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControlLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControlLogMaxAggregateInputType
  }

  export type GetControlLogAggregateType<T extends ControlLogAggregateArgs> = {
        [P in keyof T & keyof AggregateControlLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControlLog[P]>
      : GetScalarType<T[P], AggregateControlLog[P]>
  }




  export type ControlLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlLogWhereInput
    orderBy?: ControlLogOrderByWithAggregationInput | ControlLogOrderByWithAggregationInput[]
    by: ControlLogScalarFieldEnum[] | ControlLogScalarFieldEnum
    having?: ControlLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControlLogCountAggregateInputType | true
    _avg?: ControlLogAvgAggregateInputType
    _sum?: ControlLogSumAggregateInputType
    _min?: ControlLogMinAggregateInputType
    _max?: ControlLogMaxAggregateInputType
  }

  export type ControlLogGroupByOutputType = {
    id: bigint
    deviceId: string
    actuatorId: string | null
    userId: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success: boolean
    message: string | null
    requestedAt: Date
    executedAt: Date | null
    _count: ControlLogCountAggregateOutputType | null
    _avg: ControlLogAvgAggregateOutputType | null
    _sum: ControlLogSumAggregateOutputType | null
    _min: ControlLogMinAggregateOutputType | null
    _max: ControlLogMaxAggregateOutputType | null
  }

  type GetControlLogGroupByPayload<T extends ControlLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControlLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControlLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControlLogGroupByOutputType[P]>
            : GetScalarType<T[P], ControlLogGroupByOutputType[P]>
        }
      >
    >


  export type ControlLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    userId?: boolean
    action?: boolean
    source?: boolean
    mode?: boolean
    success?: boolean
    message?: boolean
    requestedAt?: boolean
    executedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["controlLog"]>

  export type ControlLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    userId?: boolean
    action?: boolean
    source?: boolean
    mode?: boolean
    success?: boolean
    message?: boolean
    requestedAt?: boolean
    executedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["controlLog"]>

  export type ControlLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    userId?: boolean
    action?: boolean
    source?: boolean
    mode?: boolean
    success?: boolean
    message?: boolean
    requestedAt?: boolean
    executedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["controlLog"]>

  export type ControlLogSelectScalar = {
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    userId?: boolean
    action?: boolean
    source?: boolean
    mode?: boolean
    success?: boolean
    message?: boolean
    requestedAt?: boolean
    executedAt?: boolean
  }

  export type ControlLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "actuatorId" | "userId" | "action" | "source" | "mode" | "success" | "message" | "requestedAt" | "executedAt", ExtArgs["result"]["controlLog"]>
  export type ControlLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }
  export type ControlLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }
  export type ControlLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ControlLog$actuatorArgs<ExtArgs>
    user?: boolean | ControlLog$userArgs<ExtArgs>
  }

  export type $ControlLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ControlLog"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      actuator: Prisma.$ActuatorPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      deviceId: string
      actuatorId: string | null
      userId: string | null
      action: $Enums.ControlAction
      source: $Enums.ControlSource
      mode: $Enums.ControlMode
      success: boolean
      message: string | null
      requestedAt: Date
      executedAt: Date | null
    }, ExtArgs["result"]["controlLog"]>
    composites: {}
  }

  type ControlLogGetPayload<S extends boolean | null | undefined | ControlLogDefaultArgs> = $Result.GetResult<Prisma.$ControlLogPayload, S>

  type ControlLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ControlLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ControlLogCountAggregateInputType | true
    }

  export interface ControlLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ControlLog'], meta: { name: 'ControlLog' } }
    /**
     * Find zero or one ControlLog that matches the filter.
     * @param {ControlLogFindUniqueArgs} args - Arguments to find a ControlLog
     * @example
     * // Get one ControlLog
     * const controlLog = await prisma.controlLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ControlLogFindUniqueArgs>(args: SelectSubset<T, ControlLogFindUniqueArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ControlLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ControlLogFindUniqueOrThrowArgs} args - Arguments to find a ControlLog
     * @example
     * // Get one ControlLog
     * const controlLog = await prisma.controlLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ControlLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ControlLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ControlLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogFindFirstArgs} args - Arguments to find a ControlLog
     * @example
     * // Get one ControlLog
     * const controlLog = await prisma.controlLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ControlLogFindFirstArgs>(args?: SelectSubset<T, ControlLogFindFirstArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ControlLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogFindFirstOrThrowArgs} args - Arguments to find a ControlLog
     * @example
     * // Get one ControlLog
     * const controlLog = await prisma.controlLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ControlLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ControlLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ControlLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ControlLogs
     * const controlLogs = await prisma.controlLog.findMany()
     * 
     * // Get first 10 ControlLogs
     * const controlLogs = await prisma.controlLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controlLogWithIdOnly = await prisma.controlLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ControlLogFindManyArgs>(args?: SelectSubset<T, ControlLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ControlLog.
     * @param {ControlLogCreateArgs} args - Arguments to create a ControlLog.
     * @example
     * // Create one ControlLog
     * const ControlLog = await prisma.controlLog.create({
     *   data: {
     *     // ... data to create a ControlLog
     *   }
     * })
     * 
     */
    create<T extends ControlLogCreateArgs>(args: SelectSubset<T, ControlLogCreateArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ControlLogs.
     * @param {ControlLogCreateManyArgs} args - Arguments to create many ControlLogs.
     * @example
     * // Create many ControlLogs
     * const controlLog = await prisma.controlLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ControlLogCreateManyArgs>(args?: SelectSubset<T, ControlLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ControlLogs and returns the data saved in the database.
     * @param {ControlLogCreateManyAndReturnArgs} args - Arguments to create many ControlLogs.
     * @example
     * // Create many ControlLogs
     * const controlLog = await prisma.controlLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ControlLogs and only return the `id`
     * const controlLogWithIdOnly = await prisma.controlLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ControlLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ControlLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ControlLog.
     * @param {ControlLogDeleteArgs} args - Arguments to delete one ControlLog.
     * @example
     * // Delete one ControlLog
     * const ControlLog = await prisma.controlLog.delete({
     *   where: {
     *     // ... filter to delete one ControlLog
     *   }
     * })
     * 
     */
    delete<T extends ControlLogDeleteArgs>(args: SelectSubset<T, ControlLogDeleteArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ControlLog.
     * @param {ControlLogUpdateArgs} args - Arguments to update one ControlLog.
     * @example
     * // Update one ControlLog
     * const controlLog = await prisma.controlLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ControlLogUpdateArgs>(args: SelectSubset<T, ControlLogUpdateArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ControlLogs.
     * @param {ControlLogDeleteManyArgs} args - Arguments to filter ControlLogs to delete.
     * @example
     * // Delete a few ControlLogs
     * const { count } = await prisma.controlLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ControlLogDeleteManyArgs>(args?: SelectSubset<T, ControlLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ControlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ControlLogs
     * const controlLog = await prisma.controlLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ControlLogUpdateManyArgs>(args: SelectSubset<T, ControlLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ControlLogs and returns the data updated in the database.
     * @param {ControlLogUpdateManyAndReturnArgs} args - Arguments to update many ControlLogs.
     * @example
     * // Update many ControlLogs
     * const controlLog = await prisma.controlLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ControlLogs and only return the `id`
     * const controlLogWithIdOnly = await prisma.controlLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ControlLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ControlLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ControlLog.
     * @param {ControlLogUpsertArgs} args - Arguments to update or create a ControlLog.
     * @example
     * // Update or create a ControlLog
     * const controlLog = await prisma.controlLog.upsert({
     *   create: {
     *     // ... data to create a ControlLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ControlLog we want to update
     *   }
     * })
     */
    upsert<T extends ControlLogUpsertArgs>(args: SelectSubset<T, ControlLogUpsertArgs<ExtArgs>>): Prisma__ControlLogClient<$Result.GetResult<Prisma.$ControlLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ControlLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogCountArgs} args - Arguments to filter ControlLogs to count.
     * @example
     * // Count the number of ControlLogs
     * const count = await prisma.controlLog.count({
     *   where: {
     *     // ... the filter for the ControlLogs we want to count
     *   }
     * })
    **/
    count<T extends ControlLogCountArgs>(
      args?: Subset<T, ControlLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControlLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ControlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ControlLogAggregateArgs>(args: Subset<T, ControlLogAggregateArgs>): Prisma.PrismaPromise<GetControlLogAggregateType<T>>

    /**
     * Group by ControlLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ControlLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControlLogGroupByArgs['orderBy'] }
        : { orderBy?: ControlLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ControlLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControlLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ControlLog model
   */
  readonly fields: ControlLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ControlLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControlLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actuator<T extends ControlLog$actuatorArgs<ExtArgs> = {}>(args?: Subset<T, ControlLog$actuatorArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends ControlLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ControlLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ControlLog model
   */
  interface ControlLogFieldRefs {
    readonly id: FieldRef<"ControlLog", 'BigInt'>
    readonly deviceId: FieldRef<"ControlLog", 'String'>
    readonly actuatorId: FieldRef<"ControlLog", 'String'>
    readonly userId: FieldRef<"ControlLog", 'String'>
    readonly action: FieldRef<"ControlLog", 'ControlAction'>
    readonly source: FieldRef<"ControlLog", 'ControlSource'>
    readonly mode: FieldRef<"ControlLog", 'ControlMode'>
    readonly success: FieldRef<"ControlLog", 'Boolean'>
    readonly message: FieldRef<"ControlLog", 'String'>
    readonly requestedAt: FieldRef<"ControlLog", 'DateTime'>
    readonly executedAt: FieldRef<"ControlLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ControlLog findUnique
   */
  export type ControlLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter, which ControlLog to fetch.
     */
    where: ControlLogWhereUniqueInput
  }

  /**
   * ControlLog findUniqueOrThrow
   */
  export type ControlLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter, which ControlLog to fetch.
     */
    where: ControlLogWhereUniqueInput
  }

  /**
   * ControlLog findFirst
   */
  export type ControlLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter, which ControlLog to fetch.
     */
    where?: ControlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlLogs to fetch.
     */
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlLogs.
     */
    cursor?: ControlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlLogs.
     */
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * ControlLog findFirstOrThrow
   */
  export type ControlLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter, which ControlLog to fetch.
     */
    where?: ControlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlLogs to fetch.
     */
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlLogs.
     */
    cursor?: ControlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlLogs.
     */
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * ControlLog findMany
   */
  export type ControlLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter, which ControlLogs to fetch.
     */
    where?: ControlLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlLogs to fetch.
     */
    orderBy?: ControlLogOrderByWithRelationInput | ControlLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ControlLogs.
     */
    cursor?: ControlLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlLogs.
     */
    distinct?: ControlLogScalarFieldEnum | ControlLogScalarFieldEnum[]
  }

  /**
   * ControlLog create
   */
  export type ControlLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ControlLog.
     */
    data: XOR<ControlLogCreateInput, ControlLogUncheckedCreateInput>
  }

  /**
   * ControlLog createMany
   */
  export type ControlLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ControlLogs.
     */
    data: ControlLogCreateManyInput | ControlLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ControlLog createManyAndReturn
   */
  export type ControlLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * The data used to create many ControlLogs.
     */
    data: ControlLogCreateManyInput | ControlLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ControlLog update
   */
  export type ControlLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ControlLog.
     */
    data: XOR<ControlLogUpdateInput, ControlLogUncheckedUpdateInput>
    /**
     * Choose, which ControlLog to update.
     */
    where: ControlLogWhereUniqueInput
  }

  /**
   * ControlLog updateMany
   */
  export type ControlLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ControlLogs.
     */
    data: XOR<ControlLogUpdateManyMutationInput, ControlLogUncheckedUpdateManyInput>
    /**
     * Filter which ControlLogs to update
     */
    where?: ControlLogWhereInput
    /**
     * Limit how many ControlLogs to update.
     */
    limit?: number
  }

  /**
   * ControlLog updateManyAndReturn
   */
  export type ControlLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * The data used to update ControlLogs.
     */
    data: XOR<ControlLogUpdateManyMutationInput, ControlLogUncheckedUpdateManyInput>
    /**
     * Filter which ControlLogs to update
     */
    where?: ControlLogWhereInput
    /**
     * Limit how many ControlLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ControlLog upsert
   */
  export type ControlLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ControlLog to update in case it exists.
     */
    where: ControlLogWhereUniqueInput
    /**
     * In case the ControlLog found by the `where` argument doesn't exist, create a new ControlLog with this data.
     */
    create: XOR<ControlLogCreateInput, ControlLogUncheckedCreateInput>
    /**
     * In case the ControlLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControlLogUpdateInput, ControlLogUncheckedUpdateInput>
  }

  /**
   * ControlLog delete
   */
  export type ControlLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
    /**
     * Filter which ControlLog to delete.
     */
    where: ControlLogWhereUniqueInput
  }

  /**
   * ControlLog deleteMany
   */
  export type ControlLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlLogs to delete
     */
    where?: ControlLogWhereInput
    /**
     * Limit how many ControlLogs to delete.
     */
    limit?: number
  }

  /**
   * ControlLog.actuator
   */
  export type ControlLog$actuatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuator
     */
    select?: ActuatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuator
     */
    omit?: ActuatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActuatorInclude<ExtArgs> | null
    where?: ActuatorWhereInput
  }

  /**
   * ControlLog.user
   */
  export type ControlLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ControlLog without action
   */
  export type ControlLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlLog
     */
    select?: ControlLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlLog
     */
    omit?: ControlLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlLogInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    startMinute: number | null
    durationSeconds: number | null
    daysOfWeek: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    startMinute: number | null
    durationSeconds: number | null
    daysOfWeek: number[]
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    actuatorId: string | null
    createdById: string | null
    name: string | null
    action: $Enums.ControlAction | null
    startMinute: number | null
    durationSeconds: number | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    actuatorId: string | null
    createdById: string | null
    name: string | null
    action: $Enums.ControlAction | null
    startMinute: number | null
    durationSeconds: number | null
    isEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    deviceId: number
    actuatorId: number
    createdById: number
    name: number
    action: number
    startMinute: number
    durationSeconds: number
    daysOfWeek: number
    isEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    startMinute?: true
    durationSeconds?: true
    daysOfWeek?: true
  }

  export type ScheduleSumAggregateInputType = {
    startMinute?: true
    durationSeconds?: true
    daysOfWeek?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    createdById?: true
    name?: true
    action?: true
    startMinute?: true
    durationSeconds?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    createdById?: true
    name?: true
    action?: true
    startMinute?: true
    durationSeconds?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    deviceId?: true
    actuatorId?: true
    createdById?: true
    name?: true
    action?: true
    startMinute?: true
    durationSeconds?: true
    daysOfWeek?: true
    isEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    deviceId: string
    actuatorId: string
    createdById: string
    name: string
    action: $Enums.ControlAction
    startMinute: number
    durationSeconds: number | null
    daysOfWeek: number[]
    isEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    createdById?: boolean
    name?: boolean
    action?: boolean
    startMinute?: boolean
    durationSeconds?: boolean
    daysOfWeek?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    createdById?: boolean
    name?: boolean
    action?: boolean
    startMinute?: boolean
    durationSeconds?: boolean
    daysOfWeek?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    createdById?: boolean
    name?: boolean
    action?: boolean
    startMinute?: boolean
    durationSeconds?: boolean
    daysOfWeek?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    deviceId?: boolean
    actuatorId?: boolean
    createdById?: boolean
    name?: boolean
    action?: boolean
    startMinute?: boolean
    durationSeconds?: boolean
    daysOfWeek?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "actuatorId" | "createdById" | "name" | "action" | "startMinute" | "durationSeconds" | "daysOfWeek" | "isEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    actuator?: boolean | ActuatorDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      actuator: Prisma.$ActuatorPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      actuatorId: string
      createdById: string
      name: string
      action: $Enums.ControlAction
      startMinute: number
      durationSeconds: number | null
      daysOfWeek: number[]
      isEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actuator<T extends ActuatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActuatorDefaultArgs<ExtArgs>>): Prisma__ActuatorClient<$Result.GetResult<Prisma.$ActuatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly deviceId: FieldRef<"Schedule", 'String'>
    readonly actuatorId: FieldRef<"Schedule", 'String'>
    readonly createdById: FieldRef<"Schedule", 'String'>
    readonly name: FieldRef<"Schedule", 'String'>
    readonly action: FieldRef<"Schedule", 'ControlAction'>
    readonly startMinute: FieldRef<"Schedule", 'Int'>
    readonly durationSeconds: FieldRef<"Schedule", 'Int'>
    readonly daysOfWeek: FieldRef<"Schedule", 'Int[]'>
    readonly isEnabled: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model CultivationCycle
   */

  export type AggregateCultivationCycle = {
    _count: CultivationCycleCountAggregateOutputType | null
    _avg: CultivationCycleAvgAggregateOutputType | null
    _sum: CultivationCycleSumAggregateOutputType | null
    _min: CultivationCycleMinAggregateOutputType | null
    _max: CultivationCycleMaxAggregateOutputType | null
  }

  export type CultivationCycleAvgAggregateOutputType = {
    baglogCount: number | null
  }

  export type CultivationCycleSumAggregateOutputType = {
    baglogCount: number | null
  }

  export type CultivationCycleMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    mushroomType: string | null
    strain: string | null
    baglogCount: number | null
    startedAt: Date | null
    expectedEndedAt: Date | null
    endedAt: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultivationCycleMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    mushroomType: string | null
    strain: string | null
    baglogCount: number | null
    startedAt: Date | null
    expectedEndedAt: Date | null
    endedAt: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CultivationCycleCountAggregateOutputType = {
    id: number
    deviceId: number
    name: number
    mushroomType: number
    strain: number
    baglogCount: number
    startedAt: number
    expectedEndedAt: number
    endedAt: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CultivationCycleAvgAggregateInputType = {
    baglogCount?: true
  }

  export type CultivationCycleSumAggregateInputType = {
    baglogCount?: true
  }

  export type CultivationCycleMinAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    mushroomType?: true
    strain?: true
    baglogCount?: true
    startedAt?: true
    expectedEndedAt?: true
    endedAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultivationCycleMaxAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    mushroomType?: true
    strain?: true
    baglogCount?: true
    startedAt?: true
    expectedEndedAt?: true
    endedAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CultivationCycleCountAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    mushroomType?: true
    strain?: true
    baglogCount?: true
    startedAt?: true
    expectedEndedAt?: true
    endedAt?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CultivationCycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultivationCycle to aggregate.
     */
    where?: CultivationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultivationCycles to fetch.
     */
    orderBy?: CultivationCycleOrderByWithRelationInput | CultivationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CultivationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultivationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultivationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CultivationCycles
    **/
    _count?: true | CultivationCycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CultivationCycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CultivationCycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CultivationCycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CultivationCycleMaxAggregateInputType
  }

  export type GetCultivationCycleAggregateType<T extends CultivationCycleAggregateArgs> = {
        [P in keyof T & keyof AggregateCultivationCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCultivationCycle[P]>
      : GetScalarType<T[P], AggregateCultivationCycle[P]>
  }




  export type CultivationCycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CultivationCycleWhereInput
    orderBy?: CultivationCycleOrderByWithAggregationInput | CultivationCycleOrderByWithAggregationInput[]
    by: CultivationCycleScalarFieldEnum[] | CultivationCycleScalarFieldEnum
    having?: CultivationCycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CultivationCycleCountAggregateInputType | true
    _avg?: CultivationCycleAvgAggregateInputType
    _sum?: CultivationCycleSumAggregateInputType
    _min?: CultivationCycleMinAggregateInputType
    _max?: CultivationCycleMaxAggregateInputType
  }

  export type CultivationCycleGroupByOutputType = {
    id: string
    deviceId: string
    name: string | null
    mushroomType: string
    strain: string | null
    baglogCount: number | null
    startedAt: Date
    expectedEndedAt: Date | null
    endedAt: Date | null
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CultivationCycleCountAggregateOutputType | null
    _avg: CultivationCycleAvgAggregateOutputType | null
    _sum: CultivationCycleSumAggregateOutputType | null
    _min: CultivationCycleMinAggregateOutputType | null
    _max: CultivationCycleMaxAggregateOutputType | null
  }

  type GetCultivationCycleGroupByPayload<T extends CultivationCycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CultivationCycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CultivationCycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CultivationCycleGroupByOutputType[P]>
            : GetScalarType<T[P], CultivationCycleGroupByOutputType[P]>
        }
      >
    >


  export type CultivationCycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    mushroomType?: boolean
    strain?: boolean
    baglogCount?: boolean
    startedAt?: boolean
    expectedEndedAt?: boolean
    endedAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    harvests?: boolean | CultivationCycle$harvestsArgs<ExtArgs>
    _count?: boolean | CultivationCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultivationCycle"]>

  export type CultivationCycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    mushroomType?: boolean
    strain?: boolean
    baglogCount?: boolean
    startedAt?: boolean
    expectedEndedAt?: boolean
    endedAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultivationCycle"]>

  export type CultivationCycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    mushroomType?: boolean
    strain?: boolean
    baglogCount?: boolean
    startedAt?: boolean
    expectedEndedAt?: boolean
    endedAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cultivationCycle"]>

  export type CultivationCycleSelectScalar = {
    id?: boolean
    deviceId?: boolean
    name?: boolean
    mushroomType?: boolean
    strain?: boolean
    baglogCount?: boolean
    startedAt?: boolean
    expectedEndedAt?: boolean
    endedAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CultivationCycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "name" | "mushroomType" | "strain" | "baglogCount" | "startedAt" | "expectedEndedAt" | "endedAt" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["cultivationCycle"]>
  export type CultivationCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    harvests?: boolean | CultivationCycle$harvestsArgs<ExtArgs>
    _count?: boolean | CultivationCycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CultivationCycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type CultivationCycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $CultivationCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CultivationCycle"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      harvests: Prisma.$HarvestRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      name: string | null
      mushroomType: string
      strain: string | null
      baglogCount: number | null
      startedAt: Date
      expectedEndedAt: Date | null
      endedAt: Date | null
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cultivationCycle"]>
    composites: {}
  }

  type CultivationCycleGetPayload<S extends boolean | null | undefined | CultivationCycleDefaultArgs> = $Result.GetResult<Prisma.$CultivationCyclePayload, S>

  type CultivationCycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CultivationCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CultivationCycleCountAggregateInputType | true
    }

  export interface CultivationCycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CultivationCycle'], meta: { name: 'CultivationCycle' } }
    /**
     * Find zero or one CultivationCycle that matches the filter.
     * @param {CultivationCycleFindUniqueArgs} args - Arguments to find a CultivationCycle
     * @example
     * // Get one CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultivationCycleFindUniqueArgs>(args: SelectSubset<T, CultivationCycleFindUniqueArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CultivationCycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultivationCycleFindUniqueOrThrowArgs} args - Arguments to find a CultivationCycle
     * @example
     * // Get one CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultivationCycleFindUniqueOrThrowArgs>(args: SelectSubset<T, CultivationCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultivationCycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleFindFirstArgs} args - Arguments to find a CultivationCycle
     * @example
     * // Get one CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultivationCycleFindFirstArgs>(args?: SelectSubset<T, CultivationCycleFindFirstArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CultivationCycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleFindFirstOrThrowArgs} args - Arguments to find a CultivationCycle
     * @example
     * // Get one CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultivationCycleFindFirstOrThrowArgs>(args?: SelectSubset<T, CultivationCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CultivationCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CultivationCycles
     * const cultivationCycles = await prisma.cultivationCycle.findMany()
     * 
     * // Get first 10 CultivationCycles
     * const cultivationCycles = await prisma.cultivationCycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cultivationCycleWithIdOnly = await prisma.cultivationCycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CultivationCycleFindManyArgs>(args?: SelectSubset<T, CultivationCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CultivationCycle.
     * @param {CultivationCycleCreateArgs} args - Arguments to create a CultivationCycle.
     * @example
     * // Create one CultivationCycle
     * const CultivationCycle = await prisma.cultivationCycle.create({
     *   data: {
     *     // ... data to create a CultivationCycle
     *   }
     * })
     * 
     */
    create<T extends CultivationCycleCreateArgs>(args: SelectSubset<T, CultivationCycleCreateArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CultivationCycles.
     * @param {CultivationCycleCreateManyArgs} args - Arguments to create many CultivationCycles.
     * @example
     * // Create many CultivationCycles
     * const cultivationCycle = await prisma.cultivationCycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CultivationCycleCreateManyArgs>(args?: SelectSubset<T, CultivationCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CultivationCycles and returns the data saved in the database.
     * @param {CultivationCycleCreateManyAndReturnArgs} args - Arguments to create many CultivationCycles.
     * @example
     * // Create many CultivationCycles
     * const cultivationCycle = await prisma.cultivationCycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CultivationCycles and only return the `id`
     * const cultivationCycleWithIdOnly = await prisma.cultivationCycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CultivationCycleCreateManyAndReturnArgs>(args?: SelectSubset<T, CultivationCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CultivationCycle.
     * @param {CultivationCycleDeleteArgs} args - Arguments to delete one CultivationCycle.
     * @example
     * // Delete one CultivationCycle
     * const CultivationCycle = await prisma.cultivationCycle.delete({
     *   where: {
     *     // ... filter to delete one CultivationCycle
     *   }
     * })
     * 
     */
    delete<T extends CultivationCycleDeleteArgs>(args: SelectSubset<T, CultivationCycleDeleteArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CultivationCycle.
     * @param {CultivationCycleUpdateArgs} args - Arguments to update one CultivationCycle.
     * @example
     * // Update one CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CultivationCycleUpdateArgs>(args: SelectSubset<T, CultivationCycleUpdateArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CultivationCycles.
     * @param {CultivationCycleDeleteManyArgs} args - Arguments to filter CultivationCycles to delete.
     * @example
     * // Delete a few CultivationCycles
     * const { count } = await prisma.cultivationCycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CultivationCycleDeleteManyArgs>(args?: SelectSubset<T, CultivationCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultivationCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CultivationCycles
     * const cultivationCycle = await prisma.cultivationCycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CultivationCycleUpdateManyArgs>(args: SelectSubset<T, CultivationCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CultivationCycles and returns the data updated in the database.
     * @param {CultivationCycleUpdateManyAndReturnArgs} args - Arguments to update many CultivationCycles.
     * @example
     * // Update many CultivationCycles
     * const cultivationCycle = await prisma.cultivationCycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CultivationCycles and only return the `id`
     * const cultivationCycleWithIdOnly = await prisma.cultivationCycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CultivationCycleUpdateManyAndReturnArgs>(args: SelectSubset<T, CultivationCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CultivationCycle.
     * @param {CultivationCycleUpsertArgs} args - Arguments to update or create a CultivationCycle.
     * @example
     * // Update or create a CultivationCycle
     * const cultivationCycle = await prisma.cultivationCycle.upsert({
     *   create: {
     *     // ... data to create a CultivationCycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CultivationCycle we want to update
     *   }
     * })
     */
    upsert<T extends CultivationCycleUpsertArgs>(args: SelectSubset<T, CultivationCycleUpsertArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CultivationCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleCountArgs} args - Arguments to filter CultivationCycles to count.
     * @example
     * // Count the number of CultivationCycles
     * const count = await prisma.cultivationCycle.count({
     *   where: {
     *     // ... the filter for the CultivationCycles we want to count
     *   }
     * })
    **/
    count<T extends CultivationCycleCountArgs>(
      args?: Subset<T, CultivationCycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CultivationCycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CultivationCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CultivationCycleAggregateArgs>(args: Subset<T, CultivationCycleAggregateArgs>): Prisma.PrismaPromise<GetCultivationCycleAggregateType<T>>

    /**
     * Group by CultivationCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivationCycleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CultivationCycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CultivationCycleGroupByArgs['orderBy'] }
        : { orderBy?: CultivationCycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CultivationCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultivationCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CultivationCycle model
   */
  readonly fields: CultivationCycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CultivationCycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CultivationCycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    harvests<T extends CultivationCycle$harvestsArgs<ExtArgs> = {}>(args?: Subset<T, CultivationCycle$harvestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CultivationCycle model
   */
  interface CultivationCycleFieldRefs {
    readonly id: FieldRef<"CultivationCycle", 'String'>
    readonly deviceId: FieldRef<"CultivationCycle", 'String'>
    readonly name: FieldRef<"CultivationCycle", 'String'>
    readonly mushroomType: FieldRef<"CultivationCycle", 'String'>
    readonly strain: FieldRef<"CultivationCycle", 'String'>
    readonly baglogCount: FieldRef<"CultivationCycle", 'Int'>
    readonly startedAt: FieldRef<"CultivationCycle", 'DateTime'>
    readonly expectedEndedAt: FieldRef<"CultivationCycle", 'DateTime'>
    readonly endedAt: FieldRef<"CultivationCycle", 'DateTime'>
    readonly status: FieldRef<"CultivationCycle", 'String'>
    readonly notes: FieldRef<"CultivationCycle", 'String'>
    readonly createdAt: FieldRef<"CultivationCycle", 'DateTime'>
    readonly updatedAt: FieldRef<"CultivationCycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CultivationCycle findUnique
   */
  export type CultivationCycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter, which CultivationCycle to fetch.
     */
    where: CultivationCycleWhereUniqueInput
  }

  /**
   * CultivationCycle findUniqueOrThrow
   */
  export type CultivationCycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter, which CultivationCycle to fetch.
     */
    where: CultivationCycleWhereUniqueInput
  }

  /**
   * CultivationCycle findFirst
   */
  export type CultivationCycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter, which CultivationCycle to fetch.
     */
    where?: CultivationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultivationCycles to fetch.
     */
    orderBy?: CultivationCycleOrderByWithRelationInput | CultivationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultivationCycles.
     */
    cursor?: CultivationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultivationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultivationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultivationCycles.
     */
    distinct?: CultivationCycleScalarFieldEnum | CultivationCycleScalarFieldEnum[]
  }

  /**
   * CultivationCycle findFirstOrThrow
   */
  export type CultivationCycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter, which CultivationCycle to fetch.
     */
    where?: CultivationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultivationCycles to fetch.
     */
    orderBy?: CultivationCycleOrderByWithRelationInput | CultivationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CultivationCycles.
     */
    cursor?: CultivationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultivationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultivationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultivationCycles.
     */
    distinct?: CultivationCycleScalarFieldEnum | CultivationCycleScalarFieldEnum[]
  }

  /**
   * CultivationCycle findMany
   */
  export type CultivationCycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter, which CultivationCycles to fetch.
     */
    where?: CultivationCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CultivationCycles to fetch.
     */
    orderBy?: CultivationCycleOrderByWithRelationInput | CultivationCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CultivationCycles.
     */
    cursor?: CultivationCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CultivationCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CultivationCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CultivationCycles.
     */
    distinct?: CultivationCycleScalarFieldEnum | CultivationCycleScalarFieldEnum[]
  }

  /**
   * CultivationCycle create
   */
  export type CultivationCycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * The data needed to create a CultivationCycle.
     */
    data: XOR<CultivationCycleCreateInput, CultivationCycleUncheckedCreateInput>
  }

  /**
   * CultivationCycle createMany
   */
  export type CultivationCycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CultivationCycles.
     */
    data: CultivationCycleCreateManyInput | CultivationCycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CultivationCycle createManyAndReturn
   */
  export type CultivationCycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * The data used to create many CultivationCycles.
     */
    data: CultivationCycleCreateManyInput | CultivationCycleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultivationCycle update
   */
  export type CultivationCycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * The data needed to update a CultivationCycle.
     */
    data: XOR<CultivationCycleUpdateInput, CultivationCycleUncheckedUpdateInput>
    /**
     * Choose, which CultivationCycle to update.
     */
    where: CultivationCycleWhereUniqueInput
  }

  /**
   * CultivationCycle updateMany
   */
  export type CultivationCycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CultivationCycles.
     */
    data: XOR<CultivationCycleUpdateManyMutationInput, CultivationCycleUncheckedUpdateManyInput>
    /**
     * Filter which CultivationCycles to update
     */
    where?: CultivationCycleWhereInput
    /**
     * Limit how many CultivationCycles to update.
     */
    limit?: number
  }

  /**
   * CultivationCycle updateManyAndReturn
   */
  export type CultivationCycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * The data used to update CultivationCycles.
     */
    data: XOR<CultivationCycleUpdateManyMutationInput, CultivationCycleUncheckedUpdateManyInput>
    /**
     * Filter which CultivationCycles to update
     */
    where?: CultivationCycleWhereInput
    /**
     * Limit how many CultivationCycles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CultivationCycle upsert
   */
  export type CultivationCycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * The filter to search for the CultivationCycle to update in case it exists.
     */
    where: CultivationCycleWhereUniqueInput
    /**
     * In case the CultivationCycle found by the `where` argument doesn't exist, create a new CultivationCycle with this data.
     */
    create: XOR<CultivationCycleCreateInput, CultivationCycleUncheckedCreateInput>
    /**
     * In case the CultivationCycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CultivationCycleUpdateInput, CultivationCycleUncheckedUpdateInput>
  }

  /**
   * CultivationCycle delete
   */
  export type CultivationCycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
    /**
     * Filter which CultivationCycle to delete.
     */
    where: CultivationCycleWhereUniqueInput
  }

  /**
   * CultivationCycle deleteMany
   */
  export type CultivationCycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CultivationCycles to delete
     */
    where?: CultivationCycleWhereInput
    /**
     * Limit how many CultivationCycles to delete.
     */
    limit?: number
  }

  /**
   * CultivationCycle.harvests
   */
  export type CultivationCycle$harvestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    where?: HarvestRecordWhereInput
    orderBy?: HarvestRecordOrderByWithRelationInput | HarvestRecordOrderByWithRelationInput[]
    cursor?: HarvestRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HarvestRecordScalarFieldEnum | HarvestRecordScalarFieldEnum[]
  }

  /**
   * CultivationCycle without action
   */
  export type CultivationCycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivationCycle
     */
    select?: CultivationCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CultivationCycle
     */
    omit?: CultivationCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CultivationCycleInclude<ExtArgs> | null
  }


  /**
   * Model HarvestRecord
   */

  export type AggregateHarvestRecord = {
    _count: HarvestRecordCountAggregateOutputType | null
    _avg: HarvestRecordAvgAggregateOutputType | null
    _sum: HarvestRecordSumAggregateOutputType | null
    _min: HarvestRecordMinAggregateOutputType | null
    _max: HarvestRecordMaxAggregateOutputType | null
  }

  export type HarvestRecordAvgAggregateOutputType = {
    weightKg: Decimal | null
    pricePerKg: Decimal | null
  }

  export type HarvestRecordSumAggregateOutputType = {
    weightKg: Decimal | null
    pricePerKg: Decimal | null
  }

  export type HarvestRecordMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    harvestedAt: Date | null
    weightKg: Decimal | null
    pricePerKg: Decimal | null
    grade: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HarvestRecordMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    harvestedAt: Date | null
    weightKg: Decimal | null
    pricePerKg: Decimal | null
    grade: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HarvestRecordCountAggregateOutputType = {
    id: number
    cycleId: number
    harvestedAt: number
    weightKg: number
    pricePerKg: number
    grade: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HarvestRecordAvgAggregateInputType = {
    weightKg?: true
    pricePerKg?: true
  }

  export type HarvestRecordSumAggregateInputType = {
    weightKg?: true
    pricePerKg?: true
  }

  export type HarvestRecordMinAggregateInputType = {
    id?: true
    cycleId?: true
    harvestedAt?: true
    weightKg?: true
    pricePerKg?: true
    grade?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HarvestRecordMaxAggregateInputType = {
    id?: true
    cycleId?: true
    harvestedAt?: true
    weightKg?: true
    pricePerKg?: true
    grade?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HarvestRecordCountAggregateInputType = {
    id?: true
    cycleId?: true
    harvestedAt?: true
    weightKg?: true
    pricePerKg?: true
    grade?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HarvestRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HarvestRecord to aggregate.
     */
    where?: HarvestRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HarvestRecords to fetch.
     */
    orderBy?: HarvestRecordOrderByWithRelationInput | HarvestRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HarvestRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HarvestRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HarvestRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HarvestRecords
    **/
    _count?: true | HarvestRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HarvestRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HarvestRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HarvestRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HarvestRecordMaxAggregateInputType
  }

  export type GetHarvestRecordAggregateType<T extends HarvestRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHarvestRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHarvestRecord[P]>
      : GetScalarType<T[P], AggregateHarvestRecord[P]>
  }




  export type HarvestRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HarvestRecordWhereInput
    orderBy?: HarvestRecordOrderByWithAggregationInput | HarvestRecordOrderByWithAggregationInput[]
    by: HarvestRecordScalarFieldEnum[] | HarvestRecordScalarFieldEnum
    having?: HarvestRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HarvestRecordCountAggregateInputType | true
    _avg?: HarvestRecordAvgAggregateInputType
    _sum?: HarvestRecordSumAggregateInputType
    _min?: HarvestRecordMinAggregateInputType
    _max?: HarvestRecordMaxAggregateInputType
  }

  export type HarvestRecordGroupByOutputType = {
    id: string
    cycleId: string
    harvestedAt: Date
    weightKg: Decimal
    pricePerKg: Decimal | null
    grade: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: HarvestRecordCountAggregateOutputType | null
    _avg: HarvestRecordAvgAggregateOutputType | null
    _sum: HarvestRecordSumAggregateOutputType | null
    _min: HarvestRecordMinAggregateOutputType | null
    _max: HarvestRecordMaxAggregateOutputType | null
  }

  type GetHarvestRecordGroupByPayload<T extends HarvestRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HarvestRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HarvestRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HarvestRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HarvestRecordGroupByOutputType[P]>
        }
      >
    >


  export type HarvestRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    harvestedAt?: boolean
    weightKg?: boolean
    pricePerKg?: boolean
    grade?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvestRecord"]>

  export type HarvestRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    harvestedAt?: boolean
    weightKg?: boolean
    pricePerKg?: boolean
    grade?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvestRecord"]>

  export type HarvestRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    harvestedAt?: boolean
    weightKg?: boolean
    pricePerKg?: boolean
    grade?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvestRecord"]>

  export type HarvestRecordSelectScalar = {
    id?: boolean
    cycleId?: boolean
    harvestedAt?: boolean
    weightKg?: boolean
    pricePerKg?: boolean
    grade?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HarvestRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cycleId" | "harvestedAt" | "weightKg" | "pricePerKg" | "grade" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["harvestRecord"]>
  export type HarvestRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }
  export type HarvestRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }
  export type HarvestRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CultivationCycleDefaultArgs<ExtArgs>
  }

  export type $HarvestRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HarvestRecord"
    objects: {
      cycle: Prisma.$CultivationCyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      harvestedAt: Date
      weightKg: Prisma.Decimal
      pricePerKg: Prisma.Decimal | null
      grade: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["harvestRecord"]>
    composites: {}
  }

  type HarvestRecordGetPayload<S extends boolean | null | undefined | HarvestRecordDefaultArgs> = $Result.GetResult<Prisma.$HarvestRecordPayload, S>

  type HarvestRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HarvestRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HarvestRecordCountAggregateInputType | true
    }

  export interface HarvestRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HarvestRecord'], meta: { name: 'HarvestRecord' } }
    /**
     * Find zero or one HarvestRecord that matches the filter.
     * @param {HarvestRecordFindUniqueArgs} args - Arguments to find a HarvestRecord
     * @example
     * // Get one HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HarvestRecordFindUniqueArgs>(args: SelectSubset<T, HarvestRecordFindUniqueArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HarvestRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HarvestRecordFindUniqueOrThrowArgs} args - Arguments to find a HarvestRecord
     * @example
     * // Get one HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HarvestRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, HarvestRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HarvestRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordFindFirstArgs} args - Arguments to find a HarvestRecord
     * @example
     * // Get one HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HarvestRecordFindFirstArgs>(args?: SelectSubset<T, HarvestRecordFindFirstArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HarvestRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordFindFirstOrThrowArgs} args - Arguments to find a HarvestRecord
     * @example
     * // Get one HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HarvestRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, HarvestRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HarvestRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HarvestRecords
     * const harvestRecords = await prisma.harvestRecord.findMany()
     * 
     * // Get first 10 HarvestRecords
     * const harvestRecords = await prisma.harvestRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const harvestRecordWithIdOnly = await prisma.harvestRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HarvestRecordFindManyArgs>(args?: SelectSubset<T, HarvestRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HarvestRecord.
     * @param {HarvestRecordCreateArgs} args - Arguments to create a HarvestRecord.
     * @example
     * // Create one HarvestRecord
     * const HarvestRecord = await prisma.harvestRecord.create({
     *   data: {
     *     // ... data to create a HarvestRecord
     *   }
     * })
     * 
     */
    create<T extends HarvestRecordCreateArgs>(args: SelectSubset<T, HarvestRecordCreateArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HarvestRecords.
     * @param {HarvestRecordCreateManyArgs} args - Arguments to create many HarvestRecords.
     * @example
     * // Create many HarvestRecords
     * const harvestRecord = await prisma.harvestRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HarvestRecordCreateManyArgs>(args?: SelectSubset<T, HarvestRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HarvestRecords and returns the data saved in the database.
     * @param {HarvestRecordCreateManyAndReturnArgs} args - Arguments to create many HarvestRecords.
     * @example
     * // Create many HarvestRecords
     * const harvestRecord = await prisma.harvestRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HarvestRecords and only return the `id`
     * const harvestRecordWithIdOnly = await prisma.harvestRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HarvestRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, HarvestRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HarvestRecord.
     * @param {HarvestRecordDeleteArgs} args - Arguments to delete one HarvestRecord.
     * @example
     * // Delete one HarvestRecord
     * const HarvestRecord = await prisma.harvestRecord.delete({
     *   where: {
     *     // ... filter to delete one HarvestRecord
     *   }
     * })
     * 
     */
    delete<T extends HarvestRecordDeleteArgs>(args: SelectSubset<T, HarvestRecordDeleteArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HarvestRecord.
     * @param {HarvestRecordUpdateArgs} args - Arguments to update one HarvestRecord.
     * @example
     * // Update one HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HarvestRecordUpdateArgs>(args: SelectSubset<T, HarvestRecordUpdateArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HarvestRecords.
     * @param {HarvestRecordDeleteManyArgs} args - Arguments to filter HarvestRecords to delete.
     * @example
     * // Delete a few HarvestRecords
     * const { count } = await prisma.harvestRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HarvestRecordDeleteManyArgs>(args?: SelectSubset<T, HarvestRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HarvestRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HarvestRecords
     * const harvestRecord = await prisma.harvestRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HarvestRecordUpdateManyArgs>(args: SelectSubset<T, HarvestRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HarvestRecords and returns the data updated in the database.
     * @param {HarvestRecordUpdateManyAndReturnArgs} args - Arguments to update many HarvestRecords.
     * @example
     * // Update many HarvestRecords
     * const harvestRecord = await prisma.harvestRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HarvestRecords and only return the `id`
     * const harvestRecordWithIdOnly = await prisma.harvestRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HarvestRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, HarvestRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HarvestRecord.
     * @param {HarvestRecordUpsertArgs} args - Arguments to update or create a HarvestRecord.
     * @example
     * // Update or create a HarvestRecord
     * const harvestRecord = await prisma.harvestRecord.upsert({
     *   create: {
     *     // ... data to create a HarvestRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HarvestRecord we want to update
     *   }
     * })
     */
    upsert<T extends HarvestRecordUpsertArgs>(args: SelectSubset<T, HarvestRecordUpsertArgs<ExtArgs>>): Prisma__HarvestRecordClient<$Result.GetResult<Prisma.$HarvestRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HarvestRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordCountArgs} args - Arguments to filter HarvestRecords to count.
     * @example
     * // Count the number of HarvestRecords
     * const count = await prisma.harvestRecord.count({
     *   where: {
     *     // ... the filter for the HarvestRecords we want to count
     *   }
     * })
    **/
    count<T extends HarvestRecordCountArgs>(
      args?: Subset<T, HarvestRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HarvestRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HarvestRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HarvestRecordAggregateArgs>(args: Subset<T, HarvestRecordAggregateArgs>): Prisma.PrismaPromise<GetHarvestRecordAggregateType<T>>

    /**
     * Group by HarvestRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HarvestRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HarvestRecordGroupByArgs['orderBy'] }
        : { orderBy?: HarvestRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HarvestRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHarvestRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HarvestRecord model
   */
  readonly fields: HarvestRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HarvestRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HarvestRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle<T extends CultivationCycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CultivationCycleDefaultArgs<ExtArgs>>): Prisma__CultivationCycleClient<$Result.GetResult<Prisma.$CultivationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HarvestRecord model
   */
  interface HarvestRecordFieldRefs {
    readonly id: FieldRef<"HarvestRecord", 'String'>
    readonly cycleId: FieldRef<"HarvestRecord", 'String'>
    readonly harvestedAt: FieldRef<"HarvestRecord", 'DateTime'>
    readonly weightKg: FieldRef<"HarvestRecord", 'Decimal'>
    readonly pricePerKg: FieldRef<"HarvestRecord", 'Decimal'>
    readonly grade: FieldRef<"HarvestRecord", 'String'>
    readonly notes: FieldRef<"HarvestRecord", 'String'>
    readonly createdAt: FieldRef<"HarvestRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"HarvestRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HarvestRecord findUnique
   */
  export type HarvestRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter, which HarvestRecord to fetch.
     */
    where: HarvestRecordWhereUniqueInput
  }

  /**
   * HarvestRecord findUniqueOrThrow
   */
  export type HarvestRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter, which HarvestRecord to fetch.
     */
    where: HarvestRecordWhereUniqueInput
  }

  /**
   * HarvestRecord findFirst
   */
  export type HarvestRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter, which HarvestRecord to fetch.
     */
    where?: HarvestRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HarvestRecords to fetch.
     */
    orderBy?: HarvestRecordOrderByWithRelationInput | HarvestRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HarvestRecords.
     */
    cursor?: HarvestRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HarvestRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HarvestRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HarvestRecords.
     */
    distinct?: HarvestRecordScalarFieldEnum | HarvestRecordScalarFieldEnum[]
  }

  /**
   * HarvestRecord findFirstOrThrow
   */
  export type HarvestRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter, which HarvestRecord to fetch.
     */
    where?: HarvestRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HarvestRecords to fetch.
     */
    orderBy?: HarvestRecordOrderByWithRelationInput | HarvestRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HarvestRecords.
     */
    cursor?: HarvestRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HarvestRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HarvestRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HarvestRecords.
     */
    distinct?: HarvestRecordScalarFieldEnum | HarvestRecordScalarFieldEnum[]
  }

  /**
   * HarvestRecord findMany
   */
  export type HarvestRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter, which HarvestRecords to fetch.
     */
    where?: HarvestRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HarvestRecords to fetch.
     */
    orderBy?: HarvestRecordOrderByWithRelationInput | HarvestRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HarvestRecords.
     */
    cursor?: HarvestRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HarvestRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HarvestRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HarvestRecords.
     */
    distinct?: HarvestRecordScalarFieldEnum | HarvestRecordScalarFieldEnum[]
  }

  /**
   * HarvestRecord create
   */
  export type HarvestRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HarvestRecord.
     */
    data: XOR<HarvestRecordCreateInput, HarvestRecordUncheckedCreateInput>
  }

  /**
   * HarvestRecord createMany
   */
  export type HarvestRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HarvestRecords.
     */
    data: HarvestRecordCreateManyInput | HarvestRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HarvestRecord createManyAndReturn
   */
  export type HarvestRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * The data used to create many HarvestRecords.
     */
    data: HarvestRecordCreateManyInput | HarvestRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HarvestRecord update
   */
  export type HarvestRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HarvestRecord.
     */
    data: XOR<HarvestRecordUpdateInput, HarvestRecordUncheckedUpdateInput>
    /**
     * Choose, which HarvestRecord to update.
     */
    where: HarvestRecordWhereUniqueInput
  }

  /**
   * HarvestRecord updateMany
   */
  export type HarvestRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HarvestRecords.
     */
    data: XOR<HarvestRecordUpdateManyMutationInput, HarvestRecordUncheckedUpdateManyInput>
    /**
     * Filter which HarvestRecords to update
     */
    where?: HarvestRecordWhereInput
    /**
     * Limit how many HarvestRecords to update.
     */
    limit?: number
  }

  /**
   * HarvestRecord updateManyAndReturn
   */
  export type HarvestRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * The data used to update HarvestRecords.
     */
    data: XOR<HarvestRecordUpdateManyMutationInput, HarvestRecordUncheckedUpdateManyInput>
    /**
     * Filter which HarvestRecords to update
     */
    where?: HarvestRecordWhereInput
    /**
     * Limit how many HarvestRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HarvestRecord upsert
   */
  export type HarvestRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HarvestRecord to update in case it exists.
     */
    where: HarvestRecordWhereUniqueInput
    /**
     * In case the HarvestRecord found by the `where` argument doesn't exist, create a new HarvestRecord with this data.
     */
    create: XOR<HarvestRecordCreateInput, HarvestRecordUncheckedCreateInput>
    /**
     * In case the HarvestRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HarvestRecordUpdateInput, HarvestRecordUncheckedUpdateInput>
  }

  /**
   * HarvestRecord delete
   */
  export type HarvestRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
    /**
     * Filter which HarvestRecord to delete.
     */
    where: HarvestRecordWhereUniqueInput
  }

  /**
   * HarvestRecord deleteMany
   */
  export type HarvestRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HarvestRecords to delete
     */
    where?: HarvestRecordWhereInput
    /**
     * Limit how many HarvestRecords to delete.
     */
    limit?: number
  }

  /**
   * HarvestRecord without action
   */
  export type HarvestRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestRecord
     */
    select?: HarvestRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HarvestRecord
     */
    omit?: HarvestRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HarvestRecordInclude<ExtArgs> | null
  }


  /**
   * Model Firmware
   */

  export type AggregateFirmware = {
    _count: FirmwareCountAggregateOutputType | null
    _avg: FirmwareAvgAggregateOutputType | null
    _sum: FirmwareSumAggregateOutputType | null
    _min: FirmwareMinAggregateOutputType | null
    _max: FirmwareMaxAggregateOutputType | null
  }

  export type FirmwareAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type FirmwareSumAggregateOutputType = {
    fileSize: number | null
  }

  export type FirmwareMinAggregateOutputType = {
    id: string | null
    version: string | null
    filename: string | null
    originalName: string | null
    filePath: string | null
    fileSize: number | null
    checksumSha256: string | null
    hardwareVersion: string | null
    changelog: string | null
    isLatest: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FirmwareMaxAggregateOutputType = {
    id: string | null
    version: string | null
    filename: string | null
    originalName: string | null
    filePath: string | null
    fileSize: number | null
    checksumSha256: string | null
    hardwareVersion: string | null
    changelog: string | null
    isLatest: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FirmwareCountAggregateOutputType = {
    id: number
    version: number
    filename: number
    originalName: number
    filePath: number
    fileSize: number
    checksumSha256: number
    hardwareVersion: number
    changelog: number
    isLatest: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FirmwareAvgAggregateInputType = {
    fileSize?: true
  }

  export type FirmwareSumAggregateInputType = {
    fileSize?: true
  }

  export type FirmwareMinAggregateInputType = {
    id?: true
    version?: true
    filename?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    checksumSha256?: true
    hardwareVersion?: true
    changelog?: true
    isLatest?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FirmwareMaxAggregateInputType = {
    id?: true
    version?: true
    filename?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    checksumSha256?: true
    hardwareVersion?: true
    changelog?: true
    isLatest?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FirmwareCountAggregateInputType = {
    id?: true
    version?: true
    filename?: true
    originalName?: true
    filePath?: true
    fileSize?: true
    checksumSha256?: true
    hardwareVersion?: true
    changelog?: true
    isLatest?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FirmwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Firmware to aggregate.
     */
    where?: FirmwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Firmware to fetch.
     */
    orderBy?: FirmwareOrderByWithRelationInput | FirmwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FirmwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Firmware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Firmware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Firmware
    **/
    _count?: true | FirmwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FirmwareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FirmwareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FirmwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FirmwareMaxAggregateInputType
  }

  export type GetFirmwareAggregateType<T extends FirmwareAggregateArgs> = {
        [P in keyof T & keyof AggregateFirmware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFirmware[P]>
      : GetScalarType<T[P], AggregateFirmware[P]>
  }




  export type FirmwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FirmwareWhereInput
    orderBy?: FirmwareOrderByWithAggregationInput | FirmwareOrderByWithAggregationInput[]
    by: FirmwareScalarFieldEnum[] | FirmwareScalarFieldEnum
    having?: FirmwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FirmwareCountAggregateInputType | true
    _avg?: FirmwareAvgAggregateInputType
    _sum?: FirmwareSumAggregateInputType
    _min?: FirmwareMinAggregateInputType
    _max?: FirmwareMaxAggregateInputType
  }

  export type FirmwareGroupByOutputType = {
    id: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion: string
    changelog: string | null
    isLatest: boolean
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: FirmwareCountAggregateOutputType | null
    _avg: FirmwareAvgAggregateOutputType | null
    _sum: FirmwareSumAggregateOutputType | null
    _min: FirmwareMinAggregateOutputType | null
    _max: FirmwareMaxAggregateOutputType | null
  }

  type GetFirmwareGroupByPayload<T extends FirmwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FirmwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FirmwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FirmwareGroupByOutputType[P]>
            : GetScalarType<T[P], FirmwareGroupByOutputType[P]>
        }
      >
    >


  export type FirmwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    filename?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    checksumSha256?: boolean
    hardwareVersion?: boolean
    changelog?: boolean
    isLatest?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
    otaLogs?: boolean | Firmware$otaLogsArgs<ExtArgs>
    _count?: boolean | FirmwareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["firmware"]>

  export type FirmwareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    filename?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    checksumSha256?: boolean
    hardwareVersion?: boolean
    changelog?: boolean
    isLatest?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["firmware"]>

  export type FirmwareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    filename?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    checksumSha256?: boolean
    hardwareVersion?: boolean
    changelog?: boolean
    isLatest?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["firmware"]>

  export type FirmwareSelectScalar = {
    id?: boolean
    version?: boolean
    filename?: boolean
    originalName?: boolean
    filePath?: boolean
    fileSize?: boolean
    checksumSha256?: boolean
    hardwareVersion?: boolean
    changelog?: boolean
    isLatest?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FirmwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "filename" | "originalName" | "filePath" | "fileSize" | "checksumSha256" | "hardwareVersion" | "changelog" | "isLatest" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["firmware"]>
  export type FirmwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
    otaLogs?: boolean | Firmware$otaLogsArgs<ExtArgs>
    _count?: boolean | FirmwareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FirmwareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
  }
  export type FirmwareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Firmware$createdByArgs<ExtArgs>
  }

  export type $FirmwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Firmware"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      otaLogs: Prisma.$OtaLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: string
      filename: string
      originalName: string
      filePath: string
      fileSize: number
      checksumSha256: string
      hardwareVersion: string
      changelog: string | null
      isLatest: boolean
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["firmware"]>
    composites: {}
  }

  type FirmwareGetPayload<S extends boolean | null | undefined | FirmwareDefaultArgs> = $Result.GetResult<Prisma.$FirmwarePayload, S>

  type FirmwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FirmwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FirmwareCountAggregateInputType | true
    }

  export interface FirmwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Firmware'], meta: { name: 'Firmware' } }
    /**
     * Find zero or one Firmware that matches the filter.
     * @param {FirmwareFindUniqueArgs} args - Arguments to find a Firmware
     * @example
     * // Get one Firmware
     * const firmware = await prisma.firmware.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FirmwareFindUniqueArgs>(args: SelectSubset<T, FirmwareFindUniqueArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Firmware that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FirmwareFindUniqueOrThrowArgs} args - Arguments to find a Firmware
     * @example
     * // Get one Firmware
     * const firmware = await prisma.firmware.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FirmwareFindUniqueOrThrowArgs>(args: SelectSubset<T, FirmwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Firmware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFindFirstArgs} args - Arguments to find a Firmware
     * @example
     * // Get one Firmware
     * const firmware = await prisma.firmware.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FirmwareFindFirstArgs>(args?: SelectSubset<T, FirmwareFindFirstArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Firmware that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFindFirstOrThrowArgs} args - Arguments to find a Firmware
     * @example
     * // Get one Firmware
     * const firmware = await prisma.firmware.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FirmwareFindFirstOrThrowArgs>(args?: SelectSubset<T, FirmwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Firmware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Firmware
     * const firmware = await prisma.firmware.findMany()
     * 
     * // Get first 10 Firmware
     * const firmware = await prisma.firmware.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const firmwareWithIdOnly = await prisma.firmware.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FirmwareFindManyArgs>(args?: SelectSubset<T, FirmwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Firmware.
     * @param {FirmwareCreateArgs} args - Arguments to create a Firmware.
     * @example
     * // Create one Firmware
     * const Firmware = await prisma.firmware.create({
     *   data: {
     *     // ... data to create a Firmware
     *   }
     * })
     * 
     */
    create<T extends FirmwareCreateArgs>(args: SelectSubset<T, FirmwareCreateArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Firmware.
     * @param {FirmwareCreateManyArgs} args - Arguments to create many Firmware.
     * @example
     * // Create many Firmware
     * const firmware = await prisma.firmware.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FirmwareCreateManyArgs>(args?: SelectSubset<T, FirmwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Firmware and returns the data saved in the database.
     * @param {FirmwareCreateManyAndReturnArgs} args - Arguments to create many Firmware.
     * @example
     * // Create many Firmware
     * const firmware = await prisma.firmware.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Firmware and only return the `id`
     * const firmwareWithIdOnly = await prisma.firmware.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FirmwareCreateManyAndReturnArgs>(args?: SelectSubset<T, FirmwareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Firmware.
     * @param {FirmwareDeleteArgs} args - Arguments to delete one Firmware.
     * @example
     * // Delete one Firmware
     * const Firmware = await prisma.firmware.delete({
     *   where: {
     *     // ... filter to delete one Firmware
     *   }
     * })
     * 
     */
    delete<T extends FirmwareDeleteArgs>(args: SelectSubset<T, FirmwareDeleteArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Firmware.
     * @param {FirmwareUpdateArgs} args - Arguments to update one Firmware.
     * @example
     * // Update one Firmware
     * const firmware = await prisma.firmware.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FirmwareUpdateArgs>(args: SelectSubset<T, FirmwareUpdateArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Firmware.
     * @param {FirmwareDeleteManyArgs} args - Arguments to filter Firmware to delete.
     * @example
     * // Delete a few Firmware
     * const { count } = await prisma.firmware.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FirmwareDeleteManyArgs>(args?: SelectSubset<T, FirmwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Firmware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Firmware
     * const firmware = await prisma.firmware.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FirmwareUpdateManyArgs>(args: SelectSubset<T, FirmwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Firmware and returns the data updated in the database.
     * @param {FirmwareUpdateManyAndReturnArgs} args - Arguments to update many Firmware.
     * @example
     * // Update many Firmware
     * const firmware = await prisma.firmware.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Firmware and only return the `id`
     * const firmwareWithIdOnly = await prisma.firmware.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FirmwareUpdateManyAndReturnArgs>(args: SelectSubset<T, FirmwareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Firmware.
     * @param {FirmwareUpsertArgs} args - Arguments to update or create a Firmware.
     * @example
     * // Update or create a Firmware
     * const firmware = await prisma.firmware.upsert({
     *   create: {
     *     // ... data to create a Firmware
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Firmware we want to update
     *   }
     * })
     */
    upsert<T extends FirmwareUpsertArgs>(args: SelectSubset<T, FirmwareUpsertArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Firmware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareCountArgs} args - Arguments to filter Firmware to count.
     * @example
     * // Count the number of Firmware
     * const count = await prisma.firmware.count({
     *   where: {
     *     // ... the filter for the Firmware we want to count
     *   }
     * })
    **/
    count<T extends FirmwareCountArgs>(
      args?: Subset<T, FirmwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FirmwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Firmware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FirmwareAggregateArgs>(args: Subset<T, FirmwareAggregateArgs>): Prisma.PrismaPromise<GetFirmwareAggregateType<T>>

    /**
     * Group by Firmware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirmwareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FirmwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FirmwareGroupByArgs['orderBy'] }
        : { orderBy?: FirmwareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FirmwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirmwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Firmware model
   */
  readonly fields: FirmwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Firmware.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FirmwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Firmware$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Firmware$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    otaLogs<T extends Firmware$otaLogsArgs<ExtArgs> = {}>(args?: Subset<T, Firmware$otaLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Firmware model
   */
  interface FirmwareFieldRefs {
    readonly id: FieldRef<"Firmware", 'String'>
    readonly version: FieldRef<"Firmware", 'String'>
    readonly filename: FieldRef<"Firmware", 'String'>
    readonly originalName: FieldRef<"Firmware", 'String'>
    readonly filePath: FieldRef<"Firmware", 'String'>
    readonly fileSize: FieldRef<"Firmware", 'Int'>
    readonly checksumSha256: FieldRef<"Firmware", 'String'>
    readonly hardwareVersion: FieldRef<"Firmware", 'String'>
    readonly changelog: FieldRef<"Firmware", 'String'>
    readonly isLatest: FieldRef<"Firmware", 'Boolean'>
    readonly createdById: FieldRef<"Firmware", 'String'>
    readonly createdAt: FieldRef<"Firmware", 'DateTime'>
    readonly updatedAt: FieldRef<"Firmware", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Firmware findUnique
   */
  export type FirmwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter, which Firmware to fetch.
     */
    where: FirmwareWhereUniqueInput
  }

  /**
   * Firmware findUniqueOrThrow
   */
  export type FirmwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter, which Firmware to fetch.
     */
    where: FirmwareWhereUniqueInput
  }

  /**
   * Firmware findFirst
   */
  export type FirmwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter, which Firmware to fetch.
     */
    where?: FirmwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Firmware to fetch.
     */
    orderBy?: FirmwareOrderByWithRelationInput | FirmwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Firmware.
     */
    cursor?: FirmwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Firmware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Firmware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Firmware.
     */
    distinct?: FirmwareScalarFieldEnum | FirmwareScalarFieldEnum[]
  }

  /**
   * Firmware findFirstOrThrow
   */
  export type FirmwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter, which Firmware to fetch.
     */
    where?: FirmwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Firmware to fetch.
     */
    orderBy?: FirmwareOrderByWithRelationInput | FirmwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Firmware.
     */
    cursor?: FirmwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Firmware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Firmware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Firmware.
     */
    distinct?: FirmwareScalarFieldEnum | FirmwareScalarFieldEnum[]
  }

  /**
   * Firmware findMany
   */
  export type FirmwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter, which Firmware to fetch.
     */
    where?: FirmwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Firmware to fetch.
     */
    orderBy?: FirmwareOrderByWithRelationInput | FirmwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Firmware.
     */
    cursor?: FirmwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Firmware from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Firmware.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Firmware.
     */
    distinct?: FirmwareScalarFieldEnum | FirmwareScalarFieldEnum[]
  }

  /**
   * Firmware create
   */
  export type FirmwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * The data needed to create a Firmware.
     */
    data: XOR<FirmwareCreateInput, FirmwareUncheckedCreateInput>
  }

  /**
   * Firmware createMany
   */
  export type FirmwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Firmware.
     */
    data: FirmwareCreateManyInput | FirmwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Firmware createManyAndReturn
   */
  export type FirmwareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * The data used to create many Firmware.
     */
    data: FirmwareCreateManyInput | FirmwareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Firmware update
   */
  export type FirmwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * The data needed to update a Firmware.
     */
    data: XOR<FirmwareUpdateInput, FirmwareUncheckedUpdateInput>
    /**
     * Choose, which Firmware to update.
     */
    where: FirmwareWhereUniqueInput
  }

  /**
   * Firmware updateMany
   */
  export type FirmwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Firmware.
     */
    data: XOR<FirmwareUpdateManyMutationInput, FirmwareUncheckedUpdateManyInput>
    /**
     * Filter which Firmware to update
     */
    where?: FirmwareWhereInput
    /**
     * Limit how many Firmware to update.
     */
    limit?: number
  }

  /**
   * Firmware updateManyAndReturn
   */
  export type FirmwareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * The data used to update Firmware.
     */
    data: XOR<FirmwareUpdateManyMutationInput, FirmwareUncheckedUpdateManyInput>
    /**
     * Filter which Firmware to update
     */
    where?: FirmwareWhereInput
    /**
     * Limit how many Firmware to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Firmware upsert
   */
  export type FirmwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * The filter to search for the Firmware to update in case it exists.
     */
    where: FirmwareWhereUniqueInput
    /**
     * In case the Firmware found by the `where` argument doesn't exist, create a new Firmware with this data.
     */
    create: XOR<FirmwareCreateInput, FirmwareUncheckedCreateInput>
    /**
     * In case the Firmware was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FirmwareUpdateInput, FirmwareUncheckedUpdateInput>
  }

  /**
   * Firmware delete
   */
  export type FirmwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    /**
     * Filter which Firmware to delete.
     */
    where: FirmwareWhereUniqueInput
  }

  /**
   * Firmware deleteMany
   */
  export type FirmwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Firmware to delete
     */
    where?: FirmwareWhereInput
    /**
     * Limit how many Firmware to delete.
     */
    limit?: number
  }

  /**
   * Firmware.createdBy
   */
  export type Firmware$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Firmware.otaLogs
   */
  export type Firmware$otaLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    where?: OtaLogWhereInput
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    cursor?: OtaLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtaLogScalarFieldEnum | OtaLogScalarFieldEnum[]
  }

  /**
   * Firmware without action
   */
  export type FirmwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
  }


  /**
   * Model OtaLog
   */

  export type AggregateOtaLog = {
    _count: OtaLogCountAggregateOutputType | null
    _min: OtaLogMinAggregateOutputType | null
    _max: OtaLogMaxAggregateOutputType | null
  }

  export type OtaLogMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    deviceSerialNumber: string | null
    firmwareId: string | null
    firmwareVersion: string | null
    firmwareUrl: string | null
    checksumSha256: string | null
    isBroadcast: boolean | null
    status: string | null
    triggeredById: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type OtaLogMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    deviceSerialNumber: string | null
    firmwareId: string | null
    firmwareVersion: string | null
    firmwareUrl: string | null
    checksumSha256: string | null
    isBroadcast: boolean | null
    status: string | null
    triggeredById: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type OtaLogCountAggregateOutputType = {
    id: number
    deviceId: number
    deviceSerialNumber: number
    firmwareId: number
    firmwareVersion: number
    firmwareUrl: number
    checksumSha256: number
    isBroadcast: number
    status: number
    triggeredById: number
    notes: number
    createdAt: number
    _all: number
  }


  export type OtaLogMinAggregateInputType = {
    id?: true
    deviceId?: true
    deviceSerialNumber?: true
    firmwareId?: true
    firmwareVersion?: true
    firmwareUrl?: true
    checksumSha256?: true
    isBroadcast?: true
    status?: true
    triggeredById?: true
    notes?: true
    createdAt?: true
  }

  export type OtaLogMaxAggregateInputType = {
    id?: true
    deviceId?: true
    deviceSerialNumber?: true
    firmwareId?: true
    firmwareVersion?: true
    firmwareUrl?: true
    checksumSha256?: true
    isBroadcast?: true
    status?: true
    triggeredById?: true
    notes?: true
    createdAt?: true
  }

  export type OtaLogCountAggregateInputType = {
    id?: true
    deviceId?: true
    deviceSerialNumber?: true
    firmwareId?: true
    firmwareVersion?: true
    firmwareUrl?: true
    checksumSha256?: true
    isBroadcast?: true
    status?: true
    triggeredById?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type OtaLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaLog to aggregate.
     */
    where?: OtaLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaLogs to fetch.
     */
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtaLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtaLogs
    **/
    _count?: true | OtaLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtaLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtaLogMaxAggregateInputType
  }

  export type GetOtaLogAggregateType<T extends OtaLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOtaLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtaLog[P]>
      : GetScalarType<T[P], AggregateOtaLog[P]>
  }




  export type OtaLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtaLogWhereInput
    orderBy?: OtaLogOrderByWithAggregationInput | OtaLogOrderByWithAggregationInput[]
    by: OtaLogScalarFieldEnum[] | OtaLogScalarFieldEnum
    having?: OtaLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtaLogCountAggregateInputType | true
    _min?: OtaLogMinAggregateInputType
    _max?: OtaLogMaxAggregateInputType
  }

  export type OtaLogGroupByOutputType = {
    id: string
    deviceId: string | null
    deviceSerialNumber: string | null
    firmwareId: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256: string | null
    isBroadcast: boolean
    status: string
    triggeredById: string | null
    notes: string | null
    createdAt: Date
    _count: OtaLogCountAggregateOutputType | null
    _min: OtaLogMinAggregateOutputType | null
    _max: OtaLogMaxAggregateOutputType | null
  }

  type GetOtaLogGroupByPayload<T extends OtaLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtaLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtaLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtaLogGroupByOutputType[P]>
            : GetScalarType<T[P], OtaLogGroupByOutputType[P]>
        }
      >
    >


  export type OtaLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceSerialNumber?: boolean
    firmwareId?: boolean
    firmwareVersion?: boolean
    firmwareUrl?: boolean
    checksumSha256?: boolean
    isBroadcast?: boolean
    status?: boolean
    triggeredById?: boolean
    notes?: boolean
    createdAt?: boolean
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }, ExtArgs["result"]["otaLog"]>

  export type OtaLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceSerialNumber?: boolean
    firmwareId?: boolean
    firmwareVersion?: boolean
    firmwareUrl?: boolean
    checksumSha256?: boolean
    isBroadcast?: boolean
    status?: boolean
    triggeredById?: boolean
    notes?: boolean
    createdAt?: boolean
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }, ExtArgs["result"]["otaLog"]>

  export type OtaLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceSerialNumber?: boolean
    firmwareId?: boolean
    firmwareVersion?: boolean
    firmwareUrl?: boolean
    checksumSha256?: boolean
    isBroadcast?: boolean
    status?: boolean
    triggeredById?: boolean
    notes?: boolean
    createdAt?: boolean
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }, ExtArgs["result"]["otaLog"]>

  export type OtaLogSelectScalar = {
    id?: boolean
    deviceId?: boolean
    deviceSerialNumber?: boolean
    firmwareId?: boolean
    firmwareVersion?: boolean
    firmwareUrl?: boolean
    checksumSha256?: boolean
    isBroadcast?: boolean
    status?: boolean
    triggeredById?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type OtaLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "deviceSerialNumber" | "firmwareId" | "firmwareVersion" | "firmwareUrl" | "checksumSha256" | "isBroadcast" | "status" | "triggeredById" | "notes" | "createdAt", ExtArgs["result"]["otaLog"]>
  export type OtaLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }
  export type OtaLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }
  export type OtaLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | OtaLog$deviceArgs<ExtArgs>
    firmware?: boolean | OtaLog$firmwareArgs<ExtArgs>
  }

  export type $OtaLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtaLog"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs> | null
      firmware: Prisma.$FirmwarePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string | null
      deviceSerialNumber: string | null
      firmwareId: string | null
      firmwareVersion: string
      firmwareUrl: string
      checksumSha256: string | null
      isBroadcast: boolean
      status: string
      triggeredById: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["otaLog"]>
    composites: {}
  }

  type OtaLogGetPayload<S extends boolean | null | undefined | OtaLogDefaultArgs> = $Result.GetResult<Prisma.$OtaLogPayload, S>

  type OtaLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtaLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtaLogCountAggregateInputType | true
    }

  export interface OtaLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtaLog'], meta: { name: 'OtaLog' } }
    /**
     * Find zero or one OtaLog that matches the filter.
     * @param {OtaLogFindUniqueArgs} args - Arguments to find a OtaLog
     * @example
     * // Get one OtaLog
     * const otaLog = await prisma.otaLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtaLogFindUniqueArgs>(args: SelectSubset<T, OtaLogFindUniqueArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtaLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtaLogFindUniqueOrThrowArgs} args - Arguments to find a OtaLog
     * @example
     * // Get one OtaLog
     * const otaLog = await prisma.otaLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtaLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OtaLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtaLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogFindFirstArgs} args - Arguments to find a OtaLog
     * @example
     * // Get one OtaLog
     * const otaLog = await prisma.otaLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtaLogFindFirstArgs>(args?: SelectSubset<T, OtaLogFindFirstArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtaLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogFindFirstOrThrowArgs} args - Arguments to find a OtaLog
     * @example
     * // Get one OtaLog
     * const otaLog = await prisma.otaLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtaLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OtaLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtaLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtaLogs
     * const otaLogs = await prisma.otaLog.findMany()
     * 
     * // Get first 10 OtaLogs
     * const otaLogs = await prisma.otaLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otaLogWithIdOnly = await prisma.otaLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtaLogFindManyArgs>(args?: SelectSubset<T, OtaLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtaLog.
     * @param {OtaLogCreateArgs} args - Arguments to create a OtaLog.
     * @example
     * // Create one OtaLog
     * const OtaLog = await prisma.otaLog.create({
     *   data: {
     *     // ... data to create a OtaLog
     *   }
     * })
     * 
     */
    create<T extends OtaLogCreateArgs>(args: SelectSubset<T, OtaLogCreateArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtaLogs.
     * @param {OtaLogCreateManyArgs} args - Arguments to create many OtaLogs.
     * @example
     * // Create many OtaLogs
     * const otaLog = await prisma.otaLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtaLogCreateManyArgs>(args?: SelectSubset<T, OtaLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtaLogs and returns the data saved in the database.
     * @param {OtaLogCreateManyAndReturnArgs} args - Arguments to create many OtaLogs.
     * @example
     * // Create many OtaLogs
     * const otaLog = await prisma.otaLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtaLogs and only return the `id`
     * const otaLogWithIdOnly = await prisma.otaLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtaLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OtaLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtaLog.
     * @param {OtaLogDeleteArgs} args - Arguments to delete one OtaLog.
     * @example
     * // Delete one OtaLog
     * const OtaLog = await prisma.otaLog.delete({
     *   where: {
     *     // ... filter to delete one OtaLog
     *   }
     * })
     * 
     */
    delete<T extends OtaLogDeleteArgs>(args: SelectSubset<T, OtaLogDeleteArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtaLog.
     * @param {OtaLogUpdateArgs} args - Arguments to update one OtaLog.
     * @example
     * // Update one OtaLog
     * const otaLog = await prisma.otaLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtaLogUpdateArgs>(args: SelectSubset<T, OtaLogUpdateArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtaLogs.
     * @param {OtaLogDeleteManyArgs} args - Arguments to filter OtaLogs to delete.
     * @example
     * // Delete a few OtaLogs
     * const { count } = await prisma.otaLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtaLogDeleteManyArgs>(args?: SelectSubset<T, OtaLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtaLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtaLogs
     * const otaLog = await prisma.otaLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtaLogUpdateManyArgs>(args: SelectSubset<T, OtaLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtaLogs and returns the data updated in the database.
     * @param {OtaLogUpdateManyAndReturnArgs} args - Arguments to update many OtaLogs.
     * @example
     * // Update many OtaLogs
     * const otaLog = await prisma.otaLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtaLogs and only return the `id`
     * const otaLogWithIdOnly = await prisma.otaLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtaLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OtaLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtaLog.
     * @param {OtaLogUpsertArgs} args - Arguments to update or create a OtaLog.
     * @example
     * // Update or create a OtaLog
     * const otaLog = await prisma.otaLog.upsert({
     *   create: {
     *     // ... data to create a OtaLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtaLog we want to update
     *   }
     * })
     */
    upsert<T extends OtaLogUpsertArgs>(args: SelectSubset<T, OtaLogUpsertArgs<ExtArgs>>): Prisma__OtaLogClient<$Result.GetResult<Prisma.$OtaLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtaLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogCountArgs} args - Arguments to filter OtaLogs to count.
     * @example
     * // Count the number of OtaLogs
     * const count = await prisma.otaLog.count({
     *   where: {
     *     // ... the filter for the OtaLogs we want to count
     *   }
     * })
    **/
    count<T extends OtaLogCountArgs>(
      args?: Subset<T, OtaLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtaLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtaLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtaLogAggregateArgs>(args: Subset<T, OtaLogAggregateArgs>): Prisma.PrismaPromise<GetOtaLogAggregateType<T>>

    /**
     * Group by OtaLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtaLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtaLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtaLogGroupByArgs['orderBy'] }
        : { orderBy?: OtaLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtaLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtaLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtaLog model
   */
  readonly fields: OtaLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtaLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtaLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends OtaLog$deviceArgs<ExtArgs> = {}>(args?: Subset<T, OtaLog$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    firmware<T extends OtaLog$firmwareArgs<ExtArgs> = {}>(args?: Subset<T, OtaLog$firmwareArgs<ExtArgs>>): Prisma__FirmwareClient<$Result.GetResult<Prisma.$FirmwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtaLog model
   */
  interface OtaLogFieldRefs {
    readonly id: FieldRef<"OtaLog", 'String'>
    readonly deviceId: FieldRef<"OtaLog", 'String'>
    readonly deviceSerialNumber: FieldRef<"OtaLog", 'String'>
    readonly firmwareId: FieldRef<"OtaLog", 'String'>
    readonly firmwareVersion: FieldRef<"OtaLog", 'String'>
    readonly firmwareUrl: FieldRef<"OtaLog", 'String'>
    readonly checksumSha256: FieldRef<"OtaLog", 'String'>
    readonly isBroadcast: FieldRef<"OtaLog", 'Boolean'>
    readonly status: FieldRef<"OtaLog", 'String'>
    readonly triggeredById: FieldRef<"OtaLog", 'String'>
    readonly notes: FieldRef<"OtaLog", 'String'>
    readonly createdAt: FieldRef<"OtaLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtaLog findUnique
   */
  export type OtaLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter, which OtaLog to fetch.
     */
    where: OtaLogWhereUniqueInput
  }

  /**
   * OtaLog findUniqueOrThrow
   */
  export type OtaLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter, which OtaLog to fetch.
     */
    where: OtaLogWhereUniqueInput
  }

  /**
   * OtaLog findFirst
   */
  export type OtaLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter, which OtaLog to fetch.
     */
    where?: OtaLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaLogs to fetch.
     */
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaLogs.
     */
    cursor?: OtaLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaLogs.
     */
    distinct?: OtaLogScalarFieldEnum | OtaLogScalarFieldEnum[]
  }

  /**
   * OtaLog findFirstOrThrow
   */
  export type OtaLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter, which OtaLog to fetch.
     */
    where?: OtaLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaLogs to fetch.
     */
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtaLogs.
     */
    cursor?: OtaLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaLogs.
     */
    distinct?: OtaLogScalarFieldEnum | OtaLogScalarFieldEnum[]
  }

  /**
   * OtaLog findMany
   */
  export type OtaLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter, which OtaLogs to fetch.
     */
    where?: OtaLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtaLogs to fetch.
     */
    orderBy?: OtaLogOrderByWithRelationInput | OtaLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtaLogs.
     */
    cursor?: OtaLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtaLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtaLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtaLogs.
     */
    distinct?: OtaLogScalarFieldEnum | OtaLogScalarFieldEnum[]
  }

  /**
   * OtaLog create
   */
  export type OtaLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OtaLog.
     */
    data: XOR<OtaLogCreateInput, OtaLogUncheckedCreateInput>
  }

  /**
   * OtaLog createMany
   */
  export type OtaLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtaLogs.
     */
    data: OtaLogCreateManyInput | OtaLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtaLog createManyAndReturn
   */
  export type OtaLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * The data used to create many OtaLogs.
     */
    data: OtaLogCreateManyInput | OtaLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtaLog update
   */
  export type OtaLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OtaLog.
     */
    data: XOR<OtaLogUpdateInput, OtaLogUncheckedUpdateInput>
    /**
     * Choose, which OtaLog to update.
     */
    where: OtaLogWhereUniqueInput
  }

  /**
   * OtaLog updateMany
   */
  export type OtaLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtaLogs.
     */
    data: XOR<OtaLogUpdateManyMutationInput, OtaLogUncheckedUpdateManyInput>
    /**
     * Filter which OtaLogs to update
     */
    where?: OtaLogWhereInput
    /**
     * Limit how many OtaLogs to update.
     */
    limit?: number
  }

  /**
   * OtaLog updateManyAndReturn
   */
  export type OtaLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * The data used to update OtaLogs.
     */
    data: XOR<OtaLogUpdateManyMutationInput, OtaLogUncheckedUpdateManyInput>
    /**
     * Filter which OtaLogs to update
     */
    where?: OtaLogWhereInput
    /**
     * Limit how many OtaLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtaLog upsert
   */
  export type OtaLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OtaLog to update in case it exists.
     */
    where: OtaLogWhereUniqueInput
    /**
     * In case the OtaLog found by the `where` argument doesn't exist, create a new OtaLog with this data.
     */
    create: XOR<OtaLogCreateInput, OtaLogUncheckedCreateInput>
    /**
     * In case the OtaLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtaLogUpdateInput, OtaLogUncheckedUpdateInput>
  }

  /**
   * OtaLog delete
   */
  export type OtaLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
    /**
     * Filter which OtaLog to delete.
     */
    where: OtaLogWhereUniqueInput
  }

  /**
   * OtaLog deleteMany
   */
  export type OtaLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtaLogs to delete
     */
    where?: OtaLogWhereInput
    /**
     * Limit how many OtaLogs to delete.
     */
    limit?: number
  }

  /**
   * OtaLog.device
   */
  export type OtaLog$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * OtaLog.firmware
   */
  export type OtaLog$firmwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Firmware
     */
    select?: FirmwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Firmware
     */
    omit?: FirmwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FirmwareInclude<ExtArgs> | null
    where?: FirmwareWhereInput
  }

  /**
   * OtaLog without action
   */
  export type OtaLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtaLog
     */
    select?: OtaLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtaLog
     */
    omit?: OtaLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtaLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    passwordHash: 'passwordHash',
    farmName: 'farmName',
    farmAddress: 'farmAddress',
    role: 'role',
    status: 'status',
    profileCompleted: 'profileCompleted',
    mustChangePassword: 'mustChangePassword',
    createdById: 'createdById',
    activatedAt: 'activatedAt',
    lastLoginAt: 'lastLoginAt',
    fcmToken: 'fcmToken',
    lastFcmTokenAt: 'lastFcmTokenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    activationCode: 'activationCode',
    name: 'name',
    model: 'model',
    hardwareVersion: 'hardwareVersion',
    firmwareVersion: 'firmwareVersion',
    macAddress: 'macAddress',
    status: 'status',
    ownershipType: 'ownershipType',
    controlMode: 'controlMode',
    farmerId: 'farmerId',
    createdById: 'createdById',
    activatedAt: 'activatedAt',
    lastSeenAt: 'lastSeenAt',
    rssiDbm: 'rssiDbm',
    uptimeMs: 'uptimeMs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceSettingScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    minTemperature: 'minTemperature',
    maxTemperature: 'maxTemperature',
    minHumidity: 'minHumidity',
    maxHumidity: 'maxHumidity',
    timerDurationSeconds: 'timerDurationSeconds',
    telemetryIntervalSec: 'telemetryIntervalSec',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceSettingScalarFieldEnum = (typeof DeviceSettingScalarFieldEnum)[keyof typeof DeviceSettingScalarFieldEnum]


  export const SensorReadingScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    temperature: 'temperature',
    humidity: 'humidity',
    recordedAt: 'recordedAt'
  };

  export type SensorReadingScalarFieldEnum = (typeof SensorReadingScalarFieldEnum)[keyof typeof SensorReadingScalarFieldEnum]


  export const ActuatorScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    name: 'name',
    type: 'type',
    channel: 'channel',
    state: 'state',
    isEnabled: 'isEnabled',
    lastChangedAt: 'lastChangedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActuatorScalarFieldEnum = (typeof ActuatorScalarFieldEnum)[keyof typeof ActuatorScalarFieldEnum]


  export const ControlLogScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    actuatorId: 'actuatorId',
    userId: 'userId',
    action: 'action',
    source: 'source',
    mode: 'mode',
    success: 'success',
    message: 'message',
    requestedAt: 'requestedAt',
    executedAt: 'executedAt'
  };

  export type ControlLogScalarFieldEnum = (typeof ControlLogScalarFieldEnum)[keyof typeof ControlLogScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    actuatorId: 'actuatorId',
    createdById: 'createdById',
    name: 'name',
    action: 'action',
    startMinute: 'startMinute',
    durationSeconds: 'durationSeconds',
    daysOfWeek: 'daysOfWeek',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const CultivationCycleScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    name: 'name',
    mushroomType: 'mushroomType',
    strain: 'strain',
    baglogCount: 'baglogCount',
    startedAt: 'startedAt',
    expectedEndedAt: 'expectedEndedAt',
    endedAt: 'endedAt',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CultivationCycleScalarFieldEnum = (typeof CultivationCycleScalarFieldEnum)[keyof typeof CultivationCycleScalarFieldEnum]


  export const HarvestRecordScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    harvestedAt: 'harvestedAt',
    weightKg: 'weightKg',
    pricePerKg: 'pricePerKg',
    grade: 'grade',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HarvestRecordScalarFieldEnum = (typeof HarvestRecordScalarFieldEnum)[keyof typeof HarvestRecordScalarFieldEnum]


  export const FirmwareScalarFieldEnum: {
    id: 'id',
    version: 'version',
    filename: 'filename',
    originalName: 'originalName',
    filePath: 'filePath',
    fileSize: 'fileSize',
    checksumSha256: 'checksumSha256',
    hardwareVersion: 'hardwareVersion',
    changelog: 'changelog',
    isLatest: 'isLatest',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FirmwareScalarFieldEnum = (typeof FirmwareScalarFieldEnum)[keyof typeof FirmwareScalarFieldEnum]


  export const OtaLogScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    deviceSerialNumber: 'deviceSerialNumber',
    firmwareId: 'firmwareId',
    firmwareVersion: 'firmwareVersion',
    firmwareUrl: 'firmwareUrl',
    checksumSha256: 'checksumSha256',
    isBroadcast: 'isBroadcast',
    status: 'status',
    triggeredById: 'triggeredById',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type OtaLogScalarFieldEnum = (typeof OtaLogScalarFieldEnum)[keyof typeof OtaLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus[]'
   */
  export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>
    


  /**
   * Reference to a field of type 'OwnershipType'
   */
  export type EnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType'>
    


  /**
   * Reference to a field of type 'OwnershipType[]'
   */
  export type ListEnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType[]'>
    


  /**
   * Reference to a field of type 'ControlMode'
   */
  export type EnumControlModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlMode'>
    


  /**
   * Reference to a field of type 'ControlMode[]'
   */
  export type ListEnumControlModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlMode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ActuatorType'
   */
  export type EnumActuatorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActuatorType'>
    


  /**
   * Reference to a field of type 'ActuatorType[]'
   */
  export type ListEnumActuatorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActuatorType[]'>
    


  /**
   * Reference to a field of type 'ActuatorState'
   */
  export type EnumActuatorStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActuatorState'>
    


  /**
   * Reference to a field of type 'ActuatorState[]'
   */
  export type ListEnumActuatorStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActuatorState[]'>
    


  /**
   * Reference to a field of type 'ControlAction'
   */
  export type EnumControlActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlAction'>
    


  /**
   * Reference to a field of type 'ControlAction[]'
   */
  export type ListEnumControlActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlAction[]'>
    


  /**
   * Reference to a field of type 'ControlSource'
   */
  export type EnumControlSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlSource'>
    


  /**
   * Reference to a field of type 'ControlSource[]'
   */
  export type ListEnumControlSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlSource[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    farmName?: StringNullableFilter<"User"> | string | null
    farmAddress?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    profileCompleted?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdById?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    fcmToken?: StringNullableFilter<"User"> | string | null
    lastFcmTokenAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    devices?: DeviceListRelationFilter
    createdDevices?: DeviceListRelationFilter
    firmwares?: FirmwareListRelationFilter
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    farmName?: SortOrderInput | SortOrder
    farmAddress?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profileCompleted?: SortOrder
    mustChangePassword?: SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    fcmToken?: SortOrderInput | SortOrder
    lastFcmTokenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    createdDevices?: DeviceOrderByRelationAggregateInput
    firmwares?: FirmwareOrderByRelationAggregateInput
    controlLogs?: ControlLogOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    farmName?: StringNullableFilter<"User"> | string | null
    farmAddress?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    profileCompleted?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdById?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    fcmToken?: StringNullableFilter<"User"> | string | null
    lastFcmTokenAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    devices?: DeviceListRelationFilter
    createdDevices?: DeviceListRelationFilter
    firmwares?: FirmwareListRelationFilter
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    farmName?: SortOrderInput | SortOrder
    farmAddress?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profileCompleted?: SortOrder
    mustChangePassword?: SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    fcmToken?: SortOrderInput | SortOrder
    lastFcmTokenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    farmName?: StringNullableWithAggregatesFilter<"User"> | string | null
    farmAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    profileCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"User"> | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    fcmToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastFcmTokenAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    serialNumber?: StringFilter<"Device"> | string
    activationCode?: StringFilter<"Device"> | string
    name?: StringNullableFilter<"Device"> | string | null
    model?: StringFilter<"Device"> | string
    hardwareVersion?: StringNullableFilter<"Device"> | string | null
    firmwareVersion?: StringNullableFilter<"Device"> | string | null
    macAddress?: StringNullableFilter<"Device"> | string | null
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFilter<"Device"> | $Enums.OwnershipType
    controlMode?: EnumControlModeFilter<"Device"> | $Enums.ControlMode
    farmerId?: StringNullableFilter<"Device"> | string | null
    createdById?: StringNullableFilter<"Device"> | string | null
    activatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    rssiDbm?: IntNullableFilter<"Device"> | number | null
    uptimeMs?: BigIntNullableFilter<"Device"> | bigint | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    farmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    setting?: XOR<DeviceSettingNullableScalarRelationFilter, DeviceSettingWhereInput> | null
    sensorReadings?: SensorReadingListRelationFilter
    actuators?: ActuatorListRelationFilter
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
    cultivationCycles?: CultivationCycleListRelationFilter
    otaLogs?: OtaLogListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    activationCode?: SortOrder
    name?: SortOrderInput | SortOrder
    model?: SortOrder
    hardwareVersion?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    macAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    ownershipType?: SortOrder
    controlMode?: SortOrder
    farmerId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    rssiDbm?: SortOrderInput | SortOrder
    uptimeMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmer?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    setting?: DeviceSettingOrderByWithRelationInput
    sensorReadings?: SensorReadingOrderByRelationAggregateInput
    actuators?: ActuatorOrderByRelationAggregateInput
    controlLogs?: ControlLogOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    cultivationCycles?: CultivationCycleOrderByRelationAggregateInput
    otaLogs?: OtaLogOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    activationCode?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringNullableFilter<"Device"> | string | null
    model?: StringFilter<"Device"> | string
    hardwareVersion?: StringNullableFilter<"Device"> | string | null
    firmwareVersion?: StringNullableFilter<"Device"> | string | null
    macAddress?: StringNullableFilter<"Device"> | string | null
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFilter<"Device"> | $Enums.OwnershipType
    controlMode?: EnumControlModeFilter<"Device"> | $Enums.ControlMode
    farmerId?: StringNullableFilter<"Device"> | string | null
    createdById?: StringNullableFilter<"Device"> | string | null
    activatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    rssiDbm?: IntNullableFilter<"Device"> | number | null
    uptimeMs?: BigIntNullableFilter<"Device"> | bigint | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    farmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    setting?: XOR<DeviceSettingNullableScalarRelationFilter, DeviceSettingWhereInput> | null
    sensorReadings?: SensorReadingListRelationFilter
    actuators?: ActuatorListRelationFilter
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
    cultivationCycles?: CultivationCycleListRelationFilter
    otaLogs?: OtaLogListRelationFilter
  }, "id" | "serialNumber" | "activationCode">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    activationCode?: SortOrder
    name?: SortOrderInput | SortOrder
    model?: SortOrder
    hardwareVersion?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    macAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    ownershipType?: SortOrder
    controlMode?: SortOrder
    farmerId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    rssiDbm?: SortOrderInput | SortOrder
    uptimeMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    serialNumber?: StringWithAggregatesFilter<"Device"> | string
    activationCode?: StringWithAggregatesFilter<"Device"> | string
    name?: StringNullableWithAggregatesFilter<"Device"> | string | null
    model?: StringWithAggregatesFilter<"Device"> | string
    hardwareVersion?: StringNullableWithAggregatesFilter<"Device"> | string | null
    firmwareVersion?: StringNullableWithAggregatesFilter<"Device"> | string | null
    macAddress?: StringNullableWithAggregatesFilter<"Device"> | string | null
    status?: EnumDeviceStatusWithAggregatesFilter<"Device"> | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeWithAggregatesFilter<"Device"> | $Enums.OwnershipType
    controlMode?: EnumControlModeWithAggregatesFilter<"Device"> | $Enums.ControlMode
    farmerId?: StringNullableWithAggregatesFilter<"Device"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Device"> | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    rssiDbm?: IntNullableWithAggregatesFilter<"Device"> | number | null
    uptimeMs?: BigIntNullableWithAggregatesFilter<"Device"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DeviceSettingWhereInput = {
    AND?: DeviceSettingWhereInput | DeviceSettingWhereInput[]
    OR?: DeviceSettingWhereInput[]
    NOT?: DeviceSettingWhereInput | DeviceSettingWhereInput[]
    id?: StringFilter<"DeviceSetting"> | string
    deviceId?: StringFilter<"DeviceSetting"> | string
    minTemperature?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    minHumidity?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: IntNullableFilter<"DeviceSetting"> | number | null
    telemetryIntervalSec?: IntFilter<"DeviceSetting"> | number
    createdAt?: DateTimeFilter<"DeviceSetting"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSetting"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceSettingOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    minTemperature?: SortOrderInput | SortOrder
    maxTemperature?: SortOrderInput | SortOrder
    minHumidity?: SortOrderInput | SortOrder
    maxHumidity?: SortOrderInput | SortOrder
    timerDurationSeconds?: SortOrderInput | SortOrder
    telemetryIntervalSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId?: string
    AND?: DeviceSettingWhereInput | DeviceSettingWhereInput[]
    OR?: DeviceSettingWhereInput[]
    NOT?: DeviceSettingWhereInput | DeviceSettingWhereInput[]
    minTemperature?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    minHumidity?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: DecimalNullableFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: IntNullableFilter<"DeviceSetting"> | number | null
    telemetryIntervalSec?: IntFilter<"DeviceSetting"> | number
    createdAt?: DateTimeFilter<"DeviceSetting"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSetting"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id" | "deviceId">

  export type DeviceSettingOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    minTemperature?: SortOrderInput | SortOrder
    maxTemperature?: SortOrderInput | SortOrder
    minHumidity?: SortOrderInput | SortOrder
    maxHumidity?: SortOrderInput | SortOrder
    timerDurationSeconds?: SortOrderInput | SortOrder
    telemetryIntervalSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceSettingCountOrderByAggregateInput
    _avg?: DeviceSettingAvgOrderByAggregateInput
    _max?: DeviceSettingMaxOrderByAggregateInput
    _min?: DeviceSettingMinOrderByAggregateInput
    _sum?: DeviceSettingSumOrderByAggregateInput
  }

  export type DeviceSettingScalarWhereWithAggregatesInput = {
    AND?: DeviceSettingScalarWhereWithAggregatesInput | DeviceSettingScalarWhereWithAggregatesInput[]
    OR?: DeviceSettingScalarWhereWithAggregatesInput[]
    NOT?: DeviceSettingScalarWhereWithAggregatesInput | DeviceSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceSetting"> | string
    deviceId?: StringWithAggregatesFilter<"DeviceSetting"> | string
    minTemperature?: DecimalNullableWithAggregatesFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: DecimalNullableWithAggregatesFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    minHumidity?: DecimalNullableWithAggregatesFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: DecimalNullableWithAggregatesFilter<"DeviceSetting"> | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: IntNullableWithAggregatesFilter<"DeviceSetting"> | number | null
    telemetryIntervalSec?: IntWithAggregatesFilter<"DeviceSetting"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DeviceSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceSetting"> | Date | string
  }

  export type SensorReadingWhereInput = {
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    id?: BigIntFilter<"SensorReading"> | bigint | number
    deviceId?: StringFilter<"SensorReading"> | string
    temperature?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type SensorReadingOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    recordedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type SensorReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    deviceId?: StringFilter<"SensorReading"> | string
    temperature?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type SensorReadingOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    recordedAt?: SortOrder
    _count?: SensorReadingCountOrderByAggregateInput
    _avg?: SensorReadingAvgOrderByAggregateInput
    _max?: SensorReadingMaxOrderByAggregateInput
    _min?: SensorReadingMinOrderByAggregateInput
    _sum?: SensorReadingSumOrderByAggregateInput
  }

  export type SensorReadingScalarWhereWithAggregatesInput = {
    AND?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    OR?: SensorReadingScalarWhereWithAggregatesInput[]
    NOT?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SensorReading"> | bigint | number
    deviceId?: StringWithAggregatesFilter<"SensorReading"> | string
    temperature?: DecimalWithAggregatesFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    humidity?: DecimalWithAggregatesFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeWithAggregatesFilter<"SensorReading"> | Date | string
  }

  export type ActuatorWhereInput = {
    AND?: ActuatorWhereInput | ActuatorWhereInput[]
    OR?: ActuatorWhereInput[]
    NOT?: ActuatorWhereInput | ActuatorWhereInput[]
    id?: StringFilter<"Actuator"> | string
    deviceId?: StringFilter<"Actuator"> | string
    name?: StringFilter<"Actuator"> | string
    type?: EnumActuatorTypeFilter<"Actuator"> | $Enums.ActuatorType
    channel?: IntFilter<"Actuator"> | number
    state?: EnumActuatorStateFilter<"Actuator"> | $Enums.ActuatorState
    isEnabled?: BoolFilter<"Actuator"> | boolean
    lastChangedAt?: DateTimeNullableFilter<"Actuator"> | Date | string | null
    createdAt?: DateTimeFilter<"Actuator"> | Date | string
    updatedAt?: DateTimeFilter<"Actuator"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type ActuatorOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    state?: SortOrder
    isEnabled?: SortOrder
    lastChangedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
    controlLogs?: ControlLogOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type ActuatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId_channel?: ActuatorDeviceIdChannelCompoundUniqueInput
    AND?: ActuatorWhereInput | ActuatorWhereInput[]
    OR?: ActuatorWhereInput[]
    NOT?: ActuatorWhereInput | ActuatorWhereInput[]
    deviceId?: StringFilter<"Actuator"> | string
    name?: StringFilter<"Actuator"> | string
    type?: EnumActuatorTypeFilter<"Actuator"> | $Enums.ActuatorType
    channel?: IntFilter<"Actuator"> | number
    state?: EnumActuatorStateFilter<"Actuator"> | $Enums.ActuatorState
    isEnabled?: BoolFilter<"Actuator"> | boolean
    lastChangedAt?: DateTimeNullableFilter<"Actuator"> | Date | string | null
    createdAt?: DateTimeFilter<"Actuator"> | Date | string
    updatedAt?: DateTimeFilter<"Actuator"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    controlLogs?: ControlLogListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "deviceId_channel">

  export type ActuatorOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    state?: SortOrder
    isEnabled?: SortOrder
    lastChangedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActuatorCountOrderByAggregateInput
    _avg?: ActuatorAvgOrderByAggregateInput
    _max?: ActuatorMaxOrderByAggregateInput
    _min?: ActuatorMinOrderByAggregateInput
    _sum?: ActuatorSumOrderByAggregateInput
  }

  export type ActuatorScalarWhereWithAggregatesInput = {
    AND?: ActuatorScalarWhereWithAggregatesInput | ActuatorScalarWhereWithAggregatesInput[]
    OR?: ActuatorScalarWhereWithAggregatesInput[]
    NOT?: ActuatorScalarWhereWithAggregatesInput | ActuatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Actuator"> | string
    deviceId?: StringWithAggregatesFilter<"Actuator"> | string
    name?: StringWithAggregatesFilter<"Actuator"> | string
    type?: EnumActuatorTypeWithAggregatesFilter<"Actuator"> | $Enums.ActuatorType
    channel?: IntWithAggregatesFilter<"Actuator"> | number
    state?: EnumActuatorStateWithAggregatesFilter<"Actuator"> | $Enums.ActuatorState
    isEnabled?: BoolWithAggregatesFilter<"Actuator"> | boolean
    lastChangedAt?: DateTimeNullableWithAggregatesFilter<"Actuator"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Actuator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Actuator"> | Date | string
  }

  export type ControlLogWhereInput = {
    AND?: ControlLogWhereInput | ControlLogWhereInput[]
    OR?: ControlLogWhereInput[]
    NOT?: ControlLogWhereInput | ControlLogWhereInput[]
    id?: BigIntFilter<"ControlLog"> | bigint | number
    deviceId?: StringFilter<"ControlLog"> | string
    actuatorId?: StringNullableFilter<"ControlLog"> | string | null
    userId?: StringNullableFilter<"ControlLog"> | string | null
    action?: EnumControlActionFilter<"ControlLog"> | $Enums.ControlAction
    source?: EnumControlSourceFilter<"ControlLog"> | $Enums.ControlSource
    mode?: EnumControlModeFilter<"ControlLog"> | $Enums.ControlMode
    success?: BoolFilter<"ControlLog"> | boolean
    message?: StringNullableFilter<"ControlLog"> | string | null
    requestedAt?: DateTimeFilter<"ControlLog"> | Date | string
    executedAt?: DateTimeNullableFilter<"ControlLog"> | Date | string | null
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    actuator?: XOR<ActuatorNullableScalarRelationFilter, ActuatorWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ControlLogOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    source?: SortOrder
    mode?: SortOrder
    success?: SortOrder
    message?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
    actuator?: ActuatorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ControlLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ControlLogWhereInput | ControlLogWhereInput[]
    OR?: ControlLogWhereInput[]
    NOT?: ControlLogWhereInput | ControlLogWhereInput[]
    deviceId?: StringFilter<"ControlLog"> | string
    actuatorId?: StringNullableFilter<"ControlLog"> | string | null
    userId?: StringNullableFilter<"ControlLog"> | string | null
    action?: EnumControlActionFilter<"ControlLog"> | $Enums.ControlAction
    source?: EnumControlSourceFilter<"ControlLog"> | $Enums.ControlSource
    mode?: EnumControlModeFilter<"ControlLog"> | $Enums.ControlMode
    success?: BoolFilter<"ControlLog"> | boolean
    message?: StringNullableFilter<"ControlLog"> | string | null
    requestedAt?: DateTimeFilter<"ControlLog"> | Date | string
    executedAt?: DateTimeNullableFilter<"ControlLog"> | Date | string | null
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    actuator?: XOR<ActuatorNullableScalarRelationFilter, ActuatorWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ControlLogOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    source?: SortOrder
    mode?: SortOrder
    success?: SortOrder
    message?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    _count?: ControlLogCountOrderByAggregateInput
    _avg?: ControlLogAvgOrderByAggregateInput
    _max?: ControlLogMaxOrderByAggregateInput
    _min?: ControlLogMinOrderByAggregateInput
    _sum?: ControlLogSumOrderByAggregateInput
  }

  export type ControlLogScalarWhereWithAggregatesInput = {
    AND?: ControlLogScalarWhereWithAggregatesInput | ControlLogScalarWhereWithAggregatesInput[]
    OR?: ControlLogScalarWhereWithAggregatesInput[]
    NOT?: ControlLogScalarWhereWithAggregatesInput | ControlLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ControlLog"> | bigint | number
    deviceId?: StringWithAggregatesFilter<"ControlLog"> | string
    actuatorId?: StringNullableWithAggregatesFilter<"ControlLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"ControlLog"> | string | null
    action?: EnumControlActionWithAggregatesFilter<"ControlLog"> | $Enums.ControlAction
    source?: EnumControlSourceWithAggregatesFilter<"ControlLog"> | $Enums.ControlSource
    mode?: EnumControlModeWithAggregatesFilter<"ControlLog"> | $Enums.ControlMode
    success?: BoolWithAggregatesFilter<"ControlLog"> | boolean
    message?: StringNullableWithAggregatesFilter<"ControlLog"> | string | null
    requestedAt?: DateTimeWithAggregatesFilter<"ControlLog"> | Date | string
    executedAt?: DateTimeNullableWithAggregatesFilter<"ControlLog"> | Date | string | null
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    deviceId?: StringFilter<"Schedule"> | string
    actuatorId?: StringFilter<"Schedule"> | string
    createdById?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    action?: EnumControlActionFilter<"Schedule"> | $Enums.ControlAction
    startMinute?: IntFilter<"Schedule"> | number
    durationSeconds?: IntNullableFilter<"Schedule"> | number | null
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isEnabled?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    actuator?: XOR<ActuatorScalarRelationFilter, ActuatorWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    action?: SortOrder
    startMinute?: SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    daysOfWeek?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
    actuator?: ActuatorOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    deviceId?: StringFilter<"Schedule"> | string
    actuatorId?: StringFilter<"Schedule"> | string
    createdById?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    action?: EnumControlActionFilter<"Schedule"> | $Enums.ControlAction
    startMinute?: IntFilter<"Schedule"> | number
    durationSeconds?: IntNullableFilter<"Schedule"> | number | null
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isEnabled?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    actuator?: XOR<ActuatorScalarRelationFilter, ActuatorWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    action?: SortOrder
    startMinute?: SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    daysOfWeek?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    deviceId?: StringWithAggregatesFilter<"Schedule"> | string
    actuatorId?: StringWithAggregatesFilter<"Schedule"> | string
    createdById?: StringWithAggregatesFilter<"Schedule"> | string
    name?: StringWithAggregatesFilter<"Schedule"> | string
    action?: EnumControlActionWithAggregatesFilter<"Schedule"> | $Enums.ControlAction
    startMinute?: IntWithAggregatesFilter<"Schedule"> | number
    durationSeconds?: IntNullableWithAggregatesFilter<"Schedule"> | number | null
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isEnabled?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type CultivationCycleWhereInput = {
    AND?: CultivationCycleWhereInput | CultivationCycleWhereInput[]
    OR?: CultivationCycleWhereInput[]
    NOT?: CultivationCycleWhereInput | CultivationCycleWhereInput[]
    id?: StringFilter<"CultivationCycle"> | string
    deviceId?: StringFilter<"CultivationCycle"> | string
    name?: StringNullableFilter<"CultivationCycle"> | string | null
    mushroomType?: StringFilter<"CultivationCycle"> | string
    strain?: StringNullableFilter<"CultivationCycle"> | string | null
    baglogCount?: IntNullableFilter<"CultivationCycle"> | number | null
    startedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    expectedEndedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    status?: StringFilter<"CultivationCycle"> | string
    notes?: StringNullableFilter<"CultivationCycle"> | string | null
    createdAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    updatedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    harvests?: HarvestRecordListRelationFilter
  }

  export type CultivationCycleOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrderInput | SortOrder
    mushroomType?: SortOrder
    strain?: SortOrderInput | SortOrder
    baglogCount?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    expectedEndedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
    harvests?: HarvestRecordOrderByRelationAggregateInput
  }

  export type CultivationCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CultivationCycleWhereInput | CultivationCycleWhereInput[]
    OR?: CultivationCycleWhereInput[]
    NOT?: CultivationCycleWhereInput | CultivationCycleWhereInput[]
    deviceId?: StringFilter<"CultivationCycle"> | string
    name?: StringNullableFilter<"CultivationCycle"> | string | null
    mushroomType?: StringFilter<"CultivationCycle"> | string
    strain?: StringNullableFilter<"CultivationCycle"> | string | null
    baglogCount?: IntNullableFilter<"CultivationCycle"> | number | null
    startedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    expectedEndedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    status?: StringFilter<"CultivationCycle"> | string
    notes?: StringNullableFilter<"CultivationCycle"> | string | null
    createdAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    updatedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    harvests?: HarvestRecordListRelationFilter
  }, "id">

  export type CultivationCycleOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrderInput | SortOrder
    mushroomType?: SortOrder
    strain?: SortOrderInput | SortOrder
    baglogCount?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    expectedEndedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CultivationCycleCountOrderByAggregateInput
    _avg?: CultivationCycleAvgOrderByAggregateInput
    _max?: CultivationCycleMaxOrderByAggregateInput
    _min?: CultivationCycleMinOrderByAggregateInput
    _sum?: CultivationCycleSumOrderByAggregateInput
  }

  export type CultivationCycleScalarWhereWithAggregatesInput = {
    AND?: CultivationCycleScalarWhereWithAggregatesInput | CultivationCycleScalarWhereWithAggregatesInput[]
    OR?: CultivationCycleScalarWhereWithAggregatesInput[]
    NOT?: CultivationCycleScalarWhereWithAggregatesInput | CultivationCycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CultivationCycle"> | string
    deviceId?: StringWithAggregatesFilter<"CultivationCycle"> | string
    name?: StringNullableWithAggregatesFilter<"CultivationCycle"> | string | null
    mushroomType?: StringWithAggregatesFilter<"CultivationCycle"> | string
    strain?: StringNullableWithAggregatesFilter<"CultivationCycle"> | string | null
    baglogCount?: IntNullableWithAggregatesFilter<"CultivationCycle"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"CultivationCycle"> | Date | string
    expectedEndedAt?: DateTimeNullableWithAggregatesFilter<"CultivationCycle"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"CultivationCycle"> | Date | string | null
    status?: StringWithAggregatesFilter<"CultivationCycle"> | string
    notes?: StringNullableWithAggregatesFilter<"CultivationCycle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CultivationCycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CultivationCycle"> | Date | string
  }

  export type HarvestRecordWhereInput = {
    AND?: HarvestRecordWhereInput | HarvestRecordWhereInput[]
    OR?: HarvestRecordWhereInput[]
    NOT?: HarvestRecordWhereInput | HarvestRecordWhereInput[]
    id?: StringFilter<"HarvestRecord"> | string
    cycleId?: StringFilter<"HarvestRecord"> | string
    harvestedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    weightKg?: DecimalFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalNullableFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string | null
    grade?: StringNullableFilter<"HarvestRecord"> | string | null
    notes?: StringNullableFilter<"HarvestRecord"> | string | null
    createdAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    cycle?: XOR<CultivationCycleScalarRelationFilter, CultivationCycleWhereInput>
  }

  export type HarvestRecordOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    harvestedAt?: SortOrder
    weightKg?: SortOrder
    pricePerKg?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cycle?: CultivationCycleOrderByWithRelationInput
  }

  export type HarvestRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HarvestRecordWhereInput | HarvestRecordWhereInput[]
    OR?: HarvestRecordWhereInput[]
    NOT?: HarvestRecordWhereInput | HarvestRecordWhereInput[]
    cycleId?: StringFilter<"HarvestRecord"> | string
    harvestedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    weightKg?: DecimalFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalNullableFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string | null
    grade?: StringNullableFilter<"HarvestRecord"> | string | null
    notes?: StringNullableFilter<"HarvestRecord"> | string | null
    createdAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    cycle?: XOR<CultivationCycleScalarRelationFilter, CultivationCycleWhereInput>
  }, "id">

  export type HarvestRecordOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    harvestedAt?: SortOrder
    weightKg?: SortOrder
    pricePerKg?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HarvestRecordCountOrderByAggregateInput
    _avg?: HarvestRecordAvgOrderByAggregateInput
    _max?: HarvestRecordMaxOrderByAggregateInput
    _min?: HarvestRecordMinOrderByAggregateInput
    _sum?: HarvestRecordSumOrderByAggregateInput
  }

  export type HarvestRecordScalarWhereWithAggregatesInput = {
    AND?: HarvestRecordScalarWhereWithAggregatesInput | HarvestRecordScalarWhereWithAggregatesInput[]
    OR?: HarvestRecordScalarWhereWithAggregatesInput[]
    NOT?: HarvestRecordScalarWhereWithAggregatesInput | HarvestRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HarvestRecord"> | string
    cycleId?: StringWithAggregatesFilter<"HarvestRecord"> | string
    harvestedAt?: DateTimeWithAggregatesFilter<"HarvestRecord"> | Date | string
    weightKg?: DecimalWithAggregatesFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalNullableWithAggregatesFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string | null
    grade?: StringNullableWithAggregatesFilter<"HarvestRecord"> | string | null
    notes?: StringNullableWithAggregatesFilter<"HarvestRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HarvestRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HarvestRecord"> | Date | string
  }

  export type FirmwareWhereInput = {
    AND?: FirmwareWhereInput | FirmwareWhereInput[]
    OR?: FirmwareWhereInput[]
    NOT?: FirmwareWhereInput | FirmwareWhereInput[]
    id?: StringFilter<"Firmware"> | string
    version?: StringFilter<"Firmware"> | string
    filename?: StringFilter<"Firmware"> | string
    originalName?: StringFilter<"Firmware"> | string
    filePath?: StringFilter<"Firmware"> | string
    fileSize?: IntFilter<"Firmware"> | number
    checksumSha256?: StringFilter<"Firmware"> | string
    hardwareVersion?: StringFilter<"Firmware"> | string
    changelog?: StringNullableFilter<"Firmware"> | string | null
    isLatest?: BoolFilter<"Firmware"> | boolean
    createdById?: StringNullableFilter<"Firmware"> | string | null
    createdAt?: DateTimeFilter<"Firmware"> | Date | string
    updatedAt?: DateTimeFilter<"Firmware"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    otaLogs?: OtaLogListRelationFilter
  }

  export type FirmwareOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    checksumSha256?: SortOrder
    hardwareVersion?: SortOrder
    changelog?: SortOrderInput | SortOrder
    isLatest?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    otaLogs?: OtaLogOrderByRelationAggregateInput
  }

  export type FirmwareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: string
    AND?: FirmwareWhereInput | FirmwareWhereInput[]
    OR?: FirmwareWhereInput[]
    NOT?: FirmwareWhereInput | FirmwareWhereInput[]
    filename?: StringFilter<"Firmware"> | string
    originalName?: StringFilter<"Firmware"> | string
    filePath?: StringFilter<"Firmware"> | string
    fileSize?: IntFilter<"Firmware"> | number
    checksumSha256?: StringFilter<"Firmware"> | string
    hardwareVersion?: StringFilter<"Firmware"> | string
    changelog?: StringNullableFilter<"Firmware"> | string | null
    isLatest?: BoolFilter<"Firmware"> | boolean
    createdById?: StringNullableFilter<"Firmware"> | string | null
    createdAt?: DateTimeFilter<"Firmware"> | Date | string
    updatedAt?: DateTimeFilter<"Firmware"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    otaLogs?: OtaLogListRelationFilter
  }, "id" | "version">

  export type FirmwareOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    checksumSha256?: SortOrder
    hardwareVersion?: SortOrder
    changelog?: SortOrderInput | SortOrder
    isLatest?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FirmwareCountOrderByAggregateInput
    _avg?: FirmwareAvgOrderByAggregateInput
    _max?: FirmwareMaxOrderByAggregateInput
    _min?: FirmwareMinOrderByAggregateInput
    _sum?: FirmwareSumOrderByAggregateInput
  }

  export type FirmwareScalarWhereWithAggregatesInput = {
    AND?: FirmwareScalarWhereWithAggregatesInput | FirmwareScalarWhereWithAggregatesInput[]
    OR?: FirmwareScalarWhereWithAggregatesInput[]
    NOT?: FirmwareScalarWhereWithAggregatesInput | FirmwareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Firmware"> | string
    version?: StringWithAggregatesFilter<"Firmware"> | string
    filename?: StringWithAggregatesFilter<"Firmware"> | string
    originalName?: StringWithAggregatesFilter<"Firmware"> | string
    filePath?: StringWithAggregatesFilter<"Firmware"> | string
    fileSize?: IntWithAggregatesFilter<"Firmware"> | number
    checksumSha256?: StringWithAggregatesFilter<"Firmware"> | string
    hardwareVersion?: StringWithAggregatesFilter<"Firmware"> | string
    changelog?: StringNullableWithAggregatesFilter<"Firmware"> | string | null
    isLatest?: BoolWithAggregatesFilter<"Firmware"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"Firmware"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Firmware"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Firmware"> | Date | string
  }

  export type OtaLogWhereInput = {
    AND?: OtaLogWhereInput | OtaLogWhereInput[]
    OR?: OtaLogWhereInput[]
    NOT?: OtaLogWhereInput | OtaLogWhereInput[]
    id?: StringFilter<"OtaLog"> | string
    deviceId?: StringNullableFilter<"OtaLog"> | string | null
    deviceSerialNumber?: StringNullableFilter<"OtaLog"> | string | null
    firmwareId?: StringNullableFilter<"OtaLog"> | string | null
    firmwareVersion?: StringFilter<"OtaLog"> | string
    firmwareUrl?: StringFilter<"OtaLog"> | string
    checksumSha256?: StringNullableFilter<"OtaLog"> | string | null
    isBroadcast?: BoolFilter<"OtaLog"> | boolean
    status?: StringFilter<"OtaLog"> | string
    triggeredById?: StringNullableFilter<"OtaLog"> | string | null
    notes?: StringNullableFilter<"OtaLog"> | string | null
    createdAt?: DateTimeFilter<"OtaLog"> | Date | string
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
    firmware?: XOR<FirmwareNullableScalarRelationFilter, FirmwareWhereInput> | null
  }

  export type OtaLogOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceSerialNumber?: SortOrderInput | SortOrder
    firmwareId?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrder
    firmwareUrl?: SortOrder
    checksumSha256?: SortOrderInput | SortOrder
    isBroadcast?: SortOrder
    status?: SortOrder
    triggeredById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
    firmware?: FirmwareOrderByWithRelationInput
  }

  export type OtaLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtaLogWhereInput | OtaLogWhereInput[]
    OR?: OtaLogWhereInput[]
    NOT?: OtaLogWhereInput | OtaLogWhereInput[]
    deviceId?: StringNullableFilter<"OtaLog"> | string | null
    deviceSerialNumber?: StringNullableFilter<"OtaLog"> | string | null
    firmwareId?: StringNullableFilter<"OtaLog"> | string | null
    firmwareVersion?: StringFilter<"OtaLog"> | string
    firmwareUrl?: StringFilter<"OtaLog"> | string
    checksumSha256?: StringNullableFilter<"OtaLog"> | string | null
    isBroadcast?: BoolFilter<"OtaLog"> | boolean
    status?: StringFilter<"OtaLog"> | string
    triggeredById?: StringNullableFilter<"OtaLog"> | string | null
    notes?: StringNullableFilter<"OtaLog"> | string | null
    createdAt?: DateTimeFilter<"OtaLog"> | Date | string
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
    firmware?: XOR<FirmwareNullableScalarRelationFilter, FirmwareWhereInput> | null
  }, "id">

  export type OtaLogOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceSerialNumber?: SortOrderInput | SortOrder
    firmwareId?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrder
    firmwareUrl?: SortOrder
    checksumSha256?: SortOrderInput | SortOrder
    isBroadcast?: SortOrder
    status?: SortOrder
    triggeredById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OtaLogCountOrderByAggregateInput
    _max?: OtaLogMaxOrderByAggregateInput
    _min?: OtaLogMinOrderByAggregateInput
  }

  export type OtaLogScalarWhereWithAggregatesInput = {
    AND?: OtaLogScalarWhereWithAggregatesInput | OtaLogScalarWhereWithAggregatesInput[]
    OR?: OtaLogScalarWhereWithAggregatesInput[]
    NOT?: OtaLogScalarWhereWithAggregatesInput | OtaLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtaLog"> | string
    deviceId?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    deviceSerialNumber?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    firmwareId?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    firmwareVersion?: StringWithAggregatesFilter<"OtaLog"> | string
    firmwareUrl?: StringWithAggregatesFilter<"OtaLog"> | string
    checksumSha256?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    isBroadcast?: BoolWithAggregatesFilter<"OtaLog"> | boolean
    status?: StringWithAggregatesFilter<"OtaLog"> | string
    triggeredById?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"OtaLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OtaLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSettingCreateInput = {
    id?: string
    minTemperature?: Decimal | DecimalJsLike | number | string | null
    maxTemperature?: Decimal | DecimalJsLike | number | string | null
    minHumidity?: Decimal | DecimalJsLike | number | string | null
    maxHumidity?: Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: number | null
    telemetryIntervalSec?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutSettingInput
  }

  export type DeviceSettingUncheckedCreateInput = {
    id?: string
    deviceId: string
    minTemperature?: Decimal | DecimalJsLike | number | string | null
    maxTemperature?: Decimal | DecimalJsLike | number | string | null
    minHumidity?: Decimal | DecimalJsLike | number | string | null
    maxHumidity?: Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: number | null
    telemetryIntervalSec?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSettingNestedInput
  }

  export type DeviceSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSettingCreateManyInput = {
    id?: string
    deviceId: string
    minTemperature?: Decimal | DecimalJsLike | number | string | null
    maxTemperature?: Decimal | DecimalJsLike | number | string | null
    minHumidity?: Decimal | DecimalJsLike | number | string | null
    maxHumidity?: Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: number | null
    telemetryIntervalSec?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateInput = {
    id?: bigint | number
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
    device: DeviceCreateNestedOneWithoutSensorReadingsInput
  }

  export type SensorReadingUncheckedCreateInput = {
    id?: bigint | number
    deviceId: string
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
  }

  export type SensorReadingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSensorReadingsNestedInput
  }

  export type SensorReadingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateManyInput = {
    id?: bigint | number
    deviceId: string
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
  }

  export type SensorReadingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActuatorCreateInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutActuatorsInput
    controlLogs?: ControlLogCreateNestedManyWithoutActuatorInput
    schedules?: ScheduleCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorUncheckedCreateInput = {
    id?: string
    deviceId: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutActuatorInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutActuatorsNestedInput
    controlLogs?: ControlLogUpdateManyWithoutActuatorNestedInput
    schedules?: ScheduleUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controlLogs?: ControlLogUncheckedUpdateManyWithoutActuatorNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorCreateManyInput = {
    id?: string
    deviceId: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActuatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActuatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlLogCreateInput = {
    id?: bigint | number
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutControlLogsInput
    actuator?: ActuatorCreateNestedOneWithoutControlLogsInput
    user?: UserCreateNestedOneWithoutControlLogsInput
  }

  export type ControlLogUncheckedCreateInput = {
    id?: bigint | number
    deviceId: string
    actuatorId?: string | null
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ControlLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutControlLogsNestedInput
    actuator?: ActuatorUpdateOneWithoutControlLogsNestedInput
    user?: UserUpdateOneWithoutControlLogsNestedInput
  }

  export type ControlLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ControlLogCreateManyInput = {
    id?: bigint | number
    deviceId: string
    actuatorId?: string | null
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ControlLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ControlLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleCreateInput = {
    id?: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutSchedulesInput
    actuator: ActuatorCreateNestedOneWithoutSchedulesInput
    createdBy: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    deviceId: string
    actuatorId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSchedulesNestedInput
    actuator?: ActuatorUpdateOneRequiredWithoutSchedulesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    deviceId: string
    actuatorId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultivationCycleCreateInput = {
    id?: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutCultivationCyclesInput
    harvests?: HarvestRecordCreateNestedManyWithoutCycleInput
  }

  export type CultivationCycleUncheckedCreateInput = {
    id?: string
    deviceId: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    harvests?: HarvestRecordUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CultivationCycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutCultivationCyclesNestedInput
    harvests?: HarvestRecordUpdateManyWithoutCycleNestedInput
  }

  export type CultivationCycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    harvests?: HarvestRecordUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CultivationCycleCreateManyInput = {
    id?: string
    deviceId: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultivationCycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultivationCycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordCreateInput = {
    id?: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cycle: CultivationCycleCreateNestedOneWithoutHarvestsInput
  }

  export type HarvestRecordUncheckedCreateInput = {
    id?: string
    cycleId: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HarvestRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CultivationCycleUpdateOneRequiredWithoutHarvestsNestedInput
  }

  export type HarvestRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordCreateManyInput = {
    id?: string
    cycleId: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HarvestRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FirmwareCreateInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutFirmwaresInput
    otaLogs?: OtaLogCreateNestedManyWithoutFirmwareInput
  }

  export type FirmwareUncheckedCreateInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutFirmwareInput
  }

  export type FirmwareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutFirmwaresNestedInput
    otaLogs?: OtaLogUpdateManyWithoutFirmwareNestedInput
  }

  export type FirmwareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otaLogs?: OtaLogUncheckedUpdateManyWithoutFirmwareNestedInput
  }

  export type FirmwareCreateManyInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FirmwareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FirmwareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogCreateInput = {
    id?: string
    deviceSerialNumber?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
    device?: DeviceCreateNestedOneWithoutOtaLogsInput
    firmware?: FirmwareCreateNestedOneWithoutOtaLogsInput
  }

  export type OtaLogUncheckedCreateInput = {
    id?: string
    deviceId?: string | null
    deviceSerialNumber?: string | null
    firmwareId?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OtaLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutOtaLogsNestedInput
    firmware?: FirmwareUpdateOneWithoutOtaLogsNestedInput
  }

  export type OtaLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareId?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogCreateManyInput = {
    id?: string
    deviceId?: string | null
    deviceSerialNumber?: string | null
    firmwareId?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OtaLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareId?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type FirmwareListRelationFilter = {
    every?: FirmwareWhereInput
    some?: FirmwareWhereInput
    none?: FirmwareWhereInput
  }

  export type ControlLogListRelationFilter = {
    every?: ControlLogWhereInput
    some?: ControlLogWhereInput
    none?: ControlLogWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FirmwareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ControlLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    farmName?: SortOrder
    farmAddress?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profileCompleted?: SortOrder
    mustChangePassword?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastLoginAt?: SortOrder
    fcmToken?: SortOrder
    lastFcmTokenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    farmName?: SortOrder
    farmAddress?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profileCompleted?: SortOrder
    mustChangePassword?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastLoginAt?: SortOrder
    fcmToken?: SortOrder
    lastFcmTokenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    farmName?: SortOrder
    farmAddress?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profileCompleted?: SortOrder
    mustChangePassword?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastLoginAt?: SortOrder
    fcmToken?: SortOrder
    lastFcmTokenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type EnumOwnershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeFilter<$PrismaModel> | $Enums.OwnershipType
  }

  export type EnumControlModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlMode | EnumControlModeFieldRefInput<$PrismaModel>
    in?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    not?: NestedEnumControlModeFilter<$PrismaModel> | $Enums.ControlMode
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DeviceSettingNullableScalarRelationFilter = {
    is?: DeviceSettingWhereInput | null
    isNot?: DeviceSettingWhereInput | null
  }

  export type SensorReadingListRelationFilter = {
    every?: SensorReadingWhereInput
    some?: SensorReadingWhereInput
    none?: SensorReadingWhereInput
  }

  export type ActuatorListRelationFilter = {
    every?: ActuatorWhereInput
    some?: ActuatorWhereInput
    none?: ActuatorWhereInput
  }

  export type CultivationCycleListRelationFilter = {
    every?: CultivationCycleWhereInput
    some?: CultivationCycleWhereInput
    none?: CultivationCycleWhereInput
  }

  export type OtaLogListRelationFilter = {
    every?: OtaLogWhereInput
    some?: OtaLogWhereInput
    none?: OtaLogWhereInput
  }

  export type SensorReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActuatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CultivationCycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtaLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    activationCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    hardwareVersion?: SortOrder
    firmwareVersion?: SortOrder
    macAddress?: SortOrder
    status?: SortOrder
    ownershipType?: SortOrder
    controlMode?: SortOrder
    farmerId?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    rssiDbm?: SortOrder
    uptimeMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    rssiDbm?: SortOrder
    uptimeMs?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    activationCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    hardwareVersion?: SortOrder
    firmwareVersion?: SortOrder
    macAddress?: SortOrder
    status?: SortOrder
    ownershipType?: SortOrder
    controlMode?: SortOrder
    farmerId?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    rssiDbm?: SortOrder
    uptimeMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    activationCode?: SortOrder
    name?: SortOrder
    model?: SortOrder
    hardwareVersion?: SortOrder
    firmwareVersion?: SortOrder
    macAddress?: SortOrder
    status?: SortOrder
    ownershipType?: SortOrder
    controlMode?: SortOrder
    farmerId?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    rssiDbm?: SortOrder
    uptimeMs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    rssiDbm?: SortOrder
    uptimeMs?: SortOrder
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type EnumOwnershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeFilter<$PrismaModel>
  }

  export type EnumControlModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlMode | EnumControlModeFieldRefInput<$PrismaModel>
    in?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    not?: NestedEnumControlModeWithAggregatesFilter<$PrismaModel> | $Enums.ControlMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlModeFilter<$PrismaModel>
    _max?: NestedEnumControlModeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DeviceSettingCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    minHumidity?: SortOrder
    maxHumidity?: SortOrder
    timerDurationSeconds?: SortOrder
    telemetryIntervalSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSettingAvgOrderByAggregateInput = {
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    minHumidity?: SortOrder
    maxHumidity?: SortOrder
    timerDurationSeconds?: SortOrder
    telemetryIntervalSec?: SortOrder
  }

  export type DeviceSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    minHumidity?: SortOrder
    maxHumidity?: SortOrder
    timerDurationSeconds?: SortOrder
    telemetryIntervalSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSettingMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    minHumidity?: SortOrder
    maxHumidity?: SortOrder
    timerDurationSeconds?: SortOrder
    telemetryIntervalSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSettingSumOrderByAggregateInput = {
    minTemperature?: SortOrder
    maxTemperature?: SortOrder
    minHumidity?: SortOrder
    maxHumidity?: SortOrder
    timerDurationSeconds?: SortOrder
    telemetryIntervalSec?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SensorReadingCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingAvgOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type SensorReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    recordedAt?: SortOrder
  }

  export type SensorReadingSumOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumActuatorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorType | EnumActuatorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorTypeFilter<$PrismaModel> | $Enums.ActuatorType
  }

  export type EnumActuatorStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorState | EnumActuatorStateFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorStateFilter<$PrismaModel> | $Enums.ActuatorState
  }

  export type ActuatorDeviceIdChannelCompoundUniqueInput = {
    deviceId: string
    channel: number
  }

  export type ActuatorCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    state?: SortOrder
    isEnabled?: SortOrder
    lastChangedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActuatorAvgOrderByAggregateInput = {
    channel?: SortOrder
  }

  export type ActuatorMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    state?: SortOrder
    isEnabled?: SortOrder
    lastChangedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActuatorMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    state?: SortOrder
    isEnabled?: SortOrder
    lastChangedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActuatorSumOrderByAggregateInput = {
    channel?: SortOrder
  }

  export type EnumActuatorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorType | EnumActuatorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActuatorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActuatorTypeFilter<$PrismaModel>
    _max?: NestedEnumActuatorTypeFilter<$PrismaModel>
  }

  export type EnumActuatorStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorState | EnumActuatorStateFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorStateWithAggregatesFilter<$PrismaModel> | $Enums.ActuatorState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActuatorStateFilter<$PrismaModel>
    _max?: NestedEnumActuatorStateFilter<$PrismaModel>
  }

  export type EnumControlActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlAction | EnumControlActionFieldRefInput<$PrismaModel>
    in?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    not?: NestedEnumControlActionFilter<$PrismaModel> | $Enums.ControlAction
  }

  export type EnumControlSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlSource | EnumControlSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumControlSourceFilter<$PrismaModel> | $Enums.ControlSource
  }

  export type ActuatorNullableScalarRelationFilter = {
    is?: ActuatorWhereInput | null
    isNot?: ActuatorWhereInput | null
  }

  export type ControlLogCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    source?: SortOrder
    mode?: SortOrder
    success?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    executedAt?: SortOrder
  }

  export type ControlLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ControlLogMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    source?: SortOrder
    mode?: SortOrder
    success?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    executedAt?: SortOrder
  }

  export type ControlLogMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    source?: SortOrder
    mode?: SortOrder
    success?: SortOrder
    message?: SortOrder
    requestedAt?: SortOrder
    executedAt?: SortOrder
  }

  export type ControlLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumControlActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlAction | EnumControlActionFieldRefInput<$PrismaModel>
    in?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    not?: NestedEnumControlActionWithAggregatesFilter<$PrismaModel> | $Enums.ControlAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlActionFilter<$PrismaModel>
    _max?: NestedEnumControlActionFilter<$PrismaModel>
  }

  export type EnumControlSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlSource | EnumControlSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumControlSourceWithAggregatesFilter<$PrismaModel> | $Enums.ControlSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlSourceFilter<$PrismaModel>
    _max?: NestedEnumControlSourceFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ActuatorScalarRelationFilter = {
    is?: ActuatorWhereInput
    isNot?: ActuatorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    action?: SortOrder
    startMinute?: SortOrder
    durationSeconds?: SortOrder
    daysOfWeek?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    startMinute?: SortOrder
    durationSeconds?: SortOrder
    daysOfWeek?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    action?: SortOrder
    startMinute?: SortOrder
    durationSeconds?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    actuatorId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    action?: SortOrder
    startMinute?: SortOrder
    durationSeconds?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    startMinute?: SortOrder
    durationSeconds?: SortOrder
    daysOfWeek?: SortOrder
  }

  export type HarvestRecordListRelationFilter = {
    every?: HarvestRecordWhereInput
    some?: HarvestRecordWhereInput
    none?: HarvestRecordWhereInput
  }

  export type HarvestRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CultivationCycleCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    mushroomType?: SortOrder
    strain?: SortOrder
    baglogCount?: SortOrder
    startedAt?: SortOrder
    expectedEndedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultivationCycleAvgOrderByAggregateInput = {
    baglogCount?: SortOrder
  }

  export type CultivationCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    mushroomType?: SortOrder
    strain?: SortOrder
    baglogCount?: SortOrder
    startedAt?: SortOrder
    expectedEndedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultivationCycleMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    mushroomType?: SortOrder
    strain?: SortOrder
    baglogCount?: SortOrder
    startedAt?: SortOrder
    expectedEndedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CultivationCycleSumOrderByAggregateInput = {
    baglogCount?: SortOrder
  }

  export type CultivationCycleScalarRelationFilter = {
    is?: CultivationCycleWhereInput
    isNot?: CultivationCycleWhereInput
  }

  export type HarvestRecordCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    harvestedAt?: SortOrder
    weightKg?: SortOrder
    pricePerKg?: SortOrder
    grade?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HarvestRecordAvgOrderByAggregateInput = {
    weightKg?: SortOrder
    pricePerKg?: SortOrder
  }

  export type HarvestRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    harvestedAt?: SortOrder
    weightKg?: SortOrder
    pricePerKg?: SortOrder
    grade?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HarvestRecordMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    harvestedAt?: SortOrder
    weightKg?: SortOrder
    pricePerKg?: SortOrder
    grade?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HarvestRecordSumOrderByAggregateInput = {
    weightKg?: SortOrder
    pricePerKg?: SortOrder
  }

  export type FirmwareCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    checksumSha256?: SortOrder
    hardwareVersion?: SortOrder
    changelog?: SortOrder
    isLatest?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FirmwareAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type FirmwareMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    checksumSha256?: SortOrder
    hardwareVersion?: SortOrder
    changelog?: SortOrder
    isLatest?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FirmwareMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    checksumSha256?: SortOrder
    hardwareVersion?: SortOrder
    changelog?: SortOrder
    isLatest?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FirmwareSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type FirmwareNullableScalarRelationFilter = {
    is?: FirmwareWhereInput | null
    isNot?: FirmwareWhereInput | null
  }

  export type OtaLogCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceSerialNumber?: SortOrder
    firmwareId?: SortOrder
    firmwareVersion?: SortOrder
    firmwareUrl?: SortOrder
    checksumSha256?: SortOrder
    isBroadcast?: SortOrder
    status?: SortOrder
    triggeredById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OtaLogMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceSerialNumber?: SortOrder
    firmwareId?: SortOrder
    firmwareVersion?: SortOrder
    firmwareUrl?: SortOrder
    checksumSha256?: SortOrder
    isBroadcast?: SortOrder
    status?: SortOrder
    triggeredById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OtaLogMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceSerialNumber?: SortOrder
    firmwareId?: SortOrder
    firmwareVersion?: SortOrder
    firmwareUrl?: SortOrder
    checksumSha256?: SortOrder
    isBroadcast?: SortOrder
    status?: SortOrder
    triggeredById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutFarmerInput = {
    create?: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput> | DeviceCreateWithoutFarmerInput[] | DeviceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutFarmerInput | DeviceCreateOrConnectWithoutFarmerInput[]
    createMany?: DeviceCreateManyFarmerInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type FirmwareCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput> | FirmwareCreateWithoutCreatedByInput[] | FirmwareUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FirmwareCreateOrConnectWithoutCreatedByInput | FirmwareCreateOrConnectWithoutCreatedByInput[]
    createMany?: FirmwareCreateManyCreatedByInputEnvelope
    connect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
  }

  export type ControlLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput> | ControlLogCreateWithoutUserInput[] | ControlLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutUserInput | ControlLogCreateOrConnectWithoutUserInput[]
    createMany?: ControlLogCreateManyUserInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput> | ScheduleCreateWithoutCreatedByInput[] | ScheduleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedByInput | ScheduleCreateOrConnectWithoutCreatedByInput[]
    createMany?: ScheduleCreateManyCreatedByInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput> | DeviceCreateWithoutFarmerInput[] | DeviceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutFarmerInput | DeviceCreateOrConnectWithoutFarmerInput[]
    createMany?: DeviceCreateManyFarmerInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type FirmwareUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput> | FirmwareCreateWithoutCreatedByInput[] | FirmwareUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FirmwareCreateOrConnectWithoutCreatedByInput | FirmwareCreateOrConnectWithoutCreatedByInput[]
    createMany?: FirmwareCreateManyCreatedByInputEnvelope
    connect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
  }

  export type ControlLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput> | ControlLogCreateWithoutUserInput[] | ControlLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutUserInput | ControlLogCreateOrConnectWithoutUserInput[]
    createMany?: ControlLogCreateManyUserInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput> | ScheduleCreateWithoutCreatedByInput[] | ScheduleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedByInput | ScheduleCreateOrConnectWithoutCreatedByInput[]
    createMany?: ScheduleCreateManyCreatedByInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput> | DeviceCreateWithoutFarmerInput[] | DeviceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutFarmerInput | DeviceCreateOrConnectWithoutFarmerInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutFarmerInput | DeviceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: DeviceCreateManyFarmerInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutFarmerInput | DeviceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutFarmerInput | DeviceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCreatedByInput | DeviceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCreatedByInput | DeviceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCreatedByInput | DeviceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type FirmwareUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput> | FirmwareCreateWithoutCreatedByInput[] | FirmwareUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FirmwareCreateOrConnectWithoutCreatedByInput | FirmwareCreateOrConnectWithoutCreatedByInput[]
    upsert?: FirmwareUpsertWithWhereUniqueWithoutCreatedByInput | FirmwareUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FirmwareCreateManyCreatedByInputEnvelope
    set?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    disconnect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    delete?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    connect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    update?: FirmwareUpdateWithWhereUniqueWithoutCreatedByInput | FirmwareUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FirmwareUpdateManyWithWhereWithoutCreatedByInput | FirmwareUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FirmwareScalarWhereInput | FirmwareScalarWhereInput[]
  }

  export type ControlLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput> | ControlLogCreateWithoutUserInput[] | ControlLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutUserInput | ControlLogCreateOrConnectWithoutUserInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutUserInput | ControlLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ControlLogCreateManyUserInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutUserInput | ControlLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutUserInput | ControlLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput> | ScheduleCreateWithoutCreatedByInput[] | ScheduleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedByInput | ScheduleCreateOrConnectWithoutCreatedByInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCreatedByInput | ScheduleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ScheduleCreateManyCreatedByInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCreatedByInput | ScheduleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCreatedByInput | ScheduleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput> | DeviceCreateWithoutFarmerInput[] | DeviceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutFarmerInput | DeviceCreateOrConnectWithoutFarmerInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutFarmerInput | DeviceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: DeviceCreateManyFarmerInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutFarmerInput | DeviceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutFarmerInput | DeviceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCreatedByInput | DeviceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCreatedByInput | DeviceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCreatedByInput | DeviceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput> | FirmwareCreateWithoutCreatedByInput[] | FirmwareUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FirmwareCreateOrConnectWithoutCreatedByInput | FirmwareCreateOrConnectWithoutCreatedByInput[]
    upsert?: FirmwareUpsertWithWhereUniqueWithoutCreatedByInput | FirmwareUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FirmwareCreateManyCreatedByInputEnvelope
    set?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    disconnect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    delete?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    connect?: FirmwareWhereUniqueInput | FirmwareWhereUniqueInput[]
    update?: FirmwareUpdateWithWhereUniqueWithoutCreatedByInput | FirmwareUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FirmwareUpdateManyWithWhereWithoutCreatedByInput | FirmwareUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FirmwareScalarWhereInput | FirmwareScalarWhereInput[]
  }

  export type ControlLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput> | ControlLogCreateWithoutUserInput[] | ControlLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutUserInput | ControlLogCreateOrConnectWithoutUserInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutUserInput | ControlLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ControlLogCreateManyUserInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutUserInput | ControlLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutUserInput | ControlLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput> | ScheduleCreateWithoutCreatedByInput[] | ScheduleUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCreatedByInput | ScheduleCreateOrConnectWithoutCreatedByInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCreatedByInput | ScheduleUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ScheduleCreateManyCreatedByInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCreatedByInput | ScheduleUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCreatedByInput | ScheduleUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedDevicesInput = {
    create?: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceSettingCreateNestedOneWithoutDeviceInput = {
    create?: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceSettingCreateOrConnectWithoutDeviceInput
    connect?: DeviceSettingWhereUniqueInput
  }

  export type SensorReadingCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput> | SensorReadingCreateWithoutDeviceInput[] | SensorReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutDeviceInput | SensorReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: SensorReadingCreateManyDeviceInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type ActuatorCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput> | ActuatorCreateWithoutDeviceInput[] | ActuatorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActuatorCreateOrConnectWithoutDeviceInput | ActuatorCreateOrConnectWithoutDeviceInput[]
    createMany?: ActuatorCreateManyDeviceInputEnvelope
    connect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
  }

  export type ControlLogCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput> | ControlLogCreateWithoutDeviceInput[] | ControlLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutDeviceInput | ControlLogCreateOrConnectWithoutDeviceInput[]
    createMany?: ControlLogCreateManyDeviceInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput> | ScheduleCreateWithoutDeviceInput[] | ScheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDeviceInput | ScheduleCreateOrConnectWithoutDeviceInput[]
    createMany?: ScheduleCreateManyDeviceInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type CultivationCycleCreateNestedManyWithoutDeviceInput = {
    create?: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput> | CultivationCycleCreateWithoutDeviceInput[] | CultivationCycleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutDeviceInput | CultivationCycleCreateOrConnectWithoutDeviceInput[]
    createMany?: CultivationCycleCreateManyDeviceInputEnvelope
    connect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
  }

  export type OtaLogCreateNestedManyWithoutDeviceInput = {
    create?: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput> | OtaLogCreateWithoutDeviceInput[] | OtaLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutDeviceInput | OtaLogCreateOrConnectWithoutDeviceInput[]
    createMany?: OtaLogCreateManyDeviceInputEnvelope
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
  }

  export type DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput = {
    create?: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceSettingCreateOrConnectWithoutDeviceInput
    connect?: DeviceSettingWhereUniqueInput
  }

  export type SensorReadingUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput> | SensorReadingCreateWithoutDeviceInput[] | SensorReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutDeviceInput | SensorReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: SensorReadingCreateManyDeviceInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type ActuatorUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput> | ActuatorCreateWithoutDeviceInput[] | ActuatorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActuatorCreateOrConnectWithoutDeviceInput | ActuatorCreateOrConnectWithoutDeviceInput[]
    createMany?: ActuatorCreateManyDeviceInputEnvelope
    connect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
  }

  export type ControlLogUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput> | ControlLogCreateWithoutDeviceInput[] | ControlLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutDeviceInput | ControlLogCreateOrConnectWithoutDeviceInput[]
    createMany?: ControlLogCreateManyDeviceInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput> | ScheduleCreateWithoutDeviceInput[] | ScheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDeviceInput | ScheduleCreateOrConnectWithoutDeviceInput[]
    createMany?: ScheduleCreateManyDeviceInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput> | CultivationCycleCreateWithoutDeviceInput[] | CultivationCycleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutDeviceInput | CultivationCycleCreateOrConnectWithoutDeviceInput[]
    createMany?: CultivationCycleCreateManyDeviceInputEnvelope
    connect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
  }

  export type OtaLogUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput> | OtaLogCreateWithoutDeviceInput[] | OtaLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutDeviceInput | OtaLogCreateOrConnectWithoutDeviceInput[]
    createMany?: OtaLogCreateManyDeviceInputEnvelope
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type EnumOwnershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnershipType
  }

  export type EnumControlModeFieldUpdateOperationsInput = {
    set?: $Enums.ControlMode
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateOneWithoutCreatedDevicesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDevicesInput
    upsert?: UserUpsertWithoutCreatedDevicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDevicesInput, UserUpdateWithoutCreatedDevicesInput>, UserUncheckedUpdateWithoutCreatedDevicesInput>
  }

  export type DeviceSettingUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceSettingCreateOrConnectWithoutDeviceInput
    upsert?: DeviceSettingUpsertWithoutDeviceInput
    disconnect?: DeviceSettingWhereInput | boolean
    delete?: DeviceSettingWhereInput | boolean
    connect?: DeviceSettingWhereUniqueInput
    update?: XOR<XOR<DeviceSettingUpdateToOneWithWhereWithoutDeviceInput, DeviceSettingUpdateWithoutDeviceInput>, DeviceSettingUncheckedUpdateWithoutDeviceInput>
  }

  export type SensorReadingUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput> | SensorReadingCreateWithoutDeviceInput[] | SensorReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutDeviceInput | SensorReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutDeviceInput | SensorReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SensorReadingCreateManyDeviceInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutDeviceInput | SensorReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutDeviceInput | SensorReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type ActuatorUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput> | ActuatorCreateWithoutDeviceInput[] | ActuatorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActuatorCreateOrConnectWithoutDeviceInput | ActuatorCreateOrConnectWithoutDeviceInput[]
    upsert?: ActuatorUpsertWithWhereUniqueWithoutDeviceInput | ActuatorUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ActuatorCreateManyDeviceInputEnvelope
    set?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    disconnect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    delete?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    connect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    update?: ActuatorUpdateWithWhereUniqueWithoutDeviceInput | ActuatorUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ActuatorUpdateManyWithWhereWithoutDeviceInput | ActuatorUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ActuatorScalarWhereInput | ActuatorScalarWhereInput[]
  }

  export type ControlLogUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput> | ControlLogCreateWithoutDeviceInput[] | ControlLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutDeviceInput | ControlLogCreateOrConnectWithoutDeviceInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutDeviceInput | ControlLogUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ControlLogCreateManyDeviceInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutDeviceInput | ControlLogUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutDeviceInput | ControlLogUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput> | ScheduleCreateWithoutDeviceInput[] | ScheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDeviceInput | ScheduleCreateOrConnectWithoutDeviceInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDeviceInput | ScheduleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ScheduleCreateManyDeviceInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDeviceInput | ScheduleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDeviceInput | ScheduleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type CultivationCycleUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput> | CultivationCycleCreateWithoutDeviceInput[] | CultivationCycleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutDeviceInput | CultivationCycleCreateOrConnectWithoutDeviceInput[]
    upsert?: CultivationCycleUpsertWithWhereUniqueWithoutDeviceInput | CultivationCycleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: CultivationCycleCreateManyDeviceInputEnvelope
    set?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    disconnect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    delete?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    connect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    update?: CultivationCycleUpdateWithWhereUniqueWithoutDeviceInput | CultivationCycleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: CultivationCycleUpdateManyWithWhereWithoutDeviceInput | CultivationCycleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: CultivationCycleScalarWhereInput | CultivationCycleScalarWhereInput[]
  }

  export type OtaLogUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput> | OtaLogCreateWithoutDeviceInput[] | OtaLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutDeviceInput | OtaLogCreateOrConnectWithoutDeviceInput[]
    upsert?: OtaLogUpsertWithWhereUniqueWithoutDeviceInput | OtaLogUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: OtaLogCreateManyDeviceInputEnvelope
    set?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    disconnect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    delete?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    update?: OtaLogUpdateWithWhereUniqueWithoutDeviceInput | OtaLogUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: OtaLogUpdateManyWithWhereWithoutDeviceInput | OtaLogUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
  }

  export type DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput = {
    create?: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DeviceSettingCreateOrConnectWithoutDeviceInput
    upsert?: DeviceSettingUpsertWithoutDeviceInput
    disconnect?: DeviceSettingWhereInput | boolean
    delete?: DeviceSettingWhereInput | boolean
    connect?: DeviceSettingWhereUniqueInput
    update?: XOR<XOR<DeviceSettingUpdateToOneWithWhereWithoutDeviceInput, DeviceSettingUpdateWithoutDeviceInput>, DeviceSettingUncheckedUpdateWithoutDeviceInput>
  }

  export type SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput> | SensorReadingCreateWithoutDeviceInput[] | SensorReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutDeviceInput | SensorReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutDeviceInput | SensorReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SensorReadingCreateManyDeviceInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutDeviceInput | SensorReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutDeviceInput | SensorReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type ActuatorUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput> | ActuatorCreateWithoutDeviceInput[] | ActuatorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActuatorCreateOrConnectWithoutDeviceInput | ActuatorCreateOrConnectWithoutDeviceInput[]
    upsert?: ActuatorUpsertWithWhereUniqueWithoutDeviceInput | ActuatorUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ActuatorCreateManyDeviceInputEnvelope
    set?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    disconnect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    delete?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    connect?: ActuatorWhereUniqueInput | ActuatorWhereUniqueInput[]
    update?: ActuatorUpdateWithWhereUniqueWithoutDeviceInput | ActuatorUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ActuatorUpdateManyWithWhereWithoutDeviceInput | ActuatorUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ActuatorScalarWhereInput | ActuatorScalarWhereInput[]
  }

  export type ControlLogUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput> | ControlLogCreateWithoutDeviceInput[] | ControlLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutDeviceInput | ControlLogCreateOrConnectWithoutDeviceInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutDeviceInput | ControlLogUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ControlLogCreateManyDeviceInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutDeviceInput | ControlLogUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutDeviceInput | ControlLogUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput> | ScheduleCreateWithoutDeviceInput[] | ScheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDeviceInput | ScheduleCreateOrConnectWithoutDeviceInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDeviceInput | ScheduleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ScheduleCreateManyDeviceInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDeviceInput | ScheduleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDeviceInput | ScheduleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput> | CultivationCycleCreateWithoutDeviceInput[] | CultivationCycleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutDeviceInput | CultivationCycleCreateOrConnectWithoutDeviceInput[]
    upsert?: CultivationCycleUpsertWithWhereUniqueWithoutDeviceInput | CultivationCycleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: CultivationCycleCreateManyDeviceInputEnvelope
    set?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    disconnect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    delete?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    connect?: CultivationCycleWhereUniqueInput | CultivationCycleWhereUniqueInput[]
    update?: CultivationCycleUpdateWithWhereUniqueWithoutDeviceInput | CultivationCycleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: CultivationCycleUpdateManyWithWhereWithoutDeviceInput | CultivationCycleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: CultivationCycleScalarWhereInput | CultivationCycleScalarWhereInput[]
  }

  export type OtaLogUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput> | OtaLogCreateWithoutDeviceInput[] | OtaLogUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutDeviceInput | OtaLogCreateOrConnectWithoutDeviceInput[]
    upsert?: OtaLogUpsertWithWhereUniqueWithoutDeviceInput | OtaLogUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: OtaLogCreateManyDeviceInputEnvelope
    set?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    disconnect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    delete?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    update?: OtaLogUpdateWithWhereUniqueWithoutDeviceInput | OtaLogUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: OtaLogUpdateManyWithWhereWithoutDeviceInput | OtaLogUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutSettingInput = {
    create?: XOR<DeviceCreateWithoutSettingInput, DeviceUncheckedCreateWithoutSettingInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSettingInput
    connect?: DeviceWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutSettingNestedInput = {
    create?: XOR<DeviceCreateWithoutSettingInput, DeviceUncheckedCreateWithoutSettingInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSettingInput
    upsert?: DeviceUpsertWithoutSettingInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSettingInput, DeviceUpdateWithoutSettingInput>, DeviceUncheckedUpdateWithoutSettingInput>
  }

  export type DeviceCreateNestedOneWithoutSensorReadingsInput = {
    create?: XOR<DeviceCreateWithoutSensorReadingsInput, DeviceUncheckedCreateWithoutSensorReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSensorReadingsInput
    connect?: DeviceWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DeviceUpdateOneRequiredWithoutSensorReadingsNestedInput = {
    create?: XOR<DeviceCreateWithoutSensorReadingsInput, DeviceUncheckedCreateWithoutSensorReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSensorReadingsInput
    upsert?: DeviceUpsertWithoutSensorReadingsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSensorReadingsInput, DeviceUpdateWithoutSensorReadingsInput>, DeviceUncheckedUpdateWithoutSensorReadingsInput>
  }

  export type DeviceCreateNestedOneWithoutActuatorsInput = {
    create?: XOR<DeviceCreateWithoutActuatorsInput, DeviceUncheckedCreateWithoutActuatorsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutActuatorsInput
    connect?: DeviceWhereUniqueInput
  }

  export type ControlLogCreateNestedManyWithoutActuatorInput = {
    create?: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput> | ControlLogCreateWithoutActuatorInput[] | ControlLogUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutActuatorInput | ControlLogCreateOrConnectWithoutActuatorInput[]
    createMany?: ControlLogCreateManyActuatorInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutActuatorInput = {
    create?: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput> | ScheduleCreateWithoutActuatorInput[] | ScheduleUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutActuatorInput | ScheduleCreateOrConnectWithoutActuatorInput[]
    createMany?: ScheduleCreateManyActuatorInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ControlLogUncheckedCreateNestedManyWithoutActuatorInput = {
    create?: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput> | ControlLogCreateWithoutActuatorInput[] | ControlLogUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutActuatorInput | ControlLogCreateOrConnectWithoutActuatorInput[]
    createMany?: ControlLogCreateManyActuatorInputEnvelope
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutActuatorInput = {
    create?: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput> | ScheduleCreateWithoutActuatorInput[] | ScheduleUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutActuatorInput | ScheduleCreateOrConnectWithoutActuatorInput[]
    createMany?: ScheduleCreateManyActuatorInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EnumActuatorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActuatorType
  }

  export type EnumActuatorStateFieldUpdateOperationsInput = {
    set?: $Enums.ActuatorState
  }

  export type DeviceUpdateOneRequiredWithoutActuatorsNestedInput = {
    create?: XOR<DeviceCreateWithoutActuatorsInput, DeviceUncheckedCreateWithoutActuatorsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutActuatorsInput
    upsert?: DeviceUpsertWithoutActuatorsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutActuatorsInput, DeviceUpdateWithoutActuatorsInput>, DeviceUncheckedUpdateWithoutActuatorsInput>
  }

  export type ControlLogUpdateManyWithoutActuatorNestedInput = {
    create?: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput> | ControlLogCreateWithoutActuatorInput[] | ControlLogUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutActuatorInput | ControlLogCreateOrConnectWithoutActuatorInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutActuatorInput | ControlLogUpsertWithWhereUniqueWithoutActuatorInput[]
    createMany?: ControlLogCreateManyActuatorInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutActuatorInput | ControlLogUpdateWithWhereUniqueWithoutActuatorInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutActuatorInput | ControlLogUpdateManyWithWhereWithoutActuatorInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutActuatorNestedInput = {
    create?: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput> | ScheduleCreateWithoutActuatorInput[] | ScheduleUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutActuatorInput | ScheduleCreateOrConnectWithoutActuatorInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutActuatorInput | ScheduleUpsertWithWhereUniqueWithoutActuatorInput[]
    createMany?: ScheduleCreateManyActuatorInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutActuatorInput | ScheduleUpdateWithWhereUniqueWithoutActuatorInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutActuatorInput | ScheduleUpdateManyWithWhereWithoutActuatorInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ControlLogUncheckedUpdateManyWithoutActuatorNestedInput = {
    create?: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput> | ControlLogCreateWithoutActuatorInput[] | ControlLogUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ControlLogCreateOrConnectWithoutActuatorInput | ControlLogCreateOrConnectWithoutActuatorInput[]
    upsert?: ControlLogUpsertWithWhereUniqueWithoutActuatorInput | ControlLogUpsertWithWhereUniqueWithoutActuatorInput[]
    createMany?: ControlLogCreateManyActuatorInputEnvelope
    set?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    disconnect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    delete?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    connect?: ControlLogWhereUniqueInput | ControlLogWhereUniqueInput[]
    update?: ControlLogUpdateWithWhereUniqueWithoutActuatorInput | ControlLogUpdateWithWhereUniqueWithoutActuatorInput[]
    updateMany?: ControlLogUpdateManyWithWhereWithoutActuatorInput | ControlLogUpdateManyWithWhereWithoutActuatorInput[]
    deleteMany?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutActuatorNestedInput = {
    create?: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput> | ScheduleCreateWithoutActuatorInput[] | ScheduleUncheckedCreateWithoutActuatorInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutActuatorInput | ScheduleCreateOrConnectWithoutActuatorInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutActuatorInput | ScheduleUpsertWithWhereUniqueWithoutActuatorInput[]
    createMany?: ScheduleCreateManyActuatorInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutActuatorInput | ScheduleUpdateWithWhereUniqueWithoutActuatorInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutActuatorInput | ScheduleUpdateManyWithWhereWithoutActuatorInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutControlLogsInput = {
    create?: XOR<DeviceCreateWithoutControlLogsInput, DeviceUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutControlLogsInput
    connect?: DeviceWhereUniqueInput
  }

  export type ActuatorCreateNestedOneWithoutControlLogsInput = {
    create?: XOR<ActuatorCreateWithoutControlLogsInput, ActuatorUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: ActuatorCreateOrConnectWithoutControlLogsInput
    connect?: ActuatorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutControlLogsInput = {
    create?: XOR<UserCreateWithoutControlLogsInput, UserUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutControlLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumControlActionFieldUpdateOperationsInput = {
    set?: $Enums.ControlAction
  }

  export type EnumControlSourceFieldUpdateOperationsInput = {
    set?: $Enums.ControlSource
  }

  export type DeviceUpdateOneRequiredWithoutControlLogsNestedInput = {
    create?: XOR<DeviceCreateWithoutControlLogsInput, DeviceUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutControlLogsInput
    upsert?: DeviceUpsertWithoutControlLogsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutControlLogsInput, DeviceUpdateWithoutControlLogsInput>, DeviceUncheckedUpdateWithoutControlLogsInput>
  }

  export type ActuatorUpdateOneWithoutControlLogsNestedInput = {
    create?: XOR<ActuatorCreateWithoutControlLogsInput, ActuatorUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: ActuatorCreateOrConnectWithoutControlLogsInput
    upsert?: ActuatorUpsertWithoutControlLogsInput
    disconnect?: ActuatorWhereInput | boolean
    delete?: ActuatorWhereInput | boolean
    connect?: ActuatorWhereUniqueInput
    update?: XOR<XOR<ActuatorUpdateToOneWithWhereWithoutControlLogsInput, ActuatorUpdateWithoutControlLogsInput>, ActuatorUncheckedUpdateWithoutControlLogsInput>
  }

  export type UserUpdateOneWithoutControlLogsNestedInput = {
    create?: XOR<UserCreateWithoutControlLogsInput, UserUncheckedCreateWithoutControlLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutControlLogsInput
    upsert?: UserUpsertWithoutControlLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutControlLogsInput, UserUpdateWithoutControlLogsInput>, UserUncheckedUpdateWithoutControlLogsInput>
  }

  export type ScheduleCreatedaysOfWeekInput = {
    set: number[]
  }

  export type DeviceCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DeviceCreateWithoutSchedulesInput, DeviceUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSchedulesInput
    connect?: DeviceWhereUniqueInput
  }

  export type ActuatorCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ActuatorCreateWithoutSchedulesInput, ActuatorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ActuatorCreateOrConnectWithoutSchedulesInput
    connect?: ActuatorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleUpdatedaysOfWeekInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DeviceUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DeviceCreateWithoutSchedulesInput, DeviceUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSchedulesInput
    upsert?: DeviceUpsertWithoutSchedulesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSchedulesInput, DeviceUpdateWithoutSchedulesInput>, DeviceUncheckedUpdateWithoutSchedulesInput>
  }

  export type ActuatorUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ActuatorCreateWithoutSchedulesInput, ActuatorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ActuatorCreateOrConnectWithoutSchedulesInput
    upsert?: ActuatorUpsertWithoutSchedulesInput
    connect?: ActuatorWhereUniqueInput
    update?: XOR<XOR<ActuatorUpdateToOneWithWhereWithoutSchedulesInput, ActuatorUpdateWithoutSchedulesInput>, ActuatorUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    upsert?: UserUpsertWithoutSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulesInput, UserUpdateWithoutSchedulesInput>, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type DeviceCreateNestedOneWithoutCultivationCyclesInput = {
    create?: XOR<DeviceCreateWithoutCultivationCyclesInput, DeviceUncheckedCreateWithoutCultivationCyclesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutCultivationCyclesInput
    connect?: DeviceWhereUniqueInput
  }

  export type HarvestRecordCreateNestedManyWithoutCycleInput = {
    create?: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput> | HarvestRecordCreateWithoutCycleInput[] | HarvestRecordUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: HarvestRecordCreateOrConnectWithoutCycleInput | HarvestRecordCreateOrConnectWithoutCycleInput[]
    createMany?: HarvestRecordCreateManyCycleInputEnvelope
    connect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
  }

  export type HarvestRecordUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput> | HarvestRecordCreateWithoutCycleInput[] | HarvestRecordUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: HarvestRecordCreateOrConnectWithoutCycleInput | HarvestRecordCreateOrConnectWithoutCycleInput[]
    createMany?: HarvestRecordCreateManyCycleInputEnvelope
    connect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
  }

  export type DeviceUpdateOneRequiredWithoutCultivationCyclesNestedInput = {
    create?: XOR<DeviceCreateWithoutCultivationCyclesInput, DeviceUncheckedCreateWithoutCultivationCyclesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutCultivationCyclesInput
    upsert?: DeviceUpsertWithoutCultivationCyclesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutCultivationCyclesInput, DeviceUpdateWithoutCultivationCyclesInput>, DeviceUncheckedUpdateWithoutCultivationCyclesInput>
  }

  export type HarvestRecordUpdateManyWithoutCycleNestedInput = {
    create?: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput> | HarvestRecordCreateWithoutCycleInput[] | HarvestRecordUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: HarvestRecordCreateOrConnectWithoutCycleInput | HarvestRecordCreateOrConnectWithoutCycleInput[]
    upsert?: HarvestRecordUpsertWithWhereUniqueWithoutCycleInput | HarvestRecordUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: HarvestRecordCreateManyCycleInputEnvelope
    set?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    disconnect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    delete?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    connect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    update?: HarvestRecordUpdateWithWhereUniqueWithoutCycleInput | HarvestRecordUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: HarvestRecordUpdateManyWithWhereWithoutCycleInput | HarvestRecordUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: HarvestRecordScalarWhereInput | HarvestRecordScalarWhereInput[]
  }

  export type HarvestRecordUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput> | HarvestRecordCreateWithoutCycleInput[] | HarvestRecordUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: HarvestRecordCreateOrConnectWithoutCycleInput | HarvestRecordCreateOrConnectWithoutCycleInput[]
    upsert?: HarvestRecordUpsertWithWhereUniqueWithoutCycleInput | HarvestRecordUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: HarvestRecordCreateManyCycleInputEnvelope
    set?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    disconnect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    delete?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    connect?: HarvestRecordWhereUniqueInput | HarvestRecordWhereUniqueInput[]
    update?: HarvestRecordUpdateWithWhereUniqueWithoutCycleInput | HarvestRecordUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: HarvestRecordUpdateManyWithWhereWithoutCycleInput | HarvestRecordUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: HarvestRecordScalarWhereInput | HarvestRecordScalarWhereInput[]
  }

  export type CultivationCycleCreateNestedOneWithoutHarvestsInput = {
    create?: XOR<CultivationCycleCreateWithoutHarvestsInput, CultivationCycleUncheckedCreateWithoutHarvestsInput>
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutHarvestsInput
    connect?: CultivationCycleWhereUniqueInput
  }

  export type CultivationCycleUpdateOneRequiredWithoutHarvestsNestedInput = {
    create?: XOR<CultivationCycleCreateWithoutHarvestsInput, CultivationCycleUncheckedCreateWithoutHarvestsInput>
    connectOrCreate?: CultivationCycleCreateOrConnectWithoutHarvestsInput
    upsert?: CultivationCycleUpsertWithoutHarvestsInput
    connect?: CultivationCycleWhereUniqueInput
    update?: XOR<XOR<CultivationCycleUpdateToOneWithWhereWithoutHarvestsInput, CultivationCycleUpdateWithoutHarvestsInput>, CultivationCycleUncheckedUpdateWithoutHarvestsInput>
  }

  export type UserCreateNestedOneWithoutFirmwaresInput = {
    create?: XOR<UserCreateWithoutFirmwaresInput, UserUncheckedCreateWithoutFirmwaresInput>
    connectOrCreate?: UserCreateOrConnectWithoutFirmwaresInput
    connect?: UserWhereUniqueInput
  }

  export type OtaLogCreateNestedManyWithoutFirmwareInput = {
    create?: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput> | OtaLogCreateWithoutFirmwareInput[] | OtaLogUncheckedCreateWithoutFirmwareInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutFirmwareInput | OtaLogCreateOrConnectWithoutFirmwareInput[]
    createMany?: OtaLogCreateManyFirmwareInputEnvelope
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
  }

  export type OtaLogUncheckedCreateNestedManyWithoutFirmwareInput = {
    create?: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput> | OtaLogCreateWithoutFirmwareInput[] | OtaLogUncheckedCreateWithoutFirmwareInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutFirmwareInput | OtaLogCreateOrConnectWithoutFirmwareInput[]
    createMany?: OtaLogCreateManyFirmwareInputEnvelope
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutFirmwaresNestedInput = {
    create?: XOR<UserCreateWithoutFirmwaresInput, UserUncheckedCreateWithoutFirmwaresInput>
    connectOrCreate?: UserCreateOrConnectWithoutFirmwaresInput
    upsert?: UserUpsertWithoutFirmwaresInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFirmwaresInput, UserUpdateWithoutFirmwaresInput>, UserUncheckedUpdateWithoutFirmwaresInput>
  }

  export type OtaLogUpdateManyWithoutFirmwareNestedInput = {
    create?: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput> | OtaLogCreateWithoutFirmwareInput[] | OtaLogUncheckedCreateWithoutFirmwareInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutFirmwareInput | OtaLogCreateOrConnectWithoutFirmwareInput[]
    upsert?: OtaLogUpsertWithWhereUniqueWithoutFirmwareInput | OtaLogUpsertWithWhereUniqueWithoutFirmwareInput[]
    createMany?: OtaLogCreateManyFirmwareInputEnvelope
    set?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    disconnect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    delete?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    update?: OtaLogUpdateWithWhereUniqueWithoutFirmwareInput | OtaLogUpdateWithWhereUniqueWithoutFirmwareInput[]
    updateMany?: OtaLogUpdateManyWithWhereWithoutFirmwareInput | OtaLogUpdateManyWithWhereWithoutFirmwareInput[]
    deleteMany?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
  }

  export type OtaLogUncheckedUpdateManyWithoutFirmwareNestedInput = {
    create?: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput> | OtaLogCreateWithoutFirmwareInput[] | OtaLogUncheckedCreateWithoutFirmwareInput[]
    connectOrCreate?: OtaLogCreateOrConnectWithoutFirmwareInput | OtaLogCreateOrConnectWithoutFirmwareInput[]
    upsert?: OtaLogUpsertWithWhereUniqueWithoutFirmwareInput | OtaLogUpsertWithWhereUniqueWithoutFirmwareInput[]
    createMany?: OtaLogCreateManyFirmwareInputEnvelope
    set?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    disconnect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    delete?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    connect?: OtaLogWhereUniqueInput | OtaLogWhereUniqueInput[]
    update?: OtaLogUpdateWithWhereUniqueWithoutFirmwareInput | OtaLogUpdateWithWhereUniqueWithoutFirmwareInput[]
    updateMany?: OtaLogUpdateManyWithWhereWithoutFirmwareInput | OtaLogUpdateManyWithWhereWithoutFirmwareInput[]
    deleteMany?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutOtaLogsInput = {
    create?: XOR<DeviceCreateWithoutOtaLogsInput, DeviceUncheckedCreateWithoutOtaLogsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutOtaLogsInput
    connect?: DeviceWhereUniqueInput
  }

  export type FirmwareCreateNestedOneWithoutOtaLogsInput = {
    create?: XOR<FirmwareCreateWithoutOtaLogsInput, FirmwareUncheckedCreateWithoutOtaLogsInput>
    connectOrCreate?: FirmwareCreateOrConnectWithoutOtaLogsInput
    connect?: FirmwareWhereUniqueInput
  }

  export type DeviceUpdateOneWithoutOtaLogsNestedInput = {
    create?: XOR<DeviceCreateWithoutOtaLogsInput, DeviceUncheckedCreateWithoutOtaLogsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutOtaLogsInput
    upsert?: DeviceUpsertWithoutOtaLogsInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutOtaLogsInput, DeviceUpdateWithoutOtaLogsInput>, DeviceUncheckedUpdateWithoutOtaLogsInput>
  }

  export type FirmwareUpdateOneWithoutOtaLogsNestedInput = {
    create?: XOR<FirmwareCreateWithoutOtaLogsInput, FirmwareUncheckedCreateWithoutOtaLogsInput>
    connectOrCreate?: FirmwareCreateOrConnectWithoutOtaLogsInput
    upsert?: FirmwareUpsertWithoutOtaLogsInput
    disconnect?: FirmwareWhereInput | boolean
    delete?: FirmwareWhereInput | boolean
    connect?: FirmwareWhereUniqueInput
    update?: XOR<XOR<FirmwareUpdateToOneWithWhereWithoutOtaLogsInput, FirmwareUpdateWithoutOtaLogsInput>, FirmwareUncheckedUpdateWithoutOtaLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedEnumOwnershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeFilter<$PrismaModel> | $Enums.OwnershipType
  }

  export type NestedEnumControlModeFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlMode | EnumControlModeFieldRefInput<$PrismaModel>
    in?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    not?: NestedEnumControlModeFilter<$PrismaModel> | $Enums.ControlMode
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeFilter<$PrismaModel>
  }

  export type NestedEnumControlModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlMode | EnumControlModeFieldRefInput<$PrismaModel>
    in?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlMode[] | ListEnumControlModeFieldRefInput<$PrismaModel>
    not?: NestedEnumControlModeWithAggregatesFilter<$PrismaModel> | $Enums.ControlMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlModeFilter<$PrismaModel>
    _max?: NestedEnumControlModeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumActuatorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorType | EnumActuatorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorTypeFilter<$PrismaModel> | $Enums.ActuatorType
  }

  export type NestedEnumActuatorStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorState | EnumActuatorStateFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorStateFilter<$PrismaModel> | $Enums.ActuatorState
  }

  export type NestedEnumActuatorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorType | EnumActuatorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorType[] | ListEnumActuatorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActuatorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActuatorTypeFilter<$PrismaModel>
    _max?: NestedEnumActuatorTypeFilter<$PrismaModel>
  }

  export type NestedEnumActuatorStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActuatorState | EnumActuatorStateFieldRefInput<$PrismaModel>
    in?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActuatorState[] | ListEnumActuatorStateFieldRefInput<$PrismaModel>
    not?: NestedEnumActuatorStateWithAggregatesFilter<$PrismaModel> | $Enums.ActuatorState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActuatorStateFilter<$PrismaModel>
    _max?: NestedEnumActuatorStateFilter<$PrismaModel>
  }

  export type NestedEnumControlActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlAction | EnumControlActionFieldRefInput<$PrismaModel>
    in?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    not?: NestedEnumControlActionFilter<$PrismaModel> | $Enums.ControlAction
  }

  export type NestedEnumControlSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlSource | EnumControlSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumControlSourceFilter<$PrismaModel> | $Enums.ControlSource
  }

  export type NestedEnumControlActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlAction | EnumControlActionFieldRefInput<$PrismaModel>
    in?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlAction[] | ListEnumControlActionFieldRefInput<$PrismaModel>
    not?: NestedEnumControlActionWithAggregatesFilter<$PrismaModel> | $Enums.ControlAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlActionFilter<$PrismaModel>
    _max?: NestedEnumControlActionFilter<$PrismaModel>
  }

  export type NestedEnumControlSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlSource | EnumControlSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlSource[] | ListEnumControlSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumControlSourceWithAggregatesFilter<$PrismaModel> | $Enums.ControlSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlSourceFilter<$PrismaModel>
    _max?: NestedEnumControlSourceFilter<$PrismaModel>
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatedByInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutFarmerInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutFarmerInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutFarmerInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput>
  }

  export type DeviceCreateManyFarmerInputEnvelope = {
    data: DeviceCreateManyFarmerInput | DeviceCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutCreatedByInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutCreatedByInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput>
  }

  export type DeviceCreateManyCreatedByInputEnvelope = {
    data: DeviceCreateManyCreatedByInput | DeviceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FirmwareCreateWithoutCreatedByInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otaLogs?: OtaLogCreateNestedManyWithoutFirmwareInput
  }

  export type FirmwareUncheckedCreateWithoutCreatedByInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutFirmwareInput
  }

  export type FirmwareCreateOrConnectWithoutCreatedByInput = {
    where: FirmwareWhereUniqueInput
    create: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput>
  }

  export type FirmwareCreateManyCreatedByInputEnvelope = {
    data: FirmwareCreateManyCreatedByInput | FirmwareCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ControlLogCreateWithoutUserInput = {
    id?: bigint | number
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutControlLogsInput
    actuator?: ActuatorCreateNestedOneWithoutControlLogsInput
  }

  export type ControlLogUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    deviceId: string
    actuatorId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ControlLogCreateOrConnectWithoutUserInput = {
    where: ControlLogWhereUniqueInput
    create: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput>
  }

  export type ControlLogCreateManyUserInputEnvelope = {
    data: ControlLogCreateManyUserInput | ControlLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutCreatedByInput = {
    id?: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutSchedulesInput
    actuator: ActuatorCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutCreatedByInput = {
    id?: string
    deviceId: string
    actuatorId: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutCreatedByInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput>
  }

  export type ScheduleCreateManyCreatedByInputEnvelope = {
    data: ScheduleCreateManyCreatedByInput | ScheduleCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    farmName?: StringNullableFilter<"User"> | string | null
    farmAddress?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    profileCompleted?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdById?: StringNullableFilter<"User"> | string | null
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    fcmToken?: StringNullableFilter<"User"> | string | null
    lastFcmTokenAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutFarmerInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutFarmerInput, DeviceUncheckedUpdateWithoutFarmerInput>
    create: XOR<DeviceCreateWithoutFarmerInput, DeviceUncheckedCreateWithoutFarmerInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutFarmerInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutFarmerInput, DeviceUncheckedUpdateWithoutFarmerInput>
  }

  export type DeviceUpdateManyWithWhereWithoutFarmerInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutFarmerInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    serialNumber?: StringFilter<"Device"> | string
    activationCode?: StringFilter<"Device"> | string
    name?: StringNullableFilter<"Device"> | string | null
    model?: StringFilter<"Device"> | string
    hardwareVersion?: StringNullableFilter<"Device"> | string | null
    firmwareVersion?: StringNullableFilter<"Device"> | string | null
    macAddress?: StringNullableFilter<"Device"> | string | null
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFilter<"Device"> | $Enums.OwnershipType
    controlMode?: EnumControlModeFilter<"Device"> | $Enums.ControlMode
    farmerId?: StringNullableFilter<"Device"> | string | null
    createdById?: StringNullableFilter<"Device"> | string | null
    activatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    rssiDbm?: IntNullableFilter<"Device"> | number | null
    uptimeMs?: BigIntNullableFilter<"Device"> | bigint | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutCreatedByInput, DeviceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutCreatedByInput, DeviceUncheckedUpdateWithoutCreatedByInput>
  }

  export type DeviceUpdateManyWithWhereWithoutCreatedByInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FirmwareUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FirmwareWhereUniqueInput
    update: XOR<FirmwareUpdateWithoutCreatedByInput, FirmwareUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FirmwareCreateWithoutCreatedByInput, FirmwareUncheckedCreateWithoutCreatedByInput>
  }

  export type FirmwareUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FirmwareWhereUniqueInput
    data: XOR<FirmwareUpdateWithoutCreatedByInput, FirmwareUncheckedUpdateWithoutCreatedByInput>
  }

  export type FirmwareUpdateManyWithWhereWithoutCreatedByInput = {
    where: FirmwareScalarWhereInput
    data: XOR<FirmwareUpdateManyMutationInput, FirmwareUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FirmwareScalarWhereInput = {
    AND?: FirmwareScalarWhereInput | FirmwareScalarWhereInput[]
    OR?: FirmwareScalarWhereInput[]
    NOT?: FirmwareScalarWhereInput | FirmwareScalarWhereInput[]
    id?: StringFilter<"Firmware"> | string
    version?: StringFilter<"Firmware"> | string
    filename?: StringFilter<"Firmware"> | string
    originalName?: StringFilter<"Firmware"> | string
    filePath?: StringFilter<"Firmware"> | string
    fileSize?: IntFilter<"Firmware"> | number
    checksumSha256?: StringFilter<"Firmware"> | string
    hardwareVersion?: StringFilter<"Firmware"> | string
    changelog?: StringNullableFilter<"Firmware"> | string | null
    isLatest?: BoolFilter<"Firmware"> | boolean
    createdById?: StringNullableFilter<"Firmware"> | string | null
    createdAt?: DateTimeFilter<"Firmware"> | Date | string
    updatedAt?: DateTimeFilter<"Firmware"> | Date | string
  }

  export type ControlLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ControlLogWhereUniqueInput
    update: XOR<ControlLogUpdateWithoutUserInput, ControlLogUncheckedUpdateWithoutUserInput>
    create: XOR<ControlLogCreateWithoutUserInput, ControlLogUncheckedCreateWithoutUserInput>
  }

  export type ControlLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ControlLogWhereUniqueInput
    data: XOR<ControlLogUpdateWithoutUserInput, ControlLogUncheckedUpdateWithoutUserInput>
  }

  export type ControlLogUpdateManyWithWhereWithoutUserInput = {
    where: ControlLogScalarWhereInput
    data: XOR<ControlLogUpdateManyMutationInput, ControlLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ControlLogScalarWhereInput = {
    AND?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
    OR?: ControlLogScalarWhereInput[]
    NOT?: ControlLogScalarWhereInput | ControlLogScalarWhereInput[]
    id?: BigIntFilter<"ControlLog"> | bigint | number
    deviceId?: StringFilter<"ControlLog"> | string
    actuatorId?: StringNullableFilter<"ControlLog"> | string | null
    userId?: StringNullableFilter<"ControlLog"> | string | null
    action?: EnumControlActionFilter<"ControlLog"> | $Enums.ControlAction
    source?: EnumControlSourceFilter<"ControlLog"> | $Enums.ControlSource
    mode?: EnumControlModeFilter<"ControlLog"> | $Enums.ControlMode
    success?: BoolFilter<"ControlLog"> | boolean
    message?: StringNullableFilter<"ControlLog"> | string | null
    requestedAt?: DateTimeFilter<"ControlLog"> | Date | string
    executedAt?: DateTimeNullableFilter<"ControlLog"> | Date | string | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutCreatedByInput, ScheduleUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ScheduleCreateWithoutCreatedByInput, ScheduleUncheckedCreateWithoutCreatedByInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutCreatedByInput, ScheduleUncheckedUpdateWithoutCreatedByInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutCreatedByInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    deviceId?: StringFilter<"Schedule"> | string
    actuatorId?: StringFilter<"Schedule"> | string
    createdById?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    action?: EnumControlActionFilter<"Schedule"> | $Enums.ControlAction
    startMinute?: IntFilter<"Schedule"> | number
    durationSeconds?: IntNullableFilter<"Schedule"> | number | null
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isEnabled?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserCreateWithoutCreatedDevicesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedDevicesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
  }

  export type DeviceSettingCreateWithoutDeviceInput = {
    id?: string
    minTemperature?: Decimal | DecimalJsLike | number | string | null
    maxTemperature?: Decimal | DecimalJsLike | number | string | null
    minHumidity?: Decimal | DecimalJsLike | number | string | null
    maxHumidity?: Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: number | null
    telemetryIntervalSec?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSettingUncheckedCreateWithoutDeviceInput = {
    id?: string
    minTemperature?: Decimal | DecimalJsLike | number | string | null
    maxTemperature?: Decimal | DecimalJsLike | number | string | null
    minHumidity?: Decimal | DecimalJsLike | number | string | null
    maxHumidity?: Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: number | null
    telemetryIntervalSec?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSettingCreateOrConnectWithoutDeviceInput = {
    where: DeviceSettingWhereUniqueInput
    create: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
  }

  export type SensorReadingCreateWithoutDeviceInput = {
    id?: bigint | number
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
  }

  export type SensorReadingUncheckedCreateWithoutDeviceInput = {
    id?: bigint | number
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
  }

  export type SensorReadingCreateOrConnectWithoutDeviceInput = {
    where: SensorReadingWhereUniqueInput
    create: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput>
  }

  export type SensorReadingCreateManyDeviceInputEnvelope = {
    data: SensorReadingCreateManyDeviceInput | SensorReadingCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ActuatorCreateWithoutDeviceInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    controlLogs?: ControlLogCreateNestedManyWithoutActuatorInput
    schedules?: ScheduleCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorUncheckedCreateWithoutDeviceInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutActuatorInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorCreateOrConnectWithoutDeviceInput = {
    where: ActuatorWhereUniqueInput
    create: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput>
  }

  export type ActuatorCreateManyDeviceInputEnvelope = {
    data: ActuatorCreateManyDeviceInput | ActuatorCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ControlLogCreateWithoutDeviceInput = {
    id?: bigint | number
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
    actuator?: ActuatorCreateNestedOneWithoutControlLogsInput
    user?: UserCreateNestedOneWithoutControlLogsInput
  }

  export type ControlLogUncheckedCreateWithoutDeviceInput = {
    id?: bigint | number
    actuatorId?: string | null
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ControlLogCreateOrConnectWithoutDeviceInput = {
    where: ControlLogWhereUniqueInput
    create: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput>
  }

  export type ControlLogCreateManyDeviceInputEnvelope = {
    data: ControlLogCreateManyDeviceInput | ControlLogCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutDeviceInput = {
    id?: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    actuator: ActuatorCreateNestedOneWithoutSchedulesInput
    createdBy: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutDeviceInput = {
    id?: string
    actuatorId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutDeviceInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput>
  }

  export type ScheduleCreateManyDeviceInputEnvelope = {
    data: ScheduleCreateManyDeviceInput | ScheduleCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type CultivationCycleCreateWithoutDeviceInput = {
    id?: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    harvests?: HarvestRecordCreateNestedManyWithoutCycleInput
  }

  export type CultivationCycleUncheckedCreateWithoutDeviceInput = {
    id?: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    harvests?: HarvestRecordUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CultivationCycleCreateOrConnectWithoutDeviceInput = {
    where: CultivationCycleWhereUniqueInput
    create: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput>
  }

  export type CultivationCycleCreateManyDeviceInputEnvelope = {
    data: CultivationCycleCreateManyDeviceInput | CultivationCycleCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type OtaLogCreateWithoutDeviceInput = {
    id?: string
    deviceSerialNumber?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
    firmware?: FirmwareCreateNestedOneWithoutOtaLogsInput
  }

  export type OtaLogUncheckedCreateWithoutDeviceInput = {
    id?: string
    deviceSerialNumber?: string | null
    firmwareId?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OtaLogCreateOrConnectWithoutDeviceInput = {
    where: OtaLogWhereUniqueInput
    create: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput>
  }

  export type OtaLogCreateManyDeviceInputEnvelope = {
    data: OtaLogCreateManyDeviceInput | OtaLogCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutCreatedDevicesInput = {
    update: XOR<UserUpdateWithoutCreatedDevicesInput, UserUncheckedUpdateWithoutCreatedDevicesInput>
    create: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDevicesInput, UserUncheckedUpdateWithoutCreatedDevicesInput>
  }

  export type UserUpdateWithoutCreatedDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DeviceSettingUpsertWithoutDeviceInput = {
    update: XOR<DeviceSettingUpdateWithoutDeviceInput, DeviceSettingUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceSettingCreateWithoutDeviceInput, DeviceSettingUncheckedCreateWithoutDeviceInput>
    where?: DeviceSettingWhereInput
  }

  export type DeviceSettingUpdateToOneWithWhereWithoutDeviceInput = {
    where?: DeviceSettingWhereInput
    data: XOR<DeviceSettingUpdateWithoutDeviceInput, DeviceSettingUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceSettingUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSettingUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    minTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxTemperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxHumidity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timerDurationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    telemetryIntervalSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUpsertWithWhereUniqueWithoutDeviceInput = {
    where: SensorReadingWhereUniqueInput
    update: XOR<SensorReadingUpdateWithoutDeviceInput, SensorReadingUncheckedUpdateWithoutDeviceInput>
    create: XOR<SensorReadingCreateWithoutDeviceInput, SensorReadingUncheckedCreateWithoutDeviceInput>
  }

  export type SensorReadingUpdateWithWhereUniqueWithoutDeviceInput = {
    where: SensorReadingWhereUniqueInput
    data: XOR<SensorReadingUpdateWithoutDeviceInput, SensorReadingUncheckedUpdateWithoutDeviceInput>
  }

  export type SensorReadingUpdateManyWithWhereWithoutDeviceInput = {
    where: SensorReadingScalarWhereInput
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyWithoutDeviceInput>
  }

  export type SensorReadingScalarWhereInput = {
    AND?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    OR?: SensorReadingScalarWhereInput[]
    NOT?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    id?: BigIntFilter<"SensorReading"> | bigint | number
    deviceId?: StringFilter<"SensorReading"> | string
    temperature?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFilter<"SensorReading"> | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFilter<"SensorReading"> | Date | string
  }

  export type ActuatorUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ActuatorWhereUniqueInput
    update: XOR<ActuatorUpdateWithoutDeviceInput, ActuatorUncheckedUpdateWithoutDeviceInput>
    create: XOR<ActuatorCreateWithoutDeviceInput, ActuatorUncheckedCreateWithoutDeviceInput>
  }

  export type ActuatorUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ActuatorWhereUniqueInput
    data: XOR<ActuatorUpdateWithoutDeviceInput, ActuatorUncheckedUpdateWithoutDeviceInput>
  }

  export type ActuatorUpdateManyWithWhereWithoutDeviceInput = {
    where: ActuatorScalarWhereInput
    data: XOR<ActuatorUpdateManyMutationInput, ActuatorUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ActuatorScalarWhereInput = {
    AND?: ActuatorScalarWhereInput | ActuatorScalarWhereInput[]
    OR?: ActuatorScalarWhereInput[]
    NOT?: ActuatorScalarWhereInput | ActuatorScalarWhereInput[]
    id?: StringFilter<"Actuator"> | string
    deviceId?: StringFilter<"Actuator"> | string
    name?: StringFilter<"Actuator"> | string
    type?: EnumActuatorTypeFilter<"Actuator"> | $Enums.ActuatorType
    channel?: IntFilter<"Actuator"> | number
    state?: EnumActuatorStateFilter<"Actuator"> | $Enums.ActuatorState
    isEnabled?: BoolFilter<"Actuator"> | boolean
    lastChangedAt?: DateTimeNullableFilter<"Actuator"> | Date | string | null
    createdAt?: DateTimeFilter<"Actuator"> | Date | string
    updatedAt?: DateTimeFilter<"Actuator"> | Date | string
  }

  export type ControlLogUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ControlLogWhereUniqueInput
    update: XOR<ControlLogUpdateWithoutDeviceInput, ControlLogUncheckedUpdateWithoutDeviceInput>
    create: XOR<ControlLogCreateWithoutDeviceInput, ControlLogUncheckedCreateWithoutDeviceInput>
  }

  export type ControlLogUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ControlLogWhereUniqueInput
    data: XOR<ControlLogUpdateWithoutDeviceInput, ControlLogUncheckedUpdateWithoutDeviceInput>
  }

  export type ControlLogUpdateManyWithWhereWithoutDeviceInput = {
    where: ControlLogScalarWhereInput
    data: XOR<ControlLogUpdateManyMutationInput, ControlLogUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutDeviceInput, ScheduleUncheckedUpdateWithoutDeviceInput>
    create: XOR<ScheduleCreateWithoutDeviceInput, ScheduleUncheckedCreateWithoutDeviceInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutDeviceInput, ScheduleUncheckedUpdateWithoutDeviceInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutDeviceInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutDeviceInput>
  }

  export type CultivationCycleUpsertWithWhereUniqueWithoutDeviceInput = {
    where: CultivationCycleWhereUniqueInput
    update: XOR<CultivationCycleUpdateWithoutDeviceInput, CultivationCycleUncheckedUpdateWithoutDeviceInput>
    create: XOR<CultivationCycleCreateWithoutDeviceInput, CultivationCycleUncheckedCreateWithoutDeviceInput>
  }

  export type CultivationCycleUpdateWithWhereUniqueWithoutDeviceInput = {
    where: CultivationCycleWhereUniqueInput
    data: XOR<CultivationCycleUpdateWithoutDeviceInput, CultivationCycleUncheckedUpdateWithoutDeviceInput>
  }

  export type CultivationCycleUpdateManyWithWhereWithoutDeviceInput = {
    where: CultivationCycleScalarWhereInput
    data: XOR<CultivationCycleUpdateManyMutationInput, CultivationCycleUncheckedUpdateManyWithoutDeviceInput>
  }

  export type CultivationCycleScalarWhereInput = {
    AND?: CultivationCycleScalarWhereInput | CultivationCycleScalarWhereInput[]
    OR?: CultivationCycleScalarWhereInput[]
    NOT?: CultivationCycleScalarWhereInput | CultivationCycleScalarWhereInput[]
    id?: StringFilter<"CultivationCycle"> | string
    deviceId?: StringFilter<"CultivationCycle"> | string
    name?: StringNullableFilter<"CultivationCycle"> | string | null
    mushroomType?: StringFilter<"CultivationCycle"> | string
    strain?: StringNullableFilter<"CultivationCycle"> | string | null
    baglogCount?: IntNullableFilter<"CultivationCycle"> | number | null
    startedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    expectedEndedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"CultivationCycle"> | Date | string | null
    status?: StringFilter<"CultivationCycle"> | string
    notes?: StringNullableFilter<"CultivationCycle"> | string | null
    createdAt?: DateTimeFilter<"CultivationCycle"> | Date | string
    updatedAt?: DateTimeFilter<"CultivationCycle"> | Date | string
  }

  export type OtaLogUpsertWithWhereUniqueWithoutDeviceInput = {
    where: OtaLogWhereUniqueInput
    update: XOR<OtaLogUpdateWithoutDeviceInput, OtaLogUncheckedUpdateWithoutDeviceInput>
    create: XOR<OtaLogCreateWithoutDeviceInput, OtaLogUncheckedCreateWithoutDeviceInput>
  }

  export type OtaLogUpdateWithWhereUniqueWithoutDeviceInput = {
    where: OtaLogWhereUniqueInput
    data: XOR<OtaLogUpdateWithoutDeviceInput, OtaLogUncheckedUpdateWithoutDeviceInput>
  }

  export type OtaLogUpdateManyWithWhereWithoutDeviceInput = {
    where: OtaLogScalarWhereInput
    data: XOR<OtaLogUpdateManyMutationInput, OtaLogUncheckedUpdateManyWithoutDeviceInput>
  }

  export type OtaLogScalarWhereInput = {
    AND?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
    OR?: OtaLogScalarWhereInput[]
    NOT?: OtaLogScalarWhereInput | OtaLogScalarWhereInput[]
    id?: StringFilter<"OtaLog"> | string
    deviceId?: StringNullableFilter<"OtaLog"> | string | null
    deviceSerialNumber?: StringNullableFilter<"OtaLog"> | string | null
    firmwareId?: StringNullableFilter<"OtaLog"> | string | null
    firmwareVersion?: StringFilter<"OtaLog"> | string
    firmwareUrl?: StringFilter<"OtaLog"> | string
    checksumSha256?: StringNullableFilter<"OtaLog"> | string | null
    isBroadcast?: BoolFilter<"OtaLog"> | boolean
    status?: StringFilter<"OtaLog"> | string
    triggeredById?: StringNullableFilter<"OtaLog"> | string | null
    notes?: StringNullableFilter<"OtaLog"> | string | null
    createdAt?: DateTimeFilter<"OtaLog"> | Date | string
  }

  export type DeviceCreateWithoutSettingInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSettingInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSettingInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSettingInput, DeviceUncheckedCreateWithoutSettingInput>
  }

  export type DeviceUpsertWithoutSettingInput = {
    update: XOR<DeviceUpdateWithoutSettingInput, DeviceUncheckedUpdateWithoutSettingInput>
    create: XOR<DeviceCreateWithoutSettingInput, DeviceUncheckedCreateWithoutSettingInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSettingInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSettingInput, DeviceUncheckedUpdateWithoutSettingInput>
  }

  export type DeviceUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutSensorReadingsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSensorReadingsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSensorReadingsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSensorReadingsInput, DeviceUncheckedCreateWithoutSensorReadingsInput>
  }

  export type DeviceUpsertWithoutSensorReadingsInput = {
    update: XOR<DeviceUpdateWithoutSensorReadingsInput, DeviceUncheckedUpdateWithoutSensorReadingsInput>
    create: XOR<DeviceCreateWithoutSensorReadingsInput, DeviceUncheckedCreateWithoutSensorReadingsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSensorReadingsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSensorReadingsInput, DeviceUncheckedUpdateWithoutSensorReadingsInput>
  }

  export type DeviceUpdateWithoutSensorReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSensorReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutActuatorsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutActuatorsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutActuatorsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutActuatorsInput, DeviceUncheckedCreateWithoutActuatorsInput>
  }

  export type ControlLogCreateWithoutActuatorInput = {
    id?: bigint | number
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
    device: DeviceCreateNestedOneWithoutControlLogsInput
    user?: UserCreateNestedOneWithoutControlLogsInput
  }

  export type ControlLogUncheckedCreateWithoutActuatorInput = {
    id?: bigint | number
    deviceId: string
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ControlLogCreateOrConnectWithoutActuatorInput = {
    where: ControlLogWhereUniqueInput
    create: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput>
  }

  export type ControlLogCreateManyActuatorInputEnvelope = {
    data: ControlLogCreateManyActuatorInput | ControlLogCreateManyActuatorInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutActuatorInput = {
    id?: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutSchedulesInput
    createdBy: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutActuatorInput = {
    id?: string
    deviceId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutActuatorInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput>
  }

  export type ScheduleCreateManyActuatorInputEnvelope = {
    data: ScheduleCreateManyActuatorInput | ScheduleCreateManyActuatorInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithoutActuatorsInput = {
    update: XOR<DeviceUpdateWithoutActuatorsInput, DeviceUncheckedUpdateWithoutActuatorsInput>
    create: XOR<DeviceCreateWithoutActuatorsInput, DeviceUncheckedCreateWithoutActuatorsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutActuatorsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutActuatorsInput, DeviceUncheckedUpdateWithoutActuatorsInput>
  }

  export type DeviceUpdateWithoutActuatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutActuatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ControlLogUpsertWithWhereUniqueWithoutActuatorInput = {
    where: ControlLogWhereUniqueInput
    update: XOR<ControlLogUpdateWithoutActuatorInput, ControlLogUncheckedUpdateWithoutActuatorInput>
    create: XOR<ControlLogCreateWithoutActuatorInput, ControlLogUncheckedCreateWithoutActuatorInput>
  }

  export type ControlLogUpdateWithWhereUniqueWithoutActuatorInput = {
    where: ControlLogWhereUniqueInput
    data: XOR<ControlLogUpdateWithoutActuatorInput, ControlLogUncheckedUpdateWithoutActuatorInput>
  }

  export type ControlLogUpdateManyWithWhereWithoutActuatorInput = {
    where: ControlLogScalarWhereInput
    data: XOR<ControlLogUpdateManyMutationInput, ControlLogUncheckedUpdateManyWithoutActuatorInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutActuatorInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutActuatorInput, ScheduleUncheckedUpdateWithoutActuatorInput>
    create: XOR<ScheduleCreateWithoutActuatorInput, ScheduleUncheckedCreateWithoutActuatorInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutActuatorInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutActuatorInput, ScheduleUncheckedUpdateWithoutActuatorInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutActuatorInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutActuatorInput>
  }

  export type DeviceCreateWithoutControlLogsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutControlLogsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutControlLogsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutControlLogsInput, DeviceUncheckedCreateWithoutControlLogsInput>
  }

  export type ActuatorCreateWithoutControlLogsInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutActuatorsInput
    schedules?: ScheduleCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorUncheckedCreateWithoutControlLogsInput = {
    id?: string
    deviceId: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorCreateOrConnectWithoutControlLogsInput = {
    where: ActuatorWhereUniqueInput
    create: XOR<ActuatorCreateWithoutControlLogsInput, ActuatorUncheckedCreateWithoutControlLogsInput>
  }

  export type UserCreateWithoutControlLogsInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutControlLogsInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutControlLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutControlLogsInput, UserUncheckedCreateWithoutControlLogsInput>
  }

  export type DeviceUpsertWithoutControlLogsInput = {
    update: XOR<DeviceUpdateWithoutControlLogsInput, DeviceUncheckedUpdateWithoutControlLogsInput>
    create: XOR<DeviceCreateWithoutControlLogsInput, DeviceUncheckedCreateWithoutControlLogsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutControlLogsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutControlLogsInput, DeviceUncheckedUpdateWithoutControlLogsInput>
  }

  export type DeviceUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ActuatorUpsertWithoutControlLogsInput = {
    update: XOR<ActuatorUpdateWithoutControlLogsInput, ActuatorUncheckedUpdateWithoutControlLogsInput>
    create: XOR<ActuatorCreateWithoutControlLogsInput, ActuatorUncheckedCreateWithoutControlLogsInput>
    where?: ActuatorWhereInput
  }

  export type ActuatorUpdateToOneWithWhereWithoutControlLogsInput = {
    where?: ActuatorWhereInput
    data: XOR<ActuatorUpdateWithoutControlLogsInput, ActuatorUncheckedUpdateWithoutControlLogsInput>
  }

  export type ActuatorUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutActuatorsNestedInput
    schedules?: ScheduleUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorUncheckedUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutActuatorNestedInput
  }

  export type UserUpsertWithoutControlLogsInput = {
    update: XOR<UserUpdateWithoutControlLogsInput, UserUncheckedUpdateWithoutControlLogsInput>
    create: XOR<UserCreateWithoutControlLogsInput, UserUncheckedCreateWithoutControlLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutControlLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutControlLogsInput, UserUncheckedUpdateWithoutControlLogsInput>
  }

  export type UserUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutControlLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DeviceCreateWithoutSchedulesInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSchedulesInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSchedulesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSchedulesInput, DeviceUncheckedCreateWithoutSchedulesInput>
  }

  export type ActuatorCreateWithoutSchedulesInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutActuatorsInput
    controlLogs?: ControlLogCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorUncheckedCreateWithoutSchedulesInput = {
    id?: string
    deviceId: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutActuatorInput
  }

  export type ActuatorCreateOrConnectWithoutSchedulesInput = {
    where: ActuatorWhereUniqueInput
    create: XOR<ActuatorCreateWithoutSchedulesInput, ActuatorUncheckedCreateWithoutSchedulesInput>
  }

  export type UserCreateWithoutSchedulesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulesInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    firmwares?: FirmwareUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
  }

  export type DeviceUpsertWithoutSchedulesInput = {
    update: XOR<DeviceUpdateWithoutSchedulesInput, DeviceUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DeviceCreateWithoutSchedulesInput, DeviceUncheckedCreateWithoutSchedulesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSchedulesInput, DeviceUncheckedUpdateWithoutSchedulesInput>
  }

  export type DeviceUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ActuatorUpsertWithoutSchedulesInput = {
    update: XOR<ActuatorUpdateWithoutSchedulesInput, ActuatorUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ActuatorCreateWithoutSchedulesInput, ActuatorUncheckedCreateWithoutSchedulesInput>
    where?: ActuatorWhereInput
  }

  export type ActuatorUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ActuatorWhereInput
    data: XOR<ActuatorUpdateWithoutSchedulesInput, ActuatorUncheckedUpdateWithoutSchedulesInput>
  }

  export type ActuatorUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutActuatorsNestedInput
    controlLogs?: ControlLogUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controlLogs?: ControlLogUncheckedUpdateManyWithoutActuatorNestedInput
  }

  export type UserUpsertWithoutSchedulesInput = {
    update: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceCreateWithoutCultivationCyclesInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutCultivationCyclesInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    otaLogs?: OtaLogUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutCultivationCyclesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutCultivationCyclesInput, DeviceUncheckedCreateWithoutCultivationCyclesInput>
  }

  export type HarvestRecordCreateWithoutCycleInput = {
    id?: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HarvestRecordUncheckedCreateWithoutCycleInput = {
    id?: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HarvestRecordCreateOrConnectWithoutCycleInput = {
    where: HarvestRecordWhereUniqueInput
    create: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput>
  }

  export type HarvestRecordCreateManyCycleInputEnvelope = {
    data: HarvestRecordCreateManyCycleInput | HarvestRecordCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithoutCultivationCyclesInput = {
    update: XOR<DeviceUpdateWithoutCultivationCyclesInput, DeviceUncheckedUpdateWithoutCultivationCyclesInput>
    create: XOR<DeviceCreateWithoutCultivationCyclesInput, DeviceUncheckedCreateWithoutCultivationCyclesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutCultivationCyclesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutCultivationCyclesInput, DeviceUncheckedUpdateWithoutCultivationCyclesInput>
  }

  export type DeviceUpdateWithoutCultivationCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutCultivationCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type HarvestRecordUpsertWithWhereUniqueWithoutCycleInput = {
    where: HarvestRecordWhereUniqueInput
    update: XOR<HarvestRecordUpdateWithoutCycleInput, HarvestRecordUncheckedUpdateWithoutCycleInput>
    create: XOR<HarvestRecordCreateWithoutCycleInput, HarvestRecordUncheckedCreateWithoutCycleInput>
  }

  export type HarvestRecordUpdateWithWhereUniqueWithoutCycleInput = {
    where: HarvestRecordWhereUniqueInput
    data: XOR<HarvestRecordUpdateWithoutCycleInput, HarvestRecordUncheckedUpdateWithoutCycleInput>
  }

  export type HarvestRecordUpdateManyWithWhereWithoutCycleInput = {
    where: HarvestRecordScalarWhereInput
    data: XOR<HarvestRecordUpdateManyMutationInput, HarvestRecordUncheckedUpdateManyWithoutCycleInput>
  }

  export type HarvestRecordScalarWhereInput = {
    AND?: HarvestRecordScalarWhereInput | HarvestRecordScalarWhereInput[]
    OR?: HarvestRecordScalarWhereInput[]
    NOT?: HarvestRecordScalarWhereInput | HarvestRecordScalarWhereInput[]
    id?: StringFilter<"HarvestRecord"> | string
    cycleId?: StringFilter<"HarvestRecord"> | string
    harvestedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    weightKg?: DecimalFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalNullableFilter<"HarvestRecord"> | Decimal | DecimalJsLike | number | string | null
    grade?: StringNullableFilter<"HarvestRecord"> | string | null
    notes?: StringNullableFilter<"HarvestRecord"> | string | null
    createdAt?: DateTimeFilter<"HarvestRecord"> | Date | string
    updatedAt?: DateTimeFilter<"HarvestRecord"> | Date | string
  }

  export type CultivationCycleCreateWithoutHarvestsInput = {
    id?: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutCultivationCyclesInput
  }

  export type CultivationCycleUncheckedCreateWithoutHarvestsInput = {
    id?: string
    deviceId: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultivationCycleCreateOrConnectWithoutHarvestsInput = {
    where: CultivationCycleWhereUniqueInput
    create: XOR<CultivationCycleCreateWithoutHarvestsInput, CultivationCycleUncheckedCreateWithoutHarvestsInput>
  }

  export type CultivationCycleUpsertWithoutHarvestsInput = {
    update: XOR<CultivationCycleUpdateWithoutHarvestsInput, CultivationCycleUncheckedUpdateWithoutHarvestsInput>
    create: XOR<CultivationCycleCreateWithoutHarvestsInput, CultivationCycleUncheckedCreateWithoutHarvestsInput>
    where?: CultivationCycleWhereInput
  }

  export type CultivationCycleUpdateToOneWithWhereWithoutHarvestsInput = {
    where?: CultivationCycleWhereInput
    data: XOR<CultivationCycleUpdateWithoutHarvestsInput, CultivationCycleUncheckedUpdateWithoutHarvestsInput>
  }

  export type CultivationCycleUpdateWithoutHarvestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutCultivationCyclesNestedInput
  }

  export type CultivationCycleUncheckedUpdateWithoutHarvestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFirmwaresInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    devices?: DeviceCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFirmwaresInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    createdById?: string | null
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    devices?: DeviceUncheckedCreateNestedManyWithoutFarmerInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFirmwaresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFirmwaresInput, UserUncheckedCreateWithoutFirmwaresInput>
  }

  export type OtaLogCreateWithoutFirmwareInput = {
    id?: string
    deviceSerialNumber?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
    device?: DeviceCreateNestedOneWithoutOtaLogsInput
  }

  export type OtaLogUncheckedCreateWithoutFirmwareInput = {
    id?: string
    deviceId?: string | null
    deviceSerialNumber?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OtaLogCreateOrConnectWithoutFirmwareInput = {
    where: OtaLogWhereUniqueInput
    create: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput>
  }

  export type OtaLogCreateManyFirmwareInputEnvelope = {
    data: OtaLogCreateManyFirmwareInput | OtaLogCreateManyFirmwareInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFirmwaresInput = {
    update: XOR<UserUpdateWithoutFirmwaresInput, UserUncheckedUpdateWithoutFirmwaresInput>
    create: XOR<UserCreateWithoutFirmwaresInput, UserUncheckedCreateWithoutFirmwaresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFirmwaresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFirmwaresInput, UserUncheckedUpdateWithoutFirmwaresInput>
  }

  export type UserUpdateWithoutFirmwaresInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFirmwaresInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type OtaLogUpsertWithWhereUniqueWithoutFirmwareInput = {
    where: OtaLogWhereUniqueInput
    update: XOR<OtaLogUpdateWithoutFirmwareInput, OtaLogUncheckedUpdateWithoutFirmwareInput>
    create: XOR<OtaLogCreateWithoutFirmwareInput, OtaLogUncheckedCreateWithoutFirmwareInput>
  }

  export type OtaLogUpdateWithWhereUniqueWithoutFirmwareInput = {
    where: OtaLogWhereUniqueInput
    data: XOR<OtaLogUpdateWithoutFirmwareInput, OtaLogUncheckedUpdateWithoutFirmwareInput>
  }

  export type OtaLogUpdateManyWithWhereWithoutFirmwareInput = {
    where: OtaLogScalarWhereInput
    data: XOR<OtaLogUpdateManyMutationInput, OtaLogUncheckedUpdateManyWithoutFirmwareInput>
  }

  export type DeviceCreateWithoutOtaLogsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer?: UserCreateNestedOneWithoutDevicesInput
    createdBy?: UserCreateNestedOneWithoutCreatedDevicesInput
    setting?: DeviceSettingCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutOtaLogsInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setting?: DeviceSettingUncheckedCreateNestedOneWithoutDeviceInput
    sensorReadings?: SensorReadingUncheckedCreateNestedManyWithoutDeviceInput
    actuators?: ActuatorUncheckedCreateNestedManyWithoutDeviceInput
    controlLogs?: ControlLogUncheckedCreateNestedManyWithoutDeviceInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDeviceInput
    cultivationCycles?: CultivationCycleUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutOtaLogsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutOtaLogsInput, DeviceUncheckedCreateWithoutOtaLogsInput>
  }

  export type FirmwareCreateWithoutOtaLogsInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutFirmwaresInput
  }

  export type FirmwareUncheckedCreateWithoutOtaLogsInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FirmwareCreateOrConnectWithoutOtaLogsInput = {
    where: FirmwareWhereUniqueInput
    create: XOR<FirmwareCreateWithoutOtaLogsInput, FirmwareUncheckedCreateWithoutOtaLogsInput>
  }

  export type DeviceUpsertWithoutOtaLogsInput = {
    update: XOR<DeviceUpdateWithoutOtaLogsInput, DeviceUncheckedUpdateWithoutOtaLogsInput>
    create: XOR<DeviceCreateWithoutOtaLogsInput, DeviceUncheckedCreateWithoutOtaLogsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutOtaLogsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutOtaLogsInput, DeviceUncheckedUpdateWithoutOtaLogsInput>
  }

  export type DeviceUpdateWithoutOtaLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutOtaLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type FirmwareUpsertWithoutOtaLogsInput = {
    update: XOR<FirmwareUpdateWithoutOtaLogsInput, FirmwareUncheckedUpdateWithoutOtaLogsInput>
    create: XOR<FirmwareCreateWithoutOtaLogsInput, FirmwareUncheckedCreateWithoutOtaLogsInput>
    where?: FirmwareWhereInput
  }

  export type FirmwareUpdateToOneWithWhereWithoutOtaLogsInput = {
    where?: FirmwareWhereInput
    data: XOR<FirmwareUpdateWithoutOtaLogsInput, FirmwareUncheckedUpdateWithoutOtaLogsInput>
  }

  export type FirmwareUpdateWithoutOtaLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutFirmwaresNestedInput
  }

  export type FirmwareUncheckedUpdateWithoutOtaLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCreatedByInput = {
    id?: string
    fullName?: string | null
    phoneNumber: string
    email?: string | null
    passwordHash?: string | null
    farmName?: string | null
    farmAddress?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profileCompleted?: boolean
    mustChangePassword?: boolean
    activatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    fcmToken?: string | null
    lastFcmTokenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyFarmerInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    createdById?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyCreatedByInput = {
    id?: string
    serialNumber: string
    activationCode: string
    name?: string | null
    model: string
    hardwareVersion?: string | null
    firmwareVersion?: string | null
    macAddress?: string | null
    status?: $Enums.DeviceStatus
    ownershipType?: $Enums.OwnershipType
    controlMode?: $Enums.ControlMode
    farmerId?: string | null
    activatedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rssiDbm?: number | null
    uptimeMs?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FirmwareCreateManyCreatedByInput = {
    id?: string
    version: string
    filename: string
    originalName: string
    filePath: string
    fileSize: number
    checksumSha256: string
    hardwareVersion?: string
    changelog?: string | null
    isLatest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlLogCreateManyUserInput = {
    id?: bigint | number
    deviceId: string
    actuatorId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ScheduleCreateManyCreatedByInput = {
    id?: string
    deviceId: string
    actuatorId: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutFarmerNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    firmwares?: FirmwareUncheckedUpdateManyWithoutCreatedByNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    farmName?: NullableStringFieldUpdateOperationsInput | string | null
    farmAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastFcmTokenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneWithoutDevicesNestedInput
    setting?: DeviceSettingUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setting?: DeviceSettingUncheckedUpdateOneWithoutDeviceNestedInput
    sensorReadings?: SensorReadingUncheckedUpdateManyWithoutDeviceNestedInput
    actuators?: ActuatorUncheckedUpdateManyWithoutDeviceNestedInput
    controlLogs?: ControlLogUncheckedUpdateManyWithoutDeviceNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDeviceNestedInput
    cultivationCycles?: CultivationCycleUncheckedUpdateManyWithoutDeviceNestedInput
    otaLogs?: OtaLogUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    activationCode?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    macAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    controlMode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    farmerId?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rssiDbm?: NullableIntFieldUpdateOperationsInput | number | null
    uptimeMs?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FirmwareUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otaLogs?: OtaLogUpdateManyWithoutFirmwareNestedInput
  }

  export type FirmwareUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otaLogs?: OtaLogUncheckedUpdateManyWithoutFirmwareNestedInput
  }

  export type FirmwareUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    checksumSha256?: StringFieldUpdateOperationsInput | string
    hardwareVersion?: StringFieldUpdateOperationsInput | string
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    isLatest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlLogUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutControlLogsNestedInput
    actuator?: ActuatorUpdateOneWithoutControlLogsNestedInput
  }

  export type ControlLogUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ControlLogUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSchedulesNestedInput
    actuator?: ActuatorUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateManyDeviceInput = {
    id?: bigint | number
    temperature: Decimal | DecimalJsLike | number | string
    humidity: Decimal | DecimalJsLike | number | string
    recordedAt?: Date | string
  }

  export type ActuatorCreateManyDeviceInput = {
    id?: string
    name: string
    type: $Enums.ActuatorType
    channel: number
    state?: $Enums.ActuatorState
    isEnabled?: boolean
    lastChangedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlLogCreateManyDeviceInput = {
    id?: bigint | number
    actuatorId?: string | null
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ScheduleCreateManyDeviceInput = {
    id?: string
    actuatorId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CultivationCycleCreateManyDeviceInput = {
    id?: string
    name?: string | null
    mushroomType?: string
    strain?: string | null
    baglogCount?: number | null
    startedAt?: Date | string
    expectedEndedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtaLogCreateManyDeviceInput = {
    id?: string
    deviceSerialNumber?: string | null
    firmwareId?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SensorReadingUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingUncheckedUpdateManyWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActuatorUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controlLogs?: ControlLogUpdateManyWithoutActuatorNestedInput
    schedules?: ScheduleUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controlLogs?: ControlLogUncheckedUpdateManyWithoutActuatorNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutActuatorNestedInput
  }

  export type ActuatorUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumActuatorTypeFieldUpdateOperationsInput | $Enums.ActuatorType
    channel?: IntFieldUpdateOperationsInput | number
    state?: EnumActuatorStateFieldUpdateOperationsInput | $Enums.ActuatorState
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlLogUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actuator?: ActuatorUpdateOneWithoutControlLogsNestedInput
    user?: UserUpdateOneWithoutControlLogsNestedInput
  }

  export type ControlLogUncheckedUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ControlLogUncheckedUpdateManyWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actuatorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actuator?: ActuatorUpdateOneRequiredWithoutSchedulesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actuatorId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CultivationCycleUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    harvests?: HarvestRecordUpdateManyWithoutCycleNestedInput
  }

  export type CultivationCycleUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    harvests?: HarvestRecordUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CultivationCycleUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mushroomType?: StringFieldUpdateOperationsInput | string
    strain?: NullableStringFieldUpdateOperationsInput | string | null
    baglogCount?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedEndedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firmware?: FirmwareUpdateOneWithoutOtaLogsNestedInput
  }

  export type OtaLogUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareId?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareId?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlLogCreateManyActuatorInput = {
    id?: bigint | number
    deviceId: string
    userId?: string | null
    action: $Enums.ControlAction
    source: $Enums.ControlSource
    mode: $Enums.ControlMode
    success?: boolean
    message?: string | null
    requestedAt?: Date | string
    executedAt?: Date | string | null
  }

  export type ScheduleCreateManyActuatorInput = {
    id?: string
    deviceId: string
    createdById: string
    name: string
    action?: $Enums.ControlAction
    startMinute: number
    durationSeconds?: number | null
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlLogUpdateWithoutActuatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutControlLogsNestedInput
    user?: UserUpdateOneWithoutControlLogsNestedInput
  }

  export type ControlLogUncheckedUpdateWithoutActuatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ControlLogUncheckedUpdateManyWithoutActuatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    deviceId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    source?: EnumControlSourceFieldUpdateOperationsInput | $Enums.ControlSource
    mode?: EnumControlModeFieldUpdateOperationsInput | $Enums.ControlMode
    success?: BoolFieldUpdateOperationsInput | boolean
    message?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUpdateWithoutActuatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSchedulesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutActuatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutActuatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: EnumControlActionFieldUpdateOperationsInput | $Enums.ControlAction
    startMinute?: IntFieldUpdateOperationsInput | number
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordCreateManyCycleInput = {
    id?: string
    harvestedAt?: Date | string
    weightKg: Decimal | DecimalJsLike | number | string
    pricePerKg?: Decimal | DecimalJsLike | number | string | null
    grade?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HarvestRecordUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HarvestRecordUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    harvestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogCreateManyFirmwareInput = {
    id?: string
    deviceId?: string | null
    deviceSerialNumber?: string | null
    firmwareVersion: string
    firmwareUrl: string
    checksumSha256?: string | null
    isBroadcast?: boolean
    status?: string
    triggeredById?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OtaLogUpdateWithoutFirmwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutOtaLogsNestedInput
  }

  export type OtaLogUncheckedUpdateWithoutFirmwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtaLogUncheckedUpdateManyWithoutFirmwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: StringFieldUpdateOperationsInput | string
    firmwareUrl?: StringFieldUpdateOperationsInput | string
    checksumSha256?: NullableStringFieldUpdateOperationsInput | string | null
    isBroadcast?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}