export const PRODUCT_CATEGORY = [
    {
        label: 'UI Kits',
        value: 'ui_kits' as const,
        featured:[
            {
                name:'Editor picks',
                href:'#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
               name:'New Arrivials',
               href:'#',
               imageSrc:'/nav/ui-kits/blue.jpg',

            },
            {
                name:'Best Sellers',
                href:'#',
                imageSrc:'/nav/ui-kits/purple.jpg',
 
             }
        ]
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        featured:[
            {
                name:'Favourite icon picks',
                href:'#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            },
            {
               name:'New Arrivials',
               href:'#',
               imageSrc:'/nav/icons/new.jpg',

            },
            {
                name:'Best Selling Icon',
                href:'#',
                imageSrc:'/nav/icons/picks.jpg',
 
             }
        ]
    }
]