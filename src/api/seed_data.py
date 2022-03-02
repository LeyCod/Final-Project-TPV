data = {
    "Company":[
        {
            "id": 1,
            "name": "Fake BD Company SL",
            "cif": "K2345678A"
        },
        {
            "id": 2,
            "name": "Seed Business SA",
            "cif": "X1234567A"
        },
        {
            "id": 3,
            "name": "Reactive Frontend Corp.",
            "cif": "B12345666"
        }
    ],
    "User":[
        {
            "id": 1,
            "company_id": 1,
            "is_admin": 1,
            "nif": "65748390A",
            "name": "Varg Vikernes",
            "email": "mytest@email.com",
            "password": "123456"
        },
        {
            "id": 2,
            "company_id": 1,
            "is_admin": 0,
            "nif": "89548378B",
            "name": "Johny Employee of the Month",
            "email": "johny@monthly.com",
            "password": "John10"
        },
        {
            "id": 3,
            "company_id": 1,
            "is_admin": 0,
            "nif": "89762717H",
            "name": "George Van duck",
            "email": "geor@gino.com",
            "password": "George66"
        },
        {
            "id": 4,
            "company_id": 2,
            "is_admin": 1,
            "nif": "95847367V",
            "name": "Jane Doe",
            "email": "doe@dot.com",
            "password": "4923746"
        },
        {
            "id": 5,
            "company_id": 3,
            "is_admin": 1,
            "nif": "54987651K",
            "name": "Abigail Blake",
            "email": "blake@abg.com",
            "password": "654321"
        }
    ],
    "OrderStatus":[
        {
            "id": 1,
            "name": "Pendiente"
        },
        {
            "id": 2,
            "name": "En espera"
        },
        {
            "id": 3,
            "name": "Pagado"
        },
        {
            "id": 4,
            "name": "Eliminado"
        }
    ],
    "PaymentMethod":[
        {
            "id": 1,
            "name": "Efectivo"
        },
        {
            "id": 2,
            "name": "Tarjeta"
        },
        {
            "id": 3,
            "name": "Bizum"
        },
        {
            "id": 4,
            "name": "Paypal"
        }
    ]
}