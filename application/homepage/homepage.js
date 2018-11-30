document.getElementById('shop_bag').addEventListener("click", function () {
    if ($('#hs').hasClass('shop_submenu_hide')) {
        $('#hs').removeClass('shop_submenu_hide').addClass('shop_submenu');
    } else {
        $('#hs').removeClass('shop_submenu').addClass('shop_submenu_hide');
    }
});
