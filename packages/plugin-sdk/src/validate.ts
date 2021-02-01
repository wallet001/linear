import { PluginValidateFn, Types } from "@graphql-codegen/plugin-helpers";
import { logger } from "@linear/common";
import { validateExtension } from "@linear/plugin-doc";
import { GraphQLSchema } from "graphql";
import { SdkPluginConfig } from "./types";

/**
 * Validate use of the plugin
 */
export const validate: PluginValidateFn = async (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: SdkPluginConfig,
  outputFile: string
) => {
  const packageName = "@linear/plugin-sdk";
  logger.info(`Validating ${packageName}`);
  logger.info(config);

  const prefix = `Plugin "${packageName}" config requires`;

  validateExtension(packageName, ".ts", outputFile);

  if (!config.documentFile || typeof config.documentFile !== "string") {
    throw new Error(`${prefix} documentFile to be a string path to a document file generated by "typed-document-node"`);
  }
};