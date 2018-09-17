import './styles.scss';

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }

    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(
        document.querySelectorAll('.example-bg'),
        function (el) {
            var compStyles = window.getComputedStyle(el);
            el.innerHTML += ' ' + rgb2hex(compStyles.getPropertyValue('background-color'));
        }
    );

    [].forEach.call(
        document.querySelectorAll('.example-text'),
        function (el) {
            var compStyles = window.getComputedStyle(el);
            el.innerHTML += ' ' + rgb2hex(compStyles.getPropertyValue('color'));
        }
    );
});
