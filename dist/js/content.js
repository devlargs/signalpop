/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/content.ts":
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

chrome.runtime.sendMessage({}, (response) => {
    const url = (a) => `https://www.signalclout.com/profile-analyzer?search=${a}&referrer=signalpop`;
    const redirect = (name) => {
        window.open(url(name), "_blank");
    };
    const checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady);
            const { host } = window.location;
            if (host === "bitclout.com") {
                let element;
                const interval = setInterval(() => {
                    //   const a = document.getElementsByClassName(
                    //     "fs-24px font-weight-bold d-flex align-items-center"
                    //   )[1];
                    const btn = document.getElementsByClassName("creator-profile__avatar")[0];
                    const { pathname } = window.location;
                    if (btn && pathname.includes("/u/")) {
                        const name = pathname.split("/u/")[1];
                        element = btn;
                        // clearInterval(interval);
                        // @${name}
                        btn.innerHTML = `
            <button id="signal" style="
                margin-left: 90px;
                margin-top: 50px;
                color: white;
                background-color: #005BFF;
                border: none;
                border-radius: 5px;
                padding: 6px 12px;
                font-size: 14px;
            ">Signalclout</button> 
          `;
                        document
                            .getElementById("signal")
                            .addEventListener("click", () => redirect(name));
                    }
                }, 1000);
            }
            if (host.includes("signalclout.com") ||
                host.includes("signalclout.vercel.app")) {
                console.log("nice one largs");
                const interval = setInterval(() => {
                    const profile = document.querySelector('img[src="/search-signalclout-brand.svg"]');
                    const xpath = "//button[text()='View Details']";
                    const viewDetails = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    console.log(profile);
                    if (profile) {
                        if (profile instanceof HTMLElement) {
                            profile.click();
                            clearInterval(interval);
                        }
                        return;
                    }
                    if (viewDetails) {
                        if (viewDetails instanceof HTMLElement) {
                            viewDetails.click();
                            clearInterval(interval);
                        }
                        return;
                    }
                }, 1000);
            }
        }
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQ3hCLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDO0lBQ2hGLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNsQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3RDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUVqQyxJQUFJLElBQUksS0FBSyxjQUFjLEVBQUU7Z0JBQzNCLElBQUksT0FBTyxDQUFDO2dCQUVaLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hDLCtDQUErQztvQkFDL0MsMkRBQTJEO29CQUMzRCxVQUFVO29CQUNWLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDekMseUJBQXlCLENBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRUwsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBRXJDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ25DLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXRDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ2QsMkJBQTJCO3dCQUMzQixXQUFXO3dCQUNYLEdBQUcsQ0FBQyxTQUFTLEdBQUc7Ozs7Ozs7Ozs7O1dBV2pCLENBQUM7d0JBQ0EsUUFBUTs2QkFDTCxjQUFjLENBQUMsUUFBUSxDQUFDOzZCQUN4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO1lBRUQsSUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQ3ZDO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFFOUIsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtvQkFDaEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDcEMsMENBQTBDLENBQzNDLENBQUM7b0JBRUYsTUFBTSxLQUFLLEdBQUcsaUNBQWlDLENBQUM7b0JBQ2hELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQ25DLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFdBQVcsQ0FBQyx1QkFBdUIsRUFDbkMsSUFBSSxDQUNMLENBQUMsZUFBZSxDQUFDO29CQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixJQUFJLE9BQU8sRUFBRTt3QkFDWCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7NEJBQ2xDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDaEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRCxPQUFPO3FCQUNSO29CQUVELElBQUksV0FBVyxFQUFFO3dCQUNmLElBQUksV0FBVyxZQUFZLFdBQVcsRUFBRTs0QkFDdEMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNwQixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3pCO3dCQUNELE9BQU87cUJBQ1I7Z0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9jb250ZW50LnRzXCIpO1xuIiwiY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe30sIChyZXNwb25zZSkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IChhOiBzdHJpbmcpID0+XHJcbiAgICBgaHR0cHM6Ly93d3cuc2lnbmFsY2xvdXQuY29tL3Byb2ZpbGUtYW5hbHl6ZXI/c2VhcmNoPSR7YX0mcmVmZXJyZXI9c2lnbmFscG9wYDtcclxuICBjb25zdCByZWRpcmVjdCA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKHVybChuYW1lKSwgXCJfYmxhbmtcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tSZWFkeSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChjaGVja1JlYWR5KTtcclxuICAgICAgY29uc3QgeyBob3N0IH0gPSB3aW5kb3cubG9jYXRpb247XHJcblxyXG4gICAgICBpZiAoaG9zdCA9PT0gXCJiaXRjbG91dC5jb21cIikge1xyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIC8vICAgY29uc3QgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICAvLyAgICAgXCJmcy0yNHB4IGZvbnQtd2VpZ2h0LWJvbGQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAvLyAgIClbMV07XHJcbiAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgICBcImNyZWF0b3ItcHJvZmlsZV9fYXZhdGFyXCJcclxuICAgICAgICAgIClbMF07XHJcblxyXG4gICAgICAgICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uO1xyXG5cclxuICAgICAgICAgIGlmIChidG4gJiYgcGF0aG5hbWUuaW5jbHVkZXMoXCIvdS9cIikpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGhuYW1lLnNwbGl0KFwiL3UvXCIpWzFdO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IGJ0bjtcclxuICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIC8vIEAke25hbWV9XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWduYWxcIiBzdHlsZT1cIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBcIj5TaWduYWxjbG91dDwvYnV0dG9uPiBcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwic2lnbmFsXCIpXHJcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZWRpcmVjdChuYW1lKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBob3N0LmluY2x1ZGVzKFwic2lnbmFsY2xvdXQuY29tXCIpIHx8XHJcbiAgICAgICAgaG9zdC5pbmNsdWRlcyhcInNpZ25hbGNsb3V0LnZlcmNlbC5hcHBcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuaWNlIG9uZSBsYXJnc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJ2ltZ1tzcmM9XCIvc2VhcmNoLXNpZ25hbGNsb3V0LWJyYW5kLnN2Z1wiXSdcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgY29uc3QgeHBhdGggPSBcIi8vYnV0dG9uW3RleHQoKT0nVmlldyBEZXRhaWxzJ11cIjtcclxuICAgICAgICAgIGNvbnN0IHZpZXdEZXRhaWxzID0gZG9jdW1lbnQuZXZhbHVhdGUoXHJcbiAgICAgICAgICAgIHhwYXRoLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICkuc2luZ2xlTm9kZVZhbHVlO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpO1xyXG4gICAgICAgICAgaWYgKHByb2ZpbGUpIHtcclxuICAgICAgICAgICAgaWYgKHByb2ZpbGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHByb2ZpbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHZpZXdEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGV0YWlscyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgdmlld0RldGFpbHMuY2xpY2soKTtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=