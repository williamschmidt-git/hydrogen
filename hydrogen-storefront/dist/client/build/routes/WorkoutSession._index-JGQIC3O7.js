import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-NXWCPLMB.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-AQO2IFES.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/WorkoutSession._index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function WorkoutSession() {
  const { workouts } = useLoaderData();
  const [index, setIndex] = (0, import_react2.useState)(0);
  const [data, setData] = (0, import_react2.useState)([workouts[index]]);
  const navigate = useNavigate();
  const nextData = () => {
    if (!(index === data.length)) {
      setData([workouts[index + 1]]);
      setIndex(index + 1);
    } else {
      console.log("acabaram os exerc\xEDcios");
    }
  };
  const backData = () => {
    if (index > 0) {
      setData([workouts[index - 1]]);
      setIndex(index - 1);
    } else {
      console.log("indice menor que zero");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-purple-800 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-2xl font-bold pl-5", children: "Welcome" }, void 0, false, {
      fileName: "app/routes/WorkoutSession._index.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/WorkoutSession._index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/WorkoutSession._index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-row", children: data?.map((e) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "max-w-xs min-w-min ml-1 mt-1 p-2 border rounded-sm shadow-gray-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: e.workout_name }, void 0, false, {
                fileName: "app/routes/WorkoutSession._index.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: 'text-lg font-bold text-gray-900"', children: e.workout_type }, void 0, false, {
                fileName: "app/routes/WorkoutSession._index.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: e.how_to_perform }, void 0, false, {
                fileName: "app/routes/WorkoutSession._index.tsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    className: "text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center",
                    onClick: backData,
                    children: "Back"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/WorkoutSession._index.tsx",
                    lineNumber: 65,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    className: "text-white w-32 bg-purple-800 font-medium rounded-lg text-sm mx-2 px-5 py-3.5 mt-2 text-center p-3",
                    type: "button",
                    onClick: () => navigate("/restTimer"),
                    children: "Rest"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/WorkoutSession._index.tsx",
                    lineNumber: 72,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    onClick: nextData,
                    className: "text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center p-3",
                    children: "Next"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/WorkoutSession._index.tsx",
                    lineNumber: 80,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/WorkoutSession._index.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this)
            ]
          },
          e.id,
          true,
          {
            fileName: "app/routes/WorkoutSession._index.tsx",
            lineNumber: 53,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/WorkoutSession._index.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center", children: "Finish workout" }, void 0, false, {
        fileName: "app/routes/WorkoutSession._index.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/WorkoutSession._index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/WorkoutSession._index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
export {
  WorkoutSession as default
};
//# sourceMappingURL=/build/routes/WorkoutSession._index-JGQIC3O7.js.map
