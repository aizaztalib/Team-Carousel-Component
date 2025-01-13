/* --------------------------------------------------
    * team carousel
    * --------------------------------------------------*/
var teamCarousel = function ($scope, $) {
    $scope.find('.xp-team-carousel').each( function () {
        var $this     = $(this),
            $loop     = $this.data('loop'),
            $auto     = $this.data('auto'),
            $time     = $this.data('time'),
            $dots     = $this.data('dots'),
            $nav      = $this.data('arrows'),
            $items    = $this.data('show') ? $this.data('show') : 3,
            $titems   = $this.data('tshow') ? $this.data('tshow') : 2,
            $mitems   = $this.data('mshow') ? $this.data('mshow') : 1,
            $gaps     = $this.data('gaps') !== '' ? $this.data('gaps') : 30,
            $tgaps    = $this.data('tgaps') !== '' ? $this.data('tgaps') : 30,
            $mgaps    = $this.data('mgaps') !== '' ? $this.data('mgaps') : 30,
            $selector = $this.find('.owl-carousel');
        $selector.owlCarousel({
            rtl: rtl_owl(),
            autoplay:$auto,
            autoplayTimeout: $time,
            loop:$loop,
            responsiveClass:true,
            dots:$dots,
            nav:$nav,
            navText:['<i class="xp-webicon-left-arrow-2"></i>', '<i class="xp-webicon-trajectory"></i>'],
            responsive : {
                0 : {
                    margin:$mgaps,
                    items:$mitems,
                },
                768 : {
                    margin:$tgaps,
                    items:$titems,
                },
                1024 : {
                    margin:$gaps,
                    items:$items,
                }
            }
        });
    });
};