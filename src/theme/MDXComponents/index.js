// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import {
  Cards,
  Card,
  CardSmall,
  EVMTutorialCards,
  EVMTutorialCard,
} from "./Cards/index";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Cards,
  Card,
  CardSmall,
  EVMTutorialCards,
  EVMTutorialCard,
};
