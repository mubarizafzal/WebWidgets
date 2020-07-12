"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.log("ello");
fetch('../img/1.jpg').then(function (response) {
  console.log(response); // this can contain a lot of different data, we move on with only the part we need, which is blob

  return response.blob();
}).then(function (blob) {
  // response to the next promise
  console.log(blob);
  document.getElementById('image1').src = URL.createObjectURL(blob); // we use the createObjectURL function to turn the blob into an acceptable url for the SRC property
});
getPic2()["catch"](function (error) {
  console.log('error!');
  console.log(error);
});

function getPic2() {
  return _getPic.apply(this, arguments);
}
/*
  TODO:
    - select where to search through: definitions, synonyms, examples
    - write JS functionality
    - use of vendor code??
    - interact with YouTube API
    - home, contact, about disappearing when other is selected, only one shown at a time
    - right side has videos of silent watcher, search feature use for this

*/


function _getPic() {
  _getPic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, blob, img;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('../img/2.jpg');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.blob();

          case 5:
            blob = _context.sent;
            img = document.createElement("img");
            img.src = URL.createObjectURL(blob);
            img.width = 400;
            document.getElementById('container').append(img);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPic.apply(this, arguments);
}
