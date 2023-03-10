
// since we added type: module to the package.json, this is the new syntax for importing, instead of require. 
// we need to assert that the type we import is json
import jokes from "./jokes.json" assert {type: "json"};
export default jokes;