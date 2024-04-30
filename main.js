        $(document).ready(function() {
            const container = $('.image-list-container');
            const imageList = $('.image-list');
            const imageWidth = imageList.children().outerWidth();

            let currentPosition = 0;
            let dragging = false;

            const scroll = (distance) => {
                currentPosition += distance;
                imageList.css('transform', `translateX(${currentPosition}px)`);
            };

            const stopScroll = () => {
                dragging = false;
            };

            const onMouseDown = (event) => {
                dragging = true;
                currentPosition = imageList.position().left;
                imageList.css('transition', 'none');
            };

            const onMouseMove = (event) => {
                if (!dragging) return;
                const distance = event.clientX - (window.innerWidth - imageWidth) / 2;
                scroll(distance - currentPosition);
            };

            const onMouseUp = () => {
                stopScroll();
                imageList.css('transition', '');
            };

            container.on('mousedown', onMouseDown);
            container.on('mousemove', onMouseMove);
            container.on('mouseup', onMouseUp);
            $(document).on('mouseup', onMouseUp);
        });