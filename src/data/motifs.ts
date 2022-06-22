import { Motif } from "../types/Motif";

export enum MOTIFS {
  MOTIF = "MOTIF",
  INSTANCE = "INSTANCE",
  OBJECT = "OBJECT",
  PROPERTY = "PROPERTY",
  TYPE = "TYPE",
  BOOLEAN = "BOOLEAN",
  NUMBER = "NUMBER",
  STRING = "STRING",
  ARRAY = "ARRAY",
  FUNCTION = "FUNCTION",
  CLASS = "CLASS",
  REFERENCE = "REFERENCE",
  VARIABLE = "VARIABLE",
  JS_REFERENCE = "JS_REFERENCE",
  SCOPE = "SCOPE",
  JS_SCOPE = "JS_SCOPE",
  CAST = "CAST",
  /** Aliases : WHILE, EACH */
  FOR = "FOR",
  IF = "IF",
  ELSE = "ELSE",
  TYPESCRIPT_TYPE = "TYPESCRIPT_TYPE",
  ID = "ID",
  /** Aliases : TITLE, LABEL */
  NAME = "NAME",
  TAG = "TAG",
  EMAIL = "EMAIL",
  TEMPLATE = "TEMPLATE",
  HEAD = "HEAD",
  BODY = "BODY",
  FOOTER = "FOOTER",
  MODULE = "MODULE",
  COMPONENT = "COMPONENT",
  STATE = "STATE",
  CONTROLLER = "CONTROLLER",
  /** Aliases : CLIENT */
  FRONT = "FRONT",
  HTML_TAG = "HTML_TAG",
  HTML_CLASS = "HTML_CLASS",
  HTML_HEAD = "HTML_HEAD",
  HTML_BODY = "HTML_BODY",
  FILE = "FILE",
  FOLDER = "FOLDER",
  MEDIA = "MEDIA",
  /** MEDIA cheapest */
  AUDIO = "AUDIO",
  /** MEDIA average */
  IMAGE = "IMAGE",
  /** MEDIA most expansive */
  VIDEO = "VIDEO",
  BACK = "BACK",
  ROUTE = "ROUTE",
  PATH = "PATH",
  URL = "URL",
  SLUG = "SLUG",
  MIDDLEWARE = "MIDDLEWARE",
  USER = "USER",
  TOKEN = "TOKEN",
  DATABASE = "DATABASE",
  QUERY = "QUERY",
  PERMISSION = "PERMISSION",
  ROLE = "ROLE",
  FRAMEWORK = "FRAMEWORK",
}

export const MOTIFS_DATA: { [key in MOTIFS]?: Motif } = {
  ID: {
    id: MOTIFS.ID,
    summary:
      "Clé unique permettant d'identifier une instance d'un objet/d'un motif",
  },
};
