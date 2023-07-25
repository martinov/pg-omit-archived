/**
 * This plugin was sponsored by Sprout LLC. 🙏
 *
 * https://sprout.io
 */
import type { Build, Plugin as GraphileEnginePlugin } from "postgraphile";
import type { PgClass, PgConstraint, QueryBuilder } from "graphile-build-pg";
/**
 * Build utils
 *
 * @param build - Graphile Build object
 * @param keyword - 'archived' or 'deleted' or similar
 * @param table - The table we're building a query against
 * @param parentTable - The table of the `parentQueryBuilder`, if any
 * @param allowInherit - Should we allow inheritance if it seems possible?
 */
declare const makeUtils: (build: Build, keyword: string, table: PgClass, parentTable: PgClass, allowInherit?: boolean | undefined, relevantRelation?: PgConstraint | null | undefined) => {
    OptionType: any;
    addWhereClause: (queryBuilder: QueryBuilder, fieldArgs: any) => void;
    capableOfInherit: any;
    argumentName: any;
} | null;
declare const generator: (keyword?: string) => GraphileEnginePlugin;
declare const Plugin: GraphileEnginePlugin & {
    custom: (keyword?: string) => GraphileEnginePlugin;
    makeUtils: (build: Build, keyword: string, table: PgClass, parentTable: PgClass, allowInherit?: boolean | undefined, relevantRelation?: PgConstraint | null | undefined) => {
        OptionType: any;
        addWhereClause: (queryBuilder: QueryBuilder, fieldArgs: any) => void;
        capableOfInherit: any;
        argumentName: any;
    } | null;
};
export default Plugin;
export { generator as custom, makeUtils };
