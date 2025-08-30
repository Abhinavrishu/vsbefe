
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model LawyerDetails
 * 
 */
export type LawyerDetails = $Result.DefaultSelection<Prisma.$LawyerDetailsPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatDeletion
 * 
 */
export type ChatDeletion = $Result.DefaultSelection<Prisma.$ChatDeletionPayload>
/**
 * Model ChatRead
 * 
 */
export type ChatRead = $Result.DefaultSelection<Prisma.$ChatReadPayload>
/**
 * Model Call
 * 
 */
export type Call = $Result.DefaultSelection<Prisma.$CallPayload>
/**
 * Model CallHistory
 * 
 */
export type CallHistory = $Result.DefaultSelection<Prisma.$CallHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  CLIENT: 'CLIENT',
  LAWYER: 'LAWYER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.lawyerDetails`: Exposes CRUD operations for the **LawyerDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerDetails
    * const lawyerDetails = await prisma.lawyerDetails.findMany()
    * ```
    */
  get lawyerDetails(): Prisma.LawyerDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatDeletion`: Exposes CRUD operations for the **ChatDeletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatDeletions
    * const chatDeletions = await prisma.chatDeletion.findMany()
    * ```
    */
  get chatDeletion(): Prisma.ChatDeletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRead`: Exposes CRUD operations for the **ChatRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatReads
    * const chatReads = await prisma.chatRead.findMany()
    * ```
    */
  get chatRead(): Prisma.ChatReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.call`: Exposes CRUD operations for the **Call** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calls
    * const calls = await prisma.call.findMany()
    * ```
    */
  get call(): Prisma.CallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callHistory`: Exposes CRUD operations for the **CallHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallHistories
    * const callHistories = await prisma.callHistory.findMany()
    * ```
    */
  get callHistory(): Prisma.CallHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    LawyerDetails: 'LawyerDetails',
    Chat: 'Chat',
    ChatDeletion: 'ChatDeletion',
    ChatRead: 'ChatRead',
    Call: 'Call',
    CallHistory: 'CallHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "lawyerDetails" | "chat" | "chatDeletion" | "chatRead" | "call" | "callHistory"
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
      LawyerDetails: {
        payload: Prisma.$LawyerDetailsPayload<ExtArgs>
        fields: Prisma.LawyerDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          findFirst: {
            args: Prisma.LawyerDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          findMany: {
            args: Prisma.LawyerDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>[]
          }
          create: {
            args: Prisma.LawyerDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          createMany: {
            args: Prisma.LawyerDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>[]
          }
          delete: {
            args: Prisma.LawyerDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          update: {
            args: Prisma.LawyerDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>[]
          }
          upsert: {
            args: Prisma.LawyerDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDetailsPayload>
          }
          aggregate: {
            args: Prisma.LawyerDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerDetails>
          }
          groupBy: {
            args: Prisma.LawyerDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerDetailsCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatDeletion: {
        payload: Prisma.$ChatDeletionPayload<ExtArgs>
        fields: Prisma.ChatDeletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatDeletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatDeletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          findFirst: {
            args: Prisma.ChatDeletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatDeletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          findMany: {
            args: Prisma.ChatDeletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>[]
          }
          create: {
            args: Prisma.ChatDeletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          createMany: {
            args: Prisma.ChatDeletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatDeletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>[]
          }
          delete: {
            args: Prisma.ChatDeletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          update: {
            args: Prisma.ChatDeletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatDeletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatDeletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>[]
          }
          upsert: {
            args: Prisma.ChatDeletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatDeletionPayload>
          }
          aggregate: {
            args: Prisma.ChatDeletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatDeletion>
          }
          groupBy: {
            args: Prisma.ChatDeletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatDeletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatDeletionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatDeletionCountAggregateOutputType> | number
          }
        }
      }
      ChatRead: {
        payload: Prisma.$ChatReadPayload<ExtArgs>
        fields: Prisma.ChatReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          findFirst: {
            args: Prisma.ChatReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          findMany: {
            args: Prisma.ChatReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>[]
          }
          create: {
            args: Prisma.ChatReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          createMany: {
            args: Prisma.ChatReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>[]
          }
          delete: {
            args: Prisma.ChatReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          update: {
            args: Prisma.ChatReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          deleteMany: {
            args: Prisma.ChatReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>[]
          }
          upsert: {
            args: Prisma.ChatReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReadPayload>
          }
          aggregate: {
            args: Prisma.ChatReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRead>
          }
          groupBy: {
            args: Prisma.ChatReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatReadCountArgs<ExtArgs>
            result: $Utils.Optional<ChatReadCountAggregateOutputType> | number
          }
        }
      }
      Call: {
        payload: Prisma.$CallPayload<ExtArgs>
        fields: Prisma.CallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findFirst: {
            args: Prisma.CallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findMany: {
            args: Prisma.CallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          create: {
            args: Prisma.CallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          createMany: {
            args: Prisma.CallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          delete: {
            args: Prisma.CallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          update: {
            args: Prisma.CallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          deleteMany: {
            args: Prisma.CallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          upsert: {
            args: Prisma.CallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          aggregate: {
            args: Prisma.CallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCall>
          }
          groupBy: {
            args: Prisma.CallGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallCountArgs<ExtArgs>
            result: $Utils.Optional<CallCountAggregateOutputType> | number
          }
        }
      }
      CallHistory: {
        payload: Prisma.$CallHistoryPayload<ExtArgs>
        fields: Prisma.CallHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findFirst: {
            args: Prisma.CallHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findMany: {
            args: Prisma.CallHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          create: {
            args: Prisma.CallHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          createMany: {
            args: Prisma.CallHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          delete: {
            args: Prisma.CallHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          update: {
            args: Prisma.CallHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CallHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          upsert: {
            args: Prisma.CallHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          aggregate: {
            args: Prisma.CallHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallHistory>
          }
          groupBy: {
            args: Prisma.CallHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    lawyerDetails?: LawyerDetailsOmit
    chat?: ChatOmit
    chatDeletion?: ChatDeletionOmit
    chatRead?: ChatReadOmit
    call?: CallOmit
    callHistory?: CallHistoryOmit
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
    clientCalls: number
    lawyerCalls: number
    sentChats: number
    receivedChats: number
    chatDeletions: number
    chatReads: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientCalls?: boolean | UserCountOutputTypeCountClientCallsArgs
    lawyerCalls?: boolean | UserCountOutputTypeCountLawyerCallsArgs
    sentChats?: boolean | UserCountOutputTypeCountSentChatsArgs
    receivedChats?: boolean | UserCountOutputTypeCountReceivedChatsArgs
    chatDeletions?: boolean | UserCountOutputTypeCountChatDeletionsArgs
    chatReads?: boolean | UserCountOutputTypeCountChatReadsArgs
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
  export type UserCountOutputTypeCountClientCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLawyerCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatDeletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatDeletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReadWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    deletedBy: number
    reads: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deletedBy?: boolean | ChatCountOutputTypeCountDeletedByArgs
    reads?: boolean | ChatCountOutputTypeCountReadsArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountDeletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatDeletionWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    lawyerHistory: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    lawyerHistory: number[]
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    profile: string | null
    refreshtoken: string | null
    isEmailVerified: boolean | null
    emailOtp: string | null
    emailOtpExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
    latitude: number | null
    longitude: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    profile: string | null
    refreshtoken: string | null
    isEmailVerified: boolean | null
    emailOtp: string | null
    emailOtpExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
    latitude: number | null
    longitude: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    profile: number
    refreshtoken: number
    isEmailVerified: number
    emailOtp: number
    emailOtpExpiry: number
    createdAt: number
    updatedAt: number
    role: number
    latitude: number
    longitude: number
    lawyerHistory: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    lawyerHistory?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    lawyerHistory?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    profile?: true
    refreshtoken?: true
    isEmailVerified?: true
    emailOtp?: true
    emailOtpExpiry?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    latitude?: true
    longitude?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    profile?: true
    refreshtoken?: true
    isEmailVerified?: true
    emailOtp?: true
    emailOtpExpiry?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    latitude?: true
    longitude?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    profile?: true
    refreshtoken?: true
    isEmailVerified?: true
    emailOtp?: true
    emailOtpExpiry?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    latitude?: true
    longitude?: true
    lawyerHistory?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    profile: string | null
    refreshtoken: string | null
    isEmailVerified: boolean
    emailOtp: string | null
    emailOtpExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    latitude: number | null
    longitude: number | null
    lawyerHistory: number[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    username?: boolean
    password?: boolean
    profile?: boolean
    refreshtoken?: boolean
    isEmailVerified?: boolean
    emailOtp?: boolean
    emailOtpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    latitude?: boolean
    longitude?: boolean
    lawyerHistory?: boolean
    lawyerDetails?: boolean | User$lawyerDetailsArgs<ExtArgs>
    clientCalls?: boolean | User$clientCallsArgs<ExtArgs>
    lawyerCalls?: boolean | User$lawyerCallsArgs<ExtArgs>
    sentChats?: boolean | User$sentChatsArgs<ExtArgs>
    receivedChats?: boolean | User$receivedChatsArgs<ExtArgs>
    chatDeletions?: boolean | User$chatDeletionsArgs<ExtArgs>
    chatReads?: boolean | User$chatReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profile?: boolean
    refreshtoken?: boolean
    isEmailVerified?: boolean
    emailOtp?: boolean
    emailOtpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    latitude?: boolean
    longitude?: boolean
    lawyerHistory?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profile?: boolean
    refreshtoken?: boolean
    isEmailVerified?: boolean
    emailOtp?: boolean
    emailOtpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    latitude?: boolean
    longitude?: boolean
    lawyerHistory?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profile?: boolean
    refreshtoken?: boolean
    isEmailVerified?: boolean
    emailOtp?: boolean
    emailOtpExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    latitude?: boolean
    longitude?: boolean
    lawyerHistory?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "profile" | "refreshtoken" | "isEmailVerified" | "emailOtp" | "emailOtpExpiry" | "createdAt" | "updatedAt" | "role" | "latitude" | "longitude" | "lawyerHistory", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyerDetails?: boolean | User$lawyerDetailsArgs<ExtArgs>
    clientCalls?: boolean | User$clientCallsArgs<ExtArgs>
    lawyerCalls?: boolean | User$lawyerCallsArgs<ExtArgs>
    sentChats?: boolean | User$sentChatsArgs<ExtArgs>
    receivedChats?: boolean | User$receivedChatsArgs<ExtArgs>
    chatDeletions?: boolean | User$chatDeletionsArgs<ExtArgs>
    chatReads?: boolean | User$chatReadsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lawyerDetails: Prisma.$LawyerDetailsPayload<ExtArgs> | null
      clientCalls: Prisma.$CallHistoryPayload<ExtArgs>[]
      lawyerCalls: Prisma.$CallHistoryPayload<ExtArgs>[]
      sentChats: Prisma.$ChatPayload<ExtArgs>[]
      receivedChats: Prisma.$ChatPayload<ExtArgs>[]
      chatDeletions: Prisma.$ChatDeletionPayload<ExtArgs>[]
      chatReads: Prisma.$ChatReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      profile: string | null
      refreshtoken: string | null
      isEmailVerified: boolean
      emailOtp: string | null
      emailOtpExpiry: Date | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
      latitude: number | null
      longitude: number | null
      lawyerHistory: number[]
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
    lawyerDetails<T extends User$lawyerDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$lawyerDetailsArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clientCalls<T extends User$clientCallsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lawyerCalls<T extends User$lawyerCallsArgs<ExtArgs> = {}>(args?: Subset<T, User$lawyerCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentChats<T extends User$sentChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedChats<T extends User$receivedChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatDeletions<T extends User$chatDeletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatDeletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatReads<T extends User$chatReadsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profile: FieldRef<"User", 'String'>
    readonly refreshtoken: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailOtp: FieldRef<"User", 'String'>
    readonly emailOtpExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly lawyerHistory: FieldRef<"User", 'Int[]'>
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
   * User.lawyerDetails
   */
  export type User$lawyerDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    where?: LawyerDetailsWhereInput
  }

  /**
   * User.clientCalls
   */
  export type User$clientCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    cursor?: CallHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * User.lawyerCalls
   */
  export type User$lawyerCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    cursor?: CallHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * User.sentChats
   */
  export type User$sentChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.receivedChats
   */
  export type User$receivedChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.chatDeletions
   */
  export type User$chatDeletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    where?: ChatDeletionWhereInput
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    cursor?: ChatDeletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatDeletionScalarFieldEnum | ChatDeletionScalarFieldEnum[]
  }

  /**
   * User.chatReads
   */
  export type User$chatReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    where?: ChatReadWhereInput
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    cursor?: ChatReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatReadScalarFieldEnum | ChatReadScalarFieldEnum[]
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
   * Model LawyerDetails
   */

  export type AggregateLawyerDetails = {
    _count: LawyerDetailsCountAggregateOutputType | null
    _avg: LawyerDetailsAvgAggregateOutputType | null
    _sum: LawyerDetailsSumAggregateOutputType | null
    _min: LawyerDetailsMinAggregateOutputType | null
    _max: LawyerDetailsMaxAggregateOutputType | null
  }

  export type LawyerDetailsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    experience: number | null
    fees: number | null
  }

  export type LawyerDetailsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    experience: number | null
    fees: number | null
  }

  export type LawyerDetailsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    specialization: string | null
    experience: number | null
    fees: number | null
    availability: boolean | null
  }

  export type LawyerDetailsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    specialization: string | null
    experience: number | null
    fees: number | null
    availability: boolean | null
  }

  export type LawyerDetailsCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    experience: number
    fees: number
    availability: number
    _all: number
  }


  export type LawyerDetailsAvgAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    fees?: true
  }

  export type LawyerDetailsSumAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    fees?: true
  }

  export type LawyerDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experience?: true
    fees?: true
    availability?: true
  }

  export type LawyerDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experience?: true
    fees?: true
    availability?: true
  }

  export type LawyerDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experience?: true
    fees?: true
    availability?: true
    _all?: true
  }

  export type LawyerDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerDetails to aggregate.
     */
    where?: LawyerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDetails to fetch.
     */
    orderBy?: LawyerDetailsOrderByWithRelationInput | LawyerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerDetails
    **/
    _count?: true | LawyerDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerDetailsMaxAggregateInputType
  }

  export type GetLawyerDetailsAggregateType<T extends LawyerDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerDetails[P]>
      : GetScalarType<T[P], AggregateLawyerDetails[P]>
  }




  export type LawyerDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerDetailsWhereInput
    orderBy?: LawyerDetailsOrderByWithAggregationInput | LawyerDetailsOrderByWithAggregationInput[]
    by: LawyerDetailsScalarFieldEnum[] | LawyerDetailsScalarFieldEnum
    having?: LawyerDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerDetailsCountAggregateInputType | true
    _avg?: LawyerDetailsAvgAggregateInputType
    _sum?: LawyerDetailsSumAggregateInputType
    _min?: LawyerDetailsMinAggregateInputType
    _max?: LawyerDetailsMaxAggregateInputType
  }

  export type LawyerDetailsGroupByOutputType = {
    id: number
    userId: number
    specialization: string | null
    experience: number | null
    fees: number | null
    availability: boolean
    _count: LawyerDetailsCountAggregateOutputType | null
    _avg: LawyerDetailsAvgAggregateOutputType | null
    _sum: LawyerDetailsSumAggregateOutputType | null
    _min: LawyerDetailsMinAggregateOutputType | null
    _max: LawyerDetailsMaxAggregateOutputType | null
  }

  type GetLawyerDetailsGroupByPayload<T extends LawyerDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerDetailsGroupByOutputType[P]>
        }
      >
    >


  export type LawyerDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experience?: boolean
    fees?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDetails"]>

  export type LawyerDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experience?: boolean
    fees?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDetails"]>

  export type LawyerDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experience?: boolean
    fees?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDetails"]>

  export type LawyerDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experience?: boolean
    fees?: boolean
    availability?: boolean
  }

  export type LawyerDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "experience" | "fees" | "availability", ExtArgs["result"]["lawyerDetails"]>
  export type LawyerDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LawyerDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LawyerDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LawyerDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      specialization: string | null
      experience: number | null
      fees: number | null
      availability: boolean
    }, ExtArgs["result"]["lawyerDetails"]>
    composites: {}
  }

  type LawyerDetailsGetPayload<S extends boolean | null | undefined | LawyerDetailsDefaultArgs> = $Result.GetResult<Prisma.$LawyerDetailsPayload, S>

  type LawyerDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerDetailsCountAggregateInputType | true
    }

  export interface LawyerDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerDetails'], meta: { name: 'LawyerDetails' } }
    /**
     * Find zero or one LawyerDetails that matches the filter.
     * @param {LawyerDetailsFindUniqueArgs} args - Arguments to find a LawyerDetails
     * @example
     * // Get one LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerDetailsFindUniqueArgs>(args: SelectSubset<T, LawyerDetailsFindUniqueArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerDetailsFindUniqueOrThrowArgs} args - Arguments to find a LawyerDetails
     * @example
     * // Get one LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsFindFirstArgs} args - Arguments to find a LawyerDetails
     * @example
     * // Get one LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerDetailsFindFirstArgs>(args?: SelectSubset<T, LawyerDetailsFindFirstArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsFindFirstOrThrowArgs} args - Arguments to find a LawyerDetails
     * @example
     * // Get one LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findMany()
     * 
     * // Get first 10 LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerDetailsWithIdOnly = await prisma.lawyerDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerDetailsFindManyArgs>(args?: SelectSubset<T, LawyerDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerDetails.
     * @param {LawyerDetailsCreateArgs} args - Arguments to create a LawyerDetails.
     * @example
     * // Create one LawyerDetails
     * const LawyerDetails = await prisma.lawyerDetails.create({
     *   data: {
     *     // ... data to create a LawyerDetails
     *   }
     * })
     * 
     */
    create<T extends LawyerDetailsCreateArgs>(args: SelectSubset<T, LawyerDetailsCreateArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerDetails.
     * @param {LawyerDetailsCreateManyArgs} args - Arguments to create many LawyerDetails.
     * @example
     * // Create many LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerDetailsCreateManyArgs>(args?: SelectSubset<T, LawyerDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerDetails and returns the data saved in the database.
     * @param {LawyerDetailsCreateManyAndReturnArgs} args - Arguments to create many LawyerDetails.
     * @example
     * // Create many LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerDetails and only return the `id`
     * const lawyerDetailsWithIdOnly = await prisma.lawyerDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerDetails.
     * @param {LawyerDetailsDeleteArgs} args - Arguments to delete one LawyerDetails.
     * @example
     * // Delete one LawyerDetails
     * const LawyerDetails = await prisma.lawyerDetails.delete({
     *   where: {
     *     // ... filter to delete one LawyerDetails
     *   }
     * })
     * 
     */
    delete<T extends LawyerDetailsDeleteArgs>(args: SelectSubset<T, LawyerDetailsDeleteArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerDetails.
     * @param {LawyerDetailsUpdateArgs} args - Arguments to update one LawyerDetails.
     * @example
     * // Update one LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerDetailsUpdateArgs>(args: SelectSubset<T, LawyerDetailsUpdateArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerDetails.
     * @param {LawyerDetailsDeleteManyArgs} args - Arguments to filter LawyerDetails to delete.
     * @example
     * // Delete a few LawyerDetails
     * const { count } = await prisma.lawyerDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerDetailsDeleteManyArgs>(args?: SelectSubset<T, LawyerDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerDetailsUpdateManyArgs>(args: SelectSubset<T, LawyerDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerDetails and returns the data updated in the database.
     * @param {LawyerDetailsUpdateManyAndReturnArgs} args - Arguments to update many LawyerDetails.
     * @example
     * // Update many LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerDetails and only return the `id`
     * const lawyerDetailsWithIdOnly = await prisma.lawyerDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerDetails.
     * @param {LawyerDetailsUpsertArgs} args - Arguments to update or create a LawyerDetails.
     * @example
     * // Update or create a LawyerDetails
     * const lawyerDetails = await prisma.lawyerDetails.upsert({
     *   create: {
     *     // ... data to create a LawyerDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerDetails we want to update
     *   }
     * })
     */
    upsert<T extends LawyerDetailsUpsertArgs>(args: SelectSubset<T, LawyerDetailsUpsertArgs<ExtArgs>>): Prisma__LawyerDetailsClient<$Result.GetResult<Prisma.$LawyerDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsCountArgs} args - Arguments to filter LawyerDetails to count.
     * @example
     * // Count the number of LawyerDetails
     * const count = await prisma.lawyerDetails.count({
     *   where: {
     *     // ... the filter for the LawyerDetails we want to count
     *   }
     * })
    **/
    count<T extends LawyerDetailsCountArgs>(
      args?: Subset<T, LawyerDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerDetailsAggregateArgs>(args: Subset<T, LawyerDetailsAggregateArgs>): Prisma.PrismaPromise<GetLawyerDetailsAggregateType<T>>

    /**
     * Group by LawyerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDetailsGroupByArgs} args - Group by arguments.
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
      T extends LawyerDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerDetailsGroupByArgs['orderBy'] }
        : { orderBy?: LawyerDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerDetails model
   */
  readonly fields: LawyerDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerDetails model
   */
  interface LawyerDetailsFieldRefs {
    readonly id: FieldRef<"LawyerDetails", 'Int'>
    readonly userId: FieldRef<"LawyerDetails", 'Int'>
    readonly specialization: FieldRef<"LawyerDetails", 'String'>
    readonly experience: FieldRef<"LawyerDetails", 'Int'>
    readonly fees: FieldRef<"LawyerDetails", 'Float'>
    readonly availability: FieldRef<"LawyerDetails", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LawyerDetails findUnique
   */
  export type LawyerDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDetails to fetch.
     */
    where: LawyerDetailsWhereUniqueInput
  }

  /**
   * LawyerDetails findUniqueOrThrow
   */
  export type LawyerDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDetails to fetch.
     */
    where: LawyerDetailsWhereUniqueInput
  }

  /**
   * LawyerDetails findFirst
   */
  export type LawyerDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDetails to fetch.
     */
    where?: LawyerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDetails to fetch.
     */
    orderBy?: LawyerDetailsOrderByWithRelationInput | LawyerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerDetails.
     */
    cursor?: LawyerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerDetails.
     */
    distinct?: LawyerDetailsScalarFieldEnum | LawyerDetailsScalarFieldEnum[]
  }

  /**
   * LawyerDetails findFirstOrThrow
   */
  export type LawyerDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDetails to fetch.
     */
    where?: LawyerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDetails to fetch.
     */
    orderBy?: LawyerDetailsOrderByWithRelationInput | LawyerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerDetails.
     */
    cursor?: LawyerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerDetails.
     */
    distinct?: LawyerDetailsScalarFieldEnum | LawyerDetailsScalarFieldEnum[]
  }

  /**
   * LawyerDetails findMany
   */
  export type LawyerDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDetails to fetch.
     */
    where?: LawyerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDetails to fetch.
     */
    orderBy?: LawyerDetailsOrderByWithRelationInput | LawyerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerDetails.
     */
    cursor?: LawyerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDetails.
     */
    skip?: number
    distinct?: LawyerDetailsScalarFieldEnum | LawyerDetailsScalarFieldEnum[]
  }

  /**
   * LawyerDetails create
   */
  export type LawyerDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerDetails.
     */
    data: XOR<LawyerDetailsCreateInput, LawyerDetailsUncheckedCreateInput>
  }

  /**
   * LawyerDetails createMany
   */
  export type LawyerDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerDetails.
     */
    data: LawyerDetailsCreateManyInput | LawyerDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LawyerDetails createManyAndReturn
   */
  export type LawyerDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerDetails.
     */
    data: LawyerDetailsCreateManyInput | LawyerDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerDetails update
   */
  export type LawyerDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerDetails.
     */
    data: XOR<LawyerDetailsUpdateInput, LawyerDetailsUncheckedUpdateInput>
    /**
     * Choose, which LawyerDetails to update.
     */
    where: LawyerDetailsWhereUniqueInput
  }

  /**
   * LawyerDetails updateMany
   */
  export type LawyerDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerDetails.
     */
    data: XOR<LawyerDetailsUpdateManyMutationInput, LawyerDetailsUncheckedUpdateManyInput>
    /**
     * Filter which LawyerDetails to update
     */
    where?: LawyerDetailsWhereInput
    /**
     * Limit how many LawyerDetails to update.
     */
    limit?: number
  }

  /**
   * LawyerDetails updateManyAndReturn
   */
  export type LawyerDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * The data used to update LawyerDetails.
     */
    data: XOR<LawyerDetailsUpdateManyMutationInput, LawyerDetailsUncheckedUpdateManyInput>
    /**
     * Filter which LawyerDetails to update
     */
    where?: LawyerDetailsWhereInput
    /**
     * Limit how many LawyerDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerDetails upsert
   */
  export type LawyerDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerDetails to update in case it exists.
     */
    where: LawyerDetailsWhereUniqueInput
    /**
     * In case the LawyerDetails found by the `where` argument doesn't exist, create a new LawyerDetails with this data.
     */
    create: XOR<LawyerDetailsCreateInput, LawyerDetailsUncheckedCreateInput>
    /**
     * In case the LawyerDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerDetailsUpdateInput, LawyerDetailsUncheckedUpdateInput>
  }

  /**
   * LawyerDetails delete
   */
  export type LawyerDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
    /**
     * Filter which LawyerDetails to delete.
     */
    where: LawyerDetailsWhereUniqueInput
  }

  /**
   * LawyerDetails deleteMany
   */
  export type LawyerDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerDetails to delete
     */
    where?: LawyerDetailsWhereInput
    /**
     * Limit how many LawyerDetails to delete.
     */
    limit?: number
  }

  /**
   * LawyerDetails without action
   */
  export type LawyerDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDetails
     */
    select?: LawyerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDetails
     */
    omit?: LawyerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: number
    fileUrl: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    fileUrl?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    fileUrl?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    fileUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: string | null
    fileUrl: string | null
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | Chat$deletedByArgs<ExtArgs>
    reads?: boolean | Chat$readsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    fileUrl?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "message" | "fileUrl" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    deletedBy?: boolean | Chat$deletedByArgs<ExtArgs>
    reads?: boolean | Chat$readsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      deletedBy: Prisma.$ChatDeletionPayload<ExtArgs>[]
      reads: Prisma.$ChatReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      message: string | null
      fileUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends Chat$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, Chat$deletedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reads<T extends Chat$readsArgs<ExtArgs> = {}>(args?: Subset<T, Chat$readsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly senderId: FieldRef<"Chat", 'Int'>
    readonly receiverId: FieldRef<"Chat", 'Int'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly fileUrl: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.deletedBy
   */
  export type Chat$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    where?: ChatDeletionWhereInput
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    cursor?: ChatDeletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatDeletionScalarFieldEnum | ChatDeletionScalarFieldEnum[]
  }

  /**
   * Chat.reads
   */
  export type Chat$readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    where?: ChatReadWhereInput
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    cursor?: ChatReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatReadScalarFieldEnum | ChatReadScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatDeletion
   */

  export type AggregateChatDeletion = {
    _count: ChatDeletionCountAggregateOutputType | null
    _avg: ChatDeletionAvgAggregateOutputType | null
    _sum: ChatDeletionSumAggregateOutputType | null
    _min: ChatDeletionMinAggregateOutputType | null
    _max: ChatDeletionMaxAggregateOutputType | null
  }

  export type ChatDeletionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatId: number | null
  }

  export type ChatDeletionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatId: number | null
  }

  export type ChatDeletionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatId: number | null
    deletedAt: Date | null
  }

  export type ChatDeletionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatId: number | null
    deletedAt: Date | null
  }

  export type ChatDeletionCountAggregateOutputType = {
    id: number
    userId: number
    chatId: number
    deletedAt: number
    _all: number
  }


  export type ChatDeletionAvgAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
  }

  export type ChatDeletionSumAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
  }

  export type ChatDeletionMinAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    deletedAt?: true
  }

  export type ChatDeletionMaxAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    deletedAt?: true
  }

  export type ChatDeletionCountAggregateInputType = {
    id?: true
    userId?: true
    chatId?: true
    deletedAt?: true
    _all?: true
  }

  export type ChatDeletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatDeletion to aggregate.
     */
    where?: ChatDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatDeletions to fetch.
     */
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatDeletions
    **/
    _count?: true | ChatDeletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatDeletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatDeletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatDeletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatDeletionMaxAggregateInputType
  }

  export type GetChatDeletionAggregateType<T extends ChatDeletionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatDeletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatDeletion[P]>
      : GetScalarType<T[P], AggregateChatDeletion[P]>
  }




  export type ChatDeletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatDeletionWhereInput
    orderBy?: ChatDeletionOrderByWithAggregationInput | ChatDeletionOrderByWithAggregationInput[]
    by: ChatDeletionScalarFieldEnum[] | ChatDeletionScalarFieldEnum
    having?: ChatDeletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatDeletionCountAggregateInputType | true
    _avg?: ChatDeletionAvgAggregateInputType
    _sum?: ChatDeletionSumAggregateInputType
    _min?: ChatDeletionMinAggregateInputType
    _max?: ChatDeletionMaxAggregateInputType
  }

  export type ChatDeletionGroupByOutputType = {
    id: number
    userId: number
    chatId: number
    deletedAt: Date
    _count: ChatDeletionCountAggregateOutputType | null
    _avg: ChatDeletionAvgAggregateOutputType | null
    _sum: ChatDeletionSumAggregateOutputType | null
    _min: ChatDeletionMinAggregateOutputType | null
    _max: ChatDeletionMaxAggregateOutputType | null
  }

  type GetChatDeletionGroupByPayload<T extends ChatDeletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatDeletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatDeletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatDeletionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatDeletionGroupByOutputType[P]>
        }
      >
    >


  export type ChatDeletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatDeletion"]>

  export type ChatDeletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatDeletion"]>

  export type ChatDeletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatDeletion"]>

  export type ChatDeletionSelectScalar = {
    id?: boolean
    userId?: boolean
    chatId?: boolean
    deletedAt?: boolean
  }

  export type ChatDeletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatId" | "deletedAt", ExtArgs["result"]["chatDeletion"]>
  export type ChatDeletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatDeletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatDeletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatDeletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatDeletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      chatId: number
      deletedAt: Date
    }, ExtArgs["result"]["chatDeletion"]>
    composites: {}
  }

  type ChatDeletionGetPayload<S extends boolean | null | undefined | ChatDeletionDefaultArgs> = $Result.GetResult<Prisma.$ChatDeletionPayload, S>

  type ChatDeletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatDeletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatDeletionCountAggregateInputType | true
    }

  export interface ChatDeletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatDeletion'], meta: { name: 'ChatDeletion' } }
    /**
     * Find zero or one ChatDeletion that matches the filter.
     * @param {ChatDeletionFindUniqueArgs} args - Arguments to find a ChatDeletion
     * @example
     * // Get one ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatDeletionFindUniqueArgs>(args: SelectSubset<T, ChatDeletionFindUniqueArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatDeletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatDeletionFindUniqueOrThrowArgs} args - Arguments to find a ChatDeletion
     * @example
     * // Get one ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatDeletionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatDeletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatDeletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionFindFirstArgs} args - Arguments to find a ChatDeletion
     * @example
     * // Get one ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatDeletionFindFirstArgs>(args?: SelectSubset<T, ChatDeletionFindFirstArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatDeletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionFindFirstOrThrowArgs} args - Arguments to find a ChatDeletion
     * @example
     * // Get one ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatDeletionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatDeletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatDeletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatDeletions
     * const chatDeletions = await prisma.chatDeletion.findMany()
     * 
     * // Get first 10 ChatDeletions
     * const chatDeletions = await prisma.chatDeletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatDeletionWithIdOnly = await prisma.chatDeletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatDeletionFindManyArgs>(args?: SelectSubset<T, ChatDeletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatDeletion.
     * @param {ChatDeletionCreateArgs} args - Arguments to create a ChatDeletion.
     * @example
     * // Create one ChatDeletion
     * const ChatDeletion = await prisma.chatDeletion.create({
     *   data: {
     *     // ... data to create a ChatDeletion
     *   }
     * })
     * 
     */
    create<T extends ChatDeletionCreateArgs>(args: SelectSubset<T, ChatDeletionCreateArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatDeletions.
     * @param {ChatDeletionCreateManyArgs} args - Arguments to create many ChatDeletions.
     * @example
     * // Create many ChatDeletions
     * const chatDeletion = await prisma.chatDeletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatDeletionCreateManyArgs>(args?: SelectSubset<T, ChatDeletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatDeletions and returns the data saved in the database.
     * @param {ChatDeletionCreateManyAndReturnArgs} args - Arguments to create many ChatDeletions.
     * @example
     * // Create many ChatDeletions
     * const chatDeletion = await prisma.chatDeletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatDeletions and only return the `id`
     * const chatDeletionWithIdOnly = await prisma.chatDeletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatDeletionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatDeletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatDeletion.
     * @param {ChatDeletionDeleteArgs} args - Arguments to delete one ChatDeletion.
     * @example
     * // Delete one ChatDeletion
     * const ChatDeletion = await prisma.chatDeletion.delete({
     *   where: {
     *     // ... filter to delete one ChatDeletion
     *   }
     * })
     * 
     */
    delete<T extends ChatDeletionDeleteArgs>(args: SelectSubset<T, ChatDeletionDeleteArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatDeletion.
     * @param {ChatDeletionUpdateArgs} args - Arguments to update one ChatDeletion.
     * @example
     * // Update one ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatDeletionUpdateArgs>(args: SelectSubset<T, ChatDeletionUpdateArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatDeletions.
     * @param {ChatDeletionDeleteManyArgs} args - Arguments to filter ChatDeletions to delete.
     * @example
     * // Delete a few ChatDeletions
     * const { count } = await prisma.chatDeletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeletionDeleteManyArgs>(args?: SelectSubset<T, ChatDeletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatDeletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatDeletions
     * const chatDeletion = await prisma.chatDeletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatDeletionUpdateManyArgs>(args: SelectSubset<T, ChatDeletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatDeletions and returns the data updated in the database.
     * @param {ChatDeletionUpdateManyAndReturnArgs} args - Arguments to update many ChatDeletions.
     * @example
     * // Update many ChatDeletions
     * const chatDeletion = await prisma.chatDeletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatDeletions and only return the `id`
     * const chatDeletionWithIdOnly = await prisma.chatDeletion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatDeletionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatDeletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatDeletion.
     * @param {ChatDeletionUpsertArgs} args - Arguments to update or create a ChatDeletion.
     * @example
     * // Update or create a ChatDeletion
     * const chatDeletion = await prisma.chatDeletion.upsert({
     *   create: {
     *     // ... data to create a ChatDeletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatDeletion we want to update
     *   }
     * })
     */
    upsert<T extends ChatDeletionUpsertArgs>(args: SelectSubset<T, ChatDeletionUpsertArgs<ExtArgs>>): Prisma__ChatDeletionClient<$Result.GetResult<Prisma.$ChatDeletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatDeletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionCountArgs} args - Arguments to filter ChatDeletions to count.
     * @example
     * // Count the number of ChatDeletions
     * const count = await prisma.chatDeletion.count({
     *   where: {
     *     // ... the filter for the ChatDeletions we want to count
     *   }
     * })
    **/
    count<T extends ChatDeletionCountArgs>(
      args?: Subset<T, ChatDeletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatDeletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatDeletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatDeletionAggregateArgs>(args: Subset<T, ChatDeletionAggregateArgs>): Prisma.PrismaPromise<GetChatDeletionAggregateType<T>>

    /**
     * Group by ChatDeletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatDeletionGroupByArgs} args - Group by arguments.
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
      T extends ChatDeletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatDeletionGroupByArgs['orderBy'] }
        : { orderBy?: ChatDeletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatDeletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatDeletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatDeletion model
   */
  readonly fields: ChatDeletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatDeletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatDeletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatDeletion model
   */
  interface ChatDeletionFieldRefs {
    readonly id: FieldRef<"ChatDeletion", 'Int'>
    readonly userId: FieldRef<"ChatDeletion", 'Int'>
    readonly chatId: FieldRef<"ChatDeletion", 'Int'>
    readonly deletedAt: FieldRef<"ChatDeletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatDeletion findUnique
   */
  export type ChatDeletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter, which ChatDeletion to fetch.
     */
    where: ChatDeletionWhereUniqueInput
  }

  /**
   * ChatDeletion findUniqueOrThrow
   */
  export type ChatDeletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter, which ChatDeletion to fetch.
     */
    where: ChatDeletionWhereUniqueInput
  }

  /**
   * ChatDeletion findFirst
   */
  export type ChatDeletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter, which ChatDeletion to fetch.
     */
    where?: ChatDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatDeletions to fetch.
     */
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatDeletions.
     */
    cursor?: ChatDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatDeletions.
     */
    distinct?: ChatDeletionScalarFieldEnum | ChatDeletionScalarFieldEnum[]
  }

  /**
   * ChatDeletion findFirstOrThrow
   */
  export type ChatDeletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter, which ChatDeletion to fetch.
     */
    where?: ChatDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatDeletions to fetch.
     */
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatDeletions.
     */
    cursor?: ChatDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatDeletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatDeletions.
     */
    distinct?: ChatDeletionScalarFieldEnum | ChatDeletionScalarFieldEnum[]
  }

  /**
   * ChatDeletion findMany
   */
  export type ChatDeletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter, which ChatDeletions to fetch.
     */
    where?: ChatDeletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatDeletions to fetch.
     */
    orderBy?: ChatDeletionOrderByWithRelationInput | ChatDeletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatDeletions.
     */
    cursor?: ChatDeletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatDeletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatDeletions.
     */
    skip?: number
    distinct?: ChatDeletionScalarFieldEnum | ChatDeletionScalarFieldEnum[]
  }

  /**
   * ChatDeletion create
   */
  export type ChatDeletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatDeletion.
     */
    data: XOR<ChatDeletionCreateInput, ChatDeletionUncheckedCreateInput>
  }

  /**
   * ChatDeletion createMany
   */
  export type ChatDeletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatDeletions.
     */
    data: ChatDeletionCreateManyInput | ChatDeletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatDeletion createManyAndReturn
   */
  export type ChatDeletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatDeletions.
     */
    data: ChatDeletionCreateManyInput | ChatDeletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatDeletion update
   */
  export type ChatDeletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatDeletion.
     */
    data: XOR<ChatDeletionUpdateInput, ChatDeletionUncheckedUpdateInput>
    /**
     * Choose, which ChatDeletion to update.
     */
    where: ChatDeletionWhereUniqueInput
  }

  /**
   * ChatDeletion updateMany
   */
  export type ChatDeletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatDeletions.
     */
    data: XOR<ChatDeletionUpdateManyMutationInput, ChatDeletionUncheckedUpdateManyInput>
    /**
     * Filter which ChatDeletions to update
     */
    where?: ChatDeletionWhereInput
    /**
     * Limit how many ChatDeletions to update.
     */
    limit?: number
  }

  /**
   * ChatDeletion updateManyAndReturn
   */
  export type ChatDeletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * The data used to update ChatDeletions.
     */
    data: XOR<ChatDeletionUpdateManyMutationInput, ChatDeletionUncheckedUpdateManyInput>
    /**
     * Filter which ChatDeletions to update
     */
    where?: ChatDeletionWhereInput
    /**
     * Limit how many ChatDeletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatDeletion upsert
   */
  export type ChatDeletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatDeletion to update in case it exists.
     */
    where: ChatDeletionWhereUniqueInput
    /**
     * In case the ChatDeletion found by the `where` argument doesn't exist, create a new ChatDeletion with this data.
     */
    create: XOR<ChatDeletionCreateInput, ChatDeletionUncheckedCreateInput>
    /**
     * In case the ChatDeletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatDeletionUpdateInput, ChatDeletionUncheckedUpdateInput>
  }

  /**
   * ChatDeletion delete
   */
  export type ChatDeletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
    /**
     * Filter which ChatDeletion to delete.
     */
    where: ChatDeletionWhereUniqueInput
  }

  /**
   * ChatDeletion deleteMany
   */
  export type ChatDeletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatDeletions to delete
     */
    where?: ChatDeletionWhereInput
    /**
     * Limit how many ChatDeletions to delete.
     */
    limit?: number
  }

  /**
   * ChatDeletion without action
   */
  export type ChatDeletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatDeletion
     */
    select?: ChatDeletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatDeletion
     */
    omit?: ChatDeletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatDeletionInclude<ExtArgs> | null
  }


  /**
   * Model ChatRead
   */

  export type AggregateChatRead = {
    _count: ChatReadCountAggregateOutputType | null
    _avg: ChatReadAvgAggregateOutputType | null
    _sum: ChatReadSumAggregateOutputType | null
    _min: ChatReadMinAggregateOutputType | null
    _max: ChatReadMaxAggregateOutputType | null
  }

  export type ChatReadAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type ChatReadSumAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
  }

  export type ChatReadMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    seenAt: Date | null
  }

  export type ChatReadMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    userId: number | null
    seenAt: Date | null
  }

  export type ChatReadCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    seenAt: number
    _all: number
  }


  export type ChatReadAvgAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type ChatReadSumAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
  }

  export type ChatReadMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    seenAt?: true
  }

  export type ChatReadMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    seenAt?: true
  }

  export type ChatReadCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    seenAt?: true
    _all?: true
  }

  export type ChatReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRead to aggregate.
     */
    where?: ChatReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReads to fetch.
     */
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatReads
    **/
    _count?: true | ChatReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatReadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatReadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatReadMaxAggregateInputType
  }

  export type GetChatReadAggregateType<T extends ChatReadAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRead[P]>
      : GetScalarType<T[P], AggregateChatRead[P]>
  }




  export type ChatReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReadWhereInput
    orderBy?: ChatReadOrderByWithAggregationInput | ChatReadOrderByWithAggregationInput[]
    by: ChatReadScalarFieldEnum[] | ChatReadScalarFieldEnum
    having?: ChatReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatReadCountAggregateInputType | true
    _avg?: ChatReadAvgAggregateInputType
    _sum?: ChatReadSumAggregateInputType
    _min?: ChatReadMinAggregateInputType
    _max?: ChatReadMaxAggregateInputType
  }

  export type ChatReadGroupByOutputType = {
    id: number
    chatId: number
    userId: number
    seenAt: Date
    _count: ChatReadCountAggregateOutputType | null
    _avg: ChatReadAvgAggregateOutputType | null
    _sum: ChatReadSumAggregateOutputType | null
    _min: ChatReadMinAggregateOutputType | null
    _max: ChatReadMaxAggregateOutputType | null
  }

  type GetChatReadGroupByPayload<T extends ChatReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatReadGroupByOutputType[P]>
            : GetScalarType<T[P], ChatReadGroupByOutputType[P]>
        }
      >
    >


  export type ChatReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    seenAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRead"]>

  export type ChatReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    seenAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRead"]>

  export type ChatReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    seenAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRead"]>

  export type ChatReadSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    seenAt?: boolean
  }

  export type ChatReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "userId" | "seenAt", ExtArgs["result"]["chatRead"]>
  export type ChatReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRead"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      userId: number
      seenAt: Date
    }, ExtArgs["result"]["chatRead"]>
    composites: {}
  }

  type ChatReadGetPayload<S extends boolean | null | undefined | ChatReadDefaultArgs> = $Result.GetResult<Prisma.$ChatReadPayload, S>

  type ChatReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatReadCountAggregateInputType | true
    }

  export interface ChatReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRead'], meta: { name: 'ChatRead' } }
    /**
     * Find zero or one ChatRead that matches the filter.
     * @param {ChatReadFindUniqueArgs} args - Arguments to find a ChatRead
     * @example
     * // Get one ChatRead
     * const chatRead = await prisma.chatRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatReadFindUniqueArgs>(args: SelectSubset<T, ChatReadFindUniqueArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatReadFindUniqueOrThrowArgs} args - Arguments to find a ChatRead
     * @example
     * // Get one ChatRead
     * const chatRead = await prisma.chatRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatReadFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadFindFirstArgs} args - Arguments to find a ChatRead
     * @example
     * // Get one ChatRead
     * const chatRead = await prisma.chatRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatReadFindFirstArgs>(args?: SelectSubset<T, ChatReadFindFirstArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadFindFirstOrThrowArgs} args - Arguments to find a ChatRead
     * @example
     * // Get one ChatRead
     * const chatRead = await prisma.chatRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatReadFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatReads
     * const chatReads = await prisma.chatRead.findMany()
     * 
     * // Get first 10 ChatReads
     * const chatReads = await prisma.chatRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatReadWithIdOnly = await prisma.chatRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatReadFindManyArgs>(args?: SelectSubset<T, ChatReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRead.
     * @param {ChatReadCreateArgs} args - Arguments to create a ChatRead.
     * @example
     * // Create one ChatRead
     * const ChatRead = await prisma.chatRead.create({
     *   data: {
     *     // ... data to create a ChatRead
     *   }
     * })
     * 
     */
    create<T extends ChatReadCreateArgs>(args: SelectSubset<T, ChatReadCreateArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatReads.
     * @param {ChatReadCreateManyArgs} args - Arguments to create many ChatReads.
     * @example
     * // Create many ChatReads
     * const chatRead = await prisma.chatRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatReadCreateManyArgs>(args?: SelectSubset<T, ChatReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatReads and returns the data saved in the database.
     * @param {ChatReadCreateManyAndReturnArgs} args - Arguments to create many ChatReads.
     * @example
     * // Create many ChatReads
     * const chatRead = await prisma.chatRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatReads and only return the `id`
     * const chatReadWithIdOnly = await prisma.chatRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatReadCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRead.
     * @param {ChatReadDeleteArgs} args - Arguments to delete one ChatRead.
     * @example
     * // Delete one ChatRead
     * const ChatRead = await prisma.chatRead.delete({
     *   where: {
     *     // ... filter to delete one ChatRead
     *   }
     * })
     * 
     */
    delete<T extends ChatReadDeleteArgs>(args: SelectSubset<T, ChatReadDeleteArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRead.
     * @param {ChatReadUpdateArgs} args - Arguments to update one ChatRead.
     * @example
     * // Update one ChatRead
     * const chatRead = await prisma.chatRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatReadUpdateArgs>(args: SelectSubset<T, ChatReadUpdateArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatReads.
     * @param {ChatReadDeleteManyArgs} args - Arguments to filter ChatReads to delete.
     * @example
     * // Delete a few ChatReads
     * const { count } = await prisma.chatRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatReadDeleteManyArgs>(args?: SelectSubset<T, ChatReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatReads
     * const chatRead = await prisma.chatRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatReadUpdateManyArgs>(args: SelectSubset<T, ChatReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatReads and returns the data updated in the database.
     * @param {ChatReadUpdateManyAndReturnArgs} args - Arguments to update many ChatReads.
     * @example
     * // Update many ChatReads
     * const chatRead = await prisma.chatRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatReads and only return the `id`
     * const chatReadWithIdOnly = await prisma.chatRead.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatReadUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRead.
     * @param {ChatReadUpsertArgs} args - Arguments to update or create a ChatRead.
     * @example
     * // Update or create a ChatRead
     * const chatRead = await prisma.chatRead.upsert({
     *   create: {
     *     // ... data to create a ChatRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRead we want to update
     *   }
     * })
     */
    upsert<T extends ChatReadUpsertArgs>(args: SelectSubset<T, ChatReadUpsertArgs<ExtArgs>>): Prisma__ChatReadClient<$Result.GetResult<Prisma.$ChatReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadCountArgs} args - Arguments to filter ChatReads to count.
     * @example
     * // Count the number of ChatReads
     * const count = await prisma.chatRead.count({
     *   where: {
     *     // ... the filter for the ChatReads we want to count
     *   }
     * })
    **/
    count<T extends ChatReadCountArgs>(
      args?: Subset<T, ChatReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatReadAggregateArgs>(args: Subset<T, ChatReadAggregateArgs>): Prisma.PrismaPromise<GetChatReadAggregateType<T>>

    /**
     * Group by ChatRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReadGroupByArgs} args - Group by arguments.
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
      T extends ChatReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatReadGroupByArgs['orderBy'] }
        : { orderBy?: ChatReadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRead model
   */
  readonly fields: ChatReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatRead model
   */
  interface ChatReadFieldRefs {
    readonly id: FieldRef<"ChatRead", 'Int'>
    readonly chatId: FieldRef<"ChatRead", 'Int'>
    readonly userId: FieldRef<"ChatRead", 'Int'>
    readonly seenAt: FieldRef<"ChatRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRead findUnique
   */
  export type ChatReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter, which ChatRead to fetch.
     */
    where: ChatReadWhereUniqueInput
  }

  /**
   * ChatRead findUniqueOrThrow
   */
  export type ChatReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter, which ChatRead to fetch.
     */
    where: ChatReadWhereUniqueInput
  }

  /**
   * ChatRead findFirst
   */
  export type ChatReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter, which ChatRead to fetch.
     */
    where?: ChatReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReads to fetch.
     */
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatReads.
     */
    cursor?: ChatReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatReads.
     */
    distinct?: ChatReadScalarFieldEnum | ChatReadScalarFieldEnum[]
  }

  /**
   * ChatRead findFirstOrThrow
   */
  export type ChatReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter, which ChatRead to fetch.
     */
    where?: ChatReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReads to fetch.
     */
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatReads.
     */
    cursor?: ChatReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatReads.
     */
    distinct?: ChatReadScalarFieldEnum | ChatReadScalarFieldEnum[]
  }

  /**
   * ChatRead findMany
   */
  export type ChatReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter, which ChatReads to fetch.
     */
    where?: ChatReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReads to fetch.
     */
    orderBy?: ChatReadOrderByWithRelationInput | ChatReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatReads.
     */
    cursor?: ChatReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReads.
     */
    skip?: number
    distinct?: ChatReadScalarFieldEnum | ChatReadScalarFieldEnum[]
  }

  /**
   * ChatRead create
   */
  export type ChatReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRead.
     */
    data: XOR<ChatReadCreateInput, ChatReadUncheckedCreateInput>
  }

  /**
   * ChatRead createMany
   */
  export type ChatReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatReads.
     */
    data: ChatReadCreateManyInput | ChatReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRead createManyAndReturn
   */
  export type ChatReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * The data used to create many ChatReads.
     */
    data: ChatReadCreateManyInput | ChatReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRead update
   */
  export type ChatReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRead.
     */
    data: XOR<ChatReadUpdateInput, ChatReadUncheckedUpdateInput>
    /**
     * Choose, which ChatRead to update.
     */
    where: ChatReadWhereUniqueInput
  }

  /**
   * ChatRead updateMany
   */
  export type ChatReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatReads.
     */
    data: XOR<ChatReadUpdateManyMutationInput, ChatReadUncheckedUpdateManyInput>
    /**
     * Filter which ChatReads to update
     */
    where?: ChatReadWhereInput
    /**
     * Limit how many ChatReads to update.
     */
    limit?: number
  }

  /**
   * ChatRead updateManyAndReturn
   */
  export type ChatReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * The data used to update ChatReads.
     */
    data: XOR<ChatReadUpdateManyMutationInput, ChatReadUncheckedUpdateManyInput>
    /**
     * Filter which ChatReads to update
     */
    where?: ChatReadWhereInput
    /**
     * Limit how many ChatReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRead upsert
   */
  export type ChatReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRead to update in case it exists.
     */
    where: ChatReadWhereUniqueInput
    /**
     * In case the ChatRead found by the `where` argument doesn't exist, create a new ChatRead with this data.
     */
    create: XOR<ChatReadCreateInput, ChatReadUncheckedCreateInput>
    /**
     * In case the ChatRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatReadUpdateInput, ChatReadUncheckedUpdateInput>
  }

  /**
   * ChatRead delete
   */
  export type ChatReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
    /**
     * Filter which ChatRead to delete.
     */
    where: ChatReadWhereUniqueInput
  }

  /**
   * ChatRead deleteMany
   */
  export type ChatReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatReads to delete
     */
    where?: ChatReadWhereInput
    /**
     * Limit how many ChatReads to delete.
     */
    limit?: number
  }

  /**
   * ChatRead without action
   */
  export type ChatReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRead
     */
    select?: ChatReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRead
     */
    omit?: ChatReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReadInclude<ExtArgs> | null
  }


  /**
   * Model Call
   */

  export type AggregateCall = {
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  export type CallAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type CallSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type CallMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type CallMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type CallCountAggregateOutputType = {
    id: number
    clientId: number
    lawyerId: number
    status: number
    createdAt: number
    _all: number
  }


  export type CallAvgAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type CallSumAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type CallMinAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    status?: true
    createdAt?: true
  }

  export type CallMaxAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    status?: true
    createdAt?: true
  }

  export type CallCountAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Call to aggregate.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calls
    **/
    _count?: true | CallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallMaxAggregateInputType
  }

  export type GetCallAggregateType<T extends CallAggregateArgs> = {
        [P in keyof T & keyof AggregateCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCall[P]>
      : GetScalarType<T[P], AggregateCall[P]>
  }




  export type CallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
    orderBy?: CallOrderByWithAggregationInput | CallOrderByWithAggregationInput[]
    by: CallScalarFieldEnum[] | CallScalarFieldEnum
    having?: CallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallCountAggregateInputType | true
    _avg?: CallAvgAggregateInputType
    _sum?: CallSumAggregateInputType
    _min?: CallMinAggregateInputType
    _max?: CallMaxAggregateInputType
  }

  export type CallGroupByOutputType = {
    id: number
    clientId: number
    lawyerId: number
    status: string
    createdAt: Date
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  type GetCallGroupByPayload<T extends CallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallGroupByOutputType[P]>
            : GetScalarType<T[P], CallGroupByOutputType[P]>
        }
      >
    >


  export type CallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["call"]>

  export type CallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["call"]>

  export type CallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["call"]>

  export type CallSelectScalar = {
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "lawyerId" | "status" | "createdAt", ExtArgs["result"]["call"]>

  export type $CallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Call"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      lawyerId: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["call"]>
    composites: {}
  }

  type CallGetPayload<S extends boolean | null | undefined | CallDefaultArgs> = $Result.GetResult<Prisma.$CallPayload, S>

  type CallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallCountAggregateInputType | true
    }

  export interface CallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Call'], meta: { name: 'Call' } }
    /**
     * Find zero or one Call that matches the filter.
     * @param {CallFindUniqueArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallFindUniqueArgs>(args: SelectSubset<T, CallFindUniqueArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Call that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallFindUniqueOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallFindUniqueOrThrowArgs>(args: SelectSubset<T, CallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallFindFirstArgs>(args?: SelectSubset<T, CallFindFirstArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallFindFirstOrThrowArgs>(args?: SelectSubset<T, CallFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calls
     * const calls = await prisma.call.findMany()
     * 
     * // Get first 10 Calls
     * const calls = await prisma.call.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callWithIdOnly = await prisma.call.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallFindManyArgs>(args?: SelectSubset<T, CallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Call.
     * @param {CallCreateArgs} args - Arguments to create a Call.
     * @example
     * // Create one Call
     * const Call = await prisma.call.create({
     *   data: {
     *     // ... data to create a Call
     *   }
     * })
     * 
     */
    create<T extends CallCreateArgs>(args: SelectSubset<T, CallCreateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calls.
     * @param {CallCreateManyArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallCreateManyArgs>(args?: SelectSubset<T, CallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calls and returns the data saved in the database.
     * @param {CallCreateManyAndReturnArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallCreateManyAndReturnArgs>(args?: SelectSubset<T, CallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Call.
     * @param {CallDeleteArgs} args - Arguments to delete one Call.
     * @example
     * // Delete one Call
     * const Call = await prisma.call.delete({
     *   where: {
     *     // ... filter to delete one Call
     *   }
     * })
     * 
     */
    delete<T extends CallDeleteArgs>(args: SelectSubset<T, CallDeleteArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Call.
     * @param {CallUpdateArgs} args - Arguments to update one Call.
     * @example
     * // Update one Call
     * const call = await prisma.call.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallUpdateArgs>(args: SelectSubset<T, CallUpdateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calls.
     * @param {CallDeleteManyArgs} args - Arguments to filter Calls to delete.
     * @example
     * // Delete a few Calls
     * const { count } = await prisma.call.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallDeleteManyArgs>(args?: SelectSubset<T, CallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallUpdateManyArgs>(args: SelectSubset<T, CallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls and returns the data updated in the database.
     * @param {CallUpdateManyAndReturnArgs} args - Arguments to update many Calls.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallUpdateManyAndReturnArgs>(args: SelectSubset<T, CallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Call.
     * @param {CallUpsertArgs} args - Arguments to update or create a Call.
     * @example
     * // Update or create a Call
     * const call = await prisma.call.upsert({
     *   create: {
     *     // ... data to create a Call
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Call we want to update
     *   }
     * })
     */
    upsert<T extends CallUpsertArgs>(args: SelectSubset<T, CallUpsertArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCountArgs} args - Arguments to filter Calls to count.
     * @example
     * // Count the number of Calls
     * const count = await prisma.call.count({
     *   where: {
     *     // ... the filter for the Calls we want to count
     *   }
     * })
    **/
    count<T extends CallCountArgs>(
      args?: Subset<T, CallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallAggregateArgs>(args: Subset<T, CallAggregateArgs>): Prisma.PrismaPromise<GetCallAggregateType<T>>

    /**
     * Group by Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallGroupByArgs} args - Group by arguments.
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
      T extends CallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallGroupByArgs['orderBy'] }
        : { orderBy?: CallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Call model
   */
  readonly fields: CallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Call.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Call model
   */
  interface CallFieldRefs {
    readonly id: FieldRef<"Call", 'Int'>
    readonly clientId: FieldRef<"Call", 'Int'>
    readonly lawyerId: FieldRef<"Call", 'Int'>
    readonly status: FieldRef<"Call", 'String'>
    readonly createdAt: FieldRef<"Call", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Call findUnique
   */
  export type CallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findUniqueOrThrow
   */
  export type CallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findFirst
   */
  export type CallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findFirstOrThrow
   */
  export type CallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findMany
   */
  export type CallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter, which Calls to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call create
   */
  export type CallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data needed to create a Call.
     */
    data: XOR<CallCreateInput, CallUncheckedCreateInput>
  }

  /**
   * Call createMany
   */
  export type CallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Call createManyAndReturn
   */
  export type CallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Call update
   */
  export type CallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data needed to update a Call.
     */
    data: XOR<CallUpdateInput, CallUncheckedUpdateInput>
    /**
     * Choose, which Call to update.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call updateMany
   */
  export type CallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
  }

  /**
   * Call updateManyAndReturn
   */
  export type CallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
  }

  /**
   * Call upsert
   */
  export type CallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The filter to search for the Call to update in case it exists.
     */
    where: CallWhereUniqueInput
    /**
     * In case the Call found by the `where` argument doesn't exist, create a new Call with this data.
     */
    create: XOR<CallCreateInput, CallUncheckedCreateInput>
    /**
     * In case the Call was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallUpdateInput, CallUncheckedUpdateInput>
  }

  /**
   * Call delete
   */
  export type CallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Filter which Call to delete.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call deleteMany
   */
  export type CallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calls to delete
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to delete.
     */
    limit?: number
  }

  /**
   * Call without action
   */
  export type CallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
  }


  /**
   * Model CallHistory
   */

  export type AggregateCallHistory = {
    _count: CallHistoryCountAggregateOutputType | null
    _avg: CallHistoryAvgAggregateOutputType | null
    _sum: CallHistorySumAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  export type CallHistoryAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type CallHistorySumAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type CallHistoryMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
    callStart: Date | null
    callEnd: Date | null
    callUrl: string | null
    deleted: boolean | null
  }

  export type CallHistoryMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
    callStart: Date | null
    callEnd: Date | null
    callUrl: string | null
    deleted: boolean | null
  }

  export type CallHistoryCountAggregateOutputType = {
    id: number
    clientId: number
    lawyerId: number
    callStart: number
    callEnd: number
    callUrl: number
    deleted: number
    _all: number
  }


  export type CallHistoryAvgAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type CallHistorySumAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type CallHistoryMinAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    callStart?: true
    callEnd?: true
    callUrl?: true
    deleted?: true
  }

  export type CallHistoryMaxAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    callStart?: true
    callEnd?: true
    callUrl?: true
    deleted?: true
  }

  export type CallHistoryCountAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    callStart?: true
    callEnd?: true
    callUrl?: true
    deleted?: true
    _all?: true
  }

  export type CallHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistory to aggregate.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallHistories
    **/
    _count?: true | CallHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallHistoryMaxAggregateInputType
  }

  export type GetCallHistoryAggregateType<T extends CallHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCallHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallHistory[P]>
      : GetScalarType<T[P], AggregateCallHistory[P]>
  }




  export type CallHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithAggregationInput | CallHistoryOrderByWithAggregationInput[]
    by: CallHistoryScalarFieldEnum[] | CallHistoryScalarFieldEnum
    having?: CallHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallHistoryCountAggregateInputType | true
    _avg?: CallHistoryAvgAggregateInputType
    _sum?: CallHistorySumAggregateInputType
    _min?: CallHistoryMinAggregateInputType
    _max?: CallHistoryMaxAggregateInputType
  }

  export type CallHistoryGroupByOutputType = {
    id: number
    clientId: number
    lawyerId: number
    callStart: Date
    callEnd: Date | null
    callUrl: string | null
    deleted: boolean
    _count: CallHistoryCountAggregateOutputType | null
    _avg: CallHistoryAvgAggregateOutputType | null
    _sum: CallHistorySumAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  type GetCallHistoryGroupByPayload<T extends CallHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CallHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    callStart?: boolean
    callEnd?: boolean
    callUrl?: boolean
    deleted?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    callStart?: boolean
    callEnd?: boolean
    callUrl?: boolean
    deleted?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    callStart?: boolean
    callEnd?: boolean
    callUrl?: boolean
    deleted?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectScalar = {
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    callStart?: boolean
    callEnd?: boolean
    callUrl?: boolean
    deleted?: boolean
  }

  export type CallHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "lawyerId" | "callStart" | "callEnd" | "callUrl" | "deleted", ExtArgs["result"]["callHistory"]>
  export type CallHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CallHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CallHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CallHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallHistory"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      lawyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      lawyerId: number
      callStart: Date
      callEnd: Date | null
      callUrl: string | null
      deleted: boolean
    }, ExtArgs["result"]["callHistory"]>
    composites: {}
  }

  type CallHistoryGetPayload<S extends boolean | null | undefined | CallHistoryDefaultArgs> = $Result.GetResult<Prisma.$CallHistoryPayload, S>

  type CallHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallHistoryCountAggregateInputType | true
    }

  export interface CallHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallHistory'], meta: { name: 'CallHistory' } }
    /**
     * Find zero or one CallHistory that matches the filter.
     * @param {CallHistoryFindUniqueArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallHistoryFindUniqueArgs>(args: SelectSubset<T, CallHistoryFindUniqueArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallHistoryFindUniqueOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CallHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallHistoryFindFirstArgs>(args?: SelectSubset<T, CallHistoryFindFirstArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CallHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallHistories
     * const callHistories = await prisma.callHistory.findMany()
     * 
     * // Get first 10 CallHistories
     * const callHistories = await prisma.callHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallHistoryFindManyArgs>(args?: SelectSubset<T, CallHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallHistory.
     * @param {CallHistoryCreateArgs} args - Arguments to create a CallHistory.
     * @example
     * // Create one CallHistory
     * const CallHistory = await prisma.callHistory.create({
     *   data: {
     *     // ... data to create a CallHistory
     *   }
     * })
     * 
     */
    create<T extends CallHistoryCreateArgs>(args: SelectSubset<T, CallHistoryCreateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallHistories.
     * @param {CallHistoryCreateManyArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallHistoryCreateManyArgs>(args?: SelectSubset<T, CallHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallHistories and returns the data saved in the database.
     * @param {CallHistoryCreateManyAndReturnArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallHistories and only return the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CallHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallHistory.
     * @param {CallHistoryDeleteArgs} args - Arguments to delete one CallHistory.
     * @example
     * // Delete one CallHistory
     * const CallHistory = await prisma.callHistory.delete({
     *   where: {
     *     // ... filter to delete one CallHistory
     *   }
     * })
     * 
     */
    delete<T extends CallHistoryDeleteArgs>(args: SelectSubset<T, CallHistoryDeleteArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallHistory.
     * @param {CallHistoryUpdateArgs} args - Arguments to update one CallHistory.
     * @example
     * // Update one CallHistory
     * const callHistory = await prisma.callHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallHistoryUpdateArgs>(args: SelectSubset<T, CallHistoryUpdateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallHistories.
     * @param {CallHistoryDeleteManyArgs} args - Arguments to filter CallHistories to delete.
     * @example
     * // Delete a few CallHistories
     * const { count } = await prisma.callHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallHistoryDeleteManyArgs>(args?: SelectSubset<T, CallHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallHistories
     * const callHistory = await prisma.callHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallHistoryUpdateManyArgs>(args: SelectSubset<T, CallHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallHistories and returns the data updated in the database.
     * @param {CallHistoryUpdateManyAndReturnArgs} args - Arguments to update many CallHistories.
     * @example
     * // Update many CallHistories
     * const callHistory = await prisma.callHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallHistories and only return the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CallHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallHistory.
     * @param {CallHistoryUpsertArgs} args - Arguments to update or create a CallHistory.
     * @example
     * // Update or create a CallHistory
     * const callHistory = await prisma.callHistory.upsert({
     *   create: {
     *     // ... data to create a CallHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallHistory we want to update
     *   }
     * })
     */
    upsert<T extends CallHistoryUpsertArgs>(args: SelectSubset<T, CallHistoryUpsertArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryCountArgs} args - Arguments to filter CallHistories to count.
     * @example
     * // Count the number of CallHistories
     * const count = await prisma.callHistory.count({
     *   where: {
     *     // ... the filter for the CallHistories we want to count
     *   }
     * })
    **/
    count<T extends CallHistoryCountArgs>(
      args?: Subset<T, CallHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallHistoryAggregateArgs>(args: Subset<T, CallHistoryAggregateArgs>): Prisma.PrismaPromise<GetCallHistoryAggregateType<T>>

    /**
     * Group by CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryGroupByArgs} args - Group by arguments.
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
      T extends CallHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CallHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallHistory model
   */
  readonly fields: CallHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lawyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CallHistory model
   */
  interface CallHistoryFieldRefs {
    readonly id: FieldRef<"CallHistory", 'Int'>
    readonly clientId: FieldRef<"CallHistory", 'Int'>
    readonly lawyerId: FieldRef<"CallHistory", 'Int'>
    readonly callStart: FieldRef<"CallHistory", 'DateTime'>
    readonly callEnd: FieldRef<"CallHistory", 'DateTime'>
    readonly callUrl: FieldRef<"CallHistory", 'String'>
    readonly deleted: FieldRef<"CallHistory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CallHistory findUnique
   */
  export type CallHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findUniqueOrThrow
   */
  export type CallHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findFirst
   */
  export type CallHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findFirstOrThrow
   */
  export type CallHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findMany
   */
  export type CallHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistories to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory create
   */
  export type CallHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CallHistory.
     */
    data: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
  }

  /**
   * CallHistory createMany
   */
  export type CallHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallHistory createManyAndReturn
   */
  export type CallHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallHistory update
   */
  export type CallHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CallHistory.
     */
    data: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
    /**
     * Choose, which CallHistory to update.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory updateMany
   */
  export type CallHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallHistories.
     */
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallHistories to update
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to update.
     */
    limit?: number
  }

  /**
   * CallHistory updateManyAndReturn
   */
  export type CallHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * The data used to update CallHistories.
     */
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallHistories to update
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallHistory upsert
   */
  export type CallHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CallHistory to update in case it exists.
     */
    where: CallHistoryWhereUniqueInput
    /**
     * In case the CallHistory found by the `where` argument doesn't exist, create a new CallHistory with this data.
     */
    create: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
    /**
     * In case the CallHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
  }

  /**
   * CallHistory delete
   */
  export type CallHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter which CallHistory to delete.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory deleteMany
   */
  export type CallHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistories to delete
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to delete.
     */
    limit?: number
  }

  /**
   * CallHistory without action
   */
  export type CallHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
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
    email: 'email',
    username: 'username',
    password: 'password',
    profile: 'profile',
    refreshtoken: 'refreshtoken',
    isEmailVerified: 'isEmailVerified',
    emailOtp: 'emailOtp',
    emailOtpExpiry: 'emailOtpExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    latitude: 'latitude',
    longitude: 'longitude',
    lawyerHistory: 'lawyerHistory'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LawyerDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    experience: 'experience',
    fees: 'fees',
    availability: 'availability'
  };

  export type LawyerDetailsScalarFieldEnum = (typeof LawyerDetailsScalarFieldEnum)[keyof typeof LawyerDetailsScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatDeletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatId: 'chatId',
    deletedAt: 'deletedAt'
  };

  export type ChatDeletionScalarFieldEnum = (typeof ChatDeletionScalarFieldEnum)[keyof typeof ChatDeletionScalarFieldEnum]


  export const ChatReadScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    seenAt: 'seenAt'
  };

  export type ChatReadScalarFieldEnum = (typeof ChatReadScalarFieldEnum)[keyof typeof ChatReadScalarFieldEnum]


  export const CallScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    lawyerId: 'lawyerId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CallScalarFieldEnum = (typeof CallScalarFieldEnum)[keyof typeof CallScalarFieldEnum]


  export const CallHistoryScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    lawyerId: 'lawyerId',
    callStart: 'callStart',
    callEnd: 'callEnd',
    callUrl: 'callUrl',
    deleted: 'deleted'
  };

  export type CallHistoryScalarFieldEnum = (typeof CallHistoryScalarFieldEnum)[keyof typeof CallHistoryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile?: StringNullableFilter<"User"> | string | null
    refreshtoken?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailOtp?: StringNullableFilter<"User"> | string | null
    emailOtpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    lawyerHistory?: IntNullableListFilter<"User">
    lawyerDetails?: XOR<LawyerDetailsNullableScalarRelationFilter, LawyerDetailsWhereInput> | null
    clientCalls?: CallHistoryListRelationFilter
    lawyerCalls?: CallHistoryListRelationFilter
    sentChats?: ChatListRelationFilter
    receivedChats?: ChatListRelationFilter
    chatDeletions?: ChatDeletionListRelationFilter
    chatReads?: ChatReadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailOtp?: SortOrderInput | SortOrder
    emailOtpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    lawyerHistory?: SortOrder
    lawyerDetails?: LawyerDetailsOrderByWithRelationInput
    clientCalls?: CallHistoryOrderByRelationAggregateInput
    lawyerCalls?: CallHistoryOrderByRelationAggregateInput
    sentChats?: ChatOrderByRelationAggregateInput
    receivedChats?: ChatOrderByRelationAggregateInput
    chatDeletions?: ChatDeletionOrderByRelationAggregateInput
    chatReads?: ChatReadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profile?: StringNullableFilter<"User"> | string | null
    refreshtoken?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailOtp?: StringNullableFilter<"User"> | string | null
    emailOtpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    lawyerHistory?: IntNullableListFilter<"User">
    lawyerDetails?: XOR<LawyerDetailsNullableScalarRelationFilter, LawyerDetailsWhereInput> | null
    clientCalls?: CallHistoryListRelationFilter
    lawyerCalls?: CallHistoryListRelationFilter
    sentChats?: ChatListRelationFilter
    receivedChats?: ChatListRelationFilter
    chatDeletions?: ChatDeletionListRelationFilter
    chatReads?: ChatReadListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailOtp?: SortOrderInput | SortOrder
    emailOtpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    lawyerHistory?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshtoken?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailOtp?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailOtpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    lawyerHistory?: IntNullableListFilter<"User">
  }

  export type LawyerDetailsWhereInput = {
    AND?: LawyerDetailsWhereInput | LawyerDetailsWhereInput[]
    OR?: LawyerDetailsWhereInput[]
    NOT?: LawyerDetailsWhereInput | LawyerDetailsWhereInput[]
    id?: IntFilter<"LawyerDetails"> | number
    userId?: IntFilter<"LawyerDetails"> | number
    specialization?: StringNullableFilter<"LawyerDetails"> | string | null
    experience?: IntNullableFilter<"LawyerDetails"> | number | null
    fees?: FloatNullableFilter<"LawyerDetails"> | number | null
    availability?: BoolFilter<"LawyerDetails"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LawyerDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    availability?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LawyerDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: LawyerDetailsWhereInput | LawyerDetailsWhereInput[]
    OR?: LawyerDetailsWhereInput[]
    NOT?: LawyerDetailsWhereInput | LawyerDetailsWhereInput[]
    specialization?: StringNullableFilter<"LawyerDetails"> | string | null
    experience?: IntNullableFilter<"LawyerDetails"> | number | null
    fees?: FloatNullableFilter<"LawyerDetails"> | number | null
    availability?: BoolFilter<"LawyerDetails"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LawyerDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    availability?: SortOrder
    _count?: LawyerDetailsCountOrderByAggregateInput
    _avg?: LawyerDetailsAvgOrderByAggregateInput
    _max?: LawyerDetailsMaxOrderByAggregateInput
    _min?: LawyerDetailsMinOrderByAggregateInput
    _sum?: LawyerDetailsSumOrderByAggregateInput
  }

  export type LawyerDetailsScalarWhereWithAggregatesInput = {
    AND?: LawyerDetailsScalarWhereWithAggregatesInput | LawyerDetailsScalarWhereWithAggregatesInput[]
    OR?: LawyerDetailsScalarWhereWithAggregatesInput[]
    NOT?: LawyerDetailsScalarWhereWithAggregatesInput | LawyerDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawyerDetails"> | number
    userId?: IntWithAggregatesFilter<"LawyerDetails"> | number
    specialization?: StringNullableWithAggregatesFilter<"LawyerDetails"> | string | null
    experience?: IntNullableWithAggregatesFilter<"LawyerDetails"> | number | null
    fees?: FloatNullableWithAggregatesFilter<"LawyerDetails"> | number | null
    availability?: BoolWithAggregatesFilter<"LawyerDetails"> | boolean
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringNullableFilter<"Chat"> | string | null
    fileUrl?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    deletedBy?: ChatDeletionListRelationFilter
    reads?: ChatReadListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    deletedBy?: ChatDeletionOrderByRelationAggregateInput
    reads?: ChatReadOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringNullableFilter<"Chat"> | string | null
    fileUrl?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    deletedBy?: ChatDeletionListRelationFilter
    reads?: ChatReadListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    senderId?: IntWithAggregatesFilter<"Chat"> | number
    receiverId?: IntWithAggregatesFilter<"Chat"> | number
    message?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatDeletionWhereInput = {
    AND?: ChatDeletionWhereInput | ChatDeletionWhereInput[]
    OR?: ChatDeletionWhereInput[]
    NOT?: ChatDeletionWhereInput | ChatDeletionWhereInput[]
    id?: IntFilter<"ChatDeletion"> | number
    userId?: IntFilter<"ChatDeletion"> | number
    chatId?: IntFilter<"ChatDeletion"> | number
    deletedAt?: DateTimeFilter<"ChatDeletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatDeletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    deletedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatDeletionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_chatId?: ChatDeletionUserIdChatIdCompoundUniqueInput
    AND?: ChatDeletionWhereInput | ChatDeletionWhereInput[]
    OR?: ChatDeletionWhereInput[]
    NOT?: ChatDeletionWhereInput | ChatDeletionWhereInput[]
    userId?: IntFilter<"ChatDeletion"> | number
    chatId?: IntFilter<"ChatDeletion"> | number
    deletedAt?: DateTimeFilter<"ChatDeletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id" | "userId_chatId">

  export type ChatDeletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    deletedAt?: SortOrder
    _count?: ChatDeletionCountOrderByAggregateInput
    _avg?: ChatDeletionAvgOrderByAggregateInput
    _max?: ChatDeletionMaxOrderByAggregateInput
    _min?: ChatDeletionMinOrderByAggregateInput
    _sum?: ChatDeletionSumOrderByAggregateInput
  }

  export type ChatDeletionScalarWhereWithAggregatesInput = {
    AND?: ChatDeletionScalarWhereWithAggregatesInput | ChatDeletionScalarWhereWithAggregatesInput[]
    OR?: ChatDeletionScalarWhereWithAggregatesInput[]
    NOT?: ChatDeletionScalarWhereWithAggregatesInput | ChatDeletionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatDeletion"> | number
    userId?: IntWithAggregatesFilter<"ChatDeletion"> | number
    chatId?: IntWithAggregatesFilter<"ChatDeletion"> | number
    deletedAt?: DateTimeWithAggregatesFilter<"ChatDeletion"> | Date | string
  }

  export type ChatReadWhereInput = {
    AND?: ChatReadWhereInput | ChatReadWhereInput[]
    OR?: ChatReadWhereInput[]
    NOT?: ChatReadWhereInput | ChatReadWhereInput[]
    id?: IntFilter<"ChatRead"> | number
    chatId?: IntFilter<"ChatRead"> | number
    userId?: IntFilter<"ChatRead"> | number
    seenAt?: DateTimeFilter<"ChatRead"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatReadOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatReadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chatId_userId?: ChatReadChatIdUserIdCompoundUniqueInput
    AND?: ChatReadWhereInput | ChatReadWhereInput[]
    OR?: ChatReadWhereInput[]
    NOT?: ChatReadWhereInput | ChatReadWhereInput[]
    chatId?: IntFilter<"ChatRead"> | number
    userId?: IntFilter<"ChatRead"> | number
    seenAt?: DateTimeFilter<"ChatRead"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "chatId_userId">

  export type ChatReadOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
    _count?: ChatReadCountOrderByAggregateInput
    _avg?: ChatReadAvgOrderByAggregateInput
    _max?: ChatReadMaxOrderByAggregateInput
    _min?: ChatReadMinOrderByAggregateInput
    _sum?: ChatReadSumOrderByAggregateInput
  }

  export type ChatReadScalarWhereWithAggregatesInput = {
    AND?: ChatReadScalarWhereWithAggregatesInput | ChatReadScalarWhereWithAggregatesInput[]
    OR?: ChatReadScalarWhereWithAggregatesInput[]
    NOT?: ChatReadScalarWhereWithAggregatesInput | ChatReadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRead"> | number
    chatId?: IntWithAggregatesFilter<"ChatRead"> | number
    userId?: IntWithAggregatesFilter<"ChatRead"> | number
    seenAt?: DateTimeWithAggregatesFilter<"ChatRead"> | Date | string
  }

  export type CallWhereInput = {
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    id?: IntFilter<"Call"> | number
    clientId?: IntFilter<"Call"> | number
    lawyerId?: IntFilter<"Call"> | number
    status?: StringFilter<"Call"> | string
    createdAt?: DateTimeFilter<"Call"> | Date | string
  }

  export type CallOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CallWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    clientId?: IntFilter<"Call"> | number
    lawyerId?: IntFilter<"Call"> | number
    status?: StringFilter<"Call"> | string
    createdAt?: DateTimeFilter<"Call"> | Date | string
  }, "id">

  export type CallOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CallCountOrderByAggregateInput
    _avg?: CallAvgOrderByAggregateInput
    _max?: CallMaxOrderByAggregateInput
    _min?: CallMinOrderByAggregateInput
    _sum?: CallSumOrderByAggregateInput
  }

  export type CallScalarWhereWithAggregatesInput = {
    AND?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    OR?: CallScalarWhereWithAggregatesInput[]
    NOT?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Call"> | number
    clientId?: IntWithAggregatesFilter<"Call"> | number
    lawyerId?: IntWithAggregatesFilter<"Call"> | number
    status?: StringWithAggregatesFilter<"Call"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Call"> | Date | string
  }

  export type CallHistoryWhereInput = {
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    id?: IntFilter<"CallHistory"> | number
    clientId?: IntFilter<"CallHistory"> | number
    lawyerId?: IntFilter<"CallHistory"> | number
    callStart?: DateTimeFilter<"CallHistory"> | Date | string
    callEnd?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    callUrl?: StringNullableFilter<"CallHistory"> | string | null
    deleted?: BoolFilter<"CallHistory"> | boolean
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    lawyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CallHistoryOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    callStart?: SortOrder
    callEnd?: SortOrderInput | SortOrder
    callUrl?: SortOrderInput | SortOrder
    deleted?: SortOrder
    client?: UserOrderByWithRelationInput
    lawyer?: UserOrderByWithRelationInput
  }

  export type CallHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    clientId?: IntFilter<"CallHistory"> | number
    lawyerId?: IntFilter<"CallHistory"> | number
    callStart?: DateTimeFilter<"CallHistory"> | Date | string
    callEnd?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    callUrl?: StringNullableFilter<"CallHistory"> | string | null
    deleted?: BoolFilter<"CallHistory"> | boolean
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    lawyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CallHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    callStart?: SortOrder
    callEnd?: SortOrderInput | SortOrder
    callUrl?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: CallHistoryCountOrderByAggregateInput
    _avg?: CallHistoryAvgOrderByAggregateInput
    _max?: CallHistoryMaxOrderByAggregateInput
    _min?: CallHistoryMinOrderByAggregateInput
    _sum?: CallHistorySumOrderByAggregateInput
  }

  export type CallHistoryScalarWhereWithAggregatesInput = {
    AND?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    OR?: CallHistoryScalarWhereWithAggregatesInput[]
    NOT?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CallHistory"> | number
    clientId?: IntWithAggregatesFilter<"CallHistory"> | number
    lawyerId?: IntWithAggregatesFilter<"CallHistory"> | number
    callStart?: DateTimeWithAggregatesFilter<"CallHistory"> | Date | string
    callEnd?: DateTimeNullableWithAggregatesFilter<"CallHistory"> | Date | string | null
    callUrl?: StringNullableWithAggregatesFilter<"CallHistory"> | string | null
    deleted?: BoolWithAggregatesFilter<"CallHistory"> | boolean
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
  }

  export type LawyerDetailsCreateInput = {
    specialization?: string | null
    experience?: number | null
    fees?: number | null
    availability?: boolean
    user: UserCreateNestedOneWithoutLawyerDetailsInput
  }

  export type LawyerDetailsUncheckedCreateInput = {
    id?: number
    userId: number
    specialization?: string | null
    experience?: number | null
    fees?: number | null
    availability?: boolean
  }

  export type LawyerDetailsUpdateInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLawyerDetailsNestedInput
  }

  export type LawyerDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerDetailsCreateManyInput = {
    id?: number
    userId: number
    specialization?: string | null
    experience?: number | null
    fees?: number | null
    availability?: boolean
  }

  export type LawyerDetailsUpdateManyMutationInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatCreateInput = {
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentChatsInput
    receiver: UserCreateNestedOneWithoutReceivedChatsInput
    deletedBy?: ChatDeletionCreateNestedManyWithoutChatInput
    reads?: ChatReadCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    deletedBy?: ChatDeletionUncheckedCreateNestedManyWithoutChatInput
    reads?: ChatReadUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentChatsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedChatsNestedInput
    deletedBy?: ChatDeletionUpdateManyWithoutChatNestedInput
    reads?: ChatReadUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedBy?: ChatDeletionUncheckedUpdateManyWithoutChatNestedInput
    reads?: ChatReadUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionCreateInput = {
    deletedAt?: Date | string
    user: UserCreateNestedOneWithoutChatDeletionsInput
    chat: ChatCreateNestedOneWithoutDeletedByInput
  }

  export type ChatDeletionUncheckedCreateInput = {
    id?: number
    userId: number
    chatId: number
    deletedAt?: Date | string
  }

  export type ChatDeletionUpdateInput = {
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatDeletionsNestedInput
    chat?: ChatUpdateOneRequiredWithoutDeletedByNestedInput
  }

  export type ChatDeletionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionCreateManyInput = {
    id?: number
    userId: number
    chatId: number
    deletedAt?: Date | string
  }

  export type ChatDeletionUpdateManyMutationInput = {
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadCreateInput = {
    seenAt?: Date | string
    chat: ChatCreateNestedOneWithoutReadsInput
    user: UserCreateNestedOneWithoutChatReadsInput
  }

  export type ChatReadUncheckedCreateInput = {
    id?: number
    chatId: number
    userId: number
    seenAt?: Date | string
  }

  export type ChatReadUpdateInput = {
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutReadsNestedInput
    user?: UserUpdateOneRequiredWithoutChatReadsNestedInput
  }

  export type ChatReadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadCreateManyInput = {
    id?: number
    chatId: number
    userId: number
    seenAt?: Date | string
  }

  export type ChatReadUpdateManyMutationInput = {
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallCreateInput = {
    clientId: number
    lawyerId: number
    status: string
    createdAt?: Date | string
  }

  export type CallUncheckedCreateInput = {
    id?: number
    clientId: number
    lawyerId: number
    status: string
    createdAt?: Date | string
  }

  export type CallUpdateInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallCreateManyInput = {
    id?: number
    clientId: number
    lawyerId: number
    status: string
    createdAt?: Date | string
  }

  export type CallUpdateManyMutationInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryCreateInput = {
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
    client: UserCreateNestedOneWithoutClientCallsInput
    lawyer: UserCreateNestedOneWithoutLawyerCallsInput
  }

  export type CallHistoryUncheckedCreateInput = {
    id?: number
    clientId: number
    lawyerId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type CallHistoryUpdateInput = {
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    client?: UserUpdateOneRequiredWithoutClientCallsNestedInput
    lawyer?: UserUpdateOneRequiredWithoutLawyerCallsNestedInput
  }

  export type CallHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryCreateManyInput = {
    id?: number
    clientId: number
    lawyerId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type CallHistoryUpdateManyMutationInput = {
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LawyerDetailsNullableScalarRelationFilter = {
    is?: LawyerDetailsWhereInput | null
    isNot?: LawyerDetailsWhereInput | null
  }

  export type CallHistoryListRelationFilter = {
    every?: CallHistoryWhereInput
    some?: CallHistoryWhereInput
    none?: CallHistoryWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ChatDeletionListRelationFilter = {
    every?: ChatDeletionWhereInput
    some?: ChatDeletionWhereInput
    none?: ChatDeletionWhereInput
  }

  export type ChatReadListRelationFilter = {
    every?: ChatReadWhereInput
    some?: ChatReadWhereInput
    none?: ChatReadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CallHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatDeletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    refreshtoken?: SortOrder
    isEmailVerified?: SortOrder
    emailOtp?: SortOrder
    emailOtpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lawyerHistory?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lawyerHistory?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    refreshtoken?: SortOrder
    isEmailVerified?: SortOrder
    emailOtp?: SortOrder
    emailOtpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    refreshtoken?: SortOrder
    isEmailVerified?: SortOrder
    emailOtp?: SortOrder
    emailOtpExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lawyerHistory?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LawyerDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    fees?: SortOrder
    availability?: SortOrder
  }

  export type LawyerDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    fees?: SortOrder
  }

  export type LawyerDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    fees?: SortOrder
    availability?: SortOrder
  }

  export type LawyerDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    fees?: SortOrder
    availability?: SortOrder
  }

  export type LawyerDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    fees?: SortOrder
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

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatDeletionUserIdChatIdCompoundUniqueInput = {
    userId: number
    chatId: number
  }

  export type ChatDeletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatDeletionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatDeletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatDeletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
    deletedAt?: SortOrder
  }

  export type ChatDeletionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatReadChatIdUserIdCompoundUniqueInput = {
    chatId: number
    userId: number
  }

  export type ChatReadCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type ChatReadAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type ChatReadMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type ChatReadMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type ChatReadSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
  }

  export type CallCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CallAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type CallMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CallMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CallSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type CallHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    callStart?: SortOrder
    callEnd?: SortOrder
    callUrl?: SortOrder
    deleted?: SortOrder
  }

  export type CallHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type CallHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    callStart?: SortOrder
    callEnd?: SortOrder
    callUrl?: SortOrder
    deleted?: SortOrder
  }

  export type CallHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    callStart?: SortOrder
    callEnd?: SortOrder
    callUrl?: SortOrder
    deleted?: SortOrder
  }

  export type CallHistorySumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type UserCreatelawyerHistoryInput = {
    set: number[]
  }

  export type LawyerDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerDetailsCreateOrConnectWithoutUserInput
    connect?: LawyerDetailsWhereUniqueInput
  }

  export type CallHistoryCreateNestedManyWithoutClientInput = {
    create?: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput> | CallHistoryCreateWithoutClientInput[] | CallHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutClientInput | CallHistoryCreateOrConnectWithoutClientInput[]
    createMany?: CallHistoryCreateManyClientInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type CallHistoryCreateNestedManyWithoutLawyerInput = {
    create?: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput> | CallHistoryCreateWithoutLawyerInput[] | CallHistoryUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutLawyerInput | CallHistoryCreateOrConnectWithoutLawyerInput[]
    createMany?: CallHistoryCreateManyLawyerInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatDeletionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput> | ChatDeletionCreateWithoutUserInput[] | ChatDeletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutUserInput | ChatDeletionCreateOrConnectWithoutUserInput[]
    createMany?: ChatDeletionCreateManyUserInputEnvelope
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
  }

  export type ChatReadCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput> | ChatReadCreateWithoutUserInput[] | ChatReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutUserInput | ChatReadCreateOrConnectWithoutUserInput[]
    createMany?: ChatReadCreateManyUserInputEnvelope
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
  }

  export type LawyerDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerDetailsCreateOrConnectWithoutUserInput
    connect?: LawyerDetailsWhereUniqueInput
  }

  export type CallHistoryUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput> | CallHistoryCreateWithoutClientInput[] | CallHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutClientInput | CallHistoryCreateOrConnectWithoutClientInput[]
    createMany?: CallHistoryCreateManyClientInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type CallHistoryUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput> | CallHistoryCreateWithoutLawyerInput[] | CallHistoryUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutLawyerInput | CallHistoryCreateOrConnectWithoutLawyerInput[]
    createMany?: CallHistoryCreateManyLawyerInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatDeletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput> | ChatDeletionCreateWithoutUserInput[] | ChatDeletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutUserInput | ChatDeletionCreateOrConnectWithoutUserInput[]
    createMany?: ChatDeletionCreateManyUserInputEnvelope
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
  }

  export type ChatReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput> | ChatReadCreateWithoutUserInput[] | ChatReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutUserInput | ChatReadCreateOrConnectWithoutUserInput[]
    createMany?: ChatReadCreateManyUserInputEnvelope
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatelawyerHistoryInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LawyerDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerDetailsCreateOrConnectWithoutUserInput
    upsert?: LawyerDetailsUpsertWithoutUserInput
    disconnect?: LawyerDetailsWhereInput | boolean
    delete?: LawyerDetailsWhereInput | boolean
    connect?: LawyerDetailsWhereUniqueInput
    update?: XOR<XOR<LawyerDetailsUpdateToOneWithWhereWithoutUserInput, LawyerDetailsUpdateWithoutUserInput>, LawyerDetailsUncheckedUpdateWithoutUserInput>
  }

  export type CallHistoryUpdateManyWithoutClientNestedInput = {
    create?: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput> | CallHistoryCreateWithoutClientInput[] | CallHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutClientInput | CallHistoryCreateOrConnectWithoutClientInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutClientInput | CallHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CallHistoryCreateManyClientInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutClientInput | CallHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutClientInput | CallHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type CallHistoryUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput> | CallHistoryCreateWithoutLawyerInput[] | CallHistoryUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutLawyerInput | CallHistoryCreateOrConnectWithoutLawyerInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutLawyerInput | CallHistoryUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: CallHistoryCreateManyLawyerInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutLawyerInput | CallHistoryUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutLawyerInput | CallHistoryUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatDeletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput> | ChatDeletionCreateWithoutUserInput[] | ChatDeletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutUserInput | ChatDeletionCreateOrConnectWithoutUserInput[]
    upsert?: ChatDeletionUpsertWithWhereUniqueWithoutUserInput | ChatDeletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatDeletionCreateManyUserInputEnvelope
    set?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    disconnect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    delete?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    update?: ChatDeletionUpdateWithWhereUniqueWithoutUserInput | ChatDeletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatDeletionUpdateManyWithWhereWithoutUserInput | ChatDeletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
  }

  export type ChatReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput> | ChatReadCreateWithoutUserInput[] | ChatReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutUserInput | ChatReadCreateOrConnectWithoutUserInput[]
    upsert?: ChatReadUpsertWithWhereUniqueWithoutUserInput | ChatReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatReadCreateManyUserInputEnvelope
    set?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    disconnect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    delete?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    update?: ChatReadUpdateWithWhereUniqueWithoutUserInput | ChatReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatReadUpdateManyWithWhereWithoutUserInput | ChatReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerDetailsCreateOrConnectWithoutUserInput
    upsert?: LawyerDetailsUpsertWithoutUserInput
    disconnect?: LawyerDetailsWhereInput | boolean
    delete?: LawyerDetailsWhereInput | boolean
    connect?: LawyerDetailsWhereUniqueInput
    update?: XOR<XOR<LawyerDetailsUpdateToOneWithWhereWithoutUserInput, LawyerDetailsUpdateWithoutUserInput>, LawyerDetailsUncheckedUpdateWithoutUserInput>
  }

  export type CallHistoryUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput> | CallHistoryCreateWithoutClientInput[] | CallHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutClientInput | CallHistoryCreateOrConnectWithoutClientInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutClientInput | CallHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CallHistoryCreateManyClientInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutClientInput | CallHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutClientInput | CallHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput> | CallHistoryCreateWithoutLawyerInput[] | CallHistoryUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutLawyerInput | CallHistoryCreateOrConnectWithoutLawyerInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutLawyerInput | CallHistoryUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: CallHistoryCreateManyLawyerInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutLawyerInput | CallHistoryUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutLawyerInput | CallHistoryUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatDeletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput> | ChatDeletionCreateWithoutUserInput[] | ChatDeletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutUserInput | ChatDeletionCreateOrConnectWithoutUserInput[]
    upsert?: ChatDeletionUpsertWithWhereUniqueWithoutUserInput | ChatDeletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatDeletionCreateManyUserInputEnvelope
    set?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    disconnect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    delete?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    update?: ChatDeletionUpdateWithWhereUniqueWithoutUserInput | ChatDeletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatDeletionUpdateManyWithWhereWithoutUserInput | ChatDeletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
  }

  export type ChatReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput> | ChatReadCreateWithoutUserInput[] | ChatReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutUserInput | ChatReadCreateOrConnectWithoutUserInput[]
    upsert?: ChatReadUpsertWithWhereUniqueWithoutUserInput | ChatReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatReadCreateManyUserInputEnvelope
    set?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    disconnect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    delete?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    update?: ChatReadUpdateWithWhereUniqueWithoutUserInput | ChatReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatReadUpdateManyWithWhereWithoutUserInput | ChatReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLawyerDetailsInput = {
    create?: XOR<UserCreateWithoutLawyerDetailsInput, UserUncheckedCreateWithoutLawyerDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLawyerDetailsNestedInput = {
    create?: XOR<UserCreateWithoutLawyerDetailsInput, UserUncheckedCreateWithoutLawyerDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerDetailsInput
    upsert?: UserUpsertWithoutLawyerDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLawyerDetailsInput, UserUpdateWithoutLawyerDetailsInput>, UserUncheckedUpdateWithoutLawyerDetailsInput>
  }

  export type UserCreateNestedOneWithoutSentChatsInput = {
    create?: XOR<UserCreateWithoutSentChatsInput, UserUncheckedCreateWithoutSentChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedChatsInput = {
    create?: XOR<UserCreateWithoutReceivedChatsInput, UserUncheckedCreateWithoutReceivedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatDeletionCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput> | ChatDeletionCreateWithoutChatInput[] | ChatDeletionUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutChatInput | ChatDeletionCreateOrConnectWithoutChatInput[]
    createMany?: ChatDeletionCreateManyChatInputEnvelope
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
  }

  export type ChatReadCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput> | ChatReadCreateWithoutChatInput[] | ChatReadUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutChatInput | ChatReadCreateOrConnectWithoutChatInput[]
    createMany?: ChatReadCreateManyChatInputEnvelope
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
  }

  export type ChatDeletionUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput> | ChatDeletionCreateWithoutChatInput[] | ChatDeletionUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutChatInput | ChatDeletionCreateOrConnectWithoutChatInput[]
    createMany?: ChatDeletionCreateManyChatInputEnvelope
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
  }

  export type ChatReadUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput> | ChatReadCreateWithoutChatInput[] | ChatReadUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutChatInput | ChatReadCreateOrConnectWithoutChatInput[]
    createMany?: ChatReadCreateManyChatInputEnvelope
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSentChatsNestedInput = {
    create?: XOR<UserCreateWithoutSentChatsInput, UserUncheckedCreateWithoutSentChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentChatsInput
    upsert?: UserUpsertWithoutSentChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentChatsInput, UserUpdateWithoutSentChatsInput>, UserUncheckedUpdateWithoutSentChatsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedChatsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedChatsInput, UserUncheckedCreateWithoutReceivedChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedChatsInput
    upsert?: UserUpsertWithoutReceivedChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedChatsInput, UserUpdateWithoutReceivedChatsInput>, UserUncheckedUpdateWithoutReceivedChatsInput>
  }

  export type ChatDeletionUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput> | ChatDeletionCreateWithoutChatInput[] | ChatDeletionUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutChatInput | ChatDeletionCreateOrConnectWithoutChatInput[]
    upsert?: ChatDeletionUpsertWithWhereUniqueWithoutChatInput | ChatDeletionUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatDeletionCreateManyChatInputEnvelope
    set?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    disconnect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    delete?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    update?: ChatDeletionUpdateWithWhereUniqueWithoutChatInput | ChatDeletionUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatDeletionUpdateManyWithWhereWithoutChatInput | ChatDeletionUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
  }

  export type ChatReadUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput> | ChatReadCreateWithoutChatInput[] | ChatReadUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutChatInput | ChatReadCreateOrConnectWithoutChatInput[]
    upsert?: ChatReadUpsertWithWhereUniqueWithoutChatInput | ChatReadUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatReadCreateManyChatInputEnvelope
    set?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    disconnect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    delete?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    update?: ChatReadUpdateWithWhereUniqueWithoutChatInput | ChatReadUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatReadUpdateManyWithWhereWithoutChatInput | ChatReadUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
  }

  export type ChatDeletionUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput> | ChatDeletionCreateWithoutChatInput[] | ChatDeletionUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatDeletionCreateOrConnectWithoutChatInput | ChatDeletionCreateOrConnectWithoutChatInput[]
    upsert?: ChatDeletionUpsertWithWhereUniqueWithoutChatInput | ChatDeletionUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatDeletionCreateManyChatInputEnvelope
    set?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    disconnect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    delete?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    connect?: ChatDeletionWhereUniqueInput | ChatDeletionWhereUniqueInput[]
    update?: ChatDeletionUpdateWithWhereUniqueWithoutChatInput | ChatDeletionUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatDeletionUpdateManyWithWhereWithoutChatInput | ChatDeletionUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
  }

  export type ChatReadUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput> | ChatReadCreateWithoutChatInput[] | ChatReadUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatReadCreateOrConnectWithoutChatInput | ChatReadCreateOrConnectWithoutChatInput[]
    upsert?: ChatReadUpsertWithWhereUniqueWithoutChatInput | ChatReadUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatReadCreateManyChatInputEnvelope
    set?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    disconnect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    delete?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    connect?: ChatReadWhereUniqueInput | ChatReadWhereUniqueInput[]
    update?: ChatReadUpdateWithWhereUniqueWithoutChatInput | ChatReadUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatReadUpdateManyWithWhereWithoutChatInput | ChatReadUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatDeletionsInput = {
    create?: XOR<UserCreateWithoutChatDeletionsInput, UserUncheckedCreateWithoutChatDeletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatDeletionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutDeletedByInput = {
    create?: XOR<ChatCreateWithoutDeletedByInput, ChatUncheckedCreateWithoutDeletedByInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDeletedByInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatDeletionsNestedInput = {
    create?: XOR<UserCreateWithoutChatDeletionsInput, UserUncheckedCreateWithoutChatDeletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatDeletionsInput
    upsert?: UserUpsertWithoutChatDeletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatDeletionsInput, UserUpdateWithoutChatDeletionsInput>, UserUncheckedUpdateWithoutChatDeletionsInput>
  }

  export type ChatUpdateOneRequiredWithoutDeletedByNestedInput = {
    create?: XOR<ChatCreateWithoutDeletedByInput, ChatUncheckedCreateWithoutDeletedByInput>
    connectOrCreate?: ChatCreateOrConnectWithoutDeletedByInput
    upsert?: ChatUpsertWithoutDeletedByInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutDeletedByInput, ChatUpdateWithoutDeletedByInput>, ChatUncheckedUpdateWithoutDeletedByInput>
  }

  export type ChatCreateNestedOneWithoutReadsInput = {
    create?: XOR<ChatCreateWithoutReadsInput, ChatUncheckedCreateWithoutReadsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutReadsInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatReadsInput = {
    create?: XOR<UserCreateWithoutChatReadsInput, UserUncheckedCreateWithoutChatReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatReadsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutReadsNestedInput = {
    create?: XOR<ChatCreateWithoutReadsInput, ChatUncheckedCreateWithoutReadsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutReadsInput
    upsert?: ChatUpsertWithoutReadsInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutReadsInput, ChatUpdateWithoutReadsInput>, ChatUncheckedUpdateWithoutReadsInput>
  }

  export type UserUpdateOneRequiredWithoutChatReadsNestedInput = {
    create?: XOR<UserCreateWithoutChatReadsInput, UserUncheckedCreateWithoutChatReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatReadsInput
    upsert?: UserUpsertWithoutChatReadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatReadsInput, UserUpdateWithoutChatReadsInput>, UserUncheckedUpdateWithoutChatReadsInput>
  }

  export type UserCreateNestedOneWithoutClientCallsInput = {
    create?: XOR<UserCreateWithoutClientCallsInput, UserUncheckedCreateWithoutClientCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCallsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLawyerCallsInput = {
    create?: XOR<UserCreateWithoutLawyerCallsInput, UserUncheckedCreateWithoutLawyerCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerCallsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutClientCallsNestedInput = {
    create?: XOR<UserCreateWithoutClientCallsInput, UserUncheckedCreateWithoutClientCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCallsInput
    upsert?: UserUpsertWithoutClientCallsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientCallsInput, UserUpdateWithoutClientCallsInput>, UserUncheckedUpdateWithoutClientCallsInput>
  }

  export type UserUpdateOneRequiredWithoutLawyerCallsNestedInput = {
    create?: XOR<UserCreateWithoutLawyerCallsInput, UserUncheckedCreateWithoutLawyerCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerCallsInput
    upsert?: UserUpsertWithoutLawyerCallsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLawyerCallsInput, UserUpdateWithoutLawyerCallsInput>, UserUncheckedUpdateWithoutLawyerCallsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type LawyerDetailsCreateWithoutUserInput = {
    specialization?: string | null
    experience?: number | null
    fees?: number | null
    availability?: boolean
  }

  export type LawyerDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    specialization?: string | null
    experience?: number | null
    fees?: number | null
    availability?: boolean
  }

  export type LawyerDetailsCreateOrConnectWithoutUserInput = {
    where: LawyerDetailsWhereUniqueInput
    create: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
  }

  export type CallHistoryCreateWithoutClientInput = {
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
    lawyer: UserCreateNestedOneWithoutLawyerCallsInput
  }

  export type CallHistoryUncheckedCreateWithoutClientInput = {
    id?: number
    lawyerId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type CallHistoryCreateOrConnectWithoutClientInput = {
    where: CallHistoryWhereUniqueInput
    create: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput>
  }

  export type CallHistoryCreateManyClientInputEnvelope = {
    data: CallHistoryCreateManyClientInput | CallHistoryCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CallHistoryCreateWithoutLawyerInput = {
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
    client: UserCreateNestedOneWithoutClientCallsInput
  }

  export type CallHistoryUncheckedCreateWithoutLawyerInput = {
    id?: number
    clientId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type CallHistoryCreateOrConnectWithoutLawyerInput = {
    where: CallHistoryWhereUniqueInput
    create: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput>
  }

  export type CallHistoryCreateManyLawyerInputEnvelope = {
    data: CallHistoryCreateManyLawyerInput | CallHistoryCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutSenderInput = {
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedChatsInput
    deletedBy?: ChatDeletionCreateNestedManyWithoutChatInput
    reads?: ChatReadCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    deletedBy?: ChatDeletionUncheckedCreateNestedManyWithoutChatInput
    reads?: ChatReadUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutSenderInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatCreateManySenderInputEnvelope = {
    data: ChatCreateManySenderInput | ChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReceiverInput = {
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentChatsInput
    deletedBy?: ChatDeletionCreateNestedManyWithoutChatInput
    reads?: ChatReadCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    deletedBy?: ChatDeletionUncheckedCreateNestedManyWithoutChatInput
    reads?: ChatReadUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatCreateManyReceiverInputEnvelope = {
    data: ChatCreateManyReceiverInput | ChatCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ChatDeletionCreateWithoutUserInput = {
    deletedAt?: Date | string
    chat: ChatCreateNestedOneWithoutDeletedByInput
  }

  export type ChatDeletionUncheckedCreateWithoutUserInput = {
    id?: number
    chatId: number
    deletedAt?: Date | string
  }

  export type ChatDeletionCreateOrConnectWithoutUserInput = {
    where: ChatDeletionWhereUniqueInput
    create: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput>
  }

  export type ChatDeletionCreateManyUserInputEnvelope = {
    data: ChatDeletionCreateManyUserInput | ChatDeletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatReadCreateWithoutUserInput = {
    seenAt?: Date | string
    chat: ChatCreateNestedOneWithoutReadsInput
  }

  export type ChatReadUncheckedCreateWithoutUserInput = {
    id?: number
    chatId: number
    seenAt?: Date | string
  }

  export type ChatReadCreateOrConnectWithoutUserInput = {
    where: ChatReadWhereUniqueInput
    create: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput>
  }

  export type ChatReadCreateManyUserInputEnvelope = {
    data: ChatReadCreateManyUserInput | ChatReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LawyerDetailsUpsertWithoutUserInput = {
    update: XOR<LawyerDetailsUpdateWithoutUserInput, LawyerDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<LawyerDetailsCreateWithoutUserInput, LawyerDetailsUncheckedCreateWithoutUserInput>
    where?: LawyerDetailsWhereInput
  }

  export type LawyerDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: LawyerDetailsWhereInput
    data: XOR<LawyerDetailsUpdateWithoutUserInput, LawyerDetailsUncheckedUpdateWithoutUserInput>
  }

  export type LawyerDetailsUpdateWithoutUserInput = {
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    fees?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryUpsertWithWhereUniqueWithoutClientInput = {
    where: CallHistoryWhereUniqueInput
    update: XOR<CallHistoryUpdateWithoutClientInput, CallHistoryUncheckedUpdateWithoutClientInput>
    create: XOR<CallHistoryCreateWithoutClientInput, CallHistoryUncheckedCreateWithoutClientInput>
  }

  export type CallHistoryUpdateWithWhereUniqueWithoutClientInput = {
    where: CallHistoryWhereUniqueInput
    data: XOR<CallHistoryUpdateWithoutClientInput, CallHistoryUncheckedUpdateWithoutClientInput>
  }

  export type CallHistoryUpdateManyWithWhereWithoutClientInput = {
    where: CallHistoryScalarWhereInput
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyWithoutClientInput>
  }

  export type CallHistoryScalarWhereInput = {
    AND?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    OR?: CallHistoryScalarWhereInput[]
    NOT?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    id?: IntFilter<"CallHistory"> | number
    clientId?: IntFilter<"CallHistory"> | number
    lawyerId?: IntFilter<"CallHistory"> | number
    callStart?: DateTimeFilter<"CallHistory"> | Date | string
    callEnd?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    callUrl?: StringNullableFilter<"CallHistory"> | string | null
    deleted?: BoolFilter<"CallHistory"> | boolean
  }

  export type CallHistoryUpsertWithWhereUniqueWithoutLawyerInput = {
    where: CallHistoryWhereUniqueInput
    update: XOR<CallHistoryUpdateWithoutLawyerInput, CallHistoryUncheckedUpdateWithoutLawyerInput>
    create: XOR<CallHistoryCreateWithoutLawyerInput, CallHistoryUncheckedCreateWithoutLawyerInput>
  }

  export type CallHistoryUpdateWithWhereUniqueWithoutLawyerInput = {
    where: CallHistoryWhereUniqueInput
    data: XOR<CallHistoryUpdateWithoutLawyerInput, CallHistoryUncheckedUpdateWithoutLawyerInput>
  }

  export type CallHistoryUpdateManyWithWhereWithoutLawyerInput = {
    where: CallHistoryScalarWhereInput
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyWithoutLawyerInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringNullableFilter<"Chat"> | string | null
    fileUrl?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ChatDeletionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatDeletionWhereUniqueInput
    update: XOR<ChatDeletionUpdateWithoutUserInput, ChatDeletionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatDeletionCreateWithoutUserInput, ChatDeletionUncheckedCreateWithoutUserInput>
  }

  export type ChatDeletionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatDeletionWhereUniqueInput
    data: XOR<ChatDeletionUpdateWithoutUserInput, ChatDeletionUncheckedUpdateWithoutUserInput>
  }

  export type ChatDeletionUpdateManyWithWhereWithoutUserInput = {
    where: ChatDeletionScalarWhereInput
    data: XOR<ChatDeletionUpdateManyMutationInput, ChatDeletionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatDeletionScalarWhereInput = {
    AND?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
    OR?: ChatDeletionScalarWhereInput[]
    NOT?: ChatDeletionScalarWhereInput | ChatDeletionScalarWhereInput[]
    id?: IntFilter<"ChatDeletion"> | number
    userId?: IntFilter<"ChatDeletion"> | number
    chatId?: IntFilter<"ChatDeletion"> | number
    deletedAt?: DateTimeFilter<"ChatDeletion"> | Date | string
  }

  export type ChatReadUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatReadWhereUniqueInput
    update: XOR<ChatReadUpdateWithoutUserInput, ChatReadUncheckedUpdateWithoutUserInput>
    create: XOR<ChatReadCreateWithoutUserInput, ChatReadUncheckedCreateWithoutUserInput>
  }

  export type ChatReadUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatReadWhereUniqueInput
    data: XOR<ChatReadUpdateWithoutUserInput, ChatReadUncheckedUpdateWithoutUserInput>
  }

  export type ChatReadUpdateManyWithWhereWithoutUserInput = {
    where: ChatReadScalarWhereInput
    data: XOR<ChatReadUpdateManyMutationInput, ChatReadUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatReadScalarWhereInput = {
    AND?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
    OR?: ChatReadScalarWhereInput[]
    NOT?: ChatReadScalarWhereInput | ChatReadScalarWhereInput[]
    id?: IntFilter<"ChatRead"> | number
    chatId?: IntFilter<"ChatRead"> | number
    userId?: IntFilter<"ChatRead"> | number
    seenAt?: DateTimeFilter<"ChatRead"> | Date | string
  }

  export type UserCreateWithoutLawyerDetailsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLawyerDetailsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLawyerDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLawyerDetailsInput, UserUncheckedCreateWithoutLawyerDetailsInput>
  }

  export type UserUpsertWithoutLawyerDetailsInput = {
    update: XOR<UserUpdateWithoutLawyerDetailsInput, UserUncheckedUpdateWithoutLawyerDetailsInput>
    create: XOR<UserCreateWithoutLawyerDetailsInput, UserUncheckedCreateWithoutLawyerDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLawyerDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLawyerDetailsInput, UserUncheckedUpdateWithoutLawyerDetailsInput>
  }

  export type UserUpdateWithoutLawyerDetailsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLawyerDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentChatsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentChatsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentChatsInput, UserUncheckedCreateWithoutSentChatsInput>
  }

  export type UserCreateWithoutReceivedChatsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedChatsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedChatsInput, UserUncheckedCreateWithoutReceivedChatsInput>
  }

  export type ChatDeletionCreateWithoutChatInput = {
    deletedAt?: Date | string
    user: UserCreateNestedOneWithoutChatDeletionsInput
  }

  export type ChatDeletionUncheckedCreateWithoutChatInput = {
    id?: number
    userId: number
    deletedAt?: Date | string
  }

  export type ChatDeletionCreateOrConnectWithoutChatInput = {
    where: ChatDeletionWhereUniqueInput
    create: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput>
  }

  export type ChatDeletionCreateManyChatInputEnvelope = {
    data: ChatDeletionCreateManyChatInput | ChatDeletionCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatReadCreateWithoutChatInput = {
    seenAt?: Date | string
    user: UserCreateNestedOneWithoutChatReadsInput
  }

  export type ChatReadUncheckedCreateWithoutChatInput = {
    id?: number
    userId: number
    seenAt?: Date | string
  }

  export type ChatReadCreateOrConnectWithoutChatInput = {
    where: ChatReadWhereUniqueInput
    create: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput>
  }

  export type ChatReadCreateManyChatInputEnvelope = {
    data: ChatReadCreateManyChatInput | ChatReadCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentChatsInput = {
    update: XOR<UserUpdateWithoutSentChatsInput, UserUncheckedUpdateWithoutSentChatsInput>
    create: XOR<UserCreateWithoutSentChatsInput, UserUncheckedCreateWithoutSentChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentChatsInput, UserUncheckedUpdateWithoutSentChatsInput>
  }

  export type UserUpdateWithoutSentChatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedChatsInput = {
    update: XOR<UserUpdateWithoutReceivedChatsInput, UserUncheckedUpdateWithoutReceivedChatsInput>
    create: XOR<UserCreateWithoutReceivedChatsInput, UserUncheckedCreateWithoutReceivedChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedChatsInput, UserUncheckedUpdateWithoutReceivedChatsInput>
  }

  export type UserUpdateWithoutReceivedChatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatDeletionUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatDeletionWhereUniqueInput
    update: XOR<ChatDeletionUpdateWithoutChatInput, ChatDeletionUncheckedUpdateWithoutChatInput>
    create: XOR<ChatDeletionCreateWithoutChatInput, ChatDeletionUncheckedCreateWithoutChatInput>
  }

  export type ChatDeletionUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatDeletionWhereUniqueInput
    data: XOR<ChatDeletionUpdateWithoutChatInput, ChatDeletionUncheckedUpdateWithoutChatInput>
  }

  export type ChatDeletionUpdateManyWithWhereWithoutChatInput = {
    where: ChatDeletionScalarWhereInput
    data: XOR<ChatDeletionUpdateManyMutationInput, ChatDeletionUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatReadUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatReadWhereUniqueInput
    update: XOR<ChatReadUpdateWithoutChatInput, ChatReadUncheckedUpdateWithoutChatInput>
    create: XOR<ChatReadCreateWithoutChatInput, ChatReadUncheckedCreateWithoutChatInput>
  }

  export type ChatReadUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatReadWhereUniqueInput
    data: XOR<ChatReadUpdateWithoutChatInput, ChatReadUncheckedUpdateWithoutChatInput>
  }

  export type ChatReadUpdateManyWithWhereWithoutChatInput = {
    where: ChatReadScalarWhereInput
    data: XOR<ChatReadUpdateManyMutationInput, ChatReadUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutChatDeletionsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatDeletionsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatDeletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatDeletionsInput, UserUncheckedCreateWithoutChatDeletionsInput>
  }

  export type ChatCreateWithoutDeletedByInput = {
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentChatsInput
    receiver: UserCreateNestedOneWithoutReceivedChatsInput
    reads?: ChatReadCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutDeletedByInput = {
    id?: number
    senderId: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    reads?: ChatReadUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutDeletedByInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutDeletedByInput, ChatUncheckedCreateWithoutDeletedByInput>
  }

  export type UserUpsertWithoutChatDeletionsInput = {
    update: XOR<UserUpdateWithoutChatDeletionsInput, UserUncheckedUpdateWithoutChatDeletionsInput>
    create: XOR<UserCreateWithoutChatDeletionsInput, UserUncheckedCreateWithoutChatDeletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatDeletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatDeletionsInput, UserUncheckedUpdateWithoutChatDeletionsInput>
  }

  export type UserUpdateWithoutChatDeletionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatDeletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutDeletedByInput = {
    update: XOR<ChatUpdateWithoutDeletedByInput, ChatUncheckedUpdateWithoutDeletedByInput>
    create: XOR<ChatCreateWithoutDeletedByInput, ChatUncheckedCreateWithoutDeletedByInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutDeletedByInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutDeletedByInput, ChatUncheckedUpdateWithoutDeletedByInput>
  }

  export type ChatUpdateWithoutDeletedByInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentChatsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedChatsNestedInput
    reads?: ChatReadUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutDeletedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: ChatReadUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateWithoutReadsInput = {
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentChatsInput
    receiver: UserCreateNestedOneWithoutReceivedChatsInput
    deletedBy?: ChatDeletionCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutReadsInput = {
    id?: number
    senderId: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    deletedBy?: ChatDeletionUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutReadsInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReadsInput, ChatUncheckedCreateWithoutReadsInput>
  }

  export type UserCreateWithoutChatReadsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatReadsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatReadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatReadsInput, UserUncheckedCreateWithoutChatReadsInput>
  }

  export type ChatUpsertWithoutReadsInput = {
    update: XOR<ChatUpdateWithoutReadsInput, ChatUncheckedUpdateWithoutReadsInput>
    create: XOR<ChatCreateWithoutReadsInput, ChatUncheckedCreateWithoutReadsInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutReadsInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutReadsInput, ChatUncheckedUpdateWithoutReadsInput>
  }

  export type ChatUpdateWithoutReadsInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentChatsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedChatsNestedInput
    deletedBy?: ChatDeletionUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedBy?: ChatDeletionUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutChatReadsInput = {
    update: XOR<UserUpdateWithoutChatReadsInput, UserUncheckedUpdateWithoutChatReadsInput>
    create: XOR<UserCreateWithoutChatReadsInput, UserUncheckedCreateWithoutChatReadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatReadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatReadsInput, UserUncheckedUpdateWithoutChatReadsInput>
  }

  export type UserUpdateWithoutChatReadsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClientCallsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    lawyerCalls?: CallHistoryCreateNestedManyWithoutLawyerInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientCallsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    lawyerCalls?: CallHistoryUncheckedCreateNestedManyWithoutLawyerInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientCallsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientCallsInput, UserUncheckedCreateWithoutClientCallsInput>
  }

  export type UserCreateWithoutLawyerCallsInput = {
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryCreateNestedManyWithoutClientInput
    sentChats?: ChatCreateNestedManyWithoutSenderInput
    receivedChats?: ChatCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionCreateNestedManyWithoutUserInput
    chatReads?: ChatReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLawyerCallsInput = {
    id?: number
    email: string
    username: string
    password: string
    profile?: string | null
    refreshtoken?: string | null
    isEmailVerified?: boolean
    emailOtp?: string | null
    emailOtpExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    latitude?: number | null
    longitude?: number | null
    lawyerHistory?: UserCreatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedCreateNestedOneWithoutUserInput
    clientCalls?: CallHistoryUncheckedCreateNestedManyWithoutClientInput
    sentChats?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedChats?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatDeletions?: ChatDeletionUncheckedCreateNestedManyWithoutUserInput
    chatReads?: ChatReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLawyerCallsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLawyerCallsInput, UserUncheckedCreateWithoutLawyerCallsInput>
  }

  export type UserUpsertWithoutClientCallsInput = {
    update: XOR<UserUpdateWithoutClientCallsInput, UserUncheckedUpdateWithoutClientCallsInput>
    create: XOR<UserCreateWithoutClientCallsInput, UserUncheckedCreateWithoutClientCallsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientCallsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientCallsInput, UserUncheckedUpdateWithoutClientCallsInput>
  }

  export type UserUpdateWithoutClientCallsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    lawyerCalls?: CallHistoryUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    lawyerCalls?: CallHistoryUncheckedUpdateManyWithoutLawyerNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLawyerCallsInput = {
    update: XOR<UserUpdateWithoutLawyerCallsInput, UserUncheckedUpdateWithoutLawyerCallsInput>
    create: XOR<UserCreateWithoutLawyerCallsInput, UserUncheckedCreateWithoutLawyerCallsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLawyerCallsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLawyerCallsInput, UserUncheckedUpdateWithoutLawyerCallsInput>
  }

  export type UserUpdateWithoutLawyerCallsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUpdateManyWithoutClientNestedInput
    sentChats?: ChatUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLawyerCallsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailOtp?: NullableStringFieldUpdateOperationsInput | string | null
    emailOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lawyerHistory?: UserUpdatelawyerHistoryInput | number[]
    lawyerDetails?: LawyerDetailsUncheckedUpdateOneWithoutUserNestedInput
    clientCalls?: CallHistoryUncheckedUpdateManyWithoutClientNestedInput
    sentChats?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedChats?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatDeletions?: ChatDeletionUncheckedUpdateManyWithoutUserNestedInput
    chatReads?: ChatReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CallHistoryCreateManyClientInput = {
    id?: number
    lawyerId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type CallHistoryCreateManyLawyerInput = {
    id?: number
    clientId: number
    callStart?: Date | string
    callEnd?: Date | string | null
    callUrl?: string | null
    deleted?: boolean
  }

  export type ChatCreateManySenderInput = {
    id?: number
    receiverId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ChatCreateManyReceiverInput = {
    id?: number
    senderId: number
    message?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
  }

  export type ChatDeletionCreateManyUserInput = {
    id?: number
    chatId: number
    deletedAt?: Date | string
  }

  export type ChatReadCreateManyUserInput = {
    id?: number
    chatId: number
    seenAt?: Date | string
  }

  export type CallHistoryUpdateWithoutClientInput = {
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lawyer?: UserUpdateOneRequiredWithoutLawyerCallsNestedInput
  }

  export type CallHistoryUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryUpdateWithoutLawyerInput = {
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    client?: UserUpdateOneRequiredWithoutClientCallsNestedInput
  }

  export type CallHistoryUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CallHistoryUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    callStart?: DateTimeFieldUpdateOperationsInput | Date | string
    callEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    callUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatUpdateWithoutSenderInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedChatsNestedInput
    deletedBy?: ChatDeletionUpdateManyWithoutChatNestedInput
    reads?: ChatReadUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedBy?: ChatDeletionUncheckedUpdateManyWithoutChatNestedInput
    reads?: ChatReadUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutReceiverInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentChatsNestedInput
    deletedBy?: ChatDeletionUpdateManyWithoutChatNestedInput
    reads?: ChatReadUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedBy?: ChatDeletionUncheckedUpdateManyWithoutChatNestedInput
    reads?: ChatReadUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionUpdateWithoutUserInput = {
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutDeletedByNestedInput
  }

  export type ChatDeletionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadUpdateWithoutUserInput = {
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutReadsNestedInput
  }

  export type ChatReadUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionCreateManyChatInput = {
    id?: number
    userId: number
    deletedAt?: Date | string
  }

  export type ChatReadCreateManyChatInput = {
    id?: number
    userId: number
    seenAt?: Date | string
  }

  export type ChatDeletionUpdateWithoutChatInput = {
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatDeletionsNestedInput
  }

  export type ChatDeletionUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatDeletionUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadUpdateWithoutChatInput = {
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatReadsNestedInput
  }

  export type ChatReadUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReadUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
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