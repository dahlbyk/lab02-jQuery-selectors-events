'use strict';

const filter = [];

function Image(image) {
    this.image_url = image.image_url;
    this.title = image.title;
    this.description = image.description;
    this.keyword = image.keyword;
    this.horns = image.horns;
    filter.push(this);
}

Image.prototype.render = function (container) {
    let $container = $(container);
    let $template = $container.find('#photo-template');
    let $image = $template.clone();
    $template.removeAttr('id');
    $image.find('h2.image-name').text(this.title);
    $image.find('img.image-display').attr('src', this.image_url);
    $image.find('p').text(this.description);
    $container.append($image);
    // makeMyMenu(this);
}

// function makeMyMenu(object) {
//     let $menu = $('.dropdown');
//     let $newOptions = $('.options');
//     let $createOptions = $newOptions.clone();
//     $createOptions.removeClass();
//     $createOptions.text(object.keyword);

//     if (keyword.every(function (element) {
//         return element !== object.keyword;
//     })) {
//         keyword.push(object.keyword);
//         $menu.append($createOptions);
//     }
// };


const ajaxSettings = {
    method: 'get',
    dataType: 'json'
};

$.ajax('../data/page-1.json', ajaxSettings).then(function (data) {
    data.forEach((image) => {
        let displayImage = new Image(image);
        displayImage.render('main');
    });
});