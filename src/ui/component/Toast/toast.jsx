import Toast from "./index";
import {render} from "preact";

const CONTAINER_ID = 'ToastBox';

function getContainer() {
    const $item = document.getElementById(CONTAINER_ID);
    // 已经存在则什么都不做
    if ($item) {
        return $item;
    }
    const $container = document.createElement('div');
    $container.id = 'CONTAINER_ID';
    document.body.append($container);
    return $container;
}

function toast(text = "", {showTime = 2000} = {}) {
    const $container = getContainer();
    render(<Toast open>{text}</Toast>, $container);
    setTimeout(() => {
        render('', $container);
        document.body.removeChild($container);
    }, showTime);
};

export default toast;