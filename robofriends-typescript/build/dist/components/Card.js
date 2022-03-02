import * as React from 'react';
var Card = function (_a) {
    var name = _a.name, email = _a.email, id = _a.id;
    return (React.createElement("div", { className: 'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' },
        React.createElement("img", { alt: 'robots', src: "https://robohash.org/" + id + "?200x200" }),
        React.createElement("div", null,
            React.createElement("h2", null, name),
            React.createElement("p", null, email))));
};
export default Card;
//# sourceMappingURL=Card.js.map