document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2, 
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,  
        autoplay: {  
            delay: 3000, 
            disableOnInteraction: false,  
        },
        centeredSlides: true, 
        loopAdditionalSlides: 1, 
        autoHeight: true,  
    });

    const botonConfirm = document.querySelector("#confirmPurchase");
    if (botonConfirm) {
        botonConfirm.addEventListener("click", () => {
            const totalCost = document.getElementById('totalCost').textContent;
            
            Swal.fire({
                title: "Su producto ya está en el carrito",
                text: `Total de la compra: $${totalCost}`,
                imageUrl: "https://cleverads.com/blog/wp-content/uploads/2019/11/sale_bears_gif.gif",
                confirmButtonText: "Seguir comprando"
            }).then((result) => {
            });
        });
    }

    document.querySelectorAll('.increase').forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                const input = button.previousElementSibling;
                input.value = parseInt(input.value) + 1;
                updateTotals();
            });
        }
    });

    document.querySelectorAll('.decrease').forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                const input = button.nextElementSibling;
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    updateTotals();
                }
            });
        }
    });

    function updateTotals() {
        let totalItems = 0;
        let totalCost = 0;

        document.querySelectorAll('.quantity').forEach(input => {
            const quantity = parseInt(input.value);
            const price = parseFloat(input.closest('.producto-item').querySelector('.price').textContent.replace('$', ''));
            totalItems += quantity;
            totalCost += quantity * price;
        });

        document.getElementById('totalItems').textContent = totalItems;
        document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    }

    function resetQuantities() {
        document.querySelectorAll('.quantity').forEach(input => {
            input.value = 0;
        });
        updateTotals();
    }
});

