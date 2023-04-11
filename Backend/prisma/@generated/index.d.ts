
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model mst_role
 * 
 */
export type mst_role = {
  id: number
  uuid: string
  role_name: string
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
  description: string
}

/**
 * Model mst_user
 * 
 */
export type mst_user = {
  id: number
  uuid: string
  username: string
  password: string
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
  employee_id: number | null
  role: Prisma.JsonValue | null
}

/**
 * Model mst_department
 * 
 */
export type mst_department = {
  id: number
  uuid: string
  department_name: string
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}

/**
 * Model mst_section
 * 
 */
export type mst_section = {
  id: number
  uuid: string
  department_id: number
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
  section_name: string
}

/**
 * Model mst_employee
 * 
 */
export type mst_employee = {
  id: number
  uuid: string
  nsk: number
  name: string
  department_id: number | null
  section_id: number | null
  created_on: Date | null
  modified_on: Date | null
  created_by: number | null
  modified_by: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mst_roles
 * const mst_roles = await prisma.mst_role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mst_roles
   * const mst_roles = await prisma.mst_role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.mst_role`: Exposes CRUD operations for the **mst_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_roles
    * const mst_roles = await prisma.mst_role.findMany()
    * ```
    */
  get mst_role(): Prisma.mst_roleDelegate<GlobalReject>;

  /**
   * `prisma.mst_user`: Exposes CRUD operations for the **mst_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_users
    * const mst_users = await prisma.mst_user.findMany()
    * ```
    */
  get mst_user(): Prisma.mst_userDelegate<GlobalReject>;

  /**
   * `prisma.mst_department`: Exposes CRUD operations for the **mst_department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_departments
    * const mst_departments = await prisma.mst_department.findMany()
    * ```
    */
  get mst_department(): Prisma.mst_departmentDelegate<GlobalReject>;

  /**
   * `prisma.mst_section`: Exposes CRUD operations for the **mst_section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_sections
    * const mst_sections = await prisma.mst_section.findMany()
    * ```
    */
  get mst_section(): Prisma.mst_sectionDelegate<GlobalReject>;

  /**
   * `prisma.mst_employee`: Exposes CRUD operations for the **mst_employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_employees
    * const mst_employees = await prisma.mst_employee.findMany()
    * ```
    */
  get mst_employee(): Prisma.mst_employeeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    mst_role: 'mst_role',
    mst_user: 'mst_user',
    mst_department: 'mst_department',
    mst_section: 'mst_section',
    mst_employee: 'mst_employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Mst_departmentCountOutputType
   */


  export type Mst_departmentCountOutputType = {
    wip_mst_section: number
  }

  export type Mst_departmentCountOutputTypeSelect = {
    wip_mst_section?: boolean
  }

  export type Mst_departmentCountOutputTypeGetPayload<S extends boolean | null | undefined | Mst_departmentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mst_departmentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mst_departmentCountOutputTypeArgs)
    ? Mst_departmentCountOutputType 
    : S extends { select: any } & (Mst_departmentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mst_departmentCountOutputType ? Mst_departmentCountOutputType[P] : never
  } 
      : Mst_departmentCountOutputType




  // Custom InputTypes

  /**
   * Mst_departmentCountOutputType without action
   */
  export type Mst_departmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mst_departmentCountOutputType
     */
    select?: Mst_departmentCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model mst_role
   */


  export type AggregateMst_role = {
    _count: Mst_roleCountAggregateOutputType | null
    _avg: Mst_roleAvgAggregateOutputType | null
    _sum: Mst_roleSumAggregateOutputType | null
    _min: Mst_roleMinAggregateOutputType | null
    _max: Mst_roleMaxAggregateOutputType | null
  }

  export type Mst_roleAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_roleSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_roleMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    role_name: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    description: string | null
  }

  export type Mst_roleMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    role_name: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    description: string | null
  }

  export type Mst_roleCountAggregateOutputType = {
    id: number
    uuid: number
    role_name: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    description: number
    _all: number
  }


  export type Mst_roleAvgAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_roleSumAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_roleMinAggregateInputType = {
    id?: true
    uuid?: true
    role_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    description?: true
  }

  export type Mst_roleMaxAggregateInputType = {
    id?: true
    uuid?: true
    role_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    description?: true
  }

  export type Mst_roleCountAggregateInputType = {
    id?: true
    uuid?: true
    role_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    description?: true
    _all?: true
  }

  export type Mst_roleAggregateArgs = {
    /**
     * Filter which mst_role to aggregate.
     */
    where?: mst_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_roles to fetch.
     */
    orderBy?: Enumerable<mst_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_roles
    **/
    _count?: true | Mst_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_roleMaxAggregateInputType
  }

  export type GetMst_roleAggregateType<T extends Mst_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_role[P]>
      : GetScalarType<T[P], AggregateMst_role[P]>
  }




  export type Mst_roleGroupByArgs = {
    where?: mst_roleWhereInput
    orderBy?: Enumerable<mst_roleOrderByWithAggregationInput>
    by: Mst_roleScalarFieldEnum[]
    having?: mst_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_roleCountAggregateInputType | true
    _avg?: Mst_roleAvgAggregateInputType
    _sum?: Mst_roleSumAggregateInputType
    _min?: Mst_roleMinAggregateInputType
    _max?: Mst_roleMaxAggregateInputType
  }


  export type Mst_roleGroupByOutputType = {
    id: number
    uuid: string
    role_name: string
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    description: string
    _count: Mst_roleCountAggregateOutputType | null
    _avg: Mst_roleAvgAggregateOutputType | null
    _sum: Mst_roleSumAggregateOutputType | null
    _min: Mst_roleMinAggregateOutputType | null
    _max: Mst_roleMaxAggregateOutputType | null
  }

  type GetMst_roleGroupByPayload<T extends Mst_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Mst_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_roleGroupByOutputType[P]>
        }
      >
    >


  export type mst_roleSelect = {
    id?: boolean
    uuid?: boolean
    role_name?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    description?: boolean
  }


  export type mst_roleGetPayload<S extends boolean | null | undefined | mst_roleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mst_role :
    S extends undefined ? never :
    S extends { include: any } & (mst_roleArgs | mst_roleFindManyArgs)
    ? mst_role 
    : S extends { select: any } & (mst_roleArgs | mst_roleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof mst_role ? mst_role[P] : never
  } 
      : mst_role


  type mst_roleCountArgs = 
    Omit<mst_roleFindManyArgs, 'select' | 'include'> & {
      select?: Mst_roleCountAggregateInputType | true
    }

  export interface mst_roleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mst_role that matches the filter.
     * @param {mst_roleFindUniqueArgs} args - Arguments to find a Mst_role
     * @example
     * // Get one Mst_role
     * const mst_role = await prisma.mst_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mst_roleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mst_roleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mst_role'> extends True ? Prisma__mst_roleClient<mst_roleGetPayload<T>> : Prisma__mst_roleClient<mst_roleGetPayload<T> | null, null>

    /**
     * Find one Mst_role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mst_roleFindUniqueOrThrowArgs} args - Arguments to find a Mst_role
     * @example
     * // Get one Mst_role
     * const mst_role = await prisma.mst_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mst_roleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mst_roleFindUniqueOrThrowArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Find the first Mst_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_roleFindFirstArgs} args - Arguments to find a Mst_role
     * @example
     * // Get one Mst_role
     * const mst_role = await prisma.mst_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mst_roleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mst_roleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mst_role'> extends True ? Prisma__mst_roleClient<mst_roleGetPayload<T>> : Prisma__mst_roleClient<mst_roleGetPayload<T> | null, null>

    /**
     * Find the first Mst_role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_roleFindFirstOrThrowArgs} args - Arguments to find a Mst_role
     * @example
     * // Get one Mst_role
     * const mst_role = await prisma.mst_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mst_roleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mst_roleFindFirstOrThrowArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Find zero or more Mst_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_roles
     * const mst_roles = await prisma.mst_role.findMany()
     * 
     * // Get first 10 Mst_roles
     * const mst_roles = await prisma.mst_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_roleWithIdOnly = await prisma.mst_role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mst_roleFindManyArgs>(
      args?: SelectSubset<T, mst_roleFindManyArgs>
    ): Prisma.PrismaPromise<Array<mst_roleGetPayload<T>>>

    /**
     * Create a Mst_role.
     * @param {mst_roleCreateArgs} args - Arguments to create a Mst_role.
     * @example
     * // Create one Mst_role
     * const Mst_role = await prisma.mst_role.create({
     *   data: {
     *     // ... data to create a Mst_role
     *   }
     * })
     * 
    **/
    create<T extends mst_roleCreateArgs>(
      args: SelectSubset<T, mst_roleCreateArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Create many Mst_roles.
     *     @param {mst_roleCreateManyArgs} args - Arguments to create many Mst_roles.
     *     @example
     *     // Create many Mst_roles
     *     const mst_role = await prisma.mst_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mst_roleCreateManyArgs>(
      args?: SelectSubset<T, mst_roleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_role.
     * @param {mst_roleDeleteArgs} args - Arguments to delete one Mst_role.
     * @example
     * // Delete one Mst_role
     * const Mst_role = await prisma.mst_role.delete({
     *   where: {
     *     // ... filter to delete one Mst_role
     *   }
     * })
     * 
    **/
    delete<T extends mst_roleDeleteArgs>(
      args: SelectSubset<T, mst_roleDeleteArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Update one Mst_role.
     * @param {mst_roleUpdateArgs} args - Arguments to update one Mst_role.
     * @example
     * // Update one Mst_role
     * const mst_role = await prisma.mst_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mst_roleUpdateArgs>(
      args: SelectSubset<T, mst_roleUpdateArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Delete zero or more Mst_roles.
     * @param {mst_roleDeleteManyArgs} args - Arguments to filter Mst_roles to delete.
     * @example
     * // Delete a few Mst_roles
     * const { count } = await prisma.mst_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mst_roleDeleteManyArgs>(
      args?: SelectSubset<T, mst_roleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_roles
     * const mst_role = await prisma.mst_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mst_roleUpdateManyArgs>(
      args: SelectSubset<T, mst_roleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_role.
     * @param {mst_roleUpsertArgs} args - Arguments to update or create a Mst_role.
     * @example
     * // Update or create a Mst_role
     * const mst_role = await prisma.mst_role.upsert({
     *   create: {
     *     // ... data to create a Mst_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_role we want to update
     *   }
     * })
    **/
    upsert<T extends mst_roleUpsertArgs>(
      args: SelectSubset<T, mst_roleUpsertArgs>
    ): Prisma__mst_roleClient<mst_roleGetPayload<T>>

    /**
     * Count the number of Mst_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_roleCountArgs} args - Arguments to filter Mst_roles to count.
     * @example
     * // Count the number of Mst_roles
     * const count = await prisma.mst_role.count({
     *   where: {
     *     // ... the filter for the Mst_roles we want to count
     *   }
     * })
    **/
    count<T extends mst_roleCountArgs>(
      args?: Subset<T, mst_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_roleAggregateArgs>(args: Subset<T, Mst_roleAggregateArgs>): Prisma.PrismaPromise<GetMst_roleAggregateType<T>>

    /**
     * Group by Mst_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_roleGroupByArgs} args - Group by arguments.
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
      T extends Mst_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mst_roleGroupByArgs['orderBy'] }
        : { orderBy?: Mst_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mst_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mst_roleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mst_role base type for findUnique actions
   */
  export type mst_roleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter, which mst_role to fetch.
     */
    where: mst_roleWhereUniqueInput
  }

  /**
   * mst_role findUnique
   */
  export interface mst_roleFindUniqueArgs extends mst_roleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_role findUniqueOrThrow
   */
  export type mst_roleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter, which mst_role to fetch.
     */
    where: mst_roleWhereUniqueInput
  }


  /**
   * mst_role base type for findFirst actions
   */
  export type mst_roleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter, which mst_role to fetch.
     */
    where?: mst_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_roles to fetch.
     */
    orderBy?: Enumerable<mst_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_roles.
     */
    cursor?: mst_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_roles.
     */
    distinct?: Enumerable<Mst_roleScalarFieldEnum>
  }

  /**
   * mst_role findFirst
   */
  export interface mst_roleFindFirstArgs extends mst_roleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_role findFirstOrThrow
   */
  export type mst_roleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter, which mst_role to fetch.
     */
    where?: mst_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_roles to fetch.
     */
    orderBy?: Enumerable<mst_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_roles.
     */
    cursor?: mst_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_roles.
     */
    distinct?: Enumerable<Mst_roleScalarFieldEnum>
  }


  /**
   * mst_role findMany
   */
  export type mst_roleFindManyArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter, which mst_roles to fetch.
     */
    where?: mst_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_roles to fetch.
     */
    orderBy?: Enumerable<mst_roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_roles.
     */
    cursor?: mst_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_roles.
     */
    skip?: number
    distinct?: Enumerable<Mst_roleScalarFieldEnum>
  }


  /**
   * mst_role create
   */
  export type mst_roleCreateArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * The data needed to create a mst_role.
     */
    data: XOR<mst_roleCreateInput, mst_roleUncheckedCreateInput>
  }


  /**
   * mst_role createMany
   */
  export type mst_roleCreateManyArgs = {
    /**
     * The data used to create many mst_roles.
     */
    data: Enumerable<mst_roleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mst_role update
   */
  export type mst_roleUpdateArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * The data needed to update a mst_role.
     */
    data: XOR<mst_roleUpdateInput, mst_roleUncheckedUpdateInput>
    /**
     * Choose, which mst_role to update.
     */
    where: mst_roleWhereUniqueInput
  }


  /**
   * mst_role updateMany
   */
  export type mst_roleUpdateManyArgs = {
    /**
     * The data used to update mst_roles.
     */
    data: XOR<mst_roleUpdateManyMutationInput, mst_roleUncheckedUpdateManyInput>
    /**
     * Filter which mst_roles to update
     */
    where?: mst_roleWhereInput
  }


  /**
   * mst_role upsert
   */
  export type mst_roleUpsertArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * The filter to search for the mst_role to update in case it exists.
     */
    where: mst_roleWhereUniqueInput
    /**
     * In case the mst_role found by the `where` argument doesn't exist, create a new mst_role with this data.
     */
    create: XOR<mst_roleCreateInput, mst_roleUncheckedCreateInput>
    /**
     * In case the mst_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_roleUpdateInput, mst_roleUncheckedUpdateInput>
  }


  /**
   * mst_role delete
   */
  export type mst_roleDeleteArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
    /**
     * Filter which mst_role to delete.
     */
    where: mst_roleWhereUniqueInput
  }


  /**
   * mst_role deleteMany
   */
  export type mst_roleDeleteManyArgs = {
    /**
     * Filter which mst_roles to delete
     */
    where?: mst_roleWhereInput
  }


  /**
   * mst_role without action
   */
  export type mst_roleArgs = {
    /**
     * Select specific fields to fetch from the mst_role
     */
    select?: mst_roleSelect | null
  }



  /**
   * Model mst_user
   */


  export type AggregateMst_user = {
    _count: Mst_userCountAggregateOutputType | null
    _avg: Mst_userAvgAggregateOutputType | null
    _sum: Mst_userSumAggregateOutputType | null
    _min: Mst_userMinAggregateOutputType | null
    _max: Mst_userMaxAggregateOutputType | null
  }

  export type Mst_userAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
    employee_id: number | null
  }

  export type Mst_userSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
    employee_id: number | null
  }

  export type Mst_userMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    password: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    employee_id: number | null
  }

  export type Mst_userMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    password: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    employee_id: number | null
  }

  export type Mst_userCountAggregateOutputType = {
    id: number
    uuid: number
    username: number
    password: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    employee_id: number
    role: number
    _all: number
  }


  export type Mst_userAvgAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
    employee_id?: true
  }

  export type Mst_userSumAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
    employee_id?: true
  }

  export type Mst_userMinAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    employee_id?: true
  }

  export type Mst_userMaxAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    employee_id?: true
  }

  export type Mst_userCountAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    employee_id?: true
    role?: true
    _all?: true
  }

  export type Mst_userAggregateArgs = {
    /**
     * Filter which mst_user to aggregate.
     */
    where?: mst_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_users to fetch.
     */
    orderBy?: Enumerable<mst_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_users
    **/
    _count?: true | Mst_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_userMaxAggregateInputType
  }

  export type GetMst_userAggregateType<T extends Mst_userAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_user[P]>
      : GetScalarType<T[P], AggregateMst_user[P]>
  }




  export type Mst_userGroupByArgs = {
    where?: mst_userWhereInput
    orderBy?: Enumerable<mst_userOrderByWithAggregationInput>
    by: Mst_userScalarFieldEnum[]
    having?: mst_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_userCountAggregateInputType | true
    _avg?: Mst_userAvgAggregateInputType
    _sum?: Mst_userSumAggregateInputType
    _min?: Mst_userMinAggregateInputType
    _max?: Mst_userMaxAggregateInputType
  }


  export type Mst_userGroupByOutputType = {
    id: number
    uuid: string
    username: string
    password: string
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    employee_id: number | null
    role: JsonValue | null
    _count: Mst_userCountAggregateOutputType | null
    _avg: Mst_userAvgAggregateOutputType | null
    _sum: Mst_userSumAggregateOutputType | null
    _min: Mst_userMinAggregateOutputType | null
    _max: Mst_userMaxAggregateOutputType | null
  }

  type GetMst_userGroupByPayload<T extends Mst_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Mst_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_userGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_userGroupByOutputType[P]>
        }
      >
    >


  export type mst_userSelect = {
    id?: boolean
    uuid?: boolean
    username?: boolean
    password?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    employee_id?: boolean
    role?: boolean
  }


  export type mst_userGetPayload<S extends boolean | null | undefined | mst_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mst_user :
    S extends undefined ? never :
    S extends { include: any } & (mst_userArgs | mst_userFindManyArgs)
    ? mst_user 
    : S extends { select: any } & (mst_userArgs | mst_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof mst_user ? mst_user[P] : never
  } 
      : mst_user


  type mst_userCountArgs = 
    Omit<mst_userFindManyArgs, 'select' | 'include'> & {
      select?: Mst_userCountAggregateInputType | true
    }

  export interface mst_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mst_user that matches the filter.
     * @param {mst_userFindUniqueArgs} args - Arguments to find a Mst_user
     * @example
     * // Get one Mst_user
     * const mst_user = await prisma.mst_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mst_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mst_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mst_user'> extends True ? Prisma__mst_userClient<mst_userGetPayload<T>> : Prisma__mst_userClient<mst_userGetPayload<T> | null, null>

    /**
     * Find one Mst_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mst_userFindUniqueOrThrowArgs} args - Arguments to find a Mst_user
     * @example
     * // Get one Mst_user
     * const mst_user = await prisma.mst_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mst_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mst_userFindUniqueOrThrowArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Find the first Mst_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_userFindFirstArgs} args - Arguments to find a Mst_user
     * @example
     * // Get one Mst_user
     * const mst_user = await prisma.mst_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mst_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mst_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mst_user'> extends True ? Prisma__mst_userClient<mst_userGetPayload<T>> : Prisma__mst_userClient<mst_userGetPayload<T> | null, null>

    /**
     * Find the first Mst_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_userFindFirstOrThrowArgs} args - Arguments to find a Mst_user
     * @example
     * // Get one Mst_user
     * const mst_user = await prisma.mst_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mst_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mst_userFindFirstOrThrowArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Find zero or more Mst_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_users
     * const mst_users = await prisma.mst_user.findMany()
     * 
     * // Get first 10 Mst_users
     * const mst_users = await prisma.mst_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_userWithIdOnly = await prisma.mst_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mst_userFindManyArgs>(
      args?: SelectSubset<T, mst_userFindManyArgs>
    ): Prisma.PrismaPromise<Array<mst_userGetPayload<T>>>

    /**
     * Create a Mst_user.
     * @param {mst_userCreateArgs} args - Arguments to create a Mst_user.
     * @example
     * // Create one Mst_user
     * const Mst_user = await prisma.mst_user.create({
     *   data: {
     *     // ... data to create a Mst_user
     *   }
     * })
     * 
    **/
    create<T extends mst_userCreateArgs>(
      args: SelectSubset<T, mst_userCreateArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Create many Mst_users.
     *     @param {mst_userCreateManyArgs} args - Arguments to create many Mst_users.
     *     @example
     *     // Create many Mst_users
     *     const mst_user = await prisma.mst_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mst_userCreateManyArgs>(
      args?: SelectSubset<T, mst_userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_user.
     * @param {mst_userDeleteArgs} args - Arguments to delete one Mst_user.
     * @example
     * // Delete one Mst_user
     * const Mst_user = await prisma.mst_user.delete({
     *   where: {
     *     // ... filter to delete one Mst_user
     *   }
     * })
     * 
    **/
    delete<T extends mst_userDeleteArgs>(
      args: SelectSubset<T, mst_userDeleteArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Update one Mst_user.
     * @param {mst_userUpdateArgs} args - Arguments to update one Mst_user.
     * @example
     * // Update one Mst_user
     * const mst_user = await prisma.mst_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mst_userUpdateArgs>(
      args: SelectSubset<T, mst_userUpdateArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Delete zero or more Mst_users.
     * @param {mst_userDeleteManyArgs} args - Arguments to filter Mst_users to delete.
     * @example
     * // Delete a few Mst_users
     * const { count } = await prisma.mst_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mst_userDeleteManyArgs>(
      args?: SelectSubset<T, mst_userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_users
     * const mst_user = await prisma.mst_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mst_userUpdateManyArgs>(
      args: SelectSubset<T, mst_userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_user.
     * @param {mst_userUpsertArgs} args - Arguments to update or create a Mst_user.
     * @example
     * // Update or create a Mst_user
     * const mst_user = await prisma.mst_user.upsert({
     *   create: {
     *     // ... data to create a Mst_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_user we want to update
     *   }
     * })
    **/
    upsert<T extends mst_userUpsertArgs>(
      args: SelectSubset<T, mst_userUpsertArgs>
    ): Prisma__mst_userClient<mst_userGetPayload<T>>

    /**
     * Count the number of Mst_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_userCountArgs} args - Arguments to filter Mst_users to count.
     * @example
     * // Count the number of Mst_users
     * const count = await prisma.mst_user.count({
     *   where: {
     *     // ... the filter for the Mst_users we want to count
     *   }
     * })
    **/
    count<T extends mst_userCountArgs>(
      args?: Subset<T, mst_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_userAggregateArgs>(args: Subset<T, Mst_userAggregateArgs>): Prisma.PrismaPromise<GetMst_userAggregateType<T>>

    /**
     * Group by Mst_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_userGroupByArgs} args - Group by arguments.
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
      T extends Mst_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mst_userGroupByArgs['orderBy'] }
        : { orderBy?: Mst_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mst_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mst_userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mst_user base type for findUnique actions
   */
  export type mst_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter, which mst_user to fetch.
     */
    where: mst_userWhereUniqueInput
  }

  /**
   * mst_user findUnique
   */
  export interface mst_userFindUniqueArgs extends mst_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_user findUniqueOrThrow
   */
  export type mst_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter, which mst_user to fetch.
     */
    where: mst_userWhereUniqueInput
  }


  /**
   * mst_user base type for findFirst actions
   */
  export type mst_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter, which mst_user to fetch.
     */
    where?: mst_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_users to fetch.
     */
    orderBy?: Enumerable<mst_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_users.
     */
    cursor?: mst_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_users.
     */
    distinct?: Enumerable<Mst_userScalarFieldEnum>
  }

  /**
   * mst_user findFirst
   */
  export interface mst_userFindFirstArgs extends mst_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_user findFirstOrThrow
   */
  export type mst_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter, which mst_user to fetch.
     */
    where?: mst_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_users to fetch.
     */
    orderBy?: Enumerable<mst_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_users.
     */
    cursor?: mst_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_users.
     */
    distinct?: Enumerable<Mst_userScalarFieldEnum>
  }


  /**
   * mst_user findMany
   */
  export type mst_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter, which mst_users to fetch.
     */
    where?: mst_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_users to fetch.
     */
    orderBy?: Enumerable<mst_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_users.
     */
    cursor?: mst_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_users.
     */
    skip?: number
    distinct?: Enumerable<Mst_userScalarFieldEnum>
  }


  /**
   * mst_user create
   */
  export type mst_userCreateArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * The data needed to create a mst_user.
     */
    data: XOR<mst_userCreateInput, mst_userUncheckedCreateInput>
  }


  /**
   * mst_user createMany
   */
  export type mst_userCreateManyArgs = {
    /**
     * The data used to create many mst_users.
     */
    data: Enumerable<mst_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mst_user update
   */
  export type mst_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * The data needed to update a mst_user.
     */
    data: XOR<mst_userUpdateInput, mst_userUncheckedUpdateInput>
    /**
     * Choose, which mst_user to update.
     */
    where: mst_userWhereUniqueInput
  }


  /**
   * mst_user updateMany
   */
  export type mst_userUpdateManyArgs = {
    /**
     * The data used to update mst_users.
     */
    data: XOR<mst_userUpdateManyMutationInput, mst_userUncheckedUpdateManyInput>
    /**
     * Filter which mst_users to update
     */
    where?: mst_userWhereInput
  }


  /**
   * mst_user upsert
   */
  export type mst_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * The filter to search for the mst_user to update in case it exists.
     */
    where: mst_userWhereUniqueInput
    /**
     * In case the mst_user found by the `where` argument doesn't exist, create a new mst_user with this data.
     */
    create: XOR<mst_userCreateInput, mst_userUncheckedCreateInput>
    /**
     * In case the mst_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_userUpdateInput, mst_userUncheckedUpdateInput>
  }


  /**
   * mst_user delete
   */
  export type mst_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
    /**
     * Filter which mst_user to delete.
     */
    where: mst_userWhereUniqueInput
  }


  /**
   * mst_user deleteMany
   */
  export type mst_userDeleteManyArgs = {
    /**
     * Filter which mst_users to delete
     */
    where?: mst_userWhereInput
  }


  /**
   * mst_user without action
   */
  export type mst_userArgs = {
    /**
     * Select specific fields to fetch from the mst_user
     */
    select?: mst_userSelect | null
  }



  /**
   * Model mst_department
   */


  export type AggregateMst_department = {
    _count: Mst_departmentCountAggregateOutputType | null
    _avg: Mst_departmentAvgAggregateOutputType | null
    _sum: Mst_departmentSumAggregateOutputType | null
    _min: Mst_departmentMinAggregateOutputType | null
    _max: Mst_departmentMaxAggregateOutputType | null
  }

  export type Mst_departmentAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_departmentSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_departmentMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    department_name: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_departmentMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    department_name: string | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_departmentCountAggregateOutputType = {
    id: number
    uuid: number
    department_name: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type Mst_departmentAvgAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_departmentSumAggregateInputType = {
    id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_departmentMinAggregateInputType = {
    id?: true
    uuid?: true
    department_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_departmentMaxAggregateInputType = {
    id?: true
    uuid?: true
    department_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_departmentCountAggregateInputType = {
    id?: true
    uuid?: true
    department_name?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type Mst_departmentAggregateArgs = {
    /**
     * Filter which mst_department to aggregate.
     */
    where?: mst_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_departments to fetch.
     */
    orderBy?: Enumerable<mst_departmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_departments
    **/
    _count?: true | Mst_departmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_departmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_departmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_departmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_departmentMaxAggregateInputType
  }

  export type GetMst_departmentAggregateType<T extends Mst_departmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_department]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_department[P]>
      : GetScalarType<T[P], AggregateMst_department[P]>
  }




  export type Mst_departmentGroupByArgs = {
    where?: mst_departmentWhereInput
    orderBy?: Enumerable<mst_departmentOrderByWithAggregationInput>
    by: Mst_departmentScalarFieldEnum[]
    having?: mst_departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_departmentCountAggregateInputType | true
    _avg?: Mst_departmentAvgAggregateInputType
    _sum?: Mst_departmentSumAggregateInputType
    _min?: Mst_departmentMinAggregateInputType
    _max?: Mst_departmentMaxAggregateInputType
  }


  export type Mst_departmentGroupByOutputType = {
    id: number
    uuid: string
    department_name: string
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: Mst_departmentCountAggregateOutputType | null
    _avg: Mst_departmentAvgAggregateOutputType | null
    _sum: Mst_departmentSumAggregateOutputType | null
    _min: Mst_departmentMinAggregateOutputType | null
    _max: Mst_departmentMaxAggregateOutputType | null
  }

  type GetMst_departmentGroupByPayload<T extends Mst_departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Mst_departmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_departmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_departmentGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_departmentGroupByOutputType[P]>
        }
      >
    >


  export type mst_departmentSelect = {
    id?: boolean
    uuid?: boolean
    department_name?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    wip_mst_section?: boolean | mst_department$wip_mst_sectionArgs
    _count?: boolean | Mst_departmentCountOutputTypeArgs
  }


  export type mst_departmentInclude = {
    wip_mst_section?: boolean | mst_department$wip_mst_sectionArgs
    _count?: boolean | Mst_departmentCountOutputTypeArgs
  }

  export type mst_departmentGetPayload<S extends boolean | null | undefined | mst_departmentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mst_department :
    S extends undefined ? never :
    S extends { include: any } & (mst_departmentArgs | mst_departmentFindManyArgs)
    ? mst_department  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'wip_mst_section' ? Array < mst_sectionGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mst_departmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mst_departmentArgs | mst_departmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'wip_mst_section' ? Array < mst_sectionGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mst_departmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mst_department ? mst_department[P] : never
  } 
      : mst_department


  type mst_departmentCountArgs = 
    Omit<mst_departmentFindManyArgs, 'select' | 'include'> & {
      select?: Mst_departmentCountAggregateInputType | true
    }

  export interface mst_departmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mst_department that matches the filter.
     * @param {mst_departmentFindUniqueArgs} args - Arguments to find a Mst_department
     * @example
     * // Get one Mst_department
     * const mst_department = await prisma.mst_department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mst_departmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mst_departmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mst_department'> extends True ? Prisma__mst_departmentClient<mst_departmentGetPayload<T>> : Prisma__mst_departmentClient<mst_departmentGetPayload<T> | null, null>

    /**
     * Find one Mst_department that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mst_departmentFindUniqueOrThrowArgs} args - Arguments to find a Mst_department
     * @example
     * // Get one Mst_department
     * const mst_department = await prisma.mst_department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mst_departmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mst_departmentFindUniqueOrThrowArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Find the first Mst_department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_departmentFindFirstArgs} args - Arguments to find a Mst_department
     * @example
     * // Get one Mst_department
     * const mst_department = await prisma.mst_department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mst_departmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mst_departmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mst_department'> extends True ? Prisma__mst_departmentClient<mst_departmentGetPayload<T>> : Prisma__mst_departmentClient<mst_departmentGetPayload<T> | null, null>

    /**
     * Find the first Mst_department that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_departmentFindFirstOrThrowArgs} args - Arguments to find a Mst_department
     * @example
     * // Get one Mst_department
     * const mst_department = await prisma.mst_department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mst_departmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mst_departmentFindFirstOrThrowArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Find zero or more Mst_departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_departmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_departments
     * const mst_departments = await prisma.mst_department.findMany()
     * 
     * // Get first 10 Mst_departments
     * const mst_departments = await prisma.mst_department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_departmentWithIdOnly = await prisma.mst_department.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mst_departmentFindManyArgs>(
      args?: SelectSubset<T, mst_departmentFindManyArgs>
    ): Prisma.PrismaPromise<Array<mst_departmentGetPayload<T>>>

    /**
     * Create a Mst_department.
     * @param {mst_departmentCreateArgs} args - Arguments to create a Mst_department.
     * @example
     * // Create one Mst_department
     * const Mst_department = await prisma.mst_department.create({
     *   data: {
     *     // ... data to create a Mst_department
     *   }
     * })
     * 
    **/
    create<T extends mst_departmentCreateArgs>(
      args: SelectSubset<T, mst_departmentCreateArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Create many Mst_departments.
     *     @param {mst_departmentCreateManyArgs} args - Arguments to create many Mst_departments.
     *     @example
     *     // Create many Mst_departments
     *     const mst_department = await prisma.mst_department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mst_departmentCreateManyArgs>(
      args?: SelectSubset<T, mst_departmentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_department.
     * @param {mst_departmentDeleteArgs} args - Arguments to delete one Mst_department.
     * @example
     * // Delete one Mst_department
     * const Mst_department = await prisma.mst_department.delete({
     *   where: {
     *     // ... filter to delete one Mst_department
     *   }
     * })
     * 
    **/
    delete<T extends mst_departmentDeleteArgs>(
      args: SelectSubset<T, mst_departmentDeleteArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Update one Mst_department.
     * @param {mst_departmentUpdateArgs} args - Arguments to update one Mst_department.
     * @example
     * // Update one Mst_department
     * const mst_department = await prisma.mst_department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mst_departmentUpdateArgs>(
      args: SelectSubset<T, mst_departmentUpdateArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Delete zero or more Mst_departments.
     * @param {mst_departmentDeleteManyArgs} args - Arguments to filter Mst_departments to delete.
     * @example
     * // Delete a few Mst_departments
     * const { count } = await prisma.mst_department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mst_departmentDeleteManyArgs>(
      args?: SelectSubset<T, mst_departmentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_departments
     * const mst_department = await prisma.mst_department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mst_departmentUpdateManyArgs>(
      args: SelectSubset<T, mst_departmentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_department.
     * @param {mst_departmentUpsertArgs} args - Arguments to update or create a Mst_department.
     * @example
     * // Update or create a Mst_department
     * const mst_department = await prisma.mst_department.upsert({
     *   create: {
     *     // ... data to create a Mst_department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_department we want to update
     *   }
     * })
    **/
    upsert<T extends mst_departmentUpsertArgs>(
      args: SelectSubset<T, mst_departmentUpsertArgs>
    ): Prisma__mst_departmentClient<mst_departmentGetPayload<T>>

    /**
     * Count the number of Mst_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_departmentCountArgs} args - Arguments to filter Mst_departments to count.
     * @example
     * // Count the number of Mst_departments
     * const count = await prisma.mst_department.count({
     *   where: {
     *     // ... the filter for the Mst_departments we want to count
     *   }
     * })
    **/
    count<T extends mst_departmentCountArgs>(
      args?: Subset<T, mst_departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_departmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_departmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_departmentAggregateArgs>(args: Subset<T, Mst_departmentAggregateArgs>): Prisma.PrismaPromise<GetMst_departmentAggregateType<T>>

    /**
     * Group by Mst_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_departmentGroupByArgs} args - Group by arguments.
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
      T extends Mst_departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mst_departmentGroupByArgs['orderBy'] }
        : { orderBy?: Mst_departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mst_departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_departmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mst_departmentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    wip_mst_section<T extends mst_department$wip_mst_sectionArgs= {}>(args?: Subset<T, mst_department$wip_mst_sectionArgs>): Prisma.PrismaPromise<Array<mst_sectionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mst_department base type for findUnique actions
   */
  export type mst_departmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter, which mst_department to fetch.
     */
    where: mst_departmentWhereUniqueInput
  }

  /**
   * mst_department findUnique
   */
  export interface mst_departmentFindUniqueArgs extends mst_departmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_department findUniqueOrThrow
   */
  export type mst_departmentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter, which mst_department to fetch.
     */
    where: mst_departmentWhereUniqueInput
  }


  /**
   * mst_department base type for findFirst actions
   */
  export type mst_departmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter, which mst_department to fetch.
     */
    where?: mst_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_departments to fetch.
     */
    orderBy?: Enumerable<mst_departmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_departments.
     */
    cursor?: mst_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_departments.
     */
    distinct?: Enumerable<Mst_departmentScalarFieldEnum>
  }

  /**
   * mst_department findFirst
   */
  export interface mst_departmentFindFirstArgs extends mst_departmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_department findFirstOrThrow
   */
  export type mst_departmentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter, which mst_department to fetch.
     */
    where?: mst_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_departments to fetch.
     */
    orderBy?: Enumerable<mst_departmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_departments.
     */
    cursor?: mst_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_departments.
     */
    distinct?: Enumerable<Mst_departmentScalarFieldEnum>
  }


  /**
   * mst_department findMany
   */
  export type mst_departmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter, which mst_departments to fetch.
     */
    where?: mst_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_departments to fetch.
     */
    orderBy?: Enumerable<mst_departmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_departments.
     */
    cursor?: mst_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_departments.
     */
    skip?: number
    distinct?: Enumerable<Mst_departmentScalarFieldEnum>
  }


  /**
   * mst_department create
   */
  export type mst_departmentCreateArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * The data needed to create a mst_department.
     */
    data: XOR<mst_departmentCreateInput, mst_departmentUncheckedCreateInput>
  }


  /**
   * mst_department createMany
   */
  export type mst_departmentCreateManyArgs = {
    /**
     * The data used to create many mst_departments.
     */
    data: Enumerable<mst_departmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mst_department update
   */
  export type mst_departmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * The data needed to update a mst_department.
     */
    data: XOR<mst_departmentUpdateInput, mst_departmentUncheckedUpdateInput>
    /**
     * Choose, which mst_department to update.
     */
    where: mst_departmentWhereUniqueInput
  }


  /**
   * mst_department updateMany
   */
  export type mst_departmentUpdateManyArgs = {
    /**
     * The data used to update mst_departments.
     */
    data: XOR<mst_departmentUpdateManyMutationInput, mst_departmentUncheckedUpdateManyInput>
    /**
     * Filter which mst_departments to update
     */
    where?: mst_departmentWhereInput
  }


  /**
   * mst_department upsert
   */
  export type mst_departmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * The filter to search for the mst_department to update in case it exists.
     */
    where: mst_departmentWhereUniqueInput
    /**
     * In case the mst_department found by the `where` argument doesn't exist, create a new mst_department with this data.
     */
    create: XOR<mst_departmentCreateInput, mst_departmentUncheckedCreateInput>
    /**
     * In case the mst_department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_departmentUpdateInput, mst_departmentUncheckedUpdateInput>
  }


  /**
   * mst_department delete
   */
  export type mst_departmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
    /**
     * Filter which mst_department to delete.
     */
    where: mst_departmentWhereUniqueInput
  }


  /**
   * mst_department deleteMany
   */
  export type mst_departmentDeleteManyArgs = {
    /**
     * Filter which mst_departments to delete
     */
    where?: mst_departmentWhereInput
  }


  /**
   * mst_department.wip_mst_section
   */
  export type mst_department$wip_mst_sectionArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    where?: mst_sectionWhereInput
    orderBy?: Enumerable<mst_sectionOrderByWithRelationInput>
    cursor?: mst_sectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mst_sectionScalarFieldEnum>
  }


  /**
   * mst_department without action
   */
  export type mst_departmentArgs = {
    /**
     * Select specific fields to fetch from the mst_department
     */
    select?: mst_departmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_departmentInclude | null
  }



  /**
   * Model mst_section
   */


  export type AggregateMst_section = {
    _count: Mst_sectionCountAggregateOutputType | null
    _avg: Mst_sectionAvgAggregateOutputType | null
    _sum: Mst_sectionSumAggregateOutputType | null
    _min: Mst_sectionMinAggregateOutputType | null
    _max: Mst_sectionMaxAggregateOutputType | null
  }

  export type Mst_sectionAvgAggregateOutputType = {
    id: number | null
    department_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_sectionSumAggregateOutputType = {
    id: number | null
    department_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_sectionMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    department_id: number | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    section_name: string | null
  }

  export type Mst_sectionMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    department_id: number | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    section_name: string | null
  }

  export type Mst_sectionCountAggregateOutputType = {
    id: number
    uuid: number
    department_id: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    section_name: number
    _all: number
  }


  export type Mst_sectionAvgAggregateInputType = {
    id?: true
    department_id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_sectionSumAggregateInputType = {
    id?: true
    department_id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_sectionMinAggregateInputType = {
    id?: true
    uuid?: true
    department_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    section_name?: true
  }

  export type Mst_sectionMaxAggregateInputType = {
    id?: true
    uuid?: true
    department_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    section_name?: true
  }

  export type Mst_sectionCountAggregateInputType = {
    id?: true
    uuid?: true
    department_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    section_name?: true
    _all?: true
  }

  export type Mst_sectionAggregateArgs = {
    /**
     * Filter which mst_section to aggregate.
     */
    where?: mst_sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_sections to fetch.
     */
    orderBy?: Enumerable<mst_sectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_sections
    **/
    _count?: true | Mst_sectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_sectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_sectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_sectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_sectionMaxAggregateInputType
  }

  export type GetMst_sectionAggregateType<T extends Mst_sectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_section]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_section[P]>
      : GetScalarType<T[P], AggregateMst_section[P]>
  }




  export type Mst_sectionGroupByArgs = {
    where?: mst_sectionWhereInput
    orderBy?: Enumerable<mst_sectionOrderByWithAggregationInput>
    by: Mst_sectionScalarFieldEnum[]
    having?: mst_sectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_sectionCountAggregateInputType | true
    _avg?: Mst_sectionAvgAggregateInputType
    _sum?: Mst_sectionSumAggregateInputType
    _min?: Mst_sectionMinAggregateInputType
    _max?: Mst_sectionMaxAggregateInputType
  }


  export type Mst_sectionGroupByOutputType = {
    id: number
    uuid: string
    department_id: number
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    section_name: string
    _count: Mst_sectionCountAggregateOutputType | null
    _avg: Mst_sectionAvgAggregateOutputType | null
    _sum: Mst_sectionSumAggregateOutputType | null
    _min: Mst_sectionMinAggregateOutputType | null
    _max: Mst_sectionMaxAggregateOutputType | null
  }

  type GetMst_sectionGroupByPayload<T extends Mst_sectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Mst_sectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_sectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_sectionGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_sectionGroupByOutputType[P]>
        }
      >
    >


  export type mst_sectionSelect = {
    id?: boolean
    uuid?: boolean
    department_id?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
    section_name?: boolean
    wip_mst_department?: boolean | mst_departmentArgs
  }


  export type mst_sectionInclude = {
    wip_mst_department?: boolean | mst_departmentArgs
  }

  export type mst_sectionGetPayload<S extends boolean | null | undefined | mst_sectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mst_section :
    S extends undefined ? never :
    S extends { include: any } & (mst_sectionArgs | mst_sectionFindManyArgs)
    ? mst_section  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'wip_mst_department' ? mst_departmentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mst_sectionArgs | mst_sectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'wip_mst_department' ? mst_departmentGetPayload<S['select'][P]> :  P extends keyof mst_section ? mst_section[P] : never
  } 
      : mst_section


  type mst_sectionCountArgs = 
    Omit<mst_sectionFindManyArgs, 'select' | 'include'> & {
      select?: Mst_sectionCountAggregateInputType | true
    }

  export interface mst_sectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mst_section that matches the filter.
     * @param {mst_sectionFindUniqueArgs} args - Arguments to find a Mst_section
     * @example
     * // Get one Mst_section
     * const mst_section = await prisma.mst_section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mst_sectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mst_sectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mst_section'> extends True ? Prisma__mst_sectionClient<mst_sectionGetPayload<T>> : Prisma__mst_sectionClient<mst_sectionGetPayload<T> | null, null>

    /**
     * Find one Mst_section that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mst_sectionFindUniqueOrThrowArgs} args - Arguments to find a Mst_section
     * @example
     * // Get one Mst_section
     * const mst_section = await prisma.mst_section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mst_sectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mst_sectionFindUniqueOrThrowArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Find the first Mst_section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_sectionFindFirstArgs} args - Arguments to find a Mst_section
     * @example
     * // Get one Mst_section
     * const mst_section = await prisma.mst_section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mst_sectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mst_sectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mst_section'> extends True ? Prisma__mst_sectionClient<mst_sectionGetPayload<T>> : Prisma__mst_sectionClient<mst_sectionGetPayload<T> | null, null>

    /**
     * Find the first Mst_section that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_sectionFindFirstOrThrowArgs} args - Arguments to find a Mst_section
     * @example
     * // Get one Mst_section
     * const mst_section = await prisma.mst_section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mst_sectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mst_sectionFindFirstOrThrowArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Find zero or more Mst_sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_sectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_sections
     * const mst_sections = await prisma.mst_section.findMany()
     * 
     * // Get first 10 Mst_sections
     * const mst_sections = await prisma.mst_section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_sectionWithIdOnly = await prisma.mst_section.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mst_sectionFindManyArgs>(
      args?: SelectSubset<T, mst_sectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<mst_sectionGetPayload<T>>>

    /**
     * Create a Mst_section.
     * @param {mst_sectionCreateArgs} args - Arguments to create a Mst_section.
     * @example
     * // Create one Mst_section
     * const Mst_section = await prisma.mst_section.create({
     *   data: {
     *     // ... data to create a Mst_section
     *   }
     * })
     * 
    **/
    create<T extends mst_sectionCreateArgs>(
      args: SelectSubset<T, mst_sectionCreateArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Create many Mst_sections.
     *     @param {mst_sectionCreateManyArgs} args - Arguments to create many Mst_sections.
     *     @example
     *     // Create many Mst_sections
     *     const mst_section = await prisma.mst_section.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mst_sectionCreateManyArgs>(
      args?: SelectSubset<T, mst_sectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_section.
     * @param {mst_sectionDeleteArgs} args - Arguments to delete one Mst_section.
     * @example
     * // Delete one Mst_section
     * const Mst_section = await prisma.mst_section.delete({
     *   where: {
     *     // ... filter to delete one Mst_section
     *   }
     * })
     * 
    **/
    delete<T extends mst_sectionDeleteArgs>(
      args: SelectSubset<T, mst_sectionDeleteArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Update one Mst_section.
     * @param {mst_sectionUpdateArgs} args - Arguments to update one Mst_section.
     * @example
     * // Update one Mst_section
     * const mst_section = await prisma.mst_section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mst_sectionUpdateArgs>(
      args: SelectSubset<T, mst_sectionUpdateArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Delete zero or more Mst_sections.
     * @param {mst_sectionDeleteManyArgs} args - Arguments to filter Mst_sections to delete.
     * @example
     * // Delete a few Mst_sections
     * const { count } = await prisma.mst_section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mst_sectionDeleteManyArgs>(
      args?: SelectSubset<T, mst_sectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_sectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_sections
     * const mst_section = await prisma.mst_section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mst_sectionUpdateManyArgs>(
      args: SelectSubset<T, mst_sectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_section.
     * @param {mst_sectionUpsertArgs} args - Arguments to update or create a Mst_section.
     * @example
     * // Update or create a Mst_section
     * const mst_section = await prisma.mst_section.upsert({
     *   create: {
     *     // ... data to create a Mst_section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_section we want to update
     *   }
     * })
    **/
    upsert<T extends mst_sectionUpsertArgs>(
      args: SelectSubset<T, mst_sectionUpsertArgs>
    ): Prisma__mst_sectionClient<mst_sectionGetPayload<T>>

    /**
     * Count the number of Mst_sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_sectionCountArgs} args - Arguments to filter Mst_sections to count.
     * @example
     * // Count the number of Mst_sections
     * const count = await prisma.mst_section.count({
     *   where: {
     *     // ... the filter for the Mst_sections we want to count
     *   }
     * })
    **/
    count<T extends mst_sectionCountArgs>(
      args?: Subset<T, mst_sectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_sectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_sectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_sectionAggregateArgs>(args: Subset<T, Mst_sectionAggregateArgs>): Prisma.PrismaPromise<GetMst_sectionAggregateType<T>>

    /**
     * Group by Mst_section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_sectionGroupByArgs} args - Group by arguments.
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
      T extends Mst_sectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mst_sectionGroupByArgs['orderBy'] }
        : { orderBy?: Mst_sectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mst_sectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_sectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mst_sectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    wip_mst_department<T extends mst_departmentArgs= {}>(args?: Subset<T, mst_departmentArgs>): Prisma__mst_departmentClient<mst_departmentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mst_section base type for findUnique actions
   */
  export type mst_sectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter, which mst_section to fetch.
     */
    where: mst_sectionWhereUniqueInput
  }

  /**
   * mst_section findUnique
   */
  export interface mst_sectionFindUniqueArgs extends mst_sectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_section findUniqueOrThrow
   */
  export type mst_sectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter, which mst_section to fetch.
     */
    where: mst_sectionWhereUniqueInput
  }


  /**
   * mst_section base type for findFirst actions
   */
  export type mst_sectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter, which mst_section to fetch.
     */
    where?: mst_sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_sections to fetch.
     */
    orderBy?: Enumerable<mst_sectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_sections.
     */
    cursor?: mst_sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_sections.
     */
    distinct?: Enumerable<Mst_sectionScalarFieldEnum>
  }

  /**
   * mst_section findFirst
   */
  export interface mst_sectionFindFirstArgs extends mst_sectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_section findFirstOrThrow
   */
  export type mst_sectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter, which mst_section to fetch.
     */
    where?: mst_sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_sections to fetch.
     */
    orderBy?: Enumerable<mst_sectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_sections.
     */
    cursor?: mst_sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_sections.
     */
    distinct?: Enumerable<Mst_sectionScalarFieldEnum>
  }


  /**
   * mst_section findMany
   */
  export type mst_sectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter, which mst_sections to fetch.
     */
    where?: mst_sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_sections to fetch.
     */
    orderBy?: Enumerable<mst_sectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_sections.
     */
    cursor?: mst_sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_sections.
     */
    skip?: number
    distinct?: Enumerable<Mst_sectionScalarFieldEnum>
  }


  /**
   * mst_section create
   */
  export type mst_sectionCreateArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * The data needed to create a mst_section.
     */
    data: XOR<mst_sectionCreateInput, mst_sectionUncheckedCreateInput>
  }


  /**
   * mst_section createMany
   */
  export type mst_sectionCreateManyArgs = {
    /**
     * The data used to create many mst_sections.
     */
    data: Enumerable<mst_sectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mst_section update
   */
  export type mst_sectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * The data needed to update a mst_section.
     */
    data: XOR<mst_sectionUpdateInput, mst_sectionUncheckedUpdateInput>
    /**
     * Choose, which mst_section to update.
     */
    where: mst_sectionWhereUniqueInput
  }


  /**
   * mst_section updateMany
   */
  export type mst_sectionUpdateManyArgs = {
    /**
     * The data used to update mst_sections.
     */
    data: XOR<mst_sectionUpdateManyMutationInput, mst_sectionUncheckedUpdateManyInput>
    /**
     * Filter which mst_sections to update
     */
    where?: mst_sectionWhereInput
  }


  /**
   * mst_section upsert
   */
  export type mst_sectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * The filter to search for the mst_section to update in case it exists.
     */
    where: mst_sectionWhereUniqueInput
    /**
     * In case the mst_section found by the `where` argument doesn't exist, create a new mst_section with this data.
     */
    create: XOR<mst_sectionCreateInput, mst_sectionUncheckedCreateInput>
    /**
     * In case the mst_section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_sectionUpdateInput, mst_sectionUncheckedUpdateInput>
  }


  /**
   * mst_section delete
   */
  export type mst_sectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
    /**
     * Filter which mst_section to delete.
     */
    where: mst_sectionWhereUniqueInput
  }


  /**
   * mst_section deleteMany
   */
  export type mst_sectionDeleteManyArgs = {
    /**
     * Filter which mst_sections to delete
     */
    where?: mst_sectionWhereInput
  }


  /**
   * mst_section without action
   */
  export type mst_sectionArgs = {
    /**
     * Select specific fields to fetch from the mst_section
     */
    select?: mst_sectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mst_sectionInclude | null
  }



  /**
   * Model mst_employee
   */


  export type AggregateMst_employee = {
    _count: Mst_employeeCountAggregateOutputType | null
    _avg: Mst_employeeAvgAggregateOutputType | null
    _sum: Mst_employeeSumAggregateOutputType | null
    _min: Mst_employeeMinAggregateOutputType | null
    _max: Mst_employeeMaxAggregateOutputType | null
  }

  export type Mst_employeeAvgAggregateOutputType = {
    id: number | null
    nsk: number | null
    department_id: number | null
    section_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_employeeSumAggregateOutputType = {
    id: number | null
    nsk: number | null
    department_id: number | null
    section_id: number | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_employeeMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    nsk: number | null
    name: string | null
    department_id: number | null
    section_id: number | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_employeeMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    nsk: number | null
    name: string | null
    department_id: number | null
    section_id: number | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
  }

  export type Mst_employeeCountAggregateOutputType = {
    id: number
    uuid: number
    nsk: number
    name: number
    department_id: number
    section_id: number
    created_on: number
    modified_on: number
    created_by: number
    modified_by: number
    _all: number
  }


  export type Mst_employeeAvgAggregateInputType = {
    id?: true
    nsk?: true
    department_id?: true
    section_id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_employeeSumAggregateInputType = {
    id?: true
    nsk?: true
    department_id?: true
    section_id?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_employeeMinAggregateInputType = {
    id?: true
    uuid?: true
    nsk?: true
    name?: true
    department_id?: true
    section_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_employeeMaxAggregateInputType = {
    id?: true
    uuid?: true
    nsk?: true
    name?: true
    department_id?: true
    section_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
  }

  export type Mst_employeeCountAggregateInputType = {
    id?: true
    uuid?: true
    nsk?: true
    name?: true
    department_id?: true
    section_id?: true
    created_on?: true
    modified_on?: true
    created_by?: true
    modified_by?: true
    _all?: true
  }

  export type Mst_employeeAggregateArgs = {
    /**
     * Filter which mst_employee to aggregate.
     */
    where?: mst_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_employees to fetch.
     */
    orderBy?: Enumerable<mst_employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_employees
    **/
    _count?: true | Mst_employeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_employeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_employeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_employeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_employeeMaxAggregateInputType
  }

  export type GetMst_employeeAggregateType<T extends Mst_employeeAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_employee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_employee[P]>
      : GetScalarType<T[P], AggregateMst_employee[P]>
  }




  export type Mst_employeeGroupByArgs = {
    where?: mst_employeeWhereInput
    orderBy?: Enumerable<mst_employeeOrderByWithAggregationInput>
    by: Mst_employeeScalarFieldEnum[]
    having?: mst_employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_employeeCountAggregateInputType | true
    _avg?: Mst_employeeAvgAggregateInputType
    _sum?: Mst_employeeSumAggregateInputType
    _min?: Mst_employeeMinAggregateInputType
    _max?: Mst_employeeMaxAggregateInputType
  }


  export type Mst_employeeGroupByOutputType = {
    id: number
    uuid: string
    nsk: number
    name: string
    department_id: number | null
    section_id: number | null
    created_on: Date | null
    modified_on: Date | null
    created_by: number | null
    modified_by: number | null
    _count: Mst_employeeCountAggregateOutputType | null
    _avg: Mst_employeeAvgAggregateOutputType | null
    _sum: Mst_employeeSumAggregateOutputType | null
    _min: Mst_employeeMinAggregateOutputType | null
    _max: Mst_employeeMaxAggregateOutputType | null
  }

  type GetMst_employeeGroupByPayload<T extends Mst_employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Mst_employeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_employeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_employeeGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_employeeGroupByOutputType[P]>
        }
      >
    >


  export type mst_employeeSelect = {
    id?: boolean
    uuid?: boolean
    nsk?: boolean
    name?: boolean
    department_id?: boolean
    section_id?: boolean
    created_on?: boolean
    modified_on?: boolean
    created_by?: boolean
    modified_by?: boolean
  }


  export type mst_employeeGetPayload<S extends boolean | null | undefined | mst_employeeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mst_employee :
    S extends undefined ? never :
    S extends { include: any } & (mst_employeeArgs | mst_employeeFindManyArgs)
    ? mst_employee 
    : S extends { select: any } & (mst_employeeArgs | mst_employeeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof mst_employee ? mst_employee[P] : never
  } 
      : mst_employee


  type mst_employeeCountArgs = 
    Omit<mst_employeeFindManyArgs, 'select' | 'include'> & {
      select?: Mst_employeeCountAggregateInputType | true
    }

  export interface mst_employeeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mst_employee that matches the filter.
     * @param {mst_employeeFindUniqueArgs} args - Arguments to find a Mst_employee
     * @example
     * // Get one Mst_employee
     * const mst_employee = await prisma.mst_employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mst_employeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mst_employeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mst_employee'> extends True ? Prisma__mst_employeeClient<mst_employeeGetPayload<T>> : Prisma__mst_employeeClient<mst_employeeGetPayload<T> | null, null>

    /**
     * Find one Mst_employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mst_employeeFindUniqueOrThrowArgs} args - Arguments to find a Mst_employee
     * @example
     * // Get one Mst_employee
     * const mst_employee = await prisma.mst_employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mst_employeeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mst_employeeFindUniqueOrThrowArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Find the first Mst_employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_employeeFindFirstArgs} args - Arguments to find a Mst_employee
     * @example
     * // Get one Mst_employee
     * const mst_employee = await prisma.mst_employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mst_employeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mst_employeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mst_employee'> extends True ? Prisma__mst_employeeClient<mst_employeeGetPayload<T>> : Prisma__mst_employeeClient<mst_employeeGetPayload<T> | null, null>

    /**
     * Find the first Mst_employee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_employeeFindFirstOrThrowArgs} args - Arguments to find a Mst_employee
     * @example
     * // Get one Mst_employee
     * const mst_employee = await prisma.mst_employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mst_employeeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mst_employeeFindFirstOrThrowArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Find zero or more Mst_employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_employees
     * const mst_employees = await prisma.mst_employee.findMany()
     * 
     * // Get first 10 Mst_employees
     * const mst_employees = await prisma.mst_employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_employeeWithIdOnly = await prisma.mst_employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mst_employeeFindManyArgs>(
      args?: SelectSubset<T, mst_employeeFindManyArgs>
    ): Prisma.PrismaPromise<Array<mst_employeeGetPayload<T>>>

    /**
     * Create a Mst_employee.
     * @param {mst_employeeCreateArgs} args - Arguments to create a Mst_employee.
     * @example
     * // Create one Mst_employee
     * const Mst_employee = await prisma.mst_employee.create({
     *   data: {
     *     // ... data to create a Mst_employee
     *   }
     * })
     * 
    **/
    create<T extends mst_employeeCreateArgs>(
      args: SelectSubset<T, mst_employeeCreateArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Create many Mst_employees.
     *     @param {mst_employeeCreateManyArgs} args - Arguments to create many Mst_employees.
     *     @example
     *     // Create many Mst_employees
     *     const mst_employee = await prisma.mst_employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mst_employeeCreateManyArgs>(
      args?: SelectSubset<T, mst_employeeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_employee.
     * @param {mst_employeeDeleteArgs} args - Arguments to delete one Mst_employee.
     * @example
     * // Delete one Mst_employee
     * const Mst_employee = await prisma.mst_employee.delete({
     *   where: {
     *     // ... filter to delete one Mst_employee
     *   }
     * })
     * 
    **/
    delete<T extends mst_employeeDeleteArgs>(
      args: SelectSubset<T, mst_employeeDeleteArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Update one Mst_employee.
     * @param {mst_employeeUpdateArgs} args - Arguments to update one Mst_employee.
     * @example
     * // Update one Mst_employee
     * const mst_employee = await prisma.mst_employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mst_employeeUpdateArgs>(
      args: SelectSubset<T, mst_employeeUpdateArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Delete zero or more Mst_employees.
     * @param {mst_employeeDeleteManyArgs} args - Arguments to filter Mst_employees to delete.
     * @example
     * // Delete a few Mst_employees
     * const { count } = await prisma.mst_employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mst_employeeDeleteManyArgs>(
      args?: SelectSubset<T, mst_employeeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_employees
     * const mst_employee = await prisma.mst_employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mst_employeeUpdateManyArgs>(
      args: SelectSubset<T, mst_employeeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_employee.
     * @param {mst_employeeUpsertArgs} args - Arguments to update or create a Mst_employee.
     * @example
     * // Update or create a Mst_employee
     * const mst_employee = await prisma.mst_employee.upsert({
     *   create: {
     *     // ... data to create a Mst_employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_employee we want to update
     *   }
     * })
    **/
    upsert<T extends mst_employeeUpsertArgs>(
      args: SelectSubset<T, mst_employeeUpsertArgs>
    ): Prisma__mst_employeeClient<mst_employeeGetPayload<T>>

    /**
     * Count the number of Mst_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_employeeCountArgs} args - Arguments to filter Mst_employees to count.
     * @example
     * // Count the number of Mst_employees
     * const count = await prisma.mst_employee.count({
     *   where: {
     *     // ... the filter for the Mst_employees we want to count
     *   }
     * })
    **/
    count<T extends mst_employeeCountArgs>(
      args?: Subset<T, mst_employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_employeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_employeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_employeeAggregateArgs>(args: Subset<T, Mst_employeeAggregateArgs>): Prisma.PrismaPromise<GetMst_employeeAggregateType<T>>

    /**
     * Group by Mst_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_employeeGroupByArgs} args - Group by arguments.
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
      T extends Mst_employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mst_employeeGroupByArgs['orderBy'] }
        : { orderBy?: Mst_employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Mst_employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_employeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mst_employeeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mst_employee base type for findUnique actions
   */
  export type mst_employeeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter, which mst_employee to fetch.
     */
    where: mst_employeeWhereUniqueInput
  }

  /**
   * mst_employee findUnique
   */
  export interface mst_employeeFindUniqueArgs extends mst_employeeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_employee findUniqueOrThrow
   */
  export type mst_employeeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter, which mst_employee to fetch.
     */
    where: mst_employeeWhereUniqueInput
  }


  /**
   * mst_employee base type for findFirst actions
   */
  export type mst_employeeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter, which mst_employee to fetch.
     */
    where?: mst_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_employees to fetch.
     */
    orderBy?: Enumerable<mst_employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_employees.
     */
    cursor?: mst_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_employees.
     */
    distinct?: Enumerable<Mst_employeeScalarFieldEnum>
  }

  /**
   * mst_employee findFirst
   */
  export interface mst_employeeFindFirstArgs extends mst_employeeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mst_employee findFirstOrThrow
   */
  export type mst_employeeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter, which mst_employee to fetch.
     */
    where?: mst_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_employees to fetch.
     */
    orderBy?: Enumerable<mst_employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_employees.
     */
    cursor?: mst_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_employees.
     */
    distinct?: Enumerable<Mst_employeeScalarFieldEnum>
  }


  /**
   * mst_employee findMany
   */
  export type mst_employeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter, which mst_employees to fetch.
     */
    where?: mst_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_employees to fetch.
     */
    orderBy?: Enumerable<mst_employeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_employees.
     */
    cursor?: mst_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_employees.
     */
    skip?: number
    distinct?: Enumerable<Mst_employeeScalarFieldEnum>
  }


  /**
   * mst_employee create
   */
  export type mst_employeeCreateArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * The data needed to create a mst_employee.
     */
    data: XOR<mst_employeeCreateInput, mst_employeeUncheckedCreateInput>
  }


  /**
   * mst_employee createMany
   */
  export type mst_employeeCreateManyArgs = {
    /**
     * The data used to create many mst_employees.
     */
    data: Enumerable<mst_employeeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mst_employee update
   */
  export type mst_employeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * The data needed to update a mst_employee.
     */
    data: XOR<mst_employeeUpdateInput, mst_employeeUncheckedUpdateInput>
    /**
     * Choose, which mst_employee to update.
     */
    where: mst_employeeWhereUniqueInput
  }


  /**
   * mst_employee updateMany
   */
  export type mst_employeeUpdateManyArgs = {
    /**
     * The data used to update mst_employees.
     */
    data: XOR<mst_employeeUpdateManyMutationInput, mst_employeeUncheckedUpdateManyInput>
    /**
     * Filter which mst_employees to update
     */
    where?: mst_employeeWhereInput
  }


  /**
   * mst_employee upsert
   */
  export type mst_employeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * The filter to search for the mst_employee to update in case it exists.
     */
    where: mst_employeeWhereUniqueInput
    /**
     * In case the mst_employee found by the `where` argument doesn't exist, create a new mst_employee with this data.
     */
    create: XOR<mst_employeeCreateInput, mst_employeeUncheckedCreateInput>
    /**
     * In case the mst_employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_employeeUpdateInput, mst_employeeUncheckedUpdateInput>
  }


  /**
   * mst_employee delete
   */
  export type mst_employeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
    /**
     * Filter which mst_employee to delete.
     */
    where: mst_employeeWhereUniqueInput
  }


  /**
   * mst_employee deleteMany
   */
  export type mst_employeeDeleteManyArgs = {
    /**
     * Filter which mst_employees to delete
     */
    where?: mst_employeeWhereInput
  }


  /**
   * mst_employee without action
   */
  export type mst_employeeArgs = {
    /**
     * Select specific fields to fetch from the mst_employee
     */
    select?: mst_employeeSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const Mst_departmentScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    department_name: 'department_name',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type Mst_departmentScalarFieldEnum = (typeof Mst_departmentScalarFieldEnum)[keyof typeof Mst_departmentScalarFieldEnum]


  export const Mst_employeeScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nsk: 'nsk',
    name: 'name',
    department_id: 'department_id',
    section_id: 'section_id',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by'
  };

  export type Mst_employeeScalarFieldEnum = (typeof Mst_employeeScalarFieldEnum)[keyof typeof Mst_employeeScalarFieldEnum]


  export const Mst_roleScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    role_name: 'role_name',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by',
    description: 'description'
  };

  export type Mst_roleScalarFieldEnum = (typeof Mst_roleScalarFieldEnum)[keyof typeof Mst_roleScalarFieldEnum]


  export const Mst_sectionScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    department_id: 'department_id',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by',
    section_name: 'section_name'
  };

  export type Mst_sectionScalarFieldEnum = (typeof Mst_sectionScalarFieldEnum)[keyof typeof Mst_sectionScalarFieldEnum]


  export const Mst_userScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    username: 'username',
    password: 'password',
    created_on: 'created_on',
    modified_on: 'modified_on',
    created_by: 'created_by',
    modified_by: 'modified_by',
    employee_id: 'employee_id',
    role: 'role'
  };

  export type Mst_userScalarFieldEnum = (typeof Mst_userScalarFieldEnum)[keyof typeof Mst_userScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type mst_roleWhereInput = {
    AND?: Enumerable<mst_roleWhereInput>
    OR?: Enumerable<mst_roleWhereInput>
    NOT?: Enumerable<mst_roleWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    role_name?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    description?: StringFilter | string
  }

  export type mst_roleOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    role_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    description?: SortOrder
  }

  export type mst_roleWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type mst_roleOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    role_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    description?: SortOrder
    _count?: mst_roleCountOrderByAggregateInput
    _avg?: mst_roleAvgOrderByAggregateInput
    _max?: mst_roleMaxOrderByAggregateInput
    _min?: mst_roleMinOrderByAggregateInput
    _sum?: mst_roleSumOrderByAggregateInput
  }

  export type mst_roleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mst_roleScalarWhereWithAggregatesInput>
    OR?: Enumerable<mst_roleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mst_roleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    role_name?: StringWithAggregatesFilter | string
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
    description?: StringWithAggregatesFilter | string
  }

  export type mst_userWhereInput = {
    AND?: Enumerable<mst_userWhereInput>
    OR?: Enumerable<mst_userWhereInput>
    NOT?: Enumerable<mst_userWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    employee_id?: IntNullableFilter | number | null
    role?: JsonNullableFilter
  }

  export type mst_userOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
  }

  export type mst_userWhereUniqueInput = {
    id?: number
    uuid?: string
    username?: string
  }

  export type mst_userOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    _count?: mst_userCountOrderByAggregateInput
    _avg?: mst_userAvgOrderByAggregateInput
    _max?: mst_userMaxOrderByAggregateInput
    _min?: mst_userMinOrderByAggregateInput
    _sum?: mst_userSumOrderByAggregateInput
  }

  export type mst_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mst_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<mst_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mst_userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
    employee_id?: IntNullableWithAggregatesFilter | number | null
    role?: JsonNullableWithAggregatesFilter
  }

  export type mst_departmentWhereInput = {
    AND?: Enumerable<mst_departmentWhereInput>
    OR?: Enumerable<mst_departmentWhereInput>
    NOT?: Enumerable<mst_departmentWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    department_name?: StringFilter | string
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    wip_mst_section?: Mst_sectionListRelationFilter
  }

  export type mst_departmentOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    wip_mst_section?: mst_sectionOrderByRelationAggregateInput
  }

  export type mst_departmentWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type mst_departmentOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: mst_departmentCountOrderByAggregateInput
    _avg?: mst_departmentAvgOrderByAggregateInput
    _max?: mst_departmentMaxOrderByAggregateInput
    _min?: mst_departmentMinOrderByAggregateInput
    _sum?: mst_departmentSumOrderByAggregateInput
  }

  export type mst_departmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mst_departmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<mst_departmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mst_departmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    department_name?: StringWithAggregatesFilter | string
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type mst_sectionWhereInput = {
    AND?: Enumerable<mst_sectionWhereInput>
    OR?: Enumerable<mst_sectionWhereInput>
    NOT?: Enumerable<mst_sectionWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    department_id?: IntFilter | number
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    section_name?: StringFilter | string
    wip_mst_department?: XOR<Mst_departmentRelationFilter, mst_departmentWhereInput>
  }

  export type mst_sectionOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    section_name?: SortOrder
    wip_mst_department?: mst_departmentOrderByWithRelationInput
  }

  export type mst_sectionWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type mst_sectionOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    section_name?: SortOrder
    _count?: mst_sectionCountOrderByAggregateInput
    _avg?: mst_sectionAvgOrderByAggregateInput
    _max?: mst_sectionMaxOrderByAggregateInput
    _min?: mst_sectionMinOrderByAggregateInput
    _sum?: mst_sectionSumOrderByAggregateInput
  }

  export type mst_sectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mst_sectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<mst_sectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mst_sectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    department_id?: IntWithAggregatesFilter | number
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
    section_name?: StringWithAggregatesFilter | string
  }

  export type mst_employeeWhereInput = {
    AND?: Enumerable<mst_employeeWhereInput>
    OR?: Enumerable<mst_employeeWhereInput>
    NOT?: Enumerable<mst_employeeWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    nsk?: IntFilter | number
    name?: StringFilter | string
    department_id?: IntNullableFilter | number | null
    section_id?: IntNullableFilter | number | null
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
  }

  export type mst_employeeOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nsk?: SortOrder
    name?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type mst_employeeOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nsk?: SortOrder
    name?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    _count?: mst_employeeCountOrderByAggregateInput
    _avg?: mst_employeeAvgOrderByAggregateInput
    _max?: mst_employeeMaxOrderByAggregateInput
    _min?: mst_employeeMinOrderByAggregateInput
    _sum?: mst_employeeSumOrderByAggregateInput
  }

  export type mst_employeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mst_employeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<mst_employeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mst_employeeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: UuidWithAggregatesFilter | string
    nsk?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    department_id?: IntNullableWithAggregatesFilter | number | null
    section_id?: IntNullableWithAggregatesFilter | number | null
    created_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modified_on?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_by?: IntNullableWithAggregatesFilter | number | null
    modified_by?: IntNullableWithAggregatesFilter | number | null
  }

  export type mst_roleCreateInput = {
    uuid: string
    role_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    description: string
  }

  export type mst_roleUncheckedCreateInput = {
    id?: number
    uuid: string
    role_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    description: string
  }

  export type mst_roleUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type mst_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type mst_roleCreateManyInput = {
    id?: number
    uuid: string
    role_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    description: string
  }

  export type mst_roleUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type mst_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type mst_userCreateInput = {
    uuid: string
    username: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    employee_id?: number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userUncheckedCreateInput = {
    id?: number
    uuid: string
    username: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    employee_id?: number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userCreateManyInput = {
    id?: number
    uuid: string
    username: string
    password: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    employee_id?: number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableJsonNullValueInput | InputJsonValue
  }

  export type mst_departmentCreateInput = {
    uuid: string
    department_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    wip_mst_section?: mst_sectionCreateNestedManyWithoutWip_mst_departmentInput
  }

  export type mst_departmentUncheckedCreateInput = {
    id?: number
    uuid: string
    department_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    wip_mst_section?: mst_sectionUncheckedCreateNestedManyWithoutWip_mst_departmentInput
  }

  export type mst_departmentUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    wip_mst_section?: mst_sectionUpdateManyWithoutWip_mst_departmentNestedInput
  }

  export type mst_departmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    wip_mst_section?: mst_sectionUncheckedUpdateManyWithoutWip_mst_departmentNestedInput
  }

  export type mst_departmentCreateManyInput = {
    id?: number
    uuid: string
    department_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_departmentUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_departmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_sectionCreateInput = {
    uuid: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
    wip_mst_department: mst_departmentCreateNestedOneWithoutWip_mst_sectionInput
  }

  export type mst_sectionUncheckedCreateInput = {
    id?: number
    uuid: string
    department_id: number
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
  }

  export type mst_sectionUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
    wip_mst_department?: mst_departmentUpdateOneRequiredWithoutWip_mst_sectionNestedInput
  }

  export type mst_sectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    department_id?: IntFieldUpdateOperationsInput | number
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_sectionCreateManyInput = {
    id?: number
    uuid: string
    department_id: number
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
  }

  export type mst_sectionUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_sectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    department_id?: IntFieldUpdateOperationsInput | number
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_employeeCreateInput = {
    uuid: string
    nsk: number
    name: string
    department_id?: number | null
    section_id?: number | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_employeeUncheckedCreateInput = {
    id?: number
    uuid: string
    nsk: number
    name: string
    department_id?: number | null
    section_id?: number | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_employeeUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nsk?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_employeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nsk?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_employeeCreateManyInput = {
    id?: number
    uuid: string
    nsk: number
    name: string
    department_id?: number | null
    section_id?: number | null
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_employeeUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nsk?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_employeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nsk?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type mst_roleCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    role_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    description?: SortOrder
  }

  export type mst_roleAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    role_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    description?: SortOrder
  }

  export type mst_roleMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    role_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    description?: SortOrder
  }

  export type mst_roleSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type mst_userCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
  }

  export type mst_userAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
  }

  export type mst_userMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
  }

  export type mst_userMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
  }

  export type mst_userSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    employee_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type Mst_sectionListRelationFilter = {
    every?: mst_sectionWhereInput
    some?: mst_sectionWhereInput
    none?: mst_sectionWhereInput
  }

  export type mst_sectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mst_departmentCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_departmentAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_departmentMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_name?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_departmentSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type Mst_departmentRelationFilter = {
    is?: mst_departmentWhereInput
    isNot?: mst_departmentWhereInput
  }

  export type mst_sectionCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    section_name?: SortOrder
  }

  export type mst_sectionAvgOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_sectionMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    section_name?: SortOrder
  }

  export type mst_sectionMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    department_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
    section_name?: SortOrder
  }

  export type mst_sectionSumOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nsk?: SortOrder
    name?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeAvgOrderByAggregateInput = {
    id?: SortOrder
    nsk?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nsk?: SortOrder
    name?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nsk?: SortOrder
    name?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_on?: SortOrder
    modified_on?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type mst_employeeSumOrderByAggregateInput = {
    id?: SortOrder
    nsk?: SortOrder
    department_id?: SortOrder
    section_id?: SortOrder
    created_by?: SortOrder
    modified_by?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mst_sectionCreateNestedManyWithoutWip_mst_departmentInput = {
    create?: XOR<Enumerable<mst_sectionCreateWithoutWip_mst_departmentInput>, Enumerable<mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>>
    connectOrCreate?: Enumerable<mst_sectionCreateOrConnectWithoutWip_mst_departmentInput>
    createMany?: mst_sectionCreateManyWip_mst_departmentInputEnvelope
    connect?: Enumerable<mst_sectionWhereUniqueInput>
  }

  export type mst_sectionUncheckedCreateNestedManyWithoutWip_mst_departmentInput = {
    create?: XOR<Enumerable<mst_sectionCreateWithoutWip_mst_departmentInput>, Enumerable<mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>>
    connectOrCreate?: Enumerable<mst_sectionCreateOrConnectWithoutWip_mst_departmentInput>
    createMany?: mst_sectionCreateManyWip_mst_departmentInputEnvelope
    connect?: Enumerable<mst_sectionWhereUniqueInput>
  }

  export type mst_sectionUpdateManyWithoutWip_mst_departmentNestedInput = {
    create?: XOR<Enumerable<mst_sectionCreateWithoutWip_mst_departmentInput>, Enumerable<mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>>
    connectOrCreate?: Enumerable<mst_sectionCreateOrConnectWithoutWip_mst_departmentInput>
    upsert?: Enumerable<mst_sectionUpsertWithWhereUniqueWithoutWip_mst_departmentInput>
    createMany?: mst_sectionCreateManyWip_mst_departmentInputEnvelope
    set?: Enumerable<mst_sectionWhereUniqueInput>
    disconnect?: Enumerable<mst_sectionWhereUniqueInput>
    delete?: Enumerable<mst_sectionWhereUniqueInput>
    connect?: Enumerable<mst_sectionWhereUniqueInput>
    update?: Enumerable<mst_sectionUpdateWithWhereUniqueWithoutWip_mst_departmentInput>
    updateMany?: Enumerable<mst_sectionUpdateManyWithWhereWithoutWip_mst_departmentInput>
    deleteMany?: Enumerable<mst_sectionScalarWhereInput>
  }

  export type mst_sectionUncheckedUpdateManyWithoutWip_mst_departmentNestedInput = {
    create?: XOR<Enumerable<mst_sectionCreateWithoutWip_mst_departmentInput>, Enumerable<mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>>
    connectOrCreate?: Enumerable<mst_sectionCreateOrConnectWithoutWip_mst_departmentInput>
    upsert?: Enumerable<mst_sectionUpsertWithWhereUniqueWithoutWip_mst_departmentInput>
    createMany?: mst_sectionCreateManyWip_mst_departmentInputEnvelope
    set?: Enumerable<mst_sectionWhereUniqueInput>
    disconnect?: Enumerable<mst_sectionWhereUniqueInput>
    delete?: Enumerable<mst_sectionWhereUniqueInput>
    connect?: Enumerable<mst_sectionWhereUniqueInput>
    update?: Enumerable<mst_sectionUpdateWithWhereUniqueWithoutWip_mst_departmentInput>
    updateMany?: Enumerable<mst_sectionUpdateManyWithWhereWithoutWip_mst_departmentInput>
    deleteMany?: Enumerable<mst_sectionScalarWhereInput>
  }

  export type mst_departmentCreateNestedOneWithoutWip_mst_sectionInput = {
    create?: XOR<mst_departmentCreateWithoutWip_mst_sectionInput, mst_departmentUncheckedCreateWithoutWip_mst_sectionInput>
    connectOrCreate?: mst_departmentCreateOrConnectWithoutWip_mst_sectionInput
    connect?: mst_departmentWhereUniqueInput
  }

  export type mst_departmentUpdateOneRequiredWithoutWip_mst_sectionNestedInput = {
    create?: XOR<mst_departmentCreateWithoutWip_mst_sectionInput, mst_departmentUncheckedCreateWithoutWip_mst_sectionInput>
    connectOrCreate?: mst_departmentCreateOrConnectWithoutWip_mst_sectionInput
    upsert?: mst_departmentUpsertWithoutWip_mst_sectionInput
    connect?: mst_departmentWhereUniqueInput
    update?: XOR<mst_departmentUpdateWithoutWip_mst_sectionInput, mst_departmentUncheckedUpdateWithoutWip_mst_sectionInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type mst_sectionCreateWithoutWip_mst_departmentInput = {
    uuid: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
  }

  export type mst_sectionUncheckedCreateWithoutWip_mst_departmentInput = {
    id?: number
    uuid: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
  }

  export type mst_sectionCreateOrConnectWithoutWip_mst_departmentInput = {
    where: mst_sectionWhereUniqueInput
    create: XOR<mst_sectionCreateWithoutWip_mst_departmentInput, mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>
  }

  export type mst_sectionCreateManyWip_mst_departmentInputEnvelope = {
    data: Enumerable<mst_sectionCreateManyWip_mst_departmentInput>
    skipDuplicates?: boolean
  }

  export type mst_sectionUpsertWithWhereUniqueWithoutWip_mst_departmentInput = {
    where: mst_sectionWhereUniqueInput
    update: XOR<mst_sectionUpdateWithoutWip_mst_departmentInput, mst_sectionUncheckedUpdateWithoutWip_mst_departmentInput>
    create: XOR<mst_sectionCreateWithoutWip_mst_departmentInput, mst_sectionUncheckedCreateWithoutWip_mst_departmentInput>
  }

  export type mst_sectionUpdateWithWhereUniqueWithoutWip_mst_departmentInput = {
    where: mst_sectionWhereUniqueInput
    data: XOR<mst_sectionUpdateWithoutWip_mst_departmentInput, mst_sectionUncheckedUpdateWithoutWip_mst_departmentInput>
  }

  export type mst_sectionUpdateManyWithWhereWithoutWip_mst_departmentInput = {
    where: mst_sectionScalarWhereInput
    data: XOR<mst_sectionUpdateManyMutationInput, mst_sectionUncheckedUpdateManyWithoutWip_mst_sectionInput>
  }

  export type mst_sectionScalarWhereInput = {
    AND?: Enumerable<mst_sectionScalarWhereInput>
    OR?: Enumerable<mst_sectionScalarWhereInput>
    NOT?: Enumerable<mst_sectionScalarWhereInput>
    id?: IntFilter | number
    uuid?: UuidFilter | string
    department_id?: IntFilter | number
    created_on?: DateTimeNullableFilter | Date | string | null
    modified_on?: DateTimeNullableFilter | Date | string | null
    created_by?: IntNullableFilter | number | null
    modified_by?: IntNullableFilter | number | null
    section_name?: StringFilter | string
  }

  export type mst_departmentCreateWithoutWip_mst_sectionInput = {
    uuid: string
    department_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_departmentUncheckedCreateWithoutWip_mst_sectionInput = {
    id?: number
    uuid: string
    department_name: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
  }

  export type mst_departmentCreateOrConnectWithoutWip_mst_sectionInput = {
    where: mst_departmentWhereUniqueInput
    create: XOR<mst_departmentCreateWithoutWip_mst_sectionInput, mst_departmentUncheckedCreateWithoutWip_mst_sectionInput>
  }

  export type mst_departmentUpsertWithoutWip_mst_sectionInput = {
    update: XOR<mst_departmentUpdateWithoutWip_mst_sectionInput, mst_departmentUncheckedUpdateWithoutWip_mst_sectionInput>
    create: XOR<mst_departmentCreateWithoutWip_mst_sectionInput, mst_departmentUncheckedCreateWithoutWip_mst_sectionInput>
  }

  export type mst_departmentUpdateWithoutWip_mst_sectionInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_departmentUncheckedUpdateWithoutWip_mst_sectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    department_name?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mst_sectionCreateManyWip_mst_departmentInput = {
    id?: number
    uuid: string
    created_on?: Date | string | null
    modified_on?: Date | string | null
    created_by?: number | null
    modified_by?: number | null
    section_name: string
  }

  export type mst_sectionUpdateWithoutWip_mst_departmentInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_sectionUncheckedUpdateWithoutWip_mst_departmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_sectionUncheckedUpdateManyWithoutWip_mst_sectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    created_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    modified_by?: NullableIntFieldUpdateOperationsInput | number | null
    section_name?: StringFieldUpdateOperationsInput | string
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