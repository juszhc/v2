﻿function initPage() {
    wait.show();

    setTimeout(function () {
        wait.show(6);
    }, 3000);

    setTimeout(function () {
        wait.hide();
    }, 6000);
}