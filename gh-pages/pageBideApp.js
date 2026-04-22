"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-action-sheet.entry.js
  var pwa_action_sheet_entry_exports = {};
  __export(pwa_action_sheet_entry_exports, {
    pwa_action_sheet: () => PWAActionSheet
  });
  var actionSheetCss, PWAActionSheet;
  var init_pwa_action_sheet_entry = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-action-sheet.entry.js"() {
      init_index_1c5c47b4();
      actionSheetCss = ':host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0);-webkit-transition:400ms background-color cubic-bezier(.36,.66,.04,1);transition:400ms background-color cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0, 0, 0, 0.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1), 400ms -webkit-transform cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0%);transform:translateY(0%)}@media only screen and (max-width: 568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:rgb(38, 38, 38);font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0px}.action-sheet-button:hover{background-color:#F6F6F6}';
      PWAActionSheet = (function() {
        function e6(e7) {
          registerInstance(this, e7);
          this.onSelection = createEvent(this, "onSelection", 7);
          this.onCanceled = createEvent(this, "onCanceled", 7);
          this.header = void 0;
          this.cancelable = true;
          this.options = [];
          this.open = false;
        }
        e6.prototype.componentDidLoad = function() {
          var e7 = this;
          requestAnimationFrame((function() {
            e7.open = true;
          }));
        };
        e6.prototype.dismiss = function() {
          if (this.cancelable) {
            this.onCanceled.emit();
            this.close();
          }
        };
        e6.prototype.close = function() {
          var e7 = this;
          this.open = false;
          setTimeout((function() {
            e7.el.parentNode.removeChild(e7.el);
          }), 500);
        };
        e6.prototype.handleOptionClick = function(e7, t3) {
          e7.stopPropagation();
          this.onSelection.emit(t3);
          this.close();
        };
        e6.prototype.render = function() {
          var e7 = this;
          return h3("div", { class: "wrapper".concat(this.open ? " open" : ""), onClick: function() {
            return e7.dismiss();
          } }, h3("div", { class: "content" }, h3("div", { class: "title" }, this.header), this.options.map((function(t3, n5) {
            return h3("div", { class: "action-sheet-option", onClick: function(t4) {
              return e7.handleOptionClick(t4, n5);
            } }, h3("div", { class: "action-sheet-button" }, t3.title));
          }))));
        };
        Object.defineProperty(e6.prototype, "el", { get: function() {
          return getElement(this);
        }, enumerable: false, configurable: true });
        return e6;
      })();
      PWAActionSheet.style = actionSheetCss;
    }
  });

  // node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera-modal.entry.js
  var pwa_camera_modal_entry_exports = {};
  __export(pwa_camera_modal_entry_exports, {
    pwa_camera_modal: () => PWACameraModal
  });
  var __awaiter, __generator, cameraModalCss, PWACameraModal;
  var init_pwa_camera_modal_entry = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera-modal.entry.js"() {
      init_index_1c5c47b4();
      __awaiter = function(e6, t3, n5, r6) {
        function i5(e7) {
          return e7 instanceof n5 ? e7 : new n5((function(t4) {
            t4(e7);
          }));
        }
        return new (n5 || (n5 = Promise))((function(n6, o6) {
          function a3(e7) {
            try {
              c4(r6.next(e7));
            } catch (e8) {
              o6(e8);
            }
          }
          function s4(e7) {
            try {
              c4(r6["throw"](e7));
            } catch (e8) {
              o6(e8);
            }
          }
          function c4(e7) {
            e7.done ? n6(e7.value) : i5(e7.value).then(a3, s4);
          }
          c4((r6 = r6.apply(e6, t3 || [])).next());
        }));
      };
      __generator = function(e6, t3) {
        var n5 = { label: 0, sent: function() {
          if (o6[0] & 1) throw o6[1];
          return o6[1];
        }, trys: [], ops: [] }, r6, i5, o6, a3;
        return a3 = { next: s4(0), throw: s4(1), return: s4(2) }, typeof Symbol === "function" && (a3[Symbol.iterator] = function() {
          return this;
        }), a3;
        function s4(e7) {
          return function(t4) {
            return c4([e7, t4]);
          };
        }
        function c4(s5) {
          if (r6) throw new TypeError("Generator is already executing.");
          while (a3 && (a3 = 0, s5[0] && (n5 = 0)), n5) try {
            if (r6 = 1, i5 && (o6 = s5[0] & 2 ? i5["return"] : s5[0] ? i5["throw"] || ((o6 = i5["return"]) && o6.call(i5), 0) : i5.next) && !(o6 = o6.call(i5, s5[1])).done) return o6;
            if (i5 = 0, o6) s5 = [s5[0] & 2, o6.value];
            switch (s5[0]) {
              case 0:
              case 1:
                o6 = s5;
                break;
              case 4:
                n5.label++;
                return { value: s5[1], done: false };
              case 5:
                n5.label++;
                i5 = s5[1];
                s5 = [0];
                continue;
              case 7:
                s5 = n5.ops.pop();
                n5.trys.pop();
                continue;
              default:
                if (!(o6 = n5.trys, o6 = o6.length > 0 && o6[o6.length - 1]) && (s5[0] === 6 || s5[0] === 2)) {
                  n5 = 0;
                  continue;
                }
                if (s5[0] === 3 && (!o6 || s5[1] > o6[0] && s5[1] < o6[3])) {
                  n5.label = s5[1];
                  break;
                }
                if (s5[0] === 6 && n5.label < o6[1]) {
                  n5.label = o6[1];
                  o6 = s5;
                  break;
                }
                if (o6 && n5.label < o6[2]) {
                  n5.label = o6[2];
                  n5.ops.push(s5);
                  break;
                }
                if (o6[2]) n5.ops.pop();
                n5.trys.pop();
                continue;
            }
            s5 = t3.call(e6, n5);
          } catch (e7) {
            s5 = [6, e7];
            i5 = 0;
          } finally {
            r6 = o6 = 0;
          }
          if (s5[0] & 5) throw s5[1];
          return { value: s5[0] ? s5[1] : void 0, done: true };
        }
      };
      cameraModalCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}";
      PWACameraModal = (function() {
        function e6(e7) {
          registerInstance(this, e7);
          this.onPhoto = createEvent(this, "onPhoto", 7);
          this.noDeviceError = createEvent(this, "noDeviceError", 7);
          this.facingMode = "user";
          this.hidePicker = false;
        }
        e6.prototype.present = function() {
          return __awaiter(this, void 0, void 0, (function() {
            var e7;
            var t3 = this;
            return __generator(this, (function(n5) {
              e7 = document.createElement("pwa-camera-modal-instance");
              e7.facingMode = this.facingMode;
              e7.hidePicker = this.hidePicker;
              e7.addEventListener("onPhoto", (function(e8) {
                return __awaiter(t3, void 0, void 0, (function() {
                  var t4;
                  return __generator(this, (function(n6) {
                    if (!this._modal) {
                      return [2];
                    }
                    t4 = e8.detail;
                    this.onPhoto.emit(t4);
                    return [2];
                  }));
                }));
              }));
              e7.addEventListener("noDeviceError", (function(e8) {
                return __awaiter(t3, void 0, void 0, (function() {
                  return __generator(this, (function(t4) {
                    this.noDeviceError.emit(e8);
                    return [2];
                  }));
                }));
              }));
              document.body.append(e7);
              this._modal = e7;
              return [2];
            }));
          }));
        };
        e6.prototype.dismiss = function() {
          return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e7) {
              if (!this._modal) {
                return [2];
              }
              this._modal && this._modal.parentNode.removeChild(this._modal);
              this._modal = null;
              return [2];
            }));
          }));
        };
        e6.prototype.render = function() {
          return h3("div", null);
        };
        return e6;
      })();
      PWACameraModal.style = cameraModalCss;
    }
  });

  // node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-toast.entry.js
  var pwa_toast_entry_exports = {};
  __export(pwa_toast_entry_exports, {
    pwa_toast: () => PWAToast
  });
  var toastCss, PWAToast;
  var init_pwa_toast_entry = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-toast.entry.js"() {
      init_index_1c5c47b4();
      toastCss = ':host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}';
      PWAToast = (function() {
        function t3(t4) {
          registerInstance(this, t4);
          this.message = void 0;
          this.duration = 2e3;
          this.closing = null;
        }
        t3.prototype.hostData = function() {
          var t4 = { out: !!this.closing };
          if (this.closing !== null) {
            t4["in"] = !this.closing;
          }
          return { class: t4 };
        };
        t3.prototype.componentDidLoad = function() {
          var t4 = this;
          setTimeout((function() {
            t4.closing = false;
          }));
          setTimeout((function() {
            t4.close();
          }), this.duration);
        };
        t3.prototype.close = function() {
          var t4 = this;
          this.closing = true;
          setTimeout((function() {
            t4.el.parentNode.removeChild(t4.el);
          }), 1e3);
        };
        t3.prototype.__stencil_render = function() {
          return h3("div", { class: "wrapper" }, h3("div", { class: "toast" }, this.message));
        };
        Object.defineProperty(t3.prototype, "el", { get: function() {
          return getElement(this);
        }, enumerable: false, configurable: true });
        t3.prototype.render = function() {
          return h3(Host, this.hostData(), this.__stencil_render());
        };
        return t3;
      })();
      PWAToast.style = toastCss;
    }
  });

  // node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera-modal-instance.entry.js
  var pwa_camera_modal_instance_entry_exports = {};
  __export(pwa_camera_modal_instance_entry_exports, {
    pwa_camera_modal_instance: () => PWACameraModal2
  });
  var __awaiter2, __generator2, cameraModalInstanceCss, PWACameraModal2;
  var init_pwa_camera_modal_instance_entry = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera-modal-instance.entry.js"() {
      init_index_1c5c47b4();
      __awaiter2 = function(e6, t3, n5, o6) {
        function r6(e7) {
          return e7 instanceof n5 ? e7 : new n5((function(t4) {
            t4(e7);
          }));
        }
        return new (n5 || (n5 = Promise))((function(n6, i5) {
          function a3(e7) {
            try {
              s4(o6.next(e7));
            } catch (e8) {
              i5(e8);
            }
          }
          function c4(e7) {
            try {
              s4(o6["throw"](e7));
            } catch (e8) {
              i5(e8);
            }
          }
          function s4(e7) {
            e7.done ? n6(e7.value) : r6(e7.value).then(a3, c4);
          }
          s4((o6 = o6.apply(e6, t3 || [])).next());
        }));
      };
      __generator2 = function(e6, t3) {
        var n5 = { label: 0, sent: function() {
          if (i5[0] & 1) throw i5[1];
          return i5[1];
        }, trys: [], ops: [] }, o6, r6, i5, a3;
        return a3 = { next: c4(0), throw: c4(1), return: c4(2) }, typeof Symbol === "function" && (a3[Symbol.iterator] = function() {
          return this;
        }), a3;
        function c4(e7) {
          return function(t4) {
            return s4([e7, t4]);
          };
        }
        function s4(c5) {
          if (o6) throw new TypeError("Generator is already executing.");
          while (a3 && (a3 = 0, c5[0] && (n5 = 0)), n5) try {
            if (o6 = 1, r6 && (i5 = c5[0] & 2 ? r6["return"] : c5[0] ? r6["throw"] || ((i5 = r6["return"]) && i5.call(r6), 0) : r6.next) && !(i5 = i5.call(r6, c5[1])).done) return i5;
            if (r6 = 0, i5) c5 = [c5[0] & 2, i5.value];
            switch (c5[0]) {
              case 0:
              case 1:
                i5 = c5;
                break;
              case 4:
                n5.label++;
                return { value: c5[1], done: false };
              case 5:
                n5.label++;
                r6 = c5[1];
                c5 = [0];
                continue;
              case 7:
                c5 = n5.ops.pop();
                n5.trys.pop();
                continue;
              default:
                if (!(i5 = n5.trys, i5 = i5.length > 0 && i5[i5.length - 1]) && (c5[0] === 6 || c5[0] === 2)) {
                  n5 = 0;
                  continue;
                }
                if (c5[0] === 3 && (!i5 || c5[1] > i5[0] && c5[1] < i5[3])) {
                  n5.label = c5[1];
                  break;
                }
                if (c5[0] === 6 && n5.label < i5[1]) {
                  n5.label = i5[1];
                  i5 = c5;
                  break;
                }
                if (i5 && n5.label < i5[2]) {
                  n5.label = i5[2];
                  n5.ops.push(c5);
                  break;
                }
                if (i5[2]) n5.ops.pop();
                n5.trys.pop();
                continue;
            }
            c5 = t3.call(e6, n5);
          } catch (e7) {
            c5 = [6, e7];
            r6 = 0;
          } finally {
            o6 = i5 = 0;
          }
          if (c5[0] & 5) throw c5[1];
          return { value: c5[0] ? c5[1] : void 0, done: true };
        }
      };
      cameraModalInstanceCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}";
      PWACameraModal2 = (function() {
        function e6(e7) {
          var t3 = this;
          registerInstance(this, e7);
          this.onPhoto = createEvent(this, "onPhoto", 7);
          this.noDeviceError = createEvent(this, "noDeviceError", 7);
          this.handlePhoto = function(e8) {
            return __awaiter2(t3, void 0, void 0, (function() {
              return __generator2(this, (function(t4) {
                this.onPhoto.emit(e8);
                return [2];
              }));
            }));
          };
          this.handleNoDeviceError = function(e8) {
            return __awaiter2(t3, void 0, void 0, (function() {
              return __generator2(this, (function(t4) {
                this.noDeviceError.emit(e8);
                return [2];
              }));
            }));
          };
          this.facingMode = "user";
          this.hidePicker = false;
          this.noDevicesText = "No camera found";
          this.noDevicesButtonText = "Choose image";
        }
        e6.prototype.handleBackdropClick = function(e7) {
          if (e7.target !== this.el) {
            this.onPhoto.emit(null);
          }
        };
        e6.prototype.handleComponentClick = function(e7) {
          e7.stopPropagation();
        };
        e6.prototype.handleBackdropKeyUp = function(e7) {
          if (e7.key === "Escape") {
            this.onPhoto.emit(null);
          }
        };
        e6.prototype.render = function() {
          var e7 = this;
          return h3("div", { class: "wrapper", onClick: function(t3) {
            return e7.handleBackdropClick(t3);
          } }, h3("div", { class: "content" }, h3("pwa-camera", { onClick: function(t3) {
            return e7.handleComponentClick(t3);
          }, facingMode: this.facingMode, hidePicker: this.hidePicker, handlePhoto: this.handlePhoto, handleNoDeviceError: this.handleNoDeviceError, noDevicesButtonText: this.noDevicesButtonText, noDevicesText: this.noDevicesText })));
        };
        Object.defineProperty(e6.prototype, "el", { get: function() {
          return getElement(this);
        }, enumerable: false, configurable: true });
        return e6;
      })();
      PWACameraModal2.style = cameraModalInstanceCss;
    }
  });

  // node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera.entry.js
  var pwa_camera_entry_exports = {};
  __export(pwa_camera_entry_exports, {
    pwa_camera: () => CameraPWA
  });
  var __awaiter3, __generator3, ImageCapture, cameraCss, CameraPWA;
  var init_pwa_camera_entry = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera.entry.js"() {
      init_index_1c5c47b4();
      __awaiter3 = function(e6, t3, i5, n5) {
        function r6(e7) {
          return e7 instanceof i5 ? e7 : new i5((function(t4) {
            t4(e7);
          }));
        }
        return new (i5 || (i5 = Promise))((function(i6, a3) {
          function o6(e7) {
            try {
              c4(n5.next(e7));
            } catch (e8) {
              a3(e8);
            }
          }
          function s4(e7) {
            try {
              c4(n5["throw"](e7));
            } catch (e8) {
              a3(e8);
            }
          }
          function c4(e7) {
            e7.done ? i6(e7.value) : r6(e7.value).then(o6, s4);
          }
          c4((n5 = n5.apply(e6, t3 || [])).next());
        }));
      };
      __generator3 = function(e6, t3) {
        var i5 = { label: 0, sent: function() {
          if (a3[0] & 1) throw a3[1];
          return a3[1];
        }, trys: [], ops: [] }, n5, r6, a3, o6;
        return o6 = { next: s4(0), throw: s4(1), return: s4(2) }, typeof Symbol === "function" && (o6[Symbol.iterator] = function() {
          return this;
        }), o6;
        function s4(e7) {
          return function(t4) {
            return c4([e7, t4]);
          };
        }
        function c4(s5) {
          if (n5) throw new TypeError("Generator is already executing.");
          while (o6 && (o6 = 0, s5[0] && (i5 = 0)), i5) try {
            if (n5 = 1, r6 && (a3 = s5[0] & 2 ? r6["return"] : s5[0] ? r6["throw"] || ((a3 = r6["return"]) && a3.call(r6), 0) : r6.next) && !(a3 = a3.call(r6, s5[1])).done) return a3;
            if (r6 = 0, a3) s5 = [s5[0] & 2, a3.value];
            switch (s5[0]) {
              case 0:
              case 1:
                a3 = s5;
                break;
              case 4:
                i5.label++;
                return { value: s5[1], done: false };
              case 5:
                i5.label++;
                r6 = s5[1];
                s5 = [0];
                continue;
              case 7:
                s5 = i5.ops.pop();
                i5.trys.pop();
                continue;
              default:
                if (!(a3 = i5.trys, a3 = a3.length > 0 && a3[a3.length - 1]) && (s5[0] === 6 || s5[0] === 2)) {
                  i5 = 0;
                  continue;
                }
                if (s5[0] === 3 && (!a3 || s5[1] > a3[0] && s5[1] < a3[3])) {
                  i5.label = s5[1];
                  break;
                }
                if (s5[0] === 6 && i5.label < a3[1]) {
                  i5.label = a3[1];
                  a3 = s5;
                  break;
                }
                if (a3 && i5.label < a3[2]) {
                  i5.label = a3[2];
                  i5.ops.push(s5);
                  break;
                }
                if (a3[2]) i5.ops.pop();
                i5.trys.pop();
                continue;
            }
            s5 = t3.call(e6, i5);
          } catch (e7) {
            s5 = [6, e7];
            r6 = 0;
          } finally {
            n5 = a3 = 0;
          }
          if (s5[0] & 5) throw s5[1];
          return { value: s5[0] ? s5[1] : void 0, done: true };
        }
      };
      ImageCapture = window.ImageCapture;
      if (typeof ImageCapture === "undefined") {
        ImageCapture = (function() {
          function e6(e7) {
            var t3 = this;
            if (e7.kind !== "video") throw new DOMException("NotSupportedError");
            this._videoStreamTrack = e7;
            if (!("readyState" in this._videoStreamTrack)) {
              this._videoStreamTrack.readyState = "live";
            }
            this._previewStream = new MediaStream([e7]);
            this.videoElement = document.createElement("video");
            this.videoElementPlaying = new Promise((function(e8) {
              t3.videoElement.addEventListener("playing", e8);
            }));
            if (HTMLMediaElement) {
              this.videoElement.srcObject = this._previewStream;
            } else {
              this.videoElement.src = URL.createObjectURL(this._previewStream);
            }
            this.videoElement.muted = true;
            this.videoElement.setAttribute("playsinline", "");
            this.videoElement.play();
            this.canvasElement = document.createElement("canvas");
            this.canvas2dContext = this.canvasElement.getContext("2d");
          }
          Object.defineProperty(e6.prototype, "videoStreamTrack", { get: function() {
            return this._videoStreamTrack;
          }, enumerable: false, configurable: true });
          e6.prototype.getPhotoCapabilities = function() {
            return new Promise((function e7(t3, i5) {
              var n5 = { current: 0, min: 0, max: 0 };
              t3({ exposureCompensation: n5, exposureMode: "none", fillLightMode: ["none"], focusMode: "none", imageHeight: n5, imageWidth: n5, iso: n5, redEyeReduction: false, whiteBalanceMode: "none", zoom: n5 });
              i5(new DOMException("OperationError"));
            }));
          };
          e6.prototype.setOptions = function(e7) {
            if (e7 === void 0) {
              e7 = {};
            }
            return new Promise((function e8(t3, i5) {
            }));
          };
          e6.prototype.takePhoto = function() {
            var e7 = this;
            return new Promise((function t3(i5, n5) {
              if (e7._videoStreamTrack.readyState !== "live") {
                return n5(new DOMException("InvalidStateError"));
              }
              e7.videoElementPlaying.then((function() {
                try {
                  e7.canvasElement.width = e7.videoElement.videoWidth;
                  e7.canvasElement.height = e7.videoElement.videoHeight;
                  e7.canvas2dContext.drawImage(e7.videoElement, 0, 0);
                  e7.canvasElement.toBlob(i5);
                } catch (e8) {
                  n5(new DOMException("UnknownError"));
                }
              }));
            }));
          };
          e6.prototype.grabFrame = function() {
            var e7 = this;
            return new Promise((function t3(i5, n5) {
              if (e7._videoStreamTrack.readyState !== "live") {
                return n5(new DOMException("InvalidStateError"));
              }
              e7.videoElementPlaying.then((function() {
                try {
                  e7.canvasElement.width = e7.videoElement.videoWidth;
                  e7.canvasElement.height = e7.videoElement.videoHeight;
                  e7.canvas2dContext.drawImage(e7.videoElement, 0, 0);
                  i5(window.createImageBitmap(e7.canvasElement));
                } catch (e8) {
                  n5(new DOMException("UnknownError"));
                }
              }));
            }));
          };
          return e6;
        })();
      }
      window.ImageCapture = ImageCapture;
      cameraCss = ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system, BlinkMacSystemFont,\n    \u201CSegoe UI\u201D, \u201CRoboto\u201D, \u201CDroid Sans\u201D, \u201CHelvetica Neue\u201D, sans-serif;display:block;width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:white;background-color:black;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:white;background-color:black;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height: 375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden;background-color:black}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;background-color:black}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:white;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:white;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.rotate img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:black}.error{width:100%;height:100%;color:white;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.no-device{background-color:black;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:white}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:black}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:black;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:center center;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer;width:var(--icon-size-header);height:var(--icon-size-header)}.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.accept-cancel img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
      CameraPWA = (function() {
        function e6(e7) {
          var t3 = this;
          registerInstance(this, e7);
          this.hasMultipleCameras = false;
          this.hasFlash = false;
          this.flashModes = [];
          this.flashMode = "off";
          this.handlePickFile = function(e8) {
          };
          this.handleShutterClick = function(e8) {
            console.debug("shutter click");
            t3.capture();
          };
          this.handleRotateClick = function(e8) {
            t3.rotate();
          };
          this.handleClose = function(e8) {
            t3.handlePhoto && t3.handlePhoto(null);
          };
          this.handleFlashClick = function(e8) {
            t3.cycleFlash();
          };
          this.handleCancelPhoto = function(e8) {
            var i5 = t3.stream && t3.stream.getTracks()[0];
            var n5 = i5 && i5.getConstraints();
            t3.photo = null;
            t3.photoSrc = null;
            if (n5) {
              t3.initCamera({ video: { facingMode: n5.facingMode } });
            } else {
              t3.initCamera();
            }
          };
          this.handleAcceptPhoto = function(e8) {
            t3.handlePhoto && t3.handlePhoto(t3.photo);
          };
          this.handleFileInputChange = function(e8) {
            return __awaiter3(t3, void 0, void 0, (function() {
              var t4, i5, n5, r6;
              return __generator3(this, (function(a3) {
                switch (a3.label) {
                  case 0:
                    t4 = e8.target;
                    i5 = t4.files[0];
                    a3.label = 1;
                  case 1:
                    a3.trys.push([1, 3, , 4]);
                    return [4, this.getOrientation(i5)];
                  case 2:
                    n5 = a3.sent();
                    console.debug("Got orientation", n5);
                    this.photoOrientation = n5;
                    return [3, 4];
                  case 3:
                    r6 = a3.sent();
                    return [3, 4];
                  case 4:
                    this.handlePhoto && this.handlePhoto(i5);
                    return [2];
                }
              }));
            }));
          };
          this.handleVideoMetadata = function(e8) {
            console.debug("Video metadata", e8);
          };
          this.facingMode = "user";
          this.handlePhoto = void 0;
          this.hidePicker = false;
          this.handleNoDeviceError = void 0;
          this.noDevicesText = "No camera found";
          this.noDevicesButtonText = "Choose image";
          this.photo = void 0;
          this.photoSrc = void 0;
          this.showShutterOverlay = false;
          this.flashIndex = 0;
          this.hasCamera = null;
          this.rotation = 0;
          this.deviceError = null;
        }
        e6.prototype.componentDidLoad = function() {
          return __awaiter3(this, void 0, void 0, (function() {
            return __generator3(this, (function(e7) {
              switch (e7.label) {
                case 0:
                  this.defaultConstraints = { video: { facingMode: this.facingMode } };
                  return [4, this.queryDevices()];
                case 1:
                  e7.sent();
                  return [4, this.initCamera()];
                case 2:
                  e7.sent();
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.disconnectedCallback = function() {
          this.stopStream();
          this.photoSrc && URL.revokeObjectURL(this.photoSrc);
        };
        e6.prototype.hasImageCapture = function() {
          return "ImageCapture" in window;
        };
        e6.prototype.queryDevices = function() {
          return __awaiter3(this, void 0, void 0, (function() {
            var e7, t3, i5;
            return __generator3(this, (function(n5) {
              switch (n5.label) {
                case 0:
                  n5.trys.push([0, 2, , 3]);
                  return [4, navigator.mediaDevices.enumerateDevices()];
                case 1:
                  e7 = n5.sent();
                  t3 = e7.filter((function(e8) {
                    return e8.kind == "videoinput";
                  }));
                  this.hasCamera = !!t3.length;
                  this.hasMultipleCameras = t3.length > 1;
                  return [3, 3];
                case 2:
                  i5 = n5.sent();
                  this.deviceError = i5;
                  return [3, 3];
                case 3:
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.initCamera = function(e7) {
          return __awaiter3(this, void 0, void 0, (function() {
            var t3, i5;
            return __generator3(this, (function(n5) {
              switch (n5.label) {
                case 0:
                  if (!e7) {
                    e7 = this.defaultConstraints;
                  }
                  n5.label = 1;
                case 1:
                  n5.trys.push([1, 3, , 4]);
                  return [4, navigator.mediaDevices.getUserMedia(Object.assign({ video: true, audio: false }, e7))];
                case 2:
                  t3 = n5.sent();
                  this.initStream(t3);
                  return [3, 4];
                case 3:
                  i5 = n5.sent();
                  this.deviceError = i5;
                  this.handleNoDeviceError && this.handleNoDeviceError(i5);
                  return [3, 4];
                case 4:
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.initStream = function(e7) {
          return __awaiter3(this, void 0, void 0, (function() {
            return __generator3(this, (function(t3) {
              switch (t3.label) {
                case 0:
                  this.stream = e7;
                  this.videoElement.srcObject = e7;
                  if (!this.hasImageCapture()) return [3, 2];
                  this.imageCapture = new window.ImageCapture(e7.getVideoTracks()[0]);
                  return [4, this.initPhotoCapabilities(this.imageCapture)];
                case 1:
                  t3.sent();
                  return [3, 3];
                case 2:
                  this.deviceError = "No image capture";
                  this.handleNoDeviceError && this.handleNoDeviceError();
                  t3.label = 3;
                case 3:
                  forceUpdate(this.el);
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.initPhotoCapabilities = function(e7) {
          return __awaiter3(this, void 0, void 0, (function() {
            var t3;
            return __generator3(this, (function(i5) {
              switch (i5.label) {
                case 0:
                  return [4, e7.getPhotoCapabilities()];
                case 1:
                  t3 = i5.sent();
                  if (t3.fillLightMode && t3.fillLightMode.length > 1) {
                    this.flashModes = t3.fillLightMode.map((function(e8) {
                      return e8;
                    }));
                    if (this.flashMode) {
                      this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || "off";
                      this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
                    } else {
                      this.flashIndex = 0;
                    }
                  }
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.stopStream = function() {
          if (this.videoElement) {
            this.videoElement.srcObject = null;
          }
          this.stream && this.stream.getTracks().forEach((function(e7) {
            return e7.stop();
          }));
        };
        e6.prototype.capture = function() {
          return __awaiter3(this, void 0, void 0, (function() {
            var e7, t3;
            return __generator3(this, (function(i5) {
              switch (i5.label) {
                case 0:
                  if (!this.hasImageCapture()) return [3, 5];
                  i5.label = 1;
                case 1:
                  i5.trys.push([1, 4, , 5]);
                  return [4, this.imageCapture.takePhoto({ fillLightMode: this.flashModes.length > 1 ? this.flashMode : void 0 })];
                case 2:
                  e7 = i5.sent();
                  return [4, this.flashScreen()];
                case 3:
                  i5.sent();
                  this.promptAccept(e7);
                  return [3, 5];
                case 4:
                  t3 = i5.sent();
                  console.error("Unable to take photo!", t3);
                  return [3, 5];
                case 5:
                  this.stopStream();
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.promptAccept = function(e7) {
          return __awaiter3(this, void 0, void 0, (function() {
            var t3;
            return __generator3(this, (function(i5) {
              switch (i5.label) {
                case 0:
                  this.photo = e7;
                  return [4, this.getOrientation(e7)];
                case 1:
                  t3 = i5.sent();
                  console.debug("Got orientation", t3);
                  this.photoOrientation = t3;
                  if (t3) {
                    switch (t3) {
                      case 1:
                      case 2:
                        this.rotation = 0;
                        break;
                      case 3:
                      case 4:
                        this.rotation = 180;
                        break;
                      case 5:
                      case 6:
                        this.rotation = 90;
                        break;
                      case 7:
                      case 8:
                        this.rotation = 270;
                        break;
                    }
                  }
                  this.photoSrc = URL.createObjectURL(e7);
                  return [2];
              }
            }));
          }));
        };
        e6.prototype.getOrientation = function(e7) {
          return new Promise((function(t3) {
            var i5 = new FileReader();
            i5.onload = function(e8) {
              var i6 = new DataView(e8.target.result);
              if (i6.getUint16(0, false) !== 65496) {
                return t3(-2);
              }
              var n5 = i6.byteLength;
              var r6 = 2;
              while (r6 < n5) {
                var a3 = i6.getUint16(r6, false);
                r6 += 2;
                if (a3 === 65505) {
                  if (i6.getUint32(r6 += 2, false) !== 1165519206) {
                    return t3(-1);
                  }
                  var o6 = i6.getUint16(r6 += 6, false) === 18761;
                  r6 += i6.getUint32(r6 + 4, o6);
                  var s4 = i6.getUint16(r6, o6);
                  r6 += 2;
                  for (var c4 = 0; c4 < s4; c4++) {
                    if (i6.getUint16(r6 + c4 * 12, o6) === 274) {
                      return t3(i6.getUint16(r6 + c4 * 12 + 8, o6));
                    }
                  }
                } else if ((a3 & 65280) !== 65280) {
                  break;
                } else {
                  r6 += i6.getUint16(r6, false);
                }
              }
              return t3(-1);
            };
            i5.readAsArrayBuffer(e7.slice(0, 64 * 1024));
          }));
        };
        e6.prototype.rotate = function() {
          this.stopStream();
          var e7 = this.stream && this.stream.getTracks()[0];
          if (!e7) {
            return;
          }
          var t3 = e7.getConstraints();
          var i5 = t3.facingMode;
          if (!i5) {
            var n5 = e7.getCapabilities();
            if (n5.facingMode) {
              i5 = n5.facingMode[0];
            }
          }
          if (i5 === "environment") {
            this.initCamera({ video: { facingMode: "user" } });
          } else {
            this.initCamera({ video: { facingMode: "environment" } });
          }
        };
        e6.prototype.setFlashMode = function(e7) {
          console.debug("New flash mode: ", e7);
          this.flashMode = e7;
        };
        e6.prototype.cycleFlash = function() {
          if (this.flashModes.length > 0) {
            this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
            this.setFlashMode(this.flashModes[this.flashIndex]);
          }
        };
        e6.prototype.flashScreen = function() {
          return __awaiter3(this, void 0, void 0, (function() {
            var e7 = this;
            return __generator3(this, (function(t3) {
              return [2, new Promise((function(t4, i5) {
                e7.showShutterOverlay = true;
                setTimeout((function() {
                  e7.showShutterOverlay = false;
                  t4();
                }), 100);
              }))];
            }));
          }));
        };
        e6.prototype.iconExit = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.iconPhotos = function() {
          return h3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "512", height: "512", viewBox: "0 0 512 512" }, h3("path", { d: "M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z" }), h3("path", { d: "M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z" }));
        };
        e6.prototype.iconConfirm = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.iconReverseCamera = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.iconRetake = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.iconFlashOff = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.iconFlashOn = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
        };
        e6.prototype.iconFlashAuto = function() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
        };
        e6.prototype.render = function() {
          var e7 = this;
          var t3 = {};
          return h3("div", { class: "camera-wrapper" }, h3("div", { class: "camera-header" }, h3("section", { class: "items" }, h3("div", { class: "item close", onClick: function(t4) {
            return e7.handleClose(t4);
          } }, h3("img", { src: this.iconExit() })), h3("div", { class: "item flash", onClick: function(t4) {
            return e7.handleFlashClick(t4);
          } }, this.flashModes.length > 0 && h3("div", null, this.flashMode == "off" ? h3("img", { src: this.iconFlashOff() }) : "", this.flashMode == "auto" ? h3("img", { src: this.iconFlashAuto() }) : "", this.flashMode == "flash" ? h3("img", { src: this.iconFlashOn() }) : "")))), (this.hasCamera === false || !!this.deviceError) && h3("div", { class: "no-device" }, h3("h2", null, this.noDevicesText), h3("label", { htmlFor: "_pwa-elements-camera-input" }, this.noDevicesButtonText), h3("input", { type: "file", id: "_pwa-elements-camera-input", onChange: this.handleFileInputChange, accept: "image/*", class: "select-file-button" })), this.photoSrc ? h3("div", { class: "accept" }, h3("div", { class: "accept-image", style: Object.assign({ backgroundImage: "url(".concat(this.photoSrc, ")") }, t3) })) : h3("div", { class: "camera-video" }, this.showShutterOverlay && h3("div", { class: "shutter-overlay" }), this.hasImageCapture() ? h3("video", { ref: function(t4) {
            return e7.videoElement = t4;
          }, onLoadedMetaData: this.handleVideoMetadata, autoplay: true, playsinline: true }) : h3("canvas", { ref: function(t4) {
            return e7.canvasElement = t4;
          }, width: "100%", height: "100%" }), h3("canvas", { class: "offscreen-image-render", ref: function(t4) {
            return e7.offscreenCanvas = t4;
          }, width: "100%", height: "100%" })), this.hasCamera && h3("div", { class: "camera-footer" }, !this.photo ? [!this.hidePicker && h3("div", { class: "pick-image", onClick: this.handlePickFile }, h3("label", { htmlFor: "_pwa-elements-file-pick" }, this.iconPhotos()), h3("input", { type: "file", id: "_pwa-elements-file-pick", onChange: this.handleFileInputChange, accept: "image/*", class: "pick-image-button" })), h3("div", { class: "shutter", onClick: this.handleShutterClick }, h3("div", { class: "shutter-button" })), h3("div", { class: "rotate", onClick: this.handleRotateClick }, h3("img", { src: this.iconReverseCamera() }))] : h3("section", { class: "items" }, h3("div", { class: "item accept-cancel", onClick: function(t4) {
            return e7.handleCancelPhoto(t4);
          } }, h3("img", { src: this.iconRetake() })), h3("div", { class: "item accept-use", onClick: function(t4) {
            return e7.handleAcceptPhoto(t4);
          } }, h3("img", { src: this.iconConfirm() })))));
        };
        Object.defineProperty(e6, "assetsDirs", { get: function() {
          return ["icons"];
        }, enumerable: false, configurable: true });
        Object.defineProperty(e6.prototype, "el", { get: function() {
          return getElement(this);
        }, enumerable: false, configurable: true });
        return e6;
      })();
      CameraPWA.style = cameraCss;
    }
  });

  // node_modules/@ionic/pwa-elements/dist/esm-es5/index-1c5c47b4.js
  function queryNonceMetaTagContent(e6) {
    var t3, n5, r6;
    return (r6 = (n5 = (t3 = e6.head) === null || t3 === void 0 ? void 0 : t3.querySelector('meta[name="csp-nonce"]')) === null || n5 === void 0 ? void 0 : n5.getAttribute("content")) !== null && r6 !== void 0 ? r6 : void 0;
  }
  var __extends, __awaiter4, __generator4, __spreadArray, NAMESPACE, scopeId, hostTagName, isSvgMode, queuePending, createTime, uniqueTime, HYDRATED_CSS, EMPTY_OBJ, SVG_NS, HTML_NS, isDef, isComplexType, h3, newVNode, Host, isHost, parsePropertyValue, getElement, createEvent, emitEvent, rootAppliedStyles, registerStyle, addStyle, attachStyles, getScopeId, setAccessor, parseClassListRegex, parseClassList, updateElement, createElm, addVnodes, removeVnodes, updateChildren, isSameVnode, patch, nullifyVNodeRefs, renderVdom, attachToAncestor, scheduleUpdate, dispatchHooks, enqueue, isPromisey, updateComponent, callRender, postUpdateComponent, forceUpdate, appDidLoad, safeCall, addHydratedFlag, getValue, setValue, proxyComponent, initializeComponent, connectedCallback, disconnectedCallback, bootstrapLazy, addHostEventListeners, hostListenerProxy, getHostListenerTarget, hostListenerOpts, hostRefs, getHostRef, registerInstance, registerHost, isMemberInElement, consoleError, cmpModules, loadModule, styles, win, doc, plt, promiseResolve, supportsConstructableStylesheets, queueDomReads, queueDomWrites, queueTask, consume, flush, nextTick, writeTask;
  var init_index_1c5c47b4 = __esm({
    "node_modules/@ionic/pwa-elements/dist/esm-es5/index-1c5c47b4.js"() {
      __extends = /* @__PURE__ */ (function() {
        var e6 = function(t3, n5) {
          e6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e7, t4) {
            e7.__proto__ = t4;
          } || function(e7, t4) {
            for (var n6 in t4) if (Object.prototype.hasOwnProperty.call(t4, n6)) e7[n6] = t4[n6];
          };
          return e6(t3, n5);
        };
        return function(t3, n5) {
          if (typeof n5 !== "function" && n5 !== null) throw new TypeError("Class extends value " + String(n5) + " is not a constructor or null");
          e6(t3, n5);
          function r6() {
            this.constructor = t3;
          }
          t3.prototype = n5 === null ? Object.create(n5) : (r6.prototype = n5.prototype, new r6());
        };
      })();
      __awaiter4 = function(e6, t3, n5, r6) {
        function a3(e7) {
          return e7 instanceof n5 ? e7 : new n5((function(t4) {
            t4(e7);
          }));
        }
        return new (n5 || (n5 = Promise))((function(n6, o6) {
          function s4(e7) {
            try {
              l3(r6.next(e7));
            } catch (e8) {
              o6(e8);
            }
          }
          function i5(e7) {
            try {
              l3(r6["throw"](e7));
            } catch (e8) {
              o6(e8);
            }
          }
          function l3(e7) {
            e7.done ? n6(e7.value) : a3(e7.value).then(s4, i5);
          }
          l3((r6 = r6.apply(e6, t3 || [])).next());
        }));
      };
      __generator4 = function(e6, t3) {
        var n5 = { label: 0, sent: function() {
          if (o6[0] & 1) throw o6[1];
          return o6[1];
        }, trys: [], ops: [] }, r6, a3, o6, s4;
        return s4 = { next: i5(0), throw: i5(1), return: i5(2) }, typeof Symbol === "function" && (s4[Symbol.iterator] = function() {
          return this;
        }), s4;
        function i5(e7) {
          return function(t4) {
            return l3([e7, t4]);
          };
        }
        function l3(i6) {
          if (r6) throw new TypeError("Generator is already executing.");
          while (s4 && (s4 = 0, i6[0] && (n5 = 0)), n5) try {
            if (r6 = 1, a3 && (o6 = i6[0] & 2 ? a3["return"] : i6[0] ? a3["throw"] || ((o6 = a3["return"]) && o6.call(a3), 0) : a3.next) && !(o6 = o6.call(a3, i6[1])).done) return o6;
            if (a3 = 0, o6) i6 = [i6[0] & 2, o6.value];
            switch (i6[0]) {
              case 0:
              case 1:
                o6 = i6;
                break;
              case 4:
                n5.label++;
                return { value: i6[1], done: false };
              case 5:
                n5.label++;
                a3 = i6[1];
                i6 = [0];
                continue;
              case 7:
                i6 = n5.ops.pop();
                n5.trys.pop();
                continue;
              default:
                if (!(o6 = n5.trys, o6 = o6.length > 0 && o6[o6.length - 1]) && (i6[0] === 6 || i6[0] === 2)) {
                  n5 = 0;
                  continue;
                }
                if (i6[0] === 3 && (!o6 || i6[1] > o6[0] && i6[1] < o6[3])) {
                  n5.label = i6[1];
                  break;
                }
                if (i6[0] === 6 && n5.label < o6[1]) {
                  n5.label = o6[1];
                  o6 = i6;
                  break;
                }
                if (o6 && n5.label < o6[2]) {
                  n5.label = o6[2];
                  n5.ops.push(i6);
                  break;
                }
                if (o6[2]) n5.ops.pop();
                n5.trys.pop();
                continue;
            }
            i6 = t3.call(e6, n5);
          } catch (e7) {
            i6 = [6, e7];
            a3 = 0;
          } finally {
            r6 = o6 = 0;
          }
          if (i6[0] & 5) throw i6[1];
          return { value: i6[0] ? i6[1] : void 0, done: true };
        }
      };
      __spreadArray = function(e6, t3, n5) {
        if (n5 || arguments.length === 2) for (var r6 = 0, a3 = t3.length, o6; r6 < a3; r6++) {
          if (o6 || !(r6 in t3)) {
            if (!o6) o6 = Array.prototype.slice.call(t3, 0, r6);
            o6[r6] = t3[r6];
          }
        }
        return e6.concat(o6 || Array.prototype.slice.call(t3));
      };
      NAMESPACE = "ionicpwaelements";
      isSvgMode = false;
      queuePending = false;
      createTime = function(e6, t3) {
        if (t3 === void 0) {
          t3 = "";
        }
        {
          return function() {
            return;
          };
        }
      };
      uniqueTime = function(e6, t3) {
        {
          return function() {
            return;
          };
        }
      };
      HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
      EMPTY_OBJ = {};
      SVG_NS = "http://www.w3.org/2000/svg";
      HTML_NS = "http://www.w3.org/1999/xhtml";
      isDef = function(e6) {
        return e6 != null;
      };
      isComplexType = function(e6) {
        e6 = typeof e6;
        return e6 === "object" || e6 === "function";
      };
      h3 = function(e6, t3) {
        var n5 = [];
        for (var r6 = 2; r6 < arguments.length; r6++) {
          n5[r6 - 2] = arguments[r6];
        }
        var a3 = null;
        var o6 = false;
        var s4 = false;
        var i5 = [];
        var l3 = function(t4) {
          for (var n6 = 0; n6 < t4.length; n6++) {
            a3 = t4[n6];
            if (Array.isArray(a3)) {
              l3(a3);
            } else if (a3 != null && typeof a3 !== "boolean") {
              if (o6 = typeof e6 !== "function" && !isComplexType(a3)) {
                a3 = String(a3);
              }
              if (o6 && s4) {
                i5[i5.length - 1].$text$ += a3;
              } else {
                i5.push(o6 ? newVNode(null, a3) : a3);
              }
              s4 = o6;
            }
          }
        };
        l3(n5);
        if (t3) {
          {
            var u3 = t3.className || t3.class;
            if (u3) {
              t3.class = typeof u3 !== "object" ? u3 : Object.keys(u3).filter((function(e7) {
                return u3[e7];
              })).join(" ");
            }
          }
        }
        var c4 = newVNode(e6, null);
        c4.$attrs$ = t3;
        if (i5.length > 0) {
          c4.$children$ = i5;
        }
        return c4;
      };
      newVNode = function(e6, t3) {
        var n5 = { $flags$: 0, $tag$: e6, $text$: t3, $elm$: null, $children$: null };
        {
          n5.$attrs$ = null;
        }
        return n5;
      };
      Host = {};
      isHost = function(e6) {
        return e6 && e6.$tag$ === Host;
      };
      parsePropertyValue = function(e6, t3) {
        if (e6 != null && !isComplexType(e6)) {
          if (t3 & 4) {
            return e6 === "false" ? false : e6 === "" || !!e6;
          }
          if (t3 & 2) {
            return parseFloat(e6);
          }
          if (t3 & 1) {
            return String(e6);
          }
          return e6;
        }
        return e6;
      };
      getElement = function(e6) {
        return getHostRef(e6).$hostElement$;
      };
      createEvent = function(e6, t3, n5) {
        var r6 = getElement(e6);
        return { emit: function(e7) {
          return emitEvent(r6, t3, { bubbles: !!(n5 & 4), composed: !!(n5 & 2), cancelable: !!(n5 & 1), detail: e7 });
        } };
      };
      emitEvent = function(e6, t3, n5) {
        var r6 = plt.ce(t3, n5);
        e6.dispatchEvent(r6);
        return r6;
      };
      rootAppliedStyles = /* @__PURE__ */ new WeakMap();
      registerStyle = function(e6, t3, n5) {
        var r6 = styles.get(e6);
        if (supportsConstructableStylesheets && n5) {
          r6 = r6 || new CSSStyleSheet();
          if (typeof r6 === "string") {
            r6 = t3;
          } else {
            r6.replaceSync(t3);
          }
        } else {
          r6 = t3;
        }
        styles.set(e6, r6);
      };
      addStyle = function(e6, t3, n5, r6) {
        var a3;
        var o6 = getScopeId(t3);
        var s4 = styles.get(o6);
        e6 = e6.nodeType === 11 ? e6 : doc;
        if (s4) {
          if (typeof s4 === "string") {
            e6 = e6.head || e6;
            var i5 = rootAppliedStyles.get(e6);
            var l3 = void 0;
            if (!i5) {
              rootAppliedStyles.set(e6, i5 = /* @__PURE__ */ new Set());
            }
            if (!i5.has(o6)) {
              {
                {
                  l3 = doc.createElement("style");
                  l3.innerHTML = s4;
                }
                var u3 = (a3 = plt.$nonce$) !== null && a3 !== void 0 ? a3 : queryNonceMetaTagContent(doc);
                if (u3 != null) {
                  l3.setAttribute("nonce", u3);
                }
                e6.insertBefore(l3, e6.querySelector("link"));
              }
              if (i5) {
                i5.add(o6);
              }
            }
          } else if (!e6.adoptedStyleSheets.includes(s4)) {
            e6.adoptedStyleSheets = __spreadArray(__spreadArray([], e6.adoptedStyleSheets, true), [s4], false);
          }
        }
        return o6;
      };
      attachStyles = function(e6) {
        var t3 = e6.$cmpMeta$;
        var n5 = e6.$hostElement$;
        var r6 = t3.$flags$;
        var a3 = createTime("attachStyles", t3.$tagName$);
        var o6 = addStyle(n5.shadowRoot ? n5.shadowRoot : n5.getRootNode(), t3);
        if (r6 & 10) {
          n5["s-sc"] = o6;
          n5.classList.add(o6 + "-h");
        }
        a3();
      };
      getScopeId = function(e6, t3) {
        return "sc-" + e6.$tagName$;
      };
      setAccessor = function(e6, t3, n5, r6, a3, o6) {
        if (n5 !== r6) {
          var s4 = isMemberInElement(e6, t3);
          var i5 = t3.toLowerCase();
          if (t3 === "class") {
            var l3 = e6.classList;
            var u3 = parseClassList(n5);
            var c4 = parseClassList(r6);
            l3.remove.apply(l3, u3.filter((function(e7) {
              return e7 && !c4.includes(e7);
            })));
            l3.add.apply(l3, c4.filter((function(e7) {
              return e7 && !u3.includes(e7);
            })));
          } else if (t3 === "style") {
            {
              for (var f3 in n5) {
                if (!r6 || r6[f3] == null) {
                  if (f3.includes("-")) {
                    e6.style.removeProperty(f3);
                  } else {
                    e6.style[f3] = "";
                  }
                }
              }
            }
            for (var f3 in r6) {
              if (!n5 || r6[f3] !== n5[f3]) {
                if (f3.includes("-")) {
                  e6.style.setProperty(f3, r6[f3]);
                } else {
                  e6.style[f3] = r6[f3];
                }
              }
            }
          } else if (t3 === "ref") {
            if (r6) {
              r6(e6);
            }
          } else if (!s4 && t3[0] === "o" && t3[1] === "n") {
            if (t3[2] === "-") {
              t3 = t3.slice(3);
            } else if (isMemberInElement(win, i5)) {
              t3 = i5.slice(2);
            } else {
              t3 = i5[2] + t3.slice(3);
            }
            if (n5) {
              plt.rel(e6, t3, n5, false);
            }
            if (r6) {
              plt.ael(e6, t3, r6, false);
            }
          } else {
            var $2 = isComplexType(r6);
            if ((s4 || $2 && r6 !== null) && !a3) {
              try {
                if (!e6.tagName.includes("-")) {
                  var d3 = r6 == null ? "" : r6;
                  if (t3 === "list") {
                    s4 = false;
                  } else if (n5 == null || e6[t3] != d3) {
                    e6[t3] = d3;
                  }
                } else {
                  e6[t3] = r6;
                }
              } catch (e7) {
              }
            }
            if (r6 == null || r6 === false) {
              if (r6 !== false || e6.getAttribute(t3) === "") {
                {
                  e6.removeAttribute(t3);
                }
              }
            } else if ((!s4 || o6 & 4 || a3) && !$2) {
              r6 = r6 === true ? "" : r6;
              {
                e6.setAttribute(t3, r6);
              }
            }
          }
        }
      };
      parseClassListRegex = /\s/;
      parseClassList = function(e6) {
        return !e6 ? [] : e6.split(parseClassListRegex);
      };
      updateElement = function(e6, t3, n5, r6) {
        var a3 = t3.$elm$.nodeType === 11 && t3.$elm$.host ? t3.$elm$.host : t3.$elm$;
        var o6 = e6 && e6.$attrs$ || EMPTY_OBJ;
        var s4 = t3.$attrs$ || EMPTY_OBJ;
        {
          for (r6 in o6) {
            if (!(r6 in s4)) {
              setAccessor(a3, r6, o6[r6], void 0, n5, t3.$flags$);
            }
          }
        }
        for (r6 in s4) {
          setAccessor(a3, r6, o6[r6], s4[r6], n5, t3.$flags$);
        }
      };
      createElm = function(e6, t3, n5, r6) {
        var a3 = t3.$children$[n5];
        var o6 = 0;
        var s4;
        var i5;
        if (a3.$text$ !== null) {
          s4 = a3.$elm$ = doc.createTextNode(a3.$text$);
        } else {
          if (!isSvgMode) {
            isSvgMode = a3.$tag$ === "svg";
          }
          s4 = a3.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, a3.$tag$);
          if (isSvgMode && a3.$tag$ === "foreignObject") {
            isSvgMode = false;
          }
          {
            updateElement(null, a3, isSvgMode);
          }
          if (isDef(scopeId) && s4["s-si"] !== scopeId) {
            s4.classList.add(s4["s-si"] = scopeId);
          }
          if (a3.$children$) {
            for (o6 = 0; o6 < a3.$children$.length; ++o6) {
              i5 = createElm(e6, a3, o6);
              if (i5) {
                s4.appendChild(i5);
              }
            }
          }
          {
            if (a3.$tag$ === "svg") {
              isSvgMode = false;
            } else if (s4.tagName === "foreignObject") {
              isSvgMode = true;
            }
          }
        }
        return s4;
      };
      addVnodes = function(e6, t3, n5, r6, a3, o6) {
        var s4 = e6;
        var i5;
        if (s4.shadowRoot && s4.tagName === hostTagName) {
          s4 = s4.shadowRoot;
        }
        for (; a3 <= o6; ++a3) {
          if (r6[a3]) {
            i5 = createElm(null, n5, a3);
            if (i5) {
              r6[a3].$elm$ = i5;
              s4.insertBefore(i5, t3);
            }
          }
        }
      };
      removeVnodes = function(e6, t3, n5) {
        for (var r6 = t3; r6 <= n5; ++r6) {
          var a3 = e6[r6];
          if (a3) {
            var o6 = a3.$elm$;
            nullifyVNodeRefs(a3);
            if (o6) {
              o6.remove();
            }
          }
        }
      };
      updateChildren = function(e6, t3, n5, r6) {
        var a3 = 0;
        var o6 = 0;
        var s4 = t3.length - 1;
        var i5 = t3[0];
        var l3 = t3[s4];
        var u3 = r6.length - 1;
        var c4 = r6[0];
        var f3 = r6[u3];
        var $2;
        while (a3 <= s4 && o6 <= u3) {
          if (i5 == null) {
            i5 = t3[++a3];
          } else if (l3 == null) {
            l3 = t3[--s4];
          } else if (c4 == null) {
            c4 = r6[++o6];
          } else if (f3 == null) {
            f3 = r6[--u3];
          } else if (isSameVnode(i5, c4)) {
            patch(i5, c4);
            i5 = t3[++a3];
            c4 = r6[++o6];
          } else if (isSameVnode(l3, f3)) {
            patch(l3, f3);
            l3 = t3[--s4];
            f3 = r6[--u3];
          } else if (isSameVnode(i5, f3)) {
            patch(i5, f3);
            e6.insertBefore(i5.$elm$, l3.$elm$.nextSibling);
            i5 = t3[++a3];
            f3 = r6[--u3];
          } else if (isSameVnode(l3, c4)) {
            patch(l3, c4);
            e6.insertBefore(l3.$elm$, i5.$elm$);
            l3 = t3[--s4];
            c4 = r6[++o6];
          } else {
            {
              $2 = createElm(t3 && t3[o6], n5, o6);
              c4 = r6[++o6];
            }
            if ($2) {
              {
                i5.$elm$.parentNode.insertBefore($2, i5.$elm$);
              }
            }
          }
        }
        if (a3 > s4) {
          addVnodes(e6, r6[u3 + 1] == null ? null : r6[u3 + 1].$elm$, n5, r6, o6, u3);
        } else if (o6 > u3) {
          removeVnodes(t3, a3, s4);
        }
      };
      isSameVnode = function(e6, t3) {
        if (e6.$tag$ === t3.$tag$) {
          return true;
        }
        return false;
      };
      patch = function(e6, t3) {
        var n5 = t3.$elm$ = e6.$elm$;
        var r6 = e6.$children$;
        var a3 = t3.$children$;
        var o6 = t3.$tag$;
        var s4 = t3.$text$;
        if (s4 === null) {
          {
            isSvgMode = o6 === "svg" ? true : o6 === "foreignObject" ? false : isSvgMode;
          }
          {
            {
              updateElement(e6, t3, isSvgMode);
            }
          }
          if (r6 !== null && a3 !== null) {
            updateChildren(n5, r6, t3, a3);
          } else if (a3 !== null) {
            if (e6.$text$ !== null) {
              n5.textContent = "";
            }
            addVnodes(n5, null, t3, a3, 0, a3.length - 1);
          } else if (r6 !== null) {
            removeVnodes(r6, 0, r6.length - 1);
          }
          if (isSvgMode && o6 === "svg") {
            isSvgMode = false;
          }
        } else if (e6.$text$ !== s4) {
          n5.data = s4;
        }
      };
      nullifyVNodeRefs = function(e6) {
        {
          e6.$attrs$ && e6.$attrs$.ref && e6.$attrs$.ref(null);
          e6.$children$ && e6.$children$.map(nullifyVNodeRefs);
        }
      };
      renderVdom = function(e6, t3) {
        var n5 = e6.$hostElement$;
        var r6 = e6.$vnode$ || newVNode(null, null);
        var a3 = isHost(t3) ? t3 : h3(null, null, t3);
        hostTagName = n5.tagName;
        a3.$tag$ = null;
        a3.$flags$ |= 4;
        e6.$vnode$ = a3;
        a3.$elm$ = r6.$elm$ = n5.shadowRoot || n5;
        {
          scopeId = n5["s-sc"];
        }
        patch(r6, a3);
      };
      attachToAncestor = function(e6, t3) {
        if (t3 && !e6.$onRenderResolve$ && t3["s-p"]) {
          t3["s-p"].push(new Promise((function(t4) {
            return e6.$onRenderResolve$ = t4;
          })));
        }
      };
      scheduleUpdate = function(e6, t3) {
        {
          e6.$flags$ |= 16;
        }
        if (e6.$flags$ & 4) {
          e6.$flags$ |= 512;
          return;
        }
        attachToAncestor(e6, e6.$ancestorComponent$);
        var n5 = function() {
          return dispatchHooks(e6, t3);
        };
        return writeTask(n5);
      };
      dispatchHooks = function(e6, t3) {
        var n5 = createTime("scheduleUpdate", e6.$cmpMeta$.$tagName$);
        var r6 = e6.$lazyInstance$;
        var a3;
        if (t3) {
          {
            e6.$flags$ |= 256;
            if (e6.$queuedListeners$) {
              e6.$queuedListeners$.map((function(e7) {
                var t4 = e7[0], n6 = e7[1];
                return safeCall(r6, t4, n6);
              }));
              e6.$queuedListeners$ = void 0;
            }
          }
        }
        n5();
        return enqueue(a3, (function() {
          return updateComponent(e6, r6, t3);
        }));
      };
      enqueue = function(e6, t3) {
        return isPromisey(e6) ? e6.then(t3) : t3();
      };
      isPromisey = function(e6) {
        return e6 instanceof Promise || e6 && e6.then && typeof e6.then === "function";
      };
      updateComponent = function(e6, t3, n5) {
        return __awaiter4(void 0, void 0, void 0, (function() {
          var r6, a3, o6, s4, i5, l3, u3;
          return __generator4(this, (function(c4) {
            a3 = e6.$hostElement$;
            o6 = createTime("update", e6.$cmpMeta$.$tagName$);
            s4 = a3["s-rc"];
            if (n5) {
              attachStyles(e6);
            }
            i5 = createTime("render", e6.$cmpMeta$.$tagName$);
            {
              callRender(e6, t3);
            }
            if (s4) {
              s4.map((function(e7) {
                return e7();
              }));
              a3["s-rc"] = void 0;
            }
            i5();
            o6();
            {
              l3 = (r6 = a3["s-p"]) !== null && r6 !== void 0 ? r6 : [];
              u3 = function() {
                return postUpdateComponent(e6);
              };
              if (l3.length === 0) {
                u3();
              } else {
                Promise.all(l3).then(u3);
                e6.$flags$ |= 4;
                l3.length = 0;
              }
            }
            return [2];
          }));
        }));
      };
      callRender = function(e6, t3, n5) {
        try {
          t3 = t3.render();
          {
            e6.$flags$ &= ~16;
          }
          {
            e6.$flags$ |= 2;
          }
          {
            {
              {
                renderVdom(e6, t3);
              }
            }
          }
        } catch (t4) {
          consoleError(t4, e6.$hostElement$);
        }
        return null;
      };
      postUpdateComponent = function(e6) {
        var t3 = e6.$cmpMeta$.$tagName$;
        var n5 = e6.$hostElement$;
        var r6 = createTime("postUpdate", t3);
        var a3 = e6.$lazyInstance$;
        var o6 = e6.$ancestorComponent$;
        if (!(e6.$flags$ & 64)) {
          e6.$flags$ |= 64;
          {
            addHydratedFlag(n5);
          }
          {
            safeCall(a3, "componentDidLoad");
          }
          r6();
          {
            e6.$onReadyResolve$(n5);
            if (!o6) {
              appDidLoad();
            }
          }
        } else {
          r6();
        }
        {
          e6.$onInstanceResolve$(n5);
        }
        {
          if (e6.$onRenderResolve$) {
            e6.$onRenderResolve$();
            e6.$onRenderResolve$ = void 0;
          }
          if (e6.$flags$ & 512) {
            nextTick((function() {
              return scheduleUpdate(e6, false);
            }));
          }
          e6.$flags$ &= ~(4 | 512);
        }
      };
      forceUpdate = function(e6) {
        {
          var t3 = getHostRef(e6);
          var n5 = t3.$hostElement$.isConnected;
          if (n5 && (t3.$flags$ & (2 | 16)) === 2) {
            scheduleUpdate(t3, false);
          }
          return n5;
        }
      };
      appDidLoad = function(e6) {
        {
          addHydratedFlag(doc.documentElement);
        }
        nextTick((function() {
          return emitEvent(win, "appload", { detail: { namespace: NAMESPACE } });
        }));
      };
      safeCall = function(e6, t3, n5) {
        if (e6 && e6[t3]) {
          try {
            return e6[t3](n5);
          } catch (e7) {
            consoleError(e7);
          }
        }
        return void 0;
      };
      addHydratedFlag = function(e6) {
        return e6.classList.add("hydrated");
      };
      getValue = function(e6, t3) {
        return getHostRef(e6).$instanceValues$.get(t3);
      };
      setValue = function(e6, t3, n5, r6) {
        var a3 = getHostRef(e6);
        var o6 = a3.$instanceValues$.get(t3);
        var s4 = a3.$flags$;
        var i5 = a3.$lazyInstance$;
        n5 = parsePropertyValue(n5, r6.$members$[t3][0]);
        var l3 = Number.isNaN(o6) && Number.isNaN(n5);
        var u3 = n5 !== o6 && !l3;
        if ((!(s4 & 8) || o6 === void 0) && u3) {
          a3.$instanceValues$.set(t3, n5);
          if (i5) {
            if ((s4 & (2 | 16)) === 2) {
              scheduleUpdate(a3, false);
            }
          }
        }
      };
      proxyComponent = function(e6, t3, n5) {
        if (t3.$members$) {
          var r6 = Object.entries(t3.$members$);
          var a3 = e6.prototype;
          r6.map((function(e7) {
            var r7 = e7[0], o7 = e7[1][0];
            if (o7 & 31 || n5 & 2 && o7 & 32) {
              Object.defineProperty(a3, r7, { get: function() {
                return getValue(this, r7);
              }, set: function(e8) {
                setValue(this, r7, e8, t3);
              }, configurable: true, enumerable: true });
            } else if (n5 & 1 && o7 & 64) {
              Object.defineProperty(a3, r7, { value: function() {
                var e8 = [];
                for (var t4 = 0; t4 < arguments.length; t4++) {
                  e8[t4] = arguments[t4];
                }
                var n6 = getHostRef(this);
                return n6.$onInstancePromise$.then((function() {
                  var t5;
                  return (t5 = n6.$lazyInstance$)[r7].apply(t5, e8);
                }));
              } });
            }
          }));
          if (n5 & 1) {
            var o6 = /* @__PURE__ */ new Map();
            a3.attributeChangedCallback = function(e7, t4, n6) {
              var r7 = this;
              plt.jmp((function() {
                var t5 = o6.get(e7);
                if (r7.hasOwnProperty(t5)) {
                  n6 = r7[t5];
                  delete r7[t5];
                } else if (a3.hasOwnProperty(t5) && typeof r7[t5] === "number" && r7[t5] == n6) {
                  return;
                }
                r7[t5] = n6 === null && typeof r7[t5] === "boolean" ? false : n6;
              }));
            };
            e6.observedAttributes = r6.filter((function(e7) {
              var t4 = e7[0], n6 = e7[1];
              return n6[0] & 15;
            })).map((function(e7) {
              var t4 = e7[0], n6 = e7[1];
              var r7 = n6[1] || t4;
              o6.set(r7, t4);
              return r7;
            }));
          }
        }
        return e6;
      };
      initializeComponent = function(e6, t3, n5, r6, a3) {
        return __awaiter4(void 0, void 0, void 0, (function() {
          var e7, r7, o6, s4, i5, l3, u3;
          return __generator4(this, (function(c4) {
            switch (c4.label) {
              case 0:
                if (!((t3.$flags$ & 32) === 0)) return [3, 3];
                t3.$flags$ |= 32;
                a3 = loadModule(n5);
                if (!a3.then) return [3, 2];
                e7 = uniqueTime();
                return [4, a3];
              case 1:
                a3 = c4.sent();
                e7();
                c4.label = 2;
              case 2:
                if (!a3.isProxied) {
                  proxyComponent(a3, n5, 2);
                  a3.isProxied = true;
                }
                r7 = createTime("createInstance", n5.$tagName$);
                {
                  t3.$flags$ |= 8;
                }
                try {
                  new a3(t3);
                } catch (e8) {
                  consoleError(e8);
                }
                {
                  t3.$flags$ &= ~8;
                }
                r7();
                if (a3.style) {
                  o6 = a3.style;
                  s4 = getScopeId(n5);
                  if (!styles.has(s4)) {
                    i5 = createTime("registerStyles", n5.$tagName$);
                    registerStyle(s4, o6, !!(n5.$flags$ & 1));
                    i5();
                  }
                }
                c4.label = 3;
              case 3:
                l3 = t3.$ancestorComponent$;
                u3 = function() {
                  return scheduleUpdate(t3, true);
                };
                if (l3 && l3["s-rc"]) {
                  l3["s-rc"].push(u3);
                } else {
                  u3();
                }
                return [2];
            }
          }));
        }));
      };
      connectedCallback = function(e6) {
        if ((plt.$flags$ & 1) === 0) {
          var t3 = getHostRef(e6);
          var n5 = t3.$cmpMeta$;
          var r6 = createTime("connectedCallback", n5.$tagName$);
          if (!(t3.$flags$ & 1)) {
            t3.$flags$ |= 1;
            {
              var a3 = e6;
              while (a3 = a3.parentNode || a3.host) {
                if (a3["s-p"]) {
                  attachToAncestor(t3, t3.$ancestorComponent$ = a3);
                  break;
                }
              }
            }
            if (n5.$members$) {
              Object.entries(n5.$members$).map((function(t4) {
                var n6 = t4[0], r7 = t4[1][0];
                if (r7 & 31 && e6.hasOwnProperty(n6)) {
                  var a4 = e6[n6];
                  delete e6[n6];
                  e6[n6] = a4;
                }
              }));
            }
            {
              initializeComponent(e6, t3, n5);
            }
          } else {
            addHostEventListeners(e6, t3, n5.$listeners$);
          }
          r6();
        }
      };
      disconnectedCallback = function(e6) {
        if ((plt.$flags$ & 1) === 0) {
          var t3 = getHostRef(e6);
          var n5 = t3.$lazyInstance$;
          {
            if (t3.$rmListeners$) {
              t3.$rmListeners$.map((function(e7) {
                return e7();
              }));
              t3.$rmListeners$ = void 0;
            }
          }
          {
            safeCall(n5, "disconnectedCallback");
          }
        }
      };
      bootstrapLazy = function(e6, t3) {
        if (t3 === void 0) {
          t3 = {};
        }
        var n5;
        var r6 = createTime();
        var a3 = [];
        var o6 = t3.exclude || [];
        var s4 = win.customElements;
        var i5 = doc.head;
        var l3 = i5.querySelector("meta[charset]");
        var u3 = doc.createElement("style");
        var c4 = [];
        var f3;
        var $2 = true;
        Object.assign(plt, t3);
        plt.$resourcesUrl$ = new URL(t3.resourcesUrl || "./", doc.baseURI).href;
        e6.map((function(e7) {
          e7[1].map((function(t4) {
            var n6 = { $flags$: t4[0], $tagName$: t4[1], $members$: t4[2], $listeners$: t4[3] };
            {
              n6.$members$ = t4[2];
            }
            {
              n6.$listeners$ = t4[3];
            }
            var r7 = n6.$tagName$;
            var i6 = (function(e8) {
              __extends(t5, e8);
              function t5(t6) {
                var r8 = e8.call(this, t6) || this;
                t6 = r8;
                registerHost(t6, n6);
                if (n6.$flags$ & 1) {
                  {
                    {
                      t6.attachShadow({ mode: "open" });
                    }
                  }
                }
                return r8;
              }
              t5.prototype.connectedCallback = function() {
                var e9 = this;
                if (f3) {
                  clearTimeout(f3);
                  f3 = null;
                }
                if ($2) {
                  c4.push(this);
                } else {
                  plt.jmp((function() {
                    return connectedCallback(e9);
                  }));
                }
              };
              t5.prototype.disconnectedCallback = function() {
                var e9 = this;
                plt.jmp((function() {
                  return disconnectedCallback(e9);
                }));
              };
              t5.prototype.componentOnReady = function() {
                return getHostRef(this).$onReadyPromise$;
              };
              return t5;
            })(HTMLElement);
            n6.$lazyBundleId$ = e7[0];
            if (!o6.includes(r7) && !s4.get(r7)) {
              a3.push(r7);
              s4.define(r7, proxyComponent(i6, n6, 1));
            }
          }));
        }));
        {
          u3.innerHTML = a3 + HYDRATED_CSS;
          u3.setAttribute("data-styles", "");
          var d3 = (n5 = plt.$nonce$) !== null && n5 !== void 0 ? n5 : queryNonceMetaTagContent(doc);
          if (d3 != null) {
            u3.setAttribute("nonce", d3);
          }
          i5.insertBefore(u3, l3 ? l3.nextSibling : i5.firstChild);
        }
        $2 = false;
        if (c4.length) {
          c4.map((function(e7) {
            return e7.connectedCallback();
          }));
        } else {
          {
            plt.jmp((function() {
              return f3 = setTimeout(appDidLoad, 30);
            }));
          }
        }
        r6();
      };
      addHostEventListeners = function(e6, t3, n5, r6) {
        if (n5) {
          n5.map((function(n6) {
            var r7 = n6[0], a3 = n6[1], o6 = n6[2];
            var s4 = getHostListenerTarget(e6, r7);
            var i5 = hostListenerProxy(t3, o6);
            var l3 = hostListenerOpts(r7);
            plt.ael(s4, a3, i5, l3);
            (t3.$rmListeners$ = t3.$rmListeners$ || []).push((function() {
              return plt.rel(s4, a3, i5, l3);
            }));
          }));
        }
      };
      hostListenerProxy = function(e6, t3) {
        return function(n5) {
          try {
            {
              if (e6.$flags$ & 256) {
                e6.$lazyInstance$[t3](n5);
              } else {
                (e6.$queuedListeners$ = e6.$queuedListeners$ || []).push([t3, n5]);
              }
            }
          } catch (e7) {
            consoleError(e7);
          }
        };
      };
      getHostListenerTarget = function(e6, t3) {
        if (t3 & 16) return doc.body;
        return e6;
      };
      hostListenerOpts = function(e6) {
        return (e6 & 2) !== 0;
      };
      hostRefs = /* @__PURE__ */ new WeakMap();
      getHostRef = function(e6) {
        return hostRefs.get(e6);
      };
      registerInstance = function(e6, t3) {
        return hostRefs.set(t3.$lazyInstance$ = e6, t3);
      };
      registerHost = function(e6, t3) {
        var n5 = { $flags$: 0, $hostElement$: e6, $cmpMeta$: t3, $instanceValues$: /* @__PURE__ */ new Map() };
        {
          n5.$onInstancePromise$ = new Promise((function(e7) {
            return n5.$onInstanceResolve$ = e7;
          }));
        }
        {
          n5.$onReadyPromise$ = new Promise((function(e7) {
            return n5.$onReadyResolve$ = e7;
          }));
          e6["s-p"] = [];
          e6["s-rc"] = [];
        }
        addHostEventListeners(e6, n5, t3.$listeners$);
        return hostRefs.set(e6, n5);
      };
      isMemberInElement = function(e6, t3) {
        return t3 in e6;
      };
      consoleError = function(e6, t3) {
        return (0, console.error)(e6, t3);
      };
      cmpModules = /* @__PURE__ */ new Map();
      loadModule = function(e6, t3, n5) {
        var r6 = e6.$tagName$.replace(/-/g, "_");
        var a3 = e6.$lazyBundleId$;
        var o6 = cmpModules.get(a3);
        if (o6) {
          return o6[r6];
        }
        if (!n5 || !BUILD.hotModuleReplacement) {
          var s4 = function(e7) {
            cmpModules.set(a3, e7);
            return e7[r6];
          };
          switch (a3) {
            case "pwa-action-sheet":
              return Promise.resolve().then(() => (init_pwa_action_sheet_entry(), pwa_action_sheet_entry_exports)).then(s4, consoleError);
            case "pwa-camera-modal":
              return Promise.resolve().then(() => (init_pwa_camera_modal_entry(), pwa_camera_modal_entry_exports)).then(s4, consoleError);
            case "pwa-toast":
              return Promise.resolve().then(() => (init_pwa_toast_entry(), pwa_toast_entry_exports)).then(s4, consoleError);
            case "pwa-camera-modal-instance":
              return Promise.resolve().then(() => (init_pwa_camera_modal_instance_entry(), pwa_camera_modal_instance_entry_exports)).then(s4, consoleError);
            case "pwa-camera":
              return Promise.resolve().then(() => (init_pwa_camera_entry(), pwa_camera_entry_exports)).then(s4, consoleError);
          }
        }
        return import("./".concat(a3, ".entry.js").concat("")).then((function(e7) {
          {
            cmpModules.set(a3, e7);
          }
          return e7[r6];
        }), consoleError);
      };
      styles = /* @__PURE__ */ new Map();
      win = typeof window !== "undefined" ? window : {};
      doc = win.document || { head: {} };
      plt = { $flags$: 0, $resourcesUrl$: "", jmp: function(e6) {
        return e6();
      }, raf: function(e6) {
        return requestAnimationFrame(e6);
      }, ael: function(e6, t3, n5, r6) {
        return e6.addEventListener(t3, n5, r6);
      }, rel: function(e6, t3, n5, r6) {
        return e6.removeEventListener(t3, n5, r6);
      }, ce: function(e6, t3) {
        return new CustomEvent(e6, t3);
      } };
      promiseResolve = function(e6) {
        return Promise.resolve(e6);
      };
      supportsConstructableStylesheets = (function() {
        try {
          new CSSStyleSheet();
          return typeof new CSSStyleSheet().replaceSync === "function";
        } catch (e6) {
        }
        return false;
      })();
      queueDomReads = [];
      queueDomWrites = [];
      queueTask = function(e6, t3) {
        return function(n5) {
          e6.push(n5);
          if (!queuePending) {
            queuePending = true;
            if (t3 && plt.$flags$ & 4) {
              nextTick(flush);
            } else {
              plt.raf(flush);
            }
          }
        };
      };
      consume = function(e6) {
        for (var t3 = 0; t3 < e6.length; t3++) {
          try {
            e6[t3](performance.now());
          } catch (e7) {
            consoleError(e7);
          }
        }
        e6.length = 0;
      };
      flush = function() {
        consume(queueDomReads);
        {
          consume(queueDomWrites);
          if (queuePending = queueDomReads.length > 0) {
            plt.raf(flush);
          }
        }
      };
      nextTick = function(e6) {
        return promiseResolve().then(e6);
      };
      writeTask = queueTask(queueDomWrites, true);
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = /* @__PURE__ */ Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e6, o6) {
      if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e6;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e6 = void 0 !== s4 && 1 === s4.length;
        e6 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e6) => {
    const o6 = 1 === t3.length ? t3[0] : e6.reduce((e7, s4, o7) => e7 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o7 + 1], t3[0]);
    return new n(o6, t3, s);
  };
  var S = (s4, o6) => {
    if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e6 of o6) {
      const o7 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e6.cssText, s4.appendChild(o7);
    }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e6 = "";
    for (const s4 of t4.cssRules) e6 += s4.cssText;
    return r(e6);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s4) => t3;
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t3, s4) => !i2(t3, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = /* @__PURE__ */ Symbol(), h4 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h4 && e2(this.prototype, t3, h4);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      const { get: e6, set: r6 } = h(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e6, set(s5) {
        const h4 = e6?.call(this);
        r6?.call(this, s5), this.requestUpdate(t3, h4, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e6 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e6) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      const i5 = this.constructor.elementProperties.get(t3), e6 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e6 && true === i5.reflect) {
        const h4 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h4 ? this.removeAttribute(e6) : this.setAttribute(e6, h4), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i5 = this.constructor, e6 = i5._$Eh.get(t3);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t4 = i5.getPropertyOptions(e6), h4 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e6;
        const r6 = h4.fromAttribute(s4, t4.type);
        this[e6] = r6 ?? this._$Ej?.get(e6) ?? r6, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5, e6 = false, h4) {
      if (void 0 !== t3) {
        const r6 = this.constructor;
        if (false === e6 && (h4 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h4, s4) || i5.useDefault && i5.reflect && h4 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e6, wrapped: h4 }, r6) {
      i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h4 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e6 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e6 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i5, e6);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = (t3) => t3;
  var s2 = t2.trustedTypes;
  var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var h2 = "$lit$";
  var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var n3 = "?" + o3;
  var r3 = `<${n3}>`;
  var l2 = document;
  var c3 = () => l2.createComment("");
  var a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var u2 = Array.isArray;
  var d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
  var f2 = "[ 	\n\f\r]";
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
  var b2 = x(1);
  var w = x(2);
  var T = x(3);
  var E = /* @__PURE__ */ Symbol.for("lit-noChange");
  var A = /* @__PURE__ */ Symbol.for("lit-nothing");
  var C = /* @__PURE__ */ new WeakMap();
  var P = l2.createTreeWalker(l2, 129);
  function V(t3, i5) {
    if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i5) : i5;
  }
  var N = (t3, i5) => {
    const s4 = t3.length - 1, e6 = [];
    let n5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, f3 = 0;
      for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n5 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n5 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n5 = void 0);
      const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e6.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
    }
    return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e6];
  };
  var S2 = class _S {
    constructor({ strings: t3, _$litType$: i5 }, e6) {
      let r6;
      this.parts = [];
      let l3 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
      if (this.el = _S.createElement(f3, e6), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r6 = P.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
            const i6 = v2[a3++], s4 = r6.getAttribute(t4).split(o3), e7 = /([.?@])?(.*)/.exec(i6);
            d3.push({ type: 1, index: l3, name: e7[2], strings: s4, ctor: "." === e7[1] ? I : "?" === e7[1] ? L : "@" === e7[1] ? z : H }), r6.removeAttribute(t4);
          } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t4));
          if (y2.test(r6.tagName)) {
            const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
            if (i6 > 0) {
              r6.textContent = s2 ? s2.emptyScript : "";
              for (let s4 = 0; s4 < i6; s4++) r6.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
              r6.append(t4[i6], c3());
            }
          }
        } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
        }
        l3++;
      }
    }
    static createElement(t3, i5) {
      const s4 = l2.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function M(t3, i5, s4 = t3, e6) {
    if (i5 === E) return i5;
    let h4 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
    const o6 = a2(i5) ? void 0 : i5._$litDirective$;
    return h4?.constructor !== o6 && (h4?._$AO?.(false), void 0 === o6 ? h4 = void 0 : (h4 = new o6(t3), h4._$AT(t3, s4, e6)), void 0 !== e6 ? (s4._$Co ??= [])[e6] = h4 : s4._$Cl = h4), void 0 !== h4 && (i5 = M(t3, h4._$AS(t3, i5.values), h4, e6)), i5;
  }
  var R = class {
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e6 = (t3?.creationScope ?? l2).importNode(i5, true);
      P.currentNode = e6;
      let h4 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
      for (; void 0 !== r6; ) {
        if (o6 === r6.index) {
          let i6;
          2 === r6.type ? i6 = new k(h4, h4.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h4, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h4, this, t3)), this._$AV.push(i6), r6 = s4[++n5];
        }
        o6 !== r6?.index && (h4 = P.nextNode(), o6++);
      }
      return P.currentNode = l2, e6;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var k = class _k {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s4, e6) {
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i5, _$litType$: s4 } = t3, e6 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e6) this._$AH.p(i5);
      else {
        const t4 = new R(e6, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = C.get(t3.strings);
      return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
    }
    k(t3) {
      u2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e6 = 0;
      for (const h4 of t3) e6 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e6], s4._$AI(h4), e6++;
      e6 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t3 = this._$AA.nextSibling, s4) {
      for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
        const s5 = i3(t3).nextSibling;
        i3(t3).remove(), t3 = s5;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var H = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e6, h4) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e6, this.options = h4, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
    }
    _$AI(t3, i5 = this, s4, e6) {
      const h4 = this.strings;
      let o6 = false;
      if (void 0 === h4) t3 = M(this, t3, i5, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
      else {
        const e7 = t3;
        let n5, r6;
        for (t3 = h4[0], n5 = 0; n5 < h4.length - 1; n5++) r6 = M(this, e7[s4 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h4[n5 + 1]), this._$AH[n5] = r6;
      }
      o6 && !e6 && this.j(t3);
    }
    j(t3) {
      t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var I = class extends H {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === A ? void 0 : t3;
    }
  };
  var L = class extends H {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
    }
  };
  var z = class extends H {
    constructor(t3, i5, s4, e6, h4) {
      super(t3, i5, s4, e6, h4), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
      const s4 = this._$AH, e6 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h4 = t3 !== A && (s4 === A || e6);
      e6 && this.element.removeEventListener(this.name, this, s4), h4 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var Z = class {
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      M(this, t3);
    }
  };
  var B = t2.litHtmlPolyfillSupport;
  B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.2");
  var D = (t3, i5, s4) => {
    const e6 = s4?.renderBefore ?? i5;
    let h4 = e6._$litPart$;
    if (void 0 === h4) {
      const t4 = s4?.renderBefore ?? null;
      e6._$litPart$ = h4 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
    }
    return h4._$AI(t3), h4;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return E;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.2");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = (t3 = o5, e6, r6) => {
    const { kind: n5, metadata: i5 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
      const { name: o6 } = r6;
      return { set(r7) {
        const n6 = e6.get.call(this);
        e6.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
      }, init(e7) {
        return void 0 !== e7 && this.C(o6, void 0, t3, e7), e7;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r6;
      return function(r7) {
        const n6 = this[o6];
        e6.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t3) {
    return (e6, o6) => "object" == typeof o6 ? r4(t3, e6, o6) : ((t4, e7, o7) => {
      const r6 = e7.hasOwnProperty(o7);
      return e7.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e7, o7) : void 0;
    })(t3, e6, o6);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r6) {
    return n4({ ...r6, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e6, t3, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t3 && Object.defineProperty(e6, t3, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e6, r6) {
    return (n5, s4, i5) => {
      const o6 = (t3) => t3.renderRoot?.querySelector(e6) ?? null;
      if (r6) {
        const { get: e7, set: r7 } = "object" == typeof s4 ? n5 : i5 ?? /* @__PURE__ */ (() => {
          const t3 = /* @__PURE__ */ Symbol();
          return { get() {
            return this[t3];
          }, set(e8) {
            this[t3] = e8;
          } };
        })();
        return e4(n5, s4, { get() {
          let t3 = e7.call(this);
          return void 0 === t3 && (t3 = o6(this), (null !== t3 || this.hasUpdated) && r7.call(this, t3)), t3;
        } });
      }
      return e4(n5, s4, { get() {
        return o6(this);
      } });
    };
  }

  // src/shared/page.ts
  var Page = class extends i4 {
    constructor() {
      super();
    }
    static {
      this.styles = [i``];
    }
    /**
     * Function to navigate to another url.
     * If the string starts with / will concat string to the current url.
     * If it starts with http the whole location will be replaced.
     * Other case it will use the same origin to concat the url.
     * @param {string} url location to navigate
     */
    navigate(url) {
      if (url.startsWith("/")) {
        window.location.href = window.location.href.concat(url);
      } else if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        window.location.href = `${window.location.origin}/${url}`;
      }
    }
    /**
     * Function to open a url in a new tab.
     * @param {string} url to open in a new tab
     */
    openNewTab(url) {
      window.open(url, "_blank");
    }
    /**
     * Function to get current url where the webcomponent is located
     * @returns window.location.href
     */
    getHref() {
      return window.location.href;
    }
    /**
     * Function to get hostname of current url
     * @returns window.location.hostname
     */
    getHostname() {
      return window.location.hostname;
    }
    /**
     * Function to get queryparams from current url
     * @returns url.searchParams: URLSearchParams
     */
    getQueryParamsURL() {
      const url = new URL(this.getHref());
      return url.searchParams;
    }
    connectedCallback() {
      super.connectedCallback();
      this.onPageInit();
    }
    /**
     * It will be called after the Page component is loaded.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onPageInit() {
    }
  };

  // src/shared/httpRequest.ts
  var isJsonString = (input) => {
    try {
      JSON.parse(input);
    } catch (e6) {
      return false;
    }
    return true;
  };
  var handleResponse = async (response) => {
    return new Promise((resolve, reject) => {
      if (response.ok) {
        response.text().then((result) => {
          const res = isJsonString(result) ? JSON.parse(result) : result;
          resolve(res);
        }).catch((err) => {
          resolve(err);
        });
      } else {
        response.text().then((result) => {
          reject(isJsonString(result) ? JSON.parse(result) : result);
        });
      }
    });
  };
  var request = async (url, http) => {
    const domain = `http://example.com/`;
    const method = http?.method ? http.method : "GET";
    const options = {
      method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin"
    };
    if (http?.body) {
      if (http.body instanceof URLSearchParams) {
        options.body = http.body;
      } else {
        options.body = JSON.stringify(http.body);
      }
    }
    const response = await fetch(`${domain}${url}`, options);
    return handleResponse(response);
  };

  // src/shared/httpEndpoints.ts
  var getData = async () => {
    return request("/whatever");
  };

  // src/shared/api.decorator.ts
  var api = function PluginDecorator(apis) {
    return (ctor) => {
      ctor.prototype.api = {};
      Object.entries(apis).forEach(([key, value]) => ctor.prototype.api[key] = value);
    };
  };

  // src/components/pageExample/pageExample.ts
  var PageExample = class extends Page {
    async onPageInit() {
      this.data = (await this.api.getData()).data;
    }
    render() {
      return b2`
      <div class="page-container">
        this is a page example
        <div>
          here is the result of the api: 
          <span>
            ${this.data ? this.data : "NO DATA"}
          </span>
        </div>
      </div>
    `;
    }
  };
  PageExample.styles = [
    Page.styles,
    i`
      div {
        font-family: arial;
        text-align: center;
      }
      span {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ];
  __decorateClass([
    r5()
  ], PageExample.prototype, "data", 2);
  PageExample = __decorateClass([
    api({ getData })
  ], PageExample);

  // src/shared/functions.ts
  var register = (tag, component) => {
    if (document.createElement(tag).constructor === HTMLElement) {
      const newComponent = component;
      const classVersion = () => class Version extends newComponent {
        constructor() {
          super();
        }
      };
      window.customElements.define(tag, classVersion());
    }
  };

  // src/components/pageExample/index.ts
  register("page-example", PageExample);

  // node_modules/@capacitor/core/dist/index.js
  var createCapacitorPlatforms = (win2) => {
    const defaultPlatformMap = /* @__PURE__ */ new Map();
    defaultPlatformMap.set("web", { name: "web" });
    const capPlatforms = win2.CapacitorPlatforms || {
      currentPlatform: { name: "web" },
      platforms: defaultPlatformMap
    };
    const addPlatform2 = (name, platform) => {
      capPlatforms.platforms.set(name, platform);
    };
    const setPlatform2 = (name) => {
      if (capPlatforms.platforms.has(name)) {
        capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
      }
    };
    capPlatforms.addPlatform = addPlatform2;
    capPlatforms.setPlatform = setPlatform2;
    return capPlatforms;
  };
  var initPlatforms = (win2) => win2.CapacitorPlatforms = createCapacitorPlatforms(win2);
  var CapacitorPlatforms = /* @__PURE__ */ initPlatforms(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  var addPlatform = CapacitorPlatforms.addPlatform;
  var setPlatform = CapacitorPlatforms.setPlatform;
  var ExceptionCode;
  (function(ExceptionCode2) {
    ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
    ExceptionCode2["Unavailable"] = "UNAVAILABLE";
  })(ExceptionCode || (ExceptionCode = {}));
  var CapacitorException = class extends Error {
    constructor(message, code, data) {
      super(message);
      this.message = message;
      this.code = code;
      this.data = data;
    }
  };
  var getPlatformId = (win2) => {
    var _a, _b;
    if (win2 === null || win2 === void 0 ? void 0 : win2.androidBridge) {
      return "android";
    } else if ((_b = (_a = win2 === null || win2 === void 0 ? void 0 : win2.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
      return "ios";
    } else {
      return "web";
    }
  };
  var createCapacitor = (win2) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win2.CapacitorCustomPlatform || null;
    const cap = win2.Capacitor || {};
    const Plugins2 = cap.Plugins = cap.Plugins || {};
    const capPlatforms = win2.CapacitorPlatforms;
    const defaultGetPlatform = () => {
      return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win2);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== "web";
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
      const plugin = registeredPlugins.get(pluginName);
      if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
        return true;
      }
      if (getPluginHeader(pluginName)) {
        return true;
      }
      return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => {
      var _a2;
      return (_a2 = cap.PluginHeaders) === null || _a2 === void 0 ? void 0 : _a2.find((h4) => h4.name === pluginName);
    };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win2.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
      return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = /* @__PURE__ */ new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
      const registeredPlugin = registeredPlugins.get(pluginName);
      if (registeredPlugin) {
        console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
        return registeredPlugin.proxy;
      }
      const platform = getPlatform();
      const pluginHeader = getPluginHeader(pluginName);
      let jsImplementation;
      const loadPluginImplementation = async () => {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = await jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
          jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = await jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
        }
        return jsImplementation;
      };
      const createPluginMethod = (impl, prop) => {
        var _a2, _b2;
        if (pluginHeader) {
          const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m2) => prop === m2.name);
          if (methodHeader) {
            if (methodHeader.rtype === "promise") {
              return (options) => cap.nativePromise(pluginName, prop.toString(), options);
            } else {
              return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
            }
          } else if (impl) {
            return (_a2 = impl[prop]) === null || _a2 === void 0 ? void 0 : _a2.bind(impl);
          }
        } else if (impl) {
          return (_b2 = impl[prop]) === null || _b2 === void 0 ? void 0 : _b2.bind(impl);
        } else {
          throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
        }
      };
      const createPluginMethodWrapper = (prop) => {
        let remove;
        const wrapper = (...args) => {
          const p3 = loadPluginImplementation().then((impl) => {
            const fn = createPluginMethod(impl, prop);
            if (fn) {
              const p4 = fn(...args);
              remove = p4 === null || p4 === void 0 ? void 0 : p4.remove;
              return p4;
            } else {
              throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
          });
          if (prop === "addListener") {
            p3.remove = async () => remove();
          }
          return p3;
        };
        wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
        Object.defineProperty(wrapper, "name", {
          value: prop,
          writable: false,
          configurable: false
        });
        return wrapper;
      };
      const addListener = createPluginMethodWrapper("addListener");
      const removeListener = createPluginMethodWrapper("removeListener");
      const addListenerNative = (eventName, callback) => {
        const call = addListener({ eventName }, callback);
        const remove = async () => {
          const callbackId = await call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        };
        const p3 = new Promise((resolve) => call.then(() => resolve({ remove })));
        p3.remove = async () => {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          await remove();
        };
        return p3;
      };
      const proxy = new Proxy({}, {
        get(_2, prop) {
          switch (prop) {
            // https://github.com/facebook/react/issues/20030
            case "$$typeof":
              return void 0;
            case "toJSON":
              return () => ({});
            case "addListener":
              return pluginHeader ? addListenerNative : addListener;
            case "removeListener":
              return removeListener;
            default:
              return createPluginMethodWrapper(prop);
          }
        }
      });
      Plugins2[pluginName] = proxy;
      registeredPlugins.set(pluginName, {
        name: pluginName,
        proxy,
        platforms: /* @__PURE__ */ new Set([
          ...Object.keys(jsImplementations),
          ...pluginHeader ? [platform] : []
        ])
      });
      return proxy;
    };
    const registerPlugin2 = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    if (!cap.convertFileSrc) {
      cap.convertFileSrc = (filePath) => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin2;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
  };
  var initCapacitorGlobal = (win2) => win2.Capacitor = createCapacitor(win2);
  var Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  var registerPlugin = Capacitor.registerPlugin;
  var Plugins = Capacitor.Plugins;
  var WebPlugin = class {
    constructor(config) {
      this.listeners = {};
      this.retainedEventArguments = {};
      this.windowListeners = {};
      if (config) {
        console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
        this.config = config;
      }
    }
    addListener(eventName, listenerFunc) {
      let firstListener = false;
      const listeners = this.listeners[eventName];
      if (!listeners) {
        this.listeners[eventName] = [];
        firstListener = true;
      }
      this.listeners[eventName].push(listenerFunc);
      const windowListener = this.windowListeners[eventName];
      if (windowListener && !windowListener.registered) {
        this.addWindowListener(windowListener);
      }
      if (firstListener) {
        this.sendRetainedArgumentsForEvent(eventName);
      }
      const remove = async () => this.removeListener(eventName, listenerFunc);
      const p3 = Promise.resolve({ remove });
      return p3;
    }
    async removeAllListeners() {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    }
    notifyListeners(eventName, data, retainUntilConsumed) {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        if (retainUntilConsumed) {
          let args = this.retainedEventArguments[eventName];
          if (!args) {
            args = [];
          }
          args.push(data);
          this.retainedEventArguments[eventName] = args;
        }
        return;
      }
      listeners.forEach((listener) => listener(data));
    }
    hasListeners(eventName) {
      return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
      this.windowListeners[pluginEventName] = {
        registered: false,
        windowEventName,
        pluginEventName,
        handler: (event) => {
          this.notifyListeners(pluginEventName, event);
        }
      };
    }
    unimplemented(msg = "not implemented") {
      return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = "not available") {
      return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    }
    addWindowListener(handle) {
      window.addEventListener(handle.windowEventName, handle.handler);
      handle.registered = true;
    }
    removeWindowListener(handle) {
      if (!handle) {
        return;
      }
      window.removeEventListener(handle.windowEventName, handle.handler);
      handle.registered = false;
    }
    sendRetainedArgumentsForEvent(eventName) {
      const args = this.retainedEventArguments[eventName];
      if (!args) {
        return;
      }
      delete this.retainedEventArguments[eventName];
      args.forEach((arg) => {
        this.notifyListeners(eventName, arg);
      });
    }
  };
  var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
  var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  var CapacitorCookiesPluginWeb = class extends WebPlugin {
    async getCookies() {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(";").forEach((cookie) => {
        if (cookie.length <= 0)
          return;
        let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    }
    async setCookie(options) {
      try {
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        const expires = `; expires=${(options.expires || "").replace("expires=", "")}`;
        const path = (options.path || "/").replace("path=", "");
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
        document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async deleteCookie(options) {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async clearCookies() {
      try {
        const cookies = document.cookie.split(";") || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    async clearAllCookies() {
      try {
        await this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  var CapacitorCookies = registerPlugin("CapacitorCookies", {
    web: () => new CapacitorCookiesPluginWeb()
  });
  var readBlobAsBase64 = async (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
  var normalizeHttpHeaders = (headers = {}) => {
    const originalKeys = Object.keys(headers);
    const loweredKeys = Object.keys(headers).map((k2) => k2.toLocaleLowerCase());
    const normalized = loweredKeys.reduce((acc, key, index) => {
      acc[key] = headers[originalKeys[index]];
      return acc;
    }, {});
    return normalized;
  };
  var buildUrlParams = (params, shouldEncode = true) => {
    if (!params)
      return null;
    const output = Object.entries(params).reduce((accumulator, entry) => {
      const [key, value] = entry;
      let encodedValue;
      let item;
      if (Array.isArray(value)) {
        item = "";
        value.forEach((str) => {
          encodedValue = shouldEncode ? encodeURIComponent(str) : str;
          item += `${key}=${encodedValue}&`;
        });
        item.slice(0, -1);
      } else {
        encodedValue = shouldEncode ? encodeURIComponent(value) : value;
        item = `${key}=${encodedValue}`;
      }
      return `${accumulator}&${item}`;
    }, "");
    return output.substr(1);
  };
  var buildRequestInit = (options, extra = {}) => {
    const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
    const headers = normalizeHttpHeaders(options.headers);
    const type = headers["content-type"] || "";
    if (typeof options.data === "string") {
      output.body = options.data;
    } else if (type.includes("application/x-www-form-urlencoded")) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(options.data || {})) {
        params.set(key, value);
      }
      output.body = params.toString();
    } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
      const form = new FormData();
      if (options.data instanceof FormData) {
        options.data.forEach((value, key) => {
          form.append(key, value);
        });
      } else {
        for (const key of Object.keys(options.data)) {
          form.append(key, options.data[key]);
        }
      }
      output.body = form;
      const headers2 = new Headers(output.headers);
      headers2.delete("content-type");
      output.headers = headers2;
    } else if (type.includes("application/json") || typeof options.data === "object") {
      output.body = JSON.stringify(options.data);
    }
    return output;
  };
  var CapacitorHttpPluginWeb = class extends WebPlugin {
    /**
     * Perform an Http request given a set of options
     * @param options Options to build the HTTP request
     */
    async request(options) {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = await fetch(url, requestInit);
      const contentType = response.headers.get("content-type") || "";
      let { responseType = "text" } = response.ok ? options : {};
      if (contentType.includes("application/json")) {
        responseType = "json";
      }
      let data;
      let blob;
      switch (responseType) {
        case "arraybuffer":
        case "blob":
          blob = await response.blob();
          data = await readBlobAsBase64(blob);
          break;
        case "json":
          data = await response.json();
          break;
        case "document":
        case "text":
        default:
          data = await response.text();
      }
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    }
    /**
     * Perform an Http GET request given a set of options
     * @param options Options to build the HTTP request
     */
    async get(options) {
      return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
    }
    /**
     * Perform an Http POST request given a set of options
     * @param options Options to build the HTTP request
     */
    async post(options) {
      return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
    }
    /**
     * Perform an Http PUT request given a set of options
     * @param options Options to build the HTTP request
     */
    async put(options) {
      return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
    }
    /**
     * Perform an Http PATCH request given a set of options
     * @param options Options to build the HTTP request
     */
    async patch(options) {
      return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
    }
    /**
     * Perform an Http DELETE request given a set of options
     * @param options Options to build the HTTP request
     */
    async delete(options) {
      return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
    }
  };
  var CapacitorHttp = registerPlugin("CapacitorHttp", {
    web: () => new CapacitorHttpPluginWeb()
  });

  // node_modules/@capacitor/camera/dist/esm/definitions.js
  var CameraSource;
  (function(CameraSource2) {
    CameraSource2["Prompt"] = "PROMPT";
    CameraSource2["Camera"] = "CAMERA";
    CameraSource2["Photos"] = "PHOTOS";
  })(CameraSource || (CameraSource = {}));
  var CameraDirection;
  (function(CameraDirection2) {
    CameraDirection2["Rear"] = "REAR";
    CameraDirection2["Front"] = "FRONT";
  })(CameraDirection || (CameraDirection = {}));
  var CameraResultType;
  (function(CameraResultType2) {
    CameraResultType2["Uri"] = "uri";
    CameraResultType2["Base64"] = "base64";
    CameraResultType2["DataUrl"] = "dataUrl";
  })(CameraResultType || (CameraResultType = {}));

  // node_modules/@capacitor/camera/dist/esm/web.js
  var CameraWeb = class extends WebPlugin {
    async getPhoto(options) {
      return new Promise(async (resolve, reject) => {
        if (options.webUseInput || options.source === CameraSource.Photos) {
          this.fileInputExperience(options, resolve, reject);
        } else if (options.source === CameraSource.Prompt) {
          let actionSheet = document.querySelector("pwa-action-sheet");
          if (!actionSheet) {
            actionSheet = document.createElement("pwa-action-sheet");
            document.body.appendChild(actionSheet);
          }
          actionSheet.header = options.promptLabelHeader || "Photo";
          actionSheet.cancelable = false;
          actionSheet.options = [
            { title: options.promptLabelPhoto || "From Photos" },
            { title: options.promptLabelPicture || "Take Picture" }
          ];
          actionSheet.addEventListener("onSelection", async (e6) => {
            const selection = e6.detail;
            if (selection === 0) {
              this.fileInputExperience(options, resolve, reject);
            } else {
              this.cameraExperience(options, resolve, reject);
            }
          });
        } else {
          this.cameraExperience(options, resolve, reject);
        }
      });
    }
    async pickImages(_options) {
      return new Promise(async (resolve, reject) => {
        this.multipleFileInputExperience(resolve, reject);
      });
    }
    async cameraExperience(options, resolve, reject) {
      if (customElements.get("pwa-camera-modal")) {
        const cameraModal = document.createElement("pwa-camera-modal");
        cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
        document.body.appendChild(cameraModal);
        try {
          await cameraModal.componentOnReady();
          cameraModal.addEventListener("onPhoto", async (e6) => {
            const photo = e6.detail;
            if (photo === null) {
              reject(new CapacitorException("User cancelled photos app"));
            } else if (photo instanceof Error) {
              reject(photo);
            } else {
              resolve(await this._getCameraPhoto(photo, options));
            }
            cameraModal.dismiss();
            document.body.removeChild(cameraModal);
          });
          cameraModal.present();
        } catch (e6) {
          this.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        this.fileInputExperience(options, resolve, reject);
      }
    }
    fileInputExperience(options, resolve, reject) {
      let input = document.querySelector("#_capacitor-camera-input");
      const cleanup = () => {
        var _a;
        (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
      };
      if (!input) {
        input = document.createElement("input");
        input.id = "_capacitor-camera-input";
        input.type = "file";
        input.hidden = true;
        document.body.appendChild(input);
        input.addEventListener("change", (_e) => {
          const file = input.files[0];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          if (options.resultType === "dataUrl" || options.resultType === "base64") {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              if (options.resultType === "dataUrl") {
                resolve({
                  dataUrl: reader.result,
                  format
                });
              } else if (options.resultType === "base64") {
                const b64 = reader.result.split(",")[1];
                resolve({
                  base64String: b64,
                  format
                });
              }
              cleanup();
            });
            reader.readAsDataURL(file);
          } else {
            resolve({
              webPath: URL.createObjectURL(file),
              format
            });
            cleanup();
          }
        });
        input.addEventListener("cancel", (_e) => {
          reject(new CapacitorException("User cancelled photos app"));
          cleanup();
        });
      }
      input.accept = "image/*";
      input.capture = true;
      if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
        input.removeAttribute("capture");
      } else if (options.direction === CameraDirection.Front) {
        input.capture = "user";
      } else if (options.direction === CameraDirection.Rear) {
        input.capture = "environment";
      }
      input.click();
    }
    multipleFileInputExperience(resolve, reject) {
      let input = document.querySelector("#_capacitor-camera-input-multiple");
      const cleanup = () => {
        var _a;
        (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
      };
      if (!input) {
        input = document.createElement("input");
        input.id = "_capacitor-camera-input-multiple";
        input.type = "file";
        input.hidden = true;
        input.multiple = true;
        document.body.appendChild(input);
        input.addEventListener("change", (_e) => {
          const photos = [];
          for (let i5 = 0; i5 < input.files.length; i5++) {
            const file = input.files[i5];
            let format = "jpeg";
            if (file.type === "image/png") {
              format = "png";
            } else if (file.type === "image/gif") {
              format = "gif";
            }
            photos.push({
              webPath: URL.createObjectURL(file),
              format
            });
          }
          resolve({ photos });
          cleanup();
        });
        input.addEventListener("cancel", (_e) => {
          reject(new CapacitorException("User cancelled photos app"));
          cleanup();
        });
      }
      input.accept = "image/*";
      input.click();
    }
    _getCameraPhoto(photo, options) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const format = photo.type.split("/")[1];
        if (options.resultType === "uri") {
          resolve({
            webPath: URL.createObjectURL(photo),
            format,
            saved: false
          });
        } else {
          reader.readAsDataURL(photo);
          reader.onloadend = () => {
            const r6 = reader.result;
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: r6,
                format,
                saved: false
              });
            } else {
              resolve({
                base64String: r6.split(",")[1],
                format,
                saved: false
              });
            }
          };
          reader.onerror = (e6) => {
            reject(e6);
          };
        }
      });
    }
    async checkPermissions() {
      if (typeof navigator === "undefined" || !navigator.permissions) {
        throw this.unavailable("Permissions API not available in this browser");
      }
      try {
        const permission = await window.navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: permission.state,
          photos: "granted"
        };
      } catch (_a) {
        throw this.unavailable("Camera permissions are not available in this browser");
      }
    }
    async requestPermissions() {
      throw this.unimplemented("Not implemented on web.");
    }
    async pickLimitedLibraryPhotos() {
      throw this.unavailable("Not implemented on web.");
    }
    async getLimitedLibraryPhotos() {
      throw this.unavailable("Not implemented on web.");
    }
  };
  var Camera = new CameraWeb();

  // node_modules/@capacitor/camera/dist/esm/index.js
  var Camera2 = registerPlugin("Camera", {
    web: () => new CameraWeb()
  });

  // src/components/pageCamera/pageCamera.ts
  var PageCamera = class extends Page {
    constructor() {
      super(...arguments);
      this.referenceImageUri = null;
      this.transparency = 0.5;
      this.imageSize = 100;
      this.offsetX = 0;
      this.offsetY = 0;
      this.isDragging = false;
      this.startX = 0;
      this.startY = 0;
      this.initialX = 0;
      this.initialY = 0;
      this.mediaStream = null;
    }
    static {
      this.styles = [
        Page.styles,
        i`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: #000;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }

      .camera-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .video-feed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      .reference-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 2;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
      }

      .bottom-menu {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 24px 16px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: rgba(20, 20, 20, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px 24px 0 0;
        box-sizing: border-box;
      }

      .actions-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }

      .action-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(4px);
      }

      .action-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
      }

      .action-btn:active {
        transform: scale(0.95);
      }

      .action-btn.primary {
        width: 72px;
        height: 72px;
        background: linear-gradient(135deg, #FF6B6B, #FF8E53);
        border: none;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
      }

      .action-btn.primary:hover {
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
      }

      /* Icons via simplified SVG */
      .icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      .primary .icon {
        width: 32px;
        height: 32px;
      }

      .slider-container {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        color: white;
        font-size: 14px;
        font-weight: 500;
      }

      input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        background: transparent;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        margin-top: -8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
      }
    `
      ];
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.initCamera();
    }
    disconnectedCallback() {
      this.stopCamera();
      super.disconnectedCallback();
    }
    async initCamera() {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        if (this.videoElement) {
          this.videoElement.srcObject = this.mediaStream;
        }
      } catch (err) {
        console.error("Error accessing the camera", err);
      }
    }
    stopCamera() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach((track) => track.stop());
      }
    }
    async pickImage() {
      try {
        const image = await Camera2.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Photos
        });
        if (image.dataUrl) {
          this.referenceImageUri = image.dataUrl;
        }
      } catch (error) {
        console.error("Error selecting image", error);
      }
    }
    handleSliderChange(e6) {
      const input = e6.target;
      this.transparency = Number(input.value) / 100;
    }
    handleSizeSliderChange(e6) {
      const input = e6.target;
      this.imageSize = Number(input.value);
    }
    handlePointerDown(e6) {
      if (!this.referenceImageUri) return;
      this.isDragging = true;
      this.startX = e6.clientX;
      this.startY = e6.clientY;
      this.initialX = this.offsetX;
      this.initialY = this.offsetY;
      e6.currentTarget.setPointerCapture(e6.pointerId);
    }
    handlePointerMove(e6) {
      if (!this.isDragging) return;
      const dx = e6.clientX - this.startX;
      const dy = e6.clientY - this.startY;
      this.offsetX = this.initialX + dx;
      this.offsetY = this.initialY + dy;
    }
    handlePointerUp(e6) {
      this.isDragging = false;
      e6.currentTarget.releasePointerCapture(e6.pointerId);
    }
    resetAdjustments() {
      this.offsetX = 0;
      this.offsetY = 0;
      this.imageSize = 100;
      this.transparency = 0.5;
    }
    async takeScreenshot() {
      if (!this.videoElement) return;
      const canvas = document.createElement("canvas");
      const vw = this.videoElement.videoWidth;
      const vh = this.videoElement.videoHeight;
      canvas.width = vw;
      canvas.height = vh;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(this.videoElement, 0, 0, vw, vh);
      if (this.referenceImageUri) {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            ctx.globalAlpha = this.transparency;
            const imgRatio = img.width / img.height;
            const canvasRatio = vw / vh;
            let baseDrawWidth = vw;
            let baseDrawHeight = vh;
            if (imgRatio > canvasRatio) {
              baseDrawHeight = vw / imgRatio;
            } else {
              baseDrawWidth = vh * imgRatio;
            }
            const scaleFactor = this.imageSize / 100;
            const finalDrawWidth = baseDrawWidth * scaleFactor;
            const finalDrawHeight = baseDrawHeight * scaleFactor;
            const rect = this.videoElement.getBoundingClientRect();
            const scaleX = vw / rect.width;
            const scaleY = vh / rect.height;
            const offsetX = (vw - finalDrawWidth) / 2 + this.offsetX * scaleX;
            const offsetY = (vh - finalDrawHeight) / 2 + this.offsetY * scaleY;
            ctx.drawImage(img, offsetX, offsetY, finalDrawWidth, finalDrawHeight);
            this.downloadCanvas(canvas);
            resolve();
          };
          img.src = this.referenceImageUri;
        });
      } else {
        this.downloadCanvas(canvas);
      }
    }
    downloadCanvas(canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `bide-drawing-${(/* @__PURE__ */ new Date()).getTime()}.png`;
      link.href = dataUrl;
      link.click();
    }
    render() {
      return b2`
      <div 
        class="camera-container"
        @pointerdown="${this.handlePointerDown}"
        @pointermove="${this.handlePointerMove}"
        @pointerup="${this.handlePointerUp}"
        style="touch-action: none;"
      >
        <!-- Live Camera Feed -->
        <video id="camera-feed" class="video-feed" autoplay playsinline muted></video>

        <!-- Reference Image Overlay -->
        ${this.referenceImageUri ? b2`
          <img 
            src="${this.referenceImageUri}" 
            class="reference-overlay" 
            style="opacity: ${this.transparency}; transform: translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.imageSize / 100}); transform-origin: center center;"
            alt="Reference overlay"
          />
        ` : ""}

        <!-- Bottom Menu / Action Bar -->
        <div class="bottom-menu" @pointerdown="${(e6) => e6.stopPropagation()}">
          ${this.referenceImageUri ? b2`
            <div class="slider-container">
              <span>Opac.</span>
              <input 
                type="range" 
                min="0" max="100" 
                .value="${(this.transparency * 100).toString()}" 
                @input="${this.handleSliderChange}"
              />
            </div>
            <div class="slider-container">
              <span>Size</span>
              <input 
                type="range" 
                min="10" max="300" 
                .value="${this.imageSize.toString()}" 
                @input="${this.handleSizeSliderChange}"
              />
            </div>
          ` : ""}

          <div class="actions-row">
            <!-- Add Image Button -->
            <button class="action-btn" @click="${this.pickImage}" title="Add Reference">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v14C21,20.1,20.1,21,19,21z M5,19h14V5H5V19z"/>
                <path d="M7,12l3,4l4-5l5,7H5L7,12z"/>
              </svg>
            </button>

            <!-- Screenshot Button -->
            <button class="action-btn primary" @click="${this.takeScreenshot}" title="Take Screenshot">
              <svg class="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8"/>
              </svg>
            </button>
            
            <!-- Reset Button -->
            <button class="action-btn" title="Reset" @click="${this.resetAdjustments}">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/>
              </svg>
            </button>
            
            <!-- Close Button -->
            <button class="action-btn" title="Clear Image" @click="${() => this.referenceImageUri = null}">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    }
  };
  __decorateClass([
    e5("#camera-feed")
  ], PageCamera.prototype, "videoElement", 2);
  __decorateClass([
    r5()
  ], PageCamera.prototype, "referenceImageUri", 2);
  __decorateClass([
    r5()
  ], PageCamera.prototype, "transparency", 2);
  __decorateClass([
    r5()
  ], PageCamera.prototype, "imageSize", 2);
  __decorateClass([
    r5()
  ], PageCamera.prototype, "offsetX", 2);
  __decorateClass([
    r5()
  ], PageCamera.prototype, "offsetY", 2);

  // node_modules/@ionic/pwa-elements/dist/esm-es5/loader.js
  init_index_1c5c47b4();
  init_index_1c5c47b4();
  var patchEsm = function() {
    return promiseResolve();
  };
  var defineCustomElements = function(e6, o6) {
    if (typeof window === "undefined") return Promise.resolve();
    return patchEsm().then((function() {
      return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", { facingMode: [1, "facing-mode"], hidePicker: [4, "hide-picker"], present: [64], dismiss: [64] }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", { header: [1], cancelable: [4], options: [16], open: [32] }]]], ["pwa-toast", [[1, "pwa-toast", { message: [1], duration: [2], closing: [32] }]]], ["pwa-camera", [[1, "pwa-camera", { facingMode: [1, "facing-mode"], handlePhoto: [16], hidePicker: [4, "hide-picker"], handleNoDeviceError: [16], noDevicesText: [1, "no-devices-text"], noDevicesButtonText: [1, "no-devices-button-text"], photo: [32], photoSrc: [32], showShutterOverlay: [32], flashIndex: [32], hasCamera: [32], rotation: [32], deviceError: [32] }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", { facingMode: [1, "facing-mode"], hidePicker: [4, "hide-picker"], noDevicesText: [1, "no-devices-text"], noDevicesButtonText: [1, "no-devices-button-text"] }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], o6);
    }));
  };

  // node_modules/@ionic/pwa-elements/loader/index.js
  (function() {
    if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
      var a3 = HTMLElement;
      window.HTMLElement = function() {
        return Reflect.construct(a3, [], this.constructor);
      };
      HTMLElement.prototype = a3.prototype;
      HTMLElement.prototype.constructor = HTMLElement;
      Object.setPrototypeOf(HTMLElement, a3);
    }
  })();

  // src/components/pageBideApp/pageBideApp.ts
  var PageBideApp = class extends Page {
    constructor() {
      super();
      this.currentRoute = window.location.pathname;
      this.handlePopState = this.handlePopState.bind(this);
    }
    static {
      this.styles = [
        Page.styles,
        i`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
      .app-container {
        width: 100%;
        height: 100%;
      }
    `
      ];
    }
    connectedCallback() {
      super.connectedCallback();
      defineCustomElements(window);
      window.addEventListener("popstate", this.handlePopState);
      const basePath = "/bide/";
      if (this.currentRoute === "/" || this.currentRoute === basePath) {
        this.currentRoute = basePath + "example";
      }
    }
    disconnectedCallback() {
      window.removeEventListener("popstate", this.handlePopState);
      super.disconnectedCallback();
    }
    handlePopState() {
      this.currentRoute = window.location.pathname;
    }
    /**
     * Navigate manually without reloading.
     */
    navigateTo(path) {
      window.history.pushState({}, "", path);
      this.currentRoute = path;
    }
    renderRoute() {
      const normalizedRoute = this.currentRoute.replace(/\/bide\//, "/").replace(/\/$/, "");
      switch (normalizedRoute) {
        case "/example":
          return b2`<page-example></page-example>`;
        case "":
        case "/":
        default:
          return b2`<page-camera></page-camera>`;
      }
    }
    render() {
      return b2`
      <div class="app-container">
        ${this.renderRoute()}
      </div>
    `;
    }
  };
  __decorateClass([
    r5()
  ], PageBideApp.prototype, "currentRoute", 2);

  // src/components/pageCamera/index.ts
  register("page-camera", PageCamera);

  // src/components/pageBideApp/index.ts
  register("bide-app", PageBideApp);
})();
/*! Bundled license information:

@ionic/pwa-elements/dist/esm-es5/pwa-camera.entry.js:
  (**
   * MediaStream ImageCapture polyfill
   *
   * @license
   * Copyright 2018 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
