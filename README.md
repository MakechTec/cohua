# COHUA #

Significa comprar en lengua Nahuatl, también es un API que se expone como un objeto
que contiene una basta cantidad de métodos relacionados a un ecommerce.

Está pensado para trabajarse dentro de temas hechos en javascript, pues este objeto
puede ser llamado en cualquier parte.


default urls por el carrito:

    export const defaultUrls = {
        list: () => "/cart/list",
        clean: () => "/cart/clean",
        add: (item: CartItem) => `/cart/add/${item.id}`,
        remove: (item: CartItem) => `/cart/remove/${item.id}`,
        find: (id: number) => `/cart/find/${id}`,
        total: (attributeName: string) => `/cart/total/${attributeName}`,
        numberOfItems: () => "/cart/numberOfItems",
    }

Para stock:

