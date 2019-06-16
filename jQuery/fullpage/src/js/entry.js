// // 功能启动
// $('.wrapper').myFullPage({
//     colorsArray: ['#D496A7', '#FE938C', '#82AEB1'],
//     onLeave: function(index, direction) {
//         $('.section').eq(index).trigger('_leave');
//     },
//     afterLoad: function(index, direction) {
//         $('.section').eq(index).trigger('_load');        
//     },
// });

// // 给每一个section都加一个
// $('.section').each(function(index, ele) {
//     $(ele).append(ComponentFactory({
//         type: 'base',
//         className: 'zjh',
//         width: '600px',
//         height: '400px',
//         text: 'CyberPunk 2077',
//         center: true,
//         css: {
//             opacity: 0,
//             position: 'absolute',
//             backgroundColor: '#000',
//             color: '#fff'
//         },
//         animateIn: {
//             opacity: 1,
//             top: 400
//         },
//         animateOut: {
//             opacity: 0,
//             top: 0
//         } 
//     }));
// })
// // 自定义_leave事件
// $('.section').on('_leave', function() {
//     $(this).find('.component').trigger('cpLeave');
// })
// // 自定义_load事件
// $('.section').on('_load', function() {
//     $(this).find('.component').trigger('cpLoad');
// })

pageEngine.init('.wrapper', ['#D496A7', '#FE938C', '#82AEB1'])
    .addSection('sectionOne')
        .addComponent({
            type: 'base',
            className: 'zjh',
            width: '600px',
            height: '400px',
            text: 'CyberPunk 2077',
            center: true,
            css: {
                opacity: 0,
                position: 'absolute',
                backgroundColor: '#000',
                color: '#fff'
            },
            animateIn: {
                opacity: 1,
                top: 400
            },
            animateOut: {
                opacity: 0,
                top: 0
            } 
        })
    .addSection('sectionTwo')
        .addComponent({
            type: 'base',
            className: 'zjh',
            width: '600px',
            height: '400px',
            text: 'CyberPunk 2077',
            center: true,
            css: {
                opacity: 0,
                position: 'absolute',
                backgroundColor: '#000',
                color: '#fff'
            },
            animateIn: {
                opacity: 1,
                top: 400
            },
            animateOut: {
                opacity: 0,
                top: 0
            } 
        })
    .addSection('sectionThree')
        .addSlide('3-slide-1')
            .addComponent({
                type: 'base',
                className: 'zjh',
                width: '600px',
                height: '400px',
                text: 'CyberPunk 2077',
                center: true,
                css: {
                    opacity: 0,
                    position: 'absolute',
                    backgroundColor: '#000',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 400
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                } 
            })
        .addSlide('3-slide-2')
            .addComponent({
                type: 'base',
                className: 'zjh',
                width: '600px',
                height: '400px',
                text: 'CyberPunk 2077',
                center: true,
                css: {
                    opacity: 0,
                    position: 'absolute',
                    backgroundColor: '#000',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 400
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                } 
            })
        .addSlide('3-slide-3')
            .addComponent({
                type: 'base',
                className: 'zjh',
                width: '600px',
                height: '400px',
                text: 'CyberPunk 2077',
                center: true,
                css: {
                    opacity: 0,
                    position: 'absolute',
                    backgroundColor: '#000',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 400
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                } 
            })
            .load();