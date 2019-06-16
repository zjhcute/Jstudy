pageEngine.init('.wrapper', ['#f8ef00', '#00000F', '#f8ef02'])
    .addSection('sectionOne')
        .addComponent({
            type: 'base',
            css: {
                width: '100%',
                height: '100%',
                opacity: 1,
                position: 'absolute',
            },
            background: 'url("./src/img/cp1.jpg")',
        })
        .addComponent({
            type: 'base',
            css: {
                width: '200',
                height: '80',
                opacity: 0,
                position: 'absolute',
                right: '0px',
                top: '400px',
                backgroundColor: '#ff003c',
                lineHeight: '80px',
                fontSize: '30px'
            },
            text: '即刻预约',
            animateIn: {
                opacity: 1,
                right: '200px'
            },
            animateOut: {
                opacity: 0,
                right: '0px'
            }
        })
    .addSection('sectionTwo')
        .addComponent({
            type: 'base',
            css: {
                width: '100%',
                height: '100%',
                opacity: 1,
                position: 'absolute',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
            },
            background: 'url("./src/img/cp2.jpg")',
        })
        .addComponent({
            type: 'base',
            css: {
                width: '300',
                height: '120',
                opacity: 0,
                position: 'absolute',
                right: '200px',
                top: '0px',
                backgroundColor: '#f8ef00',
                lineHeight: '120px',
                fontSize: '30px',
                color: '#000000',
                fontWeight: '800'
            },
            text: '你, 不再是自己',
            animateIn: {
                opacity: 1,
                top: '300px'
            },
            animateOut: {
                opacity: 0,
                top: '100%'
            }
        })
    .addSection('sectionThree')
        .addSlide('3-1')
        .addComponent({
            type: 'base',
            css: {
                width: '300',
                height: '120',
                opacity: 0,
                position: 'absolute',
                right: '200px',
                top: '0px',
                backgroundColor: '#000',
                lineHeight: '120px',
                fontSize: '30px',
                color: '#f8ef00',
                fontWeight: '800'
            },
            text: '你, 不再是自己',
            animateIn: {
                opacity: 1,
                top: '300px'
            },
            animateOut: {
                opacity: 0,
                top: '0px'
            }
        })
        .addSlide('3-2')
            .addComponent({
                type: 'base',
                css: {
                    width: '300',
                    height: '120',
                    opacity: 0,
                    position: 'absolute',
                    right: '200px',
                    top: '0px',
                    backgroundColor: '#000',
                    lineHeight: '120px',
                    fontSize: '30px',
                    color: '#f8ef00',
                    fontWeight: '800'
                },
                text: '¥289 即刻支付',
                animateIn: {
                    opacity: 1,
                    top: '300px'
                },
                animateOut: {
                    opacity: 0,
                    top: '0px'
                }
            })
        .load()