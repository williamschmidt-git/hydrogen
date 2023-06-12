import {
  useNavigate
} from "/build/_shared/chunk-NXWCPLMB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AQO2IFES.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/RestTimer._index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RestTimer() {
  const [seconds, setSeconds] = (0, import_react.useState)(90);
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1e3);
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const formatTime = (seconds2) => {
    const minutes = Math.floor(seconds2 / 60);
    const remainingSeconds = seconds2 % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-purple-800 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-2xl font-bold pl-5", children: "Welcome" }, void 0, false, {
      fileName: "app/routes/RestTimer._index.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/RestTimer._index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/RestTimer._index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-64 p-2 border rounded-sm shadow-gray-100 flex items-center justify-center px-6 py-8 mx-auto mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl text-purple-900", children: formatTime(seconds) }, void 0, false, {
        fileName: "app/routes/RestTimer._index.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/RestTimer._index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "text-white w-32 bg-purple-800 font-medium rounded-lg text-sm mx-2 px-5 py-3.5 mt-2 text-center p-3",
          type: "button",
          onClick: () => navigate("/workoutSession"),
          children: "Go to Reps"
        },
        void 0,
        false,
        {
          fileName: "app/routes/RestTimer._index.tsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/RestTimer._index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/RestTimer._index.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
export {
  RestTimer as default
};
//# sourceMappingURL=/build/routes/RestTimer._index-UXO7GUTV.js.map
