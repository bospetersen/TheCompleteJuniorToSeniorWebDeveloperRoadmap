import * as React from 'react';
import Card from './Card';
var CardList = function (_a) {
    var robots = _a.robots;
    return (React.createElement("div", null, robots.map(function (user, i) {
        return (React.createElement(Card, { key: i, id: robots[i].id, name: robots[i].name, email: robots[i].email }));
    })));
};
export default CardList;
//# sourceMappingURL=CardList.js.map