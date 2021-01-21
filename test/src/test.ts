import createApp from './createApp'
import boundary from "./boundary";
import mount from "./mount";
import passProps from "./passProps";
import elementRef from "./elementRef";
import rerender from "./rerender";
import hydrate from "./hydrate";
import componentUnmount from "./componentUnmount";
import componentMount from "./componentMount";
import nodeState from "./nodeState";
import replaceByKey from "./replaceByKey";
import skipRender from "./skipRender";
import clearsProps from "./clearsProps";
import shouldUpdate from "./shouldUpdate";

createApp();
boundary();
mount();
passProps();
elementRef();
rerender();
hydrate();
componentUnmount();
componentMount();
nodeState();
replaceByKey();
skipRender();
clearsProps();
shouldUpdate();
