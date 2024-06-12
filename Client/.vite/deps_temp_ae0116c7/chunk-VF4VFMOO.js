import {
  __toESM,
  require_react
} from "./chunk-ATZAHYIB.js";

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react.useReducer)((state) => !state, false);
  return dispatch;
}

// node_modules/@restart/ui/esm/NavContext.js
var React = __toESM(require_react());
var NavContext = React.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

export {
  useForceUpdate,
  NavContext_default
};
//# sourceMappingURL=chunk-VF4VFMOO.js.map
