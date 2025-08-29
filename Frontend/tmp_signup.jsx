import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/authenticaton/Signup.jsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7a739352"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7a739352"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=7a739352";
import "/src/components/authenticaton/Signup.css";
const Signup = () => {
  _s();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE || (typeof window !== "undefined" && (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") ? "http://127.0.0.1:8000/api/" : "https://mozuma-oceanfront-suites-beyin-production.up.railway.app/api/");
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          password
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Signup failed");
      }
      const data = await response.json();
      setSuccess("Account created successfully! You can now log in.");
      setError(null);
      setTimeout(() => navigate("/login"), 2e3);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "signup-page", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "signup-image", children: /* @__PURE__ */ jsxDEV("img", { src: "/assets/images/suites/suite-7.jpg", alt: "signup" }, void 0, false, {
      fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
      lineNumber: 81,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
      lineNumber: 80,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "signup-form", children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Create an account" }, void 0, false, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 85,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Enter your details below" }, void 0, false, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 86,
        columnNumber: 5
      }, this),
      error && /* @__PURE__ */ jsxDEV("p", { className: "error", children: error }, void 0, false, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 88,
        columnNumber: 15
      }, this),
      success && /* @__PURE__ */ jsxDEV("p", { className: "success", children: success }, void 0, false, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 89,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSignup, children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            placeholder: "Name",
            value: name,
            onChange: (e) => setName(e.target.value)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
            lineNumber: 92,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            placeholder: "Email or Phone Number",
            value: username,
            onChange: (e) => setUsername(e.target.value)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
            lineNumber: 98,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
            lineNumber: 104,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "signup-button", children: "Create an account" }, void 0, false, {
          fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
          lineNumber: 110,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 91,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "login-option", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/login", children: "Log In" }, void 0, false, {
          fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
          lineNumber: 114,
          columnNumber: 32
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
        lineNumber: 113,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
      lineNumber: 84,
      columnNumber: 3
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
};
_s(Signup, "1Nio5X3ZTiUnhdIIfL+sn3PpptI=", false, function() {
  return [useNavigate];
});
_c = Signup;
export default Signup;
var _c;
$RefreshReg$(_c, "Signup");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/revic/OneDrive/Desktop/MozumaSuitesTest28.08.2025/Mozuma-Oceanfront-Suites-Beyin/Frontend/src/components/authenticaton/Signup.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QVlnQixFQUFFa0IsT0FBT0MsS0FBSztBQUFBO0FBQUEsVUFKN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSStDO0FBQUEsUUFFL0M7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLE1BQUs7QUFBQSxZQUNMLGFBQVk7QUFBQSxZQUNaLE9BQU9sQztBQUFBQSxZQUNQLFVBQVUsQ0FBQ2UsTUFBTWQsWUFBWWMsRUFBRWtCLE9BQU9DLEtBQUs7QUFBQTtBQUFBLFVBSjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUkrQztBQUFBLFFBRS9DLHVCQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsaUJBQWdCLGlDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlFO0FBQUEsV0FuQm5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFvQkE7QUFBQSxNQUVBLHVCQUFDLE9BQUUsV0FBVSxnQkFBZTtBQUFBO0FBQUEsUUFDRCx1QkFBQyxRQUFLLElBQUcsVUFBUyxzQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3QjtBQUFBLFdBRG5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLFNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnQ0E7QUFBQSxPQXJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0NKO0FBR0E7QUFBRXZDLEdBekZJRCxRQUFNO0FBQUEsVUFNT0QsV0FBVztBQUFBO0FBQUEwQyxLQU54QnpDO0FBMkZOLGVBQWVBO0FBQU8sSUFBQXlDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZU5hdmlnYXRlIiwiU2lnbnVwIiwiX3MiLCJuYW1lIiwic2V0TmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibmF2aWdhdGUiLCJBUElfQkFTRSIsImltcG9ydCIsImVudiIsIlZJVEVfQVBJX0JBU0UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiaGFuZGxlU2lnbnVwIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsIkVycm9yIiwiZGV0YWlsIiwiZGF0YSIsInNldFRpbWVvdXQiLCJlcnIiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTaWdudXAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi9TaWdudXAuY3NzJzsgLy8gbWFrZSBzdXJlIHRvIGltcG9ydCB0aGUgQ1NTXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gZW1haWwgb3IgcGhvbmVcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICBjb25zdCBBUElfQkFTRSA9IGltcG9ydC5tZXRhLmVudi5WSVRFX0FQSV9CQVNFIHx8ICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJzEyNy4wLjAuMScgfHwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JykpXHJcbiAgICA/ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpLydcclxuICAgIDogJ2h0dHBzOi8vbW96dW1hLW9jZWFuZnJvbnQtc3VpdGVzLWJleWluLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpLycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWdudXAgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX1yZWdpc3Rlci9gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckRhdGEuZGV0YWlsIHx8IFwiU2lnbnVwIGZhaWxlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0U3VjY2VzcyhcIkFjY291bnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhIFlvdSBjYW4gbm93IGxvZyBpbi5cIik7XHJcbiAgICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgICAgLy8gUmVkaXJlY3QgdG8gbG9naW4gYWZ0ZXIgc2lnbnVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbmF2aWdhdGUoXCIvbG9naW5cIiksIDIwMDApO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIHNldFN1Y2Nlc3MobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuIFxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2lnbnVwLXBhZ2UnPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdzaWdudXAtaW1hZ2UnPlxyXG4gICAgPGltZyBzcmM9Jy9hc3NldHMvaW1hZ2VzL3N1aXRlcy9zdWl0ZS03LmpwZycgYWx0PVwic2lnbnVwXCIgLz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9J3NpZ251cC1mb3JtJz5cclxuICAgIDxoMj5DcmVhdGUgYW4gYWNjb3VudDwvaDI+XHJcbiAgICA8cD5FbnRlciB5b3VyIGRldGFpbHMgYmVsb3c8L3A+XHJcblxyXG4gICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yfTwvcD59XHJcbiAgICB7c3VjY2VzcyAmJiA8cCBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e3N1Y2Nlc3N9PC9wPn1cclxuXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2lnbnVwfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBvciBQaG9uZSBOdW1iZXInXHJcbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdzaWdudXAtYnV0dG9uJz5DcmVhdGUgYW4gYWNjb3VudDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxwIGNsYXNzTmFtZT0nbG9naW4tb3B0aW9uJz5cclxuICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9nIEluPC9MaW5rPlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sImZpbGUiOiJDOi9Vc2Vycy9yZXZpYy9PbmVEcml2ZS9EZXNrdG9wL01venVtYVN1aXRlc1Rlc3QyOC4wOC4yMDI1L01venVtYS1PY2VhbmZyb250LVN1aXRlcy1CZXlpbi9Gcm9udGVuZC9zcmMvY29tcG9uZW50cy9hdXRoZW50aWNhdG9uL1NpZ251cC5qc3gifQ==