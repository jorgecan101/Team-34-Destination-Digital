export { android, iPhone };


const iosClasses = '.bmo-switch-wrap, .bmo-switch, .bmo-switch-rail, .switch-label, .bmo-switch-wrap.dual, #right-label-daul, .bmo-card, .modal';
const androidClasses = '.bmo-card,.modal';
const android = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        const grabAllAndroidClasses = document.querySelectorAll(androidClasses);
        [].forEach.call(grabAllAndroidClasses, function(doAllAndroidClasses) {
            doAllAndroidClasses.classList.add('md');
        });
        const grabAllIosClasses = document.querySelectorAll(iosClasses);
        [].forEach.call(grabAllIosClasses, function(doAllIosClasses) {
            doAllIosClasses.classList.remove('ios')
        });
    }
}
android();
const iPhone = () => {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
        /***Remove Android  style***/
        const grabAllAndroidClasses = document.querySelectorAll(androidClasses);
        [].forEach.call(grabAllAndroidClasses, function(doAllAndroidClasses) {
            doAllAndroidClasses.classList.remove('md');
        });

        /***Implement iOS  style***/
        const grabAllIosClasses = document.querySelectorAll(iosClasses);
        [].forEach.call(grabAllIosClasses, function(doAllIosClasses) {
            doAllIosClasses.classList.add('ios')
        });
    }
}
iPhone();