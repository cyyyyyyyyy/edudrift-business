/**
 * Created by TonyXu on 2017/06/01.
 */
/* eslint-disable */
const isArray =
    typeof Array.isArray === "function"
        ? Array.isArray
        : function(a) {
              return a instanceof Array;
          };

function buildParams(prefix, obj, traditional, add) {
    var name,
        i,
        v,
        rbracket = /\[\]$/;

    if (isArray(obj)) {
        // Serialize array item.
        for (i = 0; obj && i < obj.length; i++) {
            v = obj[i];
            if (traditional || rbracket.test(prefix)) {
                // Treat each array item as a scalar.
                add(prefix, v);
            } else {
                buildParams(
                    prefix + "[" + (typeof v === "object" ? i : "") + "]",
                    v,
                    traditional,
                    add
                );
            }
        }
    } else if (obj && obj.toString() === "[object Object]") {
        // Serialize object item.
        for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }
    } else {
        // Serialize scalar item.
        add(prefix, obj);
    }
}

export default function(o, trad) {
    var prefix,
        i,
        traditional = trad || false,
        s = [],
        enc = encodeURIComponent,
        add = function(key, value) {
            // If value is a function, invoke it and return its value
            value =
                "function" === typeof value
                    ? value()
                    : value == null
                    ? ""
                    : value;
            s[s.length] = enc(key) + "=" + enc(value);
        };
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
        for (i = 0; o && i < o.length; i++) add(o[i]["name"], o[i]["value"]);
    } else {
        // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (prefix in o) {
            if (o.hasOwnProperty(prefix))
                buildParams(prefix, o[prefix], traditional, add);
        }
    }

    // spaces should be + according to spec
    r;
}
